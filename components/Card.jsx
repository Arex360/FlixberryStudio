export default function Card(){
    return(
        <div className="image relative hover:scale-110 transition duration-300">
            <div className="avatar absolute w-32 h-32 bg-white rounded-full left-20 top-5 overflow-hidden">
                <img src="https://imgur.com/TDCDvuE.png" alt="" />
            </div>
            <div className="name absolute text-purple-400 top-[40%] left-20 font-bold"> Muhammad Owais</div>
            <div className="name absolute text-white top-[47%] left-28 font-bold"><i>CEO</i></div>
            <div className="name absolute text-white top-[55%] text-center text-sm left-16 w-[60%] "><i>{`"It doesn't matter who you are, how unfavorable the environment is , just keep moving forward "`}</i></div>
            <img src="https://imgur.com/GTSMt4V.png" alt="" />
        </div>
    )
}