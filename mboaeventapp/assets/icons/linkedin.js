import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function Linkedin(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={24} cy={24} r={20} fill="#0077B5" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.775 14.284c0 1.245-.948 2.253-2.43 2.253-1.426 0-2.374-1.008-2.344-2.253-.03-1.306.918-2.284 2.372-2.284 1.454 0 2.373.978 2.402 2.284zM14.12 32.819V18.316h4.507v14.502H14.12v.001zM22.24 22.944c0-1.809-.06-3.351-.12-4.626h3.916l.208 1.986h.089c.593-.92 2.075-2.312 4.478-2.312 2.965 0 5.189 1.958 5.189 6.227v8.602h-4.507v-8.038c0-1.87-.652-3.144-2.283-3.144-1.246 0-1.987.86-2.283 1.69-.12.297-.178.712-.178 1.128v8.364h-4.507v-9.877h-.002z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Linkedin
