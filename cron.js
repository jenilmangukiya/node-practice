var cron = require("node-cron");

cron.schedule("*/5 * * * * *", () => {
  console.log("Running every 5 seconds");
});
