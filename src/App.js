import './App.css';
import { Component } from 'react';
import contacts from "./contacts.json";
import ContactsDetails from './components/ContactsDetails'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (
      <div className="container w-4/5 py-8 mx-auto text-center">
        <h1 className="text-3xl mb-8 font-bold">IronContacts</h1>
        <button className="button px-2 py-1 mb-4 border-2 border-gray-600 font-semibold" onClick={this.handleAddContact}>Add Random Contact</button>
        <table className="table-fixed w-2/5 mx-auto ">
          <tr>
            <th className="w-1/4">Picture</th>
            <th className="w-1/4">Name</th>
            <th className="w-1/4">Popularity</th>
          </tr>
          <tbody>
            {contacts.map((contact) => {
              return (
                < ContactsDetails contact={contact} key={contact.id}/>
              );
            }).slice(0, 5)
            }
          </tbody>
        </table>
      </div>
    );

  }
}

export default App;
