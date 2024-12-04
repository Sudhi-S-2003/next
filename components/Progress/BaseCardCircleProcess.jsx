import Circle from "./circle"
import { motion } from "framer-motion";
import ThreeRow from "./ThreeRow";
import ThreeToTwoCurve from "./ThreeToTwoCurve";
import TwoRow from "./TwoRow";
import TwoToThreeCurve from "./TwoToThreeCurve";


function BaseCardCircleProcess() {
    const data1 = [{ "level": 1, "desc": "Basic level", "presentage": 100, "status": "Unlocked" },
    { "presentage": 2, "desc": "Beginner level", "presentage": 100, "status": "Unlocked" },
    { "level": 3, "desc": "Advanced beginner level", "presentage": 100, "status": "Unlocked" }]
    const data2 = [{ "level": 4, "desc": "Intermediate level", "presentage": 100, "status": "Unlocked" },
    { "level": 5, "desc": "Intermediate advanced level", "presentage": 100, "status": "Unlocked" },]
    const data3 = [{ "level": 6, "desc": "Skilled level", "presentage": 100, "status": "Unlocked" },
    { "level": 7, "desc": "Advanced level", "presentage": 100, "status": "Unlocked" },
    { "level": 8, "desc": "Expert level", "presentage": 100, "status": "Unlocked" },]
    const data4 = [{ "level": 9, "desc": "Master level", "presentage": 100, "status": "Unlocked" },
    { "level": 10, "desc": "Proficient level", "presentage": 100, "status": "Unlocked" }, ,]
    const data5 = [{ "level": 11, "desc": "Professional level", "presentage": 100, "status": "Unlocked" },]

    return (
        <div className="flex flex-col bg-slate-500">
            <ThreeRow data={data1} delaystart={0} />
            <ThreeToTwoCurve delay={2}/>
            <TwoRow data={data2} delaystart={4}/>
            <TwoToThreeCurve delay={5}/>
            <ThreeRow data={data3} delaystart={7}/>
            <ThreeToTwoCurve  delay={9}/>
            <TwoRow data={data4} delaystart={12}/>
            <TwoToThreeCurve delay={14}/>
            <ThreeRow data={data5}  delaystart={16}/>
        </div>
    )
}

export default BaseCardCircleProcess