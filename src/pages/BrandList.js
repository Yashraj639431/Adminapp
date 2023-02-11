import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getBrands,
  deleteBrands,
  resetState,
} from "../features/brand/brandSlice";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import CustomModal from "../components/CustomModal";

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
  const [open, setOpen] = useState(false);
  const [brandId, setbrandId] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setbrandId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
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
          <Link to={`/admin/brand/${brandState[i]._id}`} className="fs-4">
            <BiEdit />
          </Link>
          <button
            className="ms-3 text-danger fs-4 bg-transparent border-0"
            onClick={() => showModal(brandState[i]._id)}
          >
            <AiOutlineDelete />
          </button>
        </>
      ),
    });
  }

  const deleteBrand = (e) => {
    dispatch(deleteBrands(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(resetState());
      dispatch(getBrands());
    }, 100);
  };

  return (
    <div>
      <h3 className="mb-4 title">Brands</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => deleteBrand(brandId)}
        title="Ary you Sure you want to delete this Brand ?"
      />
    </div>
  );
};

export default Brands;
