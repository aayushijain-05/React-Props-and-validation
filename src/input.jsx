import React from 'react';

export default function Input(props) {
    const { placeholder, type, value, onChange, id = "input-id", className } = props;

    return (
        <div>
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value}  
                onChange={(e) => onChange && onChange(e.target.value)} 
                className={`border w-full p-2  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${className}`} 
                id={id} 
            />
            
        </div>
    );
}
