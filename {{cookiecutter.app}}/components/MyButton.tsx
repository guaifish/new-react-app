import React from "react"
import { Button, useColorMode } from "@chakra-ui/react"

const MyButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button colorScheme="teal" onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  )
}

export default MyButton
