import React, { Component } from 'react';
import ContactService from '../services/ContactService.js'
import ContactList from '../cmps/Contact-list-cmp.js'
import ContactFilter from '../cmps/Contact-filter-cmp.js';
export default class HomePage extends React.Component {
    state = {
        contacts: [],
        filterd: null
    }
    async componentDidMount() {
        this.setContacts()
    }
    async setContacts() {
        const contacts = await ContactService.getContacts()
        this.setState({
            contacts,
        })
    }

    filterBy = (filterBy) => {
        let contacts = this.state.contacts
        contacts = contacts.filter(contact =>
            contact.name.includes(filterBy) || contact.email.includes(filterBy) || contact.phone.includes(filterBy))
        this.setState({
            filterd: contacts
        })
    }
    render() {
        const { contacts, filterd } = this.state
        return (
            <section className="Contact-page-warpper">
                <ContactFilter filterBy={this.filterBy.bind(this)} />
                {contacts && <ContactList contacts={filterd ? filterd : contacts} />}
            </section>
        );
    }

}