import Breadcrumb from "../../components/breadcrumb"
import CardList from "../../components/card-list"

const WishList = () => {
    return (
        <div className="mb-5">
            <Breadcrumb mainLink={`Cart`} title={`Products`} />
            <div className="container">
                <div className="">
                    <CardList />
                    <CardList />
                    <CardList />
                    <CardList />
                </div>
            </div>
        </div>
    )
}
export default WishList