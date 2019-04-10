import React from 'react';
import PropTypes from 'prop-types';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default class Chart extends React.Component {
    componentDidMount() {

    }
    render() {
        const marketPriceList = this.props.marketPriceList.map(val => val.y)
        console.log(marketPriceList);

        return (
            <section>
                <Sparklines data={marketPriceList} limit={30} width={100} height={20} margin={5}>
                    <SparklinesLine color="blue" />
                </Sparklines>
                <Sparklines data={marketPriceList} limit={30} width={100} height={20} margin={5}>
                    <SparklinesLine color="blue" />
                </Sparklines>
            </section>
        );

    }
}


Chart.propTypes = {
    marketPriceList: PropTypes.arrayOf(PropTypes.object)
}
