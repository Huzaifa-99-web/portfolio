import Link from "next/link"
import Image from "next/image"
import pic from"./../../../public/pic.jpg"
import { MdEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Header(){
    return(
        
       <div className="body"> 
        <nav className="navbar">
            <div><h1 className="logo">Huzaifa</h1></div>
            <div><ul className="list">
                <li><Link href="" className="active">Home</Link></li>
                <li><Link href="" className="active">About us</Link></li>
                <li><Link href="" className="active"> Education</Link></li>
                <li><Link href="" className="active">skills</Link></li>
                <li><Link href="" className="active">contact</Link></li>
                </ul>
                </div>
        
            </nav>    
            <div className="section">
        <div className="homepic">
            <Image src={pic} alt="image" width={400} height={400}></Image>
        </div>
        <div className="header">
            <h1 className="head1">Hi,its <span id="span">Huzaifa</span></h1>
            <h3 className="head3"> i AM <br/><span id="span2"> web Developer</span></h3>
            <p>Hello! I am an 18-year-old student currently studying at GIAIC. I&apos;m enthusiastic about learning and always eager to explore new opportunities for growth and development.</p>
           <div className="icons">
            <a href="www"><MdEmail/></a>
            <a href="www"><BsInstagram/></a>
            <a href="www"><FaGithub/></a>
            </div>
            <a href="sss"  className="button">Hire me</a>
        </div>
        </div>
        <div></div>
        </div>

    )
}