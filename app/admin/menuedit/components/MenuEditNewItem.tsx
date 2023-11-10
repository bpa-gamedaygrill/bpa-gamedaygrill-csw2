"use client";
import React, { useState, useRef, useEffect } from 'react'

import { X } from "react-feather";

import MenuItem from '../../../../app/menu/components/MenuItem';


import SelectDropdown from '../../../../app/components/Select/SelectDropdown';
import { MenuCategoryFilterType } from '../../../../app/redux/features/menuCategoryFilterSlice';

const MenuEditNewItem = () => {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const [previewAvailable, setPreviewAvailable] = useState(false);

  const [modalActive, setModalActive] = useState<boolean>(false);
  const [closeModalActive, setCloseModalActive] = useState<boolean>(false);

  const [itemName, setItemName] = useState<string>("");
  const [itemNameError, setItemNameError] = useState<boolean>(false);

  const [itemDesc, setItemDesc] = useState<string>("");
  const [itemDescError, setItemDescError] = useState<boolean>(false);

  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageUrlError, setImageUrlError] = useState<boolean>(false);

  const [typeOfMeal, setTypeOfMeal] = useState<MenuCategoryFilterType>(null);

  const [itemPrice, setItemPrice] = useState<string>("");
  const [itemPriceError, setItemPriceError] = useState<boolean>(false);


  useEffect(() => {
    let valid = false;
    if (!(itemName.trim() == "")) {
      if (!(itemDesc.trim() == "")) {
        if (!(itemPrice.trim() == "")) {
          if (!(imageUrl.trim() == "")) {
            valid = true 
          }
        }
      }
    }
    if (valid) {
      setPreviewAvailable(true)
    } else {
      setPreviewAvailable(false);
    }
  }, [itemName, itemDesc, imageUrl, itemPrice])


  const updateTypeOfMeal = (value: MenuCategoryFilterType) => {
    setTypeOfMeal(() => value)
}

  const closeNewItemModal = () => {
    setCloseModalActive(false);
    setModalActive(false);

    setItemDesc("");
    setItemDescError(false);
    setItemName("")
    setItemNameError(false);
    setImageUrl("")
    setImageUrlError(false);
    setItemPrice("")
    setItemPriceError(false);
    setTypeOfMeal(null);
  }
  const closeDialogeInit = () => {
    setCloseModalActive(true);
    closeBtnRef.current?.focus();
  }
  
  const updateItemName = (e: any) => {
    setItemName(e.target.value);
    setItemNameError(false);
  }
  const updateItemDesc = (e: any) => {
    setItemDesc(e.target.value);
    setItemDescError(false);
  }
  const updateImageUrl = (e: any) => {
    setImageUrl(e.target.value);
    setImageUrlError(false);
  }
  const updateItemPrice = (e: any) => {
    setItemPrice(e.target.value);
    setItemPriceError(false);
  }
  return ( 
    <>

      <div className={`fixed w-full h-full top-0 left-0 z-[200] bg-black/10 ${closeModalActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-all duration-300 flex items-center justify-center p-2`}>
        <div className="w-full h-fit bg-white max-w-[350px] max-h-[200px]  px-9 py-7 overflow-y-auto minimal-scrollbar rounded-md">
          <p className="text-sm opacity-70 font-medium text-center">Are you sure? Your changes will be lost.</p>
          <div className="mt-8 flex items-center justify-center gap-5">
            <button className="rounded-lg group border-[2px] focus:outline-none border-white" onClick={() => setCloseModalActive(false)}><p className="w-full h-full bg-neutral-100 px-5 py-2 rounded-md">Cancel</p></button>
            <button ref={closeBtnRef} className="rounded-lg group p-0.5 border-[2px] focus:outline-none hover:border-primary-red border-white focus:border-primary-red" onClick={closeNewItemModal}><p className="w-full h-full bg-primary-red px-5 py-2 rounded-md text-white">Close</p></button>
          </div>
        </div>
      </div>
     

      <div className={`fixed w-full h-full top-0 left-0 z-[100] bg-black/20 ${modalActive ? "opacity-100 pointer-events-auto backdrop-blur-sm" : "opacity-0 pointer-events-none"} transition-all duration-500 flex items-center justify-center p-2`}>
        <div className="w-full h-full bg-white max-w-[450px] max-h-[500px] px-9 py-7 overflow-y-auto minimal-scrollbar rounded-lg">
          <div className="flex w-full items-center justify-between gap-3">
            <h1 className="font-semibold text-[1.35rem] tracking-tight opacity-80">New Menu Item</h1>
            <button onClick={closeDialogeInit}>
              <X
                size={20}
                opacity={0.5}
              />
            </button>
          </div>
          <div className="flex flex-col mt-12 justify-start items-center w-full gap-8">

            <div className="w-full flex flex-col items-start font-medium text-md justify-start text-neutral-700 gap-3">
              <p className={`${ itemNameError && "text-primary-red" }`}>Item Name*</p>
              <input type='text' onChange={updateItemName} value={itemName} placeholder='Enter your name' className="px-4 py-2.5 bg-white border-[1px] border-neutral-200 rounded-md focus:outline-none focus:border-neutral-300 w-full text-neutral-700 font-medium" />
            </div>
            <div className="w-full flex flex-col items-start font-medium text-md justify-start text-neutral-700 gap-3">
              <p className={`${ itemDescError && "text-primary-red" }`}>Item Description*</p>
              <textarea  onChange={updateItemDesc} value={itemDesc} placeholder='Enter your name' className="px-4 py-2.5 bg-white border-[1px] border-neutral-200 rounded-md focus:outline-none focus:border-neutral-300 w-full min-h-[100px] max-h-[100px] text-neutral-700 font-medium" />
            </div>

            <div className="w-full flex flex-col items-start font-medium text-md justify-start text-neutral-700 gap-3">
              <p className={`${ imageUrlError && "text-primary-red" }`}>Item Image Url*</p>
              <input type='text' onChange={updateImageUrl} value={imageUrl} placeholder='Enter your name' className="px-4 py-2.5 bg-white border-[1px] border-neutral-200 rounded-md focus:outline-none focus:border-neutral-300 w-full text-neutral-700 font-medium" />
            </div>

            <div className="w-full flex flex-col items-start font-medium text-md justify-start text-neutral-700 gap-3">
              <p className={`${ itemPriceError && "text-primary-red" }`}>Item Price*</p>
              <input type='text' onChange={updateItemPrice} value={itemPrice} placeholder='Enter your name' className="px-4 py-2.5 bg-white border-[1px] border-neutral-200 rounded-md focus:outline-none focus:border-neutral-300 w-full text-neutral-700 font-medium" />
            </div>

            <div className="flex flex-col w-full justify-start items-start gap-3">
              <p className="font-medium opacity-80">Type of Meal*</p>
              <SelectDropdown 
                selectPrompt='Select a category'
                includesResetButton
                valueUpdateFunction={updateTypeOfMeal}
                customParentStyles='z-20 w-full mb-3'
                state={typeOfMeal}
                options={
                    [
                      {
                        name: 'Appetizers',
                        value: 'appetizer'
                      },
                      {
                        name: 'Entrees',
                        value: 'entree'
                      },
                      {
                        name: 'Desserts',
                        value: 'dessert'
                      },
                      {
                        name: 'Beverages',
                        value: 'beverage'
                      },
                    ]
                  }
              />
            </div>

            <button className="w-full py-2 px-4 bg-primary-red hover:bg-red-700 text-white font-semibold tracking-tight rounded-md">
              Create
            </button>

            <div className="flex flex-col items-center justify-start gap-5 w-full">
              <p className="text-lg font-semibold tracking-tight self-start">Item Preview:</p>
              { previewAvailable ? <MenuItem usedForPreview itemData={ { itemName: itemName, itemDescription: itemDesc, itemPrice: itemPrice, imageUrl: imageUrl, id: "" } } /> : <p className="text-md font-medium opacity-70 self-start">No Preview Available. Please fill out all fields.</p> }
            </div>



          </div>
        </div>
      </div>
      <button className="bg-primary-red hover:bg-red-700 text-white/90 font-semibold tracking-tight px-4 py-2 rounded-full" onClick={() => setModalActive(true)}>
        New Item 
      </button>
    </>
  )
}

export default MenuEditNewItem;
