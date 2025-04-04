import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Sort(props) {
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
        d="M14.5 5.667h-12a.504.504 0 01-.5-.5c0-.274.227-.5.5-.5h12c.273 0 .5.226.5.5 0 .273-.227.5-.5.5zM12.5 9h-8a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5h8c.273 0 .5.227.5.5s-.227.5-.5.5z"
        fill="#E2F8EB"
      />
      <Path
        d="M9.833 12.333H7.166a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5h2.667c.273 0 .5.227.5.5 0 .274-.227.5-.5.5z"
        fill="#F3E9FB"
      />
    </Svg>
  )
}

export default Sort
