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
INSERT INTO `bot` VALUES (65,'2012-04-09 11:14:12',0);
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
  `sid` int(11) NOT NULL,
  `sensor` varchar(50) NOT NULL,
  `port_io` varchar(50) NOT NULL,
  `theta` varchar(20) NOT NULL,
  `vector` varchar(50) NOT NULL,
  `l_vel` varchar(20) NOT NULL,
  `r_vel` varchar(20) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `botinfo`
--

LOCK TABLES `botinfo` WRITE;
/*!40000 ALTER TABLE `botinfo` DISABLE KEYS */;
INSERT INTO `botinfo` VALUES (65,1101,'1:232:216:234:231:237:129:75:70','0:0:0:0:0:0:0:0:0:0:0:0','0','0','10','10');
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
INSERT INTO `sendtobot` VALUES (100,'uddhav','2012-04-10 01:18:35','F#'),(100,'uddhav','2012-04-10 01:18:36','L#'),(100,'uddhav','2012-04-10 01:18:37','B#'),(100,'uddhav','2012-04-10 01:18:38','R#'),(65,'uddhav','2012-04-10 01:33:31','P#'),(100,'uddhav','2012-04-10 02:23:26','F#'),(100,'uddhav','2012-04-10 02:23:26','F#'),(100,'uddhav','2012-04-10 02:23:27','F#'),(100,'uddhav','2012-04-10 02:23:27','F#'),(100,'uddhav','2012-04-10 02:23:27','F#'),(100,'uddhav','2012-04-10 02:23:27','B#'),(100,'uddhav','2012-04-10 02:23:27','B#'),(100,'uddhav','2012-04-10 02:23:28','B#'),(100,'uddhav','2012-04-10 02:23:28','B#'),(100,'uddhav','2012-04-10 02:23:28','B#'),(100,'uddhav','2012-04-10 02:23:28','B#'),(100,'uddhav','2012-04-10 02:23:38','F#'),(100,'uddhav','2012-04-10 02:23:38','B#'),(100,'uddhav','2012-04-10 02:23:39','L#'),(100,'uddhav','2012-04-10 02:23:39','R#'),(100,'uddhav','2012-04-10 02:23:39','B#'),(100,'uddhav','2012-04-10 02:23:40','F#'),(100,'uddhav','2012-04-10 02:23:40','L#'),(100,'uddhav','2012-04-10 02:23:40','R#'),(100,'uddhav','2012-04-10 02:23:41','B#'),(100,'uddhav','2012-04-10 02:23:41','F#'),(100,'uddhav','2012-04-10 02:23:41','L#'),(100,'uddhav','2012-04-10 02:23:41','R#'),(100,'uddhav','2012-04-10 02:23:42','B#'),(100,'uddhav','2012-04-10 02:23:42','F#'),(100,'uddhav','2012-04-10 02:23:42','L#'),(100,'uddhav','2012-04-10 02:23:42','R#'),(100,'uddhav','2012-04-10 02:23:43','B#'),(100,'uddhav','2012-04-10 02:23:43','F#'),(100,'uddhav','2012-04-10 02:23:43','L#'),(100,'uddhav','2012-04-10 02:23:43','B#'),(100,'uddhav','2012-04-10 02:23:44','R#'),(100,'uddhav','2012-04-10 02:23:44','F#'),(100,'uddhav','2012-04-10 02:23:44','L#'),(100,'uddhav','2012-04-10 02:23:44','B#'),(100,'uddhav','2012-04-10 02:23:44','R#'),(100,'uddhav','2012-04-10 02:23:45','F#'),(100,'uddhav','2012-04-10 02:23:45','L#'),(100,'uddhav','2012-04-10 02:23:45','B#'),(100,'uddhav','2012-04-10 02:23:45','F#'),(100,'uddhav','2012-04-10 02:23:46','B#'),(100,'uddhav','2012-04-10 02:25:35','F#'),(100,'uddhav','2012-04-10 02:25:35','F#'),(100,'uddhav','2012-04-10 02:25:35','B#'),(100,'uddhav','2012-04-10 02:25:38','F#'),(100,'uddhav','2012-04-10 02:25:38','B#'),(100,'uddhav','2012-04-10 02:25:38','L#'),(100,'uddhav','2012-04-10 02:25:39','F#'),(100,'uddhav','2012-04-10 02:25:39','B#'),(100,'uddhav','2012-04-10 02:25:39','R#'),(100,'uddhav','2012-04-10 02:25:40','#'),(100,'uddhav','2012-04-10 02:25:40','B#'),(100,'uddhav','2012-04-10 02:26:24','F#'),(100,'uddhav','2012-04-10 02:26:25','B#'),(100,'uddhav','2012-04-10 02:26:25','F#'),(100,'uddhav','2012-04-10 02:26:25','L#'),(100,'uddhav','2012-04-10 02:26:26','L#'),(100,'uddhav','2012-04-10 02:26:26','R#'),(100,'uddhav','2012-04-10 02:26:26','F#'),(100,'uddhav','2012-04-10 02:26:26','B#'),(100,'uddhav','2012-04-10 02:26:27','L#'),(100,'uddhav','2012-04-10 02:26:27','F#'),(100,'uddhav','2012-04-10 02:26:28','B#'),(100,'uddhav','2012-04-10 02:26:28','F#'),(100,'uddhav','2012-04-10 02:26:28','R#'),(100,'uddhav','2012-04-10 02:26:28','#'),(100,'uddhav','2012-04-10 02:26:29','F#'),(100,'uddhav','2012-04-10 02:26:29','R#'),(100,'uddhav','2012-04-10 02:26:29','#'),(100,'uddhav','2012-04-10 02:26:30','#'),(100,'uddhav','2012-04-10 02:26:30','#'),(100,'uddhav','2012-04-10 02:26:30','#'),(100,'uddhav','2012-04-10 02:26:30','R#'),(100,'uddhav','2012-04-10 02:26:30','#'),(100,'uddhav','2012-04-10 02:44:16','F#'),(100,'uddhav','2012-04-10 02:44:16','F#'),(100,'uddhav','2012-04-10 02:44:18','B#'),(100,'uddhav','2012-04-10 03:28:28','F#');
/*!40000 ALTER TABLE `sendtobot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session`
--

DROP TABLE IF EXISTS `session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `session` (
  `sid` int(11) NOT NULL,
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
INSERT INTO `user` VALUES ('uddhav','uddhav@bot',1),('apollo','nilu',1),('nilu','pilu',1);
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

-- Dump completed on 2012-04-10 13:02:09
