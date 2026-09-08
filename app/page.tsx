export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-indigo-600">SECURE STORE</p>
          <h1 className="text-4xl font-bold text-slate-900 mt-2">
            Simple Payment Dashboard
          </h1>
          <p className="text-slate-500 mt-3">
            Secure payments powered by Stripe
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="h-72 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <div className="text-white text-7xl">🛍️</div>
            </div>

            <div className="p-7">
              <h2 className="text-2xl font-bold text-slate-900">
                Premium Product
              </h2>

              <p className="text-slate-500 mt-3">
                High-quality digital product with instant access after
                successful payment.
              </p>

              <div className="flex items-center justify-between mt-7">
                <span className="text-3xl font-bold text-slate-900">
                  $10.00
                </span>

                <form action="/api/checkout" method="POST">
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-7 py-3 rounded-xl transition"
                  >
                    Buy Now
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Secure checkout
            </h3>

            <div className="space-y-5 mt-7">
              <div className="flex gap-4">
                <span className="text-2xl">🔒</span>
                <div>
                  <p className="font-semibold">Secure payment</p>
                  <p className="text-sm text-slate-500">
                    Your card details are securely handled by Stripe.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">💳</span>
                <div>
                  <p className="font-semibold">Cards supported</p>
                  <p className="text-sm text-slate-500">
                    Enter your card details securely on Stripe Checkout.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="font-semibold">Fast confirmation</p>
                  <p className="text-sm text-slate-500">
                    After successful payment you will return to this website.
                  </p>
                </div>
              </div>
            </div>

            <form action="/api/checkout" method="POST">
              <button
                type="submit"
                className="w-full mt-8 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl"
              >
                Continue to Secure Payment
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
