import Link from 'next/link'

export default function Post() {
    return (
      <div className="m-8 w-72 bg-gray-300 rounded-lg drop-shadow-md mb-6">
        {/* Link will need to be dynamically fetched based on post ID
        probably end up being something like post/{id} */}
        <Link href="/post">
          <img className="rounded-t-lg" src="test_img.png" />
          <div className="border-l border-b border-r rounded-t-none rounded-l-lg rounded-b-lg rounded-r-lg border-gray-400">
            <p className="p-2">
              This is a graph of my data. It look like this because of the way it
              is.
            </p>
            <p className="p-2 text-right">User_Name</p>
          </div>
        </Link>
      </div>
    );
  }

