import "./LeftFilter.scss"
import Size from "./Size";
import Activity from "./Activity";
import {useDispatch, useSelector} from "react-redux";
import actions from "../actions";
import {fetchFilter} from "../actions/fetchFilter";
import {useEffect} from "react";
import {GenderFilter} from "./GenderFilter";
import Colour from "./Colour";

const LeftFilter = () => {

    return <div>
        This is LeftFilter.
        <GenderFilter />
        <Activity />
        <Size/>
        <Colour />
    </div>
}
export default LeftFilter