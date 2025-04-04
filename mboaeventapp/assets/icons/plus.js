import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Plus(props) {
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
        d="M15 10.625H5A.63.63 0 014.375 10 .63.63 0 015 9.375h10a.63.63 0 01.625.625.63.63 0 01-.625.625z"
        fill="#E6E8F2"
      />
      <Path
        d="M10 15.625A.63.63 0 019.375 15V5A.63.63 0 0110 4.375a.63.63 0 01.625.625v10a.63.63 0 01-.625.625z"
        fill="#E6E8F2"
      />
    </Svg>
  )
}

export default Plus
