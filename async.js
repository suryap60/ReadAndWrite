const fs = require("fs").promises;

const readAndWriteFile = async () => {
  try {
    const data = await fs.readFile("file.txt", "utf-8");
    console.log("FileContent", data);

    await fs.writeFile("one.txt", data);
    console.log("File Written Successfully");
  } catch (err) {
    console.log("Error:", err);
  }
};
readAndWriteFile()