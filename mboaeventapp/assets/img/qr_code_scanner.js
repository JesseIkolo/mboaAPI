import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Mask
        id="a"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <Path fill="#D9D9D9" d="M0 0H24V24H0z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M2 7V2h5v2H4v3H2zm0 15v-5h2v3h3v2H2zm15 0v-2h3v-3h2v5h-5zm3-15V4h-3V2h5v5h-2zm-2.5 10.5H19V19h-1.5v-1.5zm0-3H19V16h-1.5v-1.5zM16 16h1.5v1.5H16V16zm-1.5 1.5H16V19h-1.5v-1.5zM13 16h1.5v1.5H13V16zm3-3h1.5v1.5H16V13zm-1.5 1.5H16V16h-1.5v-1.5zM13 13h1.5v1.5H13V13zm6-8v6h-6V5h6zm-8 8v6H5v-6h6zm0-8v6H5V5h6zM9.5 17.5v-3h-3v3h3zm0-8v-3h-3v3h3zm8 0v-3h-3v3h3z"
          fill="#1C1B1F"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
