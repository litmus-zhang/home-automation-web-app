import { HStack, Button , Text, Modal, ModalBody, ModalCloseButton, ModalFooter, ModalContent, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, VStack, Textarea, InputGroup, InputRightElement} from "@chakra-ui/react";
import { useState } from "react";
export default function Header(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

    return(
        <HStack justifyContent={"space-between"} padding={3}>
          <Text fontSize={"1.5rem"} fontWeight={"bold"}>Home Auto</Text>
          <Button onClick={onOpen}>Add New Device</Button>
          <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a New Device</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <FormControl isRequired>
  
  <FormLabel>Device Name</FormLabel>
  <Input type="text" placeholder="Front Door" />
  </FormControl>          
  <FormControl>
  <FormLabel>Description</FormLabel>
  <Textarea placeholder="my front door"/>
  </FormControl>  
          
  <FormControl>
  <FormLabel>Pin</FormLabel>
  <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter device pin'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>  
    </FormControl>  
  </VStack>
        
  </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Create Device
            </Button>
            <Button variant='ghost'> Discard</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

        </HStack>)
}

