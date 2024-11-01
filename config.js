const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './conf
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "pu1A2TpZ#D_Z8MuWHgr7a1lArvoPNspoybi4z5a1ojBRngDztr0o",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
};
