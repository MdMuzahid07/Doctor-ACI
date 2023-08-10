import { useForm } from "react-hook-form"

const ClientInfoForm = ({ handleBtn }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it

    return (
        <section >
            <h2 className="mb-10 font-bold">Fill this form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center gap-5">
                    <input className="px-3 py-2 border border-dark focus:outline-none focus:border-indigo-600 drop-shadow-sm hover:drop-shadow-md rounded-lg w-full" {...register("your-name", { required: true })} type="text" placeholder="your name" />
                    <input className="px-3 py-2 border border-dark focus:outline-none focus:border-indigo-600 drop-shadow-sm hover:drop-shadow-md rounded-lg w-full" {...register("gender", { required: true })} type="number" placeholder="mobile number" />
                </div>

                <input className="px-3 py-2 border border-dark focus:outline-none focus:border-indigo-600 drop-shadow-sm hover:drop-shadow-md rounded-lg w-full my-5" {...register("date-of-birth", { required: true })} type="number" placeholder="date of birth" />

                <textarea className="px-3 py-2 border border-dark focus:outline-none focus:border-indigo-600 drop-shadow-sm hover:drop-shadow-md rounded-lg w-full" {...register("describe-yourself")} name="" id="" cols="" rows="4" type="text" placeholder="describe yourself(Optional)" />

                <input onClick={() => handleBtn("clickToSelectHospital")} className="px-5 border-2 py-2 hover:bg-white hover:border-2 hover:border-indigo-500 bg-indigo-500 rounded-lg hover:text-indigo-900 text-white font-bold mt-7" value="Next" type="submit" />
            </form>
        </section>
    )
}

export default ClientInfoForm;