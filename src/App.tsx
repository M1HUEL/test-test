import { useState } from "react"
import { UserDetails } from "./components/user-details"

export type User = {
  id: number
  username: string
  email: string
}

export const App = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 0,
      username: "miguel",
      email: "imiguel@email.com",
    },
    {
      id: 1,
      username: "anson",
      email: "anson@email.com",
    },
  ])

  return (
    <main>
      <h1>App</h1>

      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
        }}
      >
        {users.map((user) => {
          return <UserDetails key={user.id} user={user} setUsers={setUsers} />
        })}
      </ul>
    </main>
  )
}
