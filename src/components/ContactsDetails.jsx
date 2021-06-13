import React, { Component } from 'react'

export class ContactsDetails extends Component {
    constructor(props) {
        super(props);
      }

    render() {
        const { name, popularity, pictureUrl } = this.props.contact;
        return (
            <tr>
              <td className="w-1/4">
               <img className="w-1/3 inline mb-4" src={pictureUrl} alt={name} />
              </td>
              <td className="w-1/4">{name}</td>
              <td className="w-1/4">{popularity.toFixed(2)}</td>
            </tr>
        )
    }
}

export default ContactsDetails
