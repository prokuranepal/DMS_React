import Rainy from '../assets/rainy.png';
import Windy from '../assets/windy.png';
import Shower from '../assets/shower.png';
import Sunny from '../assets/sunny.png';
const weather = [
    {
        place: "Dharan",
        temp: '30 C',
        min: 10,
        max: 37,
        wind: '2',
        humidity: '50',
        description: "Moderate or Heavy Rain Shower",
        image: Rainy,
        date: "Wed 22 August"
    },
    {
        place: "Biratnagar",
        temp: '30 C',
        min: 10,
        max: 37,
        wind: '2',
        humidity: '50',
        description: "Sunny Bright Day",
        image: Sunny,
        date: "Wed 22 August"
    },
    {
        place: "Damak",
        temp: '30 C',
        min: 10,
        max: 37,
        wind: '2',
        humidity: '50',
        description: "Light Rain Shower",
        image: Shower,
        date: "Wed 22 August"
    },
    {
        place: "Dhankuta",
        temp: '30 C',
        min: 10,
        max: 37,
        wind: '2',
        humidity: '50',
        description: "Moderate Wind Blowing",
        image: Windy,
        date: "Wed 22 August"
    }
]

export default weather;