
const AllSvg = ({
  type,
  color,
  size,
  x,
  y,
}: {
  type: string;
  color?: string;
  size?: string;
  x?: string;
  y?: string;
}) => {
  switch (type) {
    case "CalexisLogo":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={ x ||  size || "40"}
          height={y || size || "40"}
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M6.2128 7.578C7.85919 9.225 8.78411 11.4585 8.78411 13.7873C8.78411 16.1161 7.85919 18.3496 6.2128 19.9966L0 26.2024L6.2128 32.4152L18.6383 19.9966L6.2128 7.578Z"
            fill="url(#paint0_radial_619_16115)"
          />
          <path
            d="M27.5743 26.2163L33.7872 32.4221C32.1407 30.7751 31.2158 28.5417 31.2158 26.2128C31.2158 23.884 32.1407 21.6506 33.7872 20.0036L40 13.7908L33.7872 7.578L21.3686 20.0036L27.5743 26.2163Z"
            fill="url(#paint1_radial_619_16115)"
          />
          <path
            d="M7.57834 33.7871C9.22533 32.1407 11.4588 31.2158 13.7876 31.2158C16.1164 31.2158 18.3499 32.1407 19.9969 33.7871L26.2027 40L32.4155 33.7871L19.9969 21.3685L7.57834 33.7871Z"
            fill="url(#paint2_radial_619_16115)"
          />
          <path
            d="M32.4225 6.21281C30.7754 7.85921 28.5419 8.78412 26.2131 8.78412C23.8843 8.78412 21.6509 7.85921 20.0038 6.21281L13.7911 0L7.57834 6.21281L20.0038 18.6384L32.4225 6.21281Z"
            fill="url(#paint3_radial_619_16115)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_619_16115"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(20 20 -20.354 19.6522 20 20)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0480769" stop-opacity="0.8" />
              <stop offset="0.403846" stop-color="#3C82F6" />
              <stop offset="1" stop-color="#DAE8FE" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_619_16115"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(20 20 -20.354 19.6522 20 20)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0480769" stop-opacity="0.8" />
              <stop offset="0.403846" stop-color="#3C82F6" />
              <stop offset="1" stop-color="#DAE8FE" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_619_16115"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(20 20 -20.354 19.6522 20 20)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0480769" stop-opacity="0.8" />
              <stop offset="0.403846" stop-color="#3C82F6" />
              <stop offset="1" stop-color="#DAE8FE" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_619_16115"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(20 20 -20.354 19.6522 20 20)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0480769" stop-opacity="0.8" />
              <stop offset="0.403846" stop-color="#3C82F6" />
              <stop offset="1" stop-color="#DAE8FE" />
            </radialGradient>
          </defs>
        </svg>
      );

      default:
        return null;
  }
};

export default AllSvg;
