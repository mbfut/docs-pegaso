---
sidebar_position: 9
---

# Modulo pagamenti Turismo (registrazioni automatiche)

Il modulo pagamenti Turismo permette all’agenzia di registrare automaticamente attraverso le pratiche caricate i pagamenti ai fornitori delle stesse. Permette inoltre di vedere in ogni momento la situazione dei pagamenti ai fornitori sulla pratica turismo.

## Come caricare i pagamenti

Per caricare i pagamenti ai fornitori in automatico è sufficiente entrare nella voce di menu:
`Viaggi > Pagamenti e Autofatture T.O. > Registra Pagamento T.O.`.

<div class="text--center">
  <img src="/img/100-prima-nota5.png" alt="Prima Nota 5"/>
</div>

**Tipo pagamento**
Nel campo tipo pagamento si definisce il tipo di rapporto che si ha con il Tour Operator

- Diretto a Fornitore: L’agenzia paga direttamente il fornitore da cui ha prenotato
- Factoring: L’agenzia utilizza un servizio di intermediazione del debito
(IN QUESTO CASO va definito se l’intermediario è gestito tramite codice vero e proprio o attraverso un sottoconto > vedi argomento FACTORING)

**Fornitore**
Inserire il fornitore che si vuole pagare

**Selezione pratiche**
Nei campi NUMERO, DATA E DATA PARTENZA è possibile filtrare le pratiche presenti per data o numero. Lasciando i campi come sono proposti il programma propone tutte le pratiche.

**Considera rimborsi**
Se flaggato considera i rimborsi inseriti nelle pratiche e diminuisce l’importo proposto del pagamento al fornitore.

Confermando con F10 la procedura propone l’elenco delle pratiche turismo inserite per quel determinato fornitore

<div class="text--center">
  <img src="/img/103-pagamenti-to.png" alt="Pagamenti T.O."/>
</div>

**Attenzione!**
Il programma detrae dall’importo del bonifico le commissioni in base alla percentuale di commissione inserita nella pratica, in ogni caso è possibile modificare l’importo facendo F9 sulla riga della pratica

F9 sulla riga se vogliamo cambiare gli importi

<div class="text--center">
  <img src="/img/104-pagamenti-to2.png" alt="Pagamenti T.O. 2"/>
</div>

Nel campo importo da pagare è possibile variare l’importo da pagare al Tour Operator per quella determinata pratica.

Per mettere in pagamento le pratiche è sufficiente cliccare sulle righe e la procedura andrà ad aggiungere l’importo al totale

<div class="text--center">
  <img src="/img/105-pagamenti-to3.png" alt="Pagamenti T.O. 3"/>
</div>

Una volta confermato con F10 la procedura proporrà la maschera di conferma:

<div class="text--center">
  <img src="/img/106-pagamenti-to4.png" alt="Pagamenti T.O. 4"/>
</div>

I dati per la contabilità vengono richiamati in automatico dai parametri turismo `Viaggi > Impostazioni > Parametri > Turismo > Pagamenti TO`

Confermando con F10 la procedura esegue le seguenti operazioni:

- Registrazioni contabili
genera in automatico scrittura di pagamento (BOF per il fornitore diretto, FAC e BOF per
fornitore factoring). Le scritture contabili sono visibili anche dalla pratica tramite il pulsante Pagamento Fornitori.
- Riepilogo pratica
inserisce sulla pratica nel pulsante pagamento fornitori i dati del pagamento effettuato.

<div class="text--center">
  <img src="/img/107-pagamenti-fornitori.png" alt="Situazione Pagamenti Fornitori"/>
</div>

Situazione dei pagamenti visibile dal pulsante pagamento fornitori

<div class="text--center">
  <img src="/img/108-pagamenti-fornitori-dettaglio.png" alt="Dettaglio Pagamenti Fornitori"/>
</div>

Dettaglio della situazione (pulsante dettaglio)

**Attenzione!**
Il programma inserisce in automatico i dati nella maschera situazione pagamenti. E’ possibile comunque in ogni momento modificare la situazione sulla pratica agendo sulle maschere proposte. (le modifiche fatte sulla situazione pagamenti fornitore non hanno ovviamente effetto sulla situazione contabile)

## Parametri modulo Pagamento Fornitori

Per utilizzare al meglio il modulo Pagamento Fornitori si consiglia di inserire i parametri principali del modulo.

Per inserire o verificare i parametri andare alla voce di menu `Viaggi > Impostazioni > Parametri > Turismo > Pagamenti TO`

<div class="text--center">
  <img src="/img/109-pagamenti-turismo.png" alt="Pagamenti Turismo"/>
</div>

Tutti i campi in figura sono obbligatori

**Causale Contabile Pagamento**

E’ la causale contabile utilizzata per registrare il pagamento, solitamente BOF (bonifico a fornitore)

**Causale Contabile per giroconto Factoring**

E’ la causale contabile utilizzata per registrare il giroconto dal Tour Operator all’intermediario di factoring.

**Attenzione!** La causale FAC deve essere caricata nel programma non essendo presente di default, per caricarla andare alla voce di menu `Archivi > Contabili > Causali Contabili` e caricare la nuova causale come da figura seguente.

<div class="text--center">
  <img src="/img/110-factoring.png" alt="Factoring"/>
</div>

**Codice pagamento fornitore**

E’ il codice pagamento fornitore che verrà utilizzato nella registrazione del pagamento

**Sottoconto Banca/Cassa**

E’ il sottoconto utilizzato per la banca (in caso si utilizzino più banche si consiglia di inserire la più usata)

**Spese bancarie e bollo**

Sono i sottoconti utilizzati per gestire le spese di emissione del bonifico o la presenza di eventuali bolli.

I parametri inseriti nella maschera parametri vengono proposti in automatico nella maschera di conferma del pagamento al fornitore. Si possono quindi eventualmente
modificare nella fase di generazione dello stesso.

## Factoring

Per poter utilizzare i pagamenti ai fornitori in modalità factoring è necessario impostare la modalità sul fornitore.

- Attivare flag factoring su anagrafica fornitore
Entrare nella scheda del fornitore utilizzato nella pratica (`Viaggi > Archivi > Fornitori`) e
nella scheda `VIAGGI` attivare il flag factoring e indicare se si vuole gestire il pagamento attraverso un altro fornitore o attraverso un sottoconto (tipo banca).

<div class="text--center">
  <img src="/img/111-factoring2.png" alt="Factoring 2"/>
</div>
