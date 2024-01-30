import React from 'react'

const Card = ({ link, title,content, comments, onClick, btnText }) => {
  return (
    <div className="border border-gray-300 p-4 m-4 post-card">
      <a href={link} className="text-primary hover:underline">
        {title}
      </a>
      <p>{content}</p>
      <p>{comments} Comments</p>
      <div>
        <button
          onClick={onClick}
          className="bg-primary text-white px-4 my-4 py-1 rounded-md"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Card