"use client";
/* eslint-disable @next/next/no-img-element */

import Running_Banner from "@/components/Pages/Marquee";
import axios from "axios";
import { useEffect, useState } from "react";

 const Home=()=> {

  const [data, setData] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get(`https://kiskfm.vercel.app/api`);
        setData(response.data);
        console.log(response)
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

      FetchData();

  }, []);

  console.log(data);
  return (
    <main className=" px-4 md:px-6 lg:px-20">
      <Running_Banner />
      {/* Main content */}
      <div className="grid grid-cols-6">
        <div className="col-span-5"> {data?.length}</div>
      </div>
    </main>
  );
}

export default Home;
