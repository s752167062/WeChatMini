var mysql = require('mysql');
var ConfMgr = require("./../config");
function sqlMgr(){
	this.connection = mysql.createConnection({
		host:ConfMgr.host,
		user:ConfMgr.user,
		password:ConfMgr.password,
		port:ConfMgr.port,
		database:ConfMgr.database,
	});
	this.connection.connect();
};

sqlMgr.prototype.insert = function(userAddSql , userAddSql_Params , callback) {
	// body...
	var call = function(err , result){
		if(callback){
			callback(err, result)
		}
	}

 	try{
 		this.connection.query(userAddSql , userAddSql_Params , call)
 	}catch(err){
 		console.log(">>> insert err")
 		console.log(err)
 	}
};

sqlMgr.prototype.delete = function(first_argument) {
	// body...
};

sqlMgr.prototype.search = function(first_argument) {
	// body...
};

sqlMgr.prototype.update = function(first_argument) {
	// body...
};

const sqlMgr_ = new sqlMgr()
module.exports = sqlMgr_


//这种写法每次require 都是同的一个对象 