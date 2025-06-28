import { useRef, useMemo,useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null!);

  const mouse = useRef({ x: 0, y: 0 });

  // Handle mouse movement globally
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate particle rotation
  useFrame(() => {
    if (particlesRef.current) {
      // Apply smooth LERP for rotation
      particlesRef.current.rotation.y = THREE.MathUtils.lerp(
        particlesRef.current.rotation.y,
        mouse.current.x * 0.5, // dampened rotation strength
        0.05 // damping factor (lower = smoother)
      );
  
      particlesRef.current.rotation.x = THREE.MathUtils.lerp(
        particlesRef.current.rotation.x,
        mouse.current.y * 0.5,
        0.05
      );
    }
  });

  const count = 1000;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, [count]);

  const positionAttr = useMemo(
    () => new THREE.BufferAttribute(positions, 3),
    [positions]
  );
  // Mouse move effect
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <primitive attach="attributes-position" object={positionAttr} />
      </bufferGeometry>
      <pointsMaterial
        color="#8e8dfa"
        size={0.18}                  // Increase particle size
        sizeAttenuation
        depthWrite={false}
        transparent
        opacity={0.65}               // Increase visibility
        alphaTest={0.01}
        map={getCircleTexture()}
        blending={THREE.AdditiveBlending} // Makes them glow softly
      />
    </points>
  );
};

export default Particles;

// Generates a circular texture for soft round particles
function getCircleTexture(): THREE.Texture {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;

  const ctx = canvas.getContext('2d')!;
  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  gradient.addColorStop(0, 'white');
  gradient.addColorStop(1, 'transparent');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  return texture;
}
