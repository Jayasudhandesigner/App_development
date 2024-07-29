import React from 'react'
import InputField from './InputField'
import "../../Assest/css/sidebar.css"
const Location = ({handleChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Location</h4>

      <div>
        <label className='sidebar-label-container'>
        <input type='radio' name='test' id='test' value="" onChange={handleChange}/>
        <span className='checkmark'></span>All
        </label>

        <InputField handleChange={handleChange} value="Bengaluru" title="Bengaluru" name="test" />
        <InputField handleChange={handleChange} value="Hyderabad" title="Hyderabad" name="test" />
        <InputField handleChange={handleChange} value="Mumbai" title="Mumbai" name="test" />
        <InputField handleChange={handleChange} value="New Delhi" title="New Delhi" name="test" />
        <InputField handleChange={handleChange} value="Pune" title="Pune" name="test" />
        <InputField handleChange={handleChange} value="Kolkata" title="Kolkata" name="test" />
        
      </div>
    </div>
  )
}

export default Location
