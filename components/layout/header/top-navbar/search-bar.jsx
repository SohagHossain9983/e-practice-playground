import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Form} from 'reactstrap'
import CustomInput from "../../../ui/custom-input" 
import CustomButton from "../../../ui/custom-button"

const SearchBar = () => {
    return (
        <Form id="top-search" className='d-flex justify-content-between'>
            <div className='search-input-icon'>
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <CustomInput 
                classes={'search-bar-input'}
            />
            <CustomButton 
                classes={'search-bar-button'} 
                btnText='Search'
            />
        </Form>
    )
}
export default SearchBar;