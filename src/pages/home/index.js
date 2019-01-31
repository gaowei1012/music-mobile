import React from 'react';
import { Tabs, Grid } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import service from '../../service';
import MHeader from '../../components/Header';
import './index.css';
import MSwiper from '../../components/Swiper';
import Itmes from '../../components/Items';

export default class MusicHome extends React.Component {

    state = {
        tabs: []
    }

    componentDidMount () {
    }

    render() {
        const tabs = [
            {title: '个性推荐'},
            {title: '主播电台'}
        ];
        const grids = [
            {icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '私人FM'},
            {icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '每日推荐'},
            {icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '歌单'},
            {icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '排行榜'}
        ]
        return (
            <div style={{overflow: 'hidden'}}>
                <MHeader />
                <StickyContainer>
                    <Tabs 
                        tabs={tabs}
                    >
                    </Tabs>
                </StickyContainer>
                <MSwiper />
                <div style={{marginTop: '6px'}}>
                    <Grid data={grids} style={{ padding: '0 4px'}}/>
                </div>
                <div style={{marginTop: '8px'}}>
                    <Itmes />
                </div>
            </div>
        )
    }
} 