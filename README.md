# ส่งการแจ้งเตือนไปยัง Telegram ด้วย Google Apps Script

ฟังก์ชันนี้ใช้ Google Apps Script เพื่อส่งการแจ้งเตือนไปยัง Telegram ผ่าน Telegram Bot API

## 🔧 วิธีใช้งาน
1. **สร้างบอท Telegram** โดยใช้ [BotFather](https://t.me/BotFather) และรับ `BOT_TOKEN`
2. **รับ Chat ID** โดยสามารถใช้ `@userinfobot` หรือ API `getUpdates`
3. **เพิ่มโค้ดด้านล่างลงใน Google Apps Script**
4. **เรียกใช้ฟังก์ชัน `sendTelegramNotification()`** เพื่อส่งข้อความแจ้งเตือน

## 📜 โค้ดตัวอย่าง
```javascript
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
