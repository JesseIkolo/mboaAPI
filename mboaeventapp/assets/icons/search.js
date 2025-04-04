import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Search(props) {
  return (
    <Svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.166 15C4.4 15 1.333 11.933 1.333 8.167c0-3.767 3.067-6.834 6.833-6.834C11.933 1.333 15 4.4 15 8.167 15 11.933 11.933 15 8.166 15zm0-12.667a5.84 5.84 0 00-5.833 5.834A5.84 5.84 0 008.166 14 5.84 5.84 0 0014 8.167a5.84 5.84 0 00-5.834-5.834zM15.167 15.667a.494.494 0 01-.354-.147l-1.333-1.333a.503.503 0 010-.707.503.503 0 01.707 0l1.333 1.333a.503.503 0 010 .707c-.1.1-.227.147-.353.147z"
        fill="#EAE9EF"
      />
    </Svg>
  )
}

export default Search
