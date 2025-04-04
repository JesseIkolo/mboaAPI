import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.62 13.047a.494.494 0 01-.353-.147.503.503 0 010-.707L12.96 8.5 9.267 4.807a.503.503 0 010-.707.503.503 0 01.706 0l4.047 4.047a.503.503 0 010 .706L9.973 12.9c-.1.1-.226.147-.353.147z"
        fill="#F52424"
      />
      <Path
        d="M13.553 9H2.333a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5h11.22c.274 0 .5.227.5.5s-.226.5-.5.5z"
        fill="#F52424"
      />
    </Svg>
  )
}

export default SvgComponent
