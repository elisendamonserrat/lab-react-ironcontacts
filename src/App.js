import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import ContactsDetails from './components/ContactsDetails'

function App() {
  console.log(contacts)
  return (
    <div className="container w-4/5 py-8 mx-auto text-center">
      <h1 className="text-3xl mb-8 font-bold">IronContacts</h1>
      <button className="button px-2 py-1 mb-4 border-2 border-gray-600 font-semibold" >Add Random Contact</button>
      <table className="table-fixed w-2/5 mx-auto ">
        <tr>
          <th className="w-1/4">Picture</th>
          <th className="w-1/4">Name</th>
          <th className="w-1/4">Popularity</th>
        </tr>
        {contacts.map((contact) => {
          return (
            < ContactsDetails contact={contact}/>

          );
        }).slice(0, 5)
        }
      </table>
    </div>
  );
}

export default App;
