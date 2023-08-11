
const SelectAppointmentDateAndSlot = () => {

  const handleAppointmentRequest = () => {
    window.alert("its not functional, undergoing Development");
  };

  return (
    <section>
      <p className="font-semibold mt-7">August</p>

      <div className="grid md:grid-cols-5 gap-3 mt-5">

        <button className="h-16 w-16 flex justify-center items-center border-2 border-indigo-400 hover:bg-indigo-500 hover:text-white bg-slate-100 rounded-lg">
          <div>
            <p className="text-xs font-bold">Sunday</p>
            <p className="text-sm font-bold">10</p>
          </div>
        </button>

        <button className="h-16 w-16 flex justify-center items-center border-2 border-indigo-400 hover:bg-indigo-500 hover:text-white bg-slate-100 rounded-lg">
          <div>
            <p className="text-xs font-bold">Sunday</p>
            <p className="text-sm font-bold">10</p>
          </div>
        </button>

        <button className="h-16 w-16 flex justify-center items-center border-2 border-indigo-400 hover:bg-indigo-500 hover:text-white bg-slate-100 rounded-lg">
          <div>
            <p className="text-xs font-bold">Sunday</p>
            <p className="text-sm font-bold">10</p>
          </div>
        </button>

        <button className="h-16 w-16 flex justify-center items-center border-2 border-indigo-400 hover:bg-indigo-500 hover:text-white bg-slate-100 rounded-lg">
          <div>
            <p className="text-xs font-bold">Sunday</p>
            <p className="text-sm font-bold">10</p>
          </div>
        </button>

        <button className="h-16 w-16 flex justify-center items-center border-2 border-indigo-400 hover:bg-indigo-500 hover:text-white bg-slate-100 rounded-lg">
          <div>
            <p className="text-xs font-bold">Sunday</p>
            <p className="text-sm font-bold">10</p>
          </div>
        </button>

      </div>


      <div className=" mt-14">
        <div className="flex items-center gap-4">
          <input type="radio" name="morning-slot" value="morning-slot" id="ms" />
          <label htmlFor="ms">
            <p className="font-semibold">Morning <small>(9AM-12PM)</small></p>
          </label>
        </div>
      </div>



      <div className=" mt-10">
        <div className="flex items-center gap-4">
          <input type="radio" name="morning-slot" value="morning-slot" id="es" />
          <label htmlFor="es" >
            <p className="font-semibold">Evening <small>(4PM-7PM)</small></p>
          </label>
        </div>
      </div>


      <button onClick={handleAppointmentRequest} className="px-5 border-2 py-2 hover:bg-white hover:border-2 hover:border-indigo-500 bg-indigo-500 rounded-lg hover:text-indigo-900 text-white font-bold mt-16">Request Appointment</button>
    </section>
  )
}

export default SelectAppointmentDateAndSlot