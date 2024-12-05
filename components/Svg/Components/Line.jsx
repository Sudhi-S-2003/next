import BasicSvg from "../BasicSvg";
import { DefaultRootValue } from "../../../Model/Basic_Value/index.js"

function Line({ root = DefaultRootValue ,x1="10", y1="10", x2="100", y2="10", stroke="black", strokeWidth="2"}) {
    return (
        <BasicSvg root={root}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} stroke-width={strokeWidth} />

        </BasicSvg>
    )
}

export default Line