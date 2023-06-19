import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../../assets'
import Tabline from '../../../components/Tabline';
import ProfileContext from '../Context/ProfileContext';
const Myoptions = ({title,option1,option2,option3,child1,child2,child3}) => {
    const [id, setId] = useState(0);
    const handletabline = (id) => {
      setId(id);
    };
  
    return (
          <div className='option-container'>
            <h1 className='option-heading'>
                {title}
            </h1>
            <Tabline
                title1={option1}
                title2={option2}
                title3={option3}
                handletabline={handletabline}
            />
            {id === 0 && child1}
            {id === 1 && child2}
            {id === 2 && child3}
        </div>
    );
  };
export default Myoptions;