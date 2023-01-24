
import Image from "next/image";
import Logo from "../../../assets/img/Shoptronics (1).png"
import CopyRight from "./copy-right";
import CustomButton from "../../ui/custom-button";
import CustomInput from "../../ui/custom-input";

const Footer = () => {
    return (
        <div className="footer py-5" id="footer">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-3">
                        <Image src={Logo} />
                        <p className="mb-0 pt-2">Elegant pink origami design three dimensional view and decoration co-exist. Great for adding a decorative touch to any room’s decor.</p>
                    </div>
                    <div className="col-3">
                        <h4>Information</h4>
                        <ul>
                            <li>
                                <a href="#">Custom Service</a>
                            </li>
                            <li>
                                <a href="#">FAQs</a>
                            </li>
                            <li>
                                <a href="#">Ordering Tracking</a>
                            </li>
                            <li>
                                <a href="#">Contacts</a>
                            </li>
                            <li>
                                <a href="#">Events</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h4>My Account</h4>
                        <ul>
                            <li>
                                <a href="#">Delivery Information</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Discount</a>
                            </li>
                            <li>
                                <a href="#">Custom Service</a>
                            </li>
                            <li>
                                <a href="#">Terms & Condition</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h4>Get Newsletter</h4>
                        <p>Get on the list and get 10% off your first order!</p>
                        <form>
                            <CustomInput
                                type={'input'}
                                name='email'
                                placeholder='Your Email'
                            />
                            <CustomButton 
                                classes={'mt-2'} 
                                type='submit'
                                variants='btn-primary'
                                btnText='Subscribe Now' 
                                sizes='full'
                            />
                        </form> 
                    </div>
                </div>
                <div className="pt-5"> 
                    <CopyRight/>
                </div> 
            </div>
        </div>
    )

}
export default Footer;