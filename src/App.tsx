import { FormControl, FormLabel, Input } from "@chakra-ui/react"


function App() {

  return (
    <>
      <h1> Home Automation Web App </h1>
      <FormControl>
        <FormLabel>Input Device Pin</FormLabel>
        <Input placeSelf={"PIN"} />
      </FormControl>
    </>
  )
}

export default App
