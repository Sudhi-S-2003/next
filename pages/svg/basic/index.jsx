import Linkcomponent from "../../../components/common/Linkcomponent";
import Circle from "../../../components/Svg/Components/Circle";
import Rectangle from "../../../components/Svg/Components/Rectangle";
import Line from "../../../components/Svg/Components/Line";
import Ellipse from "../../../components/Svg/Components/Ellipse";
import Polygon from "../../../components/Svg/Components/Polygon";
import Polyline from "../../../components/Svg/Components/Polyline";

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
            <Line x2="200" stroke="blue" strokeWidth="1"/>
            <Ellipse rx="90"ry="30"/>
            <Polygon p1="10,10" p2="100,100" p3="200,10" />
            <Polyline p1="10,10" p2="100,100" p3="200,10" fill="none"/>

        </div>
    )
}

export default index
