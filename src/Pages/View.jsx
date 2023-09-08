import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const View = () => {
    const [person,setPerson] = useState({});
    const {id} = useParams();
    const url = "http://127.0.0.1:3000/api/persons";
    useEffect(() => {
        const fetchPerson = async() =>{
            try {
                const response = await fetch(`${url}/${id}`);
                const person = await response.json();
                // console.log(person);
                setPerson(person);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPerson();
    },[]);


    const handleDelete = (id) => {

        const deletePerson = async() => {
            const response = await fetch(url,{
                method:"DELETE"
            });

            return response;
        };

        deletePerson();
    };
    return (
        <>
            <section>
                <h4>ID: {person._id}</h4>
                <h5>Fullname: {person.firstname+' '+person.last_name}</h5>
                <h5>Gender: {person.gender}</h5>
                <h5>Email: {person.email}</h5>
                <div>
                    <Link to={"/Update/"+person._id}>Update</Link>
                    <form onSubmit={(e)=> {e.preventDefault(); handleDelete(person._id)}}>
                        <button type="submit">Delete</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default View;