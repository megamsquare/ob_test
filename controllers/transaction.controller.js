import axios from 'axios';
import constant from '../use_case/constant';

async function get_transactions(walletAddress, currencyType) {
    const request = req.body;
    try {
        const apiUrl = `${constant.api_url}/${currencyType}/${walletAddress}`;

        const response = await axios.get(apiUrl);

        if (response.status !== 200) {
            res.status(500).json({ message: `Error fetching transactions for wallet address ${request.walletAddress}` })
        }

        res.status(200).json(response.data.data.txs);
    } catch (error) {
        res.status(500).json({ message: `Error fetching transactions for wallet address ${request.walletAddress}` })
    }
}

const transactions = {
    get_transactions
}



export default transactions;