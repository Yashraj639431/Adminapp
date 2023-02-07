import React from "react";
// import React, { useEffect } from "react";
// import { Table } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { getCoupons } from "../features/coupon/couponSlice";
// import { Link } from "react-router-dom";
// import { BiEdit } from "react-icons/bi";
// import { AiOutlineDelete } from "react-icons/ai";

// const columns = [
//   {
//     title: "SNo.",
//     dataIndex: "key",
//   },
//   {
//     title: "Name",
//     dataIndex: "name",
//     sorter: (a, b) => a.name.length - b.name.length,
//   },
//   {
//     title: "Actions",
//     dataIndex: "action",
//   },
// ];

const CouponList = () => {
  return <div>Coupon List</div>;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCoupons());
  // }, [dispatch]);
  // const couponState = useSelector((state) => state.coupon.coupons);
  // const data1 = [];
  // for (let i = 0; i < couponState.length; i++) {
  //   data1.push({
  //     key: i + 1,
  //     name: couponState[i].title,
  //     action: (
  //       <>
  //         <Link to="/" className="fs-4">
  //           <BiEdit />
  //         </Link>
  //         <Link className="ms-3 text-danger fs-4" to="/">
  //           <AiOutlineDelete />
  //         </Link>
  //       </>
  //     ),
  //   });
  // }

  // return (
  //   <div>
  //     <h3 className="mb-4 title">Coupons</h3>
  //     <div>
  //       <Table columns={columns} dataSource={data1} />
  //     </div>
  //   </div>
  // );
};

export default CouponList;
