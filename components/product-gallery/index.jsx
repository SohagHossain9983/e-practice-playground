
import productImg from '../../assets/img/shop/product-list/product-38.png'

import ImageList from "./image-list"
import Images from "./../image/index"
import { useState } from 'react'

const ProductGallery = (props) => {
    const [img,setImg]=useState()
    const changHandler=(img)=>{
        setImg(img)
    }
    return (
        <div id="product-gallery">
            <div className="row p-4">
                <div className="col-3">
                    <ImageList changHandler={changHandler} />
                </div>
                <div className="col-9">
                    <Images
                        src={img ? img:productImg}
                        className={`main-pdt`}
                    />
                </div>
                <p>{props.pdtText}</p>
            </div>
        </div>
    )
}
export default ProductGallery