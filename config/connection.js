var mysql = require('mysql');

var source = {
	localhost: {
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burgers_db'
	},
	livehost: {
		port: 3306,
		host: 'sp6xl8zoyvbumaa2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'ris0xjgswyh69f2i',
		password: 'lw3m0ue9c2jd4xlc',
		database: 'i78jy3l6392r8gj9'
	}
}

// var connection = mysql.createConnection(source.livehost);
var connection = mysql.createConnection(source.localhost);

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected to MySQL Database as id ' + connection.threadId);
});

module.exports = connection;
