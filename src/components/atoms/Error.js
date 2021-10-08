import React from 'react'
import { Box } from '@chakra-ui/react';
const Error = ({ error }) => {
    return (
        <>
            <Box
                p="40px"
                color="white"
                mt="4"
                bg="red.500"
                rounded="md"
                shadow="md"
            >
                {error}
            </Box>
        </>
    )
}

export default Error