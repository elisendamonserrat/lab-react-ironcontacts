import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";

function App() {
  console.log(contacts)
  return (
    <div className="container w-4/5 py-8 mx-auto text-center">
      <h1 className="text-3xl mb-8 font-bold">IronContacts</h1>
      <table className="table-fixed w-2/5 mx-auto">
        <tr>
          <th className="w-1/4">Picture</th>
          <th className="w-1/4">Name</th>
          <th className="w-1/4">Popularity</th>
        </tr>
        {contacts.map((contact) => {
          return (
            <tr>
              <td className="w-1/4">
                <img className="w-1/3 inline mb-4" src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td className="w-1/4">{contact.name}</td>
              <td className="w-1/4">{contact.popularity.toFixed(2)}</td>
            </tr>
          );
        }).slice(0, 5)
        }
      </table>
    </div>
  );
}

export default App;
