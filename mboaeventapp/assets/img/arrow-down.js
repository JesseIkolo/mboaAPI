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
        d="M3.6 6c0-.35.135-.7.4-.965l3.26-3.26a.377.377 0 01.53 0 .377.377 0 010 .53l-3.26 3.26c-.24.24-.24.63 0 .87l3.26 3.26a.377.377 0 010 .53.377.377 0 01-.53 0L4 6.965A1.363 1.363 0 013.6 6z"
        fill="#F3E9FB"
      />
    </Svg>
  )
}

export default SvgComponent
