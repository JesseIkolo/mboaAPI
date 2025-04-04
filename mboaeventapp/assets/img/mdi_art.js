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
        d="M14.583 10a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm-2.5-3.333a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm-4.166 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM5.417 10a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM10 2.5a7.5 7.5 0 000 15 1.25 1.25 0 001.25-1.25c0-.325-.125-.617-.325-.833a1.25 1.25 0 01.933-2.083h1.475A4.167 4.167 0 0017.5 9.166C17.5 5.483 14.142 2.5 10 2.5z"
        fill="#041578"
      />
    </Svg>
  )
}

export default SvgComponent
