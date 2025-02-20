import { http, HttpResponse } from "msw";

export const userHandler = [http.post()];
