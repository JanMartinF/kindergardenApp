import React from "react"

const RowLesen = ({ contact }) => {
    return (
        <tr>
            <td>{contact.vorname}</td>
            <td>{contact.nachname}</td>
            <td>{contact.geburtsdatum}</td>
            <td>{contact.geschlecht}</td>
            {/* <td>15.02.2014</td>
            <td>N/A</td>
            <td>Mara Mustermann</td>
            <td>0309876543</td>
            <td>Mara Mustermann, Fred Mustermann</td>
            <td>Bernd Musterfrau </td>
            <td>katholisch</td>
            <td>01.08.2020</td>
            <td>Schalenfrüchte</td>
            <td>Asthma</td>
            <td>keine</td> */}
        </tr>  
    );

};

export default RowLesen