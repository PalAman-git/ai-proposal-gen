// components/Logo.tsx
import React from "react"

const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 232 232"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="116" cy="116" r="107" stroke="#FFFAFA" strokeWidth="18" />
    <circle cx="116" cy="116" r="107" stroke="#FFFCFC" strokeOpacity="0.2" strokeWidth="18" />
    <circle cx="116" cy="116" r="107" stroke="#FFFAFA" strokeOpacity="0.2" strokeWidth="18" />
    <circle cx="116" cy="116" r="107" stroke="#FDF7F7" strokeOpacity="0.2" strokeWidth="18" />
    <circle cx="116" cy="116" r="107" stroke="#E5E5E5" strokeWidth="18" />
    <circle cx="116" cy="116" r="107" stroke="#E5E5E5" strokeOpacity="0.2" strokeWidth="18" />
    <path d="M116 223L217 83" stroke="#E5E5E5" strokeWidth="11" />
    <path d="M14 153L116 16" stroke="#E5E5E5" strokeWidth="11" />
    <path d="M116 16V223" stroke="#E5E5E5" strokeWidth="11" />
  </svg>
)

export default Logo
