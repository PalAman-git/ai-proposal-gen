// components/ui/Button.tsx
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
};

export default function Button({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const base = 'rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring';

  const variants: Record<string, string> = {
    default: 'bg-[#8e8dfa] text-[#1a1a1a] hover:bg-[#a5a4fc]',
    outline: 'border border-[#8e8dfa] text-[#8e8dfa] hover:bg-[#2a2a2a]',
    ghost: 'text-[#e5e5e5] hover:bg-[#2a2a2a]',
    accent: 'bg-[#8e8dfa] text-white hover:bg-[#a5a4fc] focus:ring-[#8e8dfa]',

  };

  const sizes: Record<string, string> = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
