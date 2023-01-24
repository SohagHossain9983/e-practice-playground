import Image from 'next/image'
import Profile_img from "../../assets/img/profile-img.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ShopLink from '../../components/shop-link';
const Account = () => {
    return (
        <div>
<ShopLink subLink={`Account`} mainLink={`Home`} icon={faArrowRight} />
        <div id="account">
            <div className="container">
                <div className='row'>
                    <div className='col-3  p-0 m-0'>
                        <div className='margin-left'>
                            <div className='d-flex justify-content-center align-items-center border-bottom p-3 '>
                                <div className=''>
                                    <Image
                                        src={Profile_img}
                                    />
                                </div>
                                <div className='name-title ms-2'>
                                    <h4> Jhon Smith</h4>
                                    <p>smith@gmail.com</p>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <ul className='list'>
                                    <li className='list-items'>
                                        Dashbord
                                    </li>
                                    <li className='list-items-1'>
                                        Order History
                                    </li>
                                    <li className='list-items'>
                                        Order Tracking
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-9  '>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Order</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#1244</td>
                                    <td>Oc t10,22</td>
                                    <td>Completed</td>
                                    <td>$152.00 for 1 Item</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div >
                </div>
            </div>
        </div>
        </div>

    )
}
export default Account