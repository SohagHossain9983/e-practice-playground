const DiscountPrice = (props) => {
    return (
        <p className={`text-decoration-line-through text-muted ${props.className}`}>{props.dicPrice}</p>
    )
}
export default DiscountPrice