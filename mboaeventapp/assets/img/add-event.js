import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1820_43128)" fill="#041578">
        <Path d="M21.611 12H15.39c-.213 0-.389-.227-.389-.5s.176-.5.389-.5h6.222c.213 0 .389.227.389.5s-.176.5-.389.5z" />
        <Path
          d="M11.421 14.03a1753.97 1753.97 0 01-1.18 3.25c-.066.18-.098.36-.098.549.002.474.001.948.001 1.423 0 .474 0 .948.002 1.422 0 .076.01.152.019.228l.011.098m0 0l.426-.044.119.044v-.391l.125.048-.125-.049V20.5h-.076v-.703l-.264.679-.01.024h-.195v.5z"
          stroke="#292D32"
        />
        <Path d="M18.5 15c-.273 0-.5-.176-.5-.389V8.39c0-.213.227-.389.5-.389s.5.176.5.389v6.222c0 .213-.227.389-.5.389z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1820_43128">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
