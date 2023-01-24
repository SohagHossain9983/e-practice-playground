import { Label } from "reactstrap"


const SelectShort = () => {
    return (
        <div>
            <Label>Short by:</Label>
            <select className="ms-2 p-1">
                <option value="0">High to Low</option>
                <option value="0">High</option>
                <option value="0">Low</option>
            </select>
        </div>
    )
}
export default SelectShort