import { SVGProps } from "react";
const LikesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="current"
    height="current"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="current"
      d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32 0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2ZM1 21h4V9H1v12Z"
    />
  </svg>
);
export default LikesIcon;
