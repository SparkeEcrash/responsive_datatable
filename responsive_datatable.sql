-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 07, 2019 at 09:49 AM
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
(1, 'jimmy', 'parker', '310-977-6534', '9200 Irvine Center Dr #200', 'Irvine', 'CA', '92618', 'jpark1219dev@gmail.com', 'iron_man.jpg', 0),
(2, 'bruce', 'wayne', '973-331-3991', '3600 Wayne Tower Suite #10', 'Gotham', 'MD', '99999', 'batman@gmail.com', 'barack_obama.jpg', 0),
(3, 'Donald', 'Trump', '931-323-4477', 'Pennsylvania Ave', 'Washington', 'DC', '20511', 'potus@gmail.com', 'yeonhee_lee.jpg', 1),
(67, 'mickey', 'mouse', '333-333-3333', '124 Disney Drive', 'Miami', 'FL', '32444', 'test', '1549517148_ice_climbers_two.jpg', 1),
(68, 'mickey', 'mouse', '333-333-3333', '124 Disney Drive', 'Miami', 'FL', '32444', 'test', '1549517315_ice_climbers_two.jpg', 1);

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
  MODIFY `id` mediumint(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
