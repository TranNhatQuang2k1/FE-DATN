import React, {useEffect, useState} from "react";
import images from "../../../../assets";
import './index.scss';
const Banner = ({style}) => {
    return (
        <div 
            className="banner" 
            style= {style}
        >
                        <a className="banner-href" 
                            data-event-category="Top Article Banner" 
                            data-event-action="Click 1" 
                            data-event-label="https://hellobacsi.com/thuoc/thuoc-tri-covid-19-2/" 
                            href="/thuoc/thuoc-tri-covid-19-2/">
                                <span className="banner-span">
                                    <img 
                                        alt="thuoc-tri-covid-19-2" 
                                        sizes="100vw"
                                        className="banner-img"
                                        srcset="https://cdn.hellobacsi.com/wp-content/uploads/2023/05/thuoc-tri-covid.jpg?w=640&amp;q=75 640w, https://cdn.hellobacsi.com/wp-content/uploads/2023/05/thuoc-tri-covid.jpg?w=750&amp;q=75 750w, https://cdn.hellobacsi.com/wp-content/uploads/2023/05/thuoc-tri-covid.jpg?w=828&amp;q=75 828w, https://cdn.hellobacsi.com/wp-content/uploads/2023/05/thuoc-tri-covid.jpg?w=1080&amp;q=75 1080w, https://cdn.hellobacsi.com/wp-content/uploads/2023/05/thuoc-tri-covid.jpg?w=1200&amp;q=75 1200w, https://cdn.hellobacsi.com/wp-content/uploads/2023/05/thuoc-tri-covid.jpg?w=1920&amp;q=75 1920w, https://cdn.hellobacsi.com/wp-content/uploads/2023/05/thuoc-tri-covid.jpg?w=2048&amp;q=75 2048w, https://cdn.hellobacsi.com/wp-content/uploads/2023/05/thuoc-tri-covid.jpg?w=3840&amp;q=75 3840w" 
                                        src="https://cdn.hellobacsi.com/wp-content/uploads/2023/05/thuoc-tri-covid.jpg?w=3840&amp;q=75" decoding="async" data-nimg="fill"/>
                                </span>
                        </a>

                </div>
    )
}
const PostCard = ({style,description,stylearticle}) => {
    return (
        <div className="left-content">
        <article 
            class="left-article"
            style={stylearticle}
            data-size="lg" 
            >
                <Banner style={style}/>
                <div 
                    class="content">
                        <div class="inner-content">
                            <p 
                                data-size="c2" 
                                data-type="caption" 
                                className="inner-content-title" 
                                >
                                    <a 
                                        class="text-decor title-href" 
                                        data-event-category="Top Category Title" 
                                        data-event-action="Click 1" 
                                        data-event-label="https://hellobacsi.com/thuoc/" 
                                        href="/thuoc/">Thuốc và thực phẩm chức năng
                                    </a>
                                    <a 
                                        class="text-decor">
                                            <svg 
                                                data-event-category="Bookmark" 
                                                data-event-action="Click" 
                                                data-event-label="https://hellobacsi.com/thuoc/thuoc-tri-covid-19-2/" 
                                                width="18" height="18" viewBox="0 0 18 18" fill="none" 
                                                xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.75 2.25H5.25C4.425 2.25 3.75 2.925 3.75 3.75V15.75L9 13.5L14.25 15.75V3.75C14.25 2.925 13.575 2.25 12.75 2.25Z" fill="#D2D6DC"></path>
                                            </svg>
                                    </a>
                            </p>
                            <h2 
                                data-tag="h4" 
                                class="inner-intro">
                                    <a 
                                        className="text-decor intro-title" 
                                        data-event-category="Top Article Title" 
                                        data-event-action="Click 1" 
                                        data-event-label="https://hellobacsi.com/thuoc/thuoc-tri-covid-19-2/" 
                                        href="/thuoc/thuoc-tri-covid-19-2/">Bộ Y tế hướng dẫn sử dụng thuốc trị Covid 19
                                    </a>
                            </h2>
                            <a 
                                className="text-decor intro-text"
                                href="/thuoc/thuoc-tri-covid-19-2/">
                                <p data-size="p3" data-type="regular" class="">{description}
                                </p>
                            </a>
                        </div>
                        <div 
                    class="footer">
                        <div class="footer-wrap">
                            <div class="author">
                                {/* <div class="avatar" data-size="lg">
                                    <a href="/author/lan-luong">
                                        <div class="sc-daf66c17-0 hglnJj">
                                            <div class="sc-daf66c17-3 BaHkn">
                                                <span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
                                                    <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
                                                        <img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"/>
                                                    </span>
                                                        <img alt="Ảnh tác giả" src="https://cdn.hellobacsi.com/wp-content/uploads/2021/06/Luong-Thi-Lan-min-150x150.jpg?w=64&amp;q=75" decoding="async" data-nimg="intrinsic" class="avatar" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover" srcset="https://cdn.hellobacsi.com/wp-content/uploads/2021/06/Luong-Thi-Lan-min-150x150.jpg?w=32&amp;q=75 1x, https://cdn.hellobacsi.com/wp-content/uploads/2021/06/Luong-Thi-Lan-min-150x150.jpg?w=64&amp;q=75 2x"/>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div> */}

                                <div class="poster" data-is-disabled-url="false">
                                    <p data-size="p3" data-type="regular" class="poster-p">
                                        <a href="/author/lan-luong" className="poster-a">
                                            <span class="name">Thông tin kiểm chứng bởi 
                                                <span class="author-name">Lương Lan</span>
                                            </span>•
                                        </a>
                                        <span>6 ngày trước</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
        </article>
    </div>
    )
}
const Content = () => {
    const [check, setCheck] = useState(true)
    useEffect(() => {

      }, []);
    return (
        <div data-is-top-bar-appears="true" class="content-top-container">
            <div 
                class="content-title">
                    <div 
                        class="detail">
                            <div data-event-category="Trending" 
                                data-event-action="Click" 
                                data-event-label="https://hellobacsi.com/latest" 
                                class={check ? 'trending': 'latest'}
                                onClick={() => {
                                    if(!check)
                                        {
                                            setCheck(!check)
                                        }
                                }
                            }
                                >
                                <img 
                                    src="https://hellobacsi.com/images/trendingUp.svg" width="16px" height="16px" alt="trendingUp" 
                                        class="trending-img"/><p class="text-top">Bài viết nổi bật</p>
                            </div>
                            <div 
                                data-event-category="Latest News" 
                                data-event-action="Click" 
                                data-event-label="https://hellobacsi.com/trending" 
                                class={check ? 'latest': 'trending'}
                                onClick={() => {
                                    if(check)
                                        {
                                            setCheck(!check)
                                        }
                                }
                            }
                                >
                                    <p class="text-top">Bài viết mới nhất</p>
                            </div>
                    </div>
            </div>
            <div className="post-top-child">
                <div className="post-top-wrap">
                        <div className="post-top-left">
                            <PostCard description={'Hiện nay, số ca nhiễm Covid-19 đang có dấu hiệu tăng trở lại, cùng với thời điểm mà các bệnh hô hấp khác cũng bùng phát. Nhiều người bắt đầu mua thuốc trị covid để dự trữ tại nhà. Tuy nhiên, nếu bạn dùng thuốc không theo chỉ dẫn của bác sĩ có thể lãnh .'}/>
                        </div>
                        <div className="post-top-right">
                            <PostCard style={{ width: 446+ 'px', height: 300+ 'px', padding: 16 + 'px'}}/>
                            <hr class="post-top-space space"></hr>
                            <div className="post-top-bottom">
                                <PostCard 
                                    stylearticle={{'flex-direction': 'row-reverse', padding: 0+ 'px', gap: 16+ 'px'}}
                                    style={{ width: 268+ 'px', height: 112+ 'px',}}
                                />
                            </div>
                        </div>
                        <hr class="post-top-space space"></hr>
                        {/* <hr class="post-top-space space"></hr> */}
                        <div class="post-top-end">
                            <PostCard 
                                stylearticle={{'flex-direction': 'colum', padding: 0+ 'px', height: 340+ 'px', width: 270+ 'px'}}
                            />

                            <PostCard 
                                stylearticle={{'flex-direction': 'colum', padding: 0+ 'px', height: 340+ 'px', width: 270+ 'px'}}
                            />

                            <PostCard 
                                stylearticle={{'flex-direction': 'colum', padding: 0+ 'px', height: 340+ 'px', width: 270+ 'px'}}
                            />
                            <PostCard 
                                stylearticle={{'flex-direction': 'colum', padding: 0+ 'px', height: 340+ 'px', width: 270+ 'px'}}
                            />
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Content;