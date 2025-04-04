import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={53}
      height={53}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={53} height={53} rx={8} fill="#9B51E0" />
      <Path
        d="M32.5 23.666h-12a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5h12c.273 0 .5.227.5.5 0 .274-.227.5-.5.5zM30.5 27h-8a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5h8c.273 0 .5.227.5.5s-.227.5-.5.5z"
        fill="#E2F8EB"
      />
      <Path
        d="M27.833 30.334h-2.667a.504.504 0 01-.5-.5c0-.274.227-.5.5-.5h2.667c.273 0 .5.226.5.5 0 .273-.227.5-.5.5z"
        fill="#F3E9FB"
      />
    </Svg>
  )
}

export default SvgComponent
