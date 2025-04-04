import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={12}
      height={10}
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4 7.28L1.22 4.5l-.947.94L4 9.167l8-8-.94-.94L4 7.28z"
        fill="#E2F8EB"
      />
    </Svg>
  )
}

export default SvgComponent
