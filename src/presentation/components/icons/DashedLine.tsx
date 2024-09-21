export const DashedLine = () => {
  return (
    <svg
      width={32}
      height={24}
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1={1}
        y1="11.5"
        x2={31}
        y2="11.5"
        stroke="#4F4FFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2 8"
      />
    </svg>
  );
};
