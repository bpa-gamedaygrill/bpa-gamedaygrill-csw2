import React from 'react'

import AnalyticsCharts from './AnalyticsCharts'

const AnalyticsContent = () => {
  return (
  <>
      <main className="w-[100vw]  relative min-h-[100vh] h-full flex items-start flex-row justify-start gap-4  max-h-[100vh] overflow-y-auto">
        <section className="flex relative items-center justify-center gap-5 flex-row px-12 w-full py-5">
          <AnalyticsCharts />
        </section>


      </main>
  </>
  )
}

export default AnalyticsContent
