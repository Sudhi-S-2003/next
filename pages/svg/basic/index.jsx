import Linkcomponent from "../../../components/common/Linkcomponent";
import Circle from "../../../components/Svg/Components/Circle";
import Rectangle from "../../../components/Svg/Components/Rectangle";
import Line from "../../../components/Svg/Components/Line";

function index() {
    return (
        <div>
            {/* Link component for navigation */}
            <Linkcomponent name={"Back"} url={"./"} />

            {/* Circle SVG with red color */}
            <Circle color={"red"} />

            {/* Rectangle SVG with blue fill, positioned at (100, 120), and custom stroke styles */}
            <Rectangle fill={"blue"} x={"100"} y={120} root={{ color: "red", stroke: "green" }} />

            {/* Line SVG with a blue stroke and x2 coordinate of 200 */}
            <Line x2="200" stroke="blue" />
        </div>
    )
}

export default index
