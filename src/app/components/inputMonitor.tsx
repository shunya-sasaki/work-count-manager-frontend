"use client";
import { stateInput } from "../states/stateInput";
import { useRecoilValue } from "recoil";

export const InputMonitor = () => {
    const input = useRecoilValue(stateInput);

    return (
        <div className="pt-4">
            <div className="text-xl font-bold">Input Monitor</div>
            <div>{JSON.stringify(input, null, 2)}</div>
        </div>
    );
};
