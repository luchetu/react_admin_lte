import React, { useState } from 'react';
import { omit } from 'lodash'
import { AddUser } from '../apis/Users'

const useForm = (callback) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        event.persist();


        let name = event.target.name;
        let val = event.target.value;

        validate(event, name, val);
        setValues({
            ...values,   //spread operator to store old values
            [name]: val,
        })

    }

    const validate = (event, name, value) => {

        switch (name) {
            case 'password':
                if (
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        password: 'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
                    })
                } else {

                    let newObj = omit(errors, "password");
                    setErrors(newObj);

                }
                break;
            case 'job_title':
                if (value.length < 1) {

                    setErrors({
                        ...errors,
                        title: 'Job Title is required'
                    })
                } else {
                    let newObj = omit(errors, "job_title");
                    setErrors(newObj);

                }
                break
            case 'first_name':
                if (value.length < 1) {

                    setErrors({
                        ...errors,
                        first_name: 'First Name is required'
                    })
                } else {
                    let newObj = omit(errors, "first_name");
                    setErrors(newObj);

                }
                break
            case 'last_name':
                if (value.length < 1) {

                    setErrors({
                        ...errors,
                        last_name: 'Last Name is required'
                    })
                } else {
                    let newObj = omit(errors, "last_name");
                    setErrors(newObj);

                }
                break
            case 'email':
                if (
                    !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        email: 'Enter a valid email address'
                    })
                } else {

                    let newObj = omit(errors, "email");
                    setErrors(newObj);

                }
                break;
            default:
                break;
        }

    }
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        validate(values);
        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            const response = AddUser(values);
            callback();

        } else {
            alert("There is an Error!");
        }
    }
    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }

}

export default useForm