import type { SVGProps } from "react";

const Redux = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} preserveAspectRatio="xMidYMid" viewBox="0 0 256 244">
    <g
      fill="none"
      stroke="#764ABC"
      strokeWidth="13"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M166 150c-14 36-44 60-84 68-30 6-56-4-64-26" />
      <path d="M164 120c4-42-24-90-72-92-28-1-48 10-56 26" />
      <path d="M72 82c-30 30-40 70-16 104 12 17 34 26 62 24 48-4 92-40 112-96" />
    </g>
    <g fill="#764ABC">
      <circle cx="176" cy="136" r="19" />
      <circle cx="30" cy="196" r="19" />
      <circle cx="40" cy="48" r="19" />
    </g>
  </svg>
);

export { Redux };
