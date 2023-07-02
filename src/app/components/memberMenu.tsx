"use cient";

import { useEffect, useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";

export const MemberMenu = () => {
    const [name, setName] = useState<string>("");
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");

    const updateName = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
        },
        []
    );

    const updateStartDate = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setStartDate(event.target.value);
        },
        []
    );

    const updateEndDate = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setEndDate(event.target.value);
        },
        []
    );

    useEffect(() => {
        console.log(name);
    }, [name]);

    return (
        <div className="flex">
            <input
                value={name}
                onChange={updateName}
                type="text"
                className="ml-4 w-32"
            />
            <input
                value={startDate}
                onChange={updateStartDate}
                type="date"
                className="ml-4 w-32"
            />
            <input
                value={endDate}
                onChange={updateEndDate}
                type="date"
                className="ml-4 w-32"
            />
        </div>
    );
};
