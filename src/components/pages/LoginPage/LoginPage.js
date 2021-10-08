import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../../actions/userAction'
import { useHistory } from "react-router-dom";
import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
} from '@chakra-ui/react';
import { Error, Loader } from "../../atoms"

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginState = useSelector(state => state.loginUserReducer)
    const { loading, error } = loginState;
    let history = useHistory();
    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            window.location.href = '/'
        }
    }, [])
    function login() {
        const user = {
            email, password
        }
        console.log(user, "Data for login sent to backend")
        dispatch(loginUser(user))
    }
    function register() {
        history.push('/registration')
    }
    console.log(error?.message)
    return (
        <>
            <Box position={'relative'}
                w={'full'}
                h={'100vh'}
                backgroundImage={
                    'url(https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2188&q=80)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}>
                <Container
                    as={SimpleGrid}
                    maxW={'7xl'}
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 10, lg: 32 }}
                    py={{ base: 10, sm: 20, lg: 32 }}
                    opacity={'0.97'}>

                    <Stack spacing={{ base: 10, md: 20 }}>
                        <Heading
                            color={'whiteAlpha.900'}
                            lineHeight={1.1}
                            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                            Food-Application{' '}
                        </Heading>
                        <Text fontSize={'2xl'} color={'white'}>
                            "People who love to eat are always the best people"
                        </Text>
                    </Stack>
                    <Stack
                        bg={'gray.50'}
                        rounded={'xl'}
                        p={{ base: 4, sm: 6, md: 8 }}
                        spacing={{ base: 8 }}
                        maxW={{ lg: 'lg' }}>
                        <Stack spacing={4}>
                            <Heading
                                color={'gray.800'}
                                lineHeight={1.1}
                                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                                Login
                            </Heading>
                            <Stack spacing={2}>
                                {loading && <Loader />}
                            </Stack>

                            {error && <Error error={error?.message} />}

                        </Stack>
                        <Box as={'form'} mt={10}>
                            <Stack spacing={4}>
                                <Input
                                    placeholder="Email"
                                    bg={'gray.100'}
                                    border={0}
                                    color={'gray.500'}
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    required
                                    _placeholder={{
                                        color: 'gray.500',
                                    }}
                                />
                                <Input
                                    required
                                    type='password'
                                    placeholder="Password"
                                    bg={'gray.100'}
                                    border={0}
                                    color={'gray.500'}
                                    value={password} onChange={(e) => { setPassword(e.target.value) }}
                                    _placeholder={{
                                        color: 'gray.500',
                                    }}
                                />
                            </Stack>
                            <Button
                                fontFamily={'heading'}
                                mt={8}
                                mb={5}
                                w={'full'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                color={'white'}
                                onClick={login}
                                _hover={{
                                    bgGradient: 'linear(to-r, red.400,pink.400)',
                                    boxShadow: 'xl',
                                }}>
                                Login
                            </Button>
                            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                                If not register click down !
                            </Text>
                            <Button
                                fontFamily={'heading'}
                                w={'full'}
                                bgGradient="linear(to-r, blue.400,yellow.400)"
                                color={'white'}
                                onClick={register}
                                _hover={{
                                    bgGradient: 'linear(to-r, blue.400,yellow.400)',
                                    boxShadow: 'xl',
                                }}>
                                Register
                            </Button>
                        </Box>
                        form
                    </Stack>
                </Container>
            </Box>
        </>
    )
}

export default LoginPage
