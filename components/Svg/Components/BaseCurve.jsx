import BasicSvg from "../BasicSvg.jsx";
import { DefaultRootValue } from "../../../Model/Basic_Value/index.js"

function BaseCurve({ root = DefaultRootValue, start = "0,200", end = "200,0", control = "150,190", fill = "transparent", stroke = "black" }) {
    return (
        <BasicSvg root={root}>
            <path d={`M${start} Q${control} ${end}`} fill={fill} stroke={stroke} />
        </BasicSvg>
    )
}

export default BaseCurve