# Family Trip Web App

A framework-free, one-trip planner. The same files provide a local editable
organizer version and a read-only GitHub Pages version.

## Edit the trip locally

1. Open this folder in Visual Studio Code.
2. Install the Live Server extension if needed.
3. Right-click index.html and choose Open with Live Server.
4. Use the buttons in the app. Every successful change is saved automatically
   in that browser under the existing familyWeekendV2 storage key.

Opening index.html directly as a file also enables editing. The query string
?public=1 simulates the read-only website while testing locally.

## Publish changed information

1. In Organizer tools, select Export for website.
2. Copy the downloaded published-data.js over the file with the same name in
   this project folder.
3. In VS Code, open Source Control, stage published-data.js, enter a message,
   and select Commit.
4. Select Sync Changes / Push.
5. Wait for GitHub Pages to finish publishing, then refresh its URL.

The website never fetches JSON. It reads window.PUBLISHED_EVENT_DATA from
published-data.js. JSON downloads are used only for manual backup and restore.

## Privacy

GitHub Pages is a public static host, not secure private storage. Do not put
sensitive personal information in data exported for the website. There is no
password or access-code feature.
