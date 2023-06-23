import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import images from '../../assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
MainLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
}

function MainLayout() {
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <div className="mainlayout-content"><Outlet /></div>
            {/* <Footer /> */}
        </>
    )
}

export default MainLayout
