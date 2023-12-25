"use client";
import { enUS } from 'date-fns/locale';
import { format } from 'date-fns';
import React, { useState, useEffect } from 'react'
import fetchLastWeekOrders from '../../../../libs/actions/order/fetchLastWeekOrders';
import fetchAllTimeOrders from '../../../../libs/actions/order/fetchAllTimeOrder';

interface OrderItemInterface {
  name: string;
  totalPrice: string;
  date: Date;
}

const OrderItem: React.FC<OrderItemInterface> = ({ name, totalPrice, date }) => {
  return (
  <>
      <div className="px-5 min-w-[70%] max-w-[70%] py-3 border-[1px] border-neutral-200 rounded-md">
        <h1 className="text-lg tracking-tight">Consumer Name: <span className="font-semibold">{name}</span></h1>
        <h1 className="text-lg tracking-tight">Total Price: $<span className="font-semibold">{totalPrice}</span></h1>
        <h1 className="text-lg tracking-tight">Order Date: <span className="font-semibold">{format(date, 'MM/dd/yyyy', { locale: enUS })}</span></h1>
      </div>
  </>
  )
}

const OrdersList = () => {
  const [ordersDataset, setOrdersDataset] = useState<{ id: string; userId: string | null; purchaseDate: Date; totalCost: string; purchaseFullName: string; }[]>()
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentView, setCurrentView] = useState<"lastweek" | "alltime">("lastweek")

  const updateOrdersDatasetWithLastweek = async() => {
    setCurrentView(prev => "lastweek")
    setIsLoading(prev => true)
    let orderData = await fetchLastWeekOrders();
    orderData = orderData.sort(function(a,b){return a.purchaseDate.getTime() - b.purchaseDate.getTime()})
    orderData = orderData.reverse()
    setOrdersDataset(orderData)
    setIsLoading(prev => false);
  }

  const updateOrdersDatasetWithAlltime = async() => {
    setCurrentView(prev => "alltime")
    setIsLoading(prev => true)
    let orderData = await fetchAllTimeOrders()
    orderData = orderData.sort(function(a,b){return a.purchaseDate.getTime() - b.purchaseDate.getTime()})
    orderData = orderData.reverse()
    setOrdersDataset(orderData)
    setIsLoading(prev => false);
  }

  useEffect(() => {
    updateOrdersDatasetWithLastweek()
  }, [])

  return (
  <>
      <div className="w-full lg:max-w-[50%] px-5 py-7 border-[1px] border-neutral-200 rounded-md">
        <h1 className="w-full text-center text-2xl font-semibold tracking-tight opacity-70">List of orders</h1>
        <div className="flex flex-col gap-5 justify-start items-center w-full mt-5">
          { isLoading ? "Loading" 
          :
          (
          ordersDataset && ordersDataset.map((item) => (
            <OrderItem name={item.purchaseFullName} totalPrice={item.totalCost} date={item.purchaseDate} />
          ))
          ) }
          { (!isLoading && ordersDataset?.length == 0) && <p className="text-md font-medium opacity-60 mt-0">No orders data is found.</p> }
          { (currentView=="lastweek") ? 
            <button className="text-primary-red underline cursor-pointer" onClick={updateOrdersDatasetWithAlltime}>See More</button>
          :
            <button className="text-primary-red underline cursor-pointer" onClick={updateOrdersDatasetWithLastweek}>See Less</button>
          }
        </div>
      </div>
  </>
  )
}

export default OrdersList
