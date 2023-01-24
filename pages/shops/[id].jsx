import ProductContent from "../../components/product-content"
import RelatedProduct from "../../components/related-product"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Breadcrumb from '../../components/breadcrumb/index';
import { useRouter } from 'next/router';
const Product = () => {
    const router = useRouter()
    const id = router.query.id
    return (
        < div className="product " >
            <Breadcrumb
                mainLink={`HOME`}
                subLink={`SHOP`}
                icon={faArrowRight}
                title={`Flexible WareLess Head Phone`}
            />
            <div className="container">
                <ProductContent />
                <RelatedProduct />
            </div>
        </div >
    )
}
export default Product