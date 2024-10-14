drop database inventoryM;
create database inventoryM;
use inventoryM;
create table login(name varchar(30) not null ,password varchar(30) not null);
create table product(id int auto_increment primary key,name varchar(50) not null, purchasingPrice FLOAT not null,sellingPrice FLOAT not null,quantity int not null,FTstock int not null,limet int not null DEFAULT 10);
create table client(id int auto_increment primary key,name varchar(30) not null,phoneNumber varchar(25) not null ,companyName varchar(25));
create table suppliers(id int auto_increment primary key,name varchar(30) not null,phoneNumber int(11) not null,address varchar(70) not null);
create table employees(id int auto_increment primary key, name varchar(30) not null,salary float not null,phoneNumber int(11) not null,date DATETIME DEFAULT NOW(),bool BOOLEAN NOT NULL DEFAULT FALSE);
create table advances(id int not null,price float not null,date DATETIME DEFAULT NOW(),CONSTRAINT employess_fk FOREIGN KEY(id) REFERENCES employees(id) ON DELETE CASCADE ON UPDATE CASCADE);
create table Results(capital float not null); -- راس المال
create table billingID(id int auto_increment not null primary key);
create table buyingID(id int auto_increment not null primary key);
create table Expenses(id int auto_increment primary key,statement varchar(50) not null,price int not null,date DATETIME DEFAULT NOW());
create table ExpensesList(id int auto_increment primary key,name varchar(30) not null, price int not null);

create table Buying(id int not null,suppliersID int not null,idOfproduct FLOAT not null,nameOfprodect varchar(30) not null,price FLOAT not null,quantity int not null,total FLOAT not null,date DATETIME DEFAULT NOW(), CONSTRAINT sillingItem_fk FOREIGN KEY(id) REFERENCES buyingID(id)ON DELETE CASCADE ON UPDATE CASCADE,CONSTRAINT suppliersID_fk FOREIGN KEY(suppliersID) REFERENCES suppliers(id) ON DELETE CASCADE ON UPDATE CASCADE);
create table Billing(id int not null ,clientID int not null,idOfproduct FLOAT not null ,nameOfprodect varchar(30) not null,price FLOAT not null,quantity int not null,total FLOAT not null,date DATETIME DEFAULT NOW(),status ENUM("موافق علية","دفعت","دفعت جزئيا") DEFAULT "موافق علية", CONSTRAINT billingItem_fk FOREIGN KEY(id) REFERENCES billingID(id)ON DELETE CASCADE ON UPDATE CASCADE,CONSTRAINT clientID_fk FOREIGN KEY(clientID) REFERENCES client(id) ON DELETE CASCADE ON UPDATE CASCADE);

create table BillingStatus(id int not null,price int not null,date DATETIME DEFAULT NOW(),CONSTRAINT status_fk FOREIGN KEY(id) REFERENCES billingID(id) ON DELETE CASCADE ON UPDATE CASCADE);

SET GLOBAL event_scheduler="ON";
CREATE DEFINER=`root`@`localhost` EVENT `event2` ON SCHEDULE EVERY 1 MINUTE STARTS '2023-07-20 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE employees set pass=0;


INSERT INTO Results(capital) VALUES(0);
INSERT INTO login(name,password )VALUES("user","user");
INSERT INTO client(name,phoneNumber,companyName)VALUES("john","0101010","skdfj");
INSERT INTO product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("كوريك 1 طن",685,685,1,1);
INSERT INTO product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("معطر سوري كبير",14.75,15.75,1,1);
INSERT INTO product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("طقم دلاية جلد فسفوري",35,35,1,1);
INSERT INTO product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("كسوة استبن دبابة مصري",35,35,1,1);
INSERT INTO product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("ريموت GM وكاسيت",8,8,1,1);
INSERT INTO product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("طقم فانوس خلفي دبابة متحرك سهم DS-9994",325,325,1,1);
INSERT INTO product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("اسبولير شنطة جلد مصري اسود وابيض",60,60,1,1);
INSERT INTO product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("لفة خرطوم عظم مصري عريض",400,400,1,1);
INSERT INTO product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("هوك امامي قماش ME",12.50,12.50,1,1);
INSERT INTO product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("جرس الحنطور علبة رصاصي الواب",180,180,1,1);
INSERT INTO product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("سرينة 3 صوت بالزرار *غ",100,100,1,1);
INSERT INTO product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("بلمه سقف سوري مصري",85,85,1,1);
INSERT INTO product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("سمسم",40,45,60,60);
insert into product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("شمام","40","45","60","60");
insert into product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("كوتش عربية","40","45","60","60");
insert into product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("كمترة","40","45","60","60");
insert into product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("عين جمل","40","45","60","60");
insert into product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("فيران","40","45","60","60");
insert into product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("رمات","40","45","60","60");
insert into product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("تليفون","40","45","60","60");
insert into product(name,purchasingPrice,sellingPrice,quantity,FTstock) VALUES("ساعة","40","45","60","60");



-- create table Buying(id int not null,idOfproduct int not null,nameOfprodect varchar(30) not null,price int not null,quantity int not null,total int not null,data DATETIME DEFAULT NOW(), CONSTRAINT sillingItem_fk FOREIGN KEY(id) REFERENCES buyingID(id), CONSTRAINT productItem FOREIGN KEY(idOfproduct) REFERENCES product(id));
-- create table Billing(id int not null ,idOfproduct int not null ,nameOfprodect varchar(30) not null,price int not null,quantity int not null,total int not null,data DATETIME DEFAULT NOW(), CONSTRAINT billingItem_fk FOREIGN KEY(id) REFERENCES billingID(id), CONSTRAINT productItem_fk FOREIGN KEY(idOfproduct) REFERENCES product(id));
-- create table Billing(id int not null,nameOfprodect varchar(30) not null,price int not null,quantity int not null,total int not null,data DATETIME DEFAULT NOW());
