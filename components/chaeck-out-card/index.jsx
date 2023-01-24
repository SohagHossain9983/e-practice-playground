
import CheckOutCardImg from "../../assets/img/product-39 1.png"
import CustomImage from "../ui/custom-image"
import CustomHeading from "../ui/custom-heading"
import CustomButton from "../ui/custom-button"
const CheckOutCard = ()=>{
    return(
        <div className="py-4 mb-5" id="checkOutCard">
            <h4 className="text-center">Your order</h4>
            <hr/>
            <div className="d-flex p-2">
                <CustomImage classes={'check-out-card-img'} src={CheckOutCardImg}/> 
                <div className="ps-3">
                    <CustomHeading classes={'check-out-card-heading'} hedName="Flexible WareLess Head Phone"/>
                    <p className="check-out-card-price">$399 x 2</p>
                </div>
            </div>
            <hr/>
            <div className="d-flex justify-content-between px-4">
                <strong>Subtotal (2 items)</strong>   
                <strong>$398</strong>   
            </div>
           <div className="pt-4 px-4">
                <h4 className="text-center">Shipping</h4>
                <div className="pb-2">
                    <input type="radio" id="Shipping-Free" name="shipping" value="HTML"/>
                    <label for="Shipping-Free">Shipping Free</label>
                </div>
                <div>
                    <input type="radio" id="Shipping-Fee" name="shipping" value="HTML"/>
                    <label for="Shipping-Fee">Shipping Fee $20</label>
                </div>
           </div>
           <hr/>
           <div className="d-flex justify-content-between px-4">
                <strong>Total</strong>   
                <strong>$698</strong>   
            </div>
            <div className="pt-4 px-4">
                <h4 className="text-center">Payment</h4>
                <div className="pb-2">
                    <input type="radio" id="Bkash" name="Payment" value="HTML"/>
                    <label for="Bkash">Bkash</label>
                </div>
                <div>
                    <input type="radio" id="Stripe" name="Payment" value="HTML"/>
                    <label for="Stripe">Stripe</label>
                </div>
           </div>
           <div className="text-center pt-5">
            <CustomButton classes={'check-out-card-button'} btnText="Please Order"/>
           </div>
        </div>
    )
}
export default CheckOutCard    