export const TopNavi = () => {
  return (
    <div className="flex flex-row justify-between content-center bg-slate-500">
      <div className="p-1.5 text-3xl text-white">Work Count Manager</div>
      <ul className=" w-60 flex flex-row justify-between list-disc items-center text-white">
        <li className="w-32 p-1.5 ">
          <a
            className="hover:text-red-500"
            href="https://tailwindcss.com/docs/installation"
          >
            Tailwindcss
          </a>
        </li>
        <li className="w-32 p-1.5">
          <a
            className="hover:text-red-500"
            href="https://www.notion.so/shunya-sasaki/Programming-Note-7399c4e87ffd4d4e93d538ebaab1fc8a?pvs=4"
          >
            My Notion 
          </a>
        </li>
      </ul>
    </div>
  );
};
