export default function AbleLogo({ color = "#000", ...props }) {
  return (
    <svg
      width={721}
      height={257}
      viewBox="0 0 721 257"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0)" fill={color}>
        <path d="M475.159.665h41.416v252.068h-41.416V.665zM21.427 199.079L.51 252.733h43.95l20.169-53.654h-43.2zM35.335 163.434h42.973l18.805-49.87-21.168-54.268-40.61 104.138zM358.783 66.557c-23.066 0-40.849 8.908-53.404 24.6V.665h-40.167v252.068h40.155v-21.032c12.499 15.487 30.043 24.645 53.405 24.645 48.972 0 83.549-38.905 83.549-94.707 0-55.802-34.202-95.082-83.538-95.082zm-5.818 154.531c-28.281 0-47.598-24.486-47.598-59.404 0-35.303 19.317-59.778 47.598-59.778 28.645 0 47.962 24.475 47.962 59.778 0 34.872-19.317 59.359-47.962 59.359v.045zM638.223 66.557c-51.87 0-89.31 39.61-89.31 96.15 0 57.256 38.633 93.628 87.322 93.639 43.768 0 71.425-23.077 81.163-60.994h-37.724c-6.443 17.544-21.18 26.884-43.519 27.065-25.645-.363-45.575-18.259-47.28-49.995h131.443c5.738-56.143-25.214-105.865-82.095-105.865zm-47.905 76.345c2.523-26.645 21.964-43.928 47.178-43.928 24.839 0 42.132 17.635 44.655 43.928h-91.833zM98.682 3.04l97.377 249.693h44.689L143.359 3.04H98.682z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path
            fill="#fff"
            transform="translate(.509 .665)"
            d="M0 0H720.491V255.67H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}