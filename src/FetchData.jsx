import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
const FecthData = () => {
    const url = "http://127.0.0.1:3000/api/persons";
    
    const [persons,setPersons] = useState([]);

    useEffect(() => {
        const fetchData = async() => {

            try {
                const response = await fetch(url);
                const persons = await response.json();
                setPersons(persons);
            } catch (error) {
                console.log(error);
            }
            
        }
        fetchData();
    },[]);

    return (
        <>
        <table className="table">
            <thead>
                <tr>
                    <th>Fullname</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Menu</th>
                </tr>
            </thead>
            <tbody>

            {persons.map((person)=>{
                return (
                <tr key={person._id}>
                    <td>{person.first_name +' '+ person.last_name}</td>
                    <td>{person.gender}</td>
                    <td>{person.email}</td>
                    <td><Link to={"/View/"+person._id}>View</Link></td>
                </tr>
                )
            })}
            </tbody>

        </table>
        </>
    );
};

export default FecthData;