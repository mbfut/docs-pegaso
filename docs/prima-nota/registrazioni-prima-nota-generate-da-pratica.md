---
sidebar_position: 2
---

# Registrazioni in prima nota generate dalla pratica

Pegaso Travel Manager è dotato di una serie di automatismi che consentono la registrazione automatica in prima nota delle pratiche turismo e biglietteria.

Vediamo nello specifico quali sono le registrazioni che il programma fa in autonomia e quali invece vanno inserite a mano.

> Le scritture di prima nota generate dal programma sono continuamente aggiornate ad ogni riconferma della pratica e rispecchiano quindi in ogni momento la situazione registrata sulla pratica.

## Pratica Intermediazione

Al momento della conferma della pratica intermediazione il programma provvede alla generazione di una scrittura in prima nota con causale TUR. La scrittura nello specifico rileva l’apertura del credito nei confronti del cliente e contemporaneamente l’apertura del debito nei confronti del fornitore.
I dati dei clienti e fornitori e relativi sottoconti sono rilevati dal programma dall’anagrafica dei clienti/fornitori.
Vediamo un esempio di scrittura di prima nota:

<div class="text--center">
  <img src="/img/98-prima-nota3.png" alt="Prima Nota 3"/>
</div>

Per vedere la registrazione creata in prima nota direttamente dalla pratica: cliccando il pulsante <img src="/img/28-altri-dati.png" alt="Altri dati"/> e Note - PN (vedi figura successiva)

<div class="text--center">
  <img src="/img/99-prima-nota4.png" alt="Prima Nota 4"/>
</div>

Cliccando sul pulsante Prima Nota <img src="/img/31-prima-nota.png" alt="Prima Nota"/> si apre direttamente la scrittura di prima nota generata. Nel nostro caso troviamo la scrittura sotto la voce Turismo essendo la registrazione della pratica turismo.

Nota: Il funzionamento è lo stesso anche nella pratica Biglietteria.

## Diritti di agenzia turismo

Il sistema provvede a registrare anche gli eventuali diritti di agenzia applicati alla pratica turismo. La contabilizzazione dei diritti avviene però solo al momento del saldo.

<div class="text--center">
  <img src="/img/99-prima-nota4.png" alt="Prima Nota 4"/>
</div>

Al momento del saldo il programma provvede a generare una scrittura con causale DIR in cui
viene aperto un credito nei confronti del cliente per l’importo dei diritti e viene al tempo stesso movimentato il sottoconto Diritti di Agenzia.

**Il sottoconto Diritti di Agenzia è un sottoconto di ricavo che va a movimentare il registro corrispettivi.**

<div class="text--center">
  <img src="/img/99-prima-nota4.png" alt="Prima Nota 4"/>
</div>

Il programma provvede a scorporare l’iva trattandosi di diritti applicati su pratica
turismo e quindi sempre sottoposti a Iva.

**Attenzione!**
Il caso dei diritti su pratica Biglietteria è leggermente diverso a causa della diversa metodologia di applicazione dell’iva.
Per vedere come funziona si consiglia di consultare il presente manuale alla voce Le Fee d’Agenzia.

## Incassi pratica

Il sistema registra in automatico anche la situazione contabile degli incassi. Nello specifico genera una registrazione di prima nota per ogni incasso inserito nella pratica.
Vediamo esempio dell’incasso di un acconto e di un successivo saldo in una pratica tipo di 1000,00 euro per il cliente Mario Rossi.
In questo caso incassiamo in data 07/08/2008 l’importo di 600,00 euro come acconto e il programma provvede a diminuire il credito nei confronti del cliente e al tempo stesso a incrementare la mia cassa.

<div class="text--center">
  <img src="/img/100-prima-nota5.png" alt="Prima Nota 5"/>
</div>

Per vedere la registrazione andare in `Viaggi > Turismo` cliccare sul pulsante <img src="/img/46-incassi.png" alt="Incassi"/> e poi sul pulsante <img src="/img/31-prima-nota.png" alt="Prima Nota"/>.

Nel primo esempio abbiamo voluto registrare un acconto incassato in contanti e quindi a incremento della cassa, è possibile gestire anche altre tipologie di pagamento direttamente dalla mascherina dell’incasso. Nel secondo esempio proviamo a incassare un saldo proveniente da un bonifico bancario.

<div class="text--center">
  <img src="/img/101-pn-incassi.png" alt="Prima Nota Incassi"/>
</div>

Per modificare il sottoconto movimentato nell’incasso è sufficiente modificare il sottoconto visualizzato nel campo **Conto Cassa/Banca**. In questo caso inserendo direttamente il sottoconto della banca su cui abbiamo ricevuto il bonifico. E’ possibile inoltre decidere di utilizzare una causale diversa da quella di default modificandola sul campo Causale.

Nell’esempio la registrazione generata sarà la seguente:

<div class="text--center">
  <img src="/img/102-prima-nota6.png" alt="Prima Nota 6"/>
</div>
