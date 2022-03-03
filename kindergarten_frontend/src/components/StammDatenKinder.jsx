import React, {useState, Fragment} from 'react';
import { nanoid } from 'nanoid';
import data from '../dummy.json';
import RowLesen from './RowLesen';
import RowEditieren from './RowEditieren';

const StammDatenKinder = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    vorname:'',
    nachname:'',
    geburtsdatum:'',
    geschlecht:'',
  });

  const [editFormData, setEditFormData] = useState({
    vorname:'',
    nachname:'',
    geburtsdatum:'',
    geschlecht:'',
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData)
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    
    /* an die vorhandene Backend json file anpassen !!*/
    /* diese vier Einträge sind nur zum Test */
    const newContact = {
      id: nanoid(),
      vorname: addFormData.vorname,
      nachname: addFormData.nachname,
      geburtsdatum: addFormData.geburtsdatum,
      geschlecht: addFormData.geschlecht,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
    const handleEditFormSubmit = (event)=>{
      event.preventDefault();

      const editedContact = {
        id: editContactId,
        vorname: editFormData.vorname,
        nachname: editFormData.nachname,
        geburtsdatum: editFormData.geburtsdatum,
        geschlecht: editFormData.geschlecht,
      }
      const newContacts = [...contacts];

      const index = contacts.findIndex((contact)=> contact.id === editContactId);

      newContacts[index] = editedContact;

      setContacts(newContacts);
      setEditContactId(null)

    };

    const handleEditClick = (event, contact)=> {
      event.preventDefault();
      setEditContactId(contact.id);

      const formValues = {
        vorname: contact.vorname,
        nachname: contact.nachname,
        geburtsdatum: contact.geburtsdatum,
        geschlecht: contact.geschlecht,
      }

      setEditFormData(formValues);
    };

  return (
    <div className='app-container'>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Vorname</th>
              <th>Nachname</th>
              <th>Geburtsdatum</th>
              <th>Geschlecht</th>
              {/* <th>Eintrittsdatum</th>
              <th>Austrittsdatum</th>
              <th>Notfallkontakt</th>
              <th>Telefon</th>
              <th>Eltern</th>
              <th>Bevollmächtigte</th>
              <th>Religion</th>
              <th>Schuleintritt</th>
              <th>Allergien</th>
              <th>Krankheiten</th>
              <th>Verhaltensauffälligkeiten</th> */}
              <th>Editieren / Speichern</th>
            </tr>
          </thead>
          <tbody>

            {/* Wie eine IF-Statement zu lesen */}

            {contacts.map((contact)=> (
              <Fragment>
                { editContactId === contact.id ? (<RowEditieren editFormData={editFormData} handleEditFormChange={handleEditFormChange}/>) : (<RowLesen contact={contact} handleEditClick={handleEditClick}/>)}               

              </Fragment>
              
            ))}
            
          </tbody>
        </table>
      </form>

      <h1>Neue Person hinzufügen</h1>

      <form onSubmit={handleAddFormSubmit} >
        
        <input type="text" name="vorname" require="required" placeholder="Vornamen eingeben" onChange={handleAddFormChange}></input>
        <input type="text" name="nachname" require="required" placeholder="Nachnamen eingeben" onChange={handleAddFormChange}></input>
        <input type="date" name="geburtsdatum" require="required" placeholder="Geburtsdatum eingeben" onChange={handleAddFormChange}></input>
        <input type="text" name="geschlecht" require="required" placeholder="Geschlecht eingeben" onChange={handleAddFormChange}></input>
        {/* <input type="date" name="Eintrittsdatum" require="required" placeholder="Eintrittsdatum eingeben"></input>
        <input type="date" name="Austrittsdatum" require="required" placeholder="Austrittsdatum eingeben"></input>
        <input type="text" name="Notfallkontakt" require="required" placeholder="Notfallkontakt eingeben"></input>
        <input type="tel" name="Telefon Nummer" require="required" placeholder="Telefonnummer eingeben"></input>
        <input type="text" name="Eltern" require="required" placeholder="Eltern eingeben"></input>
        <input type="text" name="Bevollmächtigte" require="required" placeholder="Bevollmächtigte eingeben"></input>
        <select name="religion" id="religion">Religion
          <option value="katholisch"></option>
          <option value="evangelisch"></option>
          <option value="muslimisch"></option>
        </select> 
        <input type="text" name="Vorname" require="required" placeholder="Vornamen eingeben"></input> */}



        <button type="submit">Eintragen</button>
        
      </form>
    </div>);




};

export default StammDatenKinder