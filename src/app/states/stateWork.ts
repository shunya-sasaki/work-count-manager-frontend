import { atomFamily } from "recoil";

export interface InterfaceStateWork {
    name: string;
}

export const stateWork = atomFamily({
    key: "stateWork",
    default: {"name": ""},
});
