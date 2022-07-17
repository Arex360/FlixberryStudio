export default function ListingCard({url,title,desc,navigate}){
    return(
        <div className="flex justify-center scale-75 hover:scale-90 transition duration-300">
  <div className="rounded-lg shadow-2xl bg-white max-w-sm">
    <a className="w-full h-[3vh]" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src={url}  alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
      <p className="text-gray-700 text-base mb-4">
        {desc}
      </p>
      <button onClick={()=>window.open(navigate)} type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Get On Google Play</button>
    </div>
  </div>
</div>
    )
}