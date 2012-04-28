-- MySQL dump 10.13  Distrib 5.1.41, for debian-linux-gnu (i486)
--
-- Host: localhost    Database: zandu
-- ------------------------------------------------------
-- Server version	5.1.41-3ubuntu12.10

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bot`
--

DROP TABLE IF EXISTS `bot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bot` (
  `bot_id` int(11) NOT NULL,
  `reg_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `bot_status` int(11) NOT NULL,
  PRIMARY KEY (`bot_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bot`
--

LOCK TABLES `bot` WRITE;
/*!40000 ALTER TABLE `bot` DISABLE KEYS */;
INSERT INTO `bot` VALUES (65,'2012-04-25 13:20:51',0),(66,'2012-04-25 13:21:35',0),(67,'2012-04-25 12:44:40',0),(68,'2012-04-11 15:06:02',1),(69,'2012-04-11 13:54:21',1),(78,'2012-04-11 07:24:06',1);
/*!40000 ALTER TABLE `bot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `botinfo`
--

DROP TABLE IF EXISTS `botinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `botinfo` (
  `bot_id` int(11) NOT NULL,
  `sid` varchar(50) NOT NULL,
  `sensor` varchar(50) NOT NULL,
  `port_io` varchar(50) NOT NULL,
  `bot_x` varchar(20) NOT NULL,
  `bot_y` varchar(20) NOT NULL,
  `alpha` varchar(20) NOT NULL,
  `l_vel` varchar(20) NOT NULL,
  `r_vel` varchar(20) NOT NULL,
  `canvas_x` varchar(20) NOT NULL,
  `canvas_y` varchar(20) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `botinfo`
--

LOCK TABLES `botinfo` WRITE;
/*!40000 ALTER TABLE `botinfo` DISABLE KEYS */;
INSERT INTO `botinfo` VALUES (65,'1101','1:232:216:234:231:237:129:5:5','0:0:0:0:0:0:0:0:0:0:0:0','24.30224411957431','122.03070423501579','-5.820673055401086','164','47','9','-25');
/*!40000 ALTER TABLE `botinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sendtobot`
--

DROP TABLE IF EXISTS `sendtobot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sendtobot` (
  `bot_id` int(11) NOT NULL,
  `uid` varchar(50) NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `command` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sendtobot`
--

LOCK TABLES `sendtobot` WRITE;
/*!40000 ALTER TABLE `sendtobot` DISABLE KEYS */;
INSERT INTO `sendtobot` VALUES (100,'uddhav','2012-04-10 01:18:35','F#'),(100,'uddhav','2012-04-10 01:18:36','L#'),(100,'uddhav','2012-04-10 01:18:37','B#'),(100,'uddhav','2012-04-10 01:18:38','R#'),(65,'uddhav','2012-04-10 01:33:31','P#'),(100,'uddhav','2012-04-10 02:23:26','F#'),(100,'uddhav','2012-04-10 02:23:26','F#'),(100,'uddhav','2012-04-10 02:23:27','F#'),(100,'uddhav','2012-04-10 02:23:27','F#'),(100,'uddhav','2012-04-10 02:23:27','F#'),(100,'uddhav','2012-04-10 02:23:27','B#'),(100,'uddhav','2012-04-10 02:23:27','B#'),(100,'uddhav','2012-04-10 02:23:28','B#'),(100,'uddhav','2012-04-10 02:23:28','B#'),(100,'uddhav','2012-04-10 02:23:28','B#'),(100,'uddhav','2012-04-10 02:23:28','B#'),(100,'uddhav','2012-04-10 02:23:38','F#'),(100,'uddhav','2012-04-10 02:23:38','B#'),(100,'uddhav','2012-04-10 02:23:39','L#'),(100,'uddhav','2012-04-10 02:23:39','R#'),(100,'uddhav','2012-04-10 02:23:39','B#'),(100,'uddhav','2012-04-10 02:23:40','F#'),(100,'uddhav','2012-04-10 02:23:40','L#'),(100,'uddhav','2012-04-10 02:23:40','R#'),(100,'uddhav','2012-04-10 02:23:41','B#'),(100,'uddhav','2012-04-10 02:23:41','F#'),(100,'uddhav','2012-04-10 02:23:41','L#'),(100,'uddhav','2012-04-10 02:23:41','R#'),(100,'uddhav','2012-04-10 02:23:42','B#'),(100,'uddhav','2012-04-10 02:23:42','F#'),(100,'uddhav','2012-04-10 02:23:42','L#'),(100,'uddhav','2012-04-10 02:23:42','R#'),(100,'uddhav','2012-04-10 02:23:43','B#'),(100,'uddhav','2012-04-10 02:23:43','F#'),(100,'uddhav','2012-04-10 02:23:43','L#'),(100,'uddhav','2012-04-10 02:23:43','B#'),(100,'uddhav','2012-04-10 02:23:44','R#'),(100,'uddhav','2012-04-10 02:23:44','F#'),(100,'uddhav','2012-04-10 02:23:44','L#'),(100,'uddhav','2012-04-10 02:23:44','B#'),(100,'uddhav','2012-04-10 02:23:44','R#'),(100,'uddhav','2012-04-10 02:23:45','F#'),(100,'uddhav','2012-04-10 02:23:45','L#'),(100,'uddhav','2012-04-10 02:23:45','B#'),(100,'uddhav','2012-04-10 02:23:45','F#'),(100,'uddhav','2012-04-10 02:23:46','B#'),(100,'uddhav','2012-04-10 02:25:35','F#'),(100,'uddhav','2012-04-10 02:25:35','F#'),(100,'uddhav','2012-04-10 02:25:35','B#'),(100,'uddhav','2012-04-10 02:25:38','F#'),(100,'uddhav','2012-04-10 02:25:38','B#'),(100,'uddhav','2012-04-10 02:25:38','L#'),(100,'uddhav','2012-04-10 02:25:39','F#'),(100,'uddhav','2012-04-10 02:25:39','B#'),(100,'uddhav','2012-04-10 02:25:39','R#'),(100,'uddhav','2012-04-10 02:25:40','#'),(100,'uddhav','2012-04-10 02:25:40','B#'),(100,'uddhav','2012-04-10 02:26:24','F#'),(100,'uddhav','2012-04-10 02:26:25','B#'),(100,'uddhav','2012-04-10 02:26:25','F#'),(100,'uddhav','2012-04-10 02:26:25','L#'),(100,'uddhav','2012-04-10 02:26:26','L#'),(100,'uddhav','2012-04-10 02:26:26','R#'),(100,'uddhav','2012-04-10 02:26:26','F#'),(100,'uddhav','2012-04-10 02:26:26','B#'),(100,'uddhav','2012-04-10 02:26:27','L#'),(100,'uddhav','2012-04-10 02:26:27','F#'),(100,'uddhav','2012-04-10 02:26:28','B#'),(100,'uddhav','2012-04-10 02:26:28','F#'),(100,'uddhav','2012-04-10 02:26:28','R#'),(100,'uddhav','2012-04-10 02:26:28','#'),(100,'uddhav','2012-04-10 02:26:29','F#'),(100,'uddhav','2012-04-10 02:26:29','R#'),(100,'uddhav','2012-04-10 02:26:29','#'),(100,'uddhav','2012-04-10 02:26:30','#'),(100,'uddhav','2012-04-10 02:26:30','#'),(100,'uddhav','2012-04-10 02:26:30','#'),(100,'uddhav','2012-04-10 02:26:30','R#'),(100,'uddhav','2012-04-10 02:26:30','#'),(100,'uddhav','2012-04-10 02:44:16','F#'),(100,'uddhav','2012-04-10 02:44:16','F#'),(100,'uddhav','2012-04-10 02:44:18','B#'),(100,'uddhav','2012-04-10 03:28:28','F#'),(100,'uddhav','2012-04-10 06:11:05',''),(100,'uddhav','2012-04-10 06:11:05',''),(100,'uddhav','2012-04-10 06:11:05',''),(100,'uddhav','2012-04-10 06:11:05',''),(100,'uddhav','2012-04-10 06:11:05',''),(100,'uddhav','2012-04-10 06:11:05',''),(100,'uddhav','2012-04-10 06:11:05',''),(100,'uddhav','2012-04-10 06:11:05',''),(100,'uddhav','2012-04-10 06:11:05',''),(100,'uddhav','2012-04-10 06:11:05',''),(100,'uddhav','2012-04-10 06:12:27',''),(100,'uddhav','2012-04-10 06:12:27',''),(100,'uddhav','2012-04-10 06:12:27',''),(100,'uddhav','2012-04-10 06:12:27',''),(100,'uddhav','2012-04-10 06:13:09','11'),(100,'uddhav','2012-04-10 06:13:09','17'),(100,'uddhav','2012-04-10 06:13:09','25'),(100,'uddhav','2012-04-10 06:13:09','31'),(100,'uddhav','2012-04-10 06:13:09','33'),(100,'uddhav','2012-04-10 06:13:09','35'),(100,'uddhav','2012-04-10 06:17:42','49'),(100,'uddhav','2012-04-10 06:20:01','71'),(100,'uddhav','2012-04-10 06:42:35','81'),(100,'uddhav','2012-04-10 06:42:50','136'),(100,'uddhav','2012-04-10 06:42:53','192'),(100,'uddhav','2012-04-10 06:43:01','115'),(100,'uddhav','2012-04-10 06:44:25','172'),(100,'uddhav','2012-04-10 06:44:27','214'),(100,'uddhav','2012-04-10 07:02:37','R#'),(65,'uddhav','2012-04-10 07:34:29','P#'),(100,'uddhav','2012-04-10 08:15:27','B#'),(100,'uddhav','2012-04-10 08:17:37','B#'),(100,'uddhav','2012-04-10 08:25:08','F#'),(100,'uddhav','2012-04-10 08:25:22','B#'),(100,'uddhav','2012-04-10 08:25:28','F#'),(100,'uddhav','2012-04-10 08:25:29','F#'),(100,'uddhav','2012-04-10 08:25:32','B#'),(100,'uddhav','2012-04-10 08:25:34','B#'),(100,'uddhav','2012-04-10 08:48:49','R#'),(100,'uddhav','2012-04-10 08:52:02','S#'),(100,'uddhav','2012-04-10 08:53:04','S#'),(100,'uddhav','2012-04-10 14:18:38','134'),(65,'uddhav','2012-04-10 14:29:57','P#'),(65,'uddhav','2012-04-10 14:30:50','P:148:16:16:34:128:8:16:16:16:208:72:6#'),(65,'uddhav','2012-04-10 14:30:52','P#'),(65,'uddhav','2012-04-10 14:30:55','P#'),(100,'uddhav','2012-04-11 05:30:17','S#'),(100,'uddhav','2012-04-11 05:37:51','S#'),(65,'naruto','2012-04-11 10:24:59','P#'),(65,'uddhav','2012-04-11 10:28:37','P#'),(65,'uddhav','2012-04-11 10:28:39','P#'),(100,'uddhav','2012-04-11 11:07:55','F#'),(100,'uddhav','2012-04-11 11:07:59','F#'),(100,'uddhav','2012-04-11 11:08:03','F#'),(100,'uddhav','2012-04-11 11:08:05','F#'),(100,'uddhav','2012-04-11 11:08:07','F#'),(100,'uddhav','2012-04-11 11:08:08','R#'),(100,'uddhav','2012-04-11 11:08:08','L#'),(100,'uddhav','2012-04-11 11:08:09','B#'),(100,'uddhav','2012-04-11 11:08:09','F#'),(100,'uddhav','2012-04-11 11:13:47','F#'),(100,'uddhav','2012-04-11 11:14:29','F#'),(65,'uddhav','2012-04-11 11:18:42','P#'),(65,'uddhav','2012-04-11 11:19:25','P#'),(100,'uddhav','2012-04-11 11:29:36','F#'),(100,'uddhav','2012-04-11 11:32:34','F#'),(100,'uddhav','2012-04-11 11:44:36','R#'),(100,'uddhav','2012-04-11 11:53:02','F#'),(100,'uddhav','2012-04-11 11:53:31','F#'),(100,'uddhav','2012-04-11 11:53:57','F#'),(100,'uddhav','2012-04-11 11:53:59','B#'),(100,'uddhav','2012-04-11 11:54:01','F#'),(100,'uddhav','2012-04-11 11:54:02','R#'),(100,'uddhav','2012-04-11 11:54:03','L#'),(100,'uddhav','2012-04-11 11:54:30','B#'),(100,'uddhav','2012-04-11 11:54:37','B#'),(100,'uddhav','2012-04-11 11:54:40','B#'),(100,'uddhav','2012-04-11 11:54:41','F#'),(100,'uddhav','2012-04-11 11:56:13','B#'),(100,'uddhav','2012-04-11 12:26:50','F#'),(100,'uddhav','2012-04-11 12:49:20','82'),(100,'uddhav','2012-04-11 12:49:26','100'),(100,'uddhav','2012-04-11 15:14:56','F#'),(100,'uddhav','2012-04-12 00:54:35','F#'),(100,'uddhav','2012-04-12 00:54:42','B#'),(100,'uddhav','2012-04-12 00:54:46','F#'),(100,'uddhav','2012-04-12 03:17:59','F#'),(100,'uddhav','2012-04-12 05:52:21','130'),(100,'uddhav','2012-04-12 05:52:40','132'),(100,'uddhav','2012-04-12 05:54:18','121'),(100,'uddhav','2012-04-12 06:00:12','87'),(65,'uddhav','2012-04-12 06:24:06','P#'),(100,'uddhav','2012-04-12 07:37:59','F#'),(100,'uddhav','2012-04-12 08:22:51','F#'),(65,'uddhav','2012-04-12 08:51:39','P#'),(65,'uddhav','2012-04-12 08:51:50','P#'),(65,'uddhav','2012-04-12 08:55:14','P#'),(65,'uddhav','2012-04-12 21:43:44','F#'),(65,'uddhav','2012-04-12 21:43:45','F#'),(65,'uddhav','2012-04-12 21:43:45','F#'),(65,'uddhav','2012-04-12 21:43:45','F#'),(65,'uddhav','2012-04-12 21:43:46','F#'),(65,'uddhav','2012-04-12 21:43:46','F#'),(65,'uddhav','2012-04-12 21:43:46','F#'),(65,'uddhav','2012-04-12 21:43:46','F#'),(65,'uddhav','2012-04-12 21:43:46','F#'),(65,'uddhav','2012-04-12 21:43:47','F#'),(65,'uddhav','2012-04-12 21:44:11','B#'),(65,'uddhav','2012-04-12 21:44:11','B#'),(65,'uddhav','2012-04-12 21:44:12','B#'),(65,'uddhav','2012-04-12 21:44:12','B#'),(65,'uddhav','2012-04-12 21:44:16','B#'),(65,'uddhav','2012-04-12 21:44:20','B#'),(65,'uddhav','2012-04-12 21:44:22','B#'),(65,'uddhav','2012-04-12 21:44:26','B#'),(65,'uddhav','2012-04-12 21:44:27','B#'),(65,'uddhav','2012-04-12 21:44:27','B#'),(65,'uddhav','2012-04-12 21:44:28','B#'),(65,'uddhav','2012-04-12 21:44:29','B#'),(65,'uddhav','2012-04-12 21:44:29','B#'),(65,'uddhav','2012-04-12 21:44:30','B#'),(65,'uddhav','2012-04-12 21:44:38','F#'),(65,'uddhav','2012-04-12 21:44:40','F#'),(65,'uddhav','2012-04-12 21:47:18','F#'),(65,'uddhav','2012-04-12 21:47:27','F#'),(65,'uddhav','2012-04-12 21:48:44','B#'),(65,'uddhav','2012-04-12 21:49:26','F#'),(65,'uddhav','2012-04-12 21:49:29','F#'),(65,'uddhav','2012-04-12 21:49:42','R#'),(65,'uddhav','2012-04-12 21:50:22','R#'),(65,'uddhav','2012-04-12 21:52:44','R#'),(65,'uddhav','2012-04-12 22:04:34','R#'),(65,'uddhav','2012-04-12 22:04:47','R#'),(65,'uddhav','2012-04-12 22:06:15','R#'),(65,'uddhav','2012-04-12 22:09:44','R#'),(65,'uddhav','2012-04-12 22:11:00','F#'),(65,'uddhav','2012-04-12 22:11:11','R#'),(65,'uddhav','2012-04-12 22:11:26','F#'),(65,'uddhav','2012-04-12 22:11:31','R#'),(65,'uddhav','2012-04-12 22:11:42','F#'),(65,'uddhav','2012-04-12 22:12:40','B#'),(65,'uddhav','2012-04-12 22:12:41','B#'),(65,'uddhav','2012-04-12 22:12:42','B#'),(65,'uddhav','2012-04-12 22:12:46','B#'),(65,'uddhav','2012-04-12 22:12:50','R#'),(65,'uddhav','2012-04-12 22:12:56','F#'),(65,'uddhav','2012-04-12 22:12:57','F#'),(65,'uddhav','2012-04-12 22:12:59','F#'),(65,'uddhav','2012-04-12 22:13:00','F#'),(65,'uddhav','2012-04-12 22:13:02','F#'),(65,'uddhav','2012-04-14 08:43:22','F#'),(65,'uddhav','2012-04-14 08:43:47','B#'),(65,'uddhav','2012-04-14 08:45:40','P#'),(65,'uddhav','2012-04-19 13:15:31','F#'),(65,'uddhav','2012-04-19 13:15:36','B#'),(65,'uddhav','2012-04-19 13:20:13','F#'),(65,'uddhav','2012-04-19 13:20:17','B#'),(65,'uddhav','2012-04-19 13:52:34','F#'),(65,'uddhav','2012-04-19 13:52:39','B#'),(65,'uddhav','2012-04-19 13:52:48','F#'),(65,'uddhav','2012-04-19 13:52:53','F#'),(65,'uddhav','2012-04-19 13:52:58','B#'),(65,'uddhav','2012-04-19 13:53:02','B#'),(65,'uddhav','2012-04-19 13:53:08','F#'),(65,'uddhav','2012-04-19 13:53:11','B#'),(65,'uddhav','2012-04-19 13:57:53','F#'),(65,'uddhav','2012-04-19 13:57:58','B#'),(65,'uddhav','2012-04-19 13:58:08','F#'),(65,'uddhav','2012-04-19 13:58:11','F#'),(65,'uddhav','2012-04-19 13:58:15','B#'),(65,'uddhav','2012-04-19 13:58:16','B#'),(65,'uddhav','2012-04-19 14:08:30','F#'),(65,'uddhav','2012-04-19 14:08:34','B#'),(65,'uddhav','2012-04-19 14:08:51','F#'),(65,'uddhav','2012-04-19 14:08:55','B#'),(-1,'uddhav','2012-04-24 10:22:50','F#'),(-1,'uddhav','2012-04-24 10:22:50','F#'),(-1,'uddhav','2012-04-24 10:22:50','F#'),(-1,'uddhav','2012-04-24 10:22:50','F#'),(-1,'uddhav','2012-04-24 10:23:36','F#'),(-1,'uddhav','2012-04-24 12:10:16','F#'),(-1,'nilu','2012-04-25 09:25:30','F#'),(65,'uddhav','2012-04-25 09:36:59','F#'),(65,'uddhav','2012-04-25 09:37:01','B#'),(65,'uddhav','2012-04-25 09:49:23','P#');
/*!40000 ALTER TABLE `sendtobot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session`
--

DROP TABLE IF EXISTS `session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `session` (
  `sid` varchar(50) NOT NULL,
  `uid` varchar(50) NOT NULL,
  `bot_id` int(11) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session`
--

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `uid` varchar(50) NOT NULL,
  `password` varchar(10) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('uddhav','uddhav@bot',1),('apollo','nilu',1),('nilu','pilu',1),('naruto','hinata',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-04-26 15:48:21
