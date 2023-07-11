---
sidebar_position: 1
---

# Ricostruzione Temporanei e Ricostruzione Indici

Può capitare che Pegaso non completi la scrittura di dati per diversi motivi: connessione di rete instabile, chiusura improvvisa del programma, ...

## Messaggi di errore

> ! Error writing to file MOV_TU_3.DBF (o altri nomi di file)

1. Chiudere tutti i Pegaso
2. Aprire Pegaso su un computer, andare in `Utility > Ricostruzione Indici > Sel. Tutti > Esegui`
3. Andare in `Utility > Ricostruzione Temporanei`
4. Riavviare i pc
5. Se il problema persiste significa che la connessione del collegamento rete fatto su Windows è instabile e quindi il programma non riesce a scrivere tutti i dati completamente e risulta quell'errore.
Per risolverlo rivolgersi al vostro tecnico di rete.

---

> ! Index does not match the table e non fa entrare in Pegaso.

<div class="text--center">
  <img src="/img/177-index-not-match-table.png" alt="Index does not match table"/>
</div>

1. Fare copia backup Pegaso
2. Andare nella cartella di Pegaso cercare e cancellare il file tabelle.cdx
3. Entrati in Pegaso eseguire `Utility > Ricostruzione Temporanei` e `Utility > Ricostruzione Indici > Sel. Tutti > Esegui`
