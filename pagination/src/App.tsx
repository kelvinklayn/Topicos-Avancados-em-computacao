import React, { useState, useEffect } from 'react'
import './App.css';
import Pagination from './pagination';
import User from './user';

function App() {
  const [users, setUsers] = useState<User[]>([])

  
  const  fetchUsers = async  () => {
      const res = await fetch("https://randomuser.me/api/?results=100")
      const data = await res.json()
      setUsers(data.results);
  }
  
  useEffect(() => {
      fetchUsers();
  }, [])

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div className="App">
      <Pagination users={users}/>
    </div>
  );
}

export default App;
