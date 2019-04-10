import React, { Component } from 'react';
import ContactList from '../cmps/Contact-list-cmp.js'
import UserService from '../services/UserService.js'
import BitCoinService from '../services/BitCoinService.js'

export default class HomePage extends React.Component {
    state = {
        user: [],
        btRate: null
    }
    async componentDidMount() {
        this.setUser()


    }
    async setUser() {
        const user = UserService.getUser()
        const btRate = await BitCoinService.getRate(1)
        this.setState({
            user,
            btRate
        })

    }
    render() {
        const { user, btRate } = this.state
        return (
            <section className="Home-page-warpper">
                <h1>Name - {user.name}</h1>
                <h2>Coins - {user.coins}</h2>
                <h2>BitCoin Rate - {btRate}</h2>
            </section>
        );
    }

}