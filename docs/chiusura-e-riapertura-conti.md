---
sidebar_position: 20
---

# Chiusura e la riapertura dei conti

## Controllo del Bilancio

**Prima di effettuare la chiusura dei conti**

Prima di effettuare la chiusura dei conti è **necessario** eseguire una serie di controlli per evitare che il bilancio non quadri, i controlli principali da eseguire sono i seguenti:

1. Controlli di configurazione del programma
2. Controllo bilancio

### 1. Controlli di configurazione del programma

Da effettuare assolutamente la prima volta che si utilizza il programma per la chiusura e la riapertura, si consiglia di controllare periodicamente che i seguenti parametri siano impostati correttamente.

- Controllare che i sottoconti **Utile d'esercizio** e **Perdita d'esercizio** siano configurati in anagrafica con **Sez. Bilancio** `Attivita' o Passivita'` e `Tipo Sottoconto` generico
- Controllare che i sottoconti **Profitti e Perdite**, **Bilancio di chiusura**, **Bilancio di apertura** siano configurati in anagrafica con **sez. Bilancio** ordine e **Tipo sottoconto** riepilogo

Per controllare i sottoconti andare nella voce di menu: `Archivi > Contabili > Piano dei Conti` e richiamare il sottoconto (come da figura)

<div class="text--center">
  <img src="/img/154-piano-conti.png" alt="Piano conti"/>
</div>

### 2. Controllo bilancio

Operazione da eseguire tutte le volte che ci apprestiamo a fare la chiusura e la riapertura dei conti.

Controllare che la stampa bilancio `Totale esercizio` e `Da data a Data` coincidano. Se sono diversi eseguire nell’ordine le seguenti operazioni e riprovare il punto 1 dopo ogni operazione:

- Eseguire una ricostruzione saldi (Menù `Contabilità > Contabilità Servizi > Ricostruzione Saldi`)
- Eseguire una stampa di prima nota di verifica (Menù `Contabilità > Stampa Prima Nota`. Attivare il check `Stampa di verifica`).
- Controllare eventuali registrazioni `Fuori competenza`. Andare in `Contabilita' > Mastrini Stampa` e vedere mastrini con anno competenza diverso dal periodo considerato 

Esempio: Esercizio 2023 e periodo dal 01/01/1900 al 31/12/2022 oppure Esercizio 2023 e periodo dal 01/01/2024 al 31/12/9999

<div class="text--center">
  <img src="/img/155-stampa-mastrini.png" alt="Stampa mastrini"/>
</div>

Per controllare le registrazioni fuori competenza andare nella voce di menu: `Contabilita' > Mastrini Stampa` e impostare date di ricerca (come da figura)

Una volta che la stampa bilancio **Totale esercizio** e **Da data a Data** coincidono si può procedere con le operazioni di chiusura del bilancio.


