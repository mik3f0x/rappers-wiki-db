import chalk from "chalk";
import db from "./connection.js";
import Rapper from "./Rapper.js";
import rappers from "./rappers.json" assert { type: "json" };

const insertData = async () => {
    await db.dropDatabase()
    await Rapper.create(rappers)
    await db.close()
    console.log(chalk.magenta('Data seeded'))
};

insertData();