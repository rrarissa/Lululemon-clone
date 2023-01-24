import "./Size.scss"
import {useState} from "react";
import {ExpandIcon} from "./Icon";
import SizeComponent from "./SizeComponent";
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import {useSelector} from "react-redux";

const Size = () => {
    const [isActive, setIsActive] = useState(true);
    const filterData = useSelector(state => state?.filterReducer?.fetchList)
    const sizeTypeData = filterData?.SizeType

    return <div>
    <div className="sizeTitle">
        Size
     <ExpandIcon add={isActive} onClick={()=>setIsActive(!isActive)}/>
    </div>
        <div className="sizeComponent-div">
        <SizeComponent />
        </div>
        <div className="sizeTitle">
            Size Type
            <ExpandIcon add={isActive} onClick={()=>setIsActive(!isActive)}/>
        </div>
        <div className="sizeType-div">
            {sizeTypeData && sizeTypeData.map((i, index)=>{
            return <div key={{index}} className="sizeType">
                <CheckBoxOutlineBlankOutlinedIcon/>
                {i.name}
            </div>
        })}
        </div>
    </div>
}
export default Size