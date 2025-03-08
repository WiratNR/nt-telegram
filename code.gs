function sendTelegramNotification() {
  var TELEGRAM_BOT_TOKEN = "xxxx"; // ใส่ Token ของบอท
  var CHAT_ID = "xxxx"; // ใส่ Chat ID ของผู้รับ

  var message = "📢 แจ้งเตือนจาก Google Apps Script!\n✅ ระบบทำงานเรียบร้อยแล้ว";

  var url = "https://api.telegram.org/bot" + TELEGRAM_BOT_TOKEN + "/sendMessage";
  
  var payload = {
    "chat_id": CHAT_ID,
    "text": message,
  };

  var options = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(payload)
  };

  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response.getContentText());
}
