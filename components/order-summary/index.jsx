
import CustomHeading from "../ui/custom-heading"
import CustomButton from "../ui/custom-button"

const OrderSummary = ()=>{
    return(
        <div id="OrderSummary">
            <div className="py-4">
                <CustomHeading classes={'order-summary-heading ps-4'} hedName="Order Summary"/>
            </div>
            <hr/>
            <div className="px-4 pb-4">
                <div className="d-flex justify-content-between align-items-center">
                    <p>Subtotal (2 items) </p>
                    <p>$698 </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p>Shipping Fee</p>
                    <p>$20</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center">
                    <strong>Total</strong>
                    <strong>$828</strong>
                </div>
                <div className="text-center pt-4">
                    <CustomButton classes={'order-summary-button'} btnText="Proceed to cheackout"/>
                </div>
            </div>
        </div>
    )
}
export default OrderSummary