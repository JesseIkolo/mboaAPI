import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={53}
      height={53}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={53} height={53} rx={8} fill="#041578" />
      <Path
        d="M26.167 33c-3.767 0-6.834-3.067-6.834-6.834 0-3.766 3.067-6.833 6.834-6.833 3.766 0 6.833 3.067 6.833 6.833C33 29.933 29.933 33 26.167 33zm0-12.667a5.84 5.84 0 00-5.834 5.833A5.84 5.84 0 0026.167 32 5.84 5.84 0 0032 26.166a5.84 5.84 0 00-5.833-5.833zM33.167 33.667a.494.494 0 01-.354-.147l-1.333-1.333a.503.503 0 010-.707.503.503 0 01.707 0l1.333 1.333a.503.503 0 010 .707c-.1.1-.227.147-.353.147z"
        fill="#EAE9EF"
      />
    </Svg>
  )
}

export default SvgComponent
