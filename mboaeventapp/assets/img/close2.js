import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
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
        d="M15.834 5.342l-1.175-1.175L10 8.825 5.342 4.167 4.167 5.342 8.825 10l-4.658 4.658 1.175 1.175L10 11.175l4.659 4.658 1.175-1.175L11.175 10l4.659-4.658z"
        fill="#041578"
      />
    </Svg>
  )
}

export default SvgComponent