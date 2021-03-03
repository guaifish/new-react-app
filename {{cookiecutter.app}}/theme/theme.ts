import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode("red.300", "white")(props),
      },
    }),
  },
})

export default theme
