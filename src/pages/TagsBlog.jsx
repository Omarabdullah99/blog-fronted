// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogsByTagSlice } from "../reudx/features/BlogSlice";

const TagsBlog = () => {
  const { tagsBlog, loading } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const { tag } = useParams();
  console.log("tags", tag);

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

  useEffect(() => {
    if (tag) {
      dispatch(getBlogsByTagSlice(tag));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag]);
  console.log("tagsok", tagsBlog);
  return (
    <div className="w-[80%] mx-auto">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
          {tagsBlog &&
            tagsBlog.map((blog) => (
              <div
                key={blog?._id}
                className="shadow-lg rounded cursor-pointer text-black h-[400px] mt-3"
              >
                <div>
                  <img
                    src={blog?.imageFile}
                    alt=""
                    className="h-[200px] w-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="mb-2 font-bold text-sm cursor-pointer">
                    {titleexcerpt(blog?.title)}
                  </h3>
                  <Link to={`/blog/${blog?._id}`}>
                    <p className="text-black">
                      {excerpt(blog?.description)} see more
                    </p>
                  </Link>
                  <Link to={`/userblog/${blog?.creator}`}>
                    <p className="mb-2 text-sm text-gray-500">
                      <FaUser className="inline-flex items-center mr-2" />
                      {blog?.name} (see other blogs by this user)
                    </p>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default TagsBlog;
