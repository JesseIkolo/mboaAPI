import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Flechette(props) {
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
        d="M12.025 15.683a.618.618 0 01-.442-.183.629.629 0 010-.883L16.2 10l-4.617-4.617a.629.629 0 010-.883.629.629 0 01.884 0l5.058 5.058a.629.629 0 010 .884L12.467 15.5a.618.618 0 01-.442.183z"
        fill="#041578"
      />
      <Path
        d="M16.942 10.625H2.917A.63.63 0 012.292 10a.63.63 0 01.625-.625h14.025a.63.63 0 01.625.625.63.63 0 01-.625.625z"
        fill="#041578"
      />
    </Svg>
  )
}

export default Flechette
