import React from "react";
import { Link } from "react-router";
import Footer from "./Footer";

const blogs = [
  {
    id: 1,
    title: "Don’t Let Summer Stress Destroy Your Landscape—Fertilize & Protect Now!",
    description:
      "Don’t Let Summer Stress Destroy Your Landscape—Fertilize & Protect Now! Summer in Colorado brings intense sunlight, dry conditions, and heightened",
  },
  {
    id: 2,
    title: "The Beetles Are Back: How to Protect Your Colorado Trees This Spring Before It’s Too Late",
    description:
      "As the mountains wake up from winter, something far more dangerous than melting snow is on the move—bark beetles. From",
  },
  {
    id: 3,
    title: "Spring Tree Fertilization",
    description:
      "As spring approaches, trees begin to emerge from dormancy, ready to push out fresh leaves, flowers, and new growth. However,",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ZdDkZl6QRCvKM8b7kzu-zx3un-tYEz4HpQ&s",
  },
  {
    id: 4,
    title: "Why Lawn Aeration is Essential for a Lush, Green Lawn",
    description:
      "Why Lawn Aeration is Essential for a Lush, Green Lawn Expert Tree & Landscape Care for Mountain CommunitiesProtecting the health",
    image: "https://woodlandswater.org/wp-content/uploads/2022/09/Aerate-your-lawn-to-keep-it-healthy-and-lush.jpg",
  },
  {
    id: 5,
    title: "How Professional Stump Grinding Improves Your Landscape",
    description:
      "Expert Tree & Landscape Care for Mountain CommunitiesProtecting the health and beauty of your landscape is our priority. At American",
    image: "https://cdn.prod.website-files.com/5d9c3c1f57629dcaf482624e/66d7bef3fe3fe57fad6e9b37_the-role-of-stump-grinding-in-urban-landscape-management(smga).jpg_00.jpeg",
  },
  {
    id: 6,
    title: "Seasonal Tree Care Guide: How to Keep Your Trees Healthy Year-Round",
    description:
      "Seasonal Tree Care Guide: How to Keep Your Trees Healthy Year-Round Expert Tree & Landscape Care for Mountain CommunitiesProtecting the",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UZhpg3aivLld7O4robBMucVUG6qGS_omd-3O4iz-BwJwUf_wDRs_vQRi5gcHb-1jPXA&usqp=CAU",
  },
];

// Leaf underline component
const LeafUnderline = () => {
  const rotations = [10, 5, 0, -5, -10, -5, 0, 5, 10];
  return (
    <div className="flex justify-center mt-2 mb-8 gap-1">
      {rotations.map((angle, index) => (
        <div
          key={index}
          className="w-2 h-2 bg-amber-900 rounded-full"
          style={{ transform: `rotate(${angle}deg)` }}
        />
      ))}
    </div>
  );
};

export default function BlogPage() {
  return(
  <>
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-2 text-green-700 gap-2">
        Blog
      </h2>
      <LeafUnderline />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-green-900 shadow-md rounded-xl p-6 flex flex-col justify-between"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover rounded mb-4"
              />
            )}
            <h2 className="text-xl font-bold text-white mb-2">
              {blog.title}
            </h2>
            <p className="text-gray-50 mb-4">{blog.description}</p>
            <Link to={`/blog/${blog.id}`}>
            <button className="text-green-300 font-semibold hover:underline w-fit">
              Read More
            </button></Link>
          </div>
        ))}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}
