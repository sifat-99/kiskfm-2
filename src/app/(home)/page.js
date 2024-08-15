/* eslint-disable @next/next/no-img-element */

import Running_Banner from "@/components/Pages/Marquee";

export default function Home() {
  return (
    <main className=" px-4 md:px-6 lg:px-20">
      <Running_Banner />
      {/* Main content */}
      <div className="grid grid-cols-6">
        <div className="col-span-5"> hello</div>
        <div className="col-span-1">ki</div>
      </div>
    </main>
  );
}
