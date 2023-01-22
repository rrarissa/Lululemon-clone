import {ExpandIcon} from "./Icon";
import {useState} from "react";


const Activity = () => {
    const [isActive, setIsActive] = useState(true);
    return <div>
    <div className="sizeTitle">
        Activity
        <ExpandIcon add={isActive} onClick={()=>setIsActive(!isActive)}/>
    </div>
    </div>
}
export default Activity;