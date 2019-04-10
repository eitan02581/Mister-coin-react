import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class ContactFilter extends React.Component {
    state = {
        search: null
    }
    onFilter = (ev) => {
        this.props.filterBy(ev.target.value)
    }
    render() {
        return (
            <section className="Contact-preview-wapper">
                <input value={this.state.search} onChange={this.onFilter} />
            </section>
        )
    }
}
ContactFilter.propTypes = {
    filterBy: PropTypes.func
}