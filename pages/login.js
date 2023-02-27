
import { useState } from "react";

export default function post() {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <form className="flex flex-col" onSubmit="">
          <input className="border m-1" type="text" placeholder="email" />
          <input className="border m-1" type="text" placeholder="password" />

          <input className="self-center bg-gray-400 m-1 py-2 px-4 rounded" type="submit" />
        </form>
      </div>
    );
  }