// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { IoIosSearch } from "react-icons/io";
import {
  getAllBlogsSlice,
  searchBlogsSlice,
} from "../reudx/features/BlogSlice";
import { useNavigate } from "react-router-dom";
import BlogCardCopy from "./BlogCardCopy";
import ReactPaginate from "react-paginate";
import Pagination from "./Pagination";

const BlogePage = () => {
  const [search, setSearch] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setData] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { allblog,loading } = useSelector((state) => ({ ...state.blog }));
  const { allblog, loading } = useSelector((state) => state.blog)
  // console.log('blogcurrent',currentPage)

  useEffect(() => {
    if (!allblog.length) {
      dispatch(getAllBlogsSlice());
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(searchBlogsSlice(search));
      navigate(`/blogs/search?searchQuery=${search}`);
      setSearch("");
    } else {
      navigate("/");
    }
  };

  /*pagination */

  useEffect(() => {
    setData(allblog);
  }, [allblog]);

  const itemsPerPage = 8;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math?.ceil(items?.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event?.selected * itemsPerPage) % items?.length;
    console.log(
      `User requested page number ${event?.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
     
      <div className="w-3/5 my-4">
        <form className=" input-group" onSubmit={handleSubmit}>
          <div className="relative" style={{width:'-webkit-fill-available'}}>
            <input
              type="text"
              className="form-control p-2"
              placeholder="Search blog title"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2" style={{ fontSize:'25px'}}>
              <IoIosSearch />
            </div>
          </div>
        </form>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-10 ">
        <div className="left w-full lg:w-[70%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {currentItems.length > 0 &&
              currentItems?.map((item) => (
                <BlogCardCopy key={item._id} {...item} />
              ))}
          </div>
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        </div>
        <div className="right w-full lg:w-[30%]">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogePage;
