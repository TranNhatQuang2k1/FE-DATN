import React, { useState } from 'react'
import './index.scss'
import images from '../../assets'

PreviewUploadImg.propTypes = {}

function PreviewUploadImg({ form, name, urlimage,check }) {
    const [fileInput, setFileInput] = useState('')
    const [previewSource, setPreviewSource] = useState(urlimage)
    const handleChangeImg = e => {
        const file = e.target.files[0]
        if (file) form.setValue(name, file)
        setFileInput(e.target.value)
        previewFile(file)
    }
    const previewFile = file => {
        if (!file)
            return
        const reader = new FileReader(file)
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }
    return (
        <div className="previewUploadImg">
            {/* <div className="previewUploadImg__container">
                <div className="previewUploadImg__img" style={{ backgroundImage: `url(${previewSource})`}}>
                    {previewSource && <img alt="img" src={previewSource} />}
                    {!previewSource && form.getValues('image') !== '' && <img alt="" src={form.getValues('image')} />}
                    {!previewSource && form.getValues('image') === '' && <img alt="" src="../../assets/img/user.png" />}
                </div>
            </div> */}
                    <div 
                        className="avartar-container" 
                        spacing="lg">
                        <a  className="avatar-update">
                            <div class="avartar-img" style={{ backgroundImage: `url(${previewSource})`}}></div>
                            <img src={images.camera} className='icon-camera'/>
                        </a>
                    </div>
                    <div className='input-img'>
                        {check && <label
                            className="chooseImg__label"
                            htmlFor="chooseImg"
                        >
                            Chọn ảnh
                        </label>
                        }
                        <input
                            id="chooseImg"
                            type="file"
                            onChange={handleChangeImg}
                            value={fileInput}
                            className="inputFile"
                        />
                </div>
        </div>
    )
}

export default PreviewUploadImg