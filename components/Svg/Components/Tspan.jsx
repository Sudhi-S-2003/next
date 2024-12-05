import BasicSvg from "../BasicSvg.jsx";
import { DefaultRootValue, DefaultTextRootValue } from "../../../Model/Basic_Value/index.js"
import Text from "./Text.jsx";
function Tspan({ root = DefaultRootValue, textroot = DefaultTextRootValue, tspans = [{ fill: "red", data: "red data" }] }) {
    const data =
        tspans.map((tspanobj) => {
            return (
                <tspan fill={tspanobj.fill}>{tspanobj.data}</tspan>
            )
        })

    return (

        <Text data={data} fill={textroot.fill}
            fontSize={textroot.fontSize} root={root} x={textroot.x}
            style={textroot.style} y={textroot.y}
        />


    )
}

export default Tspan