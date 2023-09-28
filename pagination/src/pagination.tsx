import React from 'react'
import User from './user';

interface PaginationProps {
  users: User[];
}

function Pagination({ users }: PaginationProps){

    
    return <div>
       {users.map((user: User, index: number) => (
        <div key={index}>
          <p>Nome: {user.name.first} {user.name.last}</p>
        </div>
      ))}     
    </div>
}

export default Pagination;