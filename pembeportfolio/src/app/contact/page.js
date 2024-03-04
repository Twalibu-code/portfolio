'use client'

import { useState } from "react";
import Navigation from "../../../components/navigation";
import Image from "next/image";

const Contact = () => {
    const [formState, setFormState] = useState("not submitted");
        console.log(formState);

return ( 
    <div className="flex w-screen">
        <div>
            <Navigation />
        </div>

        <section className="container mt-2 m-4">
            <div>
                <div className="bg-gradient-to-tl from-white via-green-500 to-white rounded-xl text-4xl ">Contacts</div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-1/3 border-4 p-8 rounded-xl mt-8 shadow-xl shadow-gray-700">
                    <div className="flex justify-center items-center">Reach me via the following:-</div>
                </div>
                <div className="w-1/2 border-4 p-8 rounded-xl mt-8 shadow-xl shadow-gray-700">
                    <form className="container flex flex-col justify-center">
                        <div className="flex justify-center items-center">Send me email below:-</div><br/>
                        <label className="indent-2">Full name:</label>
                        <input type="text" name="name" placeholder="your name" className="p-2 border-solid border-2 rounded shadow-inner shadow-gray-500" /><br/>
                        <label className="indent-2">Sender email:</label>
                        <input type="email" name="email" placeholder="abc@example.com" className="p-2 border-solid border-2 rounded shadow-inner shadow-gray-500" /><br/>
                        <label className="indent-2">Message:</label>
                        <textarea type="text" name="name" placeholder="your message goes here" className="p-2 border-solid border-2 rounded shadow-inner shadow-gray-500" /><br/>
                        <button type='button'className="container flex  justify-center items-center border-2 rounded-xl bg-gradient-to-tl from-white to-green-600 text-4xl shadow-md shadow-gray-700 hover:shadow-none hover:send-button" onClick={ ()=> setFormState("submitted") } ><Image type="submit" src="/send.png" width={30} height={30} /></button>
                    </form>
                </div>
            </div>
        </section>
    </div>
    );
}


export default Contact;