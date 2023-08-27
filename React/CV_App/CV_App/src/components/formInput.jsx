import { useContext } from 'react';
import { FormContext } from './form';



export function FormInput({name, type='text', label}) {
    const formContext = useContext(FormContext);
    const { form, handleFormChange } = formContext;
    
    return (
        <>
            <label>{label}</label>
            <input 
            name={name}
            value={form[name]}
            type= {type}
            onChange={handleFormChange}
            />
        <h1>{form[name]}</h1>
       </>
    )
}