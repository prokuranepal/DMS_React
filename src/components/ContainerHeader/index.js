import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';

const getDisplayString = (sub) => { //if sub = harry-potter, docs
  const arr = sub.split("-"); // arr[0]= harry , 2= potter
  if (arr.length > 1) {
    return arr[0].charAt(0).toUpperCase() + arr[0].slice(1) + " " + arr[1].charAt(0).toUpperCase() + arr[1].slice(1)
  //Harry Potter
  } else {
    return sub.charAt(0).toUpperCase() + sub.slice(1)  //Docs
  }

};
const getUrlString = (path, sub, index) => { //hello.com/ht/docs/harry-potter, sub=docs(index=2), sub=
  if (index === 0) {
    return '#/';
  } else {
    return '#/' + path.split(sub)[0] + sub; //#/hello.com/ht/docs 
  }
};

const ContainerHeader = ({title, match}) => {
  const path = match.path.substr(1);
  const subPath = path.split('/');
  return (
    <div className="page-heading d-sm-flex justify-content-sm-between align-items-sm-center">
      <h2 className="title mb-3 mb-sm-0">{title}</h2>

      <Breadcrumb className="mb-0" tag="nav">
        {subPath.map((sub, index) => {
            return <BreadcrumbItem active={subPath.length === index + 1}
                                   tag={subPath.length === index + 1 ? "span" : "a"} key={index}
                                   href={getUrlString(path, sub, index)}
                                   data-test="breadCrumb-component">{getDisplayString(sub)}</BreadcrumbItem>
          }
        )}
      </Breadcrumb>
    </div>
  )
};

const test_data="hello.com/ht/docs/harry-potter"
const subData = test_data.split('/');
export default ContainerHeader;
it('getUrlString test', () => {
  expect(getUrlString(test_data, subData[0],0)).toEqual("#/");
  expect(getUrlString(test_data, subData[1],1)).toEqual("#/hello.com/ht");
  expect(getUrlString(test_data, subData[2],2)).toEqual("#/hello.com/ht/docs");
  expect(getUrlString(test_data, subData[3],3)).toEqual("#/hello.com/ht/docs/harry-potter");

});

it('getDisplayString test', () => {
  expect(getDisplayString(subData[0])).toEqual("Hello.com");
  expect(getDisplayString(subData[1])).toEqual("Ht");
  expect(getDisplayString(subData[2])).toEqual("Docs");
  expect(getDisplayString(subData[3])).toEqual("Harry Potter");

});