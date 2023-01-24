import {ExpandIcon} from "./Icon";
import {useState} from "react";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import {useSelector} from "react-redux";


const Activity = () => {
    const [isActive, setIsActive] = useState(true);
    const filterData = useSelector(state => state?.filterReducer?.fetchList)
    const activityData = filterData?.Activity
    return <div>
    <div className="sizeTitle">
        Activity
        <ExpandIcon add={isActive} onClick={()=>setIsActive(!isActive)}/>
    </div>
        {activityData && activityData.map((i, index)=>{
            return <div key={{i}} className="checkBoxDiv">
                <CheckBoxOutlineBlankOutlinedIcon/>
                <div className="sizeType">
                    {i.name}
                </div>
            </div>
        }  )}
    </div>
}
export default Activity;