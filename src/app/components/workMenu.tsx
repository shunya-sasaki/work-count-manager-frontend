"use client";
import { useState } from "react";
import { useMemo } from "react";
import { TaskMenu } from "./taskMenu";

/**
 *
 * @returns
 */
export const WorkMenu = () => {
  const [name, setName] = useState<string>("");
  const [nTask, setNTask] = useState<Number>(1);
  const [tasks, setTasks] = useState<Array<JSX.Element>>([
    useMemo(() => <TaskMenu />, []),
  ]);

  console.log("Rebuild Work");

  return (
    <div className="px-4 py-2">
      <div className="flex">
        <div>工程名 : </div>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="ml-2 border rounded"
        />
      </div>
      {tasks.map((task, index) => {
        return <div key={`task-${index}`}>{task}</div>;
      })}
    </div>
  );
};
