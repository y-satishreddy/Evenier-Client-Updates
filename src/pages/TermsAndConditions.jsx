import React from "react";
import TermsAndConditonsContent from "../components/TermsAndConditions/TermsAndConditionsContent";
import TermsAndConditonsBanner from "../components/TermsAndConditions/TermsAndConditionsBanner";
import Header from "../components/Header/Header";
const PrivacyAndPolicy = () => {
  return (
    <>
      <Header />
      <TermsAndConditonsBanner />
      <TermsAndConditonsContent />
    </>
  );
};

export default PrivacyAndPolicy;
