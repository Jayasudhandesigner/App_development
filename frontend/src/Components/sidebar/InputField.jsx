import React from 'react'
import "../../Assest/css/sidebar.css"
const InputField = ({handleChange ,value,title,name} ) => {
  return (
    <label className='sidebar-label-container'>
    <input type='radio' name={name} id='test' value={value} onChange={handleChange}/>
    <span className='checkmark'></span>{title}
    </label>
    
  );
};

export default InputField;
