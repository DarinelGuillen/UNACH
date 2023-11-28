import React from 'react';
import Header2 from "../components/atoms/header2";
import CenterPreview from '../components/organism/CenterPreview';
import Footer from "../components/atoms/Footer";


function Review() {
    return (
        <>
          <div className="flex flex-col min-h-screen items-center bg-white font-sans">
              <Header2 ShowMore={false} />

              {/* Your main content goes here */}
              <div className="flex-grow overflow-y-auto w-[96%]   my-9 px-9 ">
                  <CenterPreview/>
              </div>

              <Footer />
          </div>
      </>
  );
}

export default Review;
