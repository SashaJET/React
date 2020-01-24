import React, { Component } from 'react';
import ContactsListItem from './ContactsListItem';

export default class ContactsList extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Возраст</th>
                        <th>Тел.</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.contacts.map((item) => (
                    <ContactsListItem key={item.id} item={item} />))}
                    
                </tbody>
            </table>
        )
    }
}
