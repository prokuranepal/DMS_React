import React from 'react';
import CustomerCell from './CustomerCell';

let counter = 0;

function createData(name, userId, image, order) {
  counter += 1;
  return {id: counter, name, userId, image, order};
}

const data = [
  createData('John Smith', 'Co-Founder', "https://via.placeholder.com/150x150", '3'),
  createData('Alex Dolgove', 'CEO', "https://via.placeholder.com/150x150", '1'),
  createData('Domnic Brown', 'Co-Founder', "https://via.placeholder.com/150x150", '0'),
];

const CustomerTable = () => {

  return (

    <table className="default-table table table-sm table-responsive-sm table-hover">
      <tbody>
      {data.map(data => {
        return (
          <CustomerCell key={data.id} data={data}/>
        );
      })}
      </tbody>
    </table>
  );
};

export default CustomerTable;