import Link from 'next/link'

export default function SideBar() {
    const subscriptions = [
        "finance_guy27",
        "REAL Stats",
        "TNPrices",
        "Stock Watchdog",
        "Fortune500"
      ];

    return (
      <aside className="sticky h-screen top-0 border-r border-gray-400 bg-gray-200 p-4">
        <div className="items-center">
          <h1 className="flex flex-col font-bold">Subscriptions</h1>
          {subscriptions.map((channel) => (
            <div>
              <Link href="account">{channel}</Link>
            </div>
          ))}
        </div>
      </aside>
    );
  }
