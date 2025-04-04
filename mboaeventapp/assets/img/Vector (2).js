import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.054 3.033v7.989a2.886 2.886 0 00-1.94-.746c-1.59 0-2.884 1.284-2.884 2.862S1.524 16 3.115 16C4.704 16 5.996 14.72 6 13.144V7.436l8.285-2.47v4.13a2.887 2.887 0 00-1.94-.745c-1.59 0-2.885 1.284-2.885 2.862s1.294 2.862 2.885 2.862c1.585 0 2.876-1.275 2.885-2.846V0L5.054 3.033z"
        fill="#E6E8F2"
      />
    </Svg>
  )
}

export default SvgComponent
