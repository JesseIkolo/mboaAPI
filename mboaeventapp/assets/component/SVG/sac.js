import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SacSvgComponent(props) {
  return (
    <Svg
      width={18}
      height={17}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.333 16.5c-.458 0-.85-.163-1.177-.49a1.602 1.602 0 01-.49-1.176V11.5H6.5v1.667h5V11.5h5.833v3.334c0 .458-.163.85-.49 1.177-.326.327-.718.49-1.176.49H2.333zm5.834-5V9.834h1.666V11.5H8.167zm-7.5-1.666V5.667c0-.458.163-.85.49-1.178.326-.326.719-.49 1.176-.489h3.334V2.334c0-.459.163-.851.49-1.178.326-.327.719-.49 1.176-.489h3.334c.458 0 .85.163 1.177.49.327.327.49.719.49 1.177V4h3.333c.458 0 .85.164 1.177.49.327.327.49.72.49 1.177v4.167H11.5V8.167h-5v1.667H.667zM7.333 4h3.334V2.334H7.333V4z"
        fill="#041578"
      />
    </Svg>
  )
}

export default SacSvgComponent
