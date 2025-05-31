// components/RadioGroupField.jsx
import React from 'react';

const RadioGroupField = ({ name, options, value, onChange, required = false }) => {
  return (
    <div className="mb-4">
      <div className="flex flex-col space-y-2">
        {options.map((option) => (
          <label key={option.value} className="inline-flex items-center">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="form-radio text-blue-600"
              required={required}
            />
            <span className="ml-2">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroupField;
