import {actionType, APIURL} from "../components/Helper";
import axios from "axios";


 export const fetchFilter = (data) =>{
     return {
         type:"FETCH_FILTER",
         payload: data,
     }
 }


export default {
    fetchFilter
}