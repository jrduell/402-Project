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
    <div className="flex min-h-screen justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="border m-1">
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="border m-1">
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button
          type="submit"
          className="self-center bg-gray-400 m-1 py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
