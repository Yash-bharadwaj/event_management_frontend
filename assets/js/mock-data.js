const mockData = {
    events: [
        {
            id: 1,
            title: "Summer Music Festival 2024",
            description: "Join us for an incredible weekend of live music featuring top artists from around the world.",
            category: "Music",
            date: "2024-07-15",
            time: "18:00",
            location: "Central Park Amphitheater",
            price: 99.99,
            capacity: 5000,
            image: "assets/images/events/music-festival.jpg"
        },
        {
            id: 2,
            title: "Tech Innovation Summit",
            description: "Explore the latest innovations in technology with industry leaders.",
            category: "Technology",
            date: "2024-06-20",
            time: "09:00",
            location: "Convention Center",
            price: 299.99,
            capacity: 1000,
            image: "assets/images/events/tech-summit.jpeg"
        }
        // More events will be added...
    ],
    categories: [
        { id: 1, name: "Music", count: 12 },
        { id: 2, name: "Technology", count: 8 },
        { id: 3, name: "Sports", count: 15 },
        { id: 4, name: "Arts", count: 10 }
    ],
    users: [
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            role: "admin"
        }
        // More users will be added...
    ]
};
