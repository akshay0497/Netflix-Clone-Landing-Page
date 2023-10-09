import React from 'react'
import NetflixHeader from '../Header'
import NetFirstSection from '../FirstSection'
import NetSecondSection from '../SectionSection'
import NetThirdSection from '../ThirdSection'
import NetFourthSection from '../FourthSection'
import NetFifthSection from '../FifthSection'
import NetSixthSection from '../SixthSection'
import NetFooter from '../Footer'
import './HomePage.css'
const HomePage = () => {
  return (
    <>
    <div id="sections">
        <div
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 100%)",
          }}
        >
          <NetflixHeader />
          <NetFirstSection />
        </div>
      </div>
      <NetSecondSection />
      <NetThirdSection />
      <NetFourthSection />
      <NetFifthSection />
      <NetSixthSection />
      <NetFooter />
    </>
  )
}

export default HomePage
