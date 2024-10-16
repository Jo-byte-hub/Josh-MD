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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUE2elNNdGdEQS8wS0E0bnF5V1ZGcG1rRG5pa3YxbHVZclNYdklpUlFVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2VCa1FjMTRRZ1JSSU1hbHppMkdhY1B1N2dOOWxidmppTU5FK3pseld4RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTy9vRWhtMlFsTVE5T1VhUy8yNHlSYXJvZ3NJNzUxTmpLbnJMZ1pXWVhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZb2FzaUYwYm85RUw5bnk3S1lIVS9wYnYrUXNZcG5aaGJNMUlIUFNtWGlNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZQRThMMjZualgzek5pMS9CNmNtNURuSVdGYlkvUGZpQmVnbFpBeVVZRlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhmUlMwUWhieUx0elIxYnUrM0NYeGZNNlpQMUFGZG5iUGNwVHlsQUtwQkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUN1UnZXUmNRMjUvZFowczRyN2d0MS9QWjRnVGJ0YlhWNkNsakVTN1pHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUprZkJxbFJUVmdVTFRBSm00V0loRlh6YWl3U0llL0d4RGd1eTYyc2Vudz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9xcUF5SWlYdExua3hnMVdQb2s0ckdoU0JuOTIrYWpsTEdCemJ1d0txd3Vjc0ZTdGp6SFozSSsrY0MxQjdGZjdyV2ZlOG42VkVmQ29ZS1FObDd2aUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJFMUNDbEVuY09JWlpEN20vUGhrUENlMm93MEZCQ01ySnczeW1VbkszckRjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxUnJhYmlMMVJ4MmRXWTBkNlg2MkdnIiwicGhvbmVJZCI6ImUzZjYzYjBlLWJkOGYtNGIwOS1iYTY0LTI3YTA0M2VjMGExOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6SkxnT0lUZUJaWEN5QnFGa082SXlqVDdsUE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTdSdGVtKzhPQkVKMHdDODhnTUVWb1BlakNJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik4xWkE3RkI4IiwibWUiOnsiaWQiOiIyMzQ5MTE1OTgzNDYwOjcyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik9rb3llIEpvc2h1YSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnlnemNRR0VPbll3TGdHR0J3Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZDU3V1E5bmdSaTN2dFF6eGphbm5mbjFOempuRlFReFdjcGtNUXRZUGR3dz0iLCJhY2NvdW50U2lnbmF0dXJlIjoieFRYL1NXdi8xVjQycXRCSGVrVDVTRVJCZVdCdHQ4WmkxMDE5S1ZLRFZjYTA2L2dsMjNXQzZaRHVvNE9TMzZ1R0VyYzlFeG8xbStwZjN6N1MvT1d1RFE9PSIsImRldmljZVNpZ25hdHVyZSI6IjA1ODNCbi83dk1GTG1seEc4by9qK2NxSG1TZXB2UzBQMUY1ZC9POUJ0MDdTM1pjUGppcEtvMlVRbW9CdzJ3OUV3VE5IYWY1L0JGeC91RnZ6L3dNSURBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTExNTk4MzQ2MDo3MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYZWUxa1BaNEVZdDc3VU04WTJwNTM1OVRjNDV4VUVNVm5LWkRFTFdEM2NNIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MTEzMjA3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1ZZCJ9"
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
