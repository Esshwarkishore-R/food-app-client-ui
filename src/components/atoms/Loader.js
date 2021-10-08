import React from 'react'
import LoaderIcon from "react-loader-spinner";

const Loader = () => {
    return (
        <>
            <LoaderIcon
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
            />
        </>
    )
}

export default Loader
