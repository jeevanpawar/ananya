-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 19, 2013 at 05:22 AM
-- Server version: 5.5.24-log
-- PHP Version: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ananya`
--

-- --------------------------------------------------------

--
-- Table structure for table `beauty`
--

CREATE TABLE IF NOT EXISTS `beauty` (
  `b_id` int(11) NOT NULL AUTO_INCREMENT,
  `b_name` varchar(25) NOT NULL,
  `b_des1` text NOT NULL,
  `b_des2` text NOT NULL,
  `b_des3` text NOT NULL,
  PRIMARY KEY (`b_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `beauty`
--

INSERT INTO `beauty` (`b_id`, `b_name`, `b_des1`, `b_des2`, `b_des3`) VALUES
(1, 'Hairs', 'With our voluminous experience we have developed a well-knitted network that is spread in every nook and corner of the world. Some of the markets we deal with are East Europe, East Asia, Central America, North Europe, Middle East, South America, South/West Europe, South East Asia, North America, Australia/NZ, Indian Subcontinent, Caribbean, East/Middle Africa, South/West Africa, North Africa and other regions round the globe.With our voluminous experience we have developed a well-knitted network that is spread in every nook and corner of the world. Some of the markets we deal with are East Europe, East Asia, Central America, North Europe, Middle East, South America, South/West Europe, South East Asia, North America, Australia/NZ, Indian Subcontinent, Caribbean, East/Middle Africa, South/West Africa, North Africa and other regions round the globe.With our voluminous experience we have developed a well-knitted network that is spread in every nook and corner of the world. Some of the mark', 'With our voluminous experience we have developed a well-knitted network that is spread in every nook and corner of the world. Some of the markets we deal with are East Europe, East Asia, Central America, North Europe, Middle East, South America, South/West Europe, South East Asia, North America, Australia/NZ, Indian Subcontinent, Caribbean, East/Middle Africa, South/West Africa, North Africa and other regions round the globe.With our voluminous experience we have developed a well-knitted network that is spread in every nook and corner of the world. Some of the markets we deal with are East Europe, East Asia, Central America, North Europe, Middle East, South America, South/West Europe, South East Asia, North America, Australia/NZ, Indian Subcontinent, Caribbean, East/Middle Africa, South/West Africa, North Africa and other regions round the globe.With our voluminous experience we have developed a well-knitted network that is spread in every nook and corner of the world. Some of the mark', 'With our voluminous experience we have developed a well-knitted network that is spread in every nook and corner of the world. Some of the markets we deal with are East Europe, East Asia, Central America, North Europe, Middle East, South America, South/West Europe, South East Asia, North America, Australia/NZ, Indian Subcontinent, Caribbean, East/Middle Africa, South/West Africa, North Africa and other regions round the globe.With our voluminous experience we have developed a well-knitted network that is spread in every nook and corner of the world. Some of the markets we deal with are East Europe, East Asia, Central America, North Europe, Middle East, South America, South/West Europe, South East Asia, North America, Australia/NZ, Indian Subcontinent, Caribbean, East/Middle Africa, South/West Africa, North Africa and other regions round the globe.With our voluminous experience we have developed a well-knitted network that is spread in every nook and corner of the world. Some of the mark'),
(2, 'Eyes', 'With our voluminous experience we have developed a well-knitted network that is spread in every nook and corner of the world. Some of the markets we deal with are East Europe, East Asia, Central America, North Europe, Middle East, South America, South/West Europe, South East Asia, North America, Australia/NZ, Indian Subcontinent, Caribbean, East/Middle Africa, South/West Africa, North Africa and other regions round the globe.', 'With our voluminous experience we have developed a well-knitted network that is spread in every nook and corner of the world. Some of the markets we deal with are East Europe, East Asia, Central America, North Europe, Middle East, South America, South/West Europe, South East Asia, North America, Australia/NZ, Indian Subcontinent, Caribbean, East/Middle Africa, South/West Africa, North Africa and other regions round the globe.', 'With our voluminous experience we have developed a well-knitted network that is spread in every nook and corner of the world. Some of the markets we deal with are East Europe, East Asia, Central America, North Europe, Middle East, South America, South/West Europe, South East Asia, North America, Australia/NZ, Indian Subcontinent, Caribbean, East/Middle Africa, South/West Africa, North Africa and other regions round the globe.'),
(3, 'Nose', 'this', 'this', 'this'),
(4, 'Lips', 'With our voluminous experience we have developed a well-knitted network that is spread in every nook and corner of the world. Some of the markets we deal with are East Europe, East Asia, Central America, North Europe, Middle East, South America, South/West Europe, South East Asia, North America, Australia/NZ, Indian Subcontinent, Caribbean, East/Middle Africa, South/West Africa, North Africa and other regions round the globe.', 'With our voluminous experience we have developed a well-knitted network that is spread in every nook and corner of the world. Some of the markets we deal with are East Europe, East Asia, Central America, North Europe, Middle East, South America, South/West Europe, South East Asia, North America, Australia/NZ, Indian Subcontinent, Caribbean, East/Middle Africa, South/West Africa, North Africa and other regions round the globe.', 'With our voluminous experience we have developed a well-knitted network that is spread in every nook and corner of the world. Some of the markets we deal with are East Europe, East Asia, Central America, North Europe, Middle East, South America, South/West Europe, South East Asia, North America, Australia/NZ, Indian Subcontinent, Caribbean, East/Middle Africa, South/West Africa, North Africa and other regions round the globe.'),
(5, 'Face', 'thsi', 'this', 'thsi'),
(6, 'Neck', 'this', 'this', 'this'),
(7, 'Breast', 'With our voluminous experience we have developed a well-knitted network that is spread in every nook and corner of the world. Some of the markets we deal with are East Europe, East Asia, Central America, North Europe, Middle East, South America, South/West Europe, South East Asia, North America, Australia/NZ, Indian Subcontinent, Caribbean, East/Middle Africa, South/West Africa, North Africa and other regions round the globe.', 'With our voluminous experience we have developed a well-knitted network that is spread in every nook and corner of the world. Some of the markets we deal with are East Europe, East Asia, Central America, North Europe, Middle East, South America, South/West Europe, South East Asia, North America, Australia/NZ, Indian Subcontinent, Caribbean, East/Middle Africa, South/West Africa, North Africa and other regions round the globe.', 'With our voluminous experience we have developed a well-knitted network that is spread in every nook and corner of the world. Some of the markets we deal with are East Europe, East Asia, Central America, North Europe, Middle East, South America, South/West Europe, South East Asia, North America, Australia/NZ, Indian Subcontinent, Caribbean, East/Middle Africa, South/West Africa, North Africa and other regions round the globe.'),
(8, 'Nails', 'this', 'this', 'this'),
(9, 'Skin', 'this', 'this', 'this'),
(10, 'Foot', 'this', 'this', 'thi');

-- --------------------------------------------------------

--
-- Table structure for table `f_product`
--

CREATE TABLE IF NOT EXISTS `f_product` (
  `f_id` int(11) NOT NULL AUTO_INCREMENT,
  `f_image` varchar(25) NOT NULL,
  `f_name` varchar(25) NOT NULL,
  `f_category` varchar(25) NOT NULL,
  `f_type` varchar(25) NOT NULL,
  PRIMARY KEY (`f_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `f_product`
--

INSERT INTO `f_product` (`f_id`, `f_image`, `f_name`, `f_category`, `f_type`) VALUES
(23, '23.jpg', 'Face', 'Product', 'None');

-- --------------------------------------------------------

--
-- Table structure for table `highlight`
--

CREATE TABLE IF NOT EXISTS `highlight` (
  `h_id` int(11) NOT NULL,
  `c_id` int(11) NOT NULL,
  `h_name` varchar(25) NOT NULL,
  `h_des` varchar(200) NOT NULL,
  `h_pho` varchar(25) NOT NULL,
  PRIMARY KEY (`h_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `slider`
--

CREATE TABLE IF NOT EXISTS `slider` (
  `p_id` int(11) NOT NULL AUTO_INCREMENT,
  `p_name` varchar(25) NOT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=33 ;

--
-- Dumping data for table `slider`
--

INSERT INTO `slider` (`p_id`, `p_name`) VALUES
(27, '27.jpg'),
(28, '28.jpg'),
(29, '29.jpg'),
(30, '30.jpg'),
(32, '32.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `user` varchar(25) NOT NULL,
  `pass` varchar(25) NOT NULL,
  PRIMARY KEY (`user`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user`, `pass`) VALUES
('ananya', 'cosmetics');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
