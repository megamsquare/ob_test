import axios from 'axios';
import constant from '../use_case/constant';
import queue_consumer from '../data_access/connect_queue.js';

async function get_transactions(req, res) {
    const request = req.body;
    try {
        const apiUrl = `${constant.api_url}/${request.currencyType}/${request.walletAddress}`;

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