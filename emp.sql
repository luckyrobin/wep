CREATE DATABASE  IF NOT EXISTS `emp` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `emp`;
-- MySQL dump 10.13  Distrib 5.6.21, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: emp
-- ------------------------------------------------------
-- Server version	5.6.21

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
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question` (
  `qid` int(11) NOT NULL AUTO_INCREMENT,
  `topic` varchar(255) NOT NULL,
  `topic_image` varchar(100) DEFAULT NULL,
  `options` varchar(100) NOT NULL,
  `anwser` varchar(45) NOT NULL,
  PRIMARY KEY (`qid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,'拯救大兵瑞恩》影片一开始再现了二战中的一场著名战役。请问这场战役是？','http://wxmovie.qq.com/wx/20141120/cai20/img/qa_pic1.jpg','[\'A．诺曼底登陆\',\'B．平型关大捷\']','0'),(2,'《兵临城下》男主角、神枪手瓦西里是什么兵种？','http://wxmovie.qq.com/wx/20141120/cai20/img/qa_pic2.jpg','[\'A．投弹手\',\'B．狙击手\']','1'),(3,'《巴顿将军》讲述了四星上将巴顿的生平，请问巴顿将军毕业于哪所著名军校？','http://wxmovie.qq.com/wx/20141120/cai20/img/qa_pic3.jpg','[\'A．黄埔军校\',\'B．西点军校\']','1'),(4,'《珍珠港》中珍珠港事件发生在什么地方？','http://wxmovie.qq.com/wx/20141120/cai20/img/qa_pic4.jpg','[\'A．美国夏威夷\',\'B．日本东京湾\']','0'),(5,'《兄弟连》讲述了一支______部队空投到欧洲开辟第二战场的故事。','http://wxmovie.qq.com/wx/20141120/cai20/img/qa_pic5.jpg','[\'A．潜艇\',\'B．空降兵\']','1');
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-11-30 21:06:24
