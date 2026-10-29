# Ancient Life

Ancient Life has a React website and a separate Node.js API:

- `frontend/src/components/` contains reusable interface pieces, including
  `AnimalCard.jsx`, which displays each species.
- `frontend/src/pages/` contains the Home, Explore, About, and not-found pages.
- `frontend/src/App.jsx` connects the pages to the API and handles loading.
- `frontend/src/` also contains the app entry point and global styles.
- `backend/` contains the API and the species catalog in `backend/data/animals.json`.

## Run the project

1. Install [Node.js](https://nodejs.org/) if it is not already installed.
2. From this project folder, install the project packages:

   ```sh
   npm install
   ```

3. Open two terminals in this project folder. In the first, start the backend:

   ```sh
   npm run dev:backend
   ```

4. In the second terminal, start the website:

   ```sh
   npm run dev
   ```

5. Open the website at <http://localhost:5173>.

The frontend sends API requests through Vite to the backend at
<http://127.0.0.1:3000>. You can check that the backend is running at
<http://127.0.0.1:3000/api/health>.

## API endpoints

- `GET /api/health` checks that the backend is running.
- `GET /api/animals` lists all species.
- `GET /api/animals?q=cambrian` searches species by name, period, and details.
- `GET /api/animals/1` returns one species by its ID.

The species catalog is currently stored as a JSON file, so you can edit the
entries in `backend/data/animals.json` without setting up a database. This
starter backend is read-only; it does not yet include accounts or an admin
editor.

## Checks

```sh
npm run test:backend
npm run lint
npm run build
```
