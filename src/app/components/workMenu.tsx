"use client";
import { useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { InterfaceStateWork, stateWork } from "../states/stateWork";
import { AddButton } from "./buttons/addButton";
import { DeleteButton } from "./buttons/deleteButton";
import { TaskMenu } from "./taskMenu";
import { stateUsableTaskId } from "../states/stateUsableId";

interface InterfaceWorkMenu {
    workId: number;
}

export const WorkMenu = (props: InterfaceWorkMenu) => {
    const { workId } = props;
    const [usableTaskId, setUsableTaskId] = useRecoilState(stateUsableTaskId);
    const [name, setName] = useState<string>("");
    const [nTask, setNTask] = useState<number>(1);

    const createInitialTaskMenu = () => {
        const newTaskMenu = <TaskMenu workId={workId} taskId={usableTaskId} />;
        return newTaskMenu;
    };

    useEffect(() => {
        console.log("nTask@work: " + nTask);
        console.log("usableTaskId@work: " + usableTaskId);
    }, [nTask]);

    const [tasks, setTasks] = useState<Array<JSX.Element>>([
        useMemo(() => createInitialTaskMenu(), []),
    ]);
    // setUsableTaskId((prev) => prev + 1);
    const [workState, setWorkState] = useRecoilState(stateWork(workId));

    const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        const newWorkState: InterfaceStateWork = { ...workState };
        newWorkState["name"] = name;
        setWorkState(newWorkState);
    };

    useEffect(() => {
        console.log("workName: " + workState.name);
        console.log("workId: " + workId);
    }, [workState]);

    const addTask = () => {
        const newTask = <TaskMenu workId={workId} taskId={usableTaskId}/>;
        const newTasks = [...tasks, newTask];
        setUsableTaskId((prev) => prev + 1);
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
                    onChange={updateName}
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
