QuickShare - send & receive files between iPhone, Android, Windows and Mac
==========================================================================

HOW TO PUT IT ONLINE (one time, about 5 minutes, free)
1. On a computer, unzip this folder.
2. Go to https://app.netlify.com/drop and sign up for a free account.
3. Drag the whole "quickshare" folder onto the page.
4. Netlify gives you a link like https://something.netlify.app - that is your app.
   (You can rename it under Site configuration -> Change site name.)

INSTALL ON EACH DEVICE
- iPhone/iPad: open the link in Safari -> Share button -> "Add to Home Screen".
- Android: open in Chrome -> menu -> "Add to Home screen" / "Install app".
- Windows/Mac: open in Chrome or Edge (or Safari on Mac) and bookmark it, or use "Install app".

SENDING A FILE
1. Open the app on both devices.
2. Same Wi-Fi: the other device appears under "Nearby on this Wi-Fi" - tap Connect.
   Elsewhere: scan the other's QR code with the camera, or type its 6-letter code and tap Connect.
3. The other device taps Allow (tick "Always allow" for your own devices).
4. Tap "Choose files to send". Progress shows on both devices.
5. On the receiving device tap Save (iPhone: goes to Files -> Downloads; use Share to put photos/videos into Photos).

AUTOMATIC SAVING (Settings -> "Save received files automatically", on by default)
- Android: received files go straight to Downloads (Gallery/Google Photos shows them under "Download").
  Chrome may ask once to "allow multiple downloads" - tap Allow.
- Windows / Mac: files go to Downloads. On Chrome or Edge you can pick your own folder in Settings.
- iPhone / iPad: Apple does not let websites save to Photos without a tap. A banner appears at the top
  ("3 photos received") - one tap on "Save to Photos" saves them all.

GOOD TO KNOW
- Nearby list: only devices that can reach each other directly over your local network are shown.
  Devices you marked "Always allow" reconnect automatically whenever both are open on the same Wi-Fi.
  Turn the list off in Settings if you prefer. Some office/hotel Wi-Fi blocks devices from seeing
  each other ("client isolation") - use the code there.
- Files travel directly device-to-device, encrypted (WebRTC/DTLS). They are not uploaded anywhere.
- Same Wi-Fi: traffic stays on your local network and is fastest.
- Different networks: works in most cases. If two devices can't connect (common when BOTH are on
  mobile data), add a TURN relay in Settings (gear icon) on both devices.
- Keep the app open and the screen on while a transfer runs. iPhone pauses web apps in the background.
- Very large files (several GB) are streamed to disk on modern browsers (iOS 26+, Chrome, Edge, Firefox).
  On older iPhones the file is held in memory, so multi-GB files may fail there.
- The free PeerJS cloud server is used only to introduce devices to each other (like a phone directory).
