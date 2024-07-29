import React, { useState } from 'react';
import '../../Assest/css/Filter.css';

const Filter = () => {
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedSalary, setSelectedSalary] = useState('Any');

  const locations = ['All', 'London', 'Seattle', 'Madrid', 'Boston'];
  const salaries = ['Any', '< 30000k', '< 50000k', '< 80000k', '< 100000k'];

  return (
    <div className="filter-container">
      <div className="filter-section">
        <h3>Location</h3>
        <ul>
          {locations.map((location, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  value={location}
                  checked={selectedLocation === location}
                  onChange={() => setSelectedLocation(location)}
                />
                {location}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-section">
        <h3>Salary</h3>
        <ul>
          {salaries.map((salary, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  value={salary}
                  checked={selectedSalary === salary}
                  onChange={() => setSelectedSalary(salary)}
                />
                {salary}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
