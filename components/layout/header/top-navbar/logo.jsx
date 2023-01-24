import Image from 'next/image';
import Link from 'next/link'
import LogoImg from "../../../../assets/img/Shoptronics (1).png"

const Logo = () =>{
    return(
        <Link href={'/'}>
            <Image src={LogoImg} alt="LogoImg"/>
        </Link>
    )
}
export default Logo