import { ArrowBigDownDash } from "lucide-react";

export default function ArrowDown() {
  return (
    <svg width="100" height="100" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#aaa" />
          <stop offset="100%" stopColor="blue" />
        </linearGradient>
      </defs>
      <ArrowBigDownDash
        size={100}
        stroke="url(#gradientStroke)" // Apply gradient stroke correctly
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
