-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 03, 2026 at 09:26 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_3dlife_20236020`
--

-- --------------------------------------------------------

--
-- Table structure for table `grafik`
--

CREATE TABLE `grafik` (
  `id` int(11) NOT NULL,
  `tanggal` date NOT NULL,
  `waktu` decimal(4,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `grafik`
--

INSERT INTO `grafik` (`id`, `tanggal`, `waktu`) VALUES
(16, '2026-03-07', '1.00'),
(17, '2026-03-08', '2.00'),
(18, '2026-03-09', '3.00'),
(19, '2026-03-10', '1.00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `grafik`
--
ALTER TABLE `grafik`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `grafik`
--
ALTER TABLE `grafik`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
