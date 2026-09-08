export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 text-center max-w-md w-full">
        <div className="text-6xl mb-5">✅</div>

        <h1 className="text-3xl font-bold text-slate-900">
          Payment Successful
        </h1>

        <p className="text-slate-500 mt-4">
          Your payment was completed successfully.
        </p>

        <a
          href="/"
          className="inline-block mt-8 bg-indigo-600 text-white px-7 py-3 rounded-xl font-semibold"
        >
          Back to Store
        </a>
      </div>
    </main>
  );
}
