import axios from "axios";

const BASEURL = "https://randomuser.me/api/";
// const config = {
//     headers: {'Access-Control-Allow-Origin': 'http://localhost:3000/'}
// };
// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    getPeople: function() {
        return axios.get(BASEURL)
        }
    };

