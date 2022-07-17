import { ClipLoader } from "react-spinners";

export default function LoadingPage({loading}){
    return(
        <div className="loadingpage absolute z-[120] w-full h-[100vh] bg-white flex justify-center items-center">
            <div className="loadingSpinner">
                <ClipLoader loading={loading}/>
            </div>
        </div>
    )
}