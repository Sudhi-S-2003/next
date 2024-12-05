import BasicSvg from "../BasicSvg";
import {DefaultRootValue} from "../../../Model/Basic_Value/index.js"

function Rectangle({
    x = 10,
    y = 10,
    width = 100,
    height = 50,
    fill = "green",
    rx = 10,
    ry = 10,
    root =DefaultRootValue
}) {
    return (
        <BasicSvg root={root}>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                fill={fill}
                rx={rx}
                ry={ry}
            />
        </BasicSvg>
    );
}

export default Rectangle;
