import React from "react"
import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react"
import theme from "@/theme/theme"

interface ChakraLayoutProps {
  cookies?: string
  children: React.ReactNode
}

const ChakraLayout: React.FC<ChakraLayoutProps> = ({ children, cookies }) => {
  return (
    <ChakraProvider
      theme={theme}
      colorModeManager={
        cookies ? cookieStorageManager(cookies) : localStorageManager
      }
    >
      {children}
    </ChakraProvider>
  )
}

export default ChakraLayout
