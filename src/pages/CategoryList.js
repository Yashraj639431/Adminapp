import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductCat,
  deleteProductCat,
  resetState,
} from "../features/pcategory/pCategorySlice";
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
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Categorylist = () => {
  const [open, setOpen] = useState(false);
  const [prodcatId, setprodcatId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setprodcatId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getProductCat());
  }, [dispatch]);
  const proCatState = useSelector((state) => state.pCategory.proCategories);
  const data1 = [];
  for (let i = 0; i < proCatState.length; i++) {
    data1.push({
      key: i + 1,
      name: proCatState[i].title,
      action: (
        <>
          <Link to={`/admin/category/${proCatState[i]._id}`} className="fs-4">
            <BiEdit />
          </Link>
          <button
            className="ms-3 text-danger fs-4 bg-transparent border-0"
            onClick={() => showModal(proCatState[i]._id)}
          >
            <AiOutlineDelete />
          </button>
        </>
      ),
    });
  }

  const deleteprodcat = (e) => {
    dispatch(deleteProductCat(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getProductCat());
    }, 100);
  };
  return (
    <div>
      <h3 className="mb-4 title">Product Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => deleteprodcat(prodcatId)}
        title="Ary you Sure you want to delete this Product Category ?"
      />
    </div>
  );
};

export default Categorylist;
