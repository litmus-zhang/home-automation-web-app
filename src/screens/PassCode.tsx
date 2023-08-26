import { Box, FormControl, FormLabel, Heading, Input , Button} from "@chakra-ui/react"
import Header from "../Header";


function PassCode() {

  return (
    <Box>
      <Header/>
       <Box as="div" textAlign={"center"} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={2}  flexDirection={"column"}>
      <Heading> Home Automation Web App </Heading>
      <FormControl>
        <FormLabel>Input Device Pin</FormLabel>
        <Input placeSelf={"PIN"} />
      </FormControl>
      <Button colorScheme="purple">
        Access Device
      </Button>
    </Box>
    </Box>
   
  )
}

export default PassCode;
