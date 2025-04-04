import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AddSvgComponent(props) {
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
        d="M12.5 9h-8a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5h8c.273 0 .5.227.5.5s-.227.5-.5.5z"
        fill="#EAE9EF"
      />
      <Path
        d="M8.5 13a.504.504 0 01-.5-.5v-8c0-.273.227-.5.5-.5s.5.227.5.5v8c0 .273-.227.5-.5.5z"
        fill="#EAE9EF"
      />
    </Svg>
  )
}

export default AddSvgComponent
