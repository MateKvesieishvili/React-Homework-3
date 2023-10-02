import React, { useState } from 'react';

document.title = "10 Users"

const initialUsers = [
  {
    name: "user 1"
  },
  {
    name: "user 2"
  },
  {
    name: "user 3"
  },
  {
    name: "user 4"
  },
  {
    name: "user 5"
  },
  {
    name: "user 6"
  },
  {
    name: "user 7"
  },
  {
    name: "user 8"
  },
  {
    name: "user 9"
  },
  {
    name: "user 10"
  },
]

const User = ({ name }) => {
  return <h1>{name}</h1>
}

function App() {
  const [users, setUsers] = useState(initialUsers)

  const removeRandomUser = () => {
    document.title = users.length - 1 + " Users Left"

    const randomIndex = Math.floor(Math.random() * users.length)


    const newUsers = [...users.slice(0, randomIndex), ...users.slice(randomIndex + 1)]
    setUsers(newUsers)
  }

  return (
    <>
      {users.map((user, index) => (
        <User key={index} name={user.name} />
      ))}

      <button onClick={removeRandomUser}>Remove Random User</button>
    </>
  )
}

export default App;
