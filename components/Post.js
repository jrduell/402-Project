import Link from 'next/link'

export default function Post() {
    return (
      <div className="m-8 mb-6 w-72 rounded-lg bg-gray-300 drop-shadow-md">
        {/* Link will need to be dynamically fetched based on post ID
        probably end up being something like post/{id} */}
        <Link href="/post">
          <img className="rounded-t-lg" src="test_img.png" />
          <div className="rounded-lg rounded-t-none bg-[#377E7F] text-white">
            <p className="p-2 font-serif italic">
              This is a graph of my data. It looks like this because of the way
              it is.
            </p>
            <p className="p-2 text-right">User_Name</p>
          </div>
        </Link>
      </div>
    );
  }

