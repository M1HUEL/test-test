export type User = {
  id: number
  username: string
  email: string
}

export type UserContextType = {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}
