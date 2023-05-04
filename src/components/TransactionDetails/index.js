import DisplayTransaction from '../DisplayTransaction';
import './index.css'

const TransactionDetails = props => {
    const {customerData} = props

     console.log('customerData ordered',customerData)
    return (
        <div className='transaction-details'>
        <table className='table-style'>
            <thead>
                <tr>
                    <th style={{ width: '260px'}}>Time</th>
                    <th style={{ width: '120px' }}>Credited By</th>
                    <th style={{ width: '120px' }}>Deposited To</th>
                    <th style={{ width: '100px' }}>Amount</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody className='customer-fetched-details2'>
                {customerData.map(eachTransaction => (
                    <DisplayTransaction eachTransaction={eachTransaction} />              
                ))}
            </tbody>

        </table>

        </div>
        
    )
    
}

export default TransactionDetails