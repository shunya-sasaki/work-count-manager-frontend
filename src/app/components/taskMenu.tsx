"use client";

import { useState } from "react";
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

    const addMember = () => {
        const newMember = <MemberMenu />;
        const newMembers = [...members, newMember];
        setNMember((prev) => prev + 1);
        setMembers(newMembers);
    };

    return (
        <div className="px-2 py-2">
            <div className="flex">
                <div>作業名 : </div>
                <input
                    type="text"
                    value={taskName}
                    onChange={updateTaskName}
                    className="ml-2 border"
                />
            </div>
            <div className="px-2">
                人件費
                <div className="px-2">
                    <div className="flex">
                        <div className="w-32 ml-4">担当者名</div>
                        <div className="w-32 ml-4">開始日</div>
                        <div className="w-32 ml-4">終了日</div>
                    </div>
                    {members.map((member) => {
                        return member;
                    })}
                    <button
                        onClick={addMember}
                        className="px-2 my-2 rounded text-white bg-slate-500"
                    >
                        Add member
                    </button>
                </div>
                <div className="px-2">経費</div>
            </div>
        </div>
    );
};
