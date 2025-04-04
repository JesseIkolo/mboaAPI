import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function TroisbarreSvgComponent(props) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={36} height={36} rx={18} fill="#E6E8F2" />
      <Path
        stroke="#041578"
        strokeWidth={2}
        strokeLinecap="round"
        d="M10.6667 13.667L20.3334 13.667"
      />
      <Path
        stroke="#041578"
        strokeWidth={2}
        strokeLinecap="round"
        d="M10.6667 17.833L25.3334 17.833"
      />
      <Path
        stroke="#041578"
        strokeWidth={2}
        strokeLinecap="round"
        d="M10.6667 22L22.8334 22"
      />
    </Svg>
  )
}

export default TroisbarreSvgComponent
