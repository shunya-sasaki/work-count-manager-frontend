import { atom } from "recoil";

export const stateInput = atom({
    key: "stateInput",
    default: { projectName: "", works: {}, members: {} },
});
