import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={5}
      height={5}
      viewBox="0 0 5 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={2.5} cy={2.5} r={2.5} fill="#F52424" />
    </Svg>
  )
}

export default SvgComponent
