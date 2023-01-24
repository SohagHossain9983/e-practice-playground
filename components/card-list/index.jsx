import Image from "next/image"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import CardListImg from "../../assets/img/product-38.png"
import CustomImage from './../ui/custom-image';
import CustomHeading from './../ui/custom-heading';
import RegularPrice from './../regular-price/index';
import CustomInput from './../ui/custom-input';
import CustomButton from './../ui/custom-button';

const CardList = () =>{
    return(
        <div className="d-flex justify-content-between align-items-center py-4 px-3" id="CardList"> 
            <div className="d-flex align-items-center">
                <Image className="card-list-img" src={CardListImg}/>
                <div className="ps-3">
                    <CustomHeading
                        classes={'heading'}
                        hedName={"Flexible WareLess Head Phone"} />
                    <RegularPrice className='price' regularPrice='$339' />
                </div>
            </div>
            <div>
                <div className='d-flex  align-items-center'>

                    <div className='pe-2'>
                        <CustomInput
                            type="number"
                            placeholder='2'
                            classes={'quantity'}
                        />
                    </div>
                    <CustomButton
                        type="text"
                        variant={`primary`}
                        btnText={'Add To Cart'}
                        classes={'btn-primary'}
                    />
                </div>
                <div className="pt-2">
                    <FontAwesomeIcon className="card-list-icon" icon={faXmark}/>
                    <a className="ps-2" href="3">Remove</a>
                </div>
            </div>
        </div>
    )
}
export default CardList