import { MdLocationOn } from 'react-icons/md';


const SelectHospital = ({ handleBtn }) => {
    return (
        <>
            <h2 className="mb-10 font-bold">Select Hospital</h2>
            <div className="overflow-y-scroll h-96 pr-3">

                <div onClick={() => handleBtn("selectSlot")} className="p-4 mb-3 border bg-slate-100 text-indigo-900 hover:text-white rounded-xl hover:bg-indigo-500 h-28 w-full">
                    <div className="flex items-center gap-2">
                        <img className="h-7 w-7 rounded-full border" src="../../../../public/assets/images/aci-logo.jpeg" alt="" />
                        <h2 className="text-lg font-bold flex items-center">Apollo Hospital </h2>
                    </div>
                    <div className="mt-4">
                        <p className="text-md flex items-center"><MdLocationOn className="text-md mr-2" /><span className="font-bold">Uttara</span></p>
                    </div>
                </div>

                <div onClick={() => handleBtn("selectSlot")} className="p-4 mb-3 border bg-slate-100 text-indigo-900 hover:text-white rounded-xl hover:bg-indigo-500 h-28 w-full">
                    <div className="flex items-center gap-2">
                        <img className="h-7 w-7 rounded-full border" src="../../../../public/assets/images/aci-logo.jpeg" alt="" />
                        <h2 className="text-lg font-bold flex items-center">Apollo Hospital </h2>
                    </div>
                    <div className="mt-4">
                        <p className="text-md flex items-center"><MdLocationOn className="text-md mr-2" /><span className="font-bold">Uttara</span></p>
                    </div>
                </div>


                <div onClick={() => handleBtn("selectSlot")} className="p-4 mb-3 border bg-slate-100 text-indigo-900 hover:text-white rounded-xl hover:bg-indigo-500 h-28 w-full">
                    <div className="flex items-center gap-2">
                        <img className="h-7 w-7 rounded-full border" src="../../../../public/assets/images/aci-logo.jpeg" alt="" />
                        <h2 className="text-lg font-bold flex items-center">Apollo Hospital </h2>
                    </div>
                    <div className="mt-4">
                        <p className="text-md flex items-center"><MdLocationOn className="text-md mr-2" /><span className="font-bold">Uttara</span></p>
                    </div>
                </div>

                <div onClick={() => handleBtn("selectSlot")} className="p-4 mb-3 border bg-slate-100 text-indigo-900 hover:text-white rounded-xl hover:bg-indigo-500 h-28 w-full">
                    <div className="flex items-center gap-2">
                        <img className="h-7 w-7 rounded-full border" src="../../../../public/assets/images/aci-logo.jpeg" alt="" />
                        <h2 className="text-lg font-bold flex items-center">Apollo Hospital </h2>
                    </div>
                    <div className="mt-4">
                        <p className="text-md flex items-center"><MdLocationOn className="text-md mr-2" /><span className="font-bold">Uttara</span></p>
                    </div>
                </div>



            </div>
        </>
    )
}

export default SelectHospital