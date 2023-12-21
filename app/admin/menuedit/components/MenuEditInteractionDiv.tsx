"use client";
import React, { useEffect, useRef, useState } from 'react'
import MenuEditModifyItem from './MenuEditModifyItem';
import { Trash2, Edit } from 'react-feather';  
import { MenuCategoryFilterType } from '../../../redux/features/menuCategoryFilterSlice';


export interface MenuEditInteractionDivInterface {
  itemData: {
    itemId: string;
    itemName: string;
    itemDesc: string;
    itemPrice: string;
    imageUrl: string;
    itemType: MenuCategoryFilterType;
  }
}

import axios from 'axios';

const MenuEditInteractionDiv: React.FC<MenuEditInteractionDivInterface> = ({  itemData }) => {
  const [delModalActive, setDelModalActive] = useState<boolean>(false);
  const [editModalActive, setEditModalActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const editModalActiveFunc = (value: boolean) => {
  setEditModalActive(prev => value);
}

  const deleteItem = () => {
    setIsLoading(true);
    axios.post("/api/menu/deleteitem", {
      itemId: itemData.itemId
    })
    .then(response => {
        console.log(`SUCCESS: ${response}`);
        setDelModalActive(false);
        window.location.reload();
    })
    .catch(error => {
        console.log(`An error occured: ${error}`)
        alert("Error Deleting Item");
        setIsLoading(false);
      })
    console.log('fake deleted')
  }


  return (
  <>
      <MenuEditModifyItem itemData={itemData} modalActive={editModalActive} setModalActive={editModalActiveFunc} />
      <div className={`fixed w-full h-full top-0 left-0 z-[200] bg-black/10 ${delModalActive ? "opacity-100 pointer-events-auto backdrop-blur-sm" : "opacity-0 pointer-events-none"} transition-all duration-300 flex items-center justify-center p-2`}>
        <div className="w-full h-fit bg-white max-w-[350px] max-h-[200px]  px-9 py-7 overflow-y-auto minimal-scrollbar rounded-md">
          <p className="text-sm opacity-70 font-medium text-center">Are you sure? This action cannot be undone.</p>
          <div className="mt-8 flex items-center justify-center gap-5">
            <button className="rounded-lg group border-[2px] focus:outline-none border-white" onClick={() => setDelModalActive(false)}><p className="w-full h-full bg-neutral-100 px-5 py-2 rounded-md">Cancel</p></button>
            <button ref={closeBtnRef} disabled={isLoading} className={`rounded-lg group p-0.5 border-[2px] focus:outline-none hover:border-primary-red border-white focus:border-primary-red ${ isLoading && "cursor-auto bg-red-700 opacity-70 !border-[0px]" }`} onClick={deleteItem}><p className="w-full h-full bg-primary-red px-5 py-2 rounded-md text-white">{isLoading ? "Loading" : "Delete"}</p></button>
          </div>
        </div>
      </div>


      <div className="flex w-full items-center justify-start gap-2">
        <button 
          onClick={() => {setDelModalActive(true); closeBtnRef?.current?.focus()} }
          className="p-2 border-[1.5px] border-neutral-300 rounded-md hover:bg-neutral-50">
          <Trash2
          size={18}
          opacity={0.4}
          />
        </button>
        <button 
          onClick={() => setEditModalActive(prev => true)}
          className="p-2 border-[1.5px] border-neutral-300 rounded-md hover:bg-neutral-50">
          <Edit
          size={18}
          opacity={0.4}
          />
        </button>
      </div>
  </>
  )
}

export default MenuEditInteractionDiv;
