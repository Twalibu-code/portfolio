import Navigation from "../../../components/navigation";
import Image from "next/image";

const Contact = () => {
return ( 
    <div className="flex w-screen">
        <section>
            <Navigation />
        </section>

        <section className="container mt-2 m-4">
            <div>
                <div className="bg-gradient-to-tl from-white via-green-500 to-white rounded-xl text-4xl ">Contacts</div>
            </div>
            <div className="flex justify-evenly">
                <div className="border-4 p-8 rounded-xl top-8 m-8 shadow-xl">
                    <div>Reach me via the following:-</div>
                </div>
                <div className="border-4 p-8 rounded-xl top-8 m-8 shadow-xl">
                    <form className="container flex flex-col justify-center">
                        <div>Send me email below:-</div><br/>
                        <label>Name:</label>
                        <input type="text" name="name" placeholder="   your name" className=" border-solid border-2 rounded w-max" />
                        <label>Sender email:</label>
                        <input type="email" name="email" placeholder="   abc@example.com" className=" border-solid border-2 rounded" />
                        <label>textarea:</label>
                        <textarea type="text" name="name" placeholder="your message goes here" className=" border-solid border-2 rounded" /><br/>
                        <button className="container flex  justify-center items-center border-2 rounded-xl bg-gradient-to-tl from-white to-green-600 text-4xl shadow-md"><Image type="submit" src="/send.png" width={30} height={30} /></button>
                    </form>
                </div>
            </div>
        </section>
    </div>
    );
}

export default Contact;