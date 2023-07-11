---
sidebar_position: 5
---

# Incassi pratiche Turismo e Biglietteria

Esempio di registrazione incasso acconto ricevuto dal cliente:
Il cliente, al momento della conferma della proposta di compravendita, consegna all’agenzia un acconto di €582,67. Vediamo la registrazione dell’incasso:

Cliccare sul pulsante “Incassi” <img src="/img/46-incassi.png" alt="Incassi"/>

<div class="text--center">
  <img src="/img/47-incassi2.png" alt="Incassi 2"/>
</div>

I dati richiesti sono:

- **Data** del movimento di incasso: la procedura propone in automatico la data di sistema.
- **Note**: descrizione del movimento d’incasso in oggetto.
- **Tipo Incasso**: Il tipo incasso è molto importante; infatti a seconda della modalità specificata, diversa sarà anche la registrazione che si andrà ad effettuare. I tipi incasso proposti sono i seguenti:

  - **Acconto**: indica che si vuole effettuare la registrazione di un acconto. In questo caso la procedura propone come documento di emissione solo RI (Ricevuta di incasso)
  - **Saldo**: indica che si vuole incassare la pratica a saldo. Nel caso in cui l’importo da versare non coincida con l’importo a Saldo proposto in automatico dalla procedura, la differenza viene automaticamente portata ad abbuono. In contabilità viene fatta anche la scrittura relativa all’abbuono in oggetto. I tipi documenti proposti sono RI, FT (fattura intermediazione) e solo se sono presenti diritti di agenzia sulla pratica, FD (fattura diritti).
  - **Rimborso**: indica che si vuole effettuare la restituzione degli incassi al cliente. A seconda del tipo pratica impostato vengono proposti diversi documenti di emissione e diversa sarà anche la scrittura contabile che si andrà a generare:
    - nella Pratica intermediazione: viene proposto come tipo documento RR (ricevuta di rimborso) e solo nel caso in cui siano presenti i diritti di agenzia ND (Nota accredito diritti).
    - Nella Pratica Singoli servizi: propone NC (Nota accredito Singoli Serv.) oppure RR (ricevuta di rimborso)
    - nella Pratica 74 Ter: viene proposto tipo documento N7 (Nota accredito 74 Ter) oppure RR (ricevuta di rimborso)
  - **Fattura**: indica che si vuole emettere fattura a cliente senza effettuare il movimento di incasso. Questo può essere utile nel caso in cui il cliente prima di effettuare il pagamento, richieda fattura per poter giustificare la spesa.

- **Causale**: permette di inserire la modalità di pagamento. Questo campo è molto importante ai fini contabili perché determina il sottoconto di Cassa/Banca che verrà utilizzato nella registrazione in Primanota del movimento di incasso. E’ possibile visualizzare tutte le causali inserite facendo un F9 ed è possibile caricarne di nuove attraverso la funzione di zoom su zoom (premendo F9 due volte).

Supponiamo che il nostro cliente ci paghi in contanti. In questo caso riprendiamo la causale “ACC” (ACCONTO SU PRATICA)

**Importo**: La procedura ci propone l’importo totale della pratica; a noi non resta altro che inserire nella finestrella l’importo corrispondente all’acconto ossia €582,67.

A **Saldo**: Viene proposto dalla procedura il saldo ancora da pagare. Questo campo non può essere modificato dall’operatore.

**Abbuono**: Nel caso in cui l’importo che viene incassato a saldo della pratica non coincida con il saldo effettivo da incassare, il residuo viene portato automaticamente ad abbuono.

**Documento**: A seconda del tipo di pratica che si va a caricare viene proposto un diverso Tipo Documento. Facendo uno zoom (F9) è possibile visualizzare i tipi documenti che possono essere emessi per quel movimento di incasso, e selezionare quello che interessa. Viene proposto, inoltre, il numero progressivo collegato al documento impostato e la data di emissione (propone la data di sistema).

**Cliente**: Viene proposta automaticamente la denominazione del cliente inserito sulla maschera principale della pratica. Nel caso vi fossero più partecipanti al viaggio/soggiorno ed ognuno pagasse la propria quota, è possibile, per ciascun incasso, modificare il campo inserendo il nome di ognuno.

**Contabilità**: Viene proposto automaticamente il sottoconto di incasso che la procedura va ad utilizzare per effettuare la registrazione contabile in primanota. La procedura propone il sottoconto collegato alla causale di incasso.

Subito sotto vengono riportati il numero e la data di registrazione del movimento di primanota relativo all’incasso in oggetto. Il pulsante P.N. permette di accedere direttamente da qui alla registrazione contabile che mi ha generato alla conferma dell’incasso.

**Confermiamo ora con F10 e alla richiesta “STAMPA DEL DOCUMENTO?” clicchiamo
sull’opzione “SI”.**

A questo punto possiamo cliccare con il mouse sul bottone anteprima per vedere a schermo il contenuto della nostra stampa.
Se la stampa visualizzata a video ci risulta corretta possiamo stampare su carta la ricevuta che comprova l’avvenuto incasso.

Una volta stampato, usciamo dall’anteprima con l’ESC da tastiera.

## Incassi precedenti

Cliccare sul pulsante <img src="/img/46-incassi.png" alt="Incassi"/> Per vedere gli incassi precedenti, nell'esempio precedente si vedrà la seguente schermata:

<div class="text--center">
  <img src="/img/48-incassi3.png" alt="Incassi 3"/>
</div>

Vengono indicati i dati principali di ciascuna riga di incasso emessa.
In basso a destra viene riportato il Totale degli incassi registrati, eventuali Abbuoni ed il restante Saldo.

Da questa maschera è possibile effettuare diverse operazioni tramite gli appositi
pulsanti.

- <img src="/img/49-carica.png" alt="Carica"/>: Permette di caricare un nuovo movimento di incasso.
- <img src="/img/50-varia.png" alt="Varia"/>: Permette di modificare qualsiasi dato degli incassi già registrati. Per variare basta cliccare sulla riga di incasso che si vuole modificare e quindi sul pulsante Varia.
In questo modo verrà visualizzata la maschera “INCASSI/Varia” dalla quale sarà possibile modificare i dati proposti.
- <img src="/img/51-elimina.png" alt="Elimina"/>: Permette di eliminare il movimento di incasso selezionato.
- <img src="/img/52-fattura.png" alt="Fattura"/>: Permette di emettere fattura a cliente senza registrare un movimento di incasso.
- <img src="/img/53-stampa.png" alt="Stampa"/>: Permette di effettuare la ristampa del documento emesso, relativamente al movimento di incasso selezionato.
- <img src="/img/31-prima-nota.png" alt="Primanota"/>: Consente di visualizzare il movimento di primanota collegato all’incasso selezionato.
