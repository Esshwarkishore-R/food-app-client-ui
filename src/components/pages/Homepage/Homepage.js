import React from 'react'
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons'

const Homepage = () => {
    return (
        <div>
            <Flex
                w={'full'}
                h={'100vh'}
                backgroundImage={
                    'url(https://images.unsplash.com/photo-1627469612523-ee695acbcf80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}>
                <VStack
                    w={'full'}
                    justify={'center'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                    <Stack maxW={'3xl'} align={'flex-start'} spacing={6}>
                        <Text
                            color={'whiteAlpha.900'}
                            fontWeight={900}
                            lineHeight={1.2}
                            fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}>
                            {/* Food is not only food it's an Experience */}
                            Welcome to Food-Application
                        </Text>
                        <Text
                            color={'whiteAlpha.900'}
                            fontWeight={700}
                            lineHeight={1.2}
                            fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}>
                            {/* Food is not only food it's an Experience */}
                            A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food.
                        </Text>
                        <Stack w={'full'} direction={'row'} justify={'center'}>
                            <Button
                                as={'a'}
                                href={'/resturants'}
                                bg={'blue.300'}
                                rounded={'full'}
                                color={'white'}
                                _hover={{ bg: 'blue.900' }}>
                                Explore The Different Restaurants
                                <ChevronRightIcon />
                            </Button>
                        </Stack>
                    </Stack>
                </VStack>
            </Flex>

        </div>
    )
}

export default Homepage
