import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  const contacts = [
    {
      id: "1",
      name: "Ashraful Islam Asif",
      email: "ashraful.p314159@gmail.com"
    },
    {
      id: "2",
      name: "John Doe",
      email: "john.doe@gmail.com"
    }
  ]
  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
}

export default App;
