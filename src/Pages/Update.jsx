import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Update = () => {
const navigate = useNavigate();
const {id} = useParams();
// const [person,setPerson] = useState({});

const [person,setPerson] = useState({
    first_name:'',
    last_name:'',
    gender:'',
    email:'',
});

const handleChange = (e) =>{
    const {name,value} = e.target;
    setPerson({...person,[name]:value})
};

const url = "http://127.0.0.1:3000/api/persons";

const handleSubmit = (e) => {
    e.preventDefault();
    const updatePerson = async () => {
        const response = await fetch(`${url}/${id}`,{
            method:'PATCH',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({first_name:person.first_name,
            last_name:person.last_name,
            gender:person.gender,
             email:person.email})
        });

        return response;
    }
    updatePerson();
    navigate(`/View/${id}`);
}
useEffect(()=>{

    const fetchData = async() => {
        try {
            const response = await fetch(`${url}/${id}`);
            const person = await response.json();
            // console.log(person);
            setPerson({...person});
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
},[]);

    return (
        <div className="col-md-4">
<           form onSubmit={handleSubmit} className="form-control">
                <div>
                    <label htmlFor="last_name">Last Name</label><br/>
                    <input className="form-control" type="text" onChange={handleChange} name="last_name" id="last_name" value={person.last_name ?? last_name}/>
                </div>
                <div>
                    <label htmlFor="first_name">First Name</label><br/>
                    <input className="form-control" type="text" onChange={handleChange} name="first_name" id="first_name" value={person.first_name ?? first_name}/>
                </div>
                <div>
                    <label htmlFor="gender">Gender</label><br/>
                    <input className="form-control" type="text" onChange={handleChange} name="gender" id="gender" value={person.gender ?? gender}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label><br/>
                    <input className="form-control" type="text" onChange={handleChange} name="email" id="email" value={person.email ?? email}/>
                </div>
                <div className="mt-3 text-end">
                    <button type="submit" className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
            
    );

};

export default Update;