import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AppContext";

function RouteMiddleware({ children, middleware }) {
    const { auth } = useContext(AuthContext);
    const location = useLocation();

    const middlewareList = ['authentication', 'public'];

    if(!middlewareList.includes(middleware)) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    if (middleware === 'authentication' && !auth) {
        return <Navigate to="login" state={{ from: location }} replace />
    }

    if (middleware === 'public' && auth) {
        return <Navigate to="/" state={{ from: location }} replace />
    }

    return children;
}

RouteMiddleware.propTypes = {
    children: PropTypes.element.isRequired,
    middleware: PropTypes.string.isRequired
}

export default RouteMiddleware;
