import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Music(props) {
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
        d="M7.054 5.033v7.988a2.886 2.886 0 00-1.94-.745c-1.59 0-2.884 1.284-2.884 2.862S3.524 18 5.115 18C6.704 18 7.996 16.72 8 15.144V9.436l8.285-2.47v4.13a2.887 2.887 0 00-1.94-.745c-1.59 0-2.885 1.284-2.885 2.862s1.294 2.862 2.885 2.862c1.585 0 2.876-1.275 2.885-2.846V2L7.054 5.033z"
        fill="#E6E8F2"
      />
    </Svg>
  )
}

export default Music
