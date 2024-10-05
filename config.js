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
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0VvNDMrZFl5Y0V1ZEZsVkwrczlBSUZmSGI4RnpzRFVZUmo3RmN0d2NHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicENVbnl6UE5zOUhvTDRSRGhGK0hJSG5hUUkxbCtUYkw0VjFHcFU5UjRYaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTDBTWmVxVVhOTCttcGdxUGw3dFlYZ0pQRjExaU0veGN1RTZBRDF1d0VVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1L1l1dmxmUnJ5QlJBQXVWNFdTMWR0STE3eDg1VnlldU9aV2dYeHBXTWtNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhMb3lsdnd2ZTdYTXU0a1JCNXZlOFRrZ0pSNjhmNTNXb1pwSHRrR1Y1bUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhNdHJIb3V5MzRxSEl1aG5Mc3JtcG5JdWlKeHlqYm52dCtXdXhEbUZyR0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUN3OVVpTEJXc2dBSk5aMUVmbGdWWGVQV25XeTYwYTAvTFp6S0theFFsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU0wN0JQVU9PdmpsVWkxT3RIV1hUN0VBOWI5cTc3NXBnakJPckVaTkJWUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtLUWgxV0IzbjNWdkd0RHlVK0hpT1BEUlJJMWtwVTA3NlNtYU1MWnZYNk0rd0RkckdCRmZYcmRTeXhZbTBpUWF2YUxOQU1FMU9ESVJVdWg4alRlU0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc2LCJhZHZTZWNyZXRLZXkiOiJiaTVZdWNUVGFGLzYyeS83RkhYQVNhVXNVOHVWUGJmalFnSGh6VGY3QXBBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGQUJXaTNkdVRSaTdqbHBEejEzejJRIiwicGhvbmVJZCI6ImFjNDI2MWU2LWYwNTMtNDFkZS1iYmI4LWE3YmM1YjAwNGQyYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SzJMcmVNSXJ5RlFiMXhSdUREQXdjdjhlbmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHY1SXltR3JId1RHczZTbTVzRXdvZGVLemd3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllRQUhHUTlLIiwibWUiOnsiaWQiOiIyMzQ4MDIwNjc0MDcwOjc1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuC8hkLDg0JZQsOYWSBHUsODUEjEqkPhup7gvIYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BLRCtNWUNFUE9BKzdjR0dDSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImlqNlAvT0pUMHgrK2pPd2JPd1ZKaklZek9OL0tZcTNCMkFlb1ZPVW5lbmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkhPbWNkYVpTbHFvOURtamtpQVZsZFZXS2paVjZDWE9ic2I0WlExTWwxVVQ3WVM4STNmTGR1VzlCanAyZXZrcWptUHhtVVkrNEpNQlRzSVAvWElUT0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmZm5IRXN0eXRBNEltY1dXUzZPVFIzb0pNZURrZ3VPQ1RucmZKaXNZbEFaa3dHK0FoVXlMSXpKdGgvMEt3YkwwcDE4cVdwb2F2QjdhejVZV3l5ZjNBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwMjA2NzQwNzA6NzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWW8rai96aVU5TWZ2b3pzR3pzRlNZeUdNempmeW1LdHdkZ0hxRlRsSjNwMyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzk3MTQ1OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCWXcifQ=="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
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
