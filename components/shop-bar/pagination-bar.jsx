import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
const PaginationBar = () => {
    return (
        <div className="left-side p-2">
            <Link href="#">1
                <span className="px-1">/</span>
                <span>4</span>
                <FontAwesomeIcon className="ms-1" icon={faAngleRight} />
            </Link>
        </div>
    )
}
export default PaginationBar