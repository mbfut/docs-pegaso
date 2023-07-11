---
sidebar_position: 3
---

# Pratica biglietteria

Cliccando con il mouse sul menù `Viaggi -> Biglietteria`, compare la maschera “Gestione
Biglietteria/Interroga”.
Da qui è possibile:

- Caricare una nuova pratica (F4)
- Visualizzare le pratiche già caricate attraverso la funzione di Zoom (F9)
- Modificarle (F3)
- Cancellarle (F5)

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

### Dati Biglietto

<div class="text--center">
  <img src="/img/38-dati-biglietto.png" alt="Dati Biglietto"/>
</div>

#### Compagnia

Codice della Compagnia/Vettore. Facendo uno Zoom (F9) è possibile visualizzare l’elenco delle compagnie già inserite. Per caricarne di nuove usare la funzione Zoom su Zoom (come già visto per il caricamento del cliente codificato).

**Attenzione!** 
Quando si carica una nuova compagnia aerea tramite la funzione Zoom su Zoom è obbligatorio inserire anche il campo codice fornitore (chi ci vende il biglietto).

<div class="text--center">
  <img src="/img/39-compagnie.png" alt="Compagnia"/>
</div>

#### N/I

Indica se la tratta è nazionale o internazionale. Se il volo è nazionale bisogna inserire la lettera N altrimenti la lettera I.

#### Numero

Numero del biglietto. Può essere inserito manualmente, oppure, se è stato precedentemente caricato nel magazzino biglietti all’interno della compagnia inserita, viene proposto il primo numero disponibile dal magazzino.

**Attenzione!**
Il campo non accetta codici alfanumerici, i biglietti sono composti solo di numeri se nel codice sono presenti anche delle lettere in realtà si tratta di un codice di prenotazione

#### Data Viaggio

Data di partenza del volo.

#### Passeggero

Nome dell’intestatario del biglietto. Il programma propone in automatico il nome dell’intestatario della pratica, ma è modificabile dall’utente.

#### Tariffa

Importo del biglietto al netto delle tasse aeroportuali.

#### Tasse

Importo delle tasse aeroportuali.

#### Diritti

Importo di eventuali maggiorazioni di prezzo applicate dall’agenzia. Nei documenti rilasciati al cliente vengono totalizzati con il prezzo del biglietto; contabilmente però, confluiscono nei corrispettivi ordinari anziché aprire un debito nei confronti del vettore (vedi argomento del manuale fee d’agenzia).

#### Tratte

Descrizione relativa al percorso o alla tratta del viaggio in oggetto. Facendo un F9 su questo campo si accede alla maschera “Inserimento aeroporti/Varia” da dove è possibile riprendere le tratte che interessano se caricate in precedenza.

#### % Comm. (% Commissione)

Percentuale di commissione attiva riconosciuta dal fornitore all’agenzia. La procedura propone, se presente, la percentuale definita sulla compagnia; altrimenti, se si tratta di un biglietto aereo Iata, propone le commissioni BSP definite nella tabella Parametri Biglietteria. Il valore proposto può comunque essere modificato.

#### Imp. Comm. (Importo Commissione)

Importo della commissione attiva riconosciuta dal fornitore. Tale importo viene calcolato in automatico dalla procedura in base alla percentuale definita sul campo “% Com.”. Il valore proposto può essere modificato dall’operatore.

**Attenzione!** I campi relativi alle commissioni non generano scritture contabili ma servono per generare una stampa di controllo commissioni. Di conseguenza possono essere lasciati anche vuoti.

#### Totale

È la somma degli importi di tariffa, tasse e diritti.

#### C.I. (Codice Iva)

Codice Iva da applicare sulla commissione attiva o sulla vendita al netto. Il programma propone il codice Iva relativo alla aliquota ordinaria definito nella tabella Parametri 74 ter.

#### Sconto

Eventuale percentuale di sconto da applicare sulla tariffa del biglietto.

#### Importo Sconto

Importo dello sconto calcolato in base alla percentuale definita sul campo “Sconto”.

#### Cancella Biglietto <img src="/img/40-cancella-bigl.png" alt="Cancella Biglietto"/>

Per eliminare una riga dal corpo della pratica, posizionarsi su di essa e premere questo pulsante.


#### Duplica Biglietto <img src="/img/41-duplica-bigl.png" alt="Duplica Biglietto"/>

Questo pulsante serve per duplicare l’ultima riga del corpo (cioè l’ultimo biglietto della pratica).
Posizionarsi sulla prima riga vuota e premere questo pulsante per duplicare la riga precedente, che poi sarà comunque modificabile.

Una volta inseriti i dati in modo corretto è necessario cliccare sul tasto <img src="/img/3-salva.png" alt="Salva"/> (F10 della tastiera). In questo modo la pratica viene registrata ed è quindi possibile visionarla in ogni momento.
Al momento della conferma viene proposta la maschera “Dati chiusura Biglietteria\Varia”

<div class="text--center">
  <img src="/img/42-dati-chiusura-bigl.png" alt="Dati Chiusura Biglietteria"/>
</div>

Questa finestra riporta il totale della pratica ed il relativo saldo ed è possibile da qui eseguire tutte le operazioni di chiusura della pratica:

- stampa della bolla con l’elenco dei biglietti emessi
- stampa dell’estratto conto
- registrazione dell’incassi ricevuti dal cliente

### Ricercare una pratica

Cliccando il tasto F9 compare la videata “Sel. Pratiche Biglietteria/Varia”, che permette di ricercare le pratiche impostando diversi parametri di selezione: dati Viaggio (nome passeggero, data viaggio), Dati Biglietto (tipo biglietto, compagnia, fornitore, ecc..), Dati Pratica (Data pratica, cliente, stato pratica, ecc…).

<div class="text--center">
  <img src="/img/43-ricerca-pratica-bigl.png" alt="Ricercare una pratica"/>
  <p>Ricerca Biglietti – pag. 1</p>
</div>

<div class="text--center">
  <img src="/img/44-ricerca-pratica-bigl2.png" alt="Ricercare una pratica 2"/>
  <p>Ricerca Pratiche – pag. 2</p>
</div>

Confermando con F10 i parametri impostati, il programma propone una seconda videata nella
quale vengono visualizzati i biglietti che soddisfano le condizioni richieste

E’ possibile ricercare una pratica anche inserendo il numero della stessa nei campi `Da numero` `A Numero`.

### Modificare una pratica salvata

Per modificare una pratica già salvata è sufficiente ricercarla in modalità interroga (vedi pagine precedenti) e cliccare il tasto `F3` (<img src="/img/8-varia.png" alt="Varia"/>).

Una volta entrati nella modalità varia è possibile apportare le modifiche desiderate alla pratica (gli unici campi non modificabili sono il campo anno pratica e numero pratica).

<div class="text--center">
  <img src="/img/43-ricerca-pratica-bigl.png" alt="Ricercare una pratica"/>
</div>
