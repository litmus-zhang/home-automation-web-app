import { Button, Card, Text, Stack, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import Header from "../Header";
import {DEVICES} from "../../constants";

const DeviceList = () =>{
return(
    <>
<Header/>
<Stack marginTop={"24"} display={"flex"} flexWrap={"wrap"} >{
    DEVICES.map((device, idx) => <Device {...device} key={idx} />)
    }
    </Stack>
    </>
)
}
interface DeviceProps{
    name: string
    description: string
}
export const Device = ({name, description} : DeviceProps) =>{
    const { isOpen, onOpen, onClose } = useDisclosure()

   return ( <Card padding={"4"} display={"flex"} flexDirection={"column"}  width={"md"} height={"fit-content"}>
    <VStack alignItems={"left"}>
    <Text as="h3">{name}</Text>
    <Text as="p">{description}</Text>
    </VStack>
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
          <FormControl isRequired>
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