import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/userSlice';
import Form from "../Form/Form"
import "./List.css"

const UserList = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const [isEditing, setEditing] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const handleEdit = (user) => {
    setEditing(true);
    setUserToEdit(user);
  };

  return (
    <div>
      <Form
        isEditing={isEditing}
        userToEdit={userToEdit}
        setEditing={setEditing}
      />
      <h2>User List</h2>
      <div className="user-list">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="user-details">
              <span><strong>Name:</strong> {user.name} {user.lastName}</span>
              <span><strong>Email:</strong> {user.email}</span>
            </div>
            <div className="user-actions">
              <button
                className="edit-button"
                onClick={() => handleEdit(user)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => dispatch(deleteUser(user.id))}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
