"use client";
import React, { useState } from 'react';
import { Steps } from 'antd';



import { Label, Radio } from "flowbite-react";
import { NavLink } from 'react-router-dom';

const Cart: React.FC = () => {
  const [count, setCount] = useState(1);
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
          <fieldset className="flex flex-col mb-6 mt-4">
            <div className='flex gap-8 p-4'>
              <div className="flex-col-4 items-center ">
                <div className='border border-red-500'>
                  <img className='w-32 ' src="https://product.hstatic.net/200000722513/product/pc__3__99a504041664478dac81c6a79a512233.png" alt="" />
                </div>
                <div className='flex p-4 text-gray-400/75'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" className="size-6">
                    <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                    <path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                  </svg>
                  <p className='ml-4 '>Xoá</p>
                </div>
              </div>
              <div className='flex px-3 gap-16'>
                <div className=''>
                  <Label htmlFor="nam">PC GVN x ASUS Back to Future
                    <br />(Intel i5-14400F/ VGA RTX 4070 Super)</Label>
                </div>
                <div>
                  <p className='font-semibold text-red-500 text-lg'>Giá: $250.000</p>
                </div>
                <div className="flex items-center gap-2">
                <button
                  className="bg-red-400/50 px-3 text-xl"
                  onClick={() => setCount(count - 1)}
                >
                  -
                </button>
                <div className="">{count < 1 ? "1" : count}</div>
                <button
                  className="bg-red-400/50 px-3 text-sm py-1"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
              </div>
            </div>
            <hr />
            <div className="flex justify-between p-4 ">
              <span className='medium'> Tổng tiền:</span>
              <p className=' text-red-500 font-bold text-lg'>19999$</p>
            </div>
            <div>
              <NavLink to="/Order">
              <button className=" w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                Xác nhận đặt hàng
              </button>
              </NavLink>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
}

export default Cart;
