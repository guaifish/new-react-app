import React from "react"
import ChakraLayout from "@/layout/ChakraLayout"
import MyButton from "@/components/MyButton"
import { Box, Heading } from "@chakra-ui/react"

export interface IndexProps {
  cookies?: string
}

const Index: React.FC<IndexProps> = ({ cookies }) => {
  return (
    <ChakraLayout cookies={cookies}>
      <Box textAlign="center" fontSize="xl">
        <Heading
          as="h1"
          textColor="teal.400"
          _hover={{ textColor: "teal.600" }}
          m="2"
        >
          Hello, world!
        </Heading>
        <MyButton />
      </Box>
    </ChakraLayout>
  )
}

export default Index
