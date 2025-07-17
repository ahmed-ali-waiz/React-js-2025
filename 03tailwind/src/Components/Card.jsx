import React from "react";

function Card({ username = "Guest", bio = "This is a cool user.", image, btnText = "Follow" }) {
  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        className="w-full h-40 object-cover"
        src={image || "https://i.pravatar.cc/300"}
        alt="User Banner"
      />
      <div className="p-5 text-center">
        <img
          src={image || "https://i.pravatar.cc/100"}
          className="w-20 h-20 rounded-full mx-auto -mt-14 border-4 border-white shadow-md"
          alt="Profile"
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-800">{username}</h2>
        <p className="text-sm text-gray-500 mt-1">{bio}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
