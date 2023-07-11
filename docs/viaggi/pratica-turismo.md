---
sidebar_position: 1
---

# Pratica turismo

In `Viaggi > Turismo`, compare la maschera “Gestione Turismo/Interroga”. Da qui è possibile fare le seguenti operazioni:

- Caricare una nuova pratica con (F4) o ![Nuovo](/img/6-nuovo.png)
- Visualizzare le pratiche già caricate attraverso la funzione di Cerca con  (F9) o ![Cerca](/img/7-cerca.png)
- Modificarle con (F3) o ![Varia](/img/8-varia.png)
- Cancellarle con  (F5) o ![Cancella](/img/16-canc.png)

<div class="text--center">
  <img src="/img/17-pratica-turismo.png" alt="Pratica turismo"/>
</div>

## Carica una nuova pratica

Clicca sul tasto Nuovo ![Nuovo](/img/6-nuovo.png) (F4) e inserisci i dati richiesti. Lo spostamento da un campo all'altro è sequenziale e avviene premendo il tasto Tab da tastiera.

### Intestazione pratica

<div class="text--center">
  <img src="/img/18-intestazione-pratica.png" alt="Intestazione pratica"/>
</div>

#### Anno Pratica

Anno di competenza della pratica. La procedura propone in automatico l’anno relativo all’esercizio in corso che può essere variato dall’operatore.

#### Alfa Pratica

Serie alfanumerica di due caratteri, utilizzabile se si vogliono organizzare le pratiche di biglietteria secondo numerazioni separate. In particolare questo campo è utilizzato dalle agenzie multifiliale per distinguere la numerazione delle pratiche emesse dalle diverse filiali.
Il campo può essere lasciato vuoto se si utilizza un unica numerazione.

#### Numero Pratica

La procedura propone in automatico il primo numero progressivo libero. L’operatore può variarlo però si consiglia di fare questa operazione con attenzione.
Nota: la numerazione pratiche è comunque una numerazione interna senza nessun valore fiscale.

#### Data Pratica

Data di apertura della pratica. Il programma propone la data di sistema, ma può essere variata dall’operatore.

#### Filiale

Identifica il codice dell’eventuale filiale. Se attivo viene proposto il cod. filiale inserito nel campo “Cod. Filiale” nella tabella “Parametri Comuni”. Nel nostro caso lo lasceremo vuoto.

### Tipologia pratica

<div class="text--center">
  <img src="/img/19-tipologia-pratica.png" alt="Tipologia pratica"/>
</div>

#### In Estratto Conto

Se il flag è attivato permette di rendicontare la pratica ad estratto conto. Questa opzione può essere utile nel caso in cui il cliente richieda un documento per giustificare la spesa; oppure come documento riepilogativo da consegnare periodicamente a quei clienti che fanno più viaggi nell’arco dell’anno.

#### Preventivo

Questo flag può essere attivato nel caso in cui si voglia fare un preventivo a cliente o nel caso in cui si stia attendendo una qualsiasi informazione per confermare la pratica ai fini contabili. Quando il flag è vistato, la pratica è registrata ma non contabilizzata in primanota.

### Tipo pratica (Regime)

<div class="text--center">
  <img src="/img/20-tipo-pratica.png" alt="Tipo pratica"/>
</div>

E’ un’opzione molto importante che condiziona il percorso successivo della pratica; in fase di inserimento occorre definire se si tratta di una pratica di intermediazione, 74 Ter o singoli servizi. La diversa tipologia influenzerà la modalità di registrazione contabile della pratica e i diversi documenti di incasso che la procedura consentirà di emettere.

### Dati Contraente

<div class="text--center">
  <img src="/img/21-dati-contraente.png" alt="Dati Contraente"/>
</div>

#### Cliente

Per gestire il cliente all’interno della pratica ci sono 2 modalità:

- CLIENTE CODIFICATO (consigliato)
- CLIENTE LIBERO

Nella modalità CLIENTE CODIFICATO, il cliente viene inserito tramite codice univoco, rimane registrato negli archivi dell’agenzia ed è richiamabile da altre pratiche.

Per inserire un nuovo cliente codificato (non esistente negli archivi dell’azienda) bisogna premere il pulsante Nuovo Cliente <img src="/img/22-nuovo-cliente.png" alt="Nuovo Cliente"/> si aprirà la maschera dell’anagrafica Clienti/Carica.

<div class="text--center">
  <img src="/img/23-carica-cliente.png" alt="Carica Cliente"/>
</div>

Compilare i campi (è obbligatorio inserire nella sezione Contabili il `Sottoconto`).
Premere F10 o <img src="/img/3-salva.png" alt="Salva"/>.

Una volta salvato il cliente premendo due volte il tasto ESC da tastiera si torna alla pratica.

In alternativa ci si può posizionare sul campo “Codice Cliente”, premere F9 per far apparire la lista dei clienti, premere ancora F9 per far apparire l’anagrafica Clienti/Interroga dove si può aggiungere un nuovo cliente con F4 (Nuovo) o modicarne un cliente esistente. Poi salvare con F10 o <img src="/img/3-salva.png" alt="Salva"/>.

Nella modalità CLIENTE LIBERO (sconsigliato), il cliente viene inserito nella pratica ma non rimane registrato negli archivi e non è richiamabile da altre pratiche.
Il nome del cliente è modificabile direttamente dalla pratica; cliccando sul pulsante Cliente Libero è possibile inserire anche i dati anagrafici. I dati vengono memorizzati solo all’interno della singola pratica, perciò è possibile reperirli solo da lì.

#### Pagam.

Viene proposto il tipo di pagamento inserito nell’anagrafica del cliente (nella sezione Vendita vedi campo Cod. Pagamento), altrimenti è possibile accedere alla lista pagamenti premendo il tasto F9 (Cerca) e scegliere il tipo di pagamento effettuato dal cliente.

#### Gruppo

E’ un campo facoltativo e indica se il cliente fa parte di un determinato gruppo (ad esempio Istituti Scolastici).

### Dati Viaggio

<div class="text--center">
  <img src="/img/24-dati-viaggio.png" alt="Dati Viaggio"/>
</div>

#### Cod. T.O.

Viene richiesto il codice del Tour Operator che ha organizzato il viaggio. Facendo F9 è possibile riprendere uno di quelli già pre-caricati. Premere ancora F9 per creare un nuovo fornitore.

#### Descrizione Viaggio

E’ un campo libero puramente descrittivo e può essere inserito dall'utente a sua discrezione.

#### Destinazione

Nel campo di ricerca destinazione inserire un testo da ricercare e cliccare il tasto TAB da tastiera e il programma effettua una ricerca in tutte le destinazioni inserite.

Esempio: scrivendo “FRA” nel campo Destinazione e premendo il tasto TAB, il sistema propone un elenco con tutte le voci contenenti il testo “FRA” ordinate per rilevanza (nel caso specifico il programma propone “Francia”, ma anche “San Francisco”).

<div class="text--center">
  <img src="/img/25-destinazione.png" alt="Destinazione"/>
</div>

##### Territorialità

La destinazione gestisce anche l’informazione sulla territorialità. Assicurarsi che nell’anagrafica delle destinazioni (`Viaggi > Archivi > Turismo > Destinazioni`)

<div class="text--center">
  <img src="/img/26-destinazione2.png" alt="Destinazione 2"/>
</div>

ci sia la corretta territorialità della destinazione (inserire in maiuscolo `C` se CEE o `F` se Fuori CEE). Per modificare i campi tasto F3 o <img src="/img/8-varia.png" alt="Varia"/> e F10 o <img src="/img/3-salva.png" alt="Salva"/>.
<!-- ![Varia](/img/8-varia.png) -->
<div class="text--center">
  <img src="/img/27-destinazione3.png" alt="Destinazione 3"/>
</div>

Il programma provvede a caricarla direttamente sulla pratica Turismo eliminando così il rischio di errori di compilazione.

##### Viaggiare Sicuri

Se si inserisce nelle destinazioni la corretta nazione di appartenenza è possibile utilizzare anche il pulsante `Viaggiare Sicuri` (lo si trova cliccando il pulsante Altri Dati <img src="/img/28-altri-dati.png" alt="Altri Dati"/>). Se la Nazione è inserita con la stessa nomenclatura presente sul sito Viaggiare sicuri sarà possibile visualizzare la scheda informativa del paese.

#### Data di soggiorno

La data di partenza `Dal:` e la data di ritorno `al:` sono due campi obbligatori. Automaticamente, la procedura indica il numero di giorni `Gg.` di durata del viaggio/soggiorno e il numero di pernottamenti `Nt.`, calcolati in base alle due date precedenti.
A differenza dei giorni, le notti sono modificabili dall’operatore in considerazione delle eventuali differenze di fuso orario.

### Altri Dati

Cliccando il pulsante Altri Dati <img src="/img/28-altri-dati.png" alt="Altri Dati"/> possiamo inserire i dati aggiuntivi del viaggio in oggetto.

<div class="text--center">
  <img src="/img/29-altri-dati2.png" alt="Altri Dati 2"/>
</div>

E' possibile inserire:

#### Dati Viaggio

Viene richiesta la struttura (Albergo, villaggio, ecc..) e la destinazione ad essa collegata. La procedura propone quella inserita sulla maschera principale.

#### Trattamento

Va specificato il tipo di trattamento previsto nel pacchetto viaggio in oggetto (Esempio Pensione Completa, Solo Pernottamento, ecc..). Inoltre, nei campi Richieste vincolanti e non possono essere inserite delle richieste aggiuntive da parte del cliente non previste nel pacchetto proposto.

#### Riferimenti

Nella sezione `Riferimenti` 

##### Riferimenti Tour Operator

Vanno indicati il numero di pratica del tour operator (T.O.) e il nome del contatto (operatore).

#### Riferimenti Pacchetto

E’ possibile specificare il nome del catalogo, l’edizione e il numero di pagina dell’offerta.

##### Documenti Obbligatori

Vengono richiesti eventuali documenti o vaccinazioni obbligatorie, nonché polizze assicurative aggiuntive rispetto a quelle previste nel pacchetto proposto.

#### Note - PN

<!-- Codice della tipologia da attribuire al viaggio. Questo campo non è obbligatorio ma è molto utile a fini statistici. Le diverse tipologie sono definibili con criteri e secondo necessità dell’agenzia. Premendo F9 si accede all’elenco delle tipologie definite. Premendo nuovamente F9 possono essere inserite/modificate le tipologie in archivio. -->
Nella sezione `Note - PN` è possibile inserire delle note interne che non compariranno in nessuna stampa. Tramite i pulsanti Prima Nota <img src="/img/31-prima-nota.png" alt="Prima Nota"/> si visualizzano le registrazioni generate dalla pratica. Confermiamo poi la maschera con F10.
Infine premere il tasto ESC per tornare alla schermata della pratica.

### Pax

Cliccando sul pulsante Pax <img src="/img/30-pax.png" alt="Pax"/> possiamo inserire il numero dei partecipanti. Da qui è possibile dettagliare il numero di adulti, Child ed Infant, così come può essere indicato quanti Adulti, Bambini (Child), e (Neonati) Infant siano eventualmente esenti dalla Quota di Partecipazione e/o dalla Quota di Iscrizione. In questa maschera vanno specificati i nomi dei partecipanti e i relativi dati anagrafici.

Nessun dato è obbligatorio al di là del nominativo e della data di nascita di eventuali minori (la data ed il numero di telefono vengono riportati sul contratto). Confermiamo poi la maschera con F10. Le informazioni inserite in questa maschera appariranno sul contratto da consegnare al cliente

### Corpo della pratica

<div class="text--center">
  <img src="/img/32-corpo-pratica.png" alt="Corpo della pratica"/>
</div>

#### Servizio

Per inserire un servizio, (ad esempio quota di partecipazione), premere il tasto `F9`; compare la maschera di zoom dove sono presenti i servizi pre-caricati. E’ possibile effettuare la ricerca ordinando l’archivio per codice (tasto `F8`) o per descrizione (tasto `F7`). Quando si individua il servizio interessato, selezionarlo e cliccare su OK oppure premere un INVIO.

#### Descrizione

Riporta la descrizione del servizio ma può essere cambiata dall'utente.

#### Quantità

La procedura propone il nr. di Pax considerando, nel caso di quota di iscrizione o partecipazione, le eventuali esenzioni specificate nella finestra “Pax”.

#### Valore unitario

Bisogna indicare l’importo unitario del servizio e spostandoci sempre con il TAB ci troveremo già l’importo complessivo calcolato sulla base del prezzo unitario per la quantità del servizio.

#### Totale

La procedure propone automaticamente il totale, moltiplicando il valore unitario per la quantità inserita.

#### Cod. Forn.

In questo campo la procedura proporrà in automatico il Cod. Fornitore inserito
precedentemente. Sulla stessa pratica possono coesistere anche servizi acquisiti da fornitori diversi. Con F9 è possibile visualizzare l’elenco dei fornitori, scegliere quello che ci interessa oppure inserirne uno nuovo con la tecnica dello Zoom su Zoom (premendo due volte il tasto F9).

#### Fornitore

Questo campo riporta la descrizione del codice fornitore selezionato (non è modificabile).

#### %

In questo campo può essere indicata la percentuale di commissione corrisposta dal fornitore.
Nel caso in cui tale commissione sia già stata inserita nell’anagrafica del fornitore (`Acquisti – Altri Dati`) la procedura caricherà questo valore, che resta però modificabile dall’utente. Nel caso in cui non si conosca la percentuale della commissione, ma il suo valore effettivo, indicarlo nel campo successivo e il valore percentuale sarà calcolato automaticamente.

#### Comm.

In questo campo viene indicato il valore delle commissioni corrisposte dal fornitore. Se è indicato un valore percentuale, questo campo contiene il valore calcolato; tuttavia è possibile inserire il valore manualmente, con relativo aggiornamento del campo %.

#### Terr

Questo campo è obbligatorio e definisce la territorialità del servizio (C=CEE, F=Fuori CEE) ai fini di una corretta fatturazione e registrazione contabile dei servizi stessi. 
<!-- (per chiarire come va compilato questo campo è necessario rifarsi all’argomento del manuale Schema regimi agenzia viaggi). -->

#### Cancella Riga

Sotto il corpo della pratica è presente il pulsante <img src="/img/33-cancella-riga.png" alt="Cancella Riga"/> <!-- `Cancella Riga` (equivale a premere il tasto `F6` da tastiera) --> utile per l’eliminazione di una riga dalla pratica: posizionarsi sulla riga da cancellare e premere il pulsante.
Una volta inseriti i dati in modo corretto è necessario cliccare sul tasto <img src="/img/3-salva.png" alt="Salva"/> F10 da tastiera. In questo modo la pratica viene registrata ed è quindi possibile visionarla in ogni momento. Al momento della conferma viene proposta la maschera “Dati chiusura Turismo\Varia”

### Stampe pratiche

Cliccando sul pulsante <img src="/img/34-stampe-pratiche.png" alt="Stampe pratiche"/> si apre la seguente finestra:

<div class="text--center">
  <img src="/img/35-dati-chiusura.png" alt="Dati chiusura"/>
</div>

Questa finestra riporta il totale della pratica ed il relativo saldo ed è possibile da qui eseguire tutte le operazioni di chiusura della pratica:

- stampa del contratto da consegnare al cliente
- stampa di una pagina contenente diciture personalizzabili
- data scadenza saldo e organizzatore viaggio (T.O. o Agenzia)
- inserimento di note alla conferma del contratto
- conferma agenzia e tour operator
- stampa dell’estratto conto
- registrazione dell’incassi ricevuti dal cliente
- emissione del voucher

### Ricerca pratica

Per ricercare una pratica è necessario essere nelle pratiche in modalità Interroga `Viaggi/Turismo`. Cliccando il tasto F9 compare la videata “Sel. Pratiche Turismo/Varia”, che permette di ricercare le
pratiche impostando diversi parametri di selezione: dati Pratica (nome passeggero, data viaggio, data pratica, cliente, stato pratica, ecc…) e dati Viaggio (Tour Operator, destinazione)

<div class="text--center">
  <img src="/img/36-sel-pratiche-turismo.png" alt="Ricerca pratica"/>
</div>

Confermando con F10 i parametri impostati, il programma propone una seconda videata nella quale vengono visualizzate le pratiche che soddisfano le condizioni richieste

> E’ possibile ricercare una pratica anche inserendo il numero della stessa nel campo
numero.

### Modifica pratica salvata

Per modificare una pratica già salvata è sufficiente ricercarla in modalità interroga (vedi sezione precedenti) e cliccare il pulsante F3 (varia).
Una volta entrati nella modalità varia è possibile apportare le modifiche desiderate alla pratica.

Nota: i campi non modificabili sono il campo anno pratica e numero pratica. 
