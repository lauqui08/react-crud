import { useState, useEffect } from "react";

const Create = () => {
    const url = "http://127.0.0.1:3000/api/persons";
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const fetchPerson = async() => {
            const response = await fetch(url,{
                method:'POST',
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({first_name:person.first_name,
                last_name:person.last_name,
                gender:person.gender,
                 email:person.email})
            });

            return response;
        };

        fetchPerson();

    }


return (
        <div className="col-md-4">
                <form onSubmit={handleSubmit} className="form-control">
                <div>
                    <label htmlFor="last_name">Last Name</label><br/>
                    <input className="form-control" type="text" onChange={handleChange} value={person.last_name} name="last_name" id="last_name" />
                </div>
                <div>
                    <label htmlFor="first_name">First Name</label><br/>
                    <input className="form-control" type="text" onChange={handleChange} value={person.first_name}   name="first_name" id="first_name" />
                </div>
                <div>
                    <label htmlFor="gender">Gender</label><br/>
                    <input className="form-control" type="text" onChange={handleChange} value={person.gender}   name="gender" id="gender" />
                </div>
                <div>
                    <label htmlFor="email">Email</label><br/>
                    <input className="form-control" type="text" onChange={handleChange} value={person.email}   name="email" id="email" />
                </div>
                <div className="mt-3 text-end">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
            
    );

};

export default Create;