import {Fragment} from "react";
import CardList from "../../components/card-list"
import OrderSummary from "../../components/order-summary"
import Breadcrumb from "../../components/breadcrumb";
const CardPage = () =>{
    return(
        <Fragment>
            <Breadcrumb mainLink={`Cart`} title={`Products`}/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-6">
                        <CardList/>
                    </div>
                    <div className="col-lg-5 col-md-5 col-6">
                        <OrderSummary/> 
                    </div>
                </div>
            </div>
        </Fragment>  
    )
}
export default CardPage