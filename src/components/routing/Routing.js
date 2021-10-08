import React from 'react'
import { Route } from 'react-router-dom';

import { Homepage, LoginPage, RegistrationPage, ResturantPage } from '../pages'

const Routing = () => {
    return (
        <>

            <Route path="/" exact component={Homepage} />
            <Route path="/resturants" exact component={ResturantPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/registration" exact component={RegistrationPage} />
        </>
    )
}

export default Routing
