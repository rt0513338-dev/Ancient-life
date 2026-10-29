import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { createServer } from "./server.js";

const server = createServer();
let baseUrl;

before(async () => {
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
});

test("health endpoint reports that the API is ready", async () => {
  const response = await fetch(`${baseUrl}/api/health`);

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: "ok" });
});

test("species endpoint lists and searches the catalog", async () => {
  const listResponse = await fetch(`${baseUrl}/api/animals`);
  const list = await listResponse.json();

  assert.equal(listResponse.status, 200);
  assert.equal(list.total, 9);
  assert.equal(list.data[0].name, "Dickinsonia");

  const searchResponse = await fetch(`${baseUrl}/api/animals?q=cambrian`);
  const search = await searchResponse.json();

  assert.equal(searchResponse.status, 200);
  assert.ok(search.total > 0);
  assert.ok(search.data.every((animal) => animal.period === "Cambrian"));
});

test("species endpoint returns one species or a not-found response", async () => {
  const foundResponse = await fetch(`${baseUrl}/api/animals/1`);
  const found = await foundResponse.json();
  assert.equal(foundResponse.status, 200);
  assert.equal(found.data.name, "Dickinsonia");

  const missingResponse = await fetch(`${baseUrl}/api/animals/999`);
  assert.equal(missingResponse.status, 404);
  assert.deepEqual(await missingResponse.json(), {
    error: "Species not found.",
  });
});

test("API rejects unsupported methods", async () => {
  const response = await fetch(`${baseUrl}/api/animals`, { method: "POST" });

  assert.equal(response.status, 405);
  assert.equal(response.headers.get("allow"), "GET");
});
