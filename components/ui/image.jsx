import Image from "next/image"

const Img = (props) =>{
    return(
        <Image className={props.className} src={props.img} />
    )
}
export default Img