import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BeforeSvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.975 15.683a.618.618 0 01-.442-.183L2.475 10.44a.629.629 0 010-.883L7.533 4.5a.629.629 0 01.884 0 .629.629 0 010 .883L3.8 10l4.617 4.616a.629.629 0 010 .884.605.605 0 01-.442.183z"
        fill="#041578"
      />
      <Path
        d="M17.083 10.625H3.058A.63.63 0 012.433 10a.63.63 0 01.625-.625h14.025a.63.63 0 01.625.625.63.63 0 01-.625.625z"
        fill="#041578"
      />
    </Svg>
  )
}

export default BeforeSvgComponent
