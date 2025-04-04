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
        d="M7.425 17.225a.618.618 0 01-.442-.183.629.629 0 010-.883l5.433-5.434c.4-.4.4-1.05 0-1.45L6.983 3.842a.629.629 0 010-.883.629.629 0 01.883 0L13.3 8.392c.425.425.666 1 .666 1.608 0 .609-.233 1.184-.666 1.609l-5.434 5.433a.655.655 0 01-.441.183z"
        fill="#3C4260"
      />
    </Svg>
  )
}

export default SvgComponent
