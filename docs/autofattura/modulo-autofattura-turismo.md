---
sidebar_position: 1
---

# Modulo Autofattura Turismo (registrazioni automatiche)

Il modulo Autofattura Turismo permette all’agenzia di registrare automaticamente attraverso le pratiche caricate le autofatture delle commissioni. Permette inoltre di vedere in ogni momento la situazione delle autofatture registrate direttamente dalla pratica turismo.

## Come caricare le autofatture

Per caricare le autofatture in automatico è sufficiente entrare nella voce di menu: `Viaggi > Pagamenti e Autofatture T.O. > Genera Autofatture T.O.`

<div class="text--center">
  <img src="/img/112-autofatture.png" alt="Autofatture T.O."/>
</div>

**Fornitore**

Inserire il fornitore di cui si vuole registrare l’autofattura

**Selezione pratiche**

Nei campi Da Numero / Data e A Numero / Data è possibile filtrare le pratiche presenti per data o numero. Lasciando i campi come sono proposti il programma propone tutte le pratiche.

**Considera rimborsi**

Se flaggato considera i rimborsi inseriti nelle pratiche e diminuisce l’importo delle commissioni

Confermando con F10 la procedura propone l’elenco delle pratiche turismo inserite per quel determinato fornitore

<div class="text--center">
  <img src="/img/113-autofatture2.png" alt="Autofatture T.O. 2"/>
</div>

**Attenzione!**
Il programma propone l’importo delle commissioni in base alla percentuale di commissione inserita nella pratica, in ogni caso è possibile modificare l’importo facendo F9 sulla riga della pratica

F9 sulla riga se vogliamo cambiare gli importi delle commissioni

<div class="text--center">
  <img src="/img/114-autofatture3.png" alt="Autofatture T.O. 3"/>
</div>

Nei campi commissioni è possibile variare l’importo delle commissioni riconosciute dal Tour Operator per quella determinata pratica ed è possibile distinguerle tra CEE e Fuori CEE.

Per generare l’autofattura è sufficiente cliccare sulle righe e la procedura andrà ad aggiungere l’importo delle commissioni al totale

<div class="text--center">
  <img src="/img/115-autofatture4.png" alt="Autofatture T.O. 4"/>
</div>

Una volta confermato con F10 la procedura proporrà la maschera di conferma:

<div class="text--center">
  <img src="/img/116-autofatture5.png" alt="Autofatture T.O. 5"/>
</div>

I dati per la contabilità vengono richiamati in automatico dai parametri turismo accessibili in `Viaggi > Impostazioni > Parametri > Turismo > Pagamenti TO`

Confermando con F10 la procedura esegue le seguenti operazioni:

- **Registrazioni contabili**
genera in automatico scrittura di autofattura (AUV). La scrittura contabili è visibile anche dalla pratica tramite il pulsante Pagamento Fornitori.
- **Riepilogo pratica**
inserisce sulla pratica nel pulsante pagamento fornitori il flag su Ricevuti Documenti.

<div class="text--center">
  <img src="/img/117-pagamenti-fornitori.png" alt="Situazione Pagamenti Fornitori"/>
</div>

<div class="text--center">
  <img src="/img/118-pagamenti-fornitori2.png" alt="Situazione Pagamenti Fornitori 2"/>
</div>

Dettaglio della situazione (pulsante dettaglio)

**Attenzione!**
Il programma inserisce in automatico i dati nella maschera situazione fornitore. E’ possibile comunque in ogni momento modificare la situazione sulla pratica agendo sulle maschere proposte.
Le modifiche fatte sulla situazione pagamenti fornitore **non** hanno effetto sulla situazione contabile.

## Parametri Modulo Autofattura

Per utilizzare al meglio il modulo Autofattura si consiglia di inserire i parametri principali del modulo.

Per inserire o verificare i parametri andare alla voce di menu `Viaggi > Impostazioni > Parametri > Turismo > Pagamenti TO`

<div class="text--center">
  <img src="/img/119-parametri-autofatture.png" alt="Parametri Autofatture T.O."/>
</div>

Tutti i campi in figura sono obbligatori

**Alfa Numerazione Autofatture**

È la lettera che si vuole utilizzare per la numerazione separata delle autofatture.

**Causale Contabile Autofatture**

E’ la causale contabile utilizzata per registrare l’autofattura, solitamente AUV (autofattura vendite)

**Codice pagamento**

E’ il codice pagamento che verrà utilizzato nella registrazione dell’autofattura

**Sottoconto ricavo Commissioni**

E’ il sottoconto utilizzato per la registrazione delle commissioni nella scrittura AUV

**Iva Commissioni**

Sono i codici iva utilizzati per le due diverse tipologie di iva sulle commissioni (cee o fuori cee).

I parametri inseriti nella maschera parametri vengono proposti in automatico nella maschera di conferma della registrazione dell’autofattura (Conferma Autofatture TO). Si possono quindi eventualmente modificare nella fase di generazione della stessa.

