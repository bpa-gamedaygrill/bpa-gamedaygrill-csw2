"use client";
import React, { useEffect, useState } from 'react'
import BarChart from './BarChart';
import fetchAllTimeUsers from '../../../../libs/actions/user/fetchAllTimeUsers';
import fetchLastWeek from '../../../../libs/actions/user/fetchLastWeek';
import SelectDropdown from '../../../../app/components/Select/SelectDropdown';

interface TransformedData {
  date: string;
  usersGained: number;
}
const AnalyticsCharts = () => {
  const [usersDataset, setUsersDataset] = useState<{ id: string; fullName: string; email: string; hashedPassword: string; dateCreated: Date; }[]>();
  const [ordersDataset, setOrdersDataset] = useState<{ id: string; fullName: string; email: string; hashedPassword: string; dateCreated: Date; }[]>()
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchTimeline, setSearchTimeline] = useState<"alltime" | "lastweek">("lastweek");
  const updateUsersDatasetWithAlltime = async() => {
    setIsLoading(prev => true)
    let userData = await fetchAllTimeUsers()
    userData = userData.sort(function(a,b){return a.dateCreated.getTime() - b.dateCreated.getTime()})
    setUsersDataset(userData);
    setIsLoading(prev => false);
  }
  const updateUsersDatasetWithLastweek = async() => {
    setIsLoading(prev => true)
    let userData = await fetchLastWeek()
    userData = userData.sort(function(a,b){return a.dateCreated.getTime() - b.dateCreated.getTime()})
    setUsersDataset(userData);
    setIsLoading(prev => false);
  }

  const updateOrdersDatasetWithAlltime = async() => {
    setIsLoading(prev => true)
    let userData = await fetchAllTimeUsers()
    userData = userData.sort(function(a,b){return a.dateCreated.getTime() - b.dateCreated.getTime()})
    setOrdersDataset(userData);
    setIsLoading(prev => false);
  }
  const updateOrdersDatasetWithLastweek = async() => {
    setIsLoading(prev => true)
    let userData = await fetchLastWeek()
    userData = userData.sort(function(a,b){return a.dateCreated.getTime() - b.dateCreated.getTime()})
    setUsersDataset(userData);
    setIsLoading(prev => false);
  }


  useEffect(() => {
    if (searchTimeline=="alltime") {
      updateUsersDatasetWithAlltime()
    }
    else if (searchTimeline=="lastweek") {
      updateUsersDatasetWithLastweek();
    }
  }, [searchTimeline])
  const transformedData: TransformedData[] = (usersDataset ?? []).reduce(
    (acc, entry: any) => {
      const date = new Date(entry.dateCreated).toISOString().split('T')[0];
      const existingEntryIndex = acc.findIndex((item) => item.date === date);

      if (existingEntryIndex !== -1) {
        acc[existingEntryIndex].usersGained += 1;
      } else {
        acc.push({ date, usersGained: 1 });
      }
      return acc;
    },
    [] as TransformedData[]
  );
  const chartData = {
    labels: transformedData?.map((data) => data.date),
    datasets: [
      {
        label: "Users Gained",
        data: transformedData?.map((data) => data.usersGained)
      }
    ]
  }
  const updateSearchTimeline = ( value: "alltime" | "lastweek" ) => {
    setSearchTimeline(prev => value);
  }
  return (
  <>
      <SelectDropdown 
        selectPrompt='Last Week'
        valueUpdateFunction={updateSearchTimeline}
        customParentStyles='z-20 w-fit  mb-6'
        options={
            [
              {
                name: 'All Time',
                value: 'alltime'
              },
              {
                name: 'Last Week',
                value: 'lastweek'
              },
            ]
          }
      />
      { isLoading ? 
      <div className={`animate-pulse h-[395px] rounded-lg  bg-neutral-50 sm:flex-row gap-0 sm:gap-5 relative w-full flex items-center justify-center`}>
            <div role="status">
              <svg aria-hidden="true" className="w-6 h-6 text-neutral-200 animate-spin  fill-primary-red" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
          </div>

      </div>

      : 
        <div className="p-5 border-[1px] border-neutral-100 rounded-lg">
         <BarChart chartData={chartData} titleText='New Users by Day' />
        </div>
       }
        </>
  )
}

export default AnalyticsCharts
