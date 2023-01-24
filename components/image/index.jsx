import Image from "next/image"

const Images = (props) => {
    return (
        <div id={props.id}>
            <Image className={props.className} src={props.src} />
        </div>
    )
}
export default Images
