import { Card, CardBody, CardTitle } from 'reactstrap';
import productImg from '../../assets/img/shop/product-list/product-38.png'
import StarRating from '../star-rating';
import DiscountPrice from "../discount-price";
import CustomImage from '../ui/custom-image';
import RegularPrice from "../regular-price";

import CustomButton from '../ui/custom-button';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CustomHeading from './../ui/custom-heading';
import CustomSubHeading from '../ui/custom-sub-heading';



const ProductCard = ({src,id}) => {
    return (
        <div id="product-card" className="my-3">
            <Card className="pdt-card">
                <CustomImage
                    src={src?src:productImg}
                    classes={`product-img`}
                    actionLink={`/shops/${id}`}
                />
                <CardBody>
                    <CardTitle>
                        <CustomSubHeading
                            subName="Head Phone"
                        />
                    </CardTitle>
                    <CustomHeading
                        actionLink={`/shops/${id}`}
                        classes={`heading`}
                        hedName="Smart Digital Watch"
                    />
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                            <RegularPrice regularPrice={`$223`} />
                            <DiscountPrice
                                className={`ps-3 mb-0`}
                                dicPrice={`$333`} />
                        </div>
                        <div>
                            <StarRating rating='(95%)' />
                        </div>
                    </div>
                    <CustomButton
                        btnIcon={faCartShopping}
                        btnText="Add to cart"
                        size='full'
                        classes={`button`}
                    />
                </CardBody>
            </Card>
        </div>
    )
}
export default ProductCard