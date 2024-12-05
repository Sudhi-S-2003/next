import BasicSvg from "../BasicSvg.jsx";
import { DefaultRootValue } from "../../../Model/Basic_Value/index.js"

function Ellipse({ root = DefaultRootValue, cx = "100", cy = "50", rx = "50", ry = "25", fill = "purple" }) {
    return (
        <BasicSvg root={root}>
            <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} />
        </BasicSvg>
    )
}

export default Ellipse