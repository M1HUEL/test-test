import { useEffect, useState } from "react"
import { User } from "../types"

export function useFetchUser(userId: number) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        )
        if (!res.ok) {
          throw new Error("API Failed!")
        }
        const userData = await res.json()
        setUser(userData)
      } catch (error: any) {
        console.error("Internal server error", error.message)
        setLoading(false)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [userId])

  return { user, loading, error }
}
