import {FC, useState} from 'react'

type Persona =  {
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    phone: string,
}

const Form: FC = () => {
    const defaultPersona: Persona = {
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        phone: ""
    }
    const [objetoPersona, setObjetoPersona] = useState<Persona>(defaultPersona);

    const firstNameHandler = (e: any) =>{
        const value = e.target.value;
        setObjetoPersona({...objetoPersona, firstName: value})
    }
    const lastNameHandler = (e: any) =>{
        const value = e.target.value;
        setObjetoPersona({...objetoPersona, lastName: value})
    }
    const addressHandler = (e: any) =>{
        const value = e.target.value;
        setObjetoPersona({...objetoPersona, address: value})
    }
    const emailHandler = (e: any) =>{
        const value = e.target.value;
        setObjetoPersona({...objetoPersona, email: value})
    }
    const phoneHandler = (e: any) =>{
        const value = e.target.value;
        setObjetoPersona({...objetoPersona, phone: value})
    }
    return (
        <div>
            <form>
                <div style={{marginTop: 5}}>
                    <label>First Name</label>
                    <input value={objetoPersona.firstName} onChange={firstNameHandler} />
                </div>
                <div style={{marginTop: 5}}>
                    <label>Last Name</label>
                    <input value={objetoPersona.lastName} onChange={lastNameHandler} />
                </div>
                <div style={{marginTop: 5}}>
                    <label>Address</label>
                    <input value={objetoPersona.address} onChange={addressHandler}/>
                </div>
                <div style={{marginTop: 5}}>
                    <label>Email</label>
                    <input value={objetoPersona.email} onChange={emailHandler} />
                </div>
                <div style={{marginTop: 5}}>
                    <label>Phone</label>
                    <input value={objetoPersona.phone} onChange={phoneHandler} />
                </div>
                <button onClick={() => {console.log(objetoPersona)}}>Send</button>
            </form>
            <div>
                <p>{objetoPersona.firstName}</p>
                <p>{objetoPersona.lastName}</p>
                <p>{objetoPersona.address}</p>
                <p>{objetoPersona.email}</p>
                <p>{objetoPersona.phone}</p>
            </div>
        </div>
    );
}
export default Form;