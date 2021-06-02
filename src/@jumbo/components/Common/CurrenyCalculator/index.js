import React from 'react';
import CurrencyCalculationDetails from './CurrencyCalculationDetails';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';

const CurrencyCalculator = ({ title, titleProps, className, calculatedValue, onCalculate, onReset, currencies }) => {
  return (
    <CmtCard className={className}>
      <CmtCardHeader title={title} titleProps={titleProps} />
      <CmtCardContent>
        <CurrencyCalculationDetails
          calculatedValue={calculatedValue}
          onCalculate={onCalculate}
          onReset={onReset}
          currencies={currencies}
        />
      </CmtCardContent>
    </CmtCard>
  );
};

export default CurrencyCalculator;
