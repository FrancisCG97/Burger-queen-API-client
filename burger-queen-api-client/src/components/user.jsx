// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Users() {

    return (
        <>
            <a id="text" className="navbar-brand"> Welcome back! Who are you? </a>
            <br></br>

            <section id="login-user">
                <div id="login-inputs">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">
                        <label id="email" htmlFor="exampleFormControlInput1" className="form-label"> User </label>
                        <input type="email" className="form-control" placeholder="..." id="exampleFormControlInput1"></input>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">
                        <label id="pass" htmlFor="inputPassword5" className="form-label"> Pass </label>
                        <input type="password" id="inputPassword5" placeholder="..." className="form-control" aria-describedby="passwordHelpBlock"></input>
                    </div>
                </div>

                <div id="btns">
                    <div id="user-btns">
                        <div id="login">
                            <button type="button" className="btn"> Log in </button>
                        </div>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel"> Create new user </h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div id="new-user-inputs">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">
                                                <label id="id" htmlFor="exampleFormControlInput2" className="form-label"> Id </label>
                                                <input type="text" className="form-control" placeholder="..." id="exampleFormControlInput2"></input>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">
                                                <label id="new-pass" htmlFor="inputPassword2" className="form-label"> Pass </label>
                                                <input type="password" id="inputPassword2" placeholder="..." className="form-control" aria-describedby="passwordHelpBlock"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-12">
                                            <select className="form-select" aria-label="Default select example">
                                                <option value="Rol"> Rol 🔽 </option>
                                                <option value="1"> Admin </option>
                                                <option value="2"> Garzón </option>
                                                <option value="3"> Chef </option>
                                            </select>
                                        </div>
                                        <button id="new-user" type="button" className="btn btn-primary"> Create user </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            New user <br></br> Admin only
                        </button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Users;