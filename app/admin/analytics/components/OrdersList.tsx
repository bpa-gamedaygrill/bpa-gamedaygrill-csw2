"use client";
import { enUS } from 'date-fns/locale';
import { format } from 'date-fns';
import React, { useState, useEffect } from 'react'
import fetchLastWeekOrders from '../../../../libs/actions/order/fetchLastWeekOrders';
import fetchAllTimeOrders from '../../../../libs/actions/order/fetchAllTimeOrder';
import { Accordion, Button } from 'flowbite-react';

interface OrderItemInterface {
  name: string;
  totalPrice: string;
  date: Date;
  id: string;
}

const OrderItem: React.FC<OrderItemInterface> = ({ name, totalPrice, date, id }) => {
  return (
  <>
       <Accordion collapseAll className='w-full'>
      <Accordion.Panel>
        <Accordion.Title>Order {id} - Placed on {format(date, 'MM/dd/yyyy', { locale: enUS })}</Accordion.Title>
        <Accordion.Content>
            <div className="flex flex-col gap-2 mb-7">
              <h3 className="text-lg font-medium text-neutral-700">Order Id</h3>
              <p className="text-medium text-neutral-400">{id}</p>
            </div>
            <div className="flex flex-col gap-2 mb-7">
              <h3 className="text-lg font-medium text-neutral-700">Consumer Name</h3>
              <p className="text-medium text-neutral-400">{name}</p>
            </div>
            <div className="flex flex-col gap-2 mb-7">
              <h3 className="text-lg font-medium text-neutral-700">Total Purchase Cost</h3>
              <p className="text-medium text-neutral-400">${totalPrice}</p>
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <h3 className="text-lg font-medium text-neutral-700">Purchase Date</h3>
              <p className="text-medium text-neutral-400">{format(date, 'MM/dd/yyyy', { locale: enUS })}</p>
            </div>
        </Accordion.Content>
      </Accordion.Panel>
      </Accordion>
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
      <div className="w-full lg:max-w-[100%] px-5 py-7 border-[1px] border-neutral-200 rounded-md">
        <h1 className="w-full text-center text-2xl mb-7 font-medium tracking-tight opacity-70">List of orders</h1>
        <div className="flex flex-col gap-5 px-11 justify-start items-center w-full mt-5">
          { isLoading ? "Loading" 
          :
          (
          ordersDataset && ordersDataset.map((item) => (
            <OrderItem name={item.purchaseFullName} totalPrice={item.totalCost} date={item.purchaseDate} id={item.id} />
          ))
          ) }
          { (!isLoading && ordersDataset?.length == 0) && <p className="text-md font-medium opacity-60 mt-0">No orders data is found.</p> }
          { (currentView=="lastweek") ? 
            <Button color="blue" size="sm" className="bg-primary-red hover:!bg-red-700" onClick={updateOrdersDatasetWithAlltime}>See More</Button>
          :
            <Button color="blue" size={"sm"} className="bg-primary-red hover:!bg-red-700" onClick={updateOrdersDatasetWithLastweek}>See Less</Button>
          }
        </div>
      </div>
  </>
  )
}

export default OrdersList
