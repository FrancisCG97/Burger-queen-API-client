// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Users() {

    return (
        <>
            <a id="text" className="navbar-brand"> Welcome back! Who are you? </a>
            <br></br>

            <section id="login-user">
                <div id="login-inputs">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <label id="email" htmlFor="exampleFormControlInput1" className="form-label"> User </label>
                        <input type="email" className="form-control" placeholder="..." id="exampleFormControlInput1"></input>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <label id="pass" htmlFor="inputPassword5" className="form-label"> Pass </label>
                        <input type="password" id="inputPassword5" placeholder="..." className="form-control" aria-describedby="passwordHelpBlock"></input>
                    </div>
                </div>

                <div id="btns">
                    <div id="user-btns">
                        <div id="login">
                            <button type="button" className="btn"> Log in </button>
                        </div>
                        <button type="button" className="btn"> New user <br></br> Admin only </button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Users;