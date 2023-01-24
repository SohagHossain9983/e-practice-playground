import Image from "next/image";
import Link from "next/link";
import StarRating from "../star-rating";
import CustomSubHeading from "../ui/custom-sub-heading"
import CustomHeading from "../ui/custom-heading"
import CustomButton from "../ui/custom-button"
import CustomImage from "../ui/custom-image"

const SingleItem = ({ hedName, subName, btnText, buttonAction, src }) => {
    return (
        <div className="slider" >
            <div className="container slick">
                <div className="row d-flex align-items-center">
                    <div className="col-6">
                        <CustomSubHeading classes={'custom-slider-sub-heading'} subName={subName}/>
                        <CustomHeading classes={'custom-slider-heading'} hedName={hedName}/>
                        <div className="pt-3 d-flex align-items-center">
                            <div className='d-flex align-items-center'>
                                <Link href={buttonAction}>
                                    <CustomButton classes={'buyNow'} btnText={btnText}/>
                                    {/* <button className="buyNow">{buttonText}</button> */}
                                </Link>

                                <div className='float-left ps-4 align-items-center'>
                                    <StarRating />
                                    <p className='mb-0'>100 Review</p>
                                </div>
                            </div>
                            <div className="d-flex ps-1 ps-md-4 ps-lg-4">
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <CustomImage src={src}/>
                    </div>
                </div>
                <div className="circleArea">
                    <div className="circle">
                        <h4>$95</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleItem;