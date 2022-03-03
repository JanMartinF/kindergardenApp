import React from "react"


/* Spalten noch erweitern !!*/
const RowEditieren = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                <input 
                    type="text" 
                    required="required" 
                    placeholder="Vornamen eingeben" 
                    name="vorname"
                    value={editFormData.vorname}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required="required" 
                    placeholder="Nachnamen eingeben" 
                    name="nachname"
                    value={editFormData.nachname}
                    onChange={handleEditFormChange}
                    ></input>
                </td>
                <td>
                <input 
                    type="date" 
                    required="required" 
                    placeholder="Geburtsdatum eingeben" 
                    name="geburtsdatum"
                    value={editFormData.geburtsdatum}
                    onChange={handleEditFormChange}
                    ></input>
                </td>
                <td>
                <input 
                    type="text" 
                    required="required" 
                    placeholder="Geschlecht eingeben" 
                    name="geschlecht"
                    value={editFormData.geschlecht}
                    onChange={handleEditFormChange}
                    ></input>
            </td>
            <td>
                <button type="submit">Speichern</button>
                <button type="button" onClick={handleCancelClick}>Abbruch</button>
            </td>
        </tr>        
        

    )

}

export default RowEditieren