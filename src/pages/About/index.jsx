import React from "react";

const About = () => {
  const galleryItems = [
    {
      id: 1,
      name: "Item 1",
      color: "orange",
      description: "This is a shade of Color",
      backgroundColor: "bg-orange-400",
    },
    {
      id: 2,
      name: "Item 2",
      color: "blue",
      description: "This is a shade of Color",
      backgroundColor: "bg-blue-400",
    },
    {
      id: 3,
      name: "Item 3",
      color: "green",
      description: "This is a shade of Color",
      backgroundColor: "bg-green-400",
    },
    {
      id: 4,
      name: "Item 4",
      color: "red",
      description: "This is a shade of Color",
      backgroundColor: "bg-red-400",
    },
    {
      id: 5,
      name: "Item 5",
      color: "yellow",
      description: "This is a shade of Color",
      backgroundColor: "bg-yellow-700",
    },
    {
      id: 6,
      name: "Item 6",
      color: "brown",
      description: "This is a shade of Color",
      backgroundColor: "bg-amber-400",
    },
    {
      id: 7,
      name: "Item 7",
      color: "pink",
      description: "This is a shade of Color",
      backgroundColor: "bg-pink-400",
    },
    {
      id: 8,
      name: "Item 8",
      color: "purple",
      description: "This is a shade of Color",
      backgroundColor: "bg-purple-400",
    },
    {
      id: 9,
      name: "Item 9",
      color: "Violet",
      description: "This is a shade of Violet",
      backgroundColor: "bg-violet-400",
    },
    {
      id: 10,
      name: "Item 10",
      color: "gray",
      description: "This is a shade of Color",
      backgroundColor: "bg-gray-400",
    },
  ];

  return (
    <div className="min-h-screen flex justify-center pt-10">
      <div>
        <h1>Color Gallery</h1>

        <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 px-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`gallery-item border border-2 border-slate-800 rounded-md p-6 ${item.backgroundColor} w-100`}
            >
              <h1>{item.id}</h1>
              <h3 className="text-2xl my-3">{item.color}</h3>

              <p className="text-lg">
                {item.description} {item.backgroundColor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
