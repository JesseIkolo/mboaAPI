import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.5 8.085L2.415 6l-.71.705L4.5 9.5l6-6-.705-.705L4.5 8.085z"
        fill="#219653"
      />
    </Svg>
  )
}

export default SvgComponent
