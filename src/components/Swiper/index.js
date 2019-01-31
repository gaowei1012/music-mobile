import React from 'react';
// import { Carousel, WingBlank } from 'antd-mobile';
import service from './../../service'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import './index.css';

export default class MSwiper extends React.Component {

    state = {
        silderList: []
    }

    componentDidMount () {
        service.ajax({
            method: 'GET',
            url: '/banner'
        }).then(res => {
            let silderList = res.banners;
            console.log(silderList)
            this.setState({
                silderList  
            }, () => {
                if (!this.sliderSwiper) {
                    // 初始化轮播
                    this.sliderSwiper = new Swiper('.slider-container', {
                        loop: true,
                        autoplay: 3000,
                        autoplayDisableOnInteraction: false,
                        pagination: '.swiper-pagination'
                    })
                }
            })
        })
    }

    render() {
        return (
            <div className="silder-page">
                <div className='slider-container'>
                    <div className='swiper-wrapper'>
                        {
                            this.state.silderList.map(item => (
                                <div className='swiper-slide' key={item.encodeId}>
                                    <a className='slider-nav' href={item.url} title={item.typeTitle}>
                                        <img src={item.imageUrl} alt={item.typeTitle} />
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
            </div>
        )
    }
}