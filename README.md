# HabitFlow

HabitFlow è un tracker di abitudini “one-page” che ti permette di tenere traccia delle tue routine quotidiane con diverse viste (Mensile, Settimanale, Giornaliera) e statistiche, il tutto senza bisogno di backend. Puoi aggiungere, modificare o eliminare abitudini, registrare completamenti giornalieri e ricevere notifiche personalizzate.

---

## Sommario

- [Caratteristiche](#caratteristiche)  
- [Anteprima Demo](#anteprima-demo)  
- [Installazione](#installazione)  
- [Utilizzo](#utilizzo)  
- [Personalizzazione](#personalizzazione)  
- [Struttura dei File](#struttura-dei-file)  
- [Contributi](#contributi)  
- [Licenza](#licenza)  
- [Autore](#autore)  

---

## Caratteristiche

- Creazione/gestione abitudini con nome, icona (emoji) e orario promemoria opzionale  
- Viste indipendenti toggle-able: Mensile, Settimanale, Giornaliera, Statistiche  
- Calendario mensile con click per segnare “fatto”/“non fatto”  
- Tabella settimanale interattiva con completamenti per giorno  
- Elenco giornaliero ordinato per orario  
- Grafico a barre delle percentuali di completamento (Chart.js)  
- Notifiche desktop/mobile (Web Notifications API)  
- Modalità Dark/Light  
- Persistenza in `localStorage`, export/import JSON per backup  
- 100% front-end: HTML5, CSS3, JavaScript (Day.js, Chart.js)  

---

## Anteprima Demo

Puoi testare la demo live su GitHub Pages:  
https://bocaletto-luca.github.io/HabitFlow/index.html

---

## Installazione

1. Clona il repository sul tuo computer:  
   ```bash
   git clone https://github.com/bocaletto-luca/HabitFlow.git
   cd HabitFlow
   ```
2. Avvia un server statico nella cartella del progetto:  
   - Con Python 3  
     ```bash
     python3 -m http.server 8000
     ```  
   - Con Node.js  
     ```bash
     npx http-server . -p 8000
     ```
3. Apri il browser su `http://localhost:8000/index.html`

---

## Utilizzo

1. **Aggiungi una nuova abitudine**  
   - Inserisci nome, scegli un’icona emoji e, se desideri, imposta un orario di promemoria.  
   - Clicca **Add Habit**.

2. **Mostra/Nascondi viste**  
   - **Toggle Monthly**: calendario mensile.  
   - **Toggle Weekly**: tabella settimanale.  
   - **Toggle Daily**: elenco di oggi.  
   - **Toggle Stats**: grafico delle percentuali.

3. **Registra completamenti**  
   - In ciascuna vista clicca sulla cella/giorno corrispondente per marcare “fatto” o rimuovere la marcatura.

4. **Dark/Light Mode**  
   - Clicca l’icona 🌙 per passare alla modalità scura o ☀️ per tornare chiaro.

5. **Backup & Ripristino**  
   - **Export**: scarica un file JSON di backup.  
   - **Import**: carica un backup JSON per ripristinare le abitudini e i record.

---

## Personalizzazione

- **Temi**: modifica le variabili CSS `--primary`, `--bg`, `--text` nel `<style>`.  
- **Avvisi**: personalizza il testo o l’icona di notifica nel metodo `notify()` dello script.  
- **Date**: utilizza Day.js per cambiare formato o logica di calcolo.

---

## Struttura dei File

```text
HabitFlow/
└── index.html       # Single-page application (HTML, CSS, JS)
```

---

## Contributi

Contributi, issue e richieste di funzionalità sono benvenuti:

1. Fork del progetto  
2. Crea un branch (`git checkout -b feature/my-feature`)  
3. Fai il commit delle tue modifiche (`git commit -m "Aggiunta mio feature"`)  
4. Push al branch (`git push origin feature/my-feature`)  
5. Apri una Pull Request  

Assicurati di rispettare lo stile di codice esistente e di testare le nuove funzionalità.

---

## Licenza

Questo progetto è rilasciato sotto licenza **GPL**. Vedi il file [LICENSE](LICENSE) per i dettagli.

---

## Autore

**Bocaletto Luca**  
- GitHub: [@bocaletto-luca](https://github.com/bocaletto-luca)  
- Repository: [HabitFlow](https://github.com/bocaletto-luca/HabitFlow)
