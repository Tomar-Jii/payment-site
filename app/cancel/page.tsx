export default function CancelPage() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 text-center max-w-md w-full">
        <div className="text-6xl mb-5">❌</div>

        <h1 className="text-3xl font-bold text-slate-900">
          Payment Cancelled
        </h1>

        <p className="text-slate-500 mt-4">
          No payment was completed.
        </p>

        <a
          href="/"
          className="inline-block mt-8 bg-slate-900 text-white px-7 py-3 rounded-xl font-semibold"
        >
          Try Again
        </a>
      </div>
    </main>
  );
}
