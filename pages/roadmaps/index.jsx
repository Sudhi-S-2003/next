import Linkcomponent from "@/components/common/Linkcomponent";

function index() {
  return (
    <div>
      <Linkcomponent  name={"First Road"}url={"roadmaps/first"}/>
      <Linkcomponent  name={"Second Road"}url={"roadmaps/second"}/>
      <Linkcomponent  name={"Third Road"}url={"roadmaps/third"}/>

      </div>
  )
}

export default index