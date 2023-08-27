import React, { useContext } from 'react';
import { FormContext } from './form';
import { FormInput } from './formInput';
import { Form } from './form';

function Button() {
    
    const formContext = useContext(FormContext);
    const { form, handleFormChange } = formContext;
    const inputs = Object.keys(form).map(item => item)
    function handleClick() {
        console.log(inputs)
        return (
            <Form formInitialValues={form}>
                {Object.keys(form).map(item => <FormInput /> )}
               
            </Form>
        )
        

    }
    return (
        <button onClick={handleClick} type="button">Add</button>
    )
}

export default Button;
