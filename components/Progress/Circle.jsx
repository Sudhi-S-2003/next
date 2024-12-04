function Circle({ level, topval, desc, type }) {
    const color =
        type === "Complete"
            ? "bg-green-500"
            : type === "In-Complete"
            ? "bg-red-500"
            : type === "Locked"
            ? "bg-slate-500"
            : "bg-blue-500";

    return (
        <div
            className={`w-[130px] h-[130px] rounded-full ${color} relative flex flex-col items-center justify-center py-6 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer`}
        >
            {/* Level number */}
            <h1 className="text-4xl font-bold text-white">{level}</h1>

            {/* Top value */}
            <div
                className={`${color} text-slate-100 rounded-full w-[50px] h-[50px] flex items-center justify-center absolute top-[-20px] right-[-20px] translate-x-1/2 translate-y-1/2 shadow-md`}
            >
                {topval}%
            </div>

            {/* Description */}
            <p className="text-center text-white mt-3 text-base font-medium px-3">{desc}</p>
        </div>
    );
}

export default Circle;
