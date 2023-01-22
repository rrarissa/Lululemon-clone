import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import "./Icon.scss"

const ExpandIcon = ({add, ...rest}) =>{
return(
    <div {...rest}>
        {add? <AddIcon/> :<RemoveOutlinedIcon/>}
    </div>
)
}
export {
    ExpandIcon
}