import "./Colour.scss"
import {ExpandIcon} from "./Icon";
import {useState} from "react";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import {useSelector} from "react-redux";

const Colour = () => {
    const [isActive, setIsActive] = useState(true);
    const filterData = useSelector(state => state?.filterReducer?.fetchList)
    const colorData = filterData?.Colour
    return <div>
        <div className="sizeTitle">
            Colour
            <ExpandIcon add={isActive} onClick={()=>setIsActive(!isActive)}/>
        </div>
        <div className="sizeType-div">
            {colorData && colorData.map((i, index)=>{
                return <div className="circle">

                </div>
            })}
        </div>


    </div>

}

export default Colour