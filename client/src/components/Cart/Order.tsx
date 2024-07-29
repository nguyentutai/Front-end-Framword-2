"use client";
import React from 'react';
import { Steps } from 'antd';


import { Label, Radio } from "flowbite-react";
import { NavLink } from 'react-router-dom';

const Order: React.FC = () => {
  return (
    <>

      <div className="container-main mx-auto flex justify-center items-center h-screen">
        <div className="min-w-[740px] shadow-2xl p-8 ">
          <div className='bg-red-300 min-h-[60px] rounded-lg shadow-xl p-6'>
            <Steps
              size="small"
              current={1}
              items={[
                {
                  title: 'Giỏ hàng',
                },
                {
                  title: 'Thông tin khách hàng',
                },
                {
                  title: 'Thanh toán',
                },
                {
                  title: 'Hoàn tất',
                }
              ]}
            />
          </div>
          <fieldset className="flex flex-col gap-4 mb-6 mt-4">
            <legend className="mb-4 font-bold">Thông tin khách mua hàng</legend>
            <div className="flex items-center gap-2">
              <Radio id="nam" name="ten" value="Nam" defaultChecked />
              <Label htmlFor="nam">Anh</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="nu" name="ten" value="Nu" />
              <Label htmlFor="nu">Chị</Label>
            </div>
          </fieldset>
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <input
                className="rounded-lg w-full p-2"
                type="text"
                id="ten"
                name="ten"
                required
                placeholder="Nhập họ và tên"
              />
            </div>
            <div className="flex-1">
              <input
                className="border-red-600 w-full rounded-lg p-2"
                type="text"
                id="ten"
                name="ten"
                required
                placeholder="Nhập số điện thoại"
              />
            </div>
          </div>
          <fieldset className="flex flex-col gap-4 mb-6">
            <legend className="mb-4">Chọn cách nhận hàng</legend>
            <div className="flex items-center gap-2">
              <Radio id="giao-tan-noi" name="nhan-hang" value="Giao tận nơi" defaultChecked />
              <Label htmlFor="giao-tan-noi">Giao hàng tận nơi</Label>
            </div>
          </fieldset>

          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <input
                className="rounded-lg w-full p-2"
                type="text"
                id="dia-chi"
                name="dia-chi"
                required
                placeholder="Exam: Số nhà 1/Đống Đa/Hà Nội"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <h1>Tổng Tiền</h1>
            <p className="text-red-500">119999$</p>
          </div>
          <div>
              <NavLink to="/Pay">
              <button className=" w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                Xác nhận đặt hàng
              </button>
              </NavLink>
            </div>
        </div>
      </div>
    </>
  );
}

export default Order;
