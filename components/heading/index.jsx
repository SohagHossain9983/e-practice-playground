import Link from "next/link"

const Heading = (props) => {
    return (
        <div id={props.id} className={props.className}>
            <Link href="#">
                <p>{props.heading}</p>
            </Link>
        </div>
    )
}
export default Heading