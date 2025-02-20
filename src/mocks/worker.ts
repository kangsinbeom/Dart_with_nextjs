import { setupWorker } from "msw/browser";
import { userHandler } from "./userHandler";

export const worker = setupWorker(...userHandler);
