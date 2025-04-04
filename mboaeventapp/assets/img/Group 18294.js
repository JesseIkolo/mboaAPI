import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={8}
      viewBox="0 0 18 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.531 4l-6.45-4v8l6.45-4zM.33 4l6.45 4V0L.33 4z"
        fill="#5E5F65"
      />
    </Svg>
  )
}

export default SvgComponent
