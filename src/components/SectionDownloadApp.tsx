import React from "react";

import { downloadSectionData } from "@/data/content";

import DownloadCard from "./DownloadCard";

const SectionDownloadApp = () => {
  return (
    <div className="container items-center justify-between space-y-5">
      <div className="space-y-4 text-neutral-100">
        <div
          className="w-100 text-2xl text-center font-medium lg:text-4xl"
          style={{ lineHeight: "1.1em" }}
        >
          {downloadSectionData.headingStart}{" "}
          <span className="text-button-primary">
            {downloadSectionData.spanText}
          </span>{" "}
          {downloadSectionData.headingEnd}
        </div>
        <div className="text-md text-neutral-500 text-center">
          {downloadSectionData.description}
        </div>
        <div className="grid w-full grid-cols-3 divide-x divide-neutral-500">
          {downloadSectionData.stats.map((stat) => (
            <div key={stat.title} className={"px-5"}>
              <h1 className="font-medium text-center text-4xl py-3">
                {stat.title}
              </h1>
              <p className="text-sm text-center text-neutral-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionDownloadApp;
