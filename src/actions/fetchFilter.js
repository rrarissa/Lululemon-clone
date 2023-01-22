import {actionType, APIURL} from "../components/Helper";
import axios from "axios";

const data = axios.get(APIURL).then(res => res.data.rs).catch(err=>err)

 export const fetchFilter = () => {
return{
    type: actionType.FETCH_FILTER,
    payload: data,
}
}

export default {
    fetchFilter
}