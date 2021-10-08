import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterRestaurant } from "../../actions/foodActions"
import {
    Box, Input, Container, Select, Button
} from '@chakra-ui/react';

const Filter = () => {
    const dispatch = useDispatch();
    const [search, setSearchKey] = useState('')
    const [category, setCategory] = useState('all')
    return (
        <>
            <Box>
                <Container
                    backgroundColor={'white'}
                    maxW={'4xl'}
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 10, lg: 20 }}
                    py={{ base: 10, sm: 10, lg: 10 }}
                    opacity={'0.97'}
                    rounded={'10'}
                >
                    <Input placeholder="Search for resturants" size="md" value={search} onChange={(e) => (setSearchKey(e.target.value))} mb={3} />
                    <Select placeholder="Select option" value={category} onChange={(e) => (setCategory(e.target.value))}>
                        <option value="all">All</option>
                        <option value="south indian">South Indian</option>
                        <option value="north indian">North Indian</option>
                        <option value="sweets and snacks">Sweets and snacks</option>
                    </Select>
                    <Button
                        fontFamily={'heading'}
                        mt={8}
                        mb={2}
                        w={'full'}
                        bgGradient="linear(to-r, red.400,pink.400)"
                        color={'white'}
                        onClick={() => { dispatch(filterRestaurant(search, category)) }}
                        _hover={{
                            bgGradient: 'linear(to-r, red.400,pink.400)',
                            boxShadow: 'xl',
                        }}>
                        Filter
                    </Button>
                    <Button
                        fontFamily={'heading'}
                        mt={2}
                        mb={2}
                        w={'full'}
                        bgGradient="linear(to-r, red.400,pink.400)"
                        color={'white'}
                        onClick={() => { dispatch(filterRestaurant(search, category, 'high')) }}
                        _hover={{
                            bgGradient: 'linear(to-r, red.400,pink.400)',
                            boxShadow: 'xl',
                        }}>
                        Sort By Highest Price
                    </Button>
                    <Button
                        fontFamily={'heading'}
                        mt={2}
                        mb={2}
                        w={'full'}
                        bgGradient="linear(to-r, red.400,pink.400)"
                        color={'white'}
                        onClick={() => { dispatch(filterRestaurant(search, category, 'low')) }}
                        _hover={{
                            bgGradient: 'linear(to-r, red.400,pink.400)',
                            boxShadow: 'xl',
                        }}>
                        Sort By Lowest Price
                    </Button>
                </Container>
            </Box>
        </>
    )
}

export default Filter
