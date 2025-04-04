import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.974 24.467l4.133 3.2c.533.533 1.733.8 2.533.8h5.067c1.6 0 3.333-1.2 3.733-2.8l3.2-9.734c.667-1.866-.533-3.466-2.533-3.466h-5.333c-.8 0-1.467-.667-1.334-1.6l.667-4.267c.267-1.2-.533-2.533-1.733-2.933-1.067-.4-2.4.133-2.934.933l-5.466 8.133"
        stroke="#DEDFE4"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M3.173 24.467V11.4c0-1.867.8-2.533 2.667-2.533h1.333c1.867 0 2.667.666 2.667 2.533v13.067c0 1.866-.8 2.533-2.667 2.533H5.84c-1.867 0-2.667-.667-2.667-2.533z"
        stroke="#DEDFE4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
