import Breadcrumb from '../../components/breadcrumb';

const Getting = () => {
    return (
        <div id="getting">
            <Breadcrumb />
            <div className="container">
                <div className="getting-box">
                    <h3 className="getting-heading">Thank you. Your order has been received.</h3>

                    <div className="row">
                        <div className="col-4">
                            <div className="order">
                                Order number: 1979
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="order">
                                Order number: 1979
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="order">
                                Order number: 1979
                            </div>
                        </div>
                        <div className="col-6 pt-4" >
                            <div className="order">
                                Order number: 1979
                            </div>
                        </div>
                        <div className="col-6 pt-4">
                            <div className="order">
                                Order number: 1979
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Getting;