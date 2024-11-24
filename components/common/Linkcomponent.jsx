import Link from "next/link"

function Linkcomponent({name,url}) {
    return (
        <div>
            <Link href={url}>
                <li className="block text-blue-500 hover:underline text-lg">{name}</li>
            </Link>
        </div>
    )
}

export default Linkcomponent