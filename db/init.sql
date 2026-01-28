DROP TABLE IF EXISTS expense_table;

CREATE TABLE expense_table(
    id INTEGER PRIMARY KEY,
    product TEXT NOT NULL,
    descr TEXT NOT NULL,
    amount REAL NOT NULL,
    paid INTEGER DEFAULT 0
);

INSERT INTO expense_table (product,descr,amount) VALUES 
('Spesa supermercato', 'Cibo settimanale', 82.50),
('Abbonamento internet', 'Fibra mensile', 29.99),
('Rifornimento auto', 'Benzina', 60.00);

/* 
    comandi sqlite3:
    sqlite3 (nomedb)
    .read (nome del file.sql)
    select * from (nome_tabella);
*/