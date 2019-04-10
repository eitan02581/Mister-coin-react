import React, { Component } from 'react';
import ContactService from '../services/ContactService.js'

export default class ContactDetails extends React.Component {
    state = {
        contact: null
    }
    componentDidMount() {
        this.setContact()
    }
    async  setContact() {
        let contact = await ContactService.getContactById('5a56640269f443a5d64b32ca');

        this.setState({
            contact
        })
    }
    render() {
        const { contact } = this.state
        return (
            contact && <section className="ContactDetails-wrapper">
                <h1>Details</h1>
                <h1>{contact.name}</h1>
            </section>
        )
    }
}


// TODO: LATER WILL BE USED
// ContactDetails.propTypes = {
//     contactId: PropTypes.string
// }