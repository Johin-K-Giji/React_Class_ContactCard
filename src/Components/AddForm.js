import React, { useEffect, useState } from 'react'
import ContactCard from './ContactCard'

const AddForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [persons, setPersons] = useState([])
    const [approved, setApproved]=useState([])

    const LOCAL_STORAGE_KEY = "persons"

    // Retrieve data from localStorage on initial load
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (data) {
            setPersons(data)
            console.log("Data loaded from local storage:", data)
        }
    }, [])

    // Handle adding a new person and saving to localStorage directly
    const handleAdd = (e) => {
        e.preventDefault()

        const newData = {
            id: Date.now(),
            name,
            email
        }

        const updatedPersons = [...persons, newData]
        setPersons(updatedPersons)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedPersons)) // Save directly here
        console.log("Data saved to local storage:", updatedPersons)

        setEmail("")
        setName("")
    }

    const handleDelete = (id)=>{
        const updatedPersons = persons.filter(person=>person.id !== id)
        setPersons(updatedPersons)
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(updatedPersons))
    }

    const handleApprove =(id)=>{
        const data = persons.filter(person=>person.id ===id)
        setApproved(data)
    }

    

    return (
        <div className='ui main'>
            <form className='ui form' onSubmit={handleAdd}>
                <div className='field'>
                    <label>Name</label>
                    <input 
                        type='text' 
                        placeholder='Enter your name'
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input 
                        type='email' 
                        placeholder='Enter your email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <button className='ui button blue' type="submit">Add</button>
            </form>

            <ContactCard persons={persons} handleDelete={handleDelete} handleApprove={handleApprove} />

            <h1>Approved</h1>
            {
                approved.map((value)=>(
                    <p>{value.name}</p>
                ))
            }
        </div>
    )
}

export default AddForm
