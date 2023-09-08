import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Update = () => {

const {id} = useParams();
const [person,setPerson] = useState({});

const [first_name,setFirstName] = useState('');
const [last_name,setLastName] = useState('');
const [gender,setGender] = useState('');
const [email,setEmail] = useState('');

const url = "http://127.0.0.1:3000/api/persons";

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
}
useEffect(()=>{

    const fetchData = async() => {
        try {
            const response = await fetch(`${url}/${id}`);
            const person = await response.json();
            // console.log(person);
            setPerson(person);
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
},[]);

    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="last_name">Last Name</label><br/>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} name="last_name" id="last_name" value={person.last_name}/>
                </div>
                <div>
                    <label htmlFor="first_name">First Name</label><br/>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} name="first_name" id="first_name" value={person.first_name}/>
                </div>
                <div>
                    <label htmlFor="gender">Gender</label><br/>
                    <input type="text" onChange={(e) => setGender(e.target.value)} name="gender" id="gender" value={person.gender}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label><br/>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} name="email" id="email" value={person.email}/>
                </div>
                <div>
                    <button>Update</button>
                </div>
            </form>
    );

};

export default Update;