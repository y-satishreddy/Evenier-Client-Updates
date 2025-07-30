import React from "react";
import PrivacyAndPolicyContent from "../components/PrivacyAndPolicy/PrivacyAndPolicyContent";
import PrivacyAndPolicyBanner from "../components/PrivacyAndPolicy/PrivacyAndPolicyBanner";
import Header from "../components/Header/Header";
const PrivacyAndPolicy = () => {
  return (
    <>
      <Header />
      <PrivacyAndPolicyBanner />
      <PrivacyAndPolicyContent />
    </>
  );
};

export default PrivacyAndPolicy;
