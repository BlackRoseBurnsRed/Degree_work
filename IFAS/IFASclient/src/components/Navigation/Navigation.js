import React from 'react'
import {Link} from 'react-router-dom'
import './navigation.css'

export default class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to='/'>Котировки</Link></li>
                    <li><Link to='/about'>Сети</Link></li>
                    <li><Link to='/contact'>Предсказания</Link></li>
                </ul>
            </nav>
        )
    }
}