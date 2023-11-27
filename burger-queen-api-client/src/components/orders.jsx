/* eslint-disable no-unused-vars */
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function Orders() {

    return (
        <>

            <div id="cards" className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page">Active</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">Link</a>
                                    </li>
                                </ul>
                            </h5>
                            <p className="card-text"> Aquí se ve el menú con productos y precio </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title"> Order </h5>
                            <p className="card-text"> Aquí se ve la orden actual </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title"> Orders status </h5>
                            <p className="card-text"> Aquí va el status de cada orden </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="log-out">
            <button type="button" className="btn"> Log out </button>
            </div>
        </>
    )
}

export default Orders;