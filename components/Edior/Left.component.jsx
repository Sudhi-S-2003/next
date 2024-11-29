import { useState } from "react";
import ExplorerData from "../../data/Editor/Explorer.data";
import PartComponent from "./Part.component";

function LeftComponent() {
    const [explorerData, setExplorerData] = useState(ExplorerData); 

    return (
        <div>
            <PartComponent data={explorerData}/>
        </div>
    );
}

export default LeftComponent;
