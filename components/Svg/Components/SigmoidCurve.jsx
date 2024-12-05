import PropTypes from "prop-types";
import BasicSvg from "../BasicSvg.jsx";
import { DefaultRootValue } from "../../../Model/Basic_Value/index.js";

function SigmoidCurve({
    root = DefaultRootValue,
    M = "50,50",
    C = "100 0,100 100, 150 50",
    S = "200 150,50 150",
    Q = "75 175,100 150",
    T = "150 150",
    stroke = "black",
    fill = "red",
    strokeWidth = "2",
}) {
    // Validation
    if (M) {
        if (M.split(",").length !== 2) {
            return "Invalid format for M. Expected: 'number,number' (e.g., '50,50').";
        }
    }
    if (C) {
        const segments = C.split(",");
        if (segments.length !== 3 || !segments.every(seg => seg.split(" ").length === 2)) {
            return "Invalid format for C. Expected: 'number number,number number,number number' (e.g., '100 0,100 100,150 50').";
        }
    }
    if (S) {
        const segments = S.split(",");
        if (segments.length !== 2 || !segments.every(seg => seg.split(" ").length === 2)) {
            return "Invalid format for S. Expected: 'number number,number number' (e.g., '200 150,50 150').";
        }
    }
    if (Q) {
        const segments = Q.split(",");
        if (segments.length !== 2 || !segments.every(seg => seg.split(" ").length === 2)) {
            return "Invalid format for Q. Expected: 'number number,number number' (e.g., '75 175,100 150').";
        }
    }
    if (T) {
        const segments = T.split(" ");
        if (segments.length !== 2) {
            return "Invalid format for T. Expected: 'number number' (e.g., '150 150').";
        }
    }

    // Render SVG
    return (
        <BasicSvg root={root}>
            <path
                d={`M ${M}
                    C ${C}
                    S ${S}
                    Q ${Q}
                    T ${T}
                    Z`}
                stroke={stroke}
                fill={fill}
                strokeWidth={strokeWidth}
                aria-label="Sigmoid curve"
            />
        </BasicSvg>
    );
}

// Prop Types
SigmoidCurve.propTypes = {
    root: PropTypes.object,
    M: PropTypes.string,
    C: PropTypes.string,
    S: PropTypes.string,
    Q: PropTypes.string,
    T: PropTypes.string,
    stroke: PropTypes.string,
    fill: PropTypes.string,
    strokeWidth: PropTypes.string,
};

export default SigmoidCurve;
