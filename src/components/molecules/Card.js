import React from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    // Button,
    useColorModeValue,
} from '@chakra-ui/react';
import { Modal } from "../molecules"
const Card = (restaurant) => {
    return (
        <>
            <Center py={6} alignSelf={'stretch'}>
                <Box
                    maxW={'350px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        h={'120px'}
                        w={'full'}
                        src={
                            'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2231&q=80'
                        }
                        objectFit={'cover'}
                    />
                    <Flex justify={'center'} mt={-12}>
                        <Avatar
                            size={'xl'}
                            src={restaurant.restaurant.image}
                            alt={'restaurant_logo'}
                            css={{
                                border: '2px solid white',
                            }}
                        />
                    </Flex>

                    <Box p={5}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                {restaurant.restaurant.restaurant_name}
                            </Heading>
                            <Text color={'gray.500'}>{restaurant.restaurant.cuisine}</Text>
                        </Stack>

                        <Stack direction={'column'} justify={'center'} spacing={6}>
                            <Stack spacing={0}>
                                <Text>Description: </Text><br />
                                <Text>{restaurant.restaurant.description}</Text>
                            </Stack>
                            <Stack spacing={0}>
                                <Text>Average Price for two: </Text><br />
                                <Text>{restaurant.restaurant.average_price}{' '}RS/-</Text>
                            </Stack>
                        </Stack>
                        <Modal resturant={restaurant.restaurant} />
                    </Box>
                </Box>
            </Center>
        </>
    )
}

export default Card
