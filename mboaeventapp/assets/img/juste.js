import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={80}
      height={79}
      viewBox="0 0 80 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M40 74.885C20.48 74.885 4.615 59.02 4.615 39.5 4.615 19.98 20.48 4.114 40 4.114c19.52 0 35.385 15.866 35.385 35.386 0 19.52-15.865 35.385-35.385 35.385zm0-65.833c-16.788 0-30.448 13.66-30.448 30.448 0 16.787 13.66 30.448 30.448 30.448S70.448 56.288 70.448 39.5 56.788 9.052 40 9.052z"
        fill="#041578"
      />
      <Path
        d="M34.373 47.614l-7.267-7.267a2.088 2.088 0 00-2.953 2.953l8.754 8.754a2.085 2.085 0 002.953 0l22.156-22.157a2.088 2.088 0 10-2.953-2.952l-20.69 20.67z"
        fill="#041578"
      />
    </Svg>
  )
}

export default SvgComponent
