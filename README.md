# Drop-Alert-Tab-Reloader

Various scripts to be used with Tab Reloader extension for FireFox to drop alert for PS5 and XsX and XsS. With modification it could be used to handle other products and retailer websites.

# Folder structure:

- `links` (File descriptions: each .url file opens either a product page for PS5 or Xbox series X or S, or possibly a search page for those products on a particular retailer's website. The notation of the file tells you what it's for. Keep in mind that some products are bundles. If you don't want to buy a bundle make sure you use the appropriate link.)
- `sandbox` (File descriptions: just some test code, trying things out here, you can ignore)
- `stores` (File descriptions: each file is the appropriate script for the store's product or search page to detect product drops)
- `utils` (File descriptions: `beep.js` is a function that plays an mp3 sound file to alert you audibly when a drop happens. You can make your own sound clip by converting a sound file to dataURI format and replace it in the new Audio() object initializer. `data.js` is a JSON object that will be sent with every drop alert. It is a discord webhook payload, replace the values for what you wish as far as name, icons, etc. The URL of the current web page is sent your discord channel on your own discord server. `discordwebhook.js` is a function to send the discord message to the dicord webhook. Replace the fetch URL with your own discord webhook URL.)

# How to setup Tab Reloader

To use any of these with FireFox's Tab Reloader extension/add-on (https://add0n.com/tab-reloader.html) simply install the add-on in FireFox. Then open a tab to one of the URLs in the links folder for the store/product you care about. Paste this URL into the address bar and bring up that website. Click the Tab Reloader icon and click `Permit Code Execution` and allow this option. Now take the contents of the `utils/beep.js` function and paste the contents into the textarea for the Tab Reloader settings. Toggle the `Enable Tab Reloader for this tab` (the first toggle) twice. This will save what you have pasted into the text area for you and still allow you to make more changes. Now copy and paste the contents for the `utils/data.js` into the text area at the end of the beep function (scroll down to the end before pasting). Toggle the `Enable Tab Reloader for this tab` (the first toggle) twice again to save once more. Now copy and paste the contents of the `utils/discordwebhook.js` file into the text area at the bottom of the script. Toggle the `Enable Tab Reloader for this tab` (the first toggle) twice again to save once more. Finally open the appropriate store javascript file in the `stores` folder and copy and paste the script into the Tab Reloader options text area at the bottom.

# Double-check your work

If you've built the script properly you should have `beep` function defined at the top, followed by the `data` variable definition, followed by the `discordwh` function and finishing off with a `setTimeout` call at the bottom. Toggle the `Enable Tab Reloader for this tab` (the first toggle) only once this time to enable the refresh. You can play around with the Tab Reloader's other options as you see fit.

# What will now happen

When a drop is detected what will happen is the alarm sound file will play repeatedly for about a minute or until the next refresh. Then a message will be sent to your discord server with a link to the product page.

# Profit!

I hope this helps some of you buy the product you've been trying to get!

# Donations

If you'd like to buy me some cup of joe for my efforts, paypal: https://www.paypal.com/paypalme/civictd04 cash app: https://cash.app/$CharleyLee1914 or bitcoin: 3Bs67HQUVz3KREMBiznyzg2582ihDEebzk

Enjoy,

Charley (@civictd04 on twitter)
