import BasicSvg from "../BasicSvg.jsx";
import { DefaultRootValue } from "../../../Model/Basic_Value/index.js";

function Polygon({ root = DefaultRootValue, p1 = "50,10", p2 = "90,80", p3 = "10,80", fill = "orange", ...additionalPoints }) {
    // Prepare the initial points
    let pointsArray = [p1, p2, p3];

    // Loop through dynamic points like p4, p5, ..., pn if they exist
    let index = 4; // Start with p4
    while (true) {
        const pointKey = `p${index}`;
        if (additionalPoints[pointKey]) {
            pointsArray.push(additionalPoints[pointKey]);
            index++;
        } else {
            break; // Exit loop if the key does not exist
        }
    }

    // Combine all points into a single string
    const pointsString = pointsArray.join(" ");

    return (
        <BasicSvg root={root}>
            <polygon points={pointsString} fill={fill} />
        </BasicSvg>
    );
}

export default Polygon;
