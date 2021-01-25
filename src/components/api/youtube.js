import axios from 'axios'

const KEY='AIzaSyD4q5OTkblssHS_jJwHTShDYjLSU9c7kHI';

export default axios.create({

    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:10,
        key:KEY
    }
})
