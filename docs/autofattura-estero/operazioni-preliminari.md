---
sidebar_position: 1
---

# Operazioni preliminari

## Parametri fatturazione elettronica

Assicuriamoci che nel menu

`Fatturazione > Fatture Elettroniche > Configurazione > Parametri`

sia presente, nei dati di trasmissione dell’azienda, il **Codice Fiscale**.

<div class="text--center">
  <img src="/img/156-dati-trasmissione.png" alt="Dati trasmissione"/>
</div>

<div class="text--center">
  <img src="/img/157-dati-trasmissione2.png" alt="Dati trasmissione 2"/>
</div>

## Aggiunta causali contabili

Sarà necessario creare due nuove causali contabili, per farlo basterà selezionare la voce del menu:

`Archivi > Contabili > Causali Contabili`

Una volta aperta la maschera, basterà preme F4 per entrare in modalità Carica (F4 da tastiera o il pulsante <img src="/img/6-nuovo.png" alt="Nuovo"/>).
La situazione sarà la seguente:

<div class="text--center">
  <img src="/img/169-causali-contabili.png" alt="Causali Contabili"/>
</div>

Ora si può procedere con l’inserimento delle nuove causali contabili. Due per la gestione normale ed una per la gestione delle 74 Ter.

La prima, che per semplicità codificheremo come `Autofattura`, verrà utilizzata in fase di creazione del documento, mentre la seconda, che verrà adoperata per la registrazione di prima nota, la chiameremo `Giroconto Reverse Charge` (i nomi delle causali non sono importanti e possono variare). Le due causali dovranno essere così definite:

### Autofattura

<div class="text--center">
  <img src="/img/158-causuali-contabili-aut.png" alt="Causuali contabili AUT"/>
</div>

### Giroconto reverse charge

<div class="text--center">
  <img src="/img/159-causuali-contabili-grc.png" alt="Causuali contabili GRC"/>
</div>

Inoltre abbiamo bisogno di un’ulteriore causale contabile per gestire le autofatture che riguardano operazione effettuate in regime IVA 74ter.

La causale che in questo caso è stata codificata con il codice E74 dovrà essere definita come segue:

### Autofattura estero 74 Ter

<div class="text--center">
  <img src="/img/160-causuali-contabili-au7.png" alt="Causuali contabili AU7"/>
</div>

Confermiamo poi con F10 o il pulsante <img src="/img/3-salva.png" alt="Salva"/> i dati inseriti

## Controllo fornitore

Per emettere correttamente l’autofattura dobbiamo assicurarci che nel fornitore in questione sia correttamente inserito il Regime Fiscale impostato con il valore **RF18**.

Dal menu `Archivi > Contabili > Fornitori` recuperiamo il fornitore in questione con F9 o <img src="/img/7-cerca.png" alt="Cerca"/> e assicuriamoci che nella scheda `Acquisti` sia presente. In caso contrario, entrare in modalità `Varia` (premendo il tasto F3 o <img src="/img/8-varia.png" alt="Varia"/>) ed inserire RF18 nel campo `Regime Fiscale`.

<div class="text--center">
  <img src="/img/161-rf18.png" alt="RF18"/>
</div>

## Aggiunta nuovo cliente

Una volta terminato l’inserimento dobbiamo creare un nuovo cliente uguale in tutto e per tutto al fornitore estero che andrà utilizzato nell’auto fattura. Il cliente ci servirà nella fase di contabilizzazione per registrare correttamente l’autofattura.
Ci basterà selezionare la voce dal menu:

`Archivi > Contabili > Clienti`

Premere F4 per entrare in modalità Carica e copiare i dati che erano stati inseriti nel fornitore.

Esempio:

<div class="text--center">
  <img src="/img/162-cliente-estero.png" alt="Dati cliente estero"/>
</div>

**Attenzione!**
Se il cliente è nuovo, è **obbligatorio** aggiungere il **Sottoconto** nella scheda `Contabili`  

<div class="text--center">
  <img src="/img/163-cliente-sottoconto.png" alt="Cliente sottoconto"/>
</div>

Salviamo i dati inseriti con F10.
