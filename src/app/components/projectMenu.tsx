"use client";
import { useState } from "react";
import { useMemo } from "react";
import { WorkMenu } from "./workMenu";

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
                    return <div key={`${name}-${index}`}>{work}</div>;
                })}
            </div>
            <button
            onClick={addWork}
            className="ml-2 px-2 my-2 rounded text-white bg-slate-500"
            >
                Add work
            </button>
        </div>
    );
};
