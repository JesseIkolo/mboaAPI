import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      {...props}
    >
      <Path
        d="M7.999 11.7c-.467 0-.933-.18-1.287-.533L2.366 6.82a.503.503 0 010-.707.503.503 0 01.706 0L7.42 10.46c.32.32.84.32 1.16 0l4.347-4.347a.503.503 0 01.706 0 .503.503 0 010 .707l-4.346 4.347c-.354.353-.82.533-1.287.533z"
        fill="#798588"
      />
    </Svg>
  )
}

export default SvgComponent
