import CustomSubHeading from "../ui/custom-sub-heading";
import CustomHeading from "../ui/custom-heading";
import CustomButton from "../ui/custom-button";
import CustomImage from "../ui/custom-image";
import BennerImg from "../../assets/img/poster-03 1.png";

const Bannar = () => {
  return (
    <div id="homeBannar">
      <div className="row d-flex align-items-center">
        <div className="col-6">
          <CustomSubHeading
            classes="banner-p"
            subName="Enhance Your Music Experience"
          />
          <CustomHeading
            classes="pb-4 m-0 p-0 benner-heading"
            hedName="Enhance Your Music Experience"
          />
          <CustomButton
            classes={`banner-button d-block mt-4`}
            size="medium"
            variant="primary"
            btnText="Check it Out"
          />
        </div>
        <div className="col-6 text-center">
          <CustomImage src={BennerImg} />
        </div>
      </div>
    </div>
  );
};
export default Bannar;
