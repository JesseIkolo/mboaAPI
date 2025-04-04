import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
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
        width={25}
        height={24}
      >
        <Path fill="#D9D9D9" d="M0.5 0H24.5V24H0.5z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M2.5 20v-3h2V6c0-.55.196-1.02.588-1.412A1.923 1.923 0 016.5 4h15v2h-15v11h6v3h-10zm13 0a.965.965 0 01-.712-.288A.965.965 0 0114.5 19V9c0-.283.096-.521.288-.713A.967.967 0 0115.5 8h6c.283 0 .52.096.712.287.192.192.288.43.288.713v10c0 .283-.096.52-.288.712A.965.965 0 0121.5 20h-6zm1-3h4v-7h-4v7z"
          fill="#1C1B1F"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
