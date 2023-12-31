import React from "react";
import Image from "next/image";

const Card = ({ item }) => {
  return (
    <div className="h-96 bg-yellow-400 rounded-xl">
      <div className="fles justify-center">
        <Image
          className="h-52 object-cover rounded-xl"
          src={item.thumbnail.path + "." + item.thumbnail.extension}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>

      <div className="flex justify-center">
        <h1 className="font-bold">Name:</h1>
        {item.name}
      </div>
      <div className="">
        <h1 className="font-bold">Description:</h1>
        {item.description ? (
          <div>{item.description}</div>
        ) : (
          <div>No description</div>
        )}
      </div>
    </div>
  );
};

export default Card;
