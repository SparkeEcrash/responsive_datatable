-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2019 at 08:47 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `responsive_datatable`
--

CREATE TABLE `responsive_datatable` (
  `id` mediumint(8) NOT NULL,
  `first_name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telephone_number` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `street` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zip_code` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_address` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `csv_export` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `responsive_datatable`
--

INSERT INTO `responsive_datatable` (`id`, `first_name`, `last_name`, `telephone_number`, `street`, `city`, `state`, `zip_code`, `email_address`, `image`, `csv_export`) VALUES
(1, 'James', 'Bond', '310-977-6534', '9200 Irvine Center Dr #200', 'Irvine', 'CA', '92618', '007@mi6.com', '1549654104_james_bond.jpg', 1),
(2, 'Bruce', 'Wayne', '973-331-3991', '3600 Wayne Tower Suite #10', 'Gotham', 'MD', '99999', 'batman@gmail.com', '1549654047_batman.jpg', 1),
(3, 'Donald', 'Trump', '931-323-3567', 'Pennsylvania Ave', 'Washington', 'DC', '20511', 'potus@whitehouse.gov', '1549653951_donald_trump.jpg', 1),
(67, 'Mickey', 'Mouse', '210-432-3492', '124 Disney Drive', 'Miami', 'FL', '32444', 'mickey@disney.com', '1549654205_mickey.jpg', 1),
(72, 'Super', 'Mario', '983-274-2038', '38 Nintendo Court', 'Boston', 'MA', '32444', 'mario@nintendo.com', '1549654233_mario.jpg', 1),
(73, 'James', 'Park', '332-754-5514', '8 Waterford Drive', 'Metropolis', 'WA', '34522', 'jpark@gmail.com', '1549653891_Profile Picture.jpg', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `responsive_datatable`
--
ALTER TABLE `responsive_datatable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `responsive_datatable`
--
ALTER TABLE `responsive_datatable`
  MODIFY `id` mediumint(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
