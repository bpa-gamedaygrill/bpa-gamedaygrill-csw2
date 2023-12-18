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
      <div className={`animate-pulse h-[395px] rounded-lg flex items-center flex-col bg-neutral-100 sm:flex-row gap-0 sm:gap-5 relative w-full `}>
      </div>

      : 
        <div className="p-5 border-[1px] border-neutral-100 rounded-lg">
         <BarChart chartData={chartData} />
        </div>
       }
        </>
  )
}

export default AnalyticsCharts
