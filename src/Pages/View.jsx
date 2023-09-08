import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const View = () => {
    const navigate = useNavigate();
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


    const handleDelete = () => {
        const deletePerson = async() => {
            try {
                const response = await fetch(`${url}/${id}`,{method: 'DELETE'});
                return response;
            } catch (error) {
                console.log(error);
            }
        };

        deletePerson();
        navigate("/");
    };
    return (
        <div className="container mt-5">
            <section>
                <h4>ID: {person._id}</h4>
                <h5>Fullname: {person.first_name+' '+person.last_name}</h5>
                <h5>Gender: {person.gender}</h5>
                <h5>Email: {person.email}</h5>
                <div className="d-flex flex-row">
                    <Link to={"/Update/"+person._id} className="btn btn-primary btn-sm me-2">Edit</Link>
                    <form onSubmit={(e)=> {e.preventDefault(); handleDelete()}}>
                        <button type="submit" className="btn btn-danger btn-sm">Delete</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default View;