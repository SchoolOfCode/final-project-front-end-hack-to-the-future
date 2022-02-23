import React from 'react';
import LocationInput from './LocationInput';
import DropdownFilter from './DropdownFilter';
import DateSelector from './DateSelector';

function FilterComponent() {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridGap: '1rem',
            }}
        >
            <LocationInput />
            <DateSelector />
            <DropdownFilter />
        </div>
    );
}

export default FilterComponent;
