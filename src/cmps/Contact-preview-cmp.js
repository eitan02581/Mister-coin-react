
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// TODO: SHOULD BE STATLESS COMP BECAUSE SHE ONLY RENDER

export default class ContactPreview extends React.Component {
    state = {

    }
    render() {
        return (
            <section className="Contact-preview-wapper">
                <div>
                    <img src={`https://robohash.org/${this.props.contact.name}`}></img>
                    <h1>{this.props.contact.name}</h1>
                </div>
            </section>
        )
    }
}

ContactPreview.propTypes = {
    contact: PropTypes.object
}





