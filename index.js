document.addEventListener('DOMContentLoaded', function() {
    
    // Kode Anda hanya akan dieksekusi setelah semua HTML dimuat
    const ctx = document.getElementById('myChart');

    // Pastikan elemen canvas ditemukan sebelum membuat Chart
    if (ctx) { 
        const jamAktif = [3, 2, 2, 6, 2];
        const labelHari = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        
        // Definisikan warna yang diinginkan
        const warnaTeks = '#fff'; 

        new Chart(ctx, {
            type: 'line',  
            
            data: {
                labels: labelHari, 
                datasets: [{
                    label: 'Active hour in Blender', 
                    data: jamAktif, 
                    borderWidth: 1,
                    backgroundColor: '#FF8C00',
                    borderColor: '#FF8C00',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        // --- PERBAIKAN DI SINI (Sumbu X: Nama Hari) ---
                        ticks: {
                            color: warnaTeks, // Mengubah warna label hari
                        },
                        title: {
                            display: true,
                            text: 'Day',
                            color: warnaTeks, // Menggunakan warna yang sama untuk judul
                        }
                    },
                    y: {
                        beginAtZero: true,
                        // --- PERBAIKAN DI SINI (Sumbu Y: Angka Jam) ---
                        ticks: {
                            color: warnaTeks, // Mengubah warna angka jam
                        },
                        title: {
                            display: true,
                            text: 'Active Hour',
                            color: warnaTeks, // Menggunakan warna yang sama untuk judul
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: warnaTeks // Label legend sudah putih, tapi saya pastikan di sini
                        }
                    }
                }
            }
        });
    }
});