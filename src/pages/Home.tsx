import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PartDescriptor from '../components/PartDescriptor';
import { addPart, decrementPart, incrementPart } from '../actions/parts';
import { partsSelector } from '../selectors/local';

import './Home.sass';

const Home = () => {
  const [selectedPart, setSelectedPart] = useState<string>(null);
  const parts = useSelector(partsSelector);
  const [newPartName, setNewPartName] = useState('');
  const dispatch = useDispatch();

  const handleAddPart = () => {
    if (newPartName.trim()) {
      const partExists = parts.some((part: Part) => part.name.toLowerCase() === newPartName.toLowerCase());

      if (!partExists) {
        dispatch(addPart(newPartName.trim()));
        setNewPartName('');
      } else {
        alert('Part with this name already exists!');
      }

    }
  };

  return (
    <div>
      <h1>Parts Counter</h1>
      <hr />
      <div className='addPartContainer'>
        <input
          value={newPartName}
          onChange={e => setNewPartName(e.target.value)}
          placeholder='Enter new part name'
        />
        <button onClick={handleAddPart}>Add Part</button>
      </div>
      <ul className="partsList">
        {parts.map(part => (
          <li
            key={part.name}
            onClick={() => setSelectedPart(part.name)}
            className={ part.amount > 0 ? 'highlighted-part' : ''}
          >
            {part.name} {part.amount}
            <button
              onClick={e => {
                e.stopPropagation();
                dispatch(incrementPart(part.name));
              }}
            >
              +
            </button>
            <button
              onClick={e => {
                e.stopPropagation();
                dispatch(decrementPart(part.name));
              }}
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <h2>Part Info</h2>
      {selectedPart &&
        (() => {
          const part = parts.find(x => x.name === selectedPart);
          return <PartDescriptor name={part.name} amount={part.amount} notes={part.notes}/>;
        })()}
    </div>
  );
};

export default Home;
