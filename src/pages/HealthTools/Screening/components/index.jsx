import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../../../assets'
import Loading from '../../../../components/Loading';
import { path } from '../../../../constants/path';
import { useNavigate } from 'react-router-dom';
const CardScreeing= ({item}) => {
    const [loading, SetLoading] = useState(true);
    const navagate = useNavigate()
    useEffect(() => {
        if(item)
        {
            SetLoading(false)
        }
    }, [item]);
    if(loading) return (
        <Loading />
    )
    const handleonClick= (data) => {
        navagate(`/health-tools/hearttool?item=${JSON.stringify(item)}`)
    }
    return (
        <a 
            onClick={handleonClick}
            class="card-container1" 
        >
                <div class="card-wrap">
                    <img 
                        src= {item?.image} 
                        alt={item?.title}
                        className='img-icons'
                    />
                    <h6 className='name-tool'>{item?.title}</h6>
                </div>
        </a>
    )
}
export default CardScreeing;