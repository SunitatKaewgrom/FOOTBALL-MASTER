-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 02, 2024 at 10:50 PM
-- Server version: 8.3.0
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Football`
--

-- --------------------------------------------------------

--
-- Table structure for table `league`
--

CREATE TABLE `league` (
  `id` int NOT NULL,
  `name` varchar(60) COLLATE utf8mb4_general_ci NOT NULL,
  `image` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `league`
--

INSERT INTO `league` (`id`, `name`, `image`) VALUES
(1, 'German 2. Bundesliga', ''),
(2, 'German Bundesliga', ''),
(3, 'Danish SAS-Ligaen', ''),
(4, 'Norwegian Tippeligaen', ''),
(5, 'Scottish Premiership', ''),
(6, 'French Ligue 1', ''),
(7, 'Italy Serie A', ''),
(8, 'English League One', ''),
(9, 'Turkish Turkcell Super Lig', ''),
(10, 'Australian A-League', ''),
(11, 'Greek Super League', ''),
(12, 'UEFA Europa League', ''),
(13, 'Barclays Premier League', ''),
(14, 'English League Two', ''),
(15, 'Swedish Allsvenskan', ''),
(16, 'Dutch Eredivisie', ''),
(17, 'Spanish Segunda Division', ''),
(18, 'Japanese J League', ''),
(19, 'Spanish Primera Division', ''),
(20, 'South African ABSA Premier League', ''),
(21, 'Brasileiro Série A', ''),
(22, 'French Ligue 2', ''),
(23, 'Belgian Jupiler League', ''),
(24, 'UEFA Europa Conference League', ''),
(25, 'Argentina Primera Division', ''),
(26, 'United Soccer League', ''),
(27, 'Italy Serie B', ''),
(28, 'Major League Soccer', ''),
(29, 'Mexican Primera Division Torneo Clausura', ''),
(30, 'Austrian T-Mobile Bundesliga', ''),
(31, 'Swiss Raiffeisen Super League', ''),
(32, 'Chinese Super League', ''),
(33, 'Portuguese Liga', ''),
(34, 'English League Championship', ''),
(35, 'Russian Premier Liga', ''),
(36, 'UEFA Champions League', '');

-- --------------------------------------------------------

--
-- Table structure for table `master`
--

CREATE TABLE `master` (
  `id` int NOT NULL,
  `image` text COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `master`
--

INSERT INTO `master` (`id`, `image`, `name`) VALUES
(24, 'image-1709278086204.webp', 'เฮียหลำ นำบอล'),
(25, 'image-1709278098414.webp', 'โค้ชอ๋อง เซียนเต็ง'),
(26, 'image-1709278107133.webp', 'เฮียอาร์ม สายเสต็ป'),
(27, 'image-1709278115187.webp', 'เฟอร์กี้ บี้บอล'),
(28, 'image-1709355868283.webp', 'เดอะนนท์ บอลเด็ด');

-- --------------------------------------------------------

--
-- Table structure for table `tb1`
--

CREATE TABLE `tb1` (
  `id` int NOT NULL,
  `data` json NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb1`
--

INSERT INTO `tb1` (`id`, `data`) VALUES
(1, '[{\"away\": \"Lokomotiv Moscow\", \"date\": \"2024-03-02\", \"home\": \"Zenit St Petersburg\", \"time\": \"01:00\", \"league\": \"35\", \"master\": [{\"id\": 28, \"link\": \"https://www.youtube.com/watch?v=RLhK4Rq36-c&list=RDRLhK4Rq36-c&start_radio=1\", \"name\": \"เดอะนนท์ บอลเด็ด\", \"image\": \"image-1709355868283.webp\", \"analysis\": \"ffddfdf\"}], \"away_score\": 0, \"home_score\": 0, \"league_name\": \"Russian Premier Liga\", \"league_image\": \"\"}]'),
(2, '[{\"away\": \"Lokomotiv Moscow\", \"date\": \"2024-03-02\", \"home\": \"Zenit St Petersburg\", \"time\": \"01:00\", \"league\": \"35\", \"master\": [{\"id\": 28, \"link\": \"https://www.youtube.com/watch?v=RLhK4Rq36-c&list=RDRLhK4Rq36-c&start_radio=1\", \"name\": \"เดอะนนท์ บอลเด็ด\", \"image\": \"image-1709355868283.webp\", \"analysis\": \"ffddfdf\"}, {\"id\": 27, \"link\": \"555\", \"name\": \"เฟอร์กี้ บี้บอล\", \"image\": \"image-1709278115187.webp\", \"analysis\": \"555\"}], \"away_score\": 0, \"home_score\": 0, \"league_name\": \"Russian Premier Liga\", \"league_image\": \"\"}]'),
(3, '[{\"away\": \"Lokomotiv Moscow\", \"date\": \"2024-03-02\", \"home\": \"Zenit St Petersburg\", \"time\": \"01:00\", \"league\": \"35\", \"master\": [{\"id\": 28, \"link\": \"https://www.youtube.com/watch?v=RLhK4Rq36-c&list=RDRLhK4Rq36-c&start_radio=1\", \"name\": \"เดอะนนท์ บอลเด็ด\", \"image\": \"image-1709355868283.webp\", \"analysis\": \"ffddfdf\"}, {\"id\": 27, \"link\": \"555\", \"name\": \"เฟอร์กี้ บี้บอล\", \"image\": \"image-1709278115187.webp\", \"analysis\": \"555\"}], \"away_score\": 0, \"home_score\": 0, \"league_name\": \"Russian Premier Liga\", \"league_image\": \"\"}]'),
(4, '[{\"away\": \"Lokomotiv Moscow\", \"date\": \"2024-03-02\", \"home\": \"Zenit St Petersburg\", \"time\": \"01:00\", \"league\": \"35\", \"master\": [{\"id\": 28, \"link\": \"https://www.youtube.com/watch?v=RLhK4Rq36-c&list=RDRLhK4Rq36-c&start_radio=1\", \"name\": \"เดอะนนท์ บอลเด็ด\", \"image\": \"image-1709355868283.webp\", \"result\": \"2\", \"analysis\": \"ffddfdf\"}, {\"id\": 27, \"link\": \"555\", \"name\": \"เฟอร์กี้ บี้บอล\", \"image\": \"image-1709278115187.webp\", \"result\": \"2\", \"analysis\": \"555\"}], \"away_score\": 0, \"home_score\": 0, \"league_name\": \"Russian Premier Liga\", \"league_image\": \"\"}]'),
(5, '[{\"away\": \"Lokomotiv Moscow\", \"date\": \"2024-03-02\", \"home\": \"Zenit St Petersburg\", \"time\": \"01:00\", \"league\": \"35\", \"master\": [{\"id\": 28, \"link\": \"https://www.youtube.com/watch?v=RLhK4Rq36-c&list=RDRLhK4Rq36-c&start_radio=1\", \"name\": \"เดอะนนท์ บอลเด็ด\", \"image\": \"image-1709355868283.webp\", \"result\": \"2\", \"analysis\": \"ffddfdf\"}, {\"id\": 27, \"link\": \"555\", \"name\": \"เฟอร์กี้ บี้บอล\", \"image\": \"image-1709278115187.webp\", \"result\": \"1\", \"analysis\": \"555\"}], \"away_score\": 0, \"home_score\": 0, \"league_name\": \"Russian Premier Liga\", \"league_image\": \"\"}]'),
(6, '[{\"away\": \"Lokomotiv Moscow\", \"date\": \"2024-03-02\", \"home\": \"Zenit St Petersburg\", \"time\": \"01:00\", \"league\": \"35\", \"master\": [{\"id\": 28, \"link\": \"https://www.youtube.com/watch?v=RLhK4Rq36-c&list=RDRLhK4Rq36-c&start_radio=1\", \"name\": \"เดอะนนท์ บอลเด็ด\", \"image\": \"image-1709355868283.webp\", \"result\": \"2\", \"analysis\": \"ffddfdf\"}, {\"id\": 27, \"link\": \"555\", \"name\": \"เฟอร์กี้ บี้บอล\", \"image\": \"image-1709278115187.webp\", \"result\": \"1\", \"analysis\": \"555\"}], \"away_score\": 0, \"home_score\": 0, \"league_name\": \"Russian Premier Liga\", \"league_image\": \"\"}, {\"away\": \"Wigan\", \"date\": \"2024-03-02\", \"home\": \"Swansea City\", \"time\": \"02:00\", \"league\": \"34\", \"master\": [{\"id\": 28, \"link\": \"https://www.youtube.com/watch?v=RLhK4Rq36-c&list=RDRLhK4Rq36-c&start_radio=1\", \"name\": \"เดอะนนท์ บอลเด็ด\", \"image\": \"image-1709355868283.webp\", \"result\": \"1\", \"analysis\": \"หกฟดหกด\"}, {\"id\": 25, \"link\": \"https://www.youtube.com/watch?v=RLhK4Rq36-c&list=RDRLhK4Rq36-c&start_radio=1\", \"name\": \"โค้ชอ๋อง เซียนเต็ง\", \"image\": \"image-1709278098414.webp\", \"result\": \"\", \"analysis\": \"55555\"}], \"result\": \"\", \"away_score\": 0, \"home_score\": 0, \"league_name\": \"English League Championship\", \"league_image\": \"\"}]'),
(7, '[{\"away\": \"Lokomotiv Moscow\", \"date\": \"2024-03-02\", \"home\": \"Zenit St Petersburg\", \"time\": \"01:00\", \"league\": \"35\", \"master\": [{\"id\": 28, \"link\": \"https://www.youtube.com/watch?v=RLhK4Rq36-c&list=RDRLhK4Rq36-c&start_radio=1\", \"name\": \"เดอะนนท์ บอลเด็ด\", \"image\": \"image-1709355868283.webp\", \"result\": \"2\", \"analysis\": \"ffddfdf\"}, {\"id\": 27, \"link\": \"555\", \"name\": \"เฟอร์กี้ บี้บอล\", \"image\": \"image-1709278115187.webp\", \"result\": \"1\", \"analysis\": \"555\"}], \"away_score\": 0, \"home_score\": 0, \"league_name\": \"Russian Premier Liga\", \"league_image\": \"\"}, {\"away\": \"Wigan\", \"date\": \"2024-03-02\", \"home\": \"Swansea City\", \"time\": \"02:00\", \"league\": \"34\", \"master\": [{\"id\": 28, \"link\": \"https://www.youtube.com/watch?v=RLhK4Rq36-c&list=RDRLhK4Rq36-c&start_radio=1\", \"name\": \"เดอะนนท์ บอลเด็ด\", \"image\": \"image-1709355868283.webp\", \"result\": \"3\", \"analysis\": \"หกฟดหกด\"}, {\"id\": 25, \"link\": \"https://www.youtube.com/watch?v=RLhK4Rq36-c&list=RDRLhK4Rq36-c&start_radio=1\", \"name\": \"โค้ชอ๋อง เซียนเต็ง\", \"image\": \"image-1709278098414.webp\", \"result\": \"2\", \"analysis\": \"55555\"}], \"result\": \"\", \"away_score\": 0, \"home_score\": 0, \"league_name\": \"English League Championship\", \"league_image\": \"\"}]'),
(8, '[{\"away\": \"Lokomotiv Moscow\", \"date\": \"2024-03-02\", \"home\": \"Zenit St Petersburg\", \"time\": \"01:00\", \"league\": \"35\", \"master\": [{\"id\": 28, \"link\": \"https://www.youtube.com/watch?v=RLhK4Rq36-c&list=RDRLhK4Rq36-c&start_radio=1\", \"name\": \"เดอะนนท์ บอลเด็ด\", \"image\": \"image-1709355868283.webp\", \"result\": \"3\", \"analysis\": \"ffddfdf\"}, {\"id\": 27, \"link\": \"555\", \"name\": \"เฟอร์กี้ บี้บอล\", \"image\": \"image-1709278115187.webp\", \"result\": \"3\", \"analysis\": \"555\"}], \"away_score\": 0, \"home_score\": 0, \"league_name\": \"Russian Premier Liga\", \"league_image\": \"\"}, {\"away\": \"Wigan\", \"date\": \"2024-03-02\", \"home\": \"Swansea City\", \"time\": \"02:00\", \"league\": \"34\", \"master\": [{\"id\": 28, \"link\": \"https://www.youtube.com/watch?v=RLhK4Rq36-c&list=RDRLhK4Rq36-c&start_radio=1\", \"name\": \"เดอะนนท์ บอลเด็ด\", \"image\": \"image-1709355868283.webp\", \"result\": \"1\", \"analysis\": \"หกฟดหกด\"}, {\"id\": 25, \"link\": \"https://www.youtube.com/watch?v=RLhK4Rq36-c&list=RDRLhK4Rq36-c&start_radio=1\", \"name\": \"โค้ชอ๋อง เซียนเต็ง\", \"image\": \"image-1709278098414.webp\", \"result\": \"1\", \"analysis\": \"55555\"}], \"result\": \"\", \"away_score\": 0, \"home_score\": 0, \"league_name\": \"English League Championship\", \"league_image\": \"\"}]'),
(9, '[{\"away\": \"Lokomotiv Moscow\", \"date\": \"2024-03-02\", \"home\": \"Zenit St Petersburg\", \"time\": \"01:00\", \"league\": \"35\", \"master\": [{\"id\": 28, \"link\": \"https://www.youtube.com/watch?v=RLhK4Rq36-c&list=RDRLhK4Rq36-c&start_radio=1\", \"name\": \"เดอะนนท์ บอลเด็ด\", \"image\": \"image-1709355868283.webp\", \"result\": \"3\", \"analysis\": \"ffddfdf\"}, {\"id\": 27, \"link\": \"555\", \"name\": \"เฟอร์กี้ บี้บอล\", \"image\": \"image-1709278115187.webp\", \"result\": \"3\", \"analysis\": \"555\"}], \"away_score\": 0, \"home_score\": 0, \"league_name\": \"Russian Premier Liga\", \"league_image\": \"\"}, {\"away\": \"Wigan\", \"date\": \"2024-03-02\", \"home\": \"Swansea City\", \"time\": \"02:00\", \"league\": \"34\", \"master\": [{\"id\": 28, \"link\": \"https://www.youtube.com/watch?v=RLhK4Rq36-c&list=RDRLhK4Rq36-c&start_radio=1\", \"name\": \"เดอะนนท์ บอลเด็ด\", \"image\": \"image-1709355868283.webp\", \"result\": \"1\", \"analysis\": \"หกฟดหกด\"}, {\"id\": 25, \"link\": \"https://www.youtube.com/watch?v=RLhK4Rq36-c&list=RDRLhK4Rq36-c&start_radio=1\", \"name\": \"โค้ชอ๋อง เซียนเต็ง\", \"image\": \"image-1709278098414.webp\", \"result\": \"1\", \"analysis\": \"55555\"}], \"result\": \"\", \"away_score\": 0, \"home_score\": 0, \"league_name\": \"English League Championship\", \"league_image\": \"\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `tb2`
--

CREATE TABLE `tb2` (
  `id` int NOT NULL,
  `data` json NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `league_id` int NOT NULL,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `name`, `league_id`, `image`) VALUES
(179, 'Manchester City', 13, ''),
(180, 'Bayern Munich', 2, ''),
(181, 'Barcelona', 19, ''),
(182, 'Real Madrid', 19, ''),
(183, 'Liverpool', 13, ''),
(184, 'Arsenal', 13, ''),
(185, 'Newcastle', 13, ''),
(186, 'Napoli', 7, ''),
(187, 'Borussia Dortmund', 2, ''),
(188, 'Brighton and Hove Albion', 13, ''),
(189, 'RB Leipzig', 2, ''),
(190, 'Benfica', 33, ''),
(191, 'Aston Villa', 13, ''),
(192, 'Atletico Madrid', 19, ''),
(193, 'Paris Saint-Germain', 6, ''),
(194, 'Manchester United', 13, ''),
(195, 'Internazionale', 7, ''),
(196, 'Ajax', 16, ''),
(197, 'Lille', 6, ''),
(198, 'Brentford', 13, ''),
(199, 'Real Sociedad', 19, ''),
(200, 'Sporting CP', 33, ''),
(201, 'FC Porto', 33, ''),
(202, 'Chelsea', 13, ''),
(203, 'Feyenoord', 16, ''),
(204, 'Lyon', 6, ''),
(205, 'Stade Rennes', 6, ''),
(206, 'Bayer Leverkusen', 2, ''),
(207, 'Athletic Bilbao', 19, ''),
(208, 'Celtic', 5, ''),
(209, 'Zenit St Petersburg', 35, ''),
(210, 'Fiorentina', 7, ''),
(211, 'FC Twente', 16, ''),
(212, 'Marseille', 6, ''),
(213, 'PSV', 16, ''),
(214, 'Crystal Palace', 13, ''),
(215, 'Villarreal', 19, ''),
(216, 'Lens', 6, ''),
(217, 'AC Milan', 7, ''),
(218, 'AS Roma', 7, ''),
(219, 'FC Salzburg', 30, ''),
(220, 'FC Cologne', 2, ''),
(221, 'Tottenham Hotspur', 13, ''),
(222, 'Rangers', 5, ''),
(223, 'Eintracht Frankfurt', 2, ''),
(224, 'West Ham United', 13, ''),
(225, 'Atalanta', 7, ''),
(226, 'VfL Wolfsburg', 2, ''),
(227, 'Juventus', 7, ''),
(228, 'Torino', 7, ''),
(229, 'Sevilla FC', 19, ''),
(230, 'Mainz', 2, ''),
(231, 'Palmeiras', 21, ''),
(232, 'Valencia', 19, ''),
(233, 'Lazio', 7, ''),
(234, 'Fulham', 13, ''),
(235, 'Besiktas', 9, ''),
(236, 'Celta Vigo', 19, ''),
(237, 'Nice', 6, ''),
(238, 'VfB Stuttgart', 2, ''),
(239, 'Borussia Monchengladbach', 2, ''),
(240, 'Galatasaray', 9, ''),
(241, 'AZ', 16, ''),
(242, 'Girona FC', 19, ''),
(243, 'Real Betis', 19, ''),
(244, 'SC Freiburg', 2, ''),
(245, 'Flamengo', 21, ''),
(246, 'Strasbourg', 6, ''),
(247, '1. FC Union Berlin', 2, ''),
(248, 'Osasuna', 19, ''),
(249, 'Young Boys', 31, ''),
(250, 'Atletico Mineiro', 21, ''),
(251, 'Getafe', 19, ''),
(252, 'AS Monaco', 6, ''),
(253, 'Leicester City', 13, ''),
(254, 'KAA Gent', 23, ''),
(255, 'Reims', 6, ''),
(256, 'Bologna', 7, ''),
(257, 'Werder Bremen', 2, ''),
(258, 'Fenerbahce', 9, ''),
(259, 'Monterrey', 29, ''),
(260, 'Everton', 13, ''),
(261, 'TSG Hoffenheim', 2, ''),
(262, 'Sassuolo', 7, ''),
(263, 'Slavia Prague', 24, ''),
(264, 'Braga', 33, ''),
(265, 'Bodo/Glimt', 4, ''),
(266, 'Burnley', 34, ''),
(267, 'Rayo Vallecano', 19, ''),
(268, 'Olympiacos', 11, ''),
(269, 'Dinamo Zagreb', 35, ''),
(270, 'Genk', 23, ''),
(271, 'Clermont Foot', 6, ''),
(272, 'AEK Athens', 11, ''),
(273, 'Club Brugge', 23, ''),
(274, 'Tigres UANL', 29, ''),
(275, 'Club América', 29, ''),
(276, 'Toulouse', 6, ''),
(277, 'Udinese', 7, ''),
(278, 'Lecce', 7, ''),
(279, 'Mallorca', 19, ''),
(280, 'Antwerp', 23, ''),
(281, 'AFC Bournemouth', 13, ''),
(282, 'Schalke 04', 2, ''),
(283, 'CSKA Moscow', 35, ''),
(284, 'Wolverhampton', 13, ''),
(285, 'Leeds United', 13, ''),
(286, 'SK Sturm Graz', 30, ''),
(287, 'River Plate', 25, ''),
(288, 'Espanyol', 19, ''),
(289, 'Monza', 7, ''),
(290, 'Vitesse', 16, ''),
(291, 'São Paulo', 21, ''),
(292, 'Montpellier', 6, ''),
(293, 'Slovácko', 24, ''),
(294, 'Red Star Belgrade', 12, ''),
(295, 'Cadiz', 19, ''),
(296, 'Adana Demirspor', 9, ''),
(297, 'FC Copenhagen', 3, ''),
(298, 'Union Saint Gilloise', 23, ''),
(299, 'Botafogo', 21, ''),
(300, 'FC Utrecht', 16, ''),
(301, 'Shakhtar Donetsk', 12, ''),
(302, 'Elche', 19, ''),
(303, 'Almeria', 19, ''),
(304, 'FC Augsburg', 2, ''),
(305, 'Southampton', 13, ''),
(306, 'Sheffield United', 34, ''),
(307, 'VfL Bochum', 2, ''),
(308, 'Fluminense', 21, ''),
(309, 'Nottingham Forest', 13, ''),
(310, 'Sparta', 16, ''),
(311, 'Middlesbrough', 34, ''),
(312, 'Brest', 6, ''),
(313, 'FC Midtjylland', 3, ''),
(314, 'Luton Town', 34, ''),
(315, 'Pachuca', 29, ''),
(316, 'Viktoria Plzen', 36, ''),
(317, 'FC Krasnodar', 35, ''),
(318, 'Ferencvaros', 12, ''),
(319, 'Internacional', 21, ''),
(320, 'Lokomotiv Moscow', 35, ''),
(321, 'Trabzonspor', 9, ''),
(322, 'Real Valladolid', 19, ''),
(323, 'Hertha Berlin', 2, ''),
(324, 'Philadelphia Union', 28, ''),
(325, 'Lorient', 6, ''),
(326, 'Bragantino', 21, ''),
(327, 'Empoli', 7, ''),
(328, 'Los Angeles FC', 28, ''),
(329, 'Spartak Moscow', 35, ''),
(330, 'Dynamo Kiev', 12, ''),
(331, 'Fortaleza', 21, ''),
(332, 'Ipswich Town', 8, ''),
(333, 'Guimaraes', 33, ''),
(334, 'Istanbul Basaksehir', 9, ''),
(335, 'Molde', 4, ''),
(336, 'Anderlecht', 23, ''),
(337, 'León', 29, ''),
(338, 'Atlético Paranaense', 21, ''),
(339, 'SC Dnipro-1', 24, ''),
(340, 'Atlas', 29, ''),
(341, 'Lech Poznan', 24, ''),
(342, 'Swansea City', 34, ''),
(343, 'FK Austria Vienna', 30, ''),
(344, 'Steaua Bucuresti', 24, ''),
(345, 'Fatih Karagümrük', 9, ''),
(346, 'Terek Grozny', 35, ''),
(347, 'Go Ahead Eagles', 16, ''),
(348, 'Yokohama F. Marinos', 18, ''),
(349, 'Cercle Brugge', 23, ''),
(350, 'FC Sheriff Tiraspol', 12, ''),
(351, 'FK Partizan Belgrade', 24, ''),
(352, 'Nantes', 6, ''),
(353, 'LASK Linz', 30, ''),
(354, 'Vasco da Gama', 21, ''),
(355, 'Corinthians', 21, ''),
(356, 'Coventry City', 34, ''),
(357, 'PAOK Salonika', 11, ''),
(358, 'Guadalajara', 29, ''),
(359, 'Santos', 21, ''),
(360, 'Famalicao', 33, ''),
(361, 'Verona', 7, ''),
(362, 'Cruz Azul', 29, ''),
(363, 'Vissel Kobe', 18, ''),
(364, 'Konyaspor', 9, ''),
(365, 'Metz', 14, ''),
(366, 'Boavista', 33, ''),
(367, 'Frosinone', 27, ''),
(368, 'Heerenveen', 16, ''),
(369, 'Cruzeiro', 21, ''),
(370, 'Talleres de Córdoba', 25, ''),
(371, 'Argentinos Juniors', 25, ''),
(372, 'FK Qarabag', 12, ''),
(373, 'Maccabi Haifa', 36, ''),
(374, 'Malmo FF', 15, ''),
(375, 'Hapoel Be\'er', 24, ''),
(376, 'BK Hacken', 15, ''),
(377, 'Spezia', 7, ''),
(378, 'NEC', 16, ''),
(379, 'Toluca', 29, ''),
(380, 'Salernitana', 7, ''),
(381, 'West Bromwich Albion', 34, ''),
(382, 'Gil Vicente', 33, ''),
(383, 'Rapid Vienna', 30, ''),
(384, 'Chaves', 33, ''),
(385, 'Auxerre', 6, ''),
(386, 'Cagliari', 27, ''),
(387, 'FC Cincinnati', 28, ''),
(388, 'Vizela', 33, ''),
(389, 'Santos Laguna', 29, ''),
(390, 'Stoke City', 34, ''),
(391, 'AGF Aarhus', 3, ''),
(392, 'Cremonese', 7, ''),
(393, 'FC Arouca', 33, ''),
(394, 'Gazovik Orenburg', 35, ''),
(395, 'Boca Juniors', 25, ''),
(396, 'Atlanta United FC', 28, ''),
(397, 'Panathinaikos', 11, ''),
(398, 'Millwall', 34, ''),
(399, 'Genoa', 27, ''),
(400, 'Aris Salonika', 11, ''),
(401, 'Grêmio', 21, ''),
(402, 'Angers', 6, ''),
(403, 'Estudiantes', 25, ''),
(404, 'Dinamo Moscow', 35, ''),
(405, 'Nashville SC', 28, ''),
(406, 'St Gallen', 31, ''),
(407, 'Casa Pia', 33, ''),
(408, 'St Etienne', 14, ''),
(409, 'Rio Ave', 33, ''),
(410, 'Urawa Red Diamonds', 18, ''),
(411, 'Sunderland', 34, ''),
(412, 'Bahía', 21, ''),
(413, 'Norwich City', 34, ''),
(414, 'Brondby', 3, ''),
(415, 'Watford', 34, ''),
(416, 'IF Elfsborg', 15, ''),
(417, 'Bordeaux', 14, ''),
(418, 'América Mineiro', 21, ''),
(419, 'KVC Westerlo', 23, ''),
(420, 'Kawasaki Frontale', 18, ''),
(421, 'AEK Larnaca', 12, ''),
(422, 'Apollon Limassol', 24, ''),
(423, 'Columbus Crew', 28, ''),
(424, 'Seattle Sounders FC', 28, ''),
(425, 'FC Lugano', 31, ''),
(426, 'New York City FC', 28, ''),
(427, 'OH Leuven', 23, ''),
(428, 'New York Red Bulls', 28, ''),
(429, 'San Lorenzo', 25, ''),
(430, 'Blackburn', 34, ''),
(431, 'Santa Clara', 33, ''),
(432, 'FC St. Pauli', 1, ''),
(433, 'Rostov', 35, ''),
(434, 'Maritimo', 33, ''),
(435, 'Hibernian', 5, ''),
(436, 'Bristol City', 34, ''),
(437, 'Hearts', 5, ''),
(438, 'Rosenborg', 4, ''),
(439, 'FC Nordsjaelland', 3, ''),
(440, 'Lanus', 25, ''),
(441, 'CFR 1907 Cluj', 24, ''),
(442, 'Orlando City SC', 28, ''),
(443, 'Wolfsberger AC', 30, ''),
(444, 'Levante', 17, ''),
(445, 'Viborg', 3, ''),
(446, 'DC United', 28, ''),
(447, 'Kashima Antlers', 18, ''),
(448, 'Tenerife', 17, ''),
(449, 'FC Dallas', 28, ''),
(450, 'New England Revolution', 28, ''),
(451, 'Cuiaba', 21, ''),
(452, 'Basel', 31, ''),
(453, 'Vancouver Whitecaps', 28, ''),
(454, 'Ludogorets', 12, ''),
(455, 'Nagoya Grampus Eight', 18, ''),
(456, 'Hamburg SV', 1, ''),
(457, 'Parma', 27, ''),
(458, 'Puebla', 29, ''),
(459, 'Sampdoria', 7, ''),
(460, 'Standard Liege', 23, ''),
(461, 'Motherwell', 5, ''),
(462, 'Silkeborg', 3, ''),
(463, 'FC Andorra', 17, ''),
(464, 'Sporting de Charleroi', 23, ''),
(465, 'FC Zurich', 31, ''),
(466, 'St. Truidense', 23, ''),
(467, 'Velez Sarsfield', 25, ''),
(468, 'Pumas Unam', 29, ''),
(469, 'SC Paderborn', 1, ''),
(470, 'Portimonense', 33, ''),
(471, 'Defensa y Justicia', 25, ''),
(472, 'Bastia', 14, ''),
(473, 'Estoril Praia', 33, ''),
(474, 'Portland Timbers', 28, ''),
(475, 'Granada', 17, ''),
(476, 'Bari', 27, ''),
(477, 'Mamelodi Sundowns', 20, ''),
(478, 'Sanfrecce Hiroshima', 18, ''),
(479, 'Servette', 31, ''),
(480, 'Atlético San Luis', 29, ''),
(481, 'Los Angeles Galaxy', 28, ''),
(482, 'FC Volendam', 16, ''),
(483, 'RKC', 16, ''),
(484, 'Caen', 14, ''),
(485, 'Odense BK', 3, ''),
(486, 'Goiás', 21, ''),
(487, 'Sivasspor', 9, ''),
(488, 'Kasimpasa', 9, ''),
(489, 'Coritiba', 21, ''),
(490, 'Guingamp', 14, ''),
(491, 'Tigre', 25, ''),
(492, 'Minnesota United FC', 28, ''),
(493, 'F.B.C Unione Venezia', 27, ''),
(494, 'Necaxa', 29, ''),
(495, 'Rosario Central', 25, ''),
(496, 'Hull City', 34, ''),
(497, 'Fortuna Düsseldorf', 1, ''),
(498, 'Lillestrom', 4, ''),
(499, 'Kayserispor', 9, ''),
(500, 'Aberdeen', 5, ''),
(501, 'Paris FC', 14, ''),
(502, 'Preston North End', 34, ''),
(503, 'SK Brann', 4, ''),
(504, 'Real Zaragoza', 17, ''),
(505, 'Omonia Nicosia', 12, ''),
(506, 'Sporting Kansas City', 28, ''),
(507, 'Albacete', 17, ''),
(508, 'Antalyaspor', 9, ''),
(509, 'FC Luzern', 31, ''),
(510, 'Racing Club', 25, ''),
(511, 'Cerezo Osaka', 18, ''),
(512, 'Fortuna Sittard', 16, ''),
(513, 'Alavés', 17, ''),
(514, 'Newell\'s Old Boys', 25, ''),
(515, 'Karlsruher SC', 1, ''),
(516, 'Tijuana', 29, ''),
(517, 'Le Havre', 14, ''),
(518, 'San Jose Earthquakes', 28, ''),
(519, 'AC Ajaccio', 6, ''),
(520, 'Slovan Bratislava', 24, ''),
(521, 'Ural Sverdlovsk Oblast', 35, ''),
(522, '1. FC Heidenheim 1846', 1, ''),
(523, 'Consadole Sapporo', 18, ''),
(524, 'Krylia Sovetov', 35, ''),
(525, 'Sheffield Wednesday', 8, ''),
(526, 'KV Mechelen', 23, ''),
(527, 'Toronto FC', 28, ''),
(528, 'Montreal Impact', 28, ''),
(529, 'Huracán', 25, ''),
(530, 'Djurgardens IF', 15, ''),
(531, 'Pacos Ferreira', 33, ''),
(532, 'FC Juárez', 29, ''),
(533, 'Eibar', 17, ''),
(534, 'Viking FK', 4, ''),
(535, 'CA Independiente', 25, ''),
(536, 'Colon Santa Fe', 25, ''),
(537, 'Barnsley', 8, ''),
(538, 'Sochi', 35, ''),
(539, 'Charlotte FC', 28, ''),
(540, 'Birmingham', 34, ''),
(541, 'Alanyaspor', 9, ''),
(542, 'Cardiff City', 34, ''),
(543, 'WSG Swarovski Wattens', 30, ''),
(544, 'Las Palmas', 17, ''),
(545, 'Godoy Cruz', 25, ''),
(546, 'Banfield', 25, ''),
(547, 'Randers FC', 3, ''),
(548, 'SpVgg Greuther Fürth', 1, ''),
(549, 'Ankaragucu', 9, ''),
(550, 'Istanbulspor', 9, ''),
(551, 'Chicago Fire', 28, ''),
(552, 'Querétaro', 29, ''),
(553, 'Troyes', 6, ''),
(554, 'Fakel Voronezh', 35, ''),
(555, 'Wigan', 34, ''),
(556, 'FC Groningen', 16, ''),
(557, 'Excelsior', 16, ''),
(558, 'Austria Lustenau', 30, ''),
(559, 'Austin FC', 28, ''),
(560, 'Como', 27, ''),
(561, 'Sochaux', 14, ''),
(562, 'Houston Dynamo', 28, ''),
(563, 'Huddersfield Town', 34, ''),
(564, 'Emmen', 16, ''),
(565, 'Grasshoppers Zürich', 31, ''),
(566, 'Valerenga', 4, ''),
(567, 'FK Nizhny Novgorod', 35, ''),
(568, 'SK Austria Klagenfurt', 30, ''),
(569, 'Colorado Rapids', 28, ''),
(570, 'Queens Park Rangers', 34, ''),
(571, 'Hammarby', 15, ''),
(572, 'Holstein Kiel', 1, ''),
(573, 'SV Darmstadt 98', 1, ''),
(574, 'Real Salt Lake', 28, ''),
(575, 'Mazatlán FC', 29, ''),
(576, 'Instituto', 25, ''),
(577, 'Atlético Tucumán', 25, ''),
(578, 'Ballkani', 24, ''),
(579, 'Melbourne City', 10, ''),
(580, 'Leganes', 17, ''),
(581, 'FC Tokyo', 18, ''),
(582, 'Sarmiento', 25, ''),
(583, 'Platense', 25, ''),
(584, 'Hartberg', 30, ''),
(585, 'Pisa', 27, ''),
(586, 'Belgrano Cordoba', 25, ''),
(587, 'Cambuur Leeuwarden', 16, ''),
(588, 'Rotherham United', 34, ''),
(589, 'Gimnasia La Plata', 25, ''),
(590, 'Sudtirol', 27, ''),
(591, 'St. Louis CITY SC', 28, ''),
(592, 'Sagan Tosu', 18, ''),
(593, 'Bolton', 8, ''),
(594, 'Real Oviedo', 17, ''),
(595, 'Sarpsborg', 4, ''),
(596, 'Tromso', 4, ''),
(597, 'Umraniyespor', 9, ''),
(598, 'Palermo', 27, ''),
(599, 'Rigas Futbola Skola', 24, ''),
(600, 'AaB', 3, ''),
(601, 'Villarreal B', 17, ''),
(602, 'Giresunspor', 9, ''),
(603, '1. FC Kaiserslautern', 1, ''),
(604, 'Málaga', 17, ''),
(605, 'Blackpool', 34, ''),
(606, 'Plymouth Argyle', 8, ''),
(607, 'Racing Santander', 17, ''),
(608, 'Dijon FCO', 14, ''),
(609, 'Central Córdoba Santiago del Estero', 25, ''),
(610, 'Barracas Central', 25, ''),
(611, 'Zalgiris Vilnius', 24, ''),
(612, 'St Mirren', 5, ''),
(613, 'Central Coast Mariners', 10, ''),
(614, 'Union Santa Fe', 25, ''),
(615, 'Peterborough United', 8, ''),
(616, 'IFK Norrkoping', 15, ''),
(617, 'Derby County', 8, ''),
(618, 'FC Cartagena', 17, ''),
(619, 'FC Vaduz', 31, ''),
(620, 'Sporting Gijón', 17, ''),
(621, 'KV Kortrijk', 23, ''),
(622, 'Inter Miami CF', 28, ''),
(623, 'Kalmar FF', 15, ''),
(624, 'Reading', 34, ''),
(625, 'US Quevilly', 14, ''),
(626, 'Ascoli', 27, ''),
(627, 'SD Huesca', 17, ''),
(628, 'Odd BK', 4, ''),
(629, 'Kilmarnock', 5, ''),
(630, 'St Johnstone', 5, ''),
(631, 'OFI Crete', 11, ''),
(632, 'Mirandes', 17, ''),
(633, 'Valenciennes', 14, ''),
(634, 'Arminia Bielefeld', 1, ''),
(635, '1. FC Magdeburg', 1, ''),
(636, 'Modena', 27, ''),
(637, 'Reggina', 27, ''),
(638, 'Rodez', 14, ''),
(639, 'HJK Helsinki', 12, ''),
(640, 'Grenoble', 14, ''),
(641, 'Lyngby', 3, ''),
(642, 'Guangzhou Evergrande', 32, ''),
(643, 'Portsmouth', 8, ''),
(644, 'SV Zulte Waregem', 23, ''),
(645, 'Pau', 14, ''),
(646, 'Cittadella', 27, ''),
(647, 'Avispa Fukuoka', 18, ''),
(648, 'Hannover 96', 1, ''),
(649, 'Kashiwa Reysol', 18, ''),
(650, 'Ross County', 5, ''),
(651, 'Amiens', 14, ''),
(652, 'Orlando Pirates', 20, ''),
(653, 'Spal', 27, ''),
(654, 'SD Ponferradina', 17, ''),
(655, 'Perugia', 27, ''),
(656, 'Nimes', 14, ''),
(657, 'Atromitos', 11, ''),
(658, 'Arsenal Sarandi', 25, ''),
(659, 'Stromsgodset', 4, ''),
(660, 'San Antonio FC', 26, ''),
(661, 'Kyoto Purple Sanga', 18, ''),
(662, 'Burgos', 17, ''),
(663, 'AIK', 15, ''),
(664, 'Gamba Osaka', 18, ''),
(665, 'Stabaek', 4, ''),
(666, 'Livingston', 5, ''),
(667, 'Cashpoint SC Rheindorf Altach', 30, ''),
(668, 'Sydney FC', 10, ''),
(669, 'Ternana', 27, ''),
(670, 'Charlton Athletic', 8, ''),
(671, 'SV Ried', 30, ''),
(672, 'Western Sydney FC', 10, ''),
(673, 'Shonan Bellmare', 18, ''),
(674, 'Laval', 14, ''),
(675, 'Benevento', 27, ''),
(676, 'Beijing Guoan', 32, ''),
(677, '1. FC Nürnberg', 1, ''),
(678, 'Louisville City FC', 26, ''),
(679, 'Dundee Utd', 5, ''),
(680, 'Wycombe Wanderers', 8, ''),
(681, 'Haugesund', 4, ''),
(682, 'Annecy', 14, ''),
(683, 'Shanghai SIPG', 32, ''),
(684, 'Jahn Regensburg', 1, ''),
(685, 'San Diego Loyal SC', 26, ''),
(686, 'Tampa Bay Rowdies', 26, ''),
(687, 'Pyunik Yerevan', 24, ''),
(688, 'IFK Goteborg', 15, ''),
(689, 'UD Ibiza', 17, ''),
(690, 'Fleetwood Town', 8, ''),
(691, 'Hansa Rostock', 1, ''),
(692, 'Sacramento Republic FC', 26, ''),
(693, 'FC Khimki', 35, ''),
(694, 'KV Oostende', 23, ''),
(695, 'Winterthur', 31, ''),
(696, 'Brescia', 27, ''),
(697, 'Giannina', 11, ''),
(698, 'AC Horsens', 3, ''),
(699, 'Arizona United', 26, ''),
(700, 'Memphis 901 FC', 26, ''),
(701, 'Lincoln City', 8, ''),
(702, 'Eintracht Braunschweig', 1, ''),
(703, 'Adelaide United', 10, ''),
(704, 'Albirex Niigata', 18, ''),
(705, 'Eupen', 23, ''),
(706, 'Exeter City', 8, ''),
(707, 'Asteras Tripolis', 11, ''),
(708, 'Sandefjord', 4, ''),
(709, 'Melbourne Victory', 10, ''),
(710, 'FC Sion', 31, ''),
(711, 'IK Sirius', 15, ''),
(712, 'Colorado Springs Switchbacks FC', 26, ''),
(713, 'Torpedo Moskow', 35, ''),
(714, 'Lugo', 17, ''),
(715, 'Cosenza', 27, ''),
(716, 'Shamrock Rovers', 24, ''),
(717, 'Mjallby', 15, ''),
(718, 'Oxford United', 8, ''),
(719, 'Black Aces', 20, ''),
(720, 'RFC Seraing', 23, ''),
(721, 'Oakland Roots', 26, ''),
(722, 'Brommapojkarna', 15, ''),
(723, 'Stellenbosch FC', 20, ''),
(724, 'Volos NFC', 11, ''),
(725, 'Burton Albion', 8, ''),
(726, 'Aalesund', 4, ''),
(727, 'El Paso Locomotive FC', 26, ''),
(728, 'Niort', 14, ''),
(729, 'Ionikos FC', 11, ''),
(730, 'Levadiakos', 11, ''),
(731, 'Shrewsbury Town', 8, ''),
(732, 'SuperSport United', 20, ''),
(733, 'SV Sandhausen', 1, ''),
(734, 'Shandong Luneng', 32, ''),
(735, 'Salford City', 14, ''),
(736, 'Jiangsu Suning FC', 32, ''),
(737, 'Cheltenham Town', 8, ''),
(738, 'Gazisehir Gaziantep', 9, ''),
(739, 'Halmstads BK', 15, ''),
(740, 'Mansfield Town', 14, ''),
(741, 'Milton Keynes Dons', 8, ''),
(742, 'Panetolikos', 11, ''),
(743, 'New Mexico United', 26, ''),
(744, 'Yokohama FC', 18, ''),
(745, 'Stockport County', 14, ''),
(746, 'Hamarkamaratene', 4, ''),
(747, 'IFK Värnamo', 15, ''),
(748, 'Pittsburgh Riverhounds', 26, ''),
(749, 'Bristol Rovers', 8, ''),
(750, 'Western United', 10, ''),
(751, 'Wellington Phoenix', 10, ''),
(752, 'Orange County SC', 26, ''),
(753, 'TS Galaxy', 20, ''),
(754, 'Kaizer Chiefs', 20, ''),
(755, 'Birmingham Legion FC', 26, ''),
(756, 'Brisbane Roar', 10, ''),
(757, 'Lamia', 11, ''),
(758, 'Newcastle Jets', 10, ''),
(759, 'Degerfors IF', 15, ''),
(760, 'Port Vale', 8, ''),
(761, 'AmaZulu', 20, ''),
(762, 'Bradford City', 14, ''),
(763, 'Swindon Town', 14, ''),
(764, 'Miami FC', 26, ''),
(765, 'Leyton Orient', 14, ''),
(766, 'Carlisle United', 14, ''),
(767, 'Morecambe', 8, ''),
(768, 'Golden Arrows', 20, ''),
(769, 'Newport County', 14, ''),
(770, 'Hatayspor', 9, ''),
(771, 'Royal AM', 20, ''),
(772, 'Perth Glory', 10, ''),
(773, 'Sekhukhune United', 20, ''),
(774, 'Cambridge United', 8, ''),
(775, 'Stevenage', 14, ''),
(776, 'Northampton Town', 14, ''),
(777, 'Hartford Athletic', 26, ''),
(778, 'Monterey Bay', 26, ''),
(779, 'Indy Eleven', 26, ''),
(780, 'Tianjin Teda', 32, ''),
(781, 'Macarthur FC', 10, ''),
(782, 'Varbergs BoIS FC', 15, ''),
(783, 'Charleston Battery', 26, ''),
(784, 'Shanghai Greenland', 32, ''),
(785, 'Harrogate Town', 14, ''),
(786, 'Moroka Swallows', 20, ''),
(787, 'Tulsa Roughnecks', 26, ''),
(788, 'Rio Grande Valley FC Toros', 26, ''),
(789, 'Hebei China Fortune FC', 32, ''),
(790, 'Colchester United', 14, ''),
(791, 'Henan Jianye', 32, ''),
(792, 'Las Vegas Lights FC', 26, ''),
(793, 'Gillingham', 14, ''),
(794, 'Dalian Aerbin', 32, ''),
(795, 'Tshakhuma Tsha Madzivhandila', 20, ''),
(796, 'Guangzhou RF', 32, ''),
(797, 'Maritzburg Utd', 20, ''),
(798, 'Accrington Stanley', 8, ''),
(799, 'Wuhan Zall', 32, ''),
(800, 'Crewe Alexandra', 14, ''),
(801, 'Detroit City FC', 26, ''),
(802, 'Richards Bay', 20, ''),
(803, 'Rochdale', 14, ''),
(804, 'Grimsby Town', 14, ''),
(805, 'Chippa United', 20, ''),
(806, 'Tranmere Rovers', 14, ''),
(807, 'Loudoun United FC', 26, ''),
(808, 'Tianjin Quanujian', 32, ''),
(809, 'Barrow', 14, ''),
(810, 'Shenzhen FC', 32, ''),
(811, 'Chongqing Lifan', 32, ''),
(812, 'Hartlepool', 14, ''),
(813, 'Walsall', 14, ''),
(814, 'Sutton United', 14, ''),
(815, 'AFC Wimbledon', 14, ''),
(816, 'Doncaster Rovers', 14, ''),
(817, 'Forest Green Rovers', 8, ''),
(818, 'Crawley Town', 14, ''),
(819, 'Guizhou Renhe', 32, '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(32) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(32) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `league`
--
ALTER TABLE `league`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master`
--
ALTER TABLE `master`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `name_2` (`name`);

--
-- Indexes for table `tb1`
--
ALTER TABLE `tb1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb2`
--
ALTER TABLE `tb2`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `name_2` (`name`,`league_id`),
  ADD KEY `league_id` (`league_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `league`
--
ALTER TABLE `league`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `master`
--
ALTER TABLE `master`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `tb1`
--
ALTER TABLE `tb1`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tb2`
--
ALTER TABLE `tb2`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=838;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `teams`
--
ALTER TABLE `teams`
  ADD CONSTRAINT `teams_ibfk_1` FOREIGN KEY (`league_id`) REFERENCES `league` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
