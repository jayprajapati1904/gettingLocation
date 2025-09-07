import React from "react";
import useAuthStore from "../store/useAuthStore";

export default function Login() {
  const { email, setEmail, sendVerification, loading, message, error } =
    useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendVerification();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Email Login
        </h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-400 outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Verification Link"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-green-600 text-center">{message}</p>
        )}
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      </div>
    </div>
  );
}
