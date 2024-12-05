import BasicSvg from "../BasicSvg.jsx";
import { DefaultRootValue } from "../../../Model/Basic_Value/index.js"

function Base({ root = DefaultRootValue }) {
    return (
        <BasicSvg root={root}>

        </BasicSvg>
    )
}

export default Base