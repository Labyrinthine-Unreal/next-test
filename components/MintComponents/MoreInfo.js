import Link from 'next/link'

export default function MoreInfo(props) {
    return (
        <Link href={props.href}>
          <a>{props.info}</a>
        </Link>
           
    )
}