import { useState, useEffect } from "react"

const SelectedContact = ({ selectedContactID}) => {
  const [contact, setContact] = useState('');
  useEffect(() => {
    const selectedUser = async () => {
      const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactID}`)
      const selectedUser = await response.json();
      setContact(selectedUser);
    }
    selectedUser(selectedContactID);
  }, [selectedContactID]);
  return (
    <>
      <h1>{contact.name}</h1>
      <h3>{contact.email}</h3>
      <h3>{contact.phone}</h3>
      <h3>{contact.website}</h3>
    </>
  )
}
export default SelectedContact