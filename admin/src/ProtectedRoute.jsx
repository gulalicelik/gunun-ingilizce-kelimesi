import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {MainContext} from "./contexts/MainContext";


const PrivateRoute = ({component: Component, ...otherProps}) => {

    const {isLogged} = useContext(MainContext)
    console.log("isLogged", isLogged);
    return (
        <Route
            {...otherProps}
            render={props => (
                isLogged
                    ?
                    <Component {...props} />
                    :
                    <Redirect to={otherProps.redirectTo ? otherProps.redirectTo : '/auth'}/>


            )}
        />
    )

}

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired
}

export default PrivateRoute