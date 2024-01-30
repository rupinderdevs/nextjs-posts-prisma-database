import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

export default function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    if (title && content) {
      // send request to server.
      try {
        const body = { title, content, published: false };
        await fetch(`/api/post`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        await router.push("/posts/drafts");
      } catch (error) {
        console.error(error);
      }
    } else {
      setError("All fields are required");
      return;
    }
  };

  return (
    <Layout>
      <Head>
        <title>Create Post</title>
      </Head>
      <div>
        <form onSubmit={handleSubmit}>
          {error ? (
            <div className="text-red-500 text-center">{error}</div>
          ) : null}
          {message ? (
            <div className="text-green-500 text-center">{message}</div>
          ) : null}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Content</label>
            <textarea
              cols={50}
              name="content"
              placeholder="Content"
              rows={8}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>    
    </Layout>
  );
}
