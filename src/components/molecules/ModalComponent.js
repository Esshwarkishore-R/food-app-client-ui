import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Avatar,
    Flex,
    Stack,
    VStack,
    Text,
    Image,
    HStack,
    Center
} from "@chakra-ui/react"

const ModalComponent = (resturant) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <Button w={'full'} mt={2} bgGradient="linear(to-r, red.400,pink.400)" _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
            }}
                color={'white'} onClick={onOpen}>Know more </Button>
            <Modal isOpen={isOpen} onClose={onClose} size={'5xl'}>
                <ModalOverlay />
                <ModalContent>
                    <Flex justify={'center'} mt={-12}>
                        <VStack>
                            <Stack>
                                <Avatar
                                    size={'xl'}
                                    src={resturant.resturant.image}
                                    alt={'restaurant_logo'}
                                    css={{
                                        border: '2px solid white',
                                    }}
                                />
                            </Stack>
                            <Stack mt={-10}>
                                <ModalHeader>{resturant.resturant.restaurant_name}</ModalHeader>
                            </Stack>
                            <Stack>
                                <Text>{resturant.resturant.description}</Text>
                            </Stack>
                        </VStack>
                    </Flex>
                    <ModalCloseButton />
                    <ModalBody>
                        {resturant.resturant?.famous_foods?.map(
                            (foods) => (
                                <>
                                    <HStack p={5} shadow="md" borderWidth="1px" spacing={10} mb={4}>
                                        <Stack>
                                            <Image
                                                borderRadius="full"
                                                boxSize="150px"
                                                src={foods.image}
                                            />
                                        </Stack >
                                        <VStack align={'center'} textAlign={'left'} w={'full'} alignContent={'left'} alignItems={'left'}>
                                            <HStack >
                                                <Text fontSize={'2xl'}>Food Item:</Text>
                                                <Text fontSize={'1xl'} marginTop={'2px !important'}>
                                                    {foods.name}
                                                </Text>
                                            </HStack>
                                            <HStack>
                                                <Text fontSize={'2xl'}>Description:</Text>
                                                <Text fontSize={'1xl'} marginTop={'2px !important'}>
                                                    {foods.description}
                                                </Text>
                                            </HStack>
                                            <HStack>
                                                <Text fontSize={'2xl'}> Price:</Text>
                                                <Text fontSize={'1xl'} marginTop={'2px !important'}>
                                                    Rs.{foods.price}/-
                                                </Text>
                                            </HStack>
                                        </VStack>
                                    </HStack>
                                </>
                            )
                        )}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ModalComponent
