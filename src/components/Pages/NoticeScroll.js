import React, { useState, useEffect } from "react";

const NoticeSlider = ({ notices }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === notices.length - 1 ? 0 : prevIndex + 1
      );
    }, 20); // Adjust the speed here (e.g., 3000ms for 3 seconds)

    return () => clearInterval(interval);
  }, [notices.length]);

  return (
    <div className="overflow-hidden h-64">
      <div
        className="transition-transform ease-in-out duration-1000"
        style={{ transform: `translateY(-${index * 100}%)` }}
      >
        {notices.map((notice, idx) => (
          <div
            key={idx}
            className="h-20 flex items-start justify-start bg-transparent"
          >
            <p className="text-lg">{notice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ScrollNotice = () => {
  const notices = [
    "Notice 1: Important announcement.",
    "Notice 2: Meeting at 3 PM.",
    "Notice 3: Office will be closed tomorrow.",
    "Notice 4: New policy updates available.",
    "Notice 5: Employee of the month announcement.",
  ];

  return (
    <main className="p-4 h-96">
      <h1 className="text-center text-xl mb-4">Notice Board</h1>
      <NoticeSlider notices={notices} />
    </main>
  );
};

export default ScrollNotice;
