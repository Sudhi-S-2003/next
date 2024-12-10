import Linkcomponent from "@/components/common/Linkcomponent";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-3xl font-bold mb-6">Buyer and Seller</h1>
      <Link href="/buyer" className="block text-blue-500 hover:underline text-lg">Buyer
      </Link>
      <Link href="/seller" className="block text-blue-500 hover:underline text-lg">Seller </Link>
      <Linkcomponent name={"OTP"} url={"/otp"} />
      <Linkcomponent name={"Editor"} url={"/editor"} />
      <Linkcomponent name={"RoadMaps"} url={"/roadmaps"} />
      <Linkcomponent name={"SVG"} url={"/svg"} />
      <Linkcomponent name={"Localstorage"} url={"/localstorage"} />
    </div>
  );
}

