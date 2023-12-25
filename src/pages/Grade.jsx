import React from 'react';
import Header2 from "../components/atoms/header2";
import CenterGrade from '../components/organism/CenterGrade';
import Footer from "../components/atoms/Footer";


function Review() {
    return (
        <>
          <div className="flex flex-col min-h-screen items-center bg-white font-sans">
              <Header2 ShowMore={false} />

                  <CenterGrade/>

              <Footer />
          </div>
      </>
  );
}

export default Review;
