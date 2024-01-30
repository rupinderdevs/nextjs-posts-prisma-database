import React from "react";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      <div className="my-4 m-auto p-24">{props.children}</div>
      {/* <style jsx>{`
        .container {
          width: 500px;
          margin: 10px auto;
          padding: 22px;
        }
      `}</style> */}
    </div>
  );
}
