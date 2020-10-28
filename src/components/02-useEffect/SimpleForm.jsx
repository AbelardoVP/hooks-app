import React, { useEffect, useState } from 'react'
import { Message } from './Message'
import './useEffect.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState;

    useEffect(() => {
        //console.log("hola");
    }, [])

    useEffect(() => {
        //console.log("formState");
    }, [formState])

    useEffect(() => {
        //console.log("email");
    }, [email])

    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>SIMPLE FORM USE EFFECT</h1>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>


            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {(name === '123') && <Message />}
        </>
    )
}
