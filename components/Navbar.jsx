export default function NavBar(){
    return(
            <header class="text-white fixed w-full z-40 shadow-2xl bg-gradient-to-r from-purple-700 to-cyan-500 body-font  ">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              
                <img src="https://imgur.com/Tfq4pRc.png" className="w-60" alt="" />
                </a>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <a href="#about" class="mr-5 hover:text-white hover:cursor-pointer hover:font-bold hover:items-center hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-500 hover:border-0 hover:py-1 hover:px-3 hover:focus:outline-none transition delay-300">About Us</a>
                <a href="#team" class="mr-5 hover:text-white hover:cursor-pointer hover:font-bold hover:items-center hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-500 hover:border-0 hover:py-1 hover:px-3 hover:focus:outline-none transition delay-300">Our Team</a>
                <a href="#games" class="mr-5 hover:text-white hover:cursor-pointer hover:font-bold hover:items-center hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-500 hover:border-0 hover:py-1 hover:px-3 hover:focus:outline-none transition delay-300">Our Games</a>
                <a class="mr-5 hover:text-white hover:cursor-pointer hover:font-bold hover:items-center hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-500 hover:border-0 hover:py-1 hover:px-3 hover:focus:outline-none transition delay-300">Upcoming Titles</a>
                </nav>
                <a href="#contact" class="inline-flex font-bold items-center bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contact Us
                </a>
            </div>
            </header>
    )
}