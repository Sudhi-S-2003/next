import BasicSvg from "../BasicSvg.jsx";
import { DefaultRootValue } from "../../../Model/Basic_Value/index.js"

function Text({ root = DefaultRootValue,style={},x="50", y="50", fontSize="20" ,fill="black" ,data="text svg"}) {
    return (
        <BasicSvg root={root}>
            <text x={x} y={y} font-size={fontSize} fill={fill} style={style}>{data}</text>

        </BasicSvg>
    )
}

export default Text