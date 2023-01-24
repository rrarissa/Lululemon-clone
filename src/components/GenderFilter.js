import {useDispatch, useSelector} from "react-redux";
import "./GenderFilter.scss"
import {useEffect} from "react";
import {fetchFilter} from "../actions/fetchFilter";
import {APIURL} from "./Helper";
import axios from "axios";
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';

export const GenderFilter = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetchData(){
            axios.get(APIURL)
                .then(res => {
                    const raw = res.data.rs;
                    console.log("filters", raw)
                    dispatch(fetchFilter(raw))
                })}
        fetchData();
    }, [])

    const filterData = useSelector(state => state?.filterReducer?.fetchList)
    console.log("filterData", filterData)
    const genderData = filterData?.Gender
    console.log("gender data", genderData)
    const categoryData = filterData?.Category
    const typeData = filterData?.Type
    return <div>
        <h1>Gender</h1>
        {genderData && genderData.map((i, index)=>{
            return <div key={{index}} className="checkBoxDiv">
                <CheckBoxOutlineBlankOutlinedIcon/>
                <div className="sizeType">
                {i.name}
                </div>
            </div>
        })}
        <h1>
            Category
        </h1>
        {categoryData && categoryData.map((i, index)=>{
            return <div key={{index}} className="checkBoxDiv">
                <CheckBoxOutlineBlankOutlinedIcon/>
                <div className="sizeType">
                    {i.name}
                </div>
            </div>
        }        )}


        <h1>
            Type
            </h1>
        {typeData && typeData.map((i, index)=>{
            return <div key={{index}} className="checkBoxDiv">
            <CheckBoxOutlineBlankOutlinedIcon/>
            <div className="sizeType">
        {i.name}
            </div>
            </div>

        }  )}



    </div>
}