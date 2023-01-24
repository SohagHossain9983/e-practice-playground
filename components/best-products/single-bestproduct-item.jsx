

const SingleBestproductItem = ({imgSrc,}) =>{
    return(
        <div className="BestProducts card" id="BestProducts">
            <div className="imgArea">
                <a href="#"><Image className="w-100 h-auto" src={BestProductsImgC} /></a>
            </div>
            <div className="card-body">
                <p className="mb-0">Head Phone</p>
                <h3>Smart Digital Watch</h3>
                <div className="d-flex justify-content-between pb-4">
                    <div className="pe-4">
                        <strong>$50.76</strong>
                        <strong className="ps-3 text-muted text-decoration-line-through">$20.87</strong>
                    </div>
                    <StarRating />
                </div>
                <a className="buttonArea text-decoration-none d-flex justify-content-center align-items-center" href="#">
                    <FontAwesomeIcon className="pe-3" icon={faCartShopping} />
                    <p className="mb-0">Add To Card</p>
                </a>
            </div>
        </div>
    )
}





