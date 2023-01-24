import Image from "next/image"
import Link from "next/link"

const CustomImage = ({ src, actionLink, classes }) => {
    return (
        <Link href={actionLink ? actionLink : ''} className={classes}>
            <Image
                src={src}
            />
        </Link>
    )
}
export default CustomImage
