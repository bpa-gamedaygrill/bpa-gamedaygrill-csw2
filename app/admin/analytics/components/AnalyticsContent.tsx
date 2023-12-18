import React from 'react'

import AnalyticsCharts from './AnalyticsCharts'

const AnalyticsContent = () => {
  return (
  <>
      <main className="w-full flex items-start justify-between gap-4">
        <section className="flex flex-col w-full max-w-[65%]">
          <AnalyticsCharts />
        </section>
        <div className="w-full h-full flex flex-col max-w-[17.5%]">

        </div>
        <div className="w-full h-full flex flex-col max-w-[17.5%]">

        </div>
      </main>
  </>
  )
}

export default AnalyticsContent
