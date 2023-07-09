"use client";
import { useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { stateInput } from "../states/stateInput";
import { stateUsableWorkId } from "../states/stateUsableId";
import { stateUsableTaskId } from "../states/stateUsableId";
import { stateWork } from "../states/stateWork";
import { AddButton } from "./buttons/addButton";
import { DeleteButton } from "./buttons/deleteButton";
import { WorkMenu } from "./workMenu";

export const ProjectMenu = () => {
    const [name, setName] = useState<string>("");
    const [nWork, setNWork] = useState<number>(1);
    const [stateWorks, setStateWorks] = useState([
        () => {return useRecoilState(stateWork(0))},
    ])

    const [works, setWorks] = useState<Array<JSX.Element>>([
        useMemo(() => <WorkMenu workId={0} />, []),
    ]);

    const [usableWorkId, setUsableWorkId] = useRecoilState(stateUsableWorkId);
    const [usableTaskId, setUsableTaskId] = useRecoilState(stateUsableTaskId);

    const [input, setInput] = useRecoilState(stateInput);

    const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        const newInput = { ...input };
        newInput.projectName = event.target.value;
        setInput(newInput);
    };

    const addWork = () => {
        const newWork = <WorkMenu workId={usableWorkId} />;
        const newWorks = [...works, newWork];
        setUsableWorkId((prev) => prev + 1);
        setUsableTaskId((prev) => prev + 1);
        setNWork((prev) => prev + 1);
        setWorks(newWorks);
    };

    const deleteWork = (index: number) => {
        if (nWork > 1) {
            const newWorks = [...works];
            newWorks.splice(index, 1);
            setNWork((prev) => prev - 1);
            setWorks(newWorks);
        } else {
            console.log("Cannot delete the last work.");
        }
    };
    return (
        <div className="px-4 py-4">
            <div className="flex">
                <div>プロジェクト名 : </div>
                <input
                    type="text"
                    value={name}
                    onChange={updateName}
                    className="ml-2 border rounded w-96"
                />
            </div>
            <div className="px-2 pt-2">
                {works.map((work, index) => {
                    if (index > 0) {
                        return (
                            <div
                                key={`${name}-${index}`}
                                className="px-2 flex mt-2 pt-2 border"
                            >
                                <DeleteButton
                                    onClick={deleteWork}
                                    index={index}
                                />
                                <div>{work}</div>
                            </div>
                        );
                    } else {
                        return (
                            <div
                                key={`${name}-${index}`}
                                className="flex mt-2 pt-2 border"
                            >
                                <div className="ml-4"></div>
                                <div>{work}</div>
                            </div>
                        );
                    }
                })}
            </div>
            <AddButton onClick={addWork} label="Add work" />
        </div>
    );
};
