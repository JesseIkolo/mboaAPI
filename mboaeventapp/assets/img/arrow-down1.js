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
        d="M8.4 6c0-.35-.135-.7-.4-.965l-3.26-3.26a.377.377 0 00-.53 0 .377.377 0 000 .53l3.26 3.26c.24.24.24.63 0 .87l-3.26 3.26a.377.377 0 000 .53.377.377 0 00.53 0L8 6.965c.265-.265.4-.615.4-.965z"
        fill="#F3E9FB"
      />
    </Svg>
  )
}

export default SvgComponent
