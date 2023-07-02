"use client";

import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { MemberMenu } from "./memberMenu";

export const TaskMenu = () => {
    const [nMember, setNMember] = useState<number>(1);
    const [taskName, setTaskName] = useState<string>("");
    const [members, setMembers] = useState<Array<JSX.Element>>([
        useMemo(() => {
            return <MemberMenu />;
        }, []),
    ]);

    const updateTaskName = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setTaskName(event.target.value);
        },
        []
    );

    const addMember = useCallback(() => {
        console.log("Add member");
    }, []);

    useEffect(() => {
        console.log("task: " + taskName);
    }, [taskName]);

    return (
        <div className="px-2 py-2">
            <div className="flex">
                <div>作業名 : </div>
                <input
                    type="text"
                    value={taskName}
                    onChange={updateTaskName}
                    className="ml-2 bg-gray-50"
                />
            </div>
            <div className="px-2">
                人件費
                <div className="px-2">
                    <div className="flex">
                        <div className="w-36">担当者名</div>
                        <div className="w-36">開始日</div>
                        <div className="w-36">終了日</div>
                    </div>
                    {members.map((member) => {
                        return member;
                    })}
                    <button onClick={addMember} className="px-2 my-2 rounded text-white bg-slate-500">
                      Add member
                    </button>
                </div>
                <div className="px-2">経費</div>
            </div>
        </div>
    );
};
