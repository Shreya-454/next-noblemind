"use client";
import Aboutus from "@/components/Aboutus";
import BackToTop from "@/components/BackToTop";
import Choose from "@/components/Choose";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Subscribe from "@/components/Subscribe";
import Head from 'next/head';
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 2000);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "linear",
    });
  }, []);
  return (
    <div>
     <Head>
        <title>Noble mind</title>
        <meta name="title" content="Noble mind" />
        <meta
          name="description"
          content="Inspiring Innovation, Elevating Solutions – Noble Mind"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Noble mind" />
        <meta
          property="og:description"
          content="Inspiring Innovation, Elevating Solutions – Noble Mind"
        />
        <meta
          property="og:image"
          content="https://thumbs2.imgbox.com/ea/c8/XJwA2brM_t.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Noble mind" />
        <meta
          property="twitter:description"
          content="Inspiring Innovation, Elevating Solutions – Noble Mind"
        />
        <meta
          property="twitter:image"
          content="https://thumbs2.imgbox.com/ea/c8/XJwA2brM_t.png"
        />
      </Head>
      {data ? (
        <div>
          <Preloader />
        </div>
      ) : (
        <div className=" overflow-x-clip">
          <Header />
          <Aboutus />
          <Choose />
          <Contact />
          <Faq />
          <Subscribe />
          <Footer />
          <BackToTop />
        </div>
      )}
    </div>
  );
}
