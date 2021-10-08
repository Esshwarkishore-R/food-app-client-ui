import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRestaurant } from '../../../actions/foodActions.js'
import {
    Box,
    Container,
    Heading,
    Text,
    Stack,
    VStack,
    Grid,
    GridItem
} from '@chakra-ui/react';
import { Loader, Error } from '../../atoms';
import { Card, Filter } from '../../molecules';

const ResturantPage = () => {
    const dispatch = useDispatch()
    const foodstate = useSelector(state => state.getAllFoodReducer)
    console.log(foodstate, "foodstate")
    const { food, error, loading } = foodstate;
    console.log("🚀 ~ file: ResturantPage.js ~ line 22 ~ ResturantPage ~ food", food)
    useEffect(() => {
        dispatch(getAllRestaurant())
    }, [])
    return (
        <>
            <Box p={4}
                w={'full'}
                h={'auto'}
                backgroundImage={
                    'url(https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading color={'white'} fontSize={'3xl'}>Resturants</Heading>
                    <Text color={'white'} fontSize={'xl'}>
                        Search and filer for resturants
                    </Text>
                </Stack>

                <Container maxW={'6xl'} mt={10}>
                    <Filter />
                    <Grid templateColumns=" repeat(auto-fit, minmax(300px, 1fr))" gap={10}>
                        {loading ? (<Loader />) : error ? (<Error error='Something Went Wrong' />) : (
                            food?.map((foods) => (
                                <>
                                    <GridItem key={food.id} align={'top'} colSpan={1} >
                                        <VStack align={'start'}>
                                            <Card restaurant={foods} alignItem={'stretch'} />
                                        </VStack>
                                    </GridItem>
                                </>
                            ))
                        )}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default ResturantPage
