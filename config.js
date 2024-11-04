//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "2348020674070";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348020674070";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2349125042727";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS09SYklncFhLS3BVakRkeVFZSnk5RFZmdlRmNkNmOTdPSU9IN05UNTRGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2Foc0g2cTBISDZRQ2VXY1JZRVc1Tk1QUTQyYVRVYUg2dkFjNlluckhEaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQVZEYjR4YmdTZlNFRjdJMUdYUmozVUNQci8wZ3d4eFM1ZHZJZVJObVc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0NU80cnNXMFhuM2E0ZitvUG9ncWlldW4xdmFVTkpnaUVpZE8vNWNaUUY0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1IMWh5ZmV1cU1jVGFvR2ZSVmw4UDVNZ0pSSGVKSkFMWWpxNEpRRWtkMUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlRUFdWUTlZaE1RK3F0cUVWR2pIN2E5QjNVajBEM0tGcFp5dUdVNEpkQlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUhrVmNZeGlaR3F5NEsyVkdSVXhlZDIxaVF2UjN4cFhQcHY2dDM1NWdsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVBma2NkY1kxdXA0VzhqOWZnVzZOM0RYNVY4Tjd1Zmw0SXJRR0d1RGhtUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktrcWxjc2xnV0hSNm5aRHJYM21PRzYxYkdxZG9OM2s4dHhxcmo1U1lhSDk5YmFIaXVOK3lkU2ZJTENsZHRZajM3ekVxVSs1TmJVRHhmeXplZGV2a0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIxLCJhZHZTZWNyZXRLZXkiOiJzOWRRdGYxQ08xbCswY2JFRWd1enRMT1BibmN6d2FjNUhFNFdmeTdFcXlNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiMW45SkNCRVNZbXBUMUdpYzJUN2JRIiwicGhvbmVJZCI6ImM0ODdlNjYwLTY0YmQtNGNhZC1hYmUwLTA5MWQ3NjQyNmRmMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIreVJqWC9SM0lEdmtYT3YrS1BCMnFKckhnTXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0Y0K2dlSHV4V1I0SHVuNFliZTYycVpXaGI0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjU0TEdQTFBEIiwibWUiOnsiaWQiOiIyMzQ4MDIwNjc0MDcwOjQxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkLXwnZul8J2QtfCdkYzwnZC18J2bqfCdkYwg8J2QuvCdkYXwnZul8J2bsvCdm6jwnZuq8J2QtvCdkYYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BTRCtNWUNFTnJkb2JrR0dCZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImlqNlAvT0pUMHgrK2pPd2JPd1ZKaklZek9OL0tZcTNCMkFlb1ZPVW5lbmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVWSG1sYlZHbkgvS2FqbUtja09zakswcXlEc0hUb1U4U2ZRU3orVmprK3R2WVpWREtzbVZZQkc0OHJja3B2WjFGSlJSYmozWlpGQlh5cDduYWZ4eUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5TkZnY2RQZjVzME9NOWNWWlVLTTVvUmhiTDR4Vk9XQVRQR1hSalZFQWhjSFZsRGMrelVBZmtGaEN3MG4rZDFtSGdIZkhkRU5RTjgvM1gzdW9HeXVEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwMjA2NzQwNzA6NDFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWW8rai96aVU5TWZ2b3pzR3pzRlNZeUdNempmeW1LdHdkZ0hxRlRsSjNwMyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDcwMzA4MH0="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || "+,$,@"
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "༆BÃBYBØY GRÃPHĪCẞ༆",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
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
