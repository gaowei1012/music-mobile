import React from 'react';
import { SearchBar } from 'antd-mobile';
import './index.css';

export default class Header extends React.Component {
    
    state = {
        value: ''
    }

    // 取消
    cancel = () => {
        this.setState({value: ''})
    }

    handleSubmit = (value) => {
        console.log(value)
    }

    render() {
        return(
            <div className='page-header'>
                <SearchBar
                    value={this.state.value}
                    placeholder='请输入歌曲名'
                    onCancel={this.cancel}
                    // showCancelButton='false'
                    onSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}