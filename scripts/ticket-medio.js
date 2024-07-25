function loadTicketMedio(container) {
    container.innerHTML = `
        <h2>Ticket Medio</h2>
        <div class="dashboard-summary">
            <div class="chart">
                <h3>Promedio de venta por cliente</h3>
                <p class="big-number">24,90 €</p>
                <p class="trend">↑ 15% Año anterior</p>
                <canvas id="avgTicketChart"></canvas>
            </div>
            <div class="chart">
                <h3>Artículos por pedido</h3>
                <p class="big-number">2.88</p>
                <p class="trend">↑ 15% Año anterior</p>
            </div>
            <div class="chart">
                <h3>Descuentos</h3>
                <p class="big-number">1.451 €</p>
                <p class="trend">↑ 15% Año anterior</p>
            </div>
        </div>
        <div class="chart">
            <h3>Top Categorías vendidas</h3>
            <table>
                <thead>
                    <tr>
                        <th>Categoría</th>
                        <th>Indicador de crecimiento</th>
                        <th>Pedidos</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody id="topCategoriesTable">
                    <!-- Se llenará dinámicamente -->
                </tbody>
            </table>
        </div>
    `;

    // Gráfico de ticket medio
    new Chart(document.getElementById('avgTicketChart'), {
        type: 'line',
        data: {
            labels: ['2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Ticket Medio',
                data: mockData.ticketMedio.avgTicket,
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

    // Llenar tabla de top categorías
    const topCategoriesTable = document.getElementById('topCategoriesTable');
    mockData.ticketMedio.topCategories.forEach(category => {
        const row = topCategoriesTable.insertRow();
        row.innerHTML = `
            <td>${category.name}</td>
            <td>${category.growth > 0 ? '↑' : '↓'}</td>
            <td>${category.orders}</td>
            <td>${category.quantity}</td>
        `;
    });
}