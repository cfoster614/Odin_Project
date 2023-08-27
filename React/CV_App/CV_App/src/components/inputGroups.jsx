import React from 'react';

function Input({
    name,
    value,
    placeholder,
    type,
    onChange

}) {
    return (
        <input
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        />
    )
}

export default Input;