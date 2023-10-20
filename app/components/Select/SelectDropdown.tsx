"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'react-feather';

export interface SelectDropdownInterface {
  valueUpdateFunction: (value: string) => void;
  selectPrompt: string;
  options: { name: string, value: string }[];
  fullWidth?: boolean;
}

const SelectDropdown: React.FC<SelectDropdownInterface> = ({ options, fullWidth, selectPrompt, valueUpdateFunction }) => {
  
  const [displayText, setDisplayText] = useState<string>(selectPrompt);
  const [value, setValue] = useState<string | null>(null);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const optionStyles: string = "w-full px-3 py-3 bg-white rounded-sm cursor-pointer hover:bg-neutral-100 text-neutral-600";

  const handleSetValue = (e: any) => {
    setIsOpened(() => false);
    setValue(() => e.target.id as string)
  }

  useEffect(() => {
    if(value) {
      setDisplayText(value);
      valueUpdateFunction(value);
    }
  }, [value])

  return (
    <>
      <div className="relative w-fit"> 
        <div className={`${ fullWidth ? "w-full" : "min-w-[150px]" } bg-white cursor-pointer border-[1px] border-neutral-200 select-none rounded-md px-4 py-2 flex items-center justify-center gap-2`} onClick={() => setIsOpened(() => !isOpened)}>
          <p className="text-neutral-600">{ displayText }</p>
          <ChevronDown
          size={15}
            color='rgb(82, 82, 82)'
          className={`${ isOpened && "rotate-180"} transition-all duration-100 ease-out`}
          />
        </div>

        <div className={`absolute origin-top w-full transition-all duration-150 ease-in-out bg-white top-[100%] left-0 rounded-md px-1 py-1 border-[1px] border-neutral-200 max-h-[150px] overflow-y-auto minimal-scrollbar flex flex-col items-center justify-start gap-1 ${ isOpened ? "mt-1 pointer-events-all scale-100 opacity-100" : "rotatex-sm pointer-events-none opacity-0 !scale-95" } `}>
          { options.map(function(data, index) {
            return (
              <>
                <p className={optionStyles} key={index} id={data.value} onClick={handleSetValue}>{ data.name }</p>
              </>
            )
          }) }
        </div>
      </div>
    </>
  )
}

export default SelectDropdown;
