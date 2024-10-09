//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "okoyejoshi@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Jo-byte-hub/Josh-MD";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/Ek55y9kQcFTKO8BtUT0RfH";
global.website = process.env.GURL || "https://chat.whatsapp.com/Ek55y9kQcFTKO8BtUT0RfH";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/dlixf3.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349115983460";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/dlixf3.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYURCc2xwTWtlblFTOGhVVDBSdG9pQW5XU1Z5c0NoczJDWTA4dG94RktVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWp2SC9qMzdKTDI2bnUzMDVGbDV5ZUdGV2plMnVmQ2lDL3BjK1ptUzJuVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQm4xWkI4dGRmblhvc3BINHBDenFCaDNuZzV6V0tsNjJ3VXVtcGluTDNRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPblllNzBFY0pwOUlGZXdJVC9rT3B2TFcxY0h1RVVkN1ByNG8zVTRJVkJjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhKNG4wY1NGWDdMSU5vZzRtcWNjQ0ZWNjhzNEdHbzUyVFN5ZzIyR3pCbjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFyaElrWWhxR05uTmRtNFNoOUpFMkV6T3FCc3dtUUVWVTBNK2dlYTYvelU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU9haHFaeFQrdmFiUG9EN1BJaUJvaFhGdG03dXZnNDRJR1Zaa2hoMktuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTF4WFROY3UxZ0FvdFFzdmxlRmYwMklHdUdTbUJEWDdCYW44WGp3WHVTcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpDbHNnZHhRSko1UVczKy9XR1A3TUFMY0JnMHR6RmVpdXhEeWZXaWVLdnJZQ2xQT1gzVk1oTkFQdlArTllwbE8wd2dBZ2R3bHNIQWFHT2sxU1dORkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiI2YVBaL2VtZk9TVnViVWFXaUxTcitubklPR3Y0MUdJOVRqY09vTlNJTllNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItZU9JRklhTVFGU2YtVW9UTkJvd0x3IiwicGhvbmVJZCI6IjVmOTAwM2I3LTM2ZDEtNDRkOS1hMzg1LTMxNzRiYTkzYjFiNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrMzJXd0lZQ2Mwa3JGZU13TEx6WUNnbjM2R1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1M4NkZsQy9lSnRSaFJSS1NoUytnK2FIcFljPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVYRzQ5SFlCIiwibWUiOnsiaWQiOiIyMzQ5MTE1OTgzNDYwOjYwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik9rb3llIEpvc2h1YSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnlnemNRR0VLK1RuTGdHR0E0Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZDU3V1E5bmdSaTN2dFF6eGphbm5mbjFOempuRlFReFdjcGtNUXRZUGR3dz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidXZaMDYxYUJDK1JyZHhKNFoxaGoyc25BYWtRV29tUlN3RFExTm1FSUxXamxYUk5MdEJ0dlBNUSt0M2tPSXplQVlVOHZZNDl0SkErOFpqY25xZDZkQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6InkvTVJ3ZERmUGhZL0w2S1pjRVZBMlRIbVBuQU5DQ2ZaTnllSGQvdUNwayt6Wlg1Si83VmZyYVZPVjZaQ2pjYTRnRXViMEFRVXFUYndmclpFZUk0M0NnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTExNTk4MzQ2MDo2MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYZWUxa1BaNEVZdDc3VU04WTJwNTM1OVRjNDV4VUVNVm5LWkRFTFdEM2NNIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4NTE0NDkzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1ZRSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Josh Tech™`",
  author: process.env.PACK_AUTHER || "Josh",
  packname: process.env.PACK_NAME || "J_O_S_H",
  botname: process.env.BOT_NAME || "Josh BOT",
  ownername: process.env.OWNER_NAME || "Joshua",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JOSH").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
