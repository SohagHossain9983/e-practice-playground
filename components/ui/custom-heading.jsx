import Link from 'next/link';

const CustomHeading = ({ hedName, actionLink, classes }) => {
    return (
        <Link
            href={actionLink ? actionLink : ''}
            className={classes}
        >
            {hedName}
        </Link>
    )
}
export default CustomHeading