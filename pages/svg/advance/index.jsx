import BaseCurve from "../../../components/Svg/Components/BaseCurve"
import SigmoidCurve from "../../../components/Svg/Components/SigmoidCurve"

function index() {
    return (
        <div>
            <BaseCurve stroke="green" />
            <SigmoidCurve fill="red" M="50,50" C="100 0,100 100,150 50" Q={"75 175,100 150"} />
        </div>
    )
}

export default index