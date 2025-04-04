import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8 15.666A7.173 7.173 0 01.835 8.5a7.173 7.173 0 017.167-7.167A7.173 7.173 0 0115.167 8.5a7.173 7.173 0 01-7.166 7.166zM8 2.333A6.174 6.174 0 001.835 8.5c0 3.4 2.767 6.166 6.167 6.166S14.167 11.9 14.167 8.5c0-3.4-2.766-6.167-6.166-6.167z"
        fill="#219653"
      />
      <Path
        d="M6.86 10.143L5.388 8.671a.423.423 0 10-.598.598l1.773 1.773a.422.422 0 00.598 0l4.487-4.487a.423.423 0 00-.598-.598l-4.19 4.186z"
        fill="#219653"
      />
    </Svg>
  )
}

export default SvgComponent
