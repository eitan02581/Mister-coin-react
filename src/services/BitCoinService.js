import axios from 'axios'
import marketPrice from '../data/market-price.json'
getRate()
async function getRate(coins) {
    let rate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
    return rate.data

}

function getMarketPrice() {
    return marketPrice
}

export default {
    getRate,
    getMarketPrice
}