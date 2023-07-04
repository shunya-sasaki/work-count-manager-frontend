"use client";
import { useState } from "react";
import { useMemo } from "react";
import { TaskMenu } from "./taskMenu";
import { DeleteButton } from "./buttons/deleteButton";
import { AddButton } from "./buttons/addButton";

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

    const deleteTask = (index: number) => {
        if (nTask > 1) {
            const newTasks = [...tasks];
            newTasks.splice(index, 1);
            setNTask((prev) => prev - 1);
            setTasks(newTasks);
        } else {
            console.log("Cannot delete the last task.");
        }
    };

    return (
        <div className="px-2">
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
                if (index > 0) {
                    return (
                        <div key={`${name}-${index}`} className="flex pt-2">
                            <DeleteButton onClick={deleteTask} index={index} />
                            <div>{task}</div>
                        </div>
                    );
                } else {
                    return (
                        <div key={`${name}-${index}`} className="flex pt-2">
                            <div className="ml-4"></div>
                            <div>{task}</div>
                        </div>
                    );
                }
            })}
            <AddButton onClick={addTask} label="Add Task" />
        </div>
    );
};
