import { http } from "./http";
import "./websocket/client";
import "./websocket/admin"

http.listen(80, () => console.log("Server is running on port 80"));