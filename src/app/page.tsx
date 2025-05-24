import React from "react";

import AboutUs from "@/components/AboutUs";
import LocationSlider from "@/components/LocationSlider";
import SectionBenefits from "@/components/SectionBenefits";
import SectionDownloadApp from "@/components/SectionDownloadApp";
import SectionHeader from "@/components/SectionHeader";
import SectionReviews from "@/components/SectionReviews";

const page = () => {
  return (
    <div className="relative">
      <div className="rounded-2xl bg-custom-gray py-20">
        <SectionHeader />
      </div>

      <div className="rounded-b-2xl bg-custom-black pb-20 pt-20">
        <SectionDownloadApp />
      </div>

      <div className="py-20">
        <SectionBenefits />
      </div>

      <div className="rounded-2xl bg-custom-gray py-24">
        <AboutUs />
      </div>

      {/* <div className="py-24">
        <SectionDemo />
      </div> */}

      {/* <div className="rounded-2xl bg-custom-black pb-1 pt-24 md:h-[45vh] md:pb-0 lg:h-[85vh]">
        <SectionFeatures />
      </div> */}

      {/* <div className="pb-24 pt-32 md:mt-32 lg:mt-72">
        <SectionPricing />
      </div> */}

      <div className="relative mb-28 mt-7 bg-custom-black">
        <LocationSlider />
      </div>

      <div className="container mb-28">
        <SectionReviews />
      </div>

      {/* <div className="rounded-2xl bg-custom-gray py-24">
        <SectionDrivers />
      </div> */}

      {/* <div className="py-24">
        <SectionBlogs />
      </div> */}
    </div>
  );
};

export default page;
