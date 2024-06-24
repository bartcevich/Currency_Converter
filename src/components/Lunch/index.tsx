'use client';
import React, { useEffect, useState } from 'react';

const LANGUAGE_OPTIONS = [
    { value: '', label: 'Breakfast' },
    { value: 'genki', label: 'Генки' },
    { value: 'яйца, молоко, соль', label: 'Омлет' },
    // Add other options here
  ];
  
  type SelectedOptions = {
    sunday: string;
    monday: string;
    // Add other days here
    [key: string]: string; // Index signature
  };
  
  const Dinner: React.FC = () => {
    const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
      sunday: '',
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      // Add other days here
    });
  
  
    const handleSelectChange = (day: string, value: string) => {
      const updatedOptions = { ...selectedOptions, [day]: value };
      setSelectedOptions(updatedOptions);
    };
  
    return (
      <>
        <div>
          {Object.keys(selectedOptions).map((day) => (
            <select
              key={day}
              value={selectedOptions[day]}
              onChange={(e) => handleSelectChange(day, e.target.value)}
            >
              {LANGUAGE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ))}
        </div>
        {/* <div>
              <select value={monday} onChange={(e) => setMonday(e.target.value)}>
                      {LANGUAGE_OPTIONS.map((option) => (
                        <option key={option.label} >{option.label}</option>))}
              </select>
              <button type="button" onClick={handleDecrease}>-</button>
              <b>{count}</b>
              <button type="button" onClick={handleIncrease}>+</button>
            </div> */}
      </>
    );
  };
  export default Dinner;