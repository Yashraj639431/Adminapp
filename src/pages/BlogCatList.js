import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBlogCat } from "../features/bCategory/blogCatSlice";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
const columns = [
  {
    title: "SNo.",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const BlogCatList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogCat());
  }, [dispatch]);
  const blogCatState = useSelector((state) => state.bCategory.blogCategories);
  const data1 = [];
  for (let i = 0; i < blogCatState.length; i++) {
    data1.push({
      key: i + 1,
      title: blogCatState[i].title,
      action: (
        <>
          <Link to="/" className="fs-4">
            <BiEdit />
          </Link>
          <Link className="ms-3 text-danger fs-4" to="/">
            <AiOutlineDelete />
          </Link>
        </>
      ),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Blog Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default BlogCatList;
