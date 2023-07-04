"use client";
import { useState } from "react";
import { useMemo } from "react";
import { WorkMenu } from "./workMenu";
import { DeleteButton } from "./buttons/deleteButton";
import { AddButton } from "./buttons/addButton";

export const ProjectMenu = () => {
    const [name, setName] = useState<string>("");
    const [nWork, setNWork] = useState<number>(1);
    const [works, setWorks] = useState<Array<JSX.Element>>([
        useMemo(() => <WorkMenu />, []),
    ]);

    const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const addWork = () => {
        const newWork = <WorkMenu />;
        const newWorks = [...works, newWork];
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
                    className="ml-2 border rounded"
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
