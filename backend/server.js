import { createServer as createHttpServer } from "node:http";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const animals = JSON.parse(
  await readFile(new URL("./data/animals.json", import.meta.url), "utf8"),
);

function sendJson(response, statusCode, payload) {
  const body = JSON.stringify(payload);
  response.writeHead(statusCode, {
    "Cache-Control": "no-store",
    "Content-Length": Buffer.byteLength(body),
    "Content-Type": "application/json; charset=utf-8",
    "X-Content-Type-Options": "nosniff",
  });
  response.end(body);
}

function methodNotAllowed(response) {
  response.setHeader("Allow", "GET");
  sendJson(response, 405, { error: "Method not allowed." });
}

export function createServer() {
  return createHttpServer((request, response) => {
    const url = new URL(request.url ?? "/", "http://localhost");

    if (url.pathname === "/api/health") {
      if (request.method !== "GET") {
        methodNotAllowed(response);
        return;
      }

      sendJson(response, 200, { status: "ok" });
      return;
    }

    if (url.pathname === "/api/animals") {
      if (request.method !== "GET") {
        methodNotAllowed(response);
        return;
      }

      const query = url.searchParams.get("q")?.trim().toLowerCase();
      const matches = query
        ? animals.filter((animal) =>
            [
              animal.name,
              animal.scientificName,
              animal.period,
              animal.category,
              animal.description,
              animal.discovery,
            ]
              .filter(Boolean)
              .join(" ")
              .toLowerCase()
              .includes(query),
          )
        : animals;

      sendJson(response, 200, { data: matches, total: matches.length });
      return;
    }

    const animalMatch = url.pathname.match(/^\/api\/animals\/(\d+)$/);
    if (animalMatch) {
      if (request.method !== "GET") {
        methodNotAllowed(response);
        return;
      }

      const animal = animals.find(
        (item) => item.id === Number(animalMatch[1]),
      );
      if (!animal) {
        sendJson(response, 404, { error: "Species not found." });
        return;
      }

      sendJson(response, 200, { data: animal });
      return;
    }

    sendJson(response, 404, { error: "Route not found." });
  });
}

const port = Number(process.env.PORT ?? 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new RangeError("PORT must be an integer between 1 and 65535.");
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const server = createServer();
  server.listen(port, "127.0.0.1", () => {
    console.log(`Ancient Life API listening at http://127.0.0.1:${port}`);
  });
}
