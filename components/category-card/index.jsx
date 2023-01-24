
import CustomImage from "../ui/custom-image";
import CustomHeading from "../ui/custom-heading"
import CategoryCardImgA from "../../assets/img/545245.png"

function Categories({title,imgName}) {
  return (
    <div className="py-5 px-4" id="categoryCard">
      <CustomImage classes={'category-card-img d-block mb-4'} actionLink={''} src={imgName} />
      <CustomHeading classes={'category-card-heading mt-4'} hedName={title} />
    </div>
  );
}
export default Categories;
