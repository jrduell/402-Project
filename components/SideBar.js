import Link from 'next/link'

export default function SideBar() {
  const subscriptions = [
    "finance_guy27",
    "REAL Stats",
    "TNPrices",
    "Stock Watchdog",
    "Fortune500",
  ];

  return (
    <aside className="sticky top-0 h-screen w-56 border-r border-black bg-[#c1e5e6] p-4">
      <div className="items-center">
        <h1 className="flex flex-col font-bold">Subscriptions</h1>
        {subscriptions.map((channel) => (
          <div className="mb-2">
            <Link href="account">{channel}</Link>
          </div>
        ))}
      </div>
    </aside>
  );
}
