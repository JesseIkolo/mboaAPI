import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IconHomeSvgComponent(props) {
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
        d="M14.825 18.959h-9.65a4.14 4.14 0 01-4.133-4.142V8.642c0-1.133.7-2.558 1.6-3.258l4.491-3.5c1.35-1.05 3.509-1.1 4.909-.117l5.15 3.608c.991.692 1.766 2.175 1.766 3.384v6.066a4.138 4.138 0 01-4.133 4.134zM7.9 2.867l-4.492 3.5c-.591.467-1.116 1.525-1.116 2.275v6.175a2.891 2.891 0 002.883 2.892h9.65a2.884 2.884 0 002.883-2.884V8.76c0-.8-.575-1.909-1.233-2.359l-5.15-3.608c-.95-.667-2.517-.633-3.425.075z"
        fill="#3C4260"
      />
      <Path
        d="M10 15.625A.63.63 0 019.375 15v-2.5a.63.63 0 01.625-.625.63.63 0 01.625.625V15a.63.63 0 01-.625.625z"
        fill="#3C4260"
      />
    </Svg>
  )
}

export default IconHomeSvgComponent
