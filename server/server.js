const express = require("express");
const cors = require("cors");
const logger = require("morgan");


class Server {
	constructor() {
			this.app = express();
			this.port = process.env.PORT || 8080;
			this.server = require('http').createServer(this.app);
	
			this.paths = {
			auth: "/api/auth",
			users: "/api/users",
			//products: "/api/products",
			//categories: "/api/categories",
			//orders: "/api/orders",
			//uploads: "/api/uploads",
		};

		//connect to database
		this.connectDB();

		// Middlewares
		this.middlewares();

		// Routes
		this.routes();


	}

	async connectDB() {
		// Connect to your database here
		// For example, if you're using MongoDB:
		// await mongoose.connect(process.env.MONGODB_URI);
		console.log("Database connected");
	}

	middlewares() {
		
		//morgan
		this.app.use(logger("dev"));
		
		// CORS
		this.app.use(cors());

		// Body parser
		//this.app.use(express.json());

		// Static files
		//this.app.use(express.static("public"));
	}

	routes() {
		this.app.use(this.paths.auth, require("../routes/authRoutes"));
		//this.server.use(this.paths.users, require("./routes/users"));
		//this.server.use(this.paths.products, require("./routes/products"));
		//this.server.use(this.paths.categories, require("./routes/categories"));
		//this.server.use(this.paths.orders, require("./routes/orders"));
		//this.server.use(this.paths.uploads, require("./routes/uploads"));
	}

	// Start the server
	// This method is called in the index.js file
	listen() {
		this.server.listen(this.port, () => {
			console.log(`Server running on port ${this.port}`);
		});
	}


}

module.exports = Server;
