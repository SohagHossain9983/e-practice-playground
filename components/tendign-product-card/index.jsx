import CustomImage from '../ui/custom-image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEyeSlash,faHeart} from '@fortawesome/free-solid-svg-icons'
import StarRating from "../star-rating"
import TrandingProductCardImg from "../../assets/img/product-38.png"
import CustomHeading from '../ui/custom-heading'
import RegularPrice from '../regular-price'
import DiscountPrice from '../discount-price'
import CustomButton from '../ui/custom-button'

const TrandingProductCard = () => {
    return (
        <div className="card" id="trandingProductCard">
            <div className="Tranding-product-card-img-area p-4 text-center">
                <CustomImage classes="Tranding-product-card-img" src={TrandingProductCardImg} />
            </div>
            <div className="card-body pt-3">
               <StarRating rating="(65)"/>
               <CustomHeading hedName="Smart Digital Watch" classes="mb-0 tranding-product-heading"/>
                <div className="d-flex justify-content-between">
                    <RegularPrice regularPrice="$320"/>
                    <DiscountPrice dicPrice="$343"/>
                </div>
            </div>
            <div className="hover-area d-flex justify-content-center align-items-center">
                <FontAwesomeIcon className="icon" icon={faEyeSlash} />
                <CustomButton classes="mx-2" btnText="Add To Cart"/>
                <FontAwesomeIcon className="icon" icon={faHeart} />
            </div>
        </div>
    )
}
export default TrandingProductCard