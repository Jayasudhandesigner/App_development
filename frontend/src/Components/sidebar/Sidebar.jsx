import React from 'react'
import Location from './Location'
import Salary from './Salary'
import PostingDate from './PostingDate'
import WorkExperience from './WorkExperience'
import EmploymentType from './EmploymentType'

import "../../Assest/css/sidebar.css"
const Sidebar = ({handleClick,handleChange}) => {
  return (
    <div className='space-y-5'>
      <h3 className='text-lg font-bold mb-2 '>Filters</h3>

        <Location handleChange={handleChange}/>
        <Salary handleChange={handleChange} handleClick={handleClick}/>
        <WorkExperience handleChange={handleChange}/>
        <EmploymentType handleChange={handleChange}/>
        <PostingDate handleChange={handleChange}/>


    </div>
  )
}

export default Sidebar
