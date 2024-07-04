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
global.sudo = process.env.SUDO || "923135673658,923192173398";
global.owner = process.env.OWNER_NUMBER || "923135673658";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  ""eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0xicHNZM04rc0NiWlpuTTRPTGV0enR5NXhQaytzQVFnWnZDNjYyWHdXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2w1dWRiZ3FCbGhhUEdVNnJzMklia2JaMGh6Q3ZpVlpCUGtBbmFmL0NqRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSHQrcStOVWQzdG9rRkJqZDZwNCtNZjN6NUZKc0ZvM1o0UHpjbm5JSTNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxVThPMWtOT3VJTnhxOWR5ZThzWWVDT3I3OFNYS0U3di9hUVVYRGNNOGo0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllOR2xuN1VVWGsxQThwbmJXRFVRTUVJUmthNEdHVVk3Z01OT3I5bGNnR1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkgyM2N5ejFZcktFZWF1T2d5QncvcXlZUWc4VmJLKzVqR0FVaUFwZ3p5QUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUsyOG04dGxXaXd0Z1UyK1AyandJY3AvYW05Y2hTNWN0SDBWZlFiWElIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTRJK1JIZUprY1Z2Ym1OKzhlUGJDbmVhZURpcmM5Um92OHpGL1QvOXlqcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRjRU9HSE1WS1lLakcxUU42ZE5teGJCQkovblcxcWJXZ2l2RkEwMTBIQnIvNkxuY0FqbURGbVYvVGtyYkRpTkd2SlUwc1dyNU1lcVd0L0JEUDhYNkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAwLCJhZHZTZWNyZXRLZXkiOiJ3N1NwSlpsSUZsMVJVSGVwL0puOFFEUGtKRVc3QzZER2ZuY1d6T3Y2UGhnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxOTM1Njc1MDI4NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4Njg3NDkyNzU4QjYxNjdERkQ0ODIyNUFFQTJCNTgzNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMDcwNzA3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQUHhLZlBWRFMwZW9xVm4xbElBSTNnIiwicGhvbmVJZCI6IjkyMmIwMTZmLWQ1ZjAtNGVjMy05NTIzLWU3N2MxYjU0NzBhNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHbUEvN2tIelZ6NDdmdGpha3ZuYmNzenV4R1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0VCVVZHNDhMc0NLbHFpQi9KeVlDYmdaV2FJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdNUFpMVFZRIiwibWUiOnsiaWQiOiI5MTkzNTY3NTAyODU6NDhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUmFodWxfSkkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08vQ3JFTVFvK1NZdEFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlJqVzRnb1NSSk42Y2FpalY2aHJpOCtkUGhUdGQ2Rmx1Y3RySFdRQ0NUbGc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkNhVEMwSHBYbzA3T3pEbkMrRmF4NTJVTlJpVUl3QStSTWxNZ1B0dkhYa1Vub3FvYkVsc0NtYjNPc2lXUkpCMWxocjJrU2tlaFB2UlFuMnkxV0lYZERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHR1hXc2U0NGgyK3VLbEpmeFhMNjlJb09wZnBMbGdkR05FOEdjQzZ0YmJGTzFZVjVkSmdYbXBrZGNVUkFHR3FZTmwwbW5tZENPWHRNMWs0Wk94TFFCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTM1Njc1MDI4NTo0OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVWTF1SUtFa1NUZW5Hb28xZW9hNHZQblQ0VTdYZWhaYm5MYXgxa0FnazVZIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMDcwNzA0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUMzUCJ9
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
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
