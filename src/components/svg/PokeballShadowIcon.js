const PokeballShadowIcon = ({ color = "#b2b2b2", ...props }) => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 360 360"
    >
      <path
        stroke="none"
        d="M1.032 180h0C1.032 81.159 81.159 1.032 180 1.032h0A178.97 178.97 0 0 1 358.968 180h0c0 98.841-80.127 178.968-178.968 178.968h0C81.159 358.968 1.032 278.841 1.032 180zm89.484 0h0c0 49.421 40.063 89.484 89.484 89.484s89.484-40.063 89.484-89.484S229.421 90.516 180 90.516h0c-49.421 0-89.484 40.063-89.484 89.484z"
        fillOpacity="NaN"
      />
      <circle
        stroke={color}
        cy="180"
        cx="180"
        fillOpacity="NaN"
        strokeOpacity="NaN"
        strokeDasharray="null"
        strokeWidth="null"
        r="45.308"
      />
    </svg>
  </div>
);

export default PokeballShadowIcon;
