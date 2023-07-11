---
sidebar_position: 2
---

# Autofattura 74 Ter

Una volta create le causali (vedi <a href="operazioni-preliminari">sezione precedente</a>) possiamo procedere alla creazione del documento vero e proprio. Per questo manuale utilizzeremo come esempio la creazione di un’autofattura 74 Ter.

Basterà, come già viene fatto per gli altri documenti, aprire il menu `Fatturazione > Emissione fatture` premere F4 per entrare in modalità `Carica` e inserire le seguenti voci:

- Tipo: **AU**
- Numero: `(Numero fattura) **/ AU**`
- Del: `(Inserire data fattura)`
- Causale: **E74**

Se manca il codice E74, selezionare il campo Causale, premere F9, premere ancora F9 per creare il nuovo codice e inserire i seguenti campi:

<div class="text--center">
  <img src="/img/164-e74.png" alt="E74"/>
</div>

**Nota**:
È fondamentale che il `Flag Cliente/Forn` sia impostato su **Fornitore**.

Una volta aggiunto la causale E74, compilare la tabella (Descrizione, Qta, Pz. Unitario, ecc...) basandosi sul documento ricevuto dal fornitore estero.

<div class="text--center">
  <img src="/img/164-e74.png" alt="E74"/>
</div>

### Contropartita

Al momento dell’inserimento della **Controp.** (contropartita) è importante assicurarsi che sia una contropartita di costo e che inoltre sia di tipo `Magazzino`, qualora non lo fosse il programma non ne permetterà l’inserimento.

Possiamo verificare il `Tipo Sottoconto` della contropartita (esempio in figura COSTI CEE) che abbiamo scelto dal menu:

`Archivi > Contabili > Piano dei conti`

<div class="text--center">
  <img src="/img/165-piano-conti-sottoconto.png" alt="Piano dei conti - Sottoconto Magazzino"/>
</div>

Se il campo sottoconto è vuoto, entriamo in modalità `Varia` (premendo F3) e selezioniamo `Magazzino`. Salviam con F10 e chiudiamo la maschera PIANO DEI CONTI.

---

Torniamo ora alla fattura, inseriamo la contropartita e i relativi dati.

<div class="text--center">
  <img src="/img/166-autofattura-74-ter.png" alt="Autofattura 74 Ter"/>
</div>

Per aggiungere la modalità di pagamento cliccare sul pulsante `Cli For` nell'angolo a destra e inserire i campi **Pagamento** e **Banca di Appoggio**

<div class="text--center">
  <img src="/img/168-cli-for.png" alt="Cli For"/>
</div>

Premendo F10 o Salva si apre la maschera `Vendita dati di Riepilogo`. Assicurati di inserire alla voce `Causale Contabile`, la causale **AU7** (per crearla vedi sezione <a href="operazioni-preliminari">Autofattura estera 74 Ter</a>)

<div class="text--center">
  <img src="/img/167-vendita-dati-riepilogo.png" alt="Vendita dati di Riepilogo"/>
</div>

Concludiamo il tutto premendo F10 o cliccando sul pulsante `Ok`.

Il programma chiede se si vuole stampare il documento. Se si clicca `Yes` si apre la finestra di stampa

<div class="text--center">
  <img src="/img/170-stampa.png" alt="Stampa"/>
</div>

E' consigliato di cliccare prima sul pulsante `Anteprima` per visualizzare e verificare che il documento sia corretto.

Cliccare ESC per ritornare alla finestra di stampa. Cliccare Stampa su e selezionare la stampante da utilizzare.

Premere il pulsante Esci per tornare al documento di vendita.

### Aggiungere Tipo Documento in Altri Dati

Ora che l’autofattura è stata creata possiamo procedere all’inserimento di informazioni aggiuntive necessarie (come il **Tipo Documento**) per ottenere un corretto file .xml.

Cliccare sul pulsante `Altri Dati` 
Inseriamo il Tipo documento corretto:

- **TD17**: per integrazione/autofattura per acquisto servizi dall’estero
- **TD18**: per integrazione per acquisto di beni intracomunitari
- **TD19**: per integrazione/autofattura per acquisto di beni ex art.17 c.2 DPR 633/72

Cliccare su F10 o il pulsante Salva.

<div class="text--center">
  <img src="/img/171-tipo-documento.png
" alt="Tipo Documento"/>
</div>

Consigliamo di inserire nella `Descrizione documento` una descrizione generica di questo tipo:

- “Documento integrativo per acquisti di Beni da fornitore UE” per gli acquisti di beni CEE
- “Documento integrativo per acquisti di SERVIZI da fornitore UE” per gli acquisti di servizi CEE
- “Autofattura ART.17, C2 DPR 633/72” per gli altri casi

### Creazione del file .xml

Ora che la fase di creazione dell’autofattura è completa, possiamo procedere nella
generazione del file .xml cliccando sul pulsante `Genera`.

<div class="text--center">
  <img src="/img/172-id-sdi.png" alt="ID SDI"/>
</div>

---

Seguirà la spiegazione della contabilizzazione dell’autofattura e su ciò che comporta alla prima nota.

Questa sezione è dedicata a chi ha il **backoffice**.

Per chi ha solo il frontoffice, l’operazione di generazione dell’autofattura si può considerare conclusa al momento dell’invio al sistema di interscambio, in quanto la gestione contabile è regolata dal proprio consulente.

---

## Contabilizzazione autofattura 74 Ter

Ora che la fattura è stata inviata con successo non ci resta altro che contabilizzare la fattura. Ci viene in aiuto la procedura `Contabilizza Autofatture` presente nel menu `Fatturazione`. Terminata la procedura la scrittura di prima nota risultante sarà la seguente:

<div class="text--center">
  <img src="/img/173-contabilizza-autofattura.png" alt="Contabilizza autofattura 74 Ter"/>
</div>

Il processo ora può considerarsi concluso.
