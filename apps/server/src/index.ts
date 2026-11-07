import "dotenv/config";

import express from "express";
import cors from "cors";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);

const CLIENT_URL = process.env.CLIENT_URL ?? "http://localhost:5173";

const PORT = Number(process.env.PORT ?? 3000);

app.use(cors({ origin: CLIENT_URL }));
app.use(express.json());

const io = new Server(httpServer, {
    cors: {
        origin: CLIENT_URL,
    },
});

app.get("/api/health", (_req, res) => {
    res.json({
        status: "ok",
        message: "Grocery Fulfillment Dashboard API is running.",
    })
})

io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.emit("connection:ready", {
        message: "Connected to fulfillment server",
    });

    socket.on("disconnect", () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
})

httpServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});