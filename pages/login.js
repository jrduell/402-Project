import { useState } from "react";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    // This keep form from submitting!! use to test
    e.preventDefault();

    // Use data to log user in
    console.log(email);
    console.log(password);
  }

  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="m-1 rounded border py-1 pl-1">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="m-1 rounded border py-1 pl-1">
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button
            type="submit"
            className="m-1  self-center rounded bg-gray-400 py-2 px-4"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
