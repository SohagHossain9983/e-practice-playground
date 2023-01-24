import {Fragment} from 'react'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars,faAngleDown} from '@fortawesome/free-solid-svg-icons'
import Category from "./category"

const BottomNavbar = () => {
    return (
        <Fragment>
            <nav className="navbar-expand d-flex" id="navbar">
                <div className="d-flex align-items-center department ">
                    <div className='d-flex align-items-center'>
                        <Link className='text-dark' href="#"><FontAwesomeIcon icon={faBars}/></Link>
                        <h5 className="px-2 mb-0">Departments</h5>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    <span className="ps-4">|</span>
                    <Category/>
                
                </div>
                <div className="d-flex">
                    <ul className="navbar-nav "> 
                        <li className="nav-item"><Link className="nav-link px-3" href='/'>Home</Link></li>
                        <li className="nav-item"><Link className="nav-link px-3" href='#'>About</Link></li>
                        <li className="nav-item"><Link className="nav-link px-3" href='/shops'>Shop</Link></li>
                        <li className="nav-item"><Link className="nav-link px-3" href='#'>Account</Link></li>
                        <li className="nav-item"><Link className="nav-link px-3" href='#'>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}
export default BottomNavbar;