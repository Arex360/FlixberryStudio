
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Contact from "../../components/Contact";
import ListingCard from "../../components/ListingCard";
import LoadingPage from "../../components/LoadingPage";
import NavBar from "../../components/Navbar";

export default function MainPage(){
    let [loaded,setLoaded] = useState(false)
    useEffect(()=>{
        window.addEventListener('load',()=>{
            setTimeout(()=>{
                setLoaded(true)
            },3000)
        })
    },[])
    return (
        <div className={`main w-[100%] h-[100vh] ${ loaded == false ? 'overflow-hidden':''}`}>
            {!loaded && <LoadingPage loading={!loaded}></LoadingPage>}
            <NavBar/>
           <section className="flex relative w-full h-[57vh] mb-24">
            <img className="absolute w-full h-[76vh]" src="https://imgur.com/qMOIEIO.png" alt="" />
            <div className="left relative w-[50%] text-white flex flex-col gap-5 justify-center items-center overflow-clip">
                <h1 className="text-8xl font-bold">Flixberry <span className="text-purple-500">Studio.</span></h1>
                <label htmlFor=""><i>Break Through the Reality</i></label>
            </div>
               <div className="right w-[48%] z-20 cursor-pointer hover:cursor-pointer ">
                   <iframe src='https://my.spline.design/hammyveggieburgercopy-62bb3f5da933d78093724febbaaceac5/' frameBorder='0' width='100%' height='97%'></iframe>
               </div>         
           </section>

           <section id="about" className="flex relative w-full h-[55vh]">
                <div className="left w-[50%]">
                <iframe src='https://my.spline.design/purple3diconscopy-a31b70878c52cfe9666f2326a213be01/' frameBorder='0' width='100%' height='100%'></iframe>
                </div>
                <div className="right w-[50%] flex flex-col gap-3 justify-center items-center relative">
                    <h1 className="text-purple-600 text-6xl font-bold">About Us</h1>
                    <p className="w-[80%] text-justify">
                        Flixberry Studio is the Game Development studio, based in Pakistan. Our Goal is to lead the Game industry through our titles. Right now, studio is on
                        its early stage and we aim to bring it to leading position. Flexberry Studio tends to be indie-game studio mostly targeting the Hyper Casual genre.
                        <br />
                        Flixberry also lies in the space of metaverse. We aim to deliever the best NFT-ecosystem to our users , providing a huge diversity in metaverse. Our main focus 
                        to bring attention of people toward our ecosystem in a fashion, being mutual benefit for gamer and the Platform. 
                    </p>
                    <img src="https://imgur.com/0lbJI1Q.png" className="w-[5%] absolute bottom-3 right-[10%]" alt="" />
                </div>
           </section>

           <section className="flex relative w-full h-[55vh]">
           <iframe src='https://my.spline.design/molang3dcopy-a643887916f1738b68b328783ede0547/' frameBorder='0' width='100%' height='100%'></iframe>
           </section>

           <section id="team" className="flex flex-col relative justify-center items-center gap-10 mt-14">
            <h1 className="text-purple-500 text-6xl font-bold">Our Team</h1>
            <div className="cards flex gap-28">
                <Card/>
                <Card/>
                <Card/>
            </div>
           </section>
           <section id="games" className="w-full h-[60vh] mt-14 game overflow-hidden relative mb-10">
           <h1 className="absolute text-white text-6xl right-[2%] top-[20%]">
            <img src="https://imgur.com/JxtWWrx.png" className="w-[70%]" alt="" />
           </h1>
           <iframe src='https://my.spline.design/islandhousecopy-61cef63996f8dceb25de7d0fd12567bc/' frameBorder='0' width='100%' height='100%'></iframe>
           </section>
           <section className="flex justify-center items-center">
             <ListingCard navigate={"https://play.google.com/store/apps/details?id=com.Flixberry.BeanCrushMaster"} title={"Bean Crush Master (Update Pending)"} desc="The mind blowing crushing game, where you need to match all possible patterns within 10 seconds" url={"https://imgur.com/enUDEkW.jpg"}/>
             <ListingCard navigate={"https://play.google.com/store/apps/details?id=com.FlixBerryStudio.HyperPlanet"} title={"Hyper Planet (Active)"} desc="A survival game, where you need to dough the missiles , coming toward the planet and keep alive as long as you can. More Updates on the way" url={"https://imgur.com/55M1hlb.jpg"}/>
             <ListingCard navigate={"https://play.google.com/store/apps/details?id=com.Flixberry.DogeGame"} title={"Doge-The Game (No Development)"} desc="Sadly no longer in development, but you still can enjoy it. It was just a meme game, in craze of doge mining. Sadly doge is no longer on the Moon :(
                " url={"https://imgur.com/xE9Z9fc.jpg"}/>
           </section>
           <section id="contact">
            <Contact/>
            </section>
        </div>
    )
}