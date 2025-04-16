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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUxQaTlLLzk0OUhxeEtWandJSnVuSnBKZkhLamVZamFnZDNpc2JZNTVXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialNRZEIxdys1Mkl6NzhvTWpjK2FBU0liRHZrMjk5eWI4WStWdjRoRTNtWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTWxJWEt1Rmpla2dORHRkSGJFRmhkZFRwdWxLTUVCS21uYlRXNU8zbzJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMRERjdlFZalhmY3A3d0xuY1B2WW9pWFg4Q2tick0wNjhpQ2MrM2xWUFVvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklGV1h3ZlZFV1VVMjJmb2hQRFNnZXJFb0o5bEp3Z0F4ZjlvdVM5ZWJJRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImkzclNkbHZpWGF4ZlQ2YktWSTYvcE56ZFNzbG9pekVZQUdtdnNzUlJUU2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUw1b2crd2xxZkNRallROHByTXAwbFozVzRGRnRQbHRWL1VjcHFreGgwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianM1SFdHOVB5elRGMUovTjlPSEJCcFRhTEtqYytUZjFiNHBaZk10RmJXTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFjdkFzWldKZVpMWlR2eHN2Z2RqUU5ERGo4Mk9GTGYyaVd2WWNUc1ZTSGprZ0ZMbWd5d3JoeC9kdXM5b0JyUzl5M084Q2hMK3Fid0UvVGN3TENDTGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY2LCJhZHZTZWNyZXRLZXkiOiJSeHR5Syt4SWlXcjFwc3UrMklIdkJOSFd6RExHL2k4bTlaZ3ViZGxqNkc0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMTA4OTE3ODZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDg3NjUzOEUwOTQzNTNFRENEMTM1NzIyRkVBRERCRDQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NDc2NzE5Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTAxMDg5MTc4NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyQTM1Njg4RjQ5OTMzOEIzRUVDRkE1Qjk5NURCRDdFQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ0NzY3MTkyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MDEwODkxNzg2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjIxNDNENjFGNEIyNEYyQjgzRDU5RDQxNzNCQzkxMzE0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDQ3NjcxOTN9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InFQbk9nVFN5UkZtRFB5ei1kRHN1VmciLCJwaG9uZUlkIjoiYWI4OTFhYmEtMGZkMi00OWExLThkMjctZDc3ZjNjYzc0ZjhkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImUxei9nZm54SDhNamdSYUxjU0NGUndKU1JPbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSyt2QStsZTFJNklQNmlrc1VZd3lzdjNYSmM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR0QyTEw1Wk4iLCJtZSI6eyJpZCI6IjIzNDkwMTA4OTE3ODY6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJVYm9jaGkgcHJvbWlzZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTNPcnF3REVNaVIvTDhHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaWwxaDBna2tZSkw2UHVHeU1rMGs4VXFuUFpqSDR3cEdWYnJQWW4vbERUVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQlJOSThuZFR2L0dqRks3WlFnTnloUWtpSTZWRU9INm9oTTdnazNDNlZzekR2Q1lPcER4YSs1Q3NNS29OOTI2UWpOMVh1NVMrT20zN25qc3JwNFN3QlE9PSIsImRldmljZVNpZ25hdHVyZSI6ImNkZWdsc2orbllSdCthbVU0SG1pZDVhcmIwQVNGeDV1ZTlKQ29JOUo0Q0MyZFVHVExmYUVsSW92QW1Ia2VBSlJGMXB5Q0FGeVRRYU5FbmNSb05uQWd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAxMDg5MTc4NjoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllwZFlkSUpKR0NTK2o3aHNqSk5KUEZLcHoyWXgrTUtSbFc2ejJKLzVRMDEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDQ3NjcxOTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRTV2In0="
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
