# Gestione Lista Spese

## Scopo del progetto
Applicazione web per la gestione di una lista di spese.
Permette di aggiungere spese, segnarle come pagate ed eliminarle.

## Tecnologie utilizzate
- HTML / CSS
- JavaScript (Node.js)
- Express
- Database SQLite3
- EJS

## Installazione delle dipendenze
Aprire il terminale nella cartella del progetto ed eseguire:

```bash
npm install
```
Il comando installerà **tutte le dipendenze** presenti nel file `package.json`

## Installazione di SQLite3
Scaricare SQLite dal sito ufficiale: [SQLite3](https://sqlite.org/)  
Dopo aver scaricato il file .zip:
- Estrarre il contenuto
- Copiare **sqlite3.exe** nella cartella **/db** del progetto
- Creare il database locale (esempio: **expense.db**) usando il file SQL `db_init.sql` con il comando:
Terminale:
```bash
sqlite3 (nomedb)
.read (nome del file.sql)
```

## Avvio dell'applicazione in locale
Nel terminale scrivere:
```bash
npm run start
```
Successivamente aprire il browser e andare su:
```bash
http://localhost:3000
```

## Funzionalità principali
- Visualizzare l'intera lista della spese
- Aggiungere nuove spese
- Segnare le spese pagate *(rosso)* e non pagate *(verde)*
- Eliminare dalla lista le spese pagate

Grazie al database, le informazioni verranno salvate anche quando il server è chiuso.
