import { useEffect, useState } from "react"
import { PostContainer } from "./components/post-container"
import { UserProvider } from "./contexts/user-context"
import { useFetchUser } from "./hooks/use-fetch-user"
import { User } from "./types"

// export function App() {
//   const [user, setUser] = useState<User | null>(null)
//   useEffect(() => {
//     const data = useFetchUser(5)
//     if (data.loading) {
//       return console.log("Cargando usuario...")
//     }
//     if (data.error) {
//       return console.log("Error: ", data.error)
//     }
//     if (!data.user) {
//       return console.log("No user found.")
//     }
//     setUser(data.user)
//   }, [user])
//   return (
//     <UserProvider>
//       <PostContainer />
//     </UserProvider>
//   )
// }

export function App() {
  return <main>App</main>
}
