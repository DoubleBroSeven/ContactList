import "./App.css";
import ContactList from "./components/ContactList";
import { useState } from "react";
import SelectedContact from "./Components/SelectedContact.jsx";


const App =()=> {
  const [selectedContactID, setSelectedContactID] = useState(null);

  return (
    <>
      {
        selectedContactID ? <SelectedContact selectedContactID={selectedContactID}/> : <ContactList setSelectedContactID={setSelectedContactID} /> 
      }
    </>
  );
}

export default App;