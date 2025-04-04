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
        d="M11.833 1.342L10.658.167 6 4.825 1.342.167.167 1.342 4.825 6 .167 10.66l1.175 1.175L6 7.175l4.658 4.659 1.175-1.175L7.175 6l4.658-4.658z"
        fill="#041578"
      />
    </Svg>
  )
}

export default SvgComponent
