import Image from "next/image";
import { TopNavi } from "./components/topNavi";
import { WorkMenu } from "./components/workMenu";

export default function Home() {
  return (
    <>
      <TopNavi />
      <WorkMenu />
    </>
  );
}
