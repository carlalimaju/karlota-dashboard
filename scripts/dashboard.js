function loadDashboard(container) {
    container.innerHTML = `
        <h2>Dashboard</h2>
        <div class="dashboard-summary">
            <div class="chart">
                <h3>Ventas de hoy</h3>
                <p class="big-number">1.280 €</p>
                <p class="trend">↑ 15% Año anterior</p>
                <canvas id="salesChart"></canvas>
            </div>
            <div class="chart">
                <h3>Ticket medio</h3>
                <p class="big-number">25.6 €</p>
                <p class="trend">↑ 15% Año anterior</p>
                <canvas id="ticketChart"></canvas>
            </div>
            <div class="chart">
                <h3>Nº de Clientes</h3>
                <p class="big-number">56</p>
                <p class="trend">↑ 15% Año anterior</p>
            </div>
        </div>
        <div class="chart">
            <h3>Tendencia del año</h3>
            <canvas id="yearTrendChart"></canvas>
        </div>
    `;

    // Gráfico de ventas
    new Chart(document.getElementById('salesChart'), {
        type: 'line',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Ventas',
                data: [1000, 1200, 1300, 1100, 1400, 1300, 1280],
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

    // Gráfico de ticket medio
    new Chart(document.getElementById('ticketChart'), {
        type: 'line',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Ticket Medio',
                data: [22, 23, 24, 25, 24, 26, 25.6],
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

    // Gráfico de tendencia anual
    new Chart(document.getElementById('yearTrendChart'), {
        type: 'line',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            datasets: [{
                label: 'Actual',
                data: mockData.yearTrend.actual,
                borderColor: '#ff6b00',
                tension: 0.1
            }, {
                label: 'Año pasado',
                data: mockData.yearTrend.lastYear,
                borderColor: '#999',
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