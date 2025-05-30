import Head from "next/head";
import { NextSeo } from "next-seo";

import { AppConfig } from "@/utils/AppConfig";

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => (
  <>
    <Head>
      <meta charSet="UTF-8" key="charset" />
      <title>
        Reliable Taxi Booking Service from Bhopal to All India | Safe &
        Affordable Rides
      </title>
      <meta
        name="description"
        content="Book your taxi from Bhopal to any city in India with ease. Trusted, safe, and affordable taxi service for outstation and local travel. 24/7 booking support and professional drivers."
      />
      <meta
        name="keywords"
        content="Taxi booking Bhopal, Outstation taxi Bhopal, Bhopal to Delhi taxi, Affordable taxi service India, Long distance taxi booking, Reliable taxi service Bhopal, India taxi booking online, Taxi service near me, Safe taxi booking India, Book taxi online India"
      />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1"
        key="viewport"
      />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" key="apple" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
        key="icon32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
        key="icon16"
      />
      <link rel="icon" href="/favicon.ico" key="favicon" />
    </Head>
    <NextSeo
      title={props.title}
      description={props.description}
      canonical={props.canonical}
      openGraph={{
        title: props.title,
        description: props.description,
        url: props.canonical,
        locale: AppConfig.locale,
        site_name: AppConfig.site_name,
      }}
    />
  </>
);

export { Meta };
