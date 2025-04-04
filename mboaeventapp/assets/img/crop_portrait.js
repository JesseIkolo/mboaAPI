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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 22H6c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 014 20v-7h2v7h5v2zM6 11V4h5V2H6c-.55 0-1.02.196-1.412.587A1.927 1.927 0 004 4v7h2zm7 11h5c.55 0 1.021-.196 1.413-.587.391-.392.587-.863.587-1.413v-7h-2v7h-5v2zm7-18v7h-2V4h-5V2h5c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413z"
          fill="#1C1B1F"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
