// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import burgerCrown from '../assets/Images/b-crown.png'


function Header() {

  const date = new Date();

  let year = date.getFullYear();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = months[date.getMonth()];
  let day = date.getDate();

  let hours = date.getHours();
  let minutes = date.getMinutes();

  return (
    <>

      <section id="header" className="row">
        <nav id="header-brand" className="navbar">
          <div className="col-2 col-sm-8 col-md-6 col-lg-6 col-xl-12">
            <div id="title-container" className="container-fluid">
                <img id="burger" src={burgerCrown} alt="Logo" className="align-text-top"></img>
                <a id="brand" className="navbar-brand">
                Burger Queen
              </a>
            </div>
          </div>

          <section id="date-time" className="col-2 col-sm-8 col-md-6 col-lg-3 col-xl-12">
            <div id="date" className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <label htmlFor="formGroupExampleInput2" className="form-label"> Date: {day} {month}, {year} </label>
              <label htmlFor="formGroupExampleInput" className="form-label"> Time: {hours}:{minutes} hrs. </label>
            </div>
          </section>
        </nav>
      </section>
    </>
  )
}

export default Header;