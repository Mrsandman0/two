/*
Navicat MySQL Data Transfer

Source Server         : mydatabase
Source Server Version : 50723
Source Host           : localhost:3306
Source Database       : myfirstdemo

Target Server Type    : MYSQL
Target Server Version : 50723
File Encoding         : 65001

Date: 2018-12-03 11:08:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodsinf
-- ----------------------------
DROP TABLE IF EXISTS `goodsinf`;
CREATE TABLE `goodsinf` (
  `gid` int(255) NOT NULL,
  `gname` varchar(255) DEFAULT NULL,
  `goldprice` decimal(10,2) DEFAULT NULL,
  `gnewprice` decimal(10,2) DEFAULT NULL,
  `gwriter` varchar(255) DEFAULT NULL,
  `gpic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodsinf
-- ----------------------------
INSERT INTO `goodsinf` VALUES ('1', '我们仨', '23.00', '17.25', '杨绛', '../images/liebiaoye/images001');
INSERT INTO `goodsinf` VALUES ('2', '活着/余华作品', '20.00', '15.50', '余华', '../images/liebiaoye/images002');
INSERT INTO `goodsinf` VALUES ('3', '偷影子的人', '29.80', '22.05', '(法)马克·李维|译者:短韵灵', '../images/liebiaoye/images003');
INSERT INTO `goodsinf` VALUES ('4', '三体(1-3 共三册)', '93.00', '59.90', '刘慈欣|主编:姚海军', '../images/liebiaoye/images004');
INSERT INTO `goodsinf` VALUES ('5', '狼王梦/动物小说大王沈石溪品藏书系', '18.00', '11.80', '沈石溪', '../images/liebiaoye/images005');
INSERT INTO `goodsinf` VALUES ('6', '我不喜欢这世界我只喜欢你(精)', '29.80', '20.00', '乔一', '../images/liebiaoye/images006');
INSERT INTO `goodsinf` VALUES ('7', '父与子全集(彩色双语版)/常青藤绘本馆', '29.00', '17.54', '译者:莫兰|绘画:(德)埃·奥·卜劳恩', '../images/liebiaoye/images007');
INSERT INTO `goodsinf` VALUES ('8', '夏洛的网', '26.00', '22.07', '(美)E·B·怀特|译者:任溶溶', '../images/liebiaoye/images008');
INSERT INTO `goodsinf` VALUES ('9', '天才在左疯子在右(完整版)', '39.80', '27.47', '高铭', '../images/liebiaoye/images009');
INSERT INTO `goodsinf` VALUES ('10', '中华上下五千年(共4册)', '92.00', '32.50', '编者:木头人儿童创想中心', '../images/liebiaoye/images010');
INSERT INTO `goodsinf` VALUES ('11', '长袜子皮皮(美绘版)/林格伦作品选集', '18.00', '14.40', '(瑞典)阿斯特丽德·林格伦|译者:李之义|绘画:英格丽德·万·尼曼', '../images/liebiaoye/images011');
INSERT INTO `goodsinf` VALUES ('12', '皮囊(精)', '39.80', '32.63', '蔡崇达', '../images/liebiaoye/images012');
INSERT INTO `goodsinf` VALUES ('13', '看见', '39.80', '31.84', '柴静', '../images/liebiaoye/images013');
INSERT INTO `goodsinf` VALUES ('14', '乖摸摸头', '36.00', '24.80', '大冰|摄影:梁博', '../images/liebiaoye/images014');
INSERT INTO `goodsinf` VALUES ('15', '三毛流浪记全集(彩图注音读物)', '30.00', '22.80', '张乐平著', '../images/liebiaoye/images015');
INSERT INTO `goodsinf` VALUES ('16', '苏菲的世界', '26.00', '19.76', '(挪)乔斯坦·贾德|译者:萧宝森', '../images/liebiaoye/images016');
INSERT INTO `goodsinf` VALUES ('17', '了不起的狐狸爸爸/罗尔德·达尔作品典藏', '10.00', '7.20', '(英)罗尔德·达尔|译者:代维|绘画:(英)昆廷·布莱克', '../images/liebiaoye/images017');
INSERT INTO `goodsinf` VALUES ('18', '围城', '28.00', '21.28', '钱锺书', '../images/liebiaoye/images018');
INSERT INTO `goodsinf` VALUES ('19', '小猪唏哩呼噜(aoe名著注音版上)', '15.00', '12.00', '孙幼军|绘画:裘兆明', '../images/liebiaoye/images019');
INSERT INTO `goodsinf` VALUES ('20', '孩子你慢慢来/人生三书', '29.80', '23.54', '龙应台', '../images/liebiaoye/images020');
INSERT INTO `goodsinf` VALUES ('21', '三体(1-3 共三册)', '93.00', '59.90', '刘慈欣|主编:姚海军', '../images/liebiaoye/images004');
INSERT INTO `goodsinf` VALUES ('22', '狼王梦/动物小说大王沈石溪品藏书系', '18.00', '11.80', '沈石溪', '../images/liebiaoye/images005');
INSERT INTO `goodsinf` VALUES ('23', '我不喜欢这世界我只喜欢你(精)', '29.80', '20.00', '乔一', '../images/liebiaoye/images006');
INSERT INTO `goodsinf` VALUES ('24', '父与子全集(彩色双语版)/常青藤绘本馆', '29.00', '17.54', '译者:莫兰|绘画:(德)埃·奥·卜劳恩', '../images/liebiaoye/images007');
INSERT INTO `goodsinf` VALUES ('25', '夏洛的网', '26.00', '22.07', '(美)E·B·怀特|译者:任溶溶', '../images/liebiaoye/images008');
INSERT INTO `goodsinf` VALUES ('26', '天才在左疯子在右(完整版)', '39.80', '27.47', '高铭', '../images/liebiaoye/images009');
INSERT INTO `goodsinf` VALUES ('27', '中华上下五千年(共4册)', '92.00', '32.50', '编者:木头人儿童创想中心', '../images/liebiaoye/images010');
INSERT INTO `goodsinf` VALUES ('28', '长袜子皮皮(美绘版)/林格伦作品选集', '18.00', '14.40', '(瑞典)阿斯特丽德·林格伦|译者:李之义|绘画:英格丽德·万·尼曼', '../images/liebiaoye/images011');
INSERT INTO `goodsinf` VALUES ('29', '皮囊(精)', '39.80', '32.63', '蔡崇达', '../images/liebiaoye/images012');
INSERT INTO `goodsinf` VALUES ('30', '看见', '39.80', '31.84', '柴静', '../images/liebiaoye/images013');
INSERT INTO `goodsinf` VALUES ('31', '乖摸摸头', '36.00', '24.80', '大冰|摄影:梁博', '../images/liebiaoye/images014');
INSERT INTO `goodsinf` VALUES ('32', '三毛流浪记全集(彩图注音读物)', '30.00', '22.80', '张乐平著', '../images/liebiaoye/images015');
INSERT INTO `goodsinf` VALUES ('33', '苏菲的世界', '26.00', '19.76', '(挪)乔斯坦·贾德|译者:萧宝森', '../images/liebiaoye/images016');
INSERT INTO `goodsinf` VALUES ('34', '了不起的狐狸爸爸/罗尔德·达尔作品典藏', '10.00', '7.20', '(英)罗尔德·达尔|译者:代维|绘画:(英)昆廷·布莱克', '../images/liebiaoye/images017');
INSERT INTO `goodsinf` VALUES ('35', '我们仨', '23.00', '17.25', '杨绛', '../images/liebiaoye/images001');
INSERT INTO `goodsinf` VALUES ('36', '活着/余华作品', '20.00', '15.50', '余华', '../images/liebiaoye/images002');
INSERT INTO `goodsinf` VALUES ('37', '偷影子的人', '29.80', '22.05', '(法)马克·李维|译者:短韵灵', '../images/liebiaoye/images003');
INSERT INTO `goodsinf` VALUES ('38', '三体(1-3 共三册)', '93.00', '59.90', '刘慈欣|主编:姚海军', '../images/liebiaoye/images004');
INSERT INTO `goodsinf` VALUES ('39', '狼王梦/动物小说大王沈石溪品藏书系', '18.00', '11.80', '沈石溪', '../images/liebiaoye/images005');
INSERT INTO `goodsinf` VALUES ('40', '我不喜欢这世界我只喜欢你(精)', '29.80', '20.00', '乔一', '../images/liebiaoye/images006');
INSERT INTO `goodsinf` VALUES ('41', '父与子全集(彩色双语版)/常青藤绘本馆', '29.00', '17.54', '译者:莫兰|绘画:(德)埃·奥·卜劳恩', '../images/liebiaoye/images007');
INSERT INTO `goodsinf` VALUES ('42', '夏洛的网', '26.00', '22.07', '(美)E·B·怀特|译者:任溶溶', '../images/liebiaoye/images008');
INSERT INTO `goodsinf` VALUES ('43', '天才在左疯子在右(完整版)', '39.80', '27.47', '高铭', '../images/liebiaoye/images009');
INSERT INTO `goodsinf` VALUES ('44', '中华上下五千年(共4册)', '92.00', '32.50', '编者:木头人儿童创想中心', '../images/liebiaoye/images010');
INSERT INTO `goodsinf` VALUES ('45', '长袜子皮皮(美绘版)/林格伦作品选集', '18.00', '14.40', '(瑞典)阿斯特丽德·林格伦|译者:李之义|绘画:英格丽德·万·尼曼', '../images/liebiaoye/images011');
INSERT INTO `goodsinf` VALUES ('46', '皮囊(精)', '39.80', '32.63', '蔡崇达', '../images/liebiaoye/images012');
INSERT INTO `goodsinf` VALUES ('47', '看见', '39.80', '31.84', '柴静', '../images/liebiaoye/images013');
INSERT INTO `goodsinf` VALUES ('48', '乖摸摸头', '36.00', '24.80', '大冰|摄影:梁博', '../images/liebiaoye/images014');
INSERT INTO `goodsinf` VALUES ('49', '三毛流浪记全集(彩图注音读物)', '30.00', '22.80', '张乐平著', '../images/liebiaoye/images015');
INSERT INTO `goodsinf` VALUES ('50', '苏菲的世界', '26.00', '19.76', '(挪)乔斯坦·贾德|译者:萧宝森', '../images/liebiaoye/images016');
INSERT INTO `goodsinf` VALUES ('51', '了不起的狐狸爸爸/罗尔德·达尔作品典藏', '10.00', '7.20', '(英)罗尔德·达尔|译者:代维|绘画:(英)昆廷·布莱克', '../images/liebiaoye/images017');
INSERT INTO `goodsinf` VALUES ('52', '围城', '28.00', '21.28', '钱锺书', '../images/liebiaoye/images018');
INSERT INTO `goodsinf` VALUES ('53', '小猪唏哩呼噜(aoe名著注音版上)', '15.00', '12.00', '孙幼军|绘画:裘兆明', '../images/liebiaoye/images019');
INSERT INTO `goodsinf` VALUES ('54', '孩子你慢慢来/人生三书', '29.80', '23.54', '龙应台', '../images/liebiaoye/images020');
INSERT INTO `goodsinf` VALUES ('55', '围城', '28.00', '21.28', '钱锺书', '../images/liebiaoye/images018');
INSERT INTO `goodsinf` VALUES ('56', '小猪唏哩呼噜(aoe名著注音版上)', '15.00', '12.00', '孙幼军|绘画:裘兆明', '../images/liebiaoye/images019');
INSERT INTO `goodsinf` VALUES ('57', '孩子你慢慢来/人生三书', '29.80', '23.54', '龙应台', '../images/liebiaoye/images020');
INSERT INTO `goodsinf` VALUES ('58', '三体(1-3 共三册)', '93.00', '59.90', '刘慈欣|主编:姚海军', '../images/liebiaoye/images004');
INSERT INTO `goodsinf` VALUES ('59', '狼王梦/动物小说大王沈石溪品藏书系', '18.00', '11.80', '沈石溪', '../images/liebiaoye/images005');
INSERT INTO `goodsinf` VALUES ('60', '我不喜欢这世界我只喜欢你(精)', '29.80', '20.00', '乔一', '../images/liebiaoye/images006');
INSERT INTO `goodsinf` VALUES ('61', '父与子全集(彩色双语版)/常青藤绘本馆', '29.00', '17.54', '译者:莫兰|绘画:(德)埃·奥·卜劳恩', '../images/liebiaoye/images007');
INSERT INTO `goodsinf` VALUES ('62', '夏洛的网', '26.00', '22.07', '(美)E·B·怀特|译者:任溶溶', '../images/liebiaoye/images008');
INSERT INTO `goodsinf` VALUES ('63', '天才在左疯子在右(完整版)', '39.80', '27.47', '高铭', '../images/liebiaoye/images009');
INSERT INTO `goodsinf` VALUES ('64', '中华上下五千年(共4册)', '92.00', '32.50', '编者:木头人儿童创想中心', '../images/liebiaoye/images010');
INSERT INTO `goodsinf` VALUES ('65', '长袜子皮皮(美绘版)/林格伦作品选集', '18.00', '14.40', '(瑞典)阿斯特丽德·林格伦|译者:李之义|绘画:英格丽德·万·尼曼', '../images/liebiaoye/images011');
INSERT INTO `goodsinf` VALUES ('66', '皮囊(精)', '39.80', '32.63', '蔡崇达', '../images/liebiaoye/images012');
INSERT INTO `goodsinf` VALUES ('67', '看见', '39.80', '31.84', '柴静', '../images/liebiaoye/images013');
INSERT INTO `goodsinf` VALUES ('68', '乖摸摸头', '36.00', '24.80', '大冰|摄影:梁博', '../images/liebiaoye/images014');
INSERT INTO `goodsinf` VALUES ('69', '三毛流浪记全集(彩图注音读物)', '30.00', '22.80', '张乐平著', '../images/liebiaoye/images015');
INSERT INTO `goodsinf` VALUES ('70', '苏菲的世界', '26.00', '19.76', '(挪)乔斯坦·贾德|译者:萧宝森', '../images/liebiaoye/images016');
INSERT INTO `goodsinf` VALUES ('71', '了不起的狐狸爸爸/罗尔德·达尔作品典藏', '10.00', '7.20', '(英)罗尔德·达尔|译者:代维|绘画:(英)昆廷·布莱克', '../images/liebiaoye/images017');
INSERT INTO `goodsinf` VALUES ('72', '我们仨', '23.00', '17.25', '杨绛', '../images/liebiaoye/images001');
INSERT INTO `goodsinf` VALUES ('73', '活着/余华作品', '20.00', '15.50', '余华', '../images/liebiaoye/images002');
INSERT INTO `goodsinf` VALUES ('74', '偷影子的人', '29.80', '22.05', '(法)马克·李维|译者:短韵灵', '../images/liebiaoye/images003');
INSERT INTO `goodsinf` VALUES ('75', '三体(1-3 共三册)', '93.00', '59.90', '刘慈欣|主编:姚海军', '../images/liebiaoye/images004');
INSERT INTO `goodsinf` VALUES ('76', '狼王梦/动物小说大王沈石溪品藏书系', '18.00', '11.80', '沈石溪', '../images/liebiaoye/images005');
INSERT INTO `goodsinf` VALUES ('77', '我不喜欢这世界我只喜欢你(精)', '29.80', '20.00', '乔一', '../images/liebiaoye/images006');
INSERT INTO `goodsinf` VALUES ('78', '父与子全集(彩色双语版)/常青藤绘本馆', '29.00', '17.54', '译者:莫兰|绘画:(德)埃·奥·卜劳恩', '../images/liebiaoye/images007');
INSERT INTO `goodsinf` VALUES ('79', '夏洛的网', '26.00', '22.07', '(美)E·B·怀特|译者:任溶溶', '../images/liebiaoye/images008');
INSERT INTO `goodsinf` VALUES ('80', '天才在左疯子在右(完整版)', '39.80', '27.47', '高铭', '../images/liebiaoye/images009');

-- ----------------------------
-- Table structure for headlist
-- ----------------------------
DROP TABLE IF EXISTS `headlist`;
CREATE TABLE `headlist` (
  `﻿gid` varchar(255) NOT NULL,
  `gname` varchar(255) DEFAULT NULL,
  `goldprice` varchar(255) DEFAULT NULL,
  `gnewprice` varchar(255) DEFAULT NULL,
  `gwriter` varchar(255) DEFAULT NULL,
  `gpic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`﻿gid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of headlist
-- ----------------------------
INSERT INTO `headlist` VALUES ('1', '我们仨', '23', '17.25', '杨绛', 'images/liebiaoye/images001');
INSERT INTO `headlist` VALUES ('2', '活着/余华作品', '20', '15.5', '余华', 'images/liebiaoye/images002');
INSERT INTO `headlist` VALUES ('3', '偷影子的人', '29.8', '22.05', '(法)马克·李维|译者:短韵灵', 'images/liebiaoye/images003');
INSERT INTO `headlist` VALUES ('4', '三体(1-3 共三册)', '93', '59.9', '刘慈欣|主编:姚海军', 'images/liebiaoye/images004');
INSERT INTO `headlist` VALUES ('5', '狼王梦/动物小说大王沈石溪品藏书系', '18', '11.8', '沈石溪', 'images/liebiaoye/images005');
INSERT INTO `headlist` VALUES ('6', '我不喜欢这世界我只喜欢你(精)', '29.8', '20', '乔一', 'images/liebiaoye/images006');
INSERT INTO `headlist` VALUES ('7', '父与子全集(彩色双语版)/常青藤绘本馆', '29', '17.54', '译者:莫兰|绘画:(德)埃·奥·卜劳恩', 'images/liebiaoye/images007');
INSERT INTO `headlist` VALUES ('8', '夏洛的网', '26', '22.07', '(美)E·B·怀特|译者:任溶溶', 'images/liebiaoye/images008');
INSERT INTO `headlist` VALUES ('9', '天才在左疯子在右(完整版)', '39.8', '27.47', '高铭', 'images/liebiaoye/images009');
INSERT INTO `headlist` VALUES ('10', '中华上下五千年(共4册)', '92', '32.5', '编者:木头人儿童创想中心', 'images/liebiaoye/images010');

-- ----------------------------
-- Table structure for shoppinginf
-- ----------------------------
DROP TABLE IF EXISTS `shoppinginf`;
CREATE TABLE `shoppinginf` (
  `gid` varchar(10) DEFAULT NULL,
  `gname` varchar(255) DEFAULT NULL,
  `num` varchar(10) DEFAULT NULL,
  `goldprice` decimal(10,2) DEFAULT NULL,
  `gnewprice` decimal(10,2) DEFAULT NULL,
  `totalprice` decimal(10,2) DEFAULT NULL,
  `gpic` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shoppinginf
-- ----------------------------
INSERT INTO `shoppinginf` VALUES ('4', '三体(1-3 共三册)', '10', '93.00', '59.90', '599.00', '../images/liebiaoye/images004');
INSERT INTO `shoppinginf` VALUES ('1', '我们仨', '1', '23.00', '17.25', '17.25', '../images/liebiaoye/images001');

-- ----------------------------
-- Table structure for userinf
-- ----------------------------
DROP TABLE IF EXISTS `userinf`;
CREATE TABLE `userinf` (
  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uname` varchar(255) NOT NULL,
  `upwd` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=56 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinf
-- ----------------------------
INSERT INTO `userinf` VALUES ('52', '13333333333', 'q1234567890');
INSERT INTO `userinf` VALUES ('53', '13222222222', 'q123456789');
INSERT INTO `userinf` VALUES ('54', '13222222221', 'q123456789');
INSERT INTO `userinf` VALUES ('55', '13111111111', 'qqqqqq');
SET FOREIGN_KEY_CHECKS=1;
