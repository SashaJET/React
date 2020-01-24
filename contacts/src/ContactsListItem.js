import React, { Component } from 'react';

export default class ContactsListItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.surname}</td>
                <td>{this.props.item.age}</td>
                <td>{this.props.item.phone}</td>
            </tr>
        )
    }
}
