import React from 'react';


const LanguageItem = ({language, switchLanguage, handleRequestClose}) => {
  const {icon, name} = language;
  return (
    <li className="pointer" onClick={() => {
      handleRequestClose();
      switchLanguage(language);
    }} data-test="liClick">
      <div className="d-flex align-items-center">
        <i className={`flag flag-24 flag-${icon}`}/>
        <h4 className="mb-0 ml-2" data-test="languageName">{name}</h4>
      </div>
    </li>
  );
};

export default LanguageItem;
