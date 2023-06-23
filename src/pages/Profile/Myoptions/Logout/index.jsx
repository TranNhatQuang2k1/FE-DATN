import React from 'react'
import './index.scss'
import Button from '../../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../Auth/userSlice';
const Logout = ({onClick}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }
    return (
        <div className='logout-container'>
                <div className='logout-wrap'>
                    <span class="icon-logout">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-custo="fill" class="icon icon--close">
                            <path d="M5.99007 4.99018C5.79114 4.99023 5.59674 5.04961 5.43173 5.16073C5.26672 5.27184 5.1386 5.42964 5.06374 5.61395C4.98889 5.79826 4.9707 6.00071 5.0115 6.19542C5.05231 6.39012 5.15025 6.56823 5.29281 6.70698L10.5858 11.9999L5.29281 17.2929C5.19684 17.3851 5.12021 17.4954 5.06743 17.6176C5.01464 17.7397 4.98676 17.8711 4.9854 18.0042C4.98405 18.1372 5.00926 18.2692 5.05954 18.3924C5.10983 18.5155 5.1842 18.6274 5.27827 18.7215C5.37235 18.8156 5.48426 18.89 5.60743 18.9402C5.73061 18.9905 5.86259 19.0157 5.99563 19.0144C6.12867 19.013 6.2601 18.9851 6.38223 18.9324C6.50436 18.8796 6.61473 18.803 6.70687 18.707L11.9998 13.414L17.2928 18.707C17.385 18.803 17.4953 18.8796 17.6175 18.9324C17.7396 18.9851 17.871 19.013 18.0041 19.0144C18.1371 19.0157 18.2691 18.9905 18.3922 18.9402C18.5154 18.89 18.6273 18.8156 18.7214 18.7215C18.8155 18.6274 18.8899 18.5155 18.9401 18.3924C18.9904 18.2692 19.0156 18.1372 19.0143 18.0042C19.0129 17.8711 18.985 17.7397 18.9323 17.6176C18.8795 17.4954 18.8028 17.3851 18.7069 17.2929L13.4139 11.9999L18.7069 6.70698C18.8514 6.56652 18.9501 6.38567 18.99 6.18815C19.03 5.99063 19.0093 5.78565 18.9308 5.60007C18.8523 5.41448 18.7195 5.25695 18.5499 5.14812C18.3803 5.03929 18.1817 4.98424 17.9803 4.99018C17.7205 4.99792 17.4739 5.1065 17.2928 5.29292L11.9998 10.5859L6.70687 5.29292C6.61368 5.19712 6.50224 5.12098 6.37912 5.06898C6.25601 5.01698 6.12372 4.99019 5.99007 4.99018Z" fill="#595959"></path>
                        </svg>
                    </span>
                    <div class="logout-text">
                        <img src="https://id.hellobacsi.com/user/static/media/picto-logout-hb.95cc579171602e56316d144d378af3de.svg" class="img-icon"/>
                        <h2 class="text-1">Đăng xuất?</h2>
                        <p class="text-2">Bạn có chắc chắn muốn đăng xuất?</p>
                    </div>
                    <div class="btn-logout">
                        
                        <Button title={'Đăng xuất'} onClick={() => {
                            handleLogout();
                        }}/>
                        <Button title={'Hủy'} onClick={(item)=> {
                            onClick(0)
                        }}/>
                    </div>
                </div>
            </div>
    )
}
export default Logout;