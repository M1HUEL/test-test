import { UserContextType } from "../types"

export function PostContentButtons({ data }: { data: UserContextType }) {
  const { user, setUser } = data

  const handleUpdateUsername = () => {
    setUser((prevUser) => ({
      ...prevUser,
      username: "javier",
    }))
  }

  const handleUpdateEmail = () => {
    setUser((prevUser) => ({
      ...prevUser,
      email: "ijavier@email.com",
    }))
  }

  const resetUser = () => {
    setUser({
      id: 0,
      username: "miguel",
      email: "imiguel@email.com",
    })
  }

  return (
    <div>
      <div>
        <h2>Actualizar Usuario</h2>
        <p>ID: {user.id}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <button onClick={handleUpdateUsername}>Actualizar Username</button>
        <button onClick={handleUpdateEmail}>Actualizar Email</button>
        <button onClick={resetUser}>Resetear Usuario</button>
      </div>
    </div>
  )
}
