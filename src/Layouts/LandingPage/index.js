import React from 'react'
import NetflixHeader from '../../Pages/Header'
import NetFirstSection from '../../Pages/FirstSection'
import NetSecondSection from '../../Pages/SectionSection'
import NetThirdSection from '../../Pages/ThirdSection'
import NetFourthSection from '../../Pages/FourthSection'
import NetFifthSection from '../../Pages/FifthSection'
import NetSixthSection from '../../Pages/SixthSection'
import NetFooter from '../../Pages/Footer'
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
