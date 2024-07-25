function loadVentas(container) {
    container.innerHTML = `
        <h2>Ventas</h2>
        <div class="dashboard-summary">
            <div class="chart">
                <h3>Ventas Total</h3>
                <p class="big-number">1.280 €</p>
                <p class="trend">↑ 15% Año anterior</p>
                <canvas id="totalSalesChart"></canvas>
            </div>
            <div class="chart">
                <h3>Ventas Local</h3>
                <p class="big-number">98,22%</p>
            </div>
            <div class="chart">
                <h3>Ventas Delivery</h3>
                <p class="big-number">1,78%</p>
            </div>
        </div>
        <div class="chart">
            <h3>Ventas por tramos horarios</h3>
            <canvas id="hourlyPivotChart"></canvas>
        </div>
    `;

    // Gráfico de ventas totales
    new Chart(document.getElementById('totalSalesChart'), {
        type: 'line',
        data: {
            labels: ['2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Ventas Totales',
                data: mockData.ventas.totalSales,
                borderColor: '#ff6b00',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico de ventas por tramos horarios
    new Chart(document.getElementById('hourlyPivotChart'), {
        type: 'line',
        data: {
            labels: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
            datasets: [{
                label: 'En local',
                data: mockData.ventas.hourlyLocal,
                borderColor: '#ff6b00',
                tension: 0.1
            }, {
                label: 'Delivery',
                data: mockData.ventas.hourlyDelivery,
                borderColor: '#28a745',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}