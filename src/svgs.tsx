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

export const SvgPlus = ({ width = '24', height = '24', fill = 'currentColor' }: SvgProps) => (
  <svg width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.402 45.402">
    <g>
      <path
        d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
      />
    </g>
  </svg>
);

export const SvgStethoscope = ({ width = '24', height = '24', fill = 'currentColor' }: SvgProps) => (
  <svg width={width} height={height} viewBox="0 0 30 27" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.41675 1.15488C7.70841 2.04082 7.23446 2.99531 6.36466 3.29063L5.00008 3.74941V10.125C5.00008 12.9199 7.23967 15.1875 10.0001 15.1875C12.7605 15.1875 15.0001 12.9199 15.0001 10.125V3.74941L13.6407 3.29063C12.7657 2.99531 12.297 2.04082 12.5886 1.15488C12.8803 0.268945 13.823 -0.205664 14.698 0.0896485L16.0574 0.548438C17.4167 1.00723 18.3334 2.29395 18.3334 3.74941V10.125C18.3334 14.1961 15.4897 17.5922 11.7032 18.3885C12.0313 21.3363 14.5001 23.625 17.5001 23.625C20.724 23.625 23.3334 20.983 23.3334 17.7188V13.9904C21.8595 13.3418 20.8334 11.8547 20.8334 10.125C20.8334 7.79414 22.698 5.90625 25.0001 5.90625C27.3022 5.90625 29.1667 7.79414 29.1667 10.125C29.1667 11.8547 28.1407 13.3418 26.6667 13.9904V17.7188C26.6667 22.8445 22.5626 27 17.5001 27C12.6615 27 8.70321 23.2084 8.35946 18.399C4.54175 17.6238 1.66675 14.2172 1.66675 10.125V3.74941C1.66675 2.29922 2.58341 1.00723 3.948 0.548438L5.30737 0.0896485C6.18237 -0.205664 7.12508 0.274219 7.41675 1.15488ZM25.0001 11.8125C25.4421 11.8125 25.866 11.6347 26.1786 11.3182C26.4912 11.0018 26.6667 10.5726 26.6667 10.125C26.6667 9.67745 26.4912 9.24823 26.1786 8.93176C25.866 8.61529 25.4421 8.4375 25.0001 8.4375C24.5581 8.4375 24.1341 8.61529 23.8216 8.93176C23.509 9.24823 23.3334 9.67745 23.3334 10.125C23.3334 10.5726 23.509 11.0018 23.8216 11.3182C24.1341 11.6347 24.5581 11.8125 25.0001 11.8125Z"
      fill={fill}
    />
  </svg>
);
