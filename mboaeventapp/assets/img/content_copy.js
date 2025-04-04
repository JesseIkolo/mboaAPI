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
          d="M5 22c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 013 20V6h2v14h11v2H5zm4-4c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 017 16V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 019 2h9c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v12c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0118 18H9zm0-2h9V4H9v12z"
          fill="#1C1B1F"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
