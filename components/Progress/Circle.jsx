
function Circle({level,topval,desc,type}) {
    const color=type==="complete"?"bg-green-500":type==="incomplete"?"bg-red-500":type==="not-open"?"bg-slate-500":"bg-blue-500"
    return (
        <div className={`w-[100px] h-[100px] rounded-full ${color} relative py-8`}>
            <div className="bg-slate-50 rounded-xl w-[50px] absolute right-0 top-0 text-center">{topval}</div>
            <h1 className="text-center text-2xl text-white">{level}</h1>
            <p className="absolute top-[110px] left-3 text-white text-lg text-center">{desc}</p>
        </div>
    )
}

export default Circle