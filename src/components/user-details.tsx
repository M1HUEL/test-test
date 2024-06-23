import * as React from "react"
import { User } from "../App"

type Props = {
  user: User
  setUsers: () => void
}

export const UserDetails = ({ user, setUsers }: Props) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(false)
  const [username, setUsername] = React.useState<string>(user.username)
  const [email, setEmail] = React.useState<string>(user.email)
  console.log(isEditing)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>{user.id}</span>
        {isEditing ? (
          <>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Edit username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
          </>
        ) : (
          <>
            <span>{user.username}</span>
          </>
        )}
        {isEditing ? (
          <>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Edit email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </>
        ) : (
          <>
            <span>{user.email}</span>
          </>
        )}
      </section>
      <section>
        <button
          onClick={() => {
            setIsEditing((prevState) => !prevState)
          }}
        >
          Edit
        </button>
        <button>Delete</button>
        <button
          onClick={() => {
            setUsers((e) => {
              console.log(e)
            })
          }}
        >
          Save
        </button>
      </section>
    </div>
  )
}
