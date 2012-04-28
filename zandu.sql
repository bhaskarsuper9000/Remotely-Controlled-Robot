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
INSERT INTO `bot` VALUES (97,'2012-04-26 10:39:40',1),(12,'2012-04-26 12:57:16',0);
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
INSERT INTO `botinfo` VALUES (97,'1101','0:0:0:0:0:0:0:0:0','0:0:0:0:0:0:0:0:0:0:0:0','0','0','0','10','10','0','0'),(12,'1112','0:0:0:0:0:0:0:0:0','0:0:0:0:0:0:0:0:0:0:0:0','0','0','0','51','57','0','0');
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
INSERT INTO `sendtobot` VALUES (12,'uddhav','2012-04-26 09:22:46','V#51#'),(12,'uddhav','2012-04-26 09:22:45','C#57#'),(12,'uddhav','2012-04-26 09:20:37','146'),(-1,'uddhav','2012-04-26 09:09:47','F#'),(-1,'uddhav','2012-04-26 09:09:46','F#'),(-1,'uddhav','2012-04-26 09:04:00','F#'),(-1,'uddhav','2012-04-26 09:04:00','F#'),(-1,'uddhav','2012-04-26 09:04:00','F#'),(-1,'uddhav','2012-04-26 09:04:00','F#'),(-1,'uddhav','2012-04-26 09:03:59','F#'),(-1,'uddhav','2012-04-26 07:29:15','F#');
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

-- Dump completed on 2012-04-27 16:42:43
