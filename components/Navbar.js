import React from "react";

export default function Navbar() {
  return (
    <div className="bg-primary-40"> 
      <nav className="p-4">
        <div className="flex items-center justify-between">
          <div className="text-black font-bold">Posts App</div>
          <div className="flex gap-4 space-x-4">
            <a href={"/"} className="text-black">
              Posts
            </a>
            <a href="/posts/drafts" className="text-black">
              Drafts
            </a>
            <a href="/posts/create" className="text-black">
              Add Post
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
