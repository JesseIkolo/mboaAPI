import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Close2(props) {
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
        d="M15.833 5.341l-1.175-1.175-4.659 4.659-4.658-4.658-1.175 1.175L8.824 10l-4.658 4.658 1.175 1.175 4.658-4.658 4.659 4.658 1.175-1.175L11.174 10l4.659-4.659z"
        fill="#041578"
      />
    </Svg>
  )
}

export default Close2
