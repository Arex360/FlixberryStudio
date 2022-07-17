import { useEffect, useState } from "react"
import NoSSR from 'react-no-ssr';
import axios from "axios";
export default function Contact(){
    let [email,setEmail] = useState('')
    let [name,setName] = useState('')
    let [message,setMessage] = useState('')
    let send = ()=>{
      let data = {email,message,name}
      console.log(data)
      axios.post('/api/SendMail',{
          data        
      }).then(e=>console.log(e))
    }
    return (
        <div className="flex min-h-screen items-center justify-start  relative bg-gray-800 text-white">

            <NoSSR><iframe  className="absolute left-[20%]" src='https://my.spline.design/roomrelaxingcopy-6ffe0b85fb0e23a9579f0905ce17ed44/' frameBorder='0' width='80%' height='100%'></iframe></NoSSR>
  <div className="mx-auto w-full max-w-lg z-50">
    <h1 className="text-4xl font-medium">Contact us</h1>
    <p className="mt-3">We also provide freelance services, feel free to contact us</p>

    <div  className="mt-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative z-0">
          <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 opacity-40 py-2.5 px-4 text-sm text-white bg-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " onChange={e=> {setName(e.target.value)}}/>
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 px-4" >{"Your name"}</label>
        </div>
        <div className="relative z-0">
          <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 opacity-40 py-2.5 px-4 text-sm text-white bg-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " onChange={e=> {setEmail(e.target.value)}}/>
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 px-4" >Your email</label>
        </div>
        <div className="relative z-0 col-span-2">
          <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 opacity-40 py-2.5 px-4 text-sm text-white bg-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " onChange={e=> {setMessage(e.target.value)}}></textarea>
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 px-4" >Your message</label>
        </div>
      </div>
      <button onClick={send}  className="mt-5 rounded-md bg-black px-10 py-2 text-white">Send Message</button>
    </div>
  </div>
</div>
    )
}