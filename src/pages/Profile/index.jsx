import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../assets'
import Myprofile from './Myprofile'
import Myoptions from './Myoptions'

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-layout'>
                <section className='layout-left'>
                    <Myprofile />
                </section>

                <section className='layout-right'>
                    <Myoptions />
                </section>
            </div>
        </div>
    )
}
export default Profile;