import React from "react";
import Avatar from '@material-ui/core/Avatar';

const userImageList = [
  {
    id: 1,
    image: "https://via.placeholder.com/150x150",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150x150",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150x150",

  },
  {
    id: 4,
    image: "https://via.placeholder.com/150x150",
    name: 'Mila Alba',
    rating: '5.0',
    deals: '27 Deals'
  },
]

export const aboutList = [
  {
    id: 1,
    title: 'Works at',
    icon: 'city-alt',
    userList: '',
    desc: ['G-axon Tech Pvt. Ltd.']
  },
  {
    id: 2,
    title: 'Birthday',
    icon: 'cake',
    userList: '',
    desc: ['Oct 25, 1984']
  },
  {
    id: 3,
    title: 'Went to',
    icon: 'graduation-cap',
    userList: '',
    desc: ['Oxford University']
  },
  {
    id: 4,
    title: 'Lives in London',
    icon: 'home',
    userList: '',
    desc: ['From Switzerland']
  },
  {
    id: 5,
    title: '4 Family Members',
    icon: 'group-work',
    userList: [<ul className="list-inline mb-0" key={1}>
      {userImageList.map((user, index) =>
        <li className="mb-2 list-inline-item" key={index}>
          <Avatar alt=".." className="size-30" src={user.image}/>
        </li>
      )
      }
    </ul>],
    desc: ''
  },
];

export const eventList = [
  {
    id: 1,
    image: "https://via.placeholder.com/575x480",
    title: 'Sundance Film Festival.',
    address: 'Downsview Park, Toronto, Ontario',
    date: 'Feb 23, 2019',
  },
  {
    id: 2,
    image: "https://via.placeholder.com/575x480",
    title: 'Underwater Musical Festival.',
    address: 'Street Sacramento, Toronto, Ontario',
    date: 'Feb 24, 2019',
  },
  {
    id: 3,
    image: "https://via.placeholder.com/575x480",
    title: 'Village Feast Fac',
    address: 'Union Street Eureka',
    date: 'Oct 25, 2019',
  }
];


export const contactList = [
  {
    id: 1,
    title: 'Email',
    icon: 'email',
    desc: [<span className="jr-link" key={1}>kiley.brown@example.com</span>]
  },
  {
    id: 2,
    title: 'Web page',
    icon: 'link',
    desc: [<span className="jr-link" key={2}>example.com</span>]
  }, {
    id: 3,
    title: 'Phone',
    icon: 'phone',
    desc: ['+1-987 (454) 987']
  },
];

export const friendList = [
  {
    id: 1,
    image: "https://via.placeholder.com/150x150",
    name: 'Chelsea Johns',
    status: 'online'

  },
  {
    id: 2,
    image: "https://via.placeholder.com/150x150",
    name: 'Ken Ramirez',
    status: 'offline'
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150x150",
    name: 'Chelsea Johns',
    status: 'away'

  },
  {
    id: 4,
    image: "https://via.placeholder.com/150x150",
    name: 'Ken Ramirez',
    status: 'away'
  },
];
