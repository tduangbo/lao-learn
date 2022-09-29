import './header.css';

function Header(){
    return(
        <>
<div className="header">
  <a href="#default" className="logo">Salavanh High School @1995-96</a>
  <div className="header-right">
    <a className="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div>
        </>
    )
}

export default Header;