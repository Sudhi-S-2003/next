import BasicSvg from "../BasicSvg";
import {DefaultRootValue} from "../../../Model/Basic_Value/index.js"
function Circle({ x = 50, y = 50, r = 40, color = "blue", root =DefaultRootValue  }) {
    return (
        <BasicSvg root={root}>
            <circle cx={x} cy={y} r={r} fill={color} />
        </BasicSvg>
    );
}

export default Circle;
