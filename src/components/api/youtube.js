import axios from 'axios'

const KEY='AIzaSyBOIETVYc_wsZoRhDr23veqyXPYcenNfSg';

export default axios.create({

    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:10,
        key:KEY
    }
})