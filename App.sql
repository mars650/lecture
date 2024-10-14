drop database lecturer;
create database lecturer;
use lecturer;
create table login(name varchar(30) not null ,password varchar(30) not null);
create table corse(id int auto_increment primary key,name varchar(80) not null);

INSERT INTO corse(name) VALUES("تطبيقي اعمل المكاتب الامامية");
INSERT INTO corse(name) VALUES("لغة انجليزية");
INSERT INTO corse(name) VALUES("ادارة عمليات الخدمة");
INSERT INTO corse(name) VALUES("تطبيقي ادارة عمليات الخدمة");
INSERT INTO corse(name) VALUES("مقدمة في الاغذية والمشروبات");
INSERT INTO corse(name) VALUES("محاسبة التكاليف");
INSERT INTO corse(name) VALUES("لغة اجنبية ثانية");
INSERT INTO corse(name) VALUES("احصاء فندقي");
INSERT INTO corse(name) VALUES("ادارة الموارد البشرية");
INSERT INTO corse(name) VALUES("تطبيقي مقدمة في الغذية والمشروبات");
INSERT INTO corse(name) VALUES("تطبيقي احصاء فندقي");
INSERT INTO corse(name) VALUES("الفنادق البيئية والفنادق الخضراء");
INSERT INTO corse(name) VALUES("عملي");
