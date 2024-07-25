document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('nav a');

    function loadSection(sectionName) {
        switch(sectionName) {
            case 'dashboard':
                loadDashboard(mainContent);
                break;
            case 'ventas':
                loadVentas(mainContent);
                break;
            case 'ticket-medio':
                loadTicketMedio(mainContent);
                break;
            case 'clientes':
                loadClientes(mainContent);
                break;
        }

        // Actualizar clase activa en la navegación
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionName) {
                link.classList.add('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('data-section');
            loadSection(section);
        });
    });

    // Cargar dashboard por defecto
    loadSection('dashboard');
});