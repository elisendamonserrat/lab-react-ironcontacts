import React, { Component } from 'react'

export class ContactsDetails extends Component {
    constructor(props) {
        super(props);
      }

    handleDelete = () => {
      this.props.onDelete(this.props.contact)
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
              <td>
                <button className="border bg-red-400 font-semibold px-2 py-1 text-white" onClick={this.handleDelete} >Delete</button>
              </td>
            </tr>
        )
    }
}

export default ContactsDetails
