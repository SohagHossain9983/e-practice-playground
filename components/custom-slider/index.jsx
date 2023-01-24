import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import sliderImgA from "../../assets/img/banner-mockup 1.png"
import sliderImgB from "../../assets/img/product-39 1.png"
import SingleItem from './single-item';

function CustomSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className="py-5" id="homeSlider">
      <Slider {...settings}>

        <SingleItem
          hedName='Intelectial Digital Computer 01'
          subName='Hot Deal In This Week'
          btnText='Buy Now'
          buttonAction='/'
          src={sliderImgA}
        />
        <SingleItem
          hedName='Smart Digital Watch 02'
          subName='Hot Deal In This Week'
          btnText='Buy Now'
          buttonAction='/'
          src={sliderImgB}
        />
        <SingleItem
          hedName='Intelectial Digital Computer 03'
          subName='Hot Deal In This Week'
          btnText='Buy Now'
          buttonAction='/'
          src={sliderImgA}
        />
        <SingleItem
          hedName='Smart Digital Watch 04'
          subName='Hot Deal In This Week'
          btnText='Buy Now'
          buttonAction='/'
          src={sliderImgB}
        />
      </Slider>
    </div>
  );
}
export default CustomSlider