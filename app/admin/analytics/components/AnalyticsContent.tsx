import React from 'react'

import AnalyticsCharts from './AnalyticsCharts'

const AnalyticsContent = () => {
  return (
  <>
      <main className="w-full flex items-start flex-col md:flex-row justify-between gap-4">
        <section className="flex flex-col w-full md:max-w-[65%]">
          <AnalyticsCharts />
        </section>
        <div className="w-full h-full px-4 py-5 border-[1px] border-neutral-100 rounded-lg flex flex-col md:max-w-[17.5%]">

        </div>
        <div className="w-full h-full flex flex-col md:max-w-[17.5%]">

        </div>
      </main>
  </>
  )
}

export default AnalyticsContent
