import FilterBar from "../../components/shop-bar"
import ProductCard from "../../components/product-card"
import Pagination from "../../components/pagination"
import ShopBar from '../../components/filter-bar';
import Breadcrumb from "../../components/breadcrumb";

const Shop = () => {
    return (
        <div className='container-fluid'>
            <Breadcrumb
                mainLink={`HOME`}
                subLink={`SHOP`}
            />
            <div className="row">
                <div className="col-3">
                    <ShopBar />
                </div>
                <div className="col-9 mt-2 p-5">
                    <FilterBar />
                    <div className="mt-3">
                        <div className="row">
                            <div className="col-3">
                                <ProductCard id='1' heading={'Smart Digital Watch'} title={'Head Phone'} />
                            </div>
                            <div className="col-3">
                                <ProductCard id='2' heading={'Smart Digital Watch'} title={'Head Phone'} />
                            </div>
                            <div className="col-3">
                                <ProductCard id='3' heading={'Smart Digital Watch'} title={'Head Phone'} />
                            </div>
                            <div className="col-3">
                                <ProductCard id='4' heading={'Smart Digital Watch'} title={'Head Phone'} />
                            </div>
                            <div className="col-3">
                                <ProductCard id='5' heading={'Smart Digital Watch'} title={'Head Phone'} />
                            </div>
                            <div className="col-3">
                                <ProductCard id='7' heading={'Smart Digital Watch'} title={'Head Phone'} />
                            </div>
                            <div className="col-3">
                                <ProductCard id='8' heading={'Smart Digital Watch'} title={'Head Phone'} />
                            </div>
                            <div className="col-3">
                                <ProductCard id='9' heading={'Smart Digital Watch'} title={'Head Phone'} />
                            </div>
                            <div className="col-3">
                                <ProductCard id='10' heading={'Smart Digital Watch'} title={'Head Phone'} />
                            </div>
                            <div className="col-3">
                                <ProductCard id='11' heading={'Smart Digital Watch'} title={'Head Phone'} />
                            </div>
                            <div className="col-3">
                                <ProductCard id='12' heading={'Smart Digital Watch'} title={'Head Phone'} />
                            </div>
                            <div className="col-3">
                                <ProductCard id='13' heading={'Smart Digital Watch'} title={'Head Phone'} />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default Shop