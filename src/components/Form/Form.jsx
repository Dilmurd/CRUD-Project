import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../../redux/userSlice';
import "./Form.css"

const UserForm = ({ isEditing, userToEdit, setEditing }) => {
  const [name, setName] = useState(isEditing ? userToEdit.name : '');
  const [email, setEmail] = useState(isEditing ? userToEdit.email : '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(updateUser({ id: userToEdit.id, name, email }));
      setEditing(false);
    } else {
      dispatch(addUser({ id: Date.now(), name, email }));
    }
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isEditing ? 'Edit User' : 'Add User'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default UserForm;
