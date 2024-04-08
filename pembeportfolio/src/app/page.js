import Navigation from "../../components/navigation";
import Link from "next/link";

const Home = () => {
  return ( 
    <div className="flex w-screen">
      <section><Navigation /></section>

      <section  className="m-8">
        <div className="font-extrabold">
          <div>
            <span className="text-9xl bg-gradient-to-r from-green-500 via-slate-500 to-sky-500 bg-clip-text text-transparent">Hello!</span><i className="text-9xl">👋</i>
          </div>
          <div className="flex justify-end">
            <span className="text-9xl bg-gradient-to-r from-sky-500 via-green-500 to-slate-500 bg-clip-text text-transparent">welcome...</span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="mt-8">
            <h1  className="text-7xl">I'm {" "}<span className="font-semibold bg-gradient-to-bl from-sky-500 via-green-500 to-slate-500 bg-clip-text text-transparent">Twalibu Pembe</span></h1>
          </div>
          <div className="flex justify-evenly text-justify">
            <any className="w-1/4"></any>
            <any className="w-2/4"><span className="">This is where were you can get all of my personal details such as my <Link href="/skills" className=" text-blue-700 font-semibold">Skills</Link>,<Link href="/academy" className=" text-blue-700 font-semibold">{" "}Education background</Link>, download my Resume, CV and other attachment and to be able to get direct contact with me through my email, phone number and social media accounts, also you will be able to view my programs.</span></any>
            <any className="w-1/4"></any>
          </div>
          <div className="my-4">
            <h1  className="text-6xl">Skills:{" "}
              <span>front-end developer</span>
            </h1>
          </div>
        </div>        

      </section>
    </div>
   );
}

export default Home;