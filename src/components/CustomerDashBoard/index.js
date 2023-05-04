import React, { useState,useEffect } from 'react';
import BasicDetails from '../BasicDetails';
import DepositAmount from '../DepositAmount';
import FetchTransactionDetails from '../FetchTransactionDetails';
import WithdrawAmount from '../WithdrawAmount'
import './index.css';
import Cookies from 'js-cookie';

const CustomerDashBoard = (props) => {
  const { showLogin,selectedCustomer,setShowLogin } = props;

  const isAfterLogin = !showLogin

  console.log('modified customerData',selectedCustomer)

  const [showBasicDetails, setShowBasicDetails] = useState(true);
  const [showTransactions, setShowTransactions] = useState(false);
  const [showDeposit, setShowDeposit] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [logOut, setLogOut] = useState(false);
  

  const handleBasicDetailsClick = () => {
    setShowBasicDetails(true);
    setShowTransactions(false);
    setShowDeposit(false);
    setWithdraw(false)
    setLogOut(false)
  };

  const handleTransactionDetailsClick = () => {
    setShowBasicDetails(false);
    setShowTransactions(true);
    setShowDeposit(false);
    setWithdraw(false)
    setLogOut(false)
  };

  const handleDepositAmountClick = () => {
    setShowBasicDetails(false);
    setShowTransactions(false);
    setShowDeposit(true);
    setWithdraw(false)
    setLogOut(false)
  };

  const handleWithrawAmountClick = () => {
    setShowBasicDetails(false);
    setShowTransactions(false);
    setShowDeposit(false);
    setWithdraw(true)
    setLogOut(false)
  };

  const handleLogOutClick = () => {
    Cookies.remove('myToken');
    setShowLogin(true)
  };

  return (
    <div className="banker">
      <div className='buttons-display'>
        <button className={`common-feature button-basic ${showBasicDetails  ? 'active' : ''}`} onClick={handleBasicDetailsClick}>Basic Details</button>
        <button className={`common-feature button-transactions ${showTransactions ? 'active' : ''}`} onClick={handleTransactionDetailsClick}>Transaction Details</button>
        <button className={`common-feature button-deposit ${showDeposit ? 'active' : ''}`} onClick={handleDepositAmountClick}>Deposit Amount</button>
        <button className={`common-feature button-withdraw ${withdraw ? 'active' : ''}`} onClick={handleWithrawAmountClick}>Withdraw Amount</button>
        <button className={`common-feature button-logout ${logOut ? 'active' : ''}`} onClick={handleLogOutClick}>Log Out</button>
      </div>
      <div className='customer-details'>
        {showBasicDetails && <BasicDetails  selectedCustomer={selectedCustomer} />}
        {showTransactions && <FetchTransactionDetails isAfterLogin={isAfterLogin} selectedCustomer={selectedCustomer} />}
        {showDeposit && <DepositAmount selectedCustomer={selectedCustomer} />}
        {withdraw && <WithdrawAmount selectedCustomer={selectedCustomer} isAfterLogin={isAfterLogin} />}
      </div>
    </div>
    
  );
};

export default CustomerDashBoard;
