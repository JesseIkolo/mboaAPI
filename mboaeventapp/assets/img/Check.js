import * as React from "react"
import Svg, { Circle, Path, Rect } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={228}
      height={193}
      viewBox="0 0 228 193"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={6.5} cy={63} r={6} fill="#F52424" />
      <Circle cx={63.5} cy={184} r={9} fill="#041578" />
      <Circle cx={173.5} cy={5} r={5} fill="#F52424" />
      <Path
        d="M185.5 142l1.528 2.897 3.227.558-2.282 2.348.466 3.242-2.939-1.445-2.939 1.445.466-3.242-2.282-2.348 3.227-.558L185.5 142z"
        fill="#F52424"
      />
      <Path
        d="M216 67l3.515 6.662 7.422 1.284-5.25 5.402 1.073 7.456L216 84.48l-6.76 3.324 1.073-7.456-5.25-5.402 7.422-1.284L216 67z"
        fill="#041578"
      />
      <Path
        d="M31 126l1.07 2.028 2.259.39-1.598 1.644.326 2.27L31 131.32l-2.057 1.012.326-2.27-1.598-1.644 2.26-.39L31 126z"
        fill="#F52424"
      />
      <Rect x={48.5} y={27} width={120} height={120} rx={60} fill="#041578" />
      <Path
        d="M99.432 99.604L86.827 87l-4.292 4.262 16.897 16.897 36.273-36.273-4.262-4.262-32.01 31.98z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
