import ToDoList from './index'
import React from 'react';
import renderer from 'react-test-renderer';
const dummy_data = {
    toDos: [
        {
            id: 1
        }, {
            id: 2
        }, {
            id: 3
        }
    ],
    onTodoSelect: jest.fn(),
    onTodoChecked: jest.fn(),
    onMarkAsStart: jest.fn(),
    width: 300
}

describe("<ToDoList />", () => {
        test("Snapshot test for ToDoList", () => {
            const tree = renderer.create(<ToDoList {...dummy_data} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
     
    });