const fs = require("fs/promises");

class FileHandler {
    constructor(filename) {
        this.filename = filename;
    }

    async append(text) {
        return await fs.appendFile(this.filename, text, 'utf-8');
    }

    async write(text) {
        return await fs.writeFile(this.filename, text, 'utf-8');
    }

    async read() {
        return await fs.readFile(this.filename, text, 'utf-8');
    }
}

module.exports = FileHandler;