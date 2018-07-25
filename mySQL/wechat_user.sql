-- MySQL dump 10.13  Distrib 5.6.40, for macos10.13 (x86_64)
--
-- Host: localhost    Database: wechat_user
-- ------------------------------------------------------
-- Server version	5.6.40

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
-- Table structure for table `user_table`
--

DROP TABLE IF EXISTS `user_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` varchar(45) NOT NULL,
  `openid` varchar(45) DEFAULT NULL,
  `nickname` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `province` varchar(45) DEFAULT NULL,
  `Inviter_id` varchar(45) DEFAULT NULL,
  `sex` int(11) DEFAULT NULL,
  `icon_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`,`uuid`)
) ENGINE=InnoDB AUTO_INCREMENT=10009 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_table`
--

LOCK TABLES `user_table` WRITE;
/*!40000 ALTER TABLE `user_table` DISABLE KEYS */;
INSERT INTO `user_table` VALUES (1,'oEJhT0fHYJeFK0PenTo4kDRryRgY','o0Hkn4zUKywH9QJn4Ha2VS1Q7Gt8','    ','','','',1,'https://wx.qlogo.cn/mmopen/vi_32/dmy0EiaK5TmicgOd4TtTNJZBRwcTxP7GSpNwN0ljNdCrU86SiaQ6UtGyj4taShuZABYSflZXWHUaUhSGmZG5TsFQg/132'),(10000,'aaaa','ssss','sssssq','gz','gd','',NULL,'1'),(10001,'oEJhT0fHYJeFK0PenTo4kDRryRgY','o0Hkn4zUKywH9QJn4Ha2VS1Q7Gt8','    ','','','',1,'https://wx.qlogo.cn/mmopen/vi_32/dmy0EiaK5TmicgOd4TtTNJZBRwcTxP7GSpNwN0ljNdCrU86SiaQ6UtGyj4taShuZABYSflZXWHUaUhSGmZG5TsFQg/132'),(10002,'oEJhT0fHYJeFK0PenTo4kDRryRgY','o0Hkn4zUKywH9QJn4Ha2VS1Q7Gt8','    ','','','',1,'https://wx.qlogo.cn/mmopen/vi_32/dmy0EiaK5TmicgOd4TtTNJZBRwcTxP7GSpNwN0ljNdCrU86SiaQ6UtGyj4taShuZABYSflZXWHUaUhSGmZG5TsFQg/132'),(10003,'oEJhT0fHYJeFK0PenTo4kDRryRgY','o0Hkn4zUKywH9QJn4Ha2VS1Q7Gt8','    ','','','',1,'https://wx.qlogo.cn/mmopen/vi_32/dmy0EiaK5TmicgOd4TtTNJZBRwcTxP7GSpNwN0ljNdCrU86SiaQ6UtGyj4taShuZABYSflZXWHUaUhSGmZG5TsFQg/132'),(10004,'oEJhT0fHYJeFK0PenTo4kDRryRgY','o0Hkn4zUKywH9QJn4Ha2VS1Q7Gt8','    ','','','',1,'https://wx.qlogo.cn/mmopen/vi_32/dmy0EiaK5TmicgOd4TtTNJZBRwcTxP7GSpNwN0ljNdCrU86SiaQ6UtGyj4taShuZABYSflZXWHUaUhSGmZG5TsFQg/132'),(10005,'oEJhT0fHYJeFK0PenTo4kDRryRgY','o0Hkn4zUKywH9QJn4Ha2VS1Q7Gt8','    ','','','',1,'https://wx.qlogo.cn/mmopen/vi_32/dmy0EiaK5TmicgOd4TtTNJZBRwcTxP7GSpNwN0ljNdCrU86SiaQ6UtGyj4taShuZABYSflZXWHUaUhSGmZG5TsFQg/132'),(10006,'oEJhT0fHYJeFK0PenTo4kDRryRgY','o0Hkn4zUKywH9QJn4Ha2VS1Q7Gt8','    ','','','',1,'https://wx.qlogo.cn/mmopen/vi_32/dmy0EiaK5TmicgOd4TtTNJZBRwcTxP7GSpNwN0ljNdCrU86SiaQ6UtGyj4taShuZABYSflZXWHUaUhSGmZG5TsFQg/132'),(10007,'oEJhT0fHYJeFK0PenTo4kDRryRgY','o0Hkn4zUKywH9QJn4Ha2VS1Q7Gt8','    ','','','',1,'https://wx.qlogo.cn/mmopen/vi_32/dmy0EiaK5TmicgOd4TtTNJZBRwcTxP7GSpNwN0ljNdCrU86SiaQ6UtGyj4taShuZABYSflZXWHUaUhSGmZG5TsFQg/132'),(10008,'oEJhT0fHYJeFK0PenTo4kDRryRgY','o0Hkn4zUKywH9QJn4Ha2VS1Q7Gt8','    ','','','',1,'https://wx.qlogo.cn/mmopen/vi_32/dmy0EiaK5TmicgOd4TtTNJZBRwcTxP7GSpNwN0ljNdCrU86SiaQ6UtGyj4taShuZABYSflZXWHUaUhSGmZG5TsFQg/132');
/*!40000 ALTER TABLE `user_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-25 16:50:19
