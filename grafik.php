<?php
include_once "koneksi.php"; // Menggunakan include_once lebih aman

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
// Hapus semua kurung kurawal tambahan di bawah sini
