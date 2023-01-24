import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from 'next/link'

const ShopLink = (props) => {
    return (
        <div id="shop-link">
            <div className="container">
                <div className="shop-route">
                    <a href="#">{props.mainLink}</a>
                    <FontAwesomeIcon icon={props.icon} className="FontAwesomeIcon px-2" />
                    <a href="#">{props.subLink}</a>
                    <p className="h4 text-light mt-5">{props.title}</p>
                </div>
            </div>
        </div>
    )
}
export default ShopLink