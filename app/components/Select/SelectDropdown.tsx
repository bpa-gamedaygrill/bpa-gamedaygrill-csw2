"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'react-feather';

export interface SelectDropdownInterface {
  valueUpdateFunction: (value: any) => void;
  selectPrompt: string;
  options: { name: string, value: string }[];
  fullWidth?: boolean;
  includesResetButton?: boolean;
  customParentStyles?: string;
  customReduxSlice?: any;
  state?: any;
}

const SelectDropdown: React.FC<SelectDropdownInterface> = ({ options, includesResetButton, fullWidth, selectPrompt, valueUpdateFunction, customParentStyles, customReduxSlice, state }) => {
  
  const [displayText, setDisplayText] = useState<string>(selectPrompt);
  const [value, setValue] = useState<string | null>(null);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const optionStyles: string = "w-full px-3 text-sm py-3 bg-white rounded-sm cursor-pointer hover:bg-neutral-100 text-neutral-600";

  const handleSetValue = (e: any) => {
    setIsOpened(() => false);
    // console.log(e.target)
    setValue(() => e.target.getAttribute('data-value') as string)
    setDisplayText(() => e.target.getAttribute('data-name') as string)
  }

  useEffect(() => {
    if (customReduxSlice===null) {
      setIsOpened(() => false);
      setValue(() => null);
      setDisplayText(() => selectPrompt);
    } else if (!(customReduxSlice==value)) {
      console.log("They dont match")
      setIsOpened(() => false);
      setValue(() => customReduxSlice);
      const display = options.find(category => category.value === customReduxSlice)?.name;
      setDisplayText(() => display as any);
    }
  }, [customReduxSlice])


  useEffect(() => {
    if (state==null || !state) {
      reset();
    }
  }, [state])

  useEffect(() => {
    if(value) {
      valueUpdateFunction(value);
    } else {
      valueUpdateFunction(null);
    }
  }, [value])

  const reset = () => {
    setIsOpened(() => false)
    setValue(() => null);
    setDisplayText(() => selectPrompt);
  }

  return (
    <>
      <div className={`relative ${customParentStyles} `}> 
        <div className={`${ fullWidth ? "w-full" : "min-w-[150px]" } bg-white cursor-pointer border-[1px] border-neutral-200 select-none rounded-md px-4 py-2 flex z-10 items-center justify-center gap-2`} onClick={() => setIsOpened(() => !isOpened)}>
          <p className="text-neutral-600">{ displayText }</p>
          <ChevronDown
          size={15}
            color='rgb(82, 82, 82)'
          className={`${ isOpened && "rotate-180"} transition-all duration-100 ease-out`}
          />
        </div>

        <div className={`absolute origin-top w-full z-40 transition-all duration-150 ease-in-out bg-white top-[100%] left-0 rounded-md px-1 py-1 border-[1px] border-neutral-200 max-h-[150px] overflow-y-auto minimal-scrollbar flex flex-col items-center justify-start gap-1 ${ isOpened ? "mt-1 pointer-events-all scale-100 opacity-100" : "rotatex-sm pointer-events-none opacity-0 !scale-95" } `}>
          { options.map(function(data, index) {
            return (
              <>
                <p className={optionStyles} key={index} data-value={data.value} data-name={data.name} onClick={handleSetValue}>{ data.name }</p>
              </>
            )
          }) }
          { includesResetButton && <> <div className="w-full !h-[1px] bg-neutral-200 my-2" ><p className="opacity-0">_</p></div> <p className={`${optionStyles} !py-2 mb-2`} onClick={reset}>Reset</p> </> }
        </div>
      </div>
    </>
  )
}

export default SelectDropdown;
