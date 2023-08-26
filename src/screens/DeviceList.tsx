import { Button, Card, Text, Stack, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FC } from "react";
import Header from "../Header";

const DeviceList = () =>{
return(
    <>
<Header/>
<Stack display={"flex"} flexWrap={"wrap"} >{
    [1,2,3,4,5].map((i, idx) => <Device key={idx} />)
    }
    </Stack>
    </>
)
}

export const Device : FC= () =>{
    const { isOpen, onOpen, onClose } = useDisclosure()

   return ( <Card padding={2} width={"fit-content"}>
    <Text as="h3">Device Name</Text>
    <Text as="p">Device Details</Text>
    <HStack>
    <Button colorScheme="purple" variant={"solid"} size={"sm"}>Edit Details</Button>
    <Button onClick={onOpen} colorScheme="purple" variant={"outline"} size={"sm"}>Access Device</Button>
    </HStack>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Access Device</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
  <FormLabel>Device Pin</FormLabel>
  <Input type="password" placeholder="123443"/>
  </FormControl>  

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Activate
            </Button>
            <Button variant='ghost'>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>)
}
export default DeviceList;