import { color } from "framer-motion";

function BasicSvg({ children, root }) {
    const { width = 200, height = 200, stroke = "black", color = "white" } = root || {}; // Default values if root or its properties are undefined

    return (
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" stroke={stroke} style={{ background: color }}>
            {/* SVG content goes here */}
            {children}
        </svg>
    );
}

export default BasicSvg;
