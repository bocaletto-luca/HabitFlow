# HabitFlow

HabitFlow is a single-page web application that lets you track and visualize daily habits without any server-side code. With independent toggles for Monthly, Weekly, Daily and Stats views, you can mark activities as completed, inspect your progress in a heatmap calendar or interactive tables, and analyze completion rates with bar charts. Add habits with custom emoji icons and optional reminder times, switch between light and dark themes, and back up or restore your data via JSON export/import. Built with pure HTML5, CSS3, and JavaScript, it uses Day.js for date handling, Chart.js for charts, Web Notifications for reminders, and localStorage for persistence.

---

## Features

- Create, edit and delete habits with name, emoji icon and optional reminder time  
- Toggleable views:  
  - Monthly heatmap calendar  
  - Weekly interactive table  
  - Daily sorted list  
  - Completion statistics (bar chart)  
- Click any day or cell to mark a habit as done/undone  
- Dark/Light mode switch  
- Desktop and mobile notifications for reminders  
- Data persisted client-side in localStorage  
- Export and import your entire habit database as JSON  
- No dependencies beyond a single HTML file  

---

## Demo

Access the live demo on GitHub Pages:  
https://bocaletto-luca.github.io/HabitFlow/index.html

---

## Installation

1. Clone this repository:  
   ```bash
   git clone https://github.com/bocaletto-luca/HabitFlow.git
   cd HabitFlow
   ```
2. Serve the directory with a static HTTP server:  
   ```bash
   # Python 3
   python3 -m http.server 8000

   # Node.js http-server
   npx http-server . -p 8000
   ```
3. Open your browser at `http://localhost:8000/index.html`.

---

## Usage

1. **Add a new habit**  
   - Enter a name, choose an emoji, optionally set a reminder time, then click **Add Habit**.

2. **Manage views**  
   - Click **Toggle Monthly**, **Toggle Weekly**, **Toggle Daily** or **Toggle Stats** to show or hide each view independently.

3. **Track completions**  
   - In any view, click on a calendar day, weekly cell or daily item’s button to mark it done or undone.

4. **Notifications**  
   - Grant permission when prompted. If you set a reminder time, HabitFlow will fire a notification on completion.

5. **Dark/Light mode**  
   - Click the 🌙 Dark Mode button to switch themes.

6. **Backup & restore**  
   - Use **Export** to download your data as JSON and **Import** to restore from a JSON file.

---

## Customization

- Change primary, background and text colors by editing the CSS variables in the `<style>` block.  
- Adjust date formats or locale by modifying the Day.js code.  
- Tweak chart settings in the `renderStats()` function.  
- Replace emoji icons with images or other symbols if desired.

---

## File Structure

```text
HabitFlow/
├── index.html    # Single-page application including HTML, CSS, JS
└── README.md     # This document
```

---

## Contributing

Contributions, issues and feature requests are welcome. To contribute:

1. Fork the repository  
2. Create a new branch (`git checkout -b feature/my-feature`)  
3. Commit your changes (`git commit -m "Add my feature"`)  
4. Push to your branch (`git push origin feature/my-feature`)  
5. Open a Pull Request

Please follow the existing code style and test across major browsers.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

**Bocaletto Luca**  
- GitHub: [@bocaletto-luca](https://github.com/bocaletto-luca)  
- Repository: [HabitFlow](https://github.com/bocaletto-luca/HabitFlow)
