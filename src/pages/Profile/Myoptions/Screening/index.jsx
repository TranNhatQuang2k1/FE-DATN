import React, { useEffect, useState } from 'react'
import './index.scss'
import images from '../../../../assets'
import Tabline from '../../../../components/Tabline';
import toolinfor from '../../Toollist';

let toollist = [
    {
        title: 'Công cụ sàng lọc tầm soát bệnh tim mạch',
        result: 'Nguy cơ thấp',
        unit: '',
        updatetime: 'Cập nhật 3 ngày trước',
        urlimage: 'https://cdn.hellobacsi.com/wp-content/uploads/2021/11/icon_cardiovascular.png',
    },
    {
        title: 'Sàng lọc ung thư phổi',
        result: 'Nguy cơ trung bình',
        unit: '',
        updatetime: 'Cập nhật 2 ngày trước',
        urlimage: 'https://cdn.hellobacsi.com/wp-content/uploads/2021/11/icon_lung_cancer.png',
    },
    {
        title: 'Sàng lọc nguy cơ đột quỵ của bệnh nhân rung tâm nhĩ',
        result: 'Nguy cơ cao',
        unit: '',
        updatetime: 'Cập nhật 2 ngày trước',
        urlimage: 'https://cdn.hellobacsi.com/wp-content/uploads/2021/11/icon_atrial_fibrillation.png',
    }
]
const ScreeningResult =() => 
{
    return (
        <div class="tool-infor">
        {toollist?.map(e => {
            return (
                toolinfor(e.title, e.result,e.unit,e.updatetime,e.urlimage)
            )
        })}
    </div>
    )
}
export default ScreeningResult;