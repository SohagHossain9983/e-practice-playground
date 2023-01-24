import SearchBar from './search-bar';
import HeaderAction from './header-action';
import Logo from "./logo"

const TopNavbar = () => {
    return (
        <div id='top-navbar' className='d-flex justify-content-between container px-0 py-3'>
            <Logo/>
            <SearchBar/>
            <HeaderAction/>
        </div>
    )
}
export default TopNavbar;