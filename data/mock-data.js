const mockData = {
    yearTrend: {
        actual: [1000, 1200, 1300, 1100, 1400, 1300, 1280, 1350, 1450, 1400, 1500, 1600],
        lastYear: [800, 950, 1100, 1050, 1200, 1150, 1100, 1200, 1300, 1250, 1350, 1400]
    },
    ventas: {
        totalSales: [4000, 4500, 5000, 5500],
        hourlyLocal: [50, 55, 60, 70, 65, 60, 75, 80, 85, 90, 95, 100],
        hourlyDelivery: [10, 12, 15, 17, 16, 15, 18, 19, 20, 22, 24, 25]
    },
    ticketMedio: {
        avgTicket: [20, 22, 23, 24.9],
        topCategories: [
            { name: 'Bebidas', growth: 15, orders: 500, quantity: 1500 },
            { name: 'Comidas', growth: 10, orders: 450, quantity: 1200 },
            { name: 'Postres', growth: 5, orders: 400, quantity: 1100 }
        ]
    },
    clientes: {
        regions: [
            { name: 'Madrid', clients: 5000 },
            { name: 'Barcelona', clients: 4500 },
            { name: 'Valencia', clients: 3000 },
            { name: 'Sevilla', clients: 2000 },
            { name: 'Bilbao', clients: 1500 }
        ],
        new: 1500,
        returning: 3532
    }
};
