import React from 'react';
import StudentForm from '../components/StudentForm';

function AddStudent() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Add New Student</h1>
      <StudentForm />
    </div>
  );
}

export default AddStudent;