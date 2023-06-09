import React, {useEffect, useState} from "react";
import images from "../../assets";
import './index.scss';
const Share = () => {
    return (
        <div className="share-container">
            <div className="share-wrap">
                <div className="share-content">
                    <div className="icon-content">
                        <p >Chia sẻ kết quả</p>
                        <div className="icon-group">
                            <a href="" target="_blank" rel="noreferrer">
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.5 0H5.5C2.73858 0 0.5 2.23858 0.5 5V27C0.5 29.7614 2.73858 32 5.5 32H27.5C30.2614 32 32.5 29.7614 32.5 27V5C32.5 2.23858 30.2614 0 27.5 0Z" fill="#1778F2">
                                    </path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.814 32V19.499H24.069L24.5 15.19H20.814L20.82 13.034C20.82 11.911 20.92 11.309 22.443 11.309H24.477V7H21.222C17.312 7 15.937 9.09 15.937 12.604V15.191H13.5V19.499H15.937V32H20.814Z" fill="white">
                                    </path>
                                </svg>
                            </a>
                            <a target="_blank" rel="noreferrer" >
                                <img src="https://hhg-common.hellobacsi.com/common/zalo-mini.png" alt="Zalo" />
                            </a>
                            <a href="" target="_blank">
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" width="32" height="32" rx="4" fill="#1FA1F3"></rect>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2304 13.2349L16.2708 13.8692L15.5964 13.7916C13.1417 13.4938 10.9972 12.484 9.17631 10.788L8.2861 9.94646L8.05683 10.5679C7.57124 11.9532 7.88149 13.4161 8.89305 14.4001C9.43257 14.9438 9.31116 15.0215 8.38052 14.6978C8.05683 14.5943 7.77357 14.5166 7.74658 14.5554C7.65216 14.646 7.97591 15.8241 8.23218 16.2902C8.58286 16.9376 9.29766 17.5719 10.08 17.9474L10.7409 18.2452L9.9586 18.2581C9.20324 18.2581 9.17631 18.271 9.25723 18.5429C9.52699 19.3844 10.5925 20.2777 11.7794 20.6661L12.6157 20.938L11.8873 21.3523C10.8083 21.9478 9.54049 22.2844 8.2726 22.3103C7.66566 22.3232 7.16663 22.375 7.16663 22.4139C7.16663 22.5433 8.81213 23.2684 9.76976 23.5531C12.6427 24.3947 16.055 24.0322 18.6177 22.5951C20.4385 21.5724 22.2593 19.5398 23.1091 17.5719C23.5677 16.5232 24.0263 14.6072 24.0263 13.688C24.0263 13.0925 24.0667 13.0148 24.822 12.3027C25.2671 11.8885 25.6853 11.4353 25.7662 11.3059C25.901 11.0598 25.8875 11.0598 25.1997 11.28C24.0532 11.6683 23.8913 11.6166 24.4579 11.034C24.876 10.6197 25.375 9.86879 25.375 9.64873C25.375 9.60987 25.1727 9.67458 24.9434 9.79112C24.7006 9.92061 24.1611 10.1148 23.7565 10.2313L23.0281 10.4514L22.3673 10.0241C22.0031 9.79112 21.4905 9.53219 21.2208 9.45452C20.5329 9.27327 19.4809 9.29918 18.8605 9.50628C17.1745 10.0889 16.1089 11.5907 16.2304 13.2349Z" fill="white"></path>
                                </svg>
                            </a>
                            <a>
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_687_88944)">
                                        <path d="M29.5309 0H3.46909C1.82931 0 0.5 1.32931 0.5 2.96909V29.0309C0.5 30.6707 1.82931 32 3.46909 32H29.5309C31.1707 32 32.5 30.6707 32.5 29.0309V2.96909C32.5 1.32931 31.1707 0 29.5309 0Z" fill="url(#paint0_linear_687_88944)"></path>
                                        <path d="M23.5545 8.94548C21.8898 7.2642 19.6792 6.23313 17.3212 6.03825C14.9633 5.84336 12.6134 6.49749 10.6953 7.88265C8.77715 9.2678 7.41716 11.2928 6.86059 13.5924C6.30403 15.8919 6.58753 18.3147 7.65997 20.4237L6.60724 25.5346C6.59632 25.5854 6.59601 25.638 6.60633 25.689C6.61665 25.74 6.63739 25.7883 6.66724 25.8309C6.71097 25.8956 6.77338 25.9454 6.84616 25.9737C6.91893 26.0019 6.99859 26.0073 7.07451 25.9891L12.0836 24.8018C14.1866 25.8471 16.5923 26.1124 18.8725 25.5505C21.1528 24.9885 23.1597 23.6358 24.5362 21.7331C25.9128 19.8303 26.5696 17.5009 26.3898 15.1593C26.21 12.8177 25.2053 10.6158 23.5545 8.94548ZM21.9927 21.4109C20.8409 22.5595 19.3578 23.3176 17.7523 23.5786C16.1468 23.8395 14.4998 23.5901 13.0436 22.8655L12.3454 22.52L9.27451 23.2473L9.2836 23.2091L9.91997 20.1182L9.57815 19.4437C8.83408 17.9823 8.57159 16.323 8.82831 14.7034C9.08502 13.0837 9.84775 11.5869 11.0072 10.4273C12.4642 8.97083 14.4399 8.15263 16.5 8.15263C18.56 8.15263 20.5358 8.97083 21.9927 10.4273C22.0051 10.4415 22.0185 10.4549 22.0327 10.4673C23.4716 11.9275 24.2748 13.8974 24.2673 15.9474C24.2598 17.9974 23.4422 19.9613 21.9927 21.4109Z" fill="white"></path>
                                        <path d="M21.7199 19.1436C21.3436 19.7364 20.749 20.4618 20.0017 20.6418C18.6926 20.9582 16.6836 20.6527 14.1836 18.3218L14.1526 18.2946C11.9545 16.2564 11.3836 14.56 11.5217 13.2146C11.5981 12.4509 12.2345 11.76 12.7708 11.3091C12.8556 11.2367 12.9562 11.1852 13.0645 11.1586C13.1727 11.1321 13.2857 11.1312 13.3944 11.1561C13.503 11.181 13.6044 11.231 13.6903 11.3021C13.7761 11.3732 13.8442 11.4634 13.889 11.5655L14.6981 13.3836C14.7507 13.5015 14.7702 13.6315 14.7545 13.7596C14.7388 13.8878 14.6885 14.0092 14.609 14.1109L14.1999 14.6418C14.1121 14.7515 14.0592 14.8848 14.0478 15.0248C14.0365 15.1648 14.0673 15.305 14.1363 15.4273C14.3654 15.8291 14.9145 16.42 15.5236 16.9673C16.2072 17.5855 16.9654 18.1509 17.4454 18.3436C17.5738 18.3961 17.715 18.4089 17.8508 18.3804C17.9866 18.3519 18.1107 18.2834 18.2072 18.1836L18.6817 17.7055C18.7733 17.6152 18.8872 17.5508 19.0117 17.5188C19.1363 17.4869 19.2671 17.4886 19.3908 17.5236L21.3126 18.0691C21.4187 18.1016 21.5158 18.158 21.5967 18.2338C21.6776 18.3096 21.7401 18.4029 21.7794 18.5066C21.8187 18.6103 21.8338 18.7216 21.8235 18.832C21.8132 18.9424 21.7777 19.049 21.7199 19.1436Z" fill="white"></path>
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_687_88944" x1="16.5" y1="0.130909" x2="16.5" y2="30.4509" gradientUnits="userSpaceOnUse"><stop stop-color="#36F46C"></stop><stop offset="1" stop-color="#03D749"></stop>
                                        </linearGradient>
                                        <clipPath id="clip0_687_88944">
                                            <rect width="32" height="32" fill="white" transform="translate(0.5)"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="btn-container">
                        <button className="btn-wrap color-1">
                            <span className="btn-content">
                                <span className="text">Khám phá Sức khỏe của tôi</span>
                            </span>
                        </button>
                        <button className="btn-wrap color-2">
                            <span className="btn-content">
                                <span className="text">Kiểm tra lại</span>
                            </span>
                        </button>
                    </div>

                </div>

                <div className="recommend-container">
                    <div className="recommend-wrap">
                        <div className="img-icon">
                            <img src="	https://hellobacsi.com/svg/bmi.svg" alt=""/>
                        </div>
                        <div className="recommend-content">
                            <p className="text-content">Tính chỉ số BMI của bạn và kiểm tra xem bạn có cân nặng khỏe mạnh hay không. Có thể sử dụng để kiểm tra BMI của con bạn.</p>
                            <a href="/health-tools/cach-tinh-chi-so-bmi/" className="recommend-btn">
                                <button className="btn-container">
                                    <span className="btn-wrap">
                                        <span className="btn-text">Tính chỉ số BMI của bạn</span>
                                        <span className="btn-icon">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.80175 8.99975L6.936 6.134C6.6255 5.8235 6.6255 5.3195 6.936 5.009C7.2465 4.6985 7.7505 4.6985 8.061 5.009L11.5215 8.4695C11.8148 8.76275 11.8148 9.2375 11.5215 9.53L8.061 12.9905C7.7505 13.301 7.2465 13.301 6.936 12.9905C6.6255 12.68 6.6255 12.176 6.936 11.8655L9.80175 8.99975Z" fill="#2D87F3"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Share;