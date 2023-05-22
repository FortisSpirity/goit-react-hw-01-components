import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    return (
        <div>
            <table class="transaction-history">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                {items.map(item => (
                    <tbody key={item.id}>
                        <tr >
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    </tbody>
                ))}

            </table>
        </div>
    )

}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};