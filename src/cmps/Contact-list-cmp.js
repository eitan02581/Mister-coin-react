
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ContactPreview from './Contact-preview-cmp.js'

export default class ContactList extends React.Component {
    state = {

    }
    componentDidMount() {
    }
    render() {
        const contacts = this.props.contacts.map(contact => {
            return (<li key={contact._id}>
                <ContactPreview contact={contact} />
            </li>)
        })
        return (
            this.props.contacts.length && < section className="List-wrapper">
                <ul>
                    {
                        contacts
                    }
                </ul>
            </section>
        );
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}