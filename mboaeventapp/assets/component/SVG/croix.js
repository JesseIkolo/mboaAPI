import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CroixSvgComponent(props) {
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
        d="M11.246 1.93A.831.831 0 0010.07.753L6 4.825 1.929.755A.83.83 0 10.754 1.928L4.824 6l-4.07 4.071a.83.83 0 001.175 1.175l4.07-4.07 4.072 4.07a.831.831 0 001.175-1.175l-4.071-4.07 4.07-4.072z"
        fill="#041578"
      />
    </Svg>
  )
}

export default CroixSvgComponent
