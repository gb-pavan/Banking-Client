import useFetch from "../../CustomHooks/useFetch"
import TransactionDetails from '../TransactionDetails'
import './index.css'

const FetchTransactionDetails = props => {
    const {isAfterLogin,selectedCustomer} = props

    console.log('customerData in fetch transaction details',selectedCustomer)
    console.log('customerData in fetch transaction details account number',selectedCustomer.account_number)


    


    
    const method = 'POST';


    const customerData = useFetch('https://banking-application-backend-render.onrender.com/gettransactiondetails',method,isAfterLogin,selectedCustomer.account_number)

    console.log('customerData after fetching using UseFetch',customerData)

    return (
    <div className='customer-transaction-details'>
        <TransactionDetails customerData={customerData} />
    </div>)
}

export default FetchTransactionDetails
