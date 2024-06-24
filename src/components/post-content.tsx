import { UserContextType } from "../types"
import { PostContentButtons } from "./post-content-buttons"

export function PostContent({ data }: { data: UserContextType }) {
  return (
    <div>
      <PostContentButtons data={data} />
    </div>
  )
}
