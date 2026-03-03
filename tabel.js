document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myChart');

    if (ctx) {
        const textColor = '#fff';

        // 1. Simpan instance chart ke dalam variabel global/scope atas
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: typeof labelHari !== 'undefined' ? labelHari : [], 
                datasets: [{
                    label: 'Active Hours in Blender',
                    data: typeof jamAktif !== 'undefined' ? jamAktif : [], 
                    borderWidth: 2,
                    backgroundColor: 'rgba(255, 140, 0, 0.2)',
                    borderColor: '#FF8C00',
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { ticks: { color: textColor }, title: { display: true, text: 'Date', color: textColor } },
                    y: { beginAtZero: true, ticks: { color: textColor }, title: { display: true, text: 'Active Hours', color: textColor } }
                },
                plugins: {
                    legend: { labels: { color: textColor } }
                }
            }
        });

       function refreshData() {
    // Pastikan path ke get_data.php sudah benar
    fetch('get_data.php')
        .then(response => response.json())
        .then(newData => {
            if (newData.labelHari) {
                // Update data grafik
                myChart.data.labels = newData.labelHari;
                myChart.data.datasets[0].data = newData.jamAktif;
                
                // Refresh grafik saja
                myChart.update('none'); 
                console.log("Data grafik berhasil diperbarui secara background.");
            }
        })
        .catch(error => console.error('Gagal mengambil data:', error));
}

// Jalankan setiap 2 detik
setInterval(refreshData, 2000);
    }
});