import React, { useState } from 'react';
import './index.scss';
import images from '../../../assets';

function PreviewUploadImg1({ form1, name1, check, onClick }) {
  const [fileInput1, setFileInput1] = useState('');
  const [previewSource1, setPreviewSource1] = useState(form1.getValues(name1) || '');

  const handleChangeImg = e => {
    const file = e.target.files[0];
    if (file) {
        // form1.setValue(name1, file);
        // console.log(name1)
        // console.log(file)
        onClick(file)
      previewFile(file);
    }
    // setFileInput(e.target.value);
  };

  const previewFile = file => {
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource1(reader.result);
    };
  };

  const handleUpload = () => {
    const avartarFile = form1.getValues('avartar_group');
    const bgFile = form1.getValues('img_bg');


    if (bgFile) {
        form1.setValue('avartar_group', avartarFile);
    }

    // Thực hiện xử lý tải lên ảnh của bạn
  };

  return (
    <div className="previewUploadImg">
      <div className="avartar-container" spacing="lg">
        <a className="avatar-update">
          <div className="avartar-img" style={{ backgroundImage: `url(${previewSource1})` }}></div>
          <img src={images.camera} className="icon-camera" />
        </a>
      </div>
      <div className="input-img">
        {check && (
          <label className="chooseImg__label" htmlFor="chooseImg">
            Chọn ảnh
          </label>
        )}
        {name1 && <input
          id="chooseImg1"
          type="file"
          onChange={handleChangeImg}
          value={fileInput1}
          className="inputFile"
        />}  
      </div>
    </div>
  );
}

export default PreviewUploadImg1;
