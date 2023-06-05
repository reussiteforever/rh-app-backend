# Disclaimer
This code is written using Nodejs and Express. It is for serving some API routes. 
For the database connection, Sequelize (ORM) and tedious (MSSQL) packages are used.
If you want to use another SQL dialect other than MSSQL, please refer to the sequelize official documentation :
https://sequelize.org/docs/v6/getting-started/ .


# Steps to run up this back-end :

1. First of all, Enable the TCP/IP port if using Microsoft SQl Server : Right click on "this PC", click on "Manage". Go to "services and applications/SQL Server Configuration Manager/ SQL Server Network Configuration / Protocols for MSSQLSERVER". Then in the right panel, make a right click on "TCP/IP" and "enable".
After doing that, restart your computer.

2. Create your database if It does nit exist.

3. Change Database connection credentials in "dbconnexion.js" file. 
You must set the followings :
- the host name which is your computer name or localhost.
- the name of the database that you want to connect to
- the name of the database user
- the user's password for connection.

4. You can run up the server by making : `npm start`.