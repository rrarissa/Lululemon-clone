import "./LeftFilter.scss"
import Size from "./Size";
import Activity from "./Activity";
import {useDispatch, useSelector} from "react-redux";
import actions from "../actions";
import {fetchFilter} from "../actions/fetchFilter";
import {useEffect} from "react";
import {GenderFilter} from "./GenderFilter";

const LeftFilter = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchFilter())
    }, [])

    return <div>
        This is LeftFilter.
        <GenderFilter />
        <Activity />
        <Size/>
    </div>
}
export default LeftFilter