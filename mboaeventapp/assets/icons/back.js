import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function Back(props) {
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
        d="M15.975 23.683a.618.618 0 01-.441-.183l-5.059-5.058a.629.629 0 010-.884l5.059-5.058a.629.629 0 01.883 0 .629.629 0 010 .883L11.8 18l4.617 4.617a.629.629 0 010 .883.605.605 0 01-.442.183z"
        fill="#041578"
      />
      <Path
        d="M25.083 18.625H11.058a.63.63 0 01-.625-.625.63.63 0 01.625-.625h14.025a.63.63 0 01.625.625.63.63 0 01-.625.625z"
        fill="#041578"
      />
    </Svg>
  )
}

export default Back
