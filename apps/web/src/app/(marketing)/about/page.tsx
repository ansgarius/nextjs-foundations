// Simulate slow data fetch
async function getAboutData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { founded: 2026, team: "Distributed" };
}
export default async function AboutPage() {
  const data = await getAboutData();
  return (
    <div className="max-w-2xl">
      <h1 className="mb-4 font-bold text-3xl">About Us</h1>
      <p className="text-gray-600">
        This page uses the marketing layout. Notice the header and footer are
        defined once in the layout and wrap this content automatically.
      </p>
      <button
        type="button"
        /* onClick={() => {
          throw new Error("Test error boundary");
        }} */
        className="rounded bg-gray-900 px-4 py-2 text-white hover:bg-gray-800"
      >
        Throw Error
      </button>
    </div>
  );
}
