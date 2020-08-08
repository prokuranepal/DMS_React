export const dashboardData = {
    cardData: { drones: 10, activeDrones: 2, deliveries: 300, subHealthPosts: 10 },
    graphs: {
        hospital: [
            { name: 'Jan', deliveries: 400 },
            { name: 'Feb', deliveries: 300 },
            { name: 'Mar', deliveries: 200 },
            { name: 'Api', deliveries: 278 },
            { name: 'May', deliveries: 189 },
            { name: 'Jun', deliveries: 239 },
            { name: 'Jul', deliveries: 349 },
            { name: 'Aug', deliveries: 239 },
            { name: 'Sep', deliveries: 349 },
            { name: 'Oct', deliveries: 239 },
            { name: 'Nov', deliveries: 349 },
            { name: 'Dec', deliveries: 349 },
        ],
        healthPosts: [{
            name: "Takiya Sub Health Post",
            chartData: [10, 200, 75, 300, 100, 200, 70],
            labels: ['9', '10', '11', '12', '13', '14', '15'],
        },
        {
            name: "Thalaha Sub Health Post",
            chartData: [10, 200, 75, 300, 100, 200, 70],
            labels: ['9', '10', '11', '12', '13', '14', '15'],
        }]
    }
}