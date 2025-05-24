import Link from "next/link";
import React from "react";
import { footerBannerData } from "@/data/content";
import Heading from "@/shared/Heading/Heading";

const FooterBanner = () => {
  return (
    <div className="mx-auto rounded-2xl bg-button-primary py-16">
      <Heading
        className="mb-5"
        desc={footerBannerData.descriptionOne}
        isMain
        isCenter
      >
        <Link href={"tel:+917999714860"}>
          {footerBannerData.heading}
          <br />
          {footerBannerData.phoneText}
        </Link>
      </Heading>
      <p className="mx-auto w-[80%] text-center md:w-[50%]">
        {footerBannerData.descriptionTwo}
      </p>
    </div>
  );
};

export default FooterBanner;
