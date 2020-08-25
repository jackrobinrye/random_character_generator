import React from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';



const CharacterBrief = (props) => {

    const d = props.data

    return (
        <div character-id={props.data.id} character-name={props.data.name}>
            <Link to={`/characters/${props.data.id}`} style={{color: "#000000", textDecoration: "none"}}>
                <Table striped bordered variant="dark">
                    <thead>
                        <tr>
                            <th>{d.name}</th>
                            <th>Campaign: {d.campaign}</th>
                            <th>{d.alignment}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{d.race}</td>
                            <td>{d.cclass}</td>
                            <td>{d.gender}</td>
                        </tr>
                    </tbody>
                </Table>
            </Link>
        </div>
    ) 
}

export default CharacterBrief