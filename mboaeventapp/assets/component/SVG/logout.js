import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LogoutSvgComponent(props) {
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
        d="M14.534 12.809a.618.618 0 01-.442-.184.629.629 0 010-.883l1.692-1.692-1.692-1.691a.629.629 0 010-.884.629.629 0 01.883 0L17.11 9.61a.629.629 0 010 .883l-2.134 2.133a.618.618 0 01-.441.184z"
        fill="#E6E8F2"
      />
      <Path
        d="M16.608 10.675H8.133a.63.63 0 01-.625-.625.63.63 0 01.625-.625h8.475a.63.63 0 01.625.625.63.63 0 01-.625.625z"
        fill="#E6E8F2"
      />
      <Path
        d="M9.8 17.291c-4.292 0-7.292-3-7.292-7.291 0-4.292 3-7.292 7.292-7.292a.63.63 0 01.625.625.63.63 0 01-.625.625c-3.558 0-6.042 2.483-6.042 6.042 0 3.558 2.484 6.041 6.042 6.041a.63.63 0 01.625.625.63.63 0 01-.625.625z"
        fill="#E6E8F2"
      />
    </Svg>
  )
}

export default LogoutSvgComponent
