import './App.css';
import { Component } from 'react';
import contacts from "./contacts.json";
import ContactsDetails from './components/ContactsDetails'

const contactsArray = contacts.slice(0,5);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contactsArray,
     
    };
  }

  randomSelect = (list) => {
    return list[Math.floor(Math.random()*list.length)]
  }

  handleAddContact = () => {
    const initialContacts = [...this.state.contacts];
    const newRandomContact = this.randomSelect(contacts);
    initialContacts.push(newRandomContact);

    this.setState({
      contacts: initialContacts,
    });
  }


  render() {
    const { contacts } = this.state;

    return (
      <div className="container w-4/5 py-8 mx-auto text-center">
        <h1 className="text-3xl mb-8 font-bold">IronContacts</h1>
        <button className="button px-2 py-1 mb-4 border-2 border-gray-600 font-semibold" onClick={this.handleAddContact}>Add Random Contact</button>
        <table className="table-fixed w-2/5 mx-auto ">
        <tbody>
          <tr>
            <th className="w-1/4">Picture</th>
            <th className="w-1/4">Name</th>
            <th className="w-1/4">Popularity</th>
          </tr>
            {contacts.map((contact) => {
              return (
                < ContactsDetails contact={contact} key={contact.id}/>
              );
            })}
          </tbody>
        </table>
      </div>
    );

  }
}

export default App;
