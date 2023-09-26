import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNotes } from '../actions/parts';

const PartDescriptor = ({ name, amount, notes }: { name: string; amount: number; notes: string }) => {
  const [localNotes, setLocalNotes] = useState(notes);
  const dispatch = useDispatch();

  useEffect(() => {
    setLocalNotes(notes);
  }, [name]);
  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Amount: {amount}</h3>
      <h3>Description: Lorem Ipsum dolor sit amet</h3>
      <h4>
        Notes:
        <input
          value={localNotes}
          onChange={e => setLocalNotes(e.target.value)}
          onBlur={() => dispatch(setNotes(name, localNotes))}
        />
      </h4>
    </div>
  );
};

export default PartDescriptor;
