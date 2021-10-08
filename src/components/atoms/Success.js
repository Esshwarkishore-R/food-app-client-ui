import React from 'react'
import { Box } from '@chakra-ui/react';
const Success = (success) => {
    return (
        <>
            <Box
                p="40px"
                color="white"
                mt="4"
                bg="green.500"
                rounded="md"
                shadow="md"
            >
                {success.success}
            </Box>
        </>
    )
}

export default Success