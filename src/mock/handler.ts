import { http, HttpResponse } from "msw";
import galleries from "./data/galleries.json";

export const handler = [
  http.get(`${process.env.NEXT_PUBLIC_MOCK_URL}/api/gallery`, () =>
    HttpResponse.json(galleries),
  ),
];
