import "./Size.scss"
import {useState} from "react";
import {ExpandIcon} from "./Icon";
import SizeComponent from "./SizeComponent";
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';

const Size = () => {
    const [isActive, setIsActive] = useState(true);
    return <div>
    <div className="sizeTitle">
        Size
     <ExpandIcon add={isActive} onClick={()=>setIsActive(!isActive)}/>
    </div>
        <SizeComponent />
        <div className="sizeTitle">
            Size Type
            <ExpandIcon add={isActive} onClick={()=>setIsActive(!isActive)}/>
        </div>
        <div className="checkBoxDiv">
            <CheckBoxOutlineBlankOutlinedIcon/>
            <div className="sizeType">
            Tall
            </div>
        </div>
        <div className="checkBoxDiv">
            <CheckBoxOutlineBlankOutlinedIcon/>
            <div className="sizeType">
                Short
            </div>
        </div>
    </div>
}
export default Size