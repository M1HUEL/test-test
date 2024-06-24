import * as React from "react"
import { UserContextType, User } from "../types"

export const UserContext = React.createContext<UserContextType>({
  user: {
    id: 0,
    username: "",
    email: "",
  },
  setUser: () => {},
})

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User>({
    id: 0,
    username: "miguel",
    email: "imiguel@email.com",
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return React.useContext(UserContext)
}
