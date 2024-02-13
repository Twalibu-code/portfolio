import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
    return ( 
        <div className="text-blue-800 font-semibold font">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 w-auto p-4 h-screen space-y-8 rounded-lg rounded-tl-none rounded-bl-none">
                <div>
                    <Image src="/timetable.png" width={90} height={60}/>
                </div>
                <nav>
                    <ul className=" space-y-8">
                        <li className="hover:nav-text-trans"><Link href="/"><span>Home</span></Link></li>
                        <li className="hover:nav-text-trans"><Link href="/about"><span>About</span></Link></li>
                        <li className="hover:nav-text-trans"><Link href="/academic_status"><span>Academic_Status</span></Link></li>
                        <li className="hover:nav-text-trans"><Link href="/skills"><span>Skills</span></Link></li>
                        <li className="hover:nav-text-trans"><Link href="/hobbies"><span>Hobbies</span></Link></li>
                        <li className="hover:nav-text-trans"><Link href="/referees"><span>Referees</span></Link></li>
                        <li className="hover:nav-text-trans"><Link href="/contact"><span>Contact</span></Link></li>
                    </ul>     
                </nav>
            </div>
        </div>
     );
}
 
export default Navigation;