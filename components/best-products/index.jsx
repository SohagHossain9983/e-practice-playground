import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import BestProductsImgA from "../../assets/img/product-39 1.png";
import BestProductsImgB from "../../assets/img/product-38.png";
import BestProductsImgC from "../../assets/img/laptop (1).png";
import StarRating from "../star-rating";
import Heading from "../heading";

const BestProducts = () => {
  return (
    <div className="container">
      <div className="pb-3">
        <Heading pragraph="Nest" hOne="Best Selling Products" />
      </div>
      <div className="row">
        <div className="col-3">
          <div className="BestProducts card" id="BestProducts">
            <div className="imgArea">
              <a href="#">
                <Image className="w-100 h-auto" src={BestProductsImgA} />
              </a>
            </div>
            <div className="card-body">
              <p className="mb-0">Head Phone</p>
              <h3>Smart Digital Watch</h3>
              <div className="d-flex justify-content-between pb-4">
                <div className="pe-4">
                  <strong>$50.76</strong>
                  <strong className="ps-3 text-muted text-decoration-line-through">
                    $20.87
                  </strong>
                </div>

                <StarRating StarRating="(96%)" />
              </div>
              <a
                className="buttonArea text-decoration-none d-flex justify-content-center align-items-center "
                href="#"
              >
                <FontAwesomeIcon className="pe-3" icon={faCartShopping} />
                <p className="mb-0 text-light">Add To Card</p>
              </a>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="BestProducts card" id="BestProducts">
            <div className="imgArea">
              <a href="#">
                <Image className="w-100 h-auto" src={BestProductsImgB} />
              </a>
            </div>
            <div className="card-body">
              <p className="mb-0">Head Phone</p>
              <h3>Smart Digital Watch </h3>
              <div className="d-flex justify-content-between pb-4">
                <div className="pe-4">
                  <strong>$50.76</strong>
                  <strong className="ps-3 text-muted text-decoration-line-through">
                    $20.87
                  </strong>
                </div>

                <StarRating StarRating="(96%)" />
              </div>
              <a
                className="buttonArea text-decoration-none d-flex justify-content-center align-items-center "
                href="#"
              >
                <FontAwesomeIcon className="pe-3" icon={faCartShopping} />
                <p className="mb-0 text-light">Add To Card</p>
              </a>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="BestProducts card" id="BestProducts">
            <div className="imgArea">
              <a href="#">
                <Image className="w-100 h-auto" src={BestProductsImgC} />
              </a>
            </div>
            <div className="card-body">
              <p className="mb-0">Head Phone</p>
              <h3>Smart Digital Watch</h3>
              <div className="d-flex justify-content-between pb-4">
                <div className="pe-4">
                  <strong>$50.76</strong>
                  <strong className="ps-3 text-muted text-decoration-line-through">
                    $20.87
                  </strong>
                </div>
                <StarRating StarRating="(96%)" />
              </div>
              <a
                className="buttonArea text-decoration-none d-flex justify-content-center align-items-center"
                href="#"
              >
                <FontAwesomeIcon className="pe-3" icon={faCartShopping} />
                <p className="mb-0 text-light">Add To Card</p>
              </a>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="BestProducts card" id="BestProducts">
            <div className="imgArea">
              <a href="#">
                <Image className="w-100 h-auto" src={BestProductsImgC} />
              </a>
            </div>
            <div className="card-body">
              <p className="mb-0">Head Phone</p>
              <h3>Smart Digital Watch</h3>
              <div className="d-flex justify-content-between pb-4">
                <div className="pe-4">
                  <strong>$50.76</strong>
                  <strong className="ps-3 text-muted text-decoration-line-through">
                    $20.87
                  </strong>
                </div>
                <StarRating StarRating="(96%)" />
              </div>
              <a
                className="buttonArea text-decoration-none d-flex justify-content-center align-items-center"
                href="#"
              >
                <FontAwesomeIcon className="pe-3" icon={faCartShopping} />
                <p className="mb-0 text-light">Add To Card</p>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default BestProducts;
