import {promises as fs} from "fs";

    const filePath = new URL("./index.html", import.meta.url);
    const data = await readFile(filePath);
    console.log(data);



