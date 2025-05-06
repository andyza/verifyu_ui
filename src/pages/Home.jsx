import React from 'react';
import StudentList from '../components/StudentList';

function Home() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Student List</h1>
      <StudentList />
    </div>
  );
}

export default Home;