import { useEffect, useState } from "react";
import AboutPage from "./pages/AboutPage";
import ExplorePage from "./pages/ExplorePage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

function App() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadAnimals() {
      try {
        const response = await fetch("/api/animals", {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`The species API returned ${response.status}.`);
        }

        const result = await response.json();
        if (!Array.isArray(result.data)) {
          throw new Error("The species API returned an invalid response.");
        }

        setAnimals(result.data);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }
        setLoadError(
          error instanceof Error ? error.message : "Unable to load species.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadAnimals();
    return () => controller.abort();
  }, []);

  const activePath = window.location.pathname.replace(/\/+$/, "") || "/";
  const pages = {
    "/": <HomePage animals={animals} />,
    "/explore": <ExplorePage animals={animals} />,
    "/about": <AboutPage />,
  };
  const page = pages[activePath] || <NotFoundPage />;

  return (
    <div className="min-h-screen bg-[#12100c] text-white">
      <SiteHeader activePath={activePath} />
      <main>
        {loading ? (
          <section className="mx-auto max-w-7xl px-6 py-24" role="status">
            <p className="text-stone-400">Loading species...</p>
          </section>
        ) : loadError ? (
          <section className="mx-auto max-w-7xl px-6 py-24">
            <h1 className="text-3xl font-bold">Species data is unavailable.</h1>
            <p className="mt-4 text-stone-400">
              {loadError} Start the backend with{" "}
              <code className="text-amber-300">npm run dev:backend</code>,
              then refresh this page.
            </p>
          </section>
        ) : (
          page
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
