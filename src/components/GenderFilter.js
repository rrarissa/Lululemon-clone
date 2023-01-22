import {useSelector} from "react-redux";
import "./GenderFilter.scss"

export const GenderFilter = () => {
    const filterData = useSelector(state => state?.filterReducer?.fetchList)
    console.log("filterData", filterData)
    const genderData = filterData?.Gender
    console.log("genderData", genderData)
    return <div>
        <h1>Gender</h1>
        {genderData && genderData.map((i, index)=>{
            return <div key={{index}}>
                {i.name}
            </div>
        })}
    </div>
}