const ErrorPage = () => {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white">
        <h2 className="text-3xl font-semibold mb-4">
          Oops! Something went wrong.
        </h2>
        <p className="text-xl mb-8">
          We couldn&apos;t find the page you&apos;re looking for.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-teal-600 rounded-full text-white hover:bg-teal-500 transition duration-300"
        >
          Go to Home
        </a>
      </main>
    </>
  );
};

export default ErrorPage;
