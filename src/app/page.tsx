import Image from "next/image";
import { TopNavi } from "./components/topNavi";
import { ProjectMenu } from "./components/projectMenu";

export default function Home() {
  return (
    <>
      <TopNavi />
      <ProjectMenu />
    </>
  );
}
