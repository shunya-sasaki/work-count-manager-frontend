import Image from "next/image";
import { TopNavi } from "./components/topNavi";
import { ProjectMenu } from "./components/projectMenu";
import { InputMonitor } from "./components/inputMonitor";

export default function Home() {
  const projectMenu = <ProjectMenu />;


    return (
        <>
            <TopNavi />
            <div className="flex">
              <div>{projectMenu}</div>
              <div><InputMonitor/></div>
            </div>
        </>
    );
}
