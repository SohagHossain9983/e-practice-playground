import { Input, Label } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faStar, } from '@fortawesome/free-solid-svg-icons'
import StarRating from '../star-rating'
import Checkbox from '../checkbox'

const FilterBar = () => {
    return (
        <div id="filter-bar" className="container-fluid">
            <div className=" categories p-3">
                <h4 className="mt-2">Categories</h4>
                <div>
                    {/* Accordion Start  */}
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Computer
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div className=' category-search d-flex align-items-center'>
                                        <Input
                                            className="shadow-none"
                                            type="search"
                                        >
                                            Search
                                        </Input>
                                        <FontAwesomeIcon className=" searchIcon pe-2" icon={faSearch} />
                                    </div>
                                    <div className="sub-categories p-3">
                                        <p>View all <span>1</span></p>
                                        <p>Desktop <span>1</span></p>
                                        <p>Laptop <span>1</span></p>
                                        <p>Mother Board <span>1</span></p>
                                        <p>Others<span>..</span></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Mobile
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Head Phone
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Speaker
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Mouse
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Keyboard
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Accordion End  */}
                    {/* Price Range Start */}
                    <div className="price mt-4">
                        <h4>Price</h4>
                        <Input
                            color="primary"
                            type="range"
                        />
                    </div>
                    {/* Price Range End */}

                    {/* Size Start  */}
                    <div className="size mt-5">
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            heading={`Size`}
                            name={`XXL`}
                            CheckId={`13`}
                        />
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            name={`XL`}
                            CheckId={`12`}
                        />
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            name={`L`}
                            CheckId={`14`}
                        />
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            name={`M`}
                            CheckId={`16`}
                        />
                    </div>
                    {/* Size SEnd  */}

                    {/* Brand Start  */}
                    <div className="brand mt-5">
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            heading={`brand`}
                            name={`Apple`}
                            CheckId={`21`}

                        />
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            name={`Samsung`}
                            CheckId={`22`}

                        />
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            name={`Realme`}
                            CheckId={`23`}

                        />
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            name={`Nokia`}
                            CheckId={`24`}
                        />
                    </div>
                    {/* Brand SEnd  */}
                    {/* Rating Range Start */}
                    <div className="Rating mt-5">
                        <h4>Rating</h4>
                        <div>
                            <StarRating rating={''} />
                            <StarRating rating={'And Up'} />
                            <StarRating rating={'And Up'} />
                            <StarRating rating={'And Up'} />
                            <StarRating rating={'And Up'} />

                        </div>
                    </div>
                    {/* Rating Range End */}
                    {/* Color-Family Start  */}
                    <div className="color-family mt-5">
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            heading={`Color-Family`}
                            name={`Red`}
                            CheckId={`17`}

                        />
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            name={`White`}
                            CheckId={`18`}

                        />
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            name={`Green`}
                            CheckId={`19`}
                        />
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            name={`Blue`}
                            CheckId={`20`}
                        />
                    </div>
                    {/* Color-Family End  */}
                </div>
            </div>
        </div>

    )
}
export default FilterBar
