import { useEffect } from "react"

export default function Contact(){
    return (
        <div className="flex min-h-screen items-center justify-start  relative bg-gray-800 text-white">

            <iframe  className="absolute left-[20%]" src='https://my.spline.design/roomrelaxingcopy-6ffe0b85fb0e23a9579f0905ce17ed44/' frameborder='0' width='80%' height='100%'></iframe>
  <div className="mx-auto w-full max-w-lg z-50">
    <h1 className="text-4xl font-medium">Contact us</h1>
    <p className="mt-3">We also provide freelance services, feel free to contact us</p>

    <form action="https://api.web3forms.com/submit" className="mt-10">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> 
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative z-0">
          <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 opacity-40 py-2.5 px-4 text-sm text-white bg-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 px-4">{"Your name"}</label>
        </div>
        <div className="relative z-0">
          <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 opacity-40 py-2.5 px-4 text-sm text-white bg-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 px-4">Your email</label>
        </div>
        <div className="relative z-0 col-span-2">
          <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 opacity-40 py-2.5 px-4 text-sm text-white bg-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 px-4">Your message</label>
        </div>
      </div>
      <button type="submit" className="mt-5 rounded-md bg-black px-10 py-2 text-white">Send Message</button>
    </form>
  </div>
</div>
    )
}