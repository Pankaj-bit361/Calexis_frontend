export const DataScraperSVG = ({
  isActive,
  isCompleted,
  className,
}: {
  isActive: boolean;
  isCompleted: boolean;
  className?: string;
}) => {
  const opacity = isActive || isCompleted ? 1 : 0.3;
  const filter = isActive
    ? "drop-shadow(0 0 8px rgba(96, 165, 250, 0.8))"
    : "none";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="29"
      viewBox="0 0 36 29"
      fill="none"
      style={{
        opacity,
        filter,
        transition: "all 0.5s ease",
        position: "relative",
        zIndex: "10",
      }}
      className={`w-[20px] h-[20px] md:w-[31px] md:h-[31px] ${className}`}
    >
      <foreignObject x="-12.2266" y="-12.1226" width="60.6212" height="50.5079">
        <div
        // xmlns="http://www.w3.org/1999/xhtml"
        // style="backdrop-filter:blur(6.34px);clip-path:url(#bgblur_0_619_21347_clip_path);height:100%;width:100%"
        ></div>
      </foreignObject>
      <g filter="url(#filter0_i_619_21347)" data-figma-bg-blur-radius="12.6837">
        <path
          d="M31.8836 0.561035H4.28272C2.16985 0.561035 0.457031 2.26811 0.457031 4.37388V21.8886C0.457031 23.9944 2.16985 25.7015 4.28272 25.7015H31.8836C33.9965 25.7015 35.7093 23.9944 35.7093 21.8886V4.37388C35.7093 2.26811 33.9965 0.561035 31.8836 0.561035Z"
          fill="#DAE8FE"
        />
        <path
          d="M4.2832 0.95166H31.8838C33.7822 0.951761 35.3191 2.48475 35.3193 4.37354V21.8882C35.3193 23.7771 33.7823 25.3109 31.8838 25.311H4.2832C2.38463 25.311 0.847656 23.7772 0.847656 21.8882V4.37354C0.847845 2.48469 2.38475 0.95166 4.2832 0.95166Z"
          stroke="url(#paint0_linear_619_21347)"
          stroke-opacity="0.1"
          stroke-width="0.780533"
        />
      </g>
      <foreignObject x="-12.1868" y="-11.2366" width="50.1353" height="54.7007">
        <div
        // xmlns="http://www.w3.org/1999/xhtml"
        // style="backdrop-filter:blur(11.53px);clip-path:url(#bgblur_1_619_21347_clip_path);height:100%;width:100%"
        ></div>
      </foreignObject>
      <g filter="url(#filter1_d_619_21347)" data-figma-bg-blur-radius="23.0501">
        <path
          d="M13.2915 11.8135H12.4704C11.5828 11.8135 10.8633 12.5306 10.8633 13.4152V18.8124C10.8633 19.697 11.5828 20.4141 12.4704 20.4141H13.2915C14.1791 20.4141 14.8986 19.697 14.8986 18.8124V13.4152C14.8986 12.5306 14.1791 11.8135 13.2915 11.8135Z"
          fill="#EFF5FF"
        />
        <path
          d="M12.4707 11.9668H13.291C14.0942 11.9668 14.745 12.6159 14.7451 13.415V18.8125C14.7451 19.6117 14.0942 20.2607 13.291 20.2607H12.4707C11.6675 20.2607 11.0167 19.6117 11.0166 18.8125V13.415C11.0167 12.6159 11.6675 11.9668 12.4707 11.9668Z"
          stroke="url(#paint1_linear_619_21347)"
          stroke-opacity="0.5"
          stroke-width="0.307334"
        />
      </g>
      <foreignObject x="-6.52662" y="-14.6838" width="50.1353" height="58.1655">
        <div
        // xmlns="http://www.w3.org/1999/xhtml"
        // style="backdrop-filter:blur(11.53px);clip-path:url(#bgblur_2_619_21347_clip_path);height:100%;width:100%"
        ></div>
      </foreignObject>
      <g filter="url(#filter2_d_619_21347)" data-figma-bg-blur-radius="23.0501">
        <path
          d="M18.9516 8.36621H18.1306C17.243 8.36621 16.5234 9.08334 16.5234 9.96795V18.8298C16.5234 19.7144 17.243 20.4315 18.1306 20.4315H18.9516C19.8392 20.4315 20.5588 19.7144 20.5588 18.8298V9.96795C20.5588 9.08334 19.8392 8.36621 18.9516 8.36621Z"
          fill="#EFF5FF"
        />
        <path
          d="M18.1309 8.51953H18.9512C19.7543 8.51953 20.4052 9.16859 20.4053 9.96777V18.8301C20.4051 19.6292 19.7543 20.2783 18.9512 20.2783H18.1309C17.3277 20.2783 16.6769 19.6292 16.6768 18.8301V9.96777C16.6769 9.16859 17.3277 8.51953 18.1309 8.51953Z"
          stroke="url(#paint2_linear_619_21347)"
          stroke-opacity="0.5"
          stroke-width="0.307334"
        />
      </g>
      <foreignObject
        x="-0.882088"
        y="-12.8557"
        width="50.1353"
        height="56.3374"
      >
        <div
        // xmlns="http://www.w3.org/1999/xhtml"
        // style="backdrop-filter:blur(11.53px);clip-path:url(#bgblur_3_619_21347_clip_path);height:100%;width:100%"
        ></div>
      </foreignObject>
      <g filter="url(#filter3_d_619_21347)" data-figma-bg-blur-radius="23.0501">
        <path
          d="M24.5961 10.1943H23.7751C22.8875 10.1943 22.168 10.9115 22.168 11.7961V18.8298C22.168 19.7144 22.8875 20.4316 23.7751 20.4316H24.5961C25.4837 20.4316 26.2033 19.7144 26.2033 18.8298V11.7961C26.2033 10.9115 25.4837 10.1943 24.5961 10.1943Z"
          fill="#EFF5FF"
        />
        <path
          d="M23.7754 10.3477H24.5957C25.3989 10.3477 26.0497 10.9967 26.0498 11.7959V18.8301C26.0497 19.6292 25.3988 20.2783 24.5957 20.2783H23.7754C22.9723 20.2783 22.3214 19.6292 22.3213 18.8301V11.7959C22.3214 10.9967 22.9722 10.3477 23.7754 10.3477Z"
          stroke="url(#paint3_linear_619_21347)"
          stroke-opacity="0.5"
          stroke-width="0.307334"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_619_21347"
          x="-12.2266"
          y="-12.1226"
          width="60.6212"
          height="50.5079"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.11394" />
          <feGaussianBlur stdDeviation="4.22789" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_619_21347"
          />
        </filter>
        <clipPath
          id="bgblur_0_619_21347_clip_path"
          transform="translate(12.2266 12.1226)"
        >
          <path d="M31.8836 0.561035H4.28272C2.16985 0.561035 0.457031 2.26811 0.457031 4.37388V21.8886C0.457031 23.9944 2.16985 25.7015 4.28272 25.7015H31.8836C33.9965 25.7015 35.7093 23.9944 35.7093 21.8886V4.37388C35.7093 2.26811 33.9965 0.561035 31.8836 0.561035Z" />
        </clipPath>
        <filter
          id="filter1_d_619_21347"
          x="-12.1868"
          y="-11.2366"
          width="50.1353"
          height="54.7007"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.95133" />
          <feGaussianBlur stdDeviation="3.25222" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.15375 0 0 0 0 0.522433 0 0 0 0 0.9 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_619_21347"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_619_21347"
            result="shape"
          />
        </filter>
        <clipPath
          id="bgblur_1_619_21347_clip_path"
          transform="translate(12.1868 11.2366)"
        >
          <path d="M13.2915 11.8135H12.4704C11.5828 11.8135 10.8633 12.5306 10.8633 13.4152V18.8124C10.8633 19.697 11.5828 20.4141 12.4704 20.4141H13.2915C14.1791 20.4141 14.8986 19.697 14.8986 18.8124V13.4152C14.8986 12.5306 14.1791 11.8135 13.2915 11.8135Z" />
        </clipPath>
        <filter
          id="filter2_d_619_21347"
          x="-6.52662"
          y="-14.6838"
          width="50.1353"
          height="58.1655"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.95133" />
          <feGaussianBlur stdDeviation="3.25222" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.15375 0 0 0 0 0.522433 0 0 0 0 0.9 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_619_21347"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_619_21347"
            result="shape"
          />
        </filter>
        <clipPath
          id="bgblur_2_619_21347_clip_path"
          transform="translate(6.52662 14.6838)"
        >
          <path d="M18.9516 8.36621H18.1306C17.243 8.36621 16.5234 9.08334 16.5234 9.96795V18.8298C16.5234 19.7144 17.243 20.4315 18.1306 20.4315H18.9516C19.8392 20.4315 20.5588 19.7144 20.5588 18.8298V9.96795C20.5588 9.08334 19.8392 8.36621 18.9516 8.36621Z" />
        </clipPath>
        <filter
          id="filter3_d_619_21347"
          x="-0.882088"
          y="-12.8557"
          width="50.1353"
          height="56.3374"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.95133" />
          <feGaussianBlur stdDeviation="3.25222" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.15375 0 0 0 0 0.522433 0 0 0 0 0.9 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_619_21347"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_619_21347"
            result="shape"
          />
        </filter>
        <clipPath
          id="bgblur_3_619_21347_clip_path"
          transform="translate(0.882088 12.8557)"
        >
          <path d="M24.5961 10.1943H23.7751C22.8875 10.1943 22.168 10.9115 22.168 11.7961V18.8298C22.168 19.7144 22.8875 20.4316 23.7751 20.4316H24.5961C25.4837 20.4316 26.2033 19.7144 26.2033 18.8298V11.7961C26.2033 10.9115 25.4837 10.1943 24.5961 10.1943Z" />
        </clipPath>
        <linearGradient
          id="paint0_linear_619_21347"
          x1="1.55866"
          y1="1.70378"
          x2="35.7093"
          y2="1.70378"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7FFBE5" />
          <stop offset="1" stop-color="#84BEFA" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_619_21347"
          x1="11.298"
          y1="14.6986"
          x2="14.7246"
          y2="14.7075"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_619_21347"
          x1="16.9581"
          y1="12.4135"
          x2="20.3848"
          y2="12.4199"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_619_21347"
          x1="22.6027"
          y1="13.6284"
          x2="26.0293"
          y2="13.6359"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const CleaningEngineSVG = ({
  isActive,
  isCompleted,
  className,
}: {
  isActive: boolean;
  isCompleted: boolean;
  className?: string;
}) => {
  const opacity = isActive || isCompleted ? 1 : 0.3;
  const filter = isActive
    ? "drop-shadow(0 0 8px rgba(96, 165, 250, 0.8))"
    : "none";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      style={{ opacity, filter, transition: "all 0.5s ease", marginTop: "5px" }}
            className={`w-[20px] h-[20px] md:w-[31px] md:h-[31px] ${className}`}

    >
      <g filter="url(#filter0_d_619_21366)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.39862 0.162598C6.06629 0.162598 5.79688 0.432008 5.79688 0.764343V2.56958C5.79688 2.90191 6.06629 3.17132 6.39862 3.17132H24.451C24.7833 3.17132 25.0527 2.90191 25.0527 2.56958V0.764343C25.0527 0.432008 24.7833 0.162598 24.451 0.162598H6.39862ZM6.88457 4.37482H23.9935C24.4605 4.37482 24.7495 4.88354 24.5104 5.28465L18.3465 15.6262C18.291 15.7193 18.2616 15.8258 18.2616 15.9342V20.2338C18.2616 20.4701 18.1233 20.6845 17.908 20.782L13.7925 22.6444C13.3942 22.8246 12.9426 22.5333 12.9426 22.0961V15.9416C12.9426 15.8285 12.9108 15.7177 12.8507 15.6219L6.37479 5.29628C6.12345 4.89552 6.41152 4.37482 6.88457 4.37482Z"
          fill="#DAE8FE"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_619_21366"
          x="0.593323"
          y="0.162598"
          width="29.661"
          height="32.9432"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5.20355" />
          <feGaussianBlur stdDeviation="2.60178" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_619_21366"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_619_21366"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const SmartChunkingSVG = ({
  isActive,
  isCompleted,
  className,
}: {
  isActive: boolean;
  isCompleted: boolean;
  className?: string;
}) => {
  const opacity = isActive || isCompleted ? 1 : 0.3;
  const filter = isActive
    ? "drop-shadow(0 0 8px rgba(96, 165, 250, 0.8))"
    : "none";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      style={{ opacity, filter, transition: "all 0.5s ease" }}
      className={`w-[20px] h-[20px] md:w-[31px] md:h-[31px] ${className}`}

    >
      <g clip-path="url(#clip0_619_21386)">
        <path
          d="M11.7276 25.8569H1.96566C1.69816 25.8569 1.43388 25.799 1.19121 25.6873C0.948537 25.5756 0.733313 25.4128 0.560523 25.2101C0.387732 25.0074 0.261544 24.7698 0.190712 24.5138C0.11988 24.2578 0.106108 23.9896 0.150384 23.7277L1.14054 17.8569C1.2126 17.4308 1.4345 17.0439 1.76684 16.7648C2.09919 16.4857 2.52045 16.3326 2.95581 16.3326H10.7501C11.1862 16.33 11.6088 16.4822 11.9416 16.7618C12.2745 17.0413 12.4957 17.4297 12.5654 17.8569L13.5555 23.7277C13.6 23.9906 13.586 24.26 13.5144 24.5169C13.4428 24.7738 13.3155 25.012 13.1413 25.2149C12.9671 25.4178 12.7503 25.5804 12.5061 25.6913C12.2619 25.8022 11.9961 25.8587 11.7276 25.8569Z"
          fill="url(#paint0_linear_619_21386)"
        />
        <foreignObject
          x="-7.71013"
          y="7.22884"
          width="30.3929"
          height="26.9886"
        ></foreignObject>
        <g
          filter="url(#filter0_i_619_21386)"
          data-figma-bg-blur-radius="9.11638"
        >
          <path
            d="M1.40625 17.1893L13.2119 25.1011C13.3573 24.906 13.4614 24.6838 13.5181 24.4479C13.5748 24.2119 13.583 23.967 13.542 23.7278L12.5518 17.857C12.4798 17.4343 12.2593 17.0505 11.9293 16.7738C11.5993 16.497 11.1812 16.3452 10.7492 16.3452H2.96762C2.65671 16.3436 2.35045 16.4202 2.07742 16.5678C1.80438 16.7154 1.5735 16.9292 1.40625 17.1893Z"
            fill="#DAE8FE"
          />
        </g>
        <path
          d="M28.1924 25.8569H18.4305C18.163 25.8569 17.8987 25.799 17.6561 25.6873C17.4134 25.5756 17.1982 25.4128 17.0254 25.2101C16.8526 25.0074 16.7264 24.7698 16.6556 24.5138C16.5847 24.2578 16.571 23.9896 16.6152 23.7277L17.6054 17.8569C17.6774 17.4308 17.8993 17.0439 18.2317 16.7648C18.564 16.4857 18.9853 16.3326 19.4207 16.3326H27.253C27.6891 16.33 28.1117 16.4822 28.4446 16.7618C28.7774 17.0413 28.9987 17.4297 29.0683 17.8569L30.0585 23.7277C30.1036 23.9938 30.0887 24.2665 30.015 24.5262C29.9413 24.7859 29.8106 25.0261 29.6321 25.2297C29.4537 25.4332 29.2321 25.5951 28.9831 25.7035C28.7342 25.8119 28.4642 25.8643 28.1924 25.8569Z"
          fill="url(#paint1_linear_619_21386)"
        />
        <foreignObject
          x="8.75471"
          y="7.22786"
          width="30.3929"
          height="26.9891"
        ></foreignObject>
        <g
          filter="url(#filter1_i_619_21386)"
          data-figma-bg-blur-radius="9.11638"
        >
          <path
            d="M17.8711 17.1889L29.6768 25.1007C29.8221 24.9056 29.9263 24.6835 29.983 24.4475C30.0397 24.2115 30.0478 23.9666 30.0069 23.7275L29.0167 17.8566C28.9459 17.4402 28.7309 17.0614 28.4088 16.7854C28.0867 16.5094 27.6776 16.3536 27.2522 16.3448H19.4706C19.1533 16.3367 18.8392 16.4102 18.559 16.5581C18.2787 16.706 18.0417 16.9233 17.8711 17.1889Z"
            fill="#DAE8FE"
          />
        </g>
        <path
          d="M19.7393 13.8256H9.97741C9.70991 13.8256 9.4456 13.7677 9.20293 13.656C8.96026 13.5443 8.74503 13.3815 8.57224 13.1788C8.39945 12.9761 8.27326 12.7385 8.20243 12.4825C8.1316 12.2265 8.11783 11.9583 8.1621 11.6965L9.15225 5.82565C9.22431 5.39955 9.44626 5.0126 9.7786 4.73351C10.1109 4.45442 10.5322 4.30127 10.9676 4.30127H18.7491C19.1845 4.30127 19.6057 4.45442 19.9381 4.73351C20.2704 5.0126 20.4924 5.39955 20.5644 5.82565L21.5546 11.6965C21.5989 11.9583 21.5851 12.2265 21.5143 12.4825C21.4434 12.7385 21.3172 12.9761 21.1445 13.1788C20.9717 13.3815 20.7564 13.5443 20.5138 13.656C20.2711 13.7677 20.0068 13.8256 19.7393 13.8256Z"
          fill="url(#paint2_linear_619_21386)"
        />
        <foreignObject
          x="0.36409"
          y="-4.76482"
          width="30.3929"
          height="27.0013"
        ></foreignObject>
        <g
          filter="url(#filter2_i_619_21386)"
          data-figma-bg-blur-radius="9.11638"
        >
          <path
            d="M9.48047 5.20826L21.2735 13.12C21.4237 12.9273 21.5318 12.7057 21.5908 12.4693C21.6498 12.2328 21.6585 11.9867 21.6162 11.7468L20.626 5.87597C20.554 5.44986 20.3321 5.06289 19.9997 4.7838C19.6674 4.50471 19.2461 4.35156 18.8108 4.35156H11.0292C10.7192 4.3534 10.4148 4.43289 10.144 4.58265C9.87331 4.73241 9.64506 4.9476 9.48047 5.20826Z"
            fill="#DAE8FE"
          />
        </g>
        <path
          d="M27.1648 4.57306L25.5162 6.34462C25.4222 6.44256 25.3711 6.56398 25.3711 6.68909C25.3711 6.8142 25.4222 6.93562 25.5162 7.03356L27.1648 8.80513C27.2286 8.87402 27.3106 8.92983 27.4046 8.96824C27.4986 9.00665 27.602 9.02663 27.7068 9.02663C27.8117 9.02663 27.9151 9.00665 28.0091 8.96824C28.1031 8.92983 28.1851 8.87402 28.2489 8.80513L29.9123 7.03356C29.9994 6.93317 30.0462 6.81269 30.0462 6.68909C30.0462 6.56549 29.9994 6.44501 29.9123 6.34462L28.2489 4.57306C28.1851 4.50416 28.1031 4.44835 28.0091 4.40994C27.9151 4.37153 27.8117 4.35156 27.7068 4.35156C27.602 4.35156 27.4986 4.37153 27.4046 4.40994C27.3106 4.44835 27.2286 4.50416 27.1648 4.57306Z"
          fill="url(#paint3_linear_619_21386)"
        />
        <path
          d="M3.43103 9.20405L2.11219 10.6213C2.03701 10.6997 1.99609 10.7968 1.99609 10.8969C1.99609 10.997 2.03701 11.0941 2.11219 11.1725L3.43103 12.5897C3.48206 12.6448 3.54771 12.6895 3.62291 12.7202C3.69811 12.7509 3.78084 12.7669 3.86469 12.7669C3.94854 12.7669 4.03126 12.7509 4.10646 12.7202C4.18166 12.6895 4.24731 12.6448 4.29834 12.5897L5.62907 11.1725C5.6987 11.0921 5.73615 10.9958 5.73615 10.8969C5.73615 10.798 5.6987 10.7016 5.62907 10.6213L4.29834 9.20405C4.24731 9.14894 4.18166 9.10429 4.10646 9.07356C4.03126 9.04283 3.94854 9.02686 3.86469 9.02686C3.78084 9.02686 3.69811 9.04283 3.62291 9.07356C3.54771 9.10429 3.48206 9.14894 3.43103 9.20405Z"
          fill="url(#paint4_linear_619_21386)"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_619_21386"
          x="-7.71013"
          y="7.22884"
          width="30.3929"
          height="26.9886"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.5194" />
          <feGaussianBlur stdDeviation="3.03879" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_619_21386"
          />
        </filter>
        <clipPath
          id="bgblur_1_619_21386_clip_path"
          transform="translate(7.71013 -7.22884)"
        >
          <path d="M1.40625 17.1893L13.2119 25.1011C13.3573 24.906 13.4614 24.6838 13.5181 24.4479C13.5748 24.2119 13.583 23.967 13.542 23.7278L12.5518 17.857C12.4798 17.4343 12.2593 17.0505 11.9293 16.7738C11.5993 16.497 11.1812 16.3452 10.7492 16.3452H2.96762C2.65671 16.3436 2.35045 16.4202 2.07742 16.5678C1.80438 16.7154 1.5735 16.9292 1.40625 17.1893Z" />
        </clipPath>
        <filter
          id="filter1_i_619_21386"
          x="8.75471"
          y="7.22786"
          width="30.3929"
          height="26.9891"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.5194" />
          <feGaussianBlur stdDeviation="3.03879" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_619_21386"
          />
        </filter>
        <clipPath
          id="bgblur_2_619_21386_clip_path"
          transform="translate(-8.75471 -7.22786)"
        >
          <path d="M17.8711 17.1889L29.6768 25.1007C29.8221 24.9056 29.9263 24.6835 29.983 24.4475C30.0397 24.2115 30.0478 23.9666 30.0069 23.7275L29.0167 17.8566C28.9459 17.4402 28.7309 17.0614 28.4088 16.7854C28.0867 16.5094 27.6776 16.3536 27.2522 16.3448H19.4706C19.1533 16.3367 18.8392 16.4102 18.559 16.5581C18.2787 16.706 18.0417 16.9233 17.8711 17.1889Z" />
        </clipPath>
        <filter
          id="filter2_i_619_21386"
          x="0.36409"
          y="-4.76482"
          width="30.3929"
          height="27.0013"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.5194" />
          <feGaussianBlur stdDeviation="3.03879" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_619_21386"
          />
        </filter>
        <clipPath
          id="bgblur_3_619_21386_clip_path"
          transform="translate(-0.36409 4.76482)"
        >
          <path d="M9.48047 5.20826L21.2735 13.12C21.4237 12.9273 21.5318 12.7057 21.5908 12.4693C21.6498 12.2328 21.6585 11.9867 21.6162 11.7468L20.626 5.87597C20.554 5.44986 20.3321 5.06289 19.9997 4.7838C19.6674 4.50471 19.2461 4.35156 18.8108 4.35156H11.0292C10.7192 4.3534 10.4148 4.43289 10.144 4.58265C9.87331 4.73241 9.64506 4.9476 9.48047 5.20826Z" />
        </clipPath>
        <linearGradient
          id="paint0_linear_619_21386"
          x1="0.125"
          y1="16.3325"
          x2="8.84572"
          y2="29.093"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#DAE8FE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_619_21386"
          x1="16.5898"
          y1="16.3325"
          x2="25.3024"
          y2="29.1164"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#DAE8FE" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_619_21386"
          x1="8.13672"
          y1="4.30127"
          x2="16.8603"
          y2="17.0541"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#DAE8FE" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_619_21386"
          x1="25.3711"
          y1="4.35156"
          x2="29.9627"
          y2="9.10718"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#DAE8FE" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_619_21386"
          x1="1.99609"
          y1="9.02686"
          x2="5.66941"
          y2="12.8313"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#DAE8FE" />
        </linearGradient>
        <clipPath id="clip0_619_21386">
          <rect
            width="29.9204"
            height="29.9204"
            fill="white"
            transform="translate(0.125 0.561035)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const DatasetGenerationSVG = ({
  isActive,
  isCompleted,
  className,
}: {
  isActive: boolean;
  isCompleted: boolean;
  className?: string;
}) => {
  const opacity = isActive || isCompleted ? 1 : 0.3;
  const filter = isActive
    ? "drop-shadow(0 0 8px rgba(96, 165, 250, 0.8))"
    : "none";

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity, filter, transition: "all 0.5s ease" }}
      className={`w-[20px] h-[20px] md:w-[28px] md:h-[28px] ${className}`}
    >
      <path
        d="M25.8145 0.463867H2.00422C1.21014 0.463867 0.566406 1.11414 0.566406 1.91629V6.21548C0.566406 7.01763 1.21014 7.6679 2.00422 7.6679H25.8145C26.6085 7.6679 27.2523 7.01763 27.2523 6.21548V1.91629C27.2523 1.11414 26.6085 0.463867 25.8145 0.463867Z"
        fill="#DAE8FE"
      />
      <path
        d="M2.00391 0.666016H25.8145C26.4951 0.666016 27.0506 1.22345 27.0508 1.91602V6.21582C27.0506 6.90835 26.4951 7.46582 25.8145 7.46582H2.00391C1.32339 7.46565 0.768739 6.90824 0.768555 6.21582V1.91602C0.768703 1.22356 1.32336 0.666189 2.00391 0.666016Z"
        stroke="url(#paint0_linear_619_21416)"
        stroke-opacity="0.5"
        stroke-width="0.403374"
      />
      <path
        d="M25.8145 10.2695H2.00422C1.21014 10.2695 0.566406 10.9198 0.566406 11.722V16.0211C0.566406 16.8233 1.21014 17.4736 2.00422 17.4736H25.8145C26.6085 17.4736 27.2523 16.8233 27.2523 16.0211V11.722C27.2523 10.9198 26.6085 10.2695 25.8145 10.2695Z"
        fill="#DAE8FE"
      />
      <path
        d="M2.00391 10.4717H25.8145C26.4951 10.4717 27.0506 11.0291 27.0508 11.7217V16.0215C27.0506 16.714 26.4951 17.2715 25.8145 17.2715H2.00391C1.32339 17.2713 0.76874 16.7139 0.768555 16.0215V11.7217C0.768703 11.0292 1.32336 10.4719 2.00391 10.4717Z"
        stroke="url(#paint1_linear_619_21416)"
        stroke-opacity="0.5"
        stroke-width="0.403374"
      />
      <path
        d="M25.8145 20.0757H2.00422C1.21014 20.0757 0.566406 20.726 0.566406 21.5281V25.8273C0.566406 26.6294 1.21014 27.2797 2.00422 27.2797H25.8145C26.6085 27.2797 27.2523 26.6294 27.2523 25.8273V21.5281C27.2523 20.726 26.6085 20.0757 25.8145 20.0757Z"
        fill="#DAE8FE"
      />
      <path
        d="M2.00391 20.2778H25.8145C26.4951 20.2778 27.0506 20.8353 27.0508 21.5278V25.8276C27.0506 26.5202 26.4951 27.0776 25.8145 27.0776H2.00391C1.32339 27.0775 0.768739 26.5201 0.768555 25.8276V21.5278C0.768703 20.8354 1.32336 20.278 2.00391 20.2778Z"
        stroke="url(#paint2_linear_619_21416)"
        stroke-opacity="0.5"
        stroke-width="0.403374"
      />
      <defs>
        <linearGradient
          id="paint0_linear_619_21416"
          x1="3.44106"
          y1="2.88047"
          x2="26.0923"
          y2="3.34367"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_619_21416"
          x1="3.44106"
          y1="12.6861"
          x2="26.0923"
          y2="13.1493"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_619_21416"
          x1="3.44106"
          y1="22.4923"
          x2="26.0923"
          y2="22.9555"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const CouncilOfJudgesSVG = ({
  isActive,
  isCompleted,
  className,
}: {
  isActive: boolean;
  isCompleted: boolean;
  className?: string;
}) => {
  const opacity = isActive || isCompleted ? 1 : 0.3;
  const filter = isActive
    ? "drop-shadow(0 0 8px rgba(96, 165, 250, 0.8))"
    : "none";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="35"
      viewBox="0 0 36 35"
      fill="none"
      style={{ opacity, filter, transition: "all 0.5s ease" }}
      className={`w-[20px] h-[20px] md:w-[36px] md:h-[35px] ${className}`}
    >
      <g clip-path="url(#clip0_619_21437)">
        <path
          d="M12.0892 15.2815C12.114 15.1336 12.114 14.9827 12.0892 14.8348L7.8194 4.60956C7.75603 4.45066 7.65516 4.30858 7.52494 4.19481C7.41565 4.10075 7.2947 4.02038 7.16498 3.95554H6.96867H6.70696C6.6094 3.9406 6.51006 3.9406 6.4125 3.95554C6.4125 3.95554 6.29792 3.95554 6.24885 3.95554C6.10283 4.01608 5.9697 4.10262 5.85623 4.21076C5.7395 4.32294 5.6501 4.45921 5.59452 4.60956L1.34098 14.8348C1.30822 14.982 1.30822 15.1343 1.34098 15.2815C1.41765 16.6504 2.02932 17.9386 3.05022 18.8812C4.07113 19.8238 5.42373 20.3491 6.82968 20.3491C8.23563 20.3491 9.58813 19.8238 10.609 18.8812C11.6299 17.9386 12.2416 16.6504 12.3183 15.2815H12.0892ZM3.66411 15.2815L6.60881 8.23068L9.53713 15.2815H3.66411Z"
          fill="#DAE8FE"
        />
        <path
          d="M22.3154 29.4917L22.6221 30.9487H13.7549L14.0713 29.4917H22.3154Z"
          fill="#DAE8FE"
          stroke="#DAE8FE"
          stroke-width="2.64243"
        />
        <path
          d="M35.1108 19.2691C35.1421 19.1164 35.1421 18.9591 35.1108 18.8065L30.841 8.59712C30.7735 8.44503 30.673 8.30898 30.5465 8.19832C30.4429 8.11748 30.327 8.05291 30.2029 8.00691H30.0066H29.7448C29.6473 7.99196 29.5479 7.99196 29.4504 8.00691C29.3969 7.99184 29.3402 7.99184 29.2868 8.00691C29.1408 8.06744 29.0077 8.15401 28.8942 8.26214C28.7778 8.36831 28.6881 8.49934 28.6324 8.64498L24.3789 18.8543C24.3476 19.007 24.3476 19.1642 24.3789 19.3169C24.4556 20.6858 25.0673 21.974 26.0882 22.9166C27.1091 23.8592 28.4616 24.3845 29.8675 24.3845C31.2735 24.3845 32.626 23.8592 33.6469 22.9166C34.6678 21.974 35.2796 20.6858 35.3562 19.3169L35.1108 19.2691ZM26.6856 19.2691L29.6304 12.2182L32.5587 19.2691H26.6856Z"
          fill="#DAE8FE"
        />
        <foreignObject
          x="-7.25541"
          y="7.33785"
          width="28.1085"
          height="21.5279"
        ></foreignObject>
        <g
          filter="url(#filter0_i_619_21437)"
          data-figma-bg-blur-radius="7.92729"
        >
          <path
            d="M12.9252 15.2651C12.844 16.7962 12.1631 18.2384 11.023 19.2941C9.88294 20.3498 8.37076 20.9383 6.79852 20.9383C5.22629 20.9383 3.714 20.3498 2.57393 19.2941C1.43386 18.2384 0.753038 16.7962 0.671875 15.2651H12.9252Z"
            fill="#DAE8FE"
          />
          <path
            d="M12.6611 15.5093C12.5249 16.8797 11.8873 18.161 10.8574 19.1147C9.7631 20.1281 8.31031 20.6947 6.79883 20.6948C5.28723 20.6948 3.83365 20.1281 2.73926 19.1147C1.70945 18.161 1.07172 16.8796 0.935547 15.5093H12.6611Z"
            stroke="#DAE8FE"
            stroke-width="0.487833"
          />
        </g>
        <foreignObject
          x="15.6157"
          y="11.3418"
          width="28.1085"
          height="21.5279"
        ></foreignObject>
        <g
          filter="url(#filter1_i_619_21437)"
          data-figma-bg-blur-radius="7.92729"
        >
          <path
            d="M35.7963 19.269C35.7151 20.8001 35.0343 22.2423 33.8942 23.298C32.7541 24.3537 31.2419 24.9423 29.6696 24.9423C28.0974 24.9423 26.5852 24.3537 25.4451 23.298C24.3051 22.2423 23.6241 20.8001 23.543 19.269H35.7963Z"
            fill="#DAE8FE"
          />
          <path
            d="M35.5322 19.5132C35.396 20.8836 34.7584 22.1649 33.7285 23.1187C32.6342 24.132 31.1814 24.6987 29.6699 24.6987C28.1584 24.6987 26.7057 24.132 25.6113 23.1187C24.5813 22.1648 23.9428 20.8837 23.8066 19.5132H35.5322Z"
            stroke="#DAE8FE"
            stroke-width="0.487833"
          />
        </g>
        <foreignObject
          x="-2.38432"
          y="-4.20121"
          width="41.2296"
          height="22.3526"
        ></foreignObject>
        <g
          filter="url(#filter2_i_619_21437)"
          data-figma-bg-blur-radius="7.92729"
        >
          <path
            d="M29.892 7.8633L6.98859 3.74767C6.83054 3.71778 6.668 3.71893 6.51041 3.75105C6.35282 3.78318 6.2033 3.84563 6.07077 3.93475C5.93823 4.02388 5.82526 4.1379 5.73846 4.27012C5.65166 4.40234 5.59284 4.5501 5.56532 4.70478C5.53454 4.85986 5.53556 5.01935 5.56832 5.17405C5.60107 5.32874 5.66488 5.47557 5.75614 5.60607C5.84739 5.73658 5.96431 5.84819 6.10002 5.93443C6.23573 6.02068 6.38756 6.07985 6.54685 6.10857L29.4502 10.2242H29.6793C29.9885 10.2275 30.2877 10.1168 30.5168 9.91427C30.746 9.71173 30.8882 9.43228 30.915 9.13185C30.9419 8.83143 30.8515 8.53219 30.6618 8.29401C30.4721 8.05584 30.1971 7.89631 29.892 7.84733V7.8633Z"
            fill="#DAE8FE"
          />
          <path
            d="M6.55957 3.98975C6.68599 3.96404 6.81655 3.96381 6.94336 3.98779H6.94531L29.8486 8.10303L30.04 8.13721C30.2096 8.1993 30.359 8.30569 30.4707 8.4458C30.6217 8.63536 30.693 8.8726 30.6719 9.10986C30.6506 9.34725 30.5386 9.57007 30.3555 9.73193C30.1722 9.8939 29.9312 9.98264 29.6816 9.97998H29.4717L6.58984 5.86865C6.46157 5.8455 6.33925 5.79813 6.23047 5.729C6.12165 5.65984 6.02865 5.57012 5.95605 5.46631C5.88346 5.36248 5.83257 5.24598 5.80664 5.12354C5.78074 5.0012 5.78037 4.87508 5.80469 4.75244L5.80566 4.74756C5.82736 4.62558 5.87361 4.50857 5.94238 4.40381C6.01119 4.29904 6.10121 4.20837 6.20703 4.13721C6.31287 4.06605 6.43299 4.01555 6.55957 3.98975Z"
            stroke="#DAE8FE"
            stroke-width="0.487833"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_619_21437"
          x="-7.25541"
          y="7.33785"
          width="28.1085"
          height="21.5279"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.32121" />
          <feGaussianBlur stdDeviation="2.64243" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_619_21437"
          />
        </filter>
        <clipPath
          id="bgblur_1_619_21437_clip_path"
          transform="translate(7.25541 -7.33785)"
        >
          <path d="M12.9252 15.2651C12.844 16.7962 12.1631 18.2384 11.023 19.2941C9.88294 20.3498 8.37076 20.9383 6.79852 20.9383C5.22629 20.9383 3.714 20.3498 2.57393 19.2941C1.43386 18.2384 0.753038 16.7962 0.671875 15.2651H12.9252Z" />
        </clipPath>
        <filter
          id="filter1_i_619_21437"
          x="15.6157"
          y="11.3418"
          width="28.1085"
          height="21.5279"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.32121" />
          <feGaussianBlur stdDeviation="2.64243" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_619_21437"
          />
        </filter>
        <clipPath
          id="bgblur_2_619_21437_clip_path"
          transform="translate(-15.6157 -11.3418)"
        >
          <path d="M35.7963 19.269C35.7151 20.8001 35.0343 22.2423 33.8942 23.298C32.7541 24.3537 31.2419 24.9423 29.6696 24.9423C28.0974 24.9423 26.5852 24.3537 25.4451 23.298C24.3051 22.2423 23.6241 20.8001 23.543 19.269H35.7963Z" />
        </clipPath>
        <filter
          id="filter2_i_619_21437"
          x="-2.38432"
          y="-4.20121"
          width="41.2296"
          height="22.3526"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.32121" />
          <feGaussianBlur stdDeviation="2.64243" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_619_21437"
          />
        </filter>
        <clipPath
          id="bgblur_3_619_21437_clip_path"
          transform="translate(2.38432 4.20121)"
        >
          <path d="M29.892 7.8633L6.98859 3.74767C6.83054 3.71778 6.668 3.71893 6.51041 3.75105C6.35282 3.78318 6.2033 3.84563 6.07077 3.93475C5.93823 4.02388 5.82526 4.1379 5.73846 4.27012C5.65166 4.40234 5.59284 4.5501 5.56532 4.70478C5.53454 4.85986 5.53556 5.01935 5.56832 5.17405C5.60107 5.32874 5.66488 5.47557 5.75614 5.60607C5.84739 5.73658 5.96431 5.84819 6.10002 5.93443C6.23573 6.02068 6.38756 6.07985 6.54685 6.10857L29.4502 10.2242H29.6793C29.9885 10.2275 30.2877 10.1168 30.5168 9.91427C30.746 9.71173 30.8882 9.43228 30.915 9.13185C30.9419 8.83143 30.8515 8.53219 30.6618 8.29401C30.4721 8.05584 30.1971 7.89631 29.892 7.84733V7.8633Z" />
        </clipPath>
        <clipPath id="clip0_619_21437">
          <rect
            width="35.124"
            height="33.8231"
            fill="white"
            transform="translate(0.671875 0.561035)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const FineTuningModelsSVG = ({
  isActive,
  isCompleted,
  className,
}: {
  isActive: boolean;
  isCompleted: boolean;
  className?: string;
}) => {
  const opacity = isActive || isCompleted ? 1 : 0.3;
  const filter = isActive
    ? "drop-shadow(0 0 8px rgba(96, 165, 250, 0.8))"
    : "none";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="35"
      viewBox="0 0 46 35"
      fill="none"
      style={{ opacity, filter, transition: "all 0.5s ease" }}
      className={`w-[20px] h-[20px] md:w-[46px] md:h-[35px] ${className}`}
    >
      <foreignObject
        x="-7.91803"
        y="-4.22028"
        width="61.7931"
        height="51.3849"
      ></foreignObject>
      <g filter="url(#filter0_i_619_21456)" data-figma-bg-blur-radius="12.6837">
        <path
          d="M22.9132 8.46341H34.2233C34.5779 8.46344 34.927 8.54861 35.2395 8.71132C35.5519 8.87403 35.818 9.10923 36.014 9.39593L40.8397 16.5635C41.1154 16.9651 41.2346 17.4489 41.1759 17.9281C41.1171 18.4072 40.8843 18.8504 40.5192 19.1781L24.4212 33.9338C24.025 34.2859 23.5071 34.4811 22.9698 34.4811C22.4324 34.4811 21.9146 34.2859 21.5184 33.9338L5.4204 19.1781C5.06499 18.8446 4.83903 18.4024 4.78066 17.9261C4.72228 17.4498 4.83503 16.9685 5.09992 16.5635L9.9444 9.39593C10.1349 9.10832 10.3972 8.87205 10.707 8.70903C11.0167 8.54601 11.3639 8.46152 11.7163 8.46341H22.9132Z"
          fill="#DAE8FE"
        />
      </g>
      <path
        d="M39.7846 0.966367L37.491 3.43115C37.3602 3.56742 37.2891 3.73635 37.2891 3.91042C37.2891 4.08448 37.3602 4.25341 37.491 4.38968L39.7846 6.85447C39.8734 6.95032 39.9875 7.02796 40.1183 7.0814C40.2491 7.13484 40.393 7.16264 40.5388 7.16264C40.6846 7.16264 40.8285 7.13484 40.9593 7.0814C41.09 7.02796 41.2042 6.95032 41.293 6.85447L43.6073 4.38968C43.7284 4.25 43.7935 4.08238 43.7935 3.91042C43.7935 3.73845 43.7284 3.57083 43.6073 3.43115L41.293 0.966367C41.2042 0.870516 41.09 0.792869 40.9593 0.739429C40.8285 0.68599 40.6846 0.658203 40.5388 0.658203C40.393 0.658203 40.2491 0.68599 40.1183 0.739429C39.9875 0.792869 39.8734 0.870516 39.7846 0.966367Z"
        fill="#DAE8FE"
      />
      <foreignObject
        x="-15.6829"
        y="-13.2854"
        width="77.3228"
        height="55.2066"
      ></foreignObject>
      <g filter="url(#filter1_d_619_21456)" data-figma-bg-blur-radius="23.0501">
        <path
          d="M37.5315 16.7904H26.0394L33.4927 11.5891C33.5991 11.5167 33.6902 11.4232 33.7608 11.3141C33.8314 11.205 33.88 11.0825 33.9036 10.9539C33.9272 10.8252 33.9255 10.693 33.8985 10.565C33.8715 10.437 33.8198 10.3159 33.7464 10.2088C33.6033 9.98954 33.3816 9.83708 33.1294 9.78463C32.8773 9.73217 32.6152 9.78397 32.4001 9.92873L22.8591 16.5703L13.3961 10.0088C13.1811 9.86399 12.9189 9.81219 12.6668 9.86465C12.4146 9.9171 12.1929 10.0696 12.0499 10.2888C11.9764 10.3959 11.9247 10.5171 11.8977 10.645C11.8707 10.773 11.869 10.9052 11.8926 11.0339C11.9162 11.1625 11.9648 11.285 12.0354 11.3941C12.106 11.5033 12.1971 11.5968 12.3035 11.6692L19.7568 16.8704H8.34275C8.08401 16.8704 7.83589 16.9758 7.65294 17.1634C7.46998 17.3509 7.36719 17.6053 7.36719 17.8706C7.37218 18.1343 7.47659 18.3858 7.65847 18.5722C7.84036 18.7587 8.08558 18.8657 8.34275 18.8709H37.6095C37.8683 18.8709 38.1164 18.7655 38.2993 18.5779C38.4823 18.3903 38.5851 18.1359 38.5851 17.8706C38.5969 17.7257 38.5778 17.5799 38.5291 17.4433C38.4803 17.3067 38.4031 17.1827 38.3028 17.0798C38.2025 16.977 38.0815 16.8978 37.9483 16.8478C37.8151 16.7978 37.6729 16.7782 37.5315 16.7904Z"
          fill="#EFF5FF"
        />
        <path
          d="M32.4863 10.0566C32.6672 9.93494 32.8865 9.89172 33.0977 9.93555C33.309 9.97952 33.4961 10.1073 33.6172 10.293L33.6191 10.2959C33.681 10.3862 33.7252 10.4883 33.748 10.5967C33.7709 10.7049 33.7729 10.8169 33.7529 10.9258C33.7329 11.0347 33.6913 11.1384 33.6318 11.2305C33.5723 11.3225 33.4955 11.4012 33.4062 11.4619L33.4043 11.4629L25.9512 16.6641L25.5508 16.9443H37.5312L37.5449 16.9434C37.6633 16.9332 37.7828 16.9493 37.8945 16.9912C38.0064 17.0332 38.1077 17.1007 38.1924 17.1875C38.2771 17.2743 38.3434 17.3791 38.3848 17.4951C38.4157 17.582 38.4323 17.6735 38.4346 17.7656L38.4316 17.8584V17.8711C38.4315 18.0967 38.3439 18.3123 38.1895 18.4707C38.035 18.6291 37.8261 18.7168 37.6094 18.7168H8.3457C8.1295 18.7125 7.92263 18.6228 7.76855 18.4648C7.61511 18.3075 7.52559 18.095 7.52051 17.8711C7.52051 17.6454 7.60814 17.429 7.7627 17.2705C7.91715 17.1121 8.12606 17.0244 8.34277 17.0244H20.2451L19.8447 16.7441L12.3916 11.543L12.3896 11.542C12.3005 11.4813 12.2236 11.4025 12.1641 11.3105C12.1046 11.2185 12.0639 11.1147 12.0439 11.0059C12.024 10.897 12.025 10.7851 12.0479 10.6768C12.0707 10.5684 12.1149 10.4663 12.1768 10.376L12.1787 10.373C12.2998 10.1874 12.4868 10.0586 12.6982 10.0146C12.9095 9.97077 13.1296 10.0149 13.3105 10.1367V10.1357L22.7715 16.6963L22.8594 16.7578L22.9473 16.6963L32.4854 10.0557L32.4863 10.0566Z"
          stroke="white"
          stroke-width="0.307334"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_619_21456"
          x="-7.91803"
          y="-4.22028"
          width="61.7931"
          height="51.3849"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.11394" />
          <feGaussianBlur stdDeviation="4.22789" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_619_21456"
          />
        </filter>
        <clipPath
          id="bgblur_0_619_21456_clip_path"
          transform="translate(7.91803 4.22028)"
        >
          <path d="M22.9132 8.46341H34.2233C34.5779 8.46344 34.927 8.54861 35.2395 8.71132C35.5519 8.87403 35.818 9.10923 36.014 9.39593L40.8397 16.5635C41.1154 16.9651 41.2346 17.4489 41.1759 17.9281C41.1171 18.4072 40.8843 18.8504 40.5192 19.1781L24.4212 33.9338C24.025 34.2859 23.5071 34.4811 22.9698 34.4811C22.4324 34.4811 21.9146 34.2859 21.5184 33.9338L5.4204 19.1781C5.06499 18.8446 4.83903 18.4024 4.78066 17.9261C4.72228 17.4498 4.83503 16.9685 5.09992 16.5635L9.9444 9.39593C10.1349 9.10832 10.3972 8.87205 10.707 8.70903C11.0167 8.54601 11.3639 8.46152 11.7163 8.46341H22.9132Z" />
        </clipPath>
        <filter
          id="filter1_d_619_21456"
          x="-15.6829"
          y="-13.2854"
          width="77.3228"
          height="55.2066"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.60178" />
          <feGaussianBlur stdDeviation="3.25222" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.554167 0 0 0 0 0.626956 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_619_21456"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_619_21456"
            result="shape"
          />
        </filter>
        <clipPath
          id="bgblur_1_619_21456_clip_path"
          transform="translate(15.6829 13.2854)"
        >
          <path d="M37.5315 16.7904H26.0394L33.4927 11.5891C33.5991 11.5167 33.6902 11.4232 33.7608 11.3141C33.8314 11.205 33.88 11.0825 33.9036 10.9539C33.9272 10.8252 33.9255 10.693 33.8985 10.565C33.8715 10.437 33.8198 10.3159 33.7464 10.2088C33.6033 9.98954 33.3816 9.83708 33.1294 9.78463C32.8773 9.73217 32.6152 9.78397 32.4001 9.92873L22.8591 16.5703L13.3961 10.0088C13.1811 9.86399 12.9189 9.81219 12.6668 9.86465C12.4146 9.9171 12.1929 10.0696 12.0499 10.2888C11.9764 10.3959 11.9247 10.5171 11.8977 10.645C11.8707 10.773 11.869 10.9052 11.8926 11.0339C11.9162 11.1625 11.9648 11.285 12.0354 11.3941C12.106 11.5033 12.1971 11.5968 12.3035 11.6692L19.7568 16.8704H8.34275C8.08401 16.8704 7.83589 16.9758 7.65294 17.1634C7.46998 17.3509 7.36719 17.6053 7.36719 17.8706C7.37218 18.1343 7.47659 18.3858 7.65847 18.5722C7.84036 18.7587 8.08558 18.8657 8.34275 18.8709H37.6095C37.8683 18.8709 38.1164 18.7655 38.2993 18.5779C38.4823 18.3903 38.5851 18.1359 38.5851 17.8706C38.5969 17.7257 38.5778 17.5799 38.5291 17.4433C38.4803 17.3067 38.4031 17.1827 38.3028 17.0798C38.2025 16.977 38.0815 16.8978 37.9483 16.8478C37.8151 16.7978 37.6729 16.7782 37.5315 16.7904Z" />
        </clipPath>
      </defs>
    </svg>
  );
};



export const ConnectingLine = ({
  isActive,
  isCompleted,
  className,
}: {
  isActive: boolean;
  isCompleted: boolean;
  className?: string;
}) => {
  return (
    <div className="flex items-center justify-center h-full relative">
      <svg
        width="100%"
        height="40"
        viewBox="0 0 100 40"
        fill="none"
        preserveAspectRatio="none"
        className={`w-full h-[40px] ${className}`}
      >
        {/* Background line */}
        <line
          x1="0"
          y1="20"
          x2="100"
          y2="20"
          stroke="#2A2A3C"
          strokeWidth="0.8"
          strokeLinecap="round"
        />

        {/* Animated progress line */}
        <line
          x1="0"
          y1="20"
          x2="100"
          y2="20"
          stroke="#EFF5FF"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="100"
          strokeDashoffset={isCompleted ? 0 : isActive ? 40 : 100}
          style={{
            transition: "stroke-dashoffset 1.2s cubic-bezier(0.77, 0, 0.175, 1)",
            filter:
              isActive || isCompleted ? "drop-shadow(0 0 6px #EFF5FF)" : "none",
          }}
        />

        {/* Outer circle in the middle */}
        <circle
          cx="50"
          cy="20"
          r="16"
          fill="none"
          stroke={isCompleted || isActive ? "#EFF5FF" : "#2A2A3C"}
          strokeWidth="0.8"
          style={{
            transition: "stroke 0.4s ease",
            filter:
              isActive || isCompleted
                ? "drop-shadow(0 0 4px rgba(239,245,255,0.6))"
                : "none",
          }}
        />

        {/* Inner center dot */}
        <circle
          cx="50"
          cy="20"
          r="4"
          fill={isCompleted || isActive ? "#EFF5FF" : "#2A2A3C"}
          style={{
            transition: "fill 0.4s ease",
            filter:
              isActive || isCompleted
                ? "drop-shadow(0 0 6px rgba(239,245,255,0.7))"
                : "none",
          }}
        />

      </svg>
    </div>
  );
};
