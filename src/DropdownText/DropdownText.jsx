import React, { useState } from 'react';
import './dropdownText.css';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const DropdownText = ({ datas, type }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <>
      {datas.map(({ id, title, content, equipments }) => (
        <article
        className={`container_dropdown ${showContent ? 'open' : ''}`}
        
        key={id}
      >
          <span className='container_title_arrow'>
            <h1 className='dropdown_title'>{title}</h1>
            <span className='container_arrow'>
              {showContent ? <BsChevronUp onClick={toggleContent}/> : <BsChevronDown onClick={toggleContent}/>}
            </span>
          </span>
          {type === 'description' && showContent && <p className='dropdown_content'>{content}</p>}
          {type === 'list' && showContent && (
            <ul className='dropdown_content'>
              {equipments.map((item) => (
                <li key={item} className='dropdown_element'>{item}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </>
  );
};

export default DropdownText;
