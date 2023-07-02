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
    const [nTask, setNTask] = useState<number>(1);
    const [tasks, setTasks] = useState<Array<JSX.Element>>([
        useMemo(() => <TaskMenu />, []),
    ]);

    const addTask = () => {
        const newTask = <TaskMenu />;
        const newTasks = [...tasks, newTask];
        setNTask((prev) => prev + 1);
        setTasks(newTasks);
    };

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
            <button
                onClick={addTask}
                className="px-2 my-2 rounded text-white bg-slate-500"
            >
                Add task
            </button>
        </div>
    );
};
