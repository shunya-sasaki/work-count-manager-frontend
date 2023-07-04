"use client";

import { useEffect, useState } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { MemberMenu } from "./memberMenu";
import { DeleteButton } from "./buttons/deleteButton";
import { AddButton } from "./buttons/addButton";

export const TaskMenu = () => {
    const [nMember, setNMember] = useState<number>(1);
    const [taskName, setTaskName] = useState<string>("");
    const [members, setMembers] = useState<Array<JSX.Element>>([
        useMemo(() => {
            return <MemberMenu />;
        }, []),
    ]);

    useEffect(() => {
        console.log(taskName + "nMember: " + nMember);
    }, [members]);

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

    const deleteMember = (index: number) => {
        if (nMember > 1) {
            const newMembers = [...members];
            newMembers.splice(index, 1);
            setNMember((prev) => prev - 1);
            setMembers(newMembers);
        } else {
            console.log("Cannot delete the last member.");
        }
    };

    return (
        <div className="px-2">
            <div className="flex h-6">
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
                    <div className="flex pt-2">
                        <div className="h-6 w-32 ml-8 align-middle">
                            担当者名
                        </div>
                        <div className="w-32 ml-4 align-middle">開始日</div>
                        <div className="w-32 ml-4 align-middle">終了日</div>
                    </div>
                    {members.map((member, index) => {
                        if (index > 0) {
                            return (
                                <div
                                    key={`${taskName}-${index}`}
                                    className="flex pt-2"
                                >
                                    <DeleteButton
                                        onClick={deleteMember}
                                        index={index}
                                    />
                                    <div>{member}</div>
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    key={`${taskName}-${index}`}
                                    className="flex pt-2"
                                >
                                    <div className="ml-4"></div>
                                    <div>{member}</div>
                                </div>
                            );
                        }
                    })}
                    <AddButton onClick={addMember} label="Add member"/>
                </div>
                <div className="px-2">経費</div>
            </div>
        </div>
    );
};
