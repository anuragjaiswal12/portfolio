import './Navbar.css';
import logo from './logo.svg';

const white={
  color:'white'
}
function Navbar({setValue}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" onClick={(e) => {e.preventDefault(); setValue('home')}}><img src={logo} height='auto' width='auto' /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars" style={white}></i>
            </button> 
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" style={white} aria-current="page" onClick={(e) => {e.preventDefault(); document.querySelector('.navbar-toggler').classList.add('collapsed'); document.querySelector('.navbar-collapse').classList.remove('show');  setValue('home')}}><i className="fa-solid fa-house-user"></i>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={white} onClick={(e) => {e.preventDefault(); document.querySelector('.navbar-toggler').classList.add('collapsed'); document.querySelector('.navbar-collapse').classList.remove('show'); setValue('about')}}>{/*<i class="fa-solid fa-user-tie"></i>*/}<i className="fa-solid fa-user-secret"></i>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={white} onClick={(e) => {e.preventDefault(); document.querySelector('.navbar-toggler').classList.add('collapsed'); document.querySelector('.navbar-collapse').classList.remove('show'); setValue('project')}} href="#"><i className="fa-solid fa-file-code"></i>Project</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={white} onClick={(e) => {e.preventDefault(); document.querySelector('.navbar-toggler').classList.add('collapsed'); document.querySelector('.navbar-collapse').classList.remove('show'); setValue('resume')}}><i className="fa-solid fa-file"></i>Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
