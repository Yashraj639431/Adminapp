import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBlogCategories } from "../features/bCategory/bCategorySlice";
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
    dispatch(getBlogCategories());
  }, [dispatch]);

  const blogCategoryState = useSelector((state) => state.bCategory.bCategory);
  const data1 = [];
  for (let i = 0; i < blogCategoryState.length; i++) {
    data1.push({
      key: i + 1,
      title: blogCategoryState[i].title,
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
