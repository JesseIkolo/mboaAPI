import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HappyEmoji(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.97 22.749c-5.92 0-10.75-4.82-10.75-10.75s4.83-10.75 10.75-10.75 10.75 4.82 10.75 10.75-4.82 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z"
        fill="#3C4260"
      />
      <Path
        d="M11.999 19.25c-2.15 0-4.17-1.05-5.4-2.82a.742.742 0 01.19-1.04c.34-.24.81-.15 1.04.19a5.098 5.098 0 004.17 2.18c1.66 0 3.22-.81 4.17-2.18.24-.34.7-.42 1.04-.19.34.24.42.7.19 1.04a6.576 6.576 0 01-5.4 2.82z"
        fill="#3C4260"
      />
    </Svg>
  )
}

export default HappyEmoji
