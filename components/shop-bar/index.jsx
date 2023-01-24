
import PaginationBar from "./pagination-bar"
import SelectShort from "./select-short"
import ViewOptions from "./view-option"


const ShopBar = () => {
    return (

        <div id="shop-bar" className="d-flex justify-content-between px-3 py-2 ">
            <PaginationBar />
            <div className=" right-side d-flex">
                <SelectShort />
                <ViewOptions />
            </div>
        </div>
    )
}
export default ShopBar