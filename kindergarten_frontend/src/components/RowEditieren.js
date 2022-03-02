import React from "react"


/* Spalten noch erweitern !!*/
const RowEditieren = () => {
    return (
        <tr>
            <td>
                <input 
                    type="text" 
                    required="required" 
                    placeholder="Vornamen eingeben" 
                    name="vorname"
                ></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required="required" 
                    placeholder="Nachnamen eingeben" 
                    name="nachname"
                    ></input>
                </td>
                <td>
                <input 
                    type="date" 
                    required="required" 
                    placeholder="Geburtsdatum eingeben" 
                    name="geburtsdatum"
                    ></input>
                </td>
                <td>
                <input 
                    type="text" 
                    required="required" 
                    placeholder="Geschlecht eingeben" 
                    name="geschlecht"
                    ></input>
            </td>
        </tr>        
        

    )

}

export default RowEditieren