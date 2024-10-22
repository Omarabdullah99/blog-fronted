// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const RelatedBlog = ({ relatedblogs }) => {
  const realted = relatedblogs;
  console.log("related", realted);

  const excerpt = (str) => {
    if (str?.length > 45) {
      str = str.substring(0, 45) + " ...";
    }
    return str;
  };

  const titleexcerpt = (str) => {
    if (str?.length > 45) {
      str = str.substring(0, 45) + " ...";
    }
    return str;
  };
  return (
    <div>
      <h1 className="text-2xl text-black font-bold">Related Product</h1>
      <hr className="w-52" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5 ">
        {realted &&
          realted.map((blog) => (
            <div
              key={blog?._id}
              className="shadow-lg rounded cursor-pointer text-black h-[400px] mt-3"
            >
              <div>
                <img
                  src={blog?.imageFile}
                  alt=""
                  className="h-[150px] w-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className=" mb-2 font-bold text-sm cursor-pointer">
                  {" "}
                  {titleexcerpt(blog?.title)}{" "}
                </h3>
                <Link to={`/blog/${blog?._id}`}>
                  {" "}
                  <p className="text-black">
                    {" "}
                    {excerpt(blog?.description)}see more
                  </p>
                </Link>
                <p className="mb-2 text-sm text-gray-500">
                  <FaUser className="inline-flex items-center mr-2" />{" "}
                  {blog?.name}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RelatedBlog;
