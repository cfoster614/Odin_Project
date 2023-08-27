import React, { useState, createContext } from 'react';
import Button from './button';
import DisplayPersonalDetails from './personal-info/personalSection';

export function Form({ children, formInitialValues, formName, id}) {
    const [form, setForm] = useState(formInitialValues);


    const handleFormChange = (event) => {
        const { name, value } = event.target;
        const updatedForm = {
            ...form,
            [name]: value
        };

        console.log(updatedForm)
        console.log(formInitialValues)
        setForm(updatedForm)
    }

    return (
        <>
            <div className="collapse-box">
                <div
                    data-bs-toggle="collapse"
                    data-bs-target= {`#${id}`}
                    aria-expanded="false"
                    aria-controls="collapseExample"
                >
                    {formName}
                </div>

                <form 
                className='collapse' 
                id={id}
                >
                    <FormContext.Provider value={{
                        form,
                        handleFormChange
                    }}>
                        {children}
                        <Button />
                    </FormContext.Provider>
                </form>
            </div>
            <div id='personal-details'>
                <FormContext.Provider value={{
                    form,
                    handleFormChange
                }}>
                    <DisplayPersonalDetails />

                </FormContext.Provider>
            </div>
        </>
    )
}


export const FormContext = createContext({
    form: {},
    handleFormChange: () => { }
});