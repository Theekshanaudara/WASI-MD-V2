//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0thdkxjRDlWMlQ0M0pWZUo4UlczS0FFOTU4WGdIRkdZWS9BNm9sYWlXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK21Jc3RVV2tLdTIzQWY5Qm5YanlzRUhjNVR2Q3Y5UmJXenp6azlJRGVscz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRGxXR25xVW5aQkJJOGNsQVd1eUlYQnNKb1hMajdYeGp0TVlzdDRTUjBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTG8xNmJxdWVzanhMd3ptWC9LVnJmRm9CRkFjeWJVbDdCS1VUZjVrYlZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNJa3BXa0ZhZ3BZbU1YeHhNeHFWZHpZaFhrZmFTYlp2TkU4VkZzYkVJa2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVZb1RVTkVsakxyYzhKV2s3UlFRSitoTjd5a3dESVlaaXczMVpaa2t4Q0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1B2ZE91K00wd21GSWFtWkdQK3p5MHhHY3ZRa05HdkVXQ2IwdzNNQXMzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU5SbE1Ycnp6cCtQc0NDcFJTZ1Mrc2NKYU4yNFRZZ0pZMnB0YTRSTW9IZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVUYk9mSGgzS1lIdzJGbWJDMHlqOXJCazZvb0s2aXdFSmFGR3BzblM5L3JUM05Jelp0bkhpaDlZYjgxakdIdUxOcWh1alNURnd0NXoxaDc4R0VkNWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiI1OEJVVWNQc3Q4QnBBbkFIWmtlVy80M1RsVys0eGlkcUwyMkZ0QUVSRUZrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYzNjkwNzAxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBNTc1MEQ2RDNDMjM1MkI0MEI1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA4NTc2Nzh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYzNjkwNzAxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBNEE1RTgzQTAyMTA5RkZEMkYzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA4NTc2ODB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjlTX096N19CUXZtZFNLSlJFd295YlEiLCJwaG9uZUlkIjoiOWM2ZDBmZjAtOGNhNy00YTgzLWEzZTYtNDYwZmE0YmM0MTZmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1CaTBMbEc4VG4wWUQ3Y1QrNDZtMnpvUG1OTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBd041cHpUZ1BJRDZuV2RwNjVQeWp6WnlKMXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM0pGRVRSRDYiLCJtZSI6eyJpZCI6Ijk0NzYzNjkwNzAxOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoicGVwZSBtb25leSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSitleWZvRkVNSG95TFFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZDJ3VlRQODdYMUF0bUdvaEpCbHlQN05jQ0tsYkpGaDFaTFVyb2JkZzR3TT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiV09sNCtXeWFlV2lvamoyQ2FnK2hOOFBRR3lmcW5XNUMxZ2NhbUZKL1E5Znk2NE1HQTltRkJkVUxmRGJLVWRtRm9QREZiSXN6bWxaeUJaaUhRY3FSZ1E9PSIsImRldmljZVNpZ25hdHVyZSI6Ik1lL1MxQnBRS3hiTVV1VklJa09Hb0pjR2tIeFlsakF0Mi9hOXBtQ1lra0dESmRnaVd6NjhNaXczNmgwUnpwcnI2MlpibStHbWlEKzgzWkh1ZVV0Y2pRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjM2OTA3MDE6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYZHNGVXovTzE5UUxaaHFJU1FaY2orelhBaXBXeVJZZFdTMUs2RzNZT01EIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwODU3Njc3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUc4MiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-TIKKA-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "TIKKA",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TIKKA-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "TIKKA",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
