import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FlecheSvgComponent(props) {
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
        d="M9.62 12.547a.494.494 0 01-.353-.147.503.503 0 010-.707L12.96 8 9.267 4.307a.503.503 0 010-.707.503.503 0 01.706 0l4.047 4.047a.503.503 0 010 .706L9.973 12.4c-.1.1-.226.147-.353.147z"
        fill="#3C4260"
      />
      <Path
        d="M13.553 8.5H2.333a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5h11.22c.274 0 .5.227.5.5s-.226.5-.5.5z"
        fill="#3C4260"
      />
    </Svg>
  )
}

export default FlecheSvgComponent
