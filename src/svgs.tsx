type SvgProps = {
  width?: string;
  height?: string;
  fill?: string;
};

export const SvgChevronLeft = ({ width = '24', height = '24', fill = 'currentColor' }: SvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} viewBox="0 0 16 16">
    <path
      fillRule="evenodd"
      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
    />
  </svg>
);

export const SvgChevronDown = ({ width = '24', height = '24', fill = 'currentColor' }: SvgProps) => (
  <svg width={width} height={height} fill={fill} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" />
  </svg>
);
