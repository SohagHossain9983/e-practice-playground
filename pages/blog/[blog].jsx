
import { useRouter } from "next/router";

const SingleBlog = () => {
const router = useRouter()
    
return(
    <div>Blog Detail: {router.query.blog}</div>
)
}
export default SingleBlog;