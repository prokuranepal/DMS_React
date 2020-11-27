import React from 'react';
import AssignmentTableCell from './AssignmentTableCell';

let counter = 0;

function createData(name, description, image, task, status) {
  counter += 1;
  return {id: counter, name, description, image, task, status};
}

const data = [
  createData('John Smith', 'Efficiently rendering large', "https://via.placeholder.com/150x150", '25/50', 'In Progress'),
  createData('Alex Dolgove', 'At Tata Projects, we are always striving', "https://via.placeholder.com/150x150", '50/50', 'Completed'),
  createData('Domnic Brown', 'It was popularised in the 1960s with the', "https://via.placeholder.com/150x150", '75/100', 'In Progress'),
  createData('Domnic Harris', 'Many desktop publishing packages and web', "https://via.placeholder.com/150x150", '29/65', 'Cancelled'),
  createData('Garry Sobars', 'There are many variations of passages of', "https://via.placeholder.com/150x150", '20/120', 'In Progress'),
  createData('Stella Johnson', 'Richard McClintock, a Latin professor', "https://via.placeholder.com/150x150", '29/56', 'In Progress'),
];

const AssignmentTable = () => {

  return (
    <div className="table-responsive-material">
      <table className="default-table assignment-table table">
        <thead>
        <tr>
          <th>Assignments</th>
          <th>Lead</th>
          <th className="text-center">Evolution</th>
          <th className="text-center">No. Tasks</th>
          <th className="status-cell text-right">Status</th>
        </tr>
        </thead>

        <tbody>
        {data.map(data => {
          return (
            <AssignmentTableCell key={data.id} data={data}/>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default AssignmentTable;