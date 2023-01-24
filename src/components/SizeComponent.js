import "./SizeComponent.scss"
import {useSelector} from "react-redux";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";

const SizeComponent = () => {
    const filterData = useSelector(state => state?.filterReducer?.fetchList)
    const sizeData = filterData?.Size
    return <div className="size">
        {sizeData && sizeData.map((i, index)=>{
            return <div key={{index}} className="sizeComponent">
                {i.name}
            </div>
        })}
    </div>
}
export default SizeComponent