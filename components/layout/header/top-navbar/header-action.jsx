import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faCartShopping, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../../hooks/useAuth'
import { useStoreState } from 'easy-peasy'



const HeaderAction = () => {
    // Global state
    const isAuth = useStoreState(state => state.auth.isAuth)

    const { handleLogout } = useAuth();


    return (
        <div className="text-end d-flex">
            {isAuth ? <FontAwesomeIcon onClick={handleLogout} className="header-action-icon" icon={faArrowRightFromBracket} /> :
                <Link href={'/signin'}><FontAwesomeIcon className="header-action-icon" icon={faUser} /></Link>}
            <Link href="/wishlist"><FontAwesomeIcon className="header-action-icon" icon={faHeart} /></Link>

            <Link className='tpo-header-icon' href="cart"><FontAwesomeIcon className="header-action-icon" icon={faCartShopping} />
                <div className='add-items'>
                    <small>2</small>
                </div>
            </Link>
        </div>
    )
}
export default HeaderAction

