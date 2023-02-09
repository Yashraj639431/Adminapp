import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";
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
    dataIndex: "name",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Brands = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const brandState = useSelector((state) => state.brand.brands);
  const data1 = [];
  
  for (let i = 0; i < brandState.length; i++) {
      data1.push({
        key: i + 1,
        name: brandState[i].title,
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
      <h3 className="mb-4 title">Brands</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Brands;
