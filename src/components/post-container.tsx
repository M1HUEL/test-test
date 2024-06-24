import { PostContent } from "./post-content"
import { useUserContext } from "../contexts/user-context"

export function PostContainer() {
  const data = useUserContext()
  return (
    <div>
      <PostContent data={data} />
    </div>
  )
}
