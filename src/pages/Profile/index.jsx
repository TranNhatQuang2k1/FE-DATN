import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../assets'
import Myprofile from './Myprofile'
import Myoptions from './Myoptions'
import Header from '../../components/Header'
import ProfileContext from './Context/ProfileContext'
import Toolheath from './Myoptions/Toolheaths'
import Userprofile from './Myoptions/UserProfile'
import ScreeningResult from './Myoptions/Screening'

const Profile = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    const handleSelectedItem = (item) => {
        setSelectedItem(item);
        // console.log(item)
      };
    return (
    <div>
        <Header />
        <div className='profile-container'>
            <div className='profile-layout'>
                <section className='layout-left'>
                    <Myprofile onSelectedItem={handleSelectedItem}/>
                </section>

                <section className='layout-right'>
                {selectedItem === 0 && <Myoptions 
                        title={'Hồ sơ'}
                        option1={''}
                        option2={''}
                        option3={''}
                        child1={<Userprofile />}
                    />}
                    {selectedItem === 1 && <Myoptions 
                        title={'Sức khỏe của tôi'}
                        option1={'Theo dõi sức khỏe'}
                        option2={'Sàng lọc bệnh'}
                        option3={'Nuôi dạy con'}
                        child1={<Toolheath />}
                        child2={<ScreeningResult />}
                    />}
                    
                </section>
            </div>
        </div>
    </div>
    )
}
export default Profile;