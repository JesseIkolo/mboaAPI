import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Check(props) {
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
        d="M7.5 13.475L4.025 10l-1.183 1.175L7.5 15.833l10-10-1.175-1.175L7.5 13.475z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Check
