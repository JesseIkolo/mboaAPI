import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function Facebook(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={24} cy={24} r={20} fill="#3B5998" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.315 16.958c-.623-.125-1.465-.218-1.995-.218-1.433 0-1.526.623-1.526 1.62v1.776h3.583l-.312 3.678h-3.271V35h-4.488V23.814H19v-3.678h2.306v-2.275c0-3.116 1.465-4.861 5.142-4.861 1.277 0 2.212.187 3.427.436l-.56 3.522z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Facebook
