import { Outlet } from 'react-router-dom';
import NavBar from './Navbar';
import Footer from './Footer';

const Body = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/> 
        {/*  any childern route of body will render here */}
        <Footer />
    </div>
  )
}

export default Body;