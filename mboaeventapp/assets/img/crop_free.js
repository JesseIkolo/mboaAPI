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
      <G mask="url(#a)" fill="#1C1B1F">
        <Path d="M5 21c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 013 19v-4h2v4h4v2H5zm10 0v-2h4v-4h2v4c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0119 21h-4zM3 9V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 015 3h4v2H5v4H3zm16 0V5h-4V3h4c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v4h-2z" />
        <Path d="M25 21v-2h-4c-.55 0-1.021.196-1.413.587A1.928 1.928 0 0019 21v4h2v-4h4z" />
      </G>
    </Svg>
  )
}

export default SvgComponent
