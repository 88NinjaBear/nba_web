import React, { Component } from 'react'
import { Input, AutoComplete } from 'antd'

export default class SearchBar extends Component {
    render() {
        return (
            <AutoComplete
                className='search-bar'
            >
                <Input.Search size='large' placeholder='Search NBA Player'></Input.Search>
            </AutoComplete>
        )
    }
}
