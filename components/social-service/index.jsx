
import CustomImage from "../ui/custom-image"
import SocialServiceImgA from "../../assets/img/BasicSel.png"
import SocialServiceImgB from "../../assets/img/IconFic.png"
import SocialServiceImgC from "../../assets/img/LeyaK.png"
import SocialServiceImgD from "../../assets/img/Meta.png"

const SocialService = () =>{
    return(
        <div className="container" id="SocialService">
            <div className="row">
                <div className="col-3 imgAera">
                    <CustomImage classes={'social-service-img'} src={SocialServiceImgA} actionLink={`#`}/>
                </div>
                <div className="col-3 imgAera">
                      <CustomImage classes={'social-service-img'} src={SocialServiceImgB} actionLink={`#`}/>
                </div>
                <div className="col-3 imgAera">
                      <CustomImage classes={'social-service-img'} src={SocialServiceImgC} actionLink={`#`}/>
                </div>
                <div className="col-3 imgAera">
                      <CustomImage classes={'social-service-img'} src={SocialServiceImgD} actionLink={`#`}/>
                </div>       
            </div>
        </div>
    )
}
export default SocialService