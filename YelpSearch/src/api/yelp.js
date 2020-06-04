import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses', 
    headers: {
        Authorization: 'Bearer NVWZtD6NWvMiDc4bAlvxH93QQQSZ54GraKpewotokDGSC7meBetk3IE4YsuKpTBCJtBRWn-9R7msi1DWdsxRHRQvVhDR2oPIyI27lPGR9hqrGAR3KNs29Bu39TrTXnYx'
    }
});