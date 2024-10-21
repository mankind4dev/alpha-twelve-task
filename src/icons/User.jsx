import React from "react";

const User = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <g clip-path="url(#clip0_3772_3362)">
        <rect x="1" y="1" width="32" height="32" rx="16" fill="#F3F4F6" />
        <mask
          id="mask0_3772_3362"
          style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="1"
          y="1"
          width="32"
          height="32"
        >
          <circle cx="17" cy="17" r="16" fill="#F1F5F9" />
        </mask> 
      </g> */}
      
      <rect x="0.5" y="0.5" width="33" height="33" rx="16.5" stroke="#E2E8F0" />
      <defs>
        <clipPath id="clip0_3772_3362">
          <rect x="1" y="1" width="32" height="32" rx="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default User;
