

import ModelManuItemImgA from "../../../../assets/img/product-40 1.png"
// import ModelManuItemImgB from "../../../../assets/img/widetv-300x300 1.png"
// import ModelManuItemImgC from "../../../../assets/img/WirelessSound-600x550 1.png"
// import ModelManuItemImgD from "../../../../assets/img/GoldPhone-1-300x300 1.png"
// import ModelManuItemImgE from "../../../../assets/img/prodcut6 1.png"
// import ModelManuItemImgF from "../../../../assets/img/product-40 1.png"
import ModelManuItem from './model-manu-item'
import useData from "../../../../hooks/useData"

const Category = () =>{
const {loading, data} = useData('/categories');
    if(loading){
        <div className="modal-area">
            <div className='row p-4'>
                Loading...
            </div>
        </div>
    }

    return(
        <div className="modal-area">
        <div className='row p-4'>
            {data && data.length > 0 && data.map(row=>
                    <div className='col-4 text-center' key={row._id}>
                    <ModelManuItem
                    img={ModelManuItemImgA}
                    title={row.name}
                    />
                </div>
            )}
        </div>
    </div>
    )
}
export default Category