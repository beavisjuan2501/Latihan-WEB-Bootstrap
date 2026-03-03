<?php
header('Content-Type: application/json');
include "koneksi.php"; // Pastikan file koneksi Anda benar

$sql = "SELECT tanggal, waktu FROM grafik ORDER BY tanggal ASC";
$result = $conn->query($sql);

$labelHari = [];
$jamAktif = [];

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $labelHari[] = $row['tanggal']; 
        $jamAktif[] = (float)$row['waktu'];
    }
}

// Mengirimkan data saja tanpa HTML
echo json_encode([
    "labelHari" => $labelHari,
    "jamAktif" => $jamAktif
]);
exit;