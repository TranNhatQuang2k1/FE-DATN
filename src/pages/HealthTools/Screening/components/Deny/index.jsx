import React, { useEffect, useState } from 'react'
import './index.scss'

const Deny = () => {
    return (
        <div class="deny-responsibility">
            <h3 class="deny-wrap">
                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 14A6 6 0 108 2a6 6 0 000 12z" fill="#2D87F3"></path>
                    <path d="M8 11V8M8 5h.01" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>Miễn trừ trách nhiệm
            </h3>
            <div class="deny-content">Công cụ này không cung cấp lời khuyên y tế mà chỉ dùng để cung cấp thông tin. Nó không thay thế cho lời khuyên, chẩn đoán hoặc điều trị y tế chuyên nghiệp từ bác sĩ. Nếu bạn đang tìm phương pháp điều trị hay đang điều trị, đừng bỏ qua lời khuyên y tế từ bác sĩ chỉ vì một số thông tin bạn đã đọc trên website của chúng tôi. Nếu bạn nghĩ rằng mình đang trong tình trạng khẩn cấp, hãy liên hệ với bác sĩ ngay lập tức.</div>
        </div>
    )
}
export default Deny;