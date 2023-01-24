import NextButton from "./next-button"
import PaginationNumber from "./pagination-number"
import PrevButton from "./prev-button"

const Pagination = () => {
    return (
        <div id="pagination">
            <div className="pagination-body d-flex mt-4">
                <PrevButton />
                <PaginationNumber />
                <NextButton />
            </div>
        </div>

    )
}
export default Pagination