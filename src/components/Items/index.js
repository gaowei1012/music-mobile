import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import { Icon } from 'antd-mobile';

export default class Itmes extends React.PureComponent {
    
    constructor(props) {
        super(props)

    }

    componentDidMount () {
        
    }

    render() {
        return (
            <div className="item-page">
                <div className='title'>
                    <NavLink
                        to='/'
                    >title<Icon type='right' /></NavLink>
                </div>
                <div className='content'>
                    <img src='' alt='' />
                    <span className='desc'>描述信息</span>
                </div>
            </div>
        )
    }
}