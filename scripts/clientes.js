function loadClientes(container) {
    container.innerHTML = `
        <h2>Clientes</h2>
        <div class="dashboard-summary">
            <div class="chart">
                <h3>Nº de Clientes</h3>
                <p class="big-number">26,532</p>
                <p class="trend">↑ 15% Año anterior</p>
            </div>
            <div class="chart">
                <h3>Ocupación</h3>
                <p class="big-number">37,3%</p>
            </div>
            <div class="chart">
                <h3>Rotación</h3>
                <p class="big-number">2.9</p>
            </div>
            <div class="chart">
                <h                <h3>Rotación</h3>
                <p class="big-number">2.9</p>
            </div>
        </div>
        <div class="chart">
            <h3>Clientes por región</h3>
            <canvas id="regionChart"></canvas>
        </div>
        <div class="chart">
            <h3>Clientes nuevos vs recurrentes</h3>
            <canvas id="newVsReturningChart"></canvas>
        </div>
    `;

    // Gráfico de clientes por región
    new Chart(document.getElementById('regionChart'), {
        type: 'bar',
        data: {
            labels: mockData.clientes.regions.map(region => region.name),
            datasets: [{
                label: 'Clientes',
                data: mockData.clientes.regions.map(region => region.clients),
                backgroundColor: '#ff6b00'
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

    // Gráfico de clientes nuevos vs recurrentes
    new Chart(document.getElementById('newVsReturningChart'), {
        type: 'doughnut',
        data: {
            labels: ['Nuevos', 'Recurrentes'],
            datasets: [{
                label: 'Clientes',
                data: [mockData.clientes.new, mockData.clientes.returning],
                backgroundColor: ['#ff6b00', '#28a745']
            }]
        },
        options: {
            responsive: true
        }
    });
}
