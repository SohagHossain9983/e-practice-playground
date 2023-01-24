import { Fragment } from 'react'
import CategoryCard from "../components/category-card"
import TrandingProductCard from '../components/tendign-product-card'
import Banner from '../components/banner'
import SocialService from '../components/social-service'
import BestProducts from '../components/best-products'
import CustomSlider from '../components/custom-slider'
import SectionTitle from '../components/section-title'

import CategoryCardImgA from "../assets/img/545245.png"
import CategoryCardImgB from "../assets/img/headphone-headset-earphone-svgrepo-com 1.png"
import CategoryCardImgC from "../assets/img/Group.png"
import CategoryCardImgD from "../assets/img/Vector (1).png"
import CategoryCardImgE from "../assets/img/Vector (4).png"
import useData from '../hooks/useData'

export default function Home() {
    const {data} = useData('/categories')
    return (
        <Fragment>
            <CustomSlider />
            <div className="py-5">  
                <div className='container'>
                    <div className="pb-3">
                        <SectionTitle hedName="Top Categories" subName="Categories"/>
                    </div>
                    {/* {[...Array(5)].map(()=><CategoryCard/>)} */}
                    {data && data.length > 0 && data.map((item)=>
                        <CategoryCard imgName={CategoryCardImgA} title={item.name}/>
                    )}
                    {/* <CategoryCard imgName={CategoryCardImgA} title="Mobile"/>
                    <CategoryCard imgName={CategoryCardImgB} title="Headphone" />
                    <CategoryCard imgName={CategoryCardImgC} title="Computer" />
                    <CategoryCard imgName={CategoryCardImgD} title="Sounbox"/>
                    <CategoryCard imgName={CategoryCardImgE} title="Camera"/> */}
                </div>
            </div>

            <div className="py-5">
                <div className='container'>
                    <div className="pb-3">
                        <SectionTitle hedName="Trending Products" subName="Categories"/>
                    </div>
                    <div>
                        <TrandingProductCard/>
                        <TrandingProductCard/>
                        <TrandingProductCard/>
                        <TrandingProductCard/>
                        <TrandingProductCard/>
                    </div>
                </div>
            </div>

            <div>
                <div className="container">
                    <Banner/>
                </div>
            </div>

            <div className="py-5">
                <div className='container'>
                    <div className="">
                        <SectionTitle hedName="Best Selling Products" subName="Nest"/>
                    </div>
                    <BestProducts />
                </div>
            </div>

            <div className="py-5">
                <SocialService />
            </div>
        </Fragment>
    )
}
