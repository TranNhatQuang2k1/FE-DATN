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
import { useSelector } from 'react-redux'
import Loading from '../../components/Loading'
import EditPassword from './Myoptions/EditPassword'
import Logout from './Myoptions/Logout'

const Profile = () => {
    const token = localStorage.getItem('access_token')
    const { user } = useSelector(state => state)
    const [selectedItem, setSelectedItem] = useState(0);
    const [loading, setLoading] = useState(true);
    const handleSelectedItem = (item) => {
        setSelectedItem(item);
        console.log(item)
      };
    useEffect(() => {
        document.title = 'Trang chủ'
        if(user)
            {
                setLoading(false)
            }
    }, [])
    if(loading)
    {
        return <Loading />
    }
    return (
    <div>
        <div className={selectedItem === 7 ? `bg-color`: ``}></div>
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
                        child1={<Userprofile user={user.profile}/>}
                    />}
                    {selectedItem === 1 && <Myoptions 
                        title={'Sức khỏe của tôi'}
                        option1={'Theo dõi sức khỏe'}
                        option2={'Sàng lọc bệnh'}
                        option3={'Nuôi dạy con'}
                        child1={<Toolheath />}
                        child2={<ScreeningResult />}
                    />}
                    {selectedItem === 5 && <Myoptions 
                        title={'Cập nhật mật khẩu'}
                        child1={<EditPassword />}
                    />}
                    {selectedItem === 7 && <Logout onClick= {handleSelectedItem}/>}
                    
                </section>
            </div>
        </div>
    </div>
    )
}
export default Profile;