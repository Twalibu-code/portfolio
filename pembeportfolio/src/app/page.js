import Navigation from "../../components/navigation";
import Link from "next/link";

const Home = () => {
  return ( 
    <div className="container flex w-screen">
      <section>
        <Navigation />
      </section>

      <section className="container">
        <div className="mt-16 font-bold">
          <div className="pl-16">
            <h1 className="text-9xl bg-gradient-to-r from-green-500 via-sky-500 to-yellow-500 bg-clip-text text-transparent">Hello!</h1>
          </div>
          <div className="flex justify-end">
            <span className="text-9xl bg-gradient-to-r from-sky-500 via-green-500 to-slate-500 bg-clip-text text-transparent">welcome...</span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="mt-8">
            <h1  className="text-7xl">I'm {" "} <span className="font-semibold bg-gradient-to-bl from-sky-500 via-green-500 to-slate-500 bg-clip-text text-transparent">Twalibu Pembe</span></h1>
          </div>
          <div className="px-[17rem] text-justify">
            <span>This is where were you can get all of my personal details such as my <Link href="/skills" className=" text-blue-700 font-semibold">Skills</Link>,<Link href="/academic_status" className=" text-blue-700 font-semibold">{" "}Education background</Link>, download my Resume, CV and other attachment and to be able to get direct contact with me through my email, phone number and social media accounts, also you will be able to view my programs.</span>
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