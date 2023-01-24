import Link from 'next/link';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import sliderImgA from "../../assets/img/banner-mockup 1.png"
import StarReating from '../star-rating';

function Slidr() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="py-5" id="homeSlider">
      <Slider {...settings}>
        <div className="slider" >
          <div className="container slick">
            <div className="row d-flex align-items-center">
              <div className="col-6">
                <p className="mb-0"> Hot Deal In This Week</p>
                <h1>Intelectial Digital Computer</h1>
                <div className="pt-3 d-flex align-items-center">
                  <div className='d-flex align-items-center'>
                    <Link href="checkout">
                      <button className="buyNow">Buy Now</button>
                    </Link>

                    <div className='flot-left ps-4 align-items-center'>
                      <StarReating />
                      <p className='mb-0'>100 Revieue</p>
                    </div>
                  </div>
                  <div className="d-flex ps-1 ps-md-4 ps-lg-4">
                  </div>
                </div>
              </div>
              <div className="col-6">
                <Image className="w-100" src={sliderImgA} />
              </div>
            </div>
            <div className="circleArea">
              <div className="circle">
                <h4>$:95</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="slider" >
          <div className="container slick">
            <div className="row d-flex align-items-center">
              <div className="col-6">
                <p className="mb-0"> Hot Deal In This Week</p>
                <h1>Intelectial Digital Computer</h1>
                <div className="pt-3 d-flex align-items-center">
                  <div className='d-flex align-items-center'>
                    <Link href="checkout">
                      <button className="buyNow">Buy Now</button>
                    </Link>
                    <div className='flot-left ps-4 align-items-center'>
                      <StarReating />
                      <p className='mb-0'>100 Revieue</p>
                    </div>
                  </div>
                  <div className="d-flex ps-1 ps-md-4 ps-lg-4">
                  </div>
                </div>
              </div>
              <div className="col-6">
                <Image className="w-100" src={sliderImgA} />
              </div>
            </div>
            <div className="circleArea">
              <div className="circle">
                <h4>$:95</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="slider" >
          <div className="container slick">
            <div className="row d-flex align-items-center">
              <div className="col-6">
                <p className="mb-0"> Hot Deal In This Week</p>
                <h1>Intelectial Digital Computer</h1>
                <div className="pt-3 d-flex align-items-center">
                  <div className='d-flex align-items-center'>
                    <Link href="checkout">
                      <button className="buyNow">Buy Now</button>
                    </Link>
                    <div className='flot-left ps-4 align-items-center'>
                      <StarReating />
                      <p className='mb-0'>100 Revieue</p>
                    </div>
                  </div>
                  <div className="d-flex ps-1 ps-md-4 ps-lg-4">
                  </div>
                </div>
              </div>
              <div className="col-6">
                <Image className="w-100" src={sliderImgA} />
              </div>
            </div>
            <div className="circleArea">
              <div className="circle">
                <h4>$:95</h4>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default Slidr