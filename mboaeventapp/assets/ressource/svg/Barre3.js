import * as React from "react"
import Svg, { Rect } from "react-native-svg"

function Bar3(props) {
  return (
    <Svg
      width={112}
      height={8}
      viewBox="0 0 112 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={8} height={8} rx={4} fill="#767A90" />
      <Rect x={24} width={8} height={8} rx={4} fill="#767A90" />
      <Rect x={48} width={64} height={8} rx={4} fill="#fff" />
    </Svg>
  )
}

export default Bar3
