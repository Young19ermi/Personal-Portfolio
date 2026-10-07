import type { SVGProps } from "react";

const Threejs = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="14"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <path d="M128 22 36 234h184z" />
      <path d="M82 128h92l-46 106z" />
      <path d="M128 22v106" />
    </g>
  </svg>
);

export { Threejs };
