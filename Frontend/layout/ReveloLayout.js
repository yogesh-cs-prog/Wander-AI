"use client";
import EmbedPopup from "@/components/popup/EmbedPopup";
import ImageView from "@/components/popup/ImageView";
import { roveloUtility } from "@/utility";
import { useEffect } from "react";
import niceSelect from "react-nice-select";
import Footer from "./Footer";
import Header from "./Header";
const ReveloLayout = ({ children, header, footer, insta, sideBar }) => {
  useEffect(() => {
    roveloUtility.animation();
    roveloUtility.fixedHeader();
  }, []);

  useEffect(() => {
    return () => {
      niceSelect();
    };
  }, []);

  return (
    <div className={`page-wrapper ${sideBar ? "for-sidebar-menu" : ""}`}>
      <EmbedPopup />
      <ImageView />
      <Header header={header} />
      {children}
      <Footer footer={footer} insta={insta} />
    </div>
  );
};
export default ReveloLayout;
