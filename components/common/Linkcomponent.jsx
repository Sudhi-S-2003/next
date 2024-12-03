import Link from "next/link";

function Linkcomponent({ name, url ,style }) {
  return (
     <Link href={url}>
        {/* Text inherits color from parent */}
        <li className="block hover:underline text-lg text-inherit" style={style}>{name}</li>
      </Link>
  );
}

export default Linkcomponent;
