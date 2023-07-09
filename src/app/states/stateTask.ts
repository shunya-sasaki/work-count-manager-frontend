import { atomFamily } from "recoil";

export interface InterfaceStateTask {
    name: string;
}

export const stateTask = atomFamily({
    key: "stateTask",
    default: {"name": ""},
});
