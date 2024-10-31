import {React} from 'react'
import {NavLink} from 'react-router-dom'
import {NavDropdown} from 'react-bootstrap';
import  '../../styles/authstyle.css';

// import { ethers } from 'ethers';

const Header = () => {

  const user =JSON.parse(localStorage.getItem('data'));
  
function logout(){
  localStorage.clear();
 

}


 
  async function requestAccount() {
    console.log('Requesting account...');

    // Check if Meta Mask Extension exists 
    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
        
      } catch (error) {
        console.log('Error connecting...');
      }

    

    } else {
      alert('Meta Mask not detected');
    }
  }

 
  
  return (
    <section className='h-wrapper'> 
<div  className='flexCenter paddings innerWidth h-container'>
  
  <NavLink to=""   className="nav-link" ></NavLink>
  
<div className='flexCenter h-menu'>

<NavLink to="/"   className="nav-link" >Home</NavLink>
<NavLink to="/marketplace"   className="nav-link" > Properties</NavLink>
<NavLink to="/about"   className="nav-link" >About Us</NavLink>
<NavLink to="/contact"   className="nav-link" >Contact Us</NavLink>
<NavLink to="/register"   className="nav-link" >SignUp/Login</NavLink>
<NavLink to="/blog"   className="nav-link" >Blog</NavLink>

 

</div>
{localStorage.getItem('data') ? (
  <NavDropdown title={user && user.email}>
    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
  </NavDropdown>
) : null}
</div>




    </section>
  )
}

export default Header
