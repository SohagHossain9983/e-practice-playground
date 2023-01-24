import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Breadcrumb = (props) => {
    return (
        <div id="breadcrumb">
            <div className="container">
                <div className="shop-route">
                    <Link href="./">{props.mainLink}</Link>
                    {props.mainLink && props.subLink &&
                        <FontAwesomeIcon icon={faAngleRight} className="FontAwesomeIcon px-2" />}
                    <Link href="./shop">{props.subLink}</Link>
                    <p className="h4 text-light mt-5">{props.title}</p>
                </div>
            </div>
        </div>
    )
}
export default Breadcrumb