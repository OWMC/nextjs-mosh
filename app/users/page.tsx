import React from 'react'

interface User {
  id: number,
  name: string,
  email: string
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  const isServer = typeof window === 'undefined';
  let origin:string = "";
  if (isServer) {
    origin = "Server-side rendered, or statically generated. typeof window: " + typeof window;
  } else {
    origin = "Client rendered. typeof window: " + typeof window;
  }

  return (
    <>
      <h1 className="mb-2 font-bold text-xl">Users</h1>
      <p className="mb-2">{origin}</p>
      <p className="mb-2">Typicode API data fetched and SSRd at {new Date().toLocaleTimeString()}</p>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>)}
        </tbody>
      </table>
    </>
  )
}

export default UsersPage