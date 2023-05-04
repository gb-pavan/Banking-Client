import './index.css'
import CustomerList from '../CustomerList'
import Cookies from 'js-cookie';

const BankerDashBoard = ({bankerData,showLogin,setShowLogin}) => {     
  console.log("bankerData",bankerData)
  const isAfterLogin = !showLogin
  console.log("isAfterLogin",isAfterLogin)

  const handleLogOutClick = () => {
    Cookies.remove('myToken');
    setShowLogin(true)
  }
      return (
        <div className='banker-dashboard'>
          <button onClick={handleLogOutClick} >Log Out</button>
          <h1>Customer List</h1>
          <CustomerList customers={bankerData} isAfterLogin={isAfterLogin} />
        </div>
      );
  }



export default BankerDashBoard;