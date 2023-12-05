"use client"; // Indicates that this module is client-side code.

import { signIn } from "next-auth/react"; // Import the signIn function from NextAuth for authentication.
import { useSearchParams, useRouter } from "next/navigation"; // Import Next.js navigation utilities.
import { ChangeEvent, useState } from "react"; // Import React hooks for managing component state.

export const LoginForm = () => {
  const router = useRouter(); // Initialize the Next.js router.
  const [loading, setLoading] = useState(false); // State for managing loading state.
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  }); // State for form input values.
  const [error, setError] = useState(""); // State for handling errors during authentication.

  const searchParams = useSearchParams(); // Get query parameters from the URL.
  const callbackUrl = searchParams.get("callbackUrl") || "/profile"; // Define a callback URL or use a default one.

  // Handle form submission
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior.
    try {
      setLoading(true); // Set loading state to true.
      setFormValues({ email: "", password: "" }); // Clear form input values.

      // Attempt to sign in using the credentials (email and password).
      const res = await signIn("credentials", {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl,
      });

      setLoading(false); // Set loading state back to false.

      console.log(res); // Log the authentication response.
      if (!res?.error) {
        router.push(callbackUrl); // Redirect to the callback URL on successful authentication.
      } else {
        setError("invalid email or password"); // Set an error message for invalid credentials.
      }
    } catch (error: any) {
      setLoading(false); // Set loading state back to false on error.
      setError(error); // Set the error message for any other errors.
    }
  };

  // Handle input field changes
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value }); // Update the form input values.
  };

  // Define a CSS class for form inputs.
  const input_style =
    "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (
    <form onSubmit={onSubmit}>
      {error && (
        <p className="mb-6 rounded bg-red-300 py-4 text-center">{error}</p>
      )}

      {/* Email input field */}
      <div className="mb-6">
        <input
          required
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Email address"
          className={`${input_style}`}
        />
      </div>

      {/* Password input field */}
      <div className="mb-6">
        <input
          required
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Password"
          className={`${input_style}`}
        />
      </div>

      {/* Sign In button */}
      <button
        type="submit"
        style={{ backgroundColor: `${loading ? "#ccc" : "#3446eb"}` }}
        className="inline-block w-full rounded bg-blue-600 px-7 py-4 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
        disabled={loading}
      >
        {loading ? "loading..." : "Sign In"}
      </button>

      {/* OR divider */}
      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
        <p className="mx-4 mb-0 text-center font-semibold">OR</p>
      </div>

      {/* Sign In with Google button */}
      <a
        className="mb-3 flex w-full items-center justify-center rounded px-7 py-2 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
        style={{ backgroundColor: "#ffffff", color: "gray" }}
        onClick={() => signIn("google", { callbackUrl })}
        role="button"
      >
        <img
          className="pr-2"
          src="/images/google.svg"
          alt=""
          style={{ height: "2rem" }}
        />
        Continue with Google
      </a>

      {/* Sign In with GitHub button */}
      <a
        className="flex w-full items-center justify-center rounded px-7 py-2 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
        style={{ backgroundColor: "#000000" }}
        onClick={() => signIn("github", { callbackUrl })}
        role="button"
      >
        <img
          className="pr-2"
          src="/images/github.png"
          alt=""
          style={{ height: "2.2rem" }}
        />
        Continue with GitHub
      </a>
    </form>
  );
};
