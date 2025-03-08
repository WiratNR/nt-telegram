function sendTelegramNotification() {
  var TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN"; // ใส่ Token ของบอท
  var CHAT_ID = "YOUR_CHAT_ID"; // ใส่ Chat ID ของผู้รับ

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
