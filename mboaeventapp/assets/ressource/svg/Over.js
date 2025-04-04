import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function Over(props) {
  return (
    <Svg
      width={390}
      height={844}
      viewBox="0 0 390 844"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="url(#paint0_linear_53_3296)" d="M0 0H390V844H0z" />
      <Defs>
        <LinearGradient
          id="paint0_linear_53_3296"
          x1={195}
          y1={0}
          x2={195}
          y2={844}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#020931" stopOpacity={0} />
          <Stop offset={0.6875} stopColor="#020931" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default Over
