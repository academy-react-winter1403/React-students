import React from 'react'
import { useState } from 'react';
import DropDown from './DropDown'

const DropDownHolder = ({title, placeholder}) => {
const [selectedOption, setSelectedOption] = useState(null);
const dropdownOptions = ['گزینه 1', 'گزینه 2', 'گزینه 3', 'گزینه 4'];

const handleSelect = (option) => {
    setSelectedOption(option);
    // console.log('گزینه انتخاب شده:', option);
};

return (
    <div>
        <DropDown
            options={dropdownOptions}
            onSelect={handleSelect}
            title={title}
            placeholder={placeholder}
        />
        {selectedOption && <p>شما انتخاب کردید: {selectedOption}</p>}
    </div>
);
}

export default DropDownHolder;