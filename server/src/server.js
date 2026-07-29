import "dotenv/config";
import app from "./app.js";
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("hello wrold");
});

const startServer = () => {
    const server = app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
    server.on("error", (error) => {
        console.error("Server error !", error);
    });
};
