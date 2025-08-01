import React, { useState } from "react";
import { useParams } from "react-router";
import {
  FaStar,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaFacebook,
} from "react-icons/fa";
import { X } from "lucide-react";
import blogData from "../data/blogData.json";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === parseInt(id));
  const [comment, setComment] = useState("");

  function handleCommentSubmit(e) {
    e.preventDefault();
    console.log("Comment submitted:", comment);
    setComment("");
  }

  if (!blog) return <div className="text-red-600">Blog not found</div>;

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Common Header */}
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

        {/* Special Case: if blog.id >= 3, show only title, image and one p */}
        {blog.id >= 3 ? (
          <>
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto rounded-lg mb-6"
              />
            )}
            {blog.fullContent ? (
              <p className="mb-4 text-gray-800">{blog.fullContent}</p>
            ) : (
              blog.content?.find((block) => block.type === "p") && (
                <p className="mb-4 text-gray-800">
                  {blog.content?.find((block) => block.type === "p").text}
                </p>
              )
            )}
          </>
        ) : (
          // Normal full blog content rendering for id < 3
          blog.content?.map((block, index) => {
            switch (block.type) {
              case "h2":
                return (
                  <h2
                    key={index}
                    className="text-2xl border-t-4 font-semibold mb-4"
                  >
                    {block.text}
                  </h2>
                );
              case "h3":
                return (
                  <h3 key={index} className="text-xl font-medium mt-6 mb-2">
                    {block.text}
                  </h3>
                );
              case "p":
                return (
                  <p key={index} className="mb-4 text-gray-800">
                    {block.text}
                  </p>
                );
              case "ul":
                return (
                  <ul key={index} className="list-disc pl-6 mb-4 text-gray-800">
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              case "ol":
                return (
                  <ol
                    key={index}
                    className="list-decimal pl-6 mb-4 text-gray-800"
                  >
                    {block.items.map((item, i) => (
                      <li key={i}>
                        <strong>{item.title}</strong>
                        <p>{item.text}</p>
                      </li>
                    ))}
                  </ol>
                );
              case "section":
                return (
                  <div key={index} className="mb-4">
                    <h4 className="text-lg font-bold">{block.heading}</h4>
                    <p className="italic text-sm text-gray-500">{block.sub}</p>
                    <ul className="list-disc pl-6">
                      {block.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              default:
                return null;
            }
          })
        )}

        {/* Contact Info */}
        <div className="space-y-1 mt-10 border-t pt-6">
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-green-700" /> Call or text:{" "}
            <a href="tel:3033788273" className="text-blue-700 underline">
              303-378-8273
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FaGlobe className="text-green-700" /> Website:{" "}
            <a
              href="https://aqtc.co"
              target="_blank"
              className="text-red-700 underline"
            >
              AQTC.co
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-green-700" /> Email:{" "}
            <a href="mailto:tom@aqtc.co" className="text-red-700 underline">
              tom@aqtc.co
            </a>
          </p>
        </div>

        <p className="italic text-sm mt-2">
          Licensed by the Colorado Department of Agriculture | Serving the I-70
          Corridor and the Roaring Fork Valley
        </p>

        {/* Conversion CTA */}
        <div className="mt-12 border-t pt-6">
          <p className="text-lg font-medium mb-4">
            Would you like this converted into a Mailchimp campaign, Instagram
            caption, or postcard version next?
          </p>

          {/* Share Buttons */}
          <div className="mb-8">
            <span className="font-semibold block mb-2">Share this:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-sm bg-white border border-gray-300 text-black hover:bg-gray-100">
                  <X className="w-4 h-4" />x
                </button>
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com/blog-post"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-sm bg-white border border-gray-300 text-black hover:bg-gray-100">
                  <FaFacebook className="w-4 h-4" />
                  Facebook
                </button>
              </a>
            </div>
          </div>

          {/* Related Posts */}
          <div className="space-y-4 mb-10">
            <p className="text-sm font-semibold mb-2">Like this:</p>
            <div className="space-y-4 text-sm">
              <div className="mb-10 space-y-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                  <FaStar className="w-4 h-4" />
                  Like
                </button>
                <div>
                  <p className="text-sm font-semibold mb-2">Related</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                  <div className="space-y-0.5">
                    <p className="text-red-600 font-medium">
                      Spring Tree Fertilization
                    </p>
                    <p className="text-gray-600 text-sm">March 6, 2025</p>
                    <p className="text-gray-500 text-sm">In "Fertilizer"</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-red-600 font-medium">
                      How Professional Stump Grinding Improves Your Landscape
                    </p>
                    <p className="text-gray-600 text-sm">February 28, 2025</p>
                    <p className="text-gray-500 text-sm">Similar post</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-red-600 font-medium">
                      Why Lawn Aeration is Essential for a Lush, Green Lawn
                    </p>
                    <p className="text-gray-600 text-sm">February 28, 2025</p>
                    <p className="text-gray-500 text-sm">Similar post</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comment Section */}
          <div className="mt-10 border-t pt-6">
            <h3 className="text-lg font-bold text-gray-700 mb-2">
              Leave a Reply
            </h3>
            <form onSubmit={handleCommentSubmit} className="space-y-4">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
                rows="4"
                placeholder="Write your comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-green-700 text-white rounded hover:bg-amber-900 transition-all"
              >
                Submit Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
