


#导入
mysql -u root -p

create database name;

use name;

source 『将.sql文件直接拖拽至终端，自动补全其文件目录』



#导出
cd 『打开要将.sql文件生成的文件位置』

mysqldump -u root -p database_name>sql_name.sql
