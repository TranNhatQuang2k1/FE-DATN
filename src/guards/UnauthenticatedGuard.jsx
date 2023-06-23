import React from 'react'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useAuthenticated } from '../hooks/useAuthenticated'
import { path } from '../constants/path'

function UnauthenticatedGuard() {
    const authenticated = useAuthenticated()

    if (authenticated) return <Navigate to={path.home} />
    return (
        <>
            <Outlet />
        </>
    )
}
export default UnauthenticatedGuard
