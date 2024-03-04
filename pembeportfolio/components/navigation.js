import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
    return ( 
        <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4 h-screen space-y-8 rounded-lg rounded-tl-none rounded-bl-none">
            <div className="mx-8">
                <Image src="/timetable.png" width={90} height={60}/>
            </div>
            <nav className="flex justify-start text-blue-800 font-bold text-xl">
                <ul className="space-y-4">
                    <li className="hover:nav-text-trans px-4 py-1"><Link href="/"><span>Home</span></Link></li>
                    <li className="hover:nav-text-trans px-4 py-1"><Link href="/about"><span>About</span></Link></li>
                    <li className="hover:nav-text-trans px-4 py-1"><Link href="/academy"><span>Academy</span></Link></li>
                    <li className="hover:nav-text-trans px-4 py-1"><Link href="/skills"><span>Skills</span></Link></li>
                    <li className="hover:nav-text-trans px-4 py-1"><Link href="/hobbies"><span>Hobbies</span></Link></li>
                    <li className="hover:nav-text-trans px-4 py-1"><Link href="/project"><span>Projects</span></Link></li>
                    <li className="hover:nav-text-trans px-4 py-1"><Link href="/contact"><span>Contact</span></Link></li>
                </ul>     
            </nav>
        </div>
     );
}
 
export default Navigation;