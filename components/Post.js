import Link from 'next/link'

export default function Post() {
    return (
      <div className="w-72 bg-gray-400 border rounded-lg drop-shadow-md mb-6">
        {/* Link will need to be dynamically fetched based on post ID
        probably end up being something like post/{id} */}
        <Link href="/post">
          <img className="rounded-t-md" src="test_img.png" />
          <p>
            This is a graph of my data. It look like this because of the way it
            is.
          </p>
          <p className="text-right pr-1">User_Name</p>
        </Link>
      </div>
    );
  }

