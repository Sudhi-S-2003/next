import Circle from "./circle"
import { motion } from "framer-motion";
import ThreeRow from "./ThreeRow";
import ThreeToTwoCurve from "./ThreeToTwoCurve";
import TwoRow from "./TwoRow";
import TwoToThreeCurve from "./TwoToThreeCurve";

function CardCircleProcess({ data = [] }) {
    const groupedData = data.reduce((acc, curval, curind) => {
        const groupIndex = Math.floor(curind / 5);

        if (!acc[groupIndex]) {
            acc[groupIndex] = { three: [], two: [] };
        }

        if (acc[groupIndex].three.length < 3) {
            acc[groupIndex].three.push(curval);
        } else {
            acc[groupIndex].two.push(curval);
        }

        return acc;
    }, []);

    return (
        <div className="flex flex-col bg-slate-500">
            {groupedData.map((group, index) => (
                <div key={`group-${index}`}>
                    {/* Render ThreeRow if 'three' exists */}
                    {group.three.length > 0 && (
                        <ThreeRow data={group.three} delaystart={7 * index} />
                    )}

                    {/* Render TwoRow and curves if 'two' exists */}
                    {group.two.length > 0 && (
                        <>
                            <ThreeToTwoCurve delay={7 * index + 2} />
                            <TwoRow data={group.two} delaystart={7 * index + 4} />
                            {index < groupedData.length - 1 && (
                                <TwoToThreeCurve delay={7 * index + 5} />
                            )}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default CardCircleProcess;
