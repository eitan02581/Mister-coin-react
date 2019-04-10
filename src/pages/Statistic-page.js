import React, { Component } from 'react';
import Chart from '../cmps/Chart-cmp.js'
import BitCoinService from '../services/BitCoinService.js'

export default class StatisticPage extends React.Component {

    state = {
        marketPriceList: []
    }
    componentDidMount() {
        var marketPriceList = BitCoinService.getMarketPrice().values
        this.setState({
            marketPriceList
        })

    }
    render() {
        const { marketPriceList } = this.state

        return (
            <section className="Stats-wrapper">
                <h1>hey from stats</h1>
                {marketPriceList && <Chart marketPriceList={marketPriceList} />}
            </section>
        )
    }
}

