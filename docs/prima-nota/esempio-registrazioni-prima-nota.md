---
sidebar_position: 3
---

# Esempi di registrazioni in prima nota

## Le fatture di acquisto

Per registrare una qualsiasi fattura di acquisto bisogna operare dalla maschera di Prima Nota (`Contabilità > Prima Nota`).

Per le fatture di acquisto ordinarie si utilizza la causale contabile **RF** (ricevimento fattura) per gli acquisti 74 Ter si utilizzerà invece una apposita causale (vedi argomento manuale).

### Ricevimento fattura con una sola aliquota iva

<div class="text--center">
  <img src="/img/120-primanota-esempio.png" alt="Prima Nota Esempio"/>
</div>

La causale **RF** è collegata ad un automatismo di conseguenza una volta inserita la causale verrà proposto uno schema tipo, sarà sufficiente modificare le voci che interessano e la registrazione sarà completa.

**Attenzione!**
Se nella fattura sono presenti più aliquote iva si consiglia di cancellare le righe proposte dall’automatismo (tramite il tasto F6). L’automatismo potrebbe infatti non funzionare correttamente con più aliquote iva. Per registrare una fattura con più aliquote vedere argomento successivo.

### Ricevimento fattura con più aliquote iva

Quando nella fattura sono presenti più aliquote iva si consiglia di cancellare le righe proposte dall’automatismo (tramite il tasto F6). L’automatismo potrebbe infatti non funzionare correttamente con più aliquote iva.

<div class="text--center">
  <img src="/img/121-primanota-esempio2.png" alt="Prima Nota Esempio 2"/>
</div>

La registrazione di una fattura con più aliquote iva non presenta nulla di diverso rispetto alla registrazione di una fattura normale, bisogna solo aver cura di modificare l’importo dell’imponibile sulle righe dell’iva.

### Ricevimento fattura da inserire in un altro registro

Se ci si trova nella necessità di registrare una fattura che va inserita in un altro registro rispetto all’acquisti 1 è necessario utilizzare una causale diversa da RF.

E’ necessario quindi creare o modificare un’altra causale. Per creare una nuova causale entrare in `Archivi > Contabili > Causali Contabili` e caricare (F4) una nuova causale come da esempio sottostante:

<div class="text--center">
  <img src="/img/122-primanota-esempio3.png" alt="Prima Nota Esempio 3"/>
</div>

**Attenzione!**
Nel caso specifico dell’agenzia di viaggi è necessario ricordarsi di non utilizzare il registro numero 2 che è già utilizzato dalle 74 Ter.

Esempio di caricamento di causale contabile per inserimento registrazione in registro acquisti numero 3 (in caso di dubbi in relazione alla corretta imputazione dei campi verificare nel proprio programma come è inserita la causale ordinaria RF).

### Ricevimento fattura di acquisto 74 Ter

Per registrare una fattura di acquisto 74 Ter è sufficiente entrare in Primanota (`Contabilità > Primanota`).
Per le fatture di acquisto 74 Ter si utilizza la causale contabile A74 (Acquisto 74 Ter):

<div class="text--center">
  <img src="/img/123-primanota-esempio4.png" alt="Prima Nota Esempio 4"/>
</div>

L’automatismo collegato alla causale A74 propone le varie tipologie di costo del 74 Ter con il relativo codice iva:

- Costi CEE (74)
- Costi fuori CEE (75)
- Costi misti ...

E’ sufficiente compilare le righe che interessano e lasciare in bianco le altre.

Con la causale A74 il programma utilizza automaticamente il protocollo delle 74 Ter e inserisce il documento nel registro acquisti numero 2.

### Ricevimento fattura con iva indetraibile al 100%

**Codice iva indetraibile**

Per registrare una fattura con iva indetraibile è necessario innanzitutto utilizzare un codice iva indetraibile, in questo modo l’iva non viene detratta dalla liquidazione iva.

In Pegaso sono già precaricati due codici iva indetraibili (110 = iva indetraibilie 10% e 122 = iva indetraibile 22%), per verificare che il codice iva sia indetraibile entrare in `Archivi > Contabili > Codici IVA` e verificare che il campo **Ind. S/N** sia compilato con la lettera **S**:

<div class="text--center">
  <img src="/img/124-codici-iva-indetraibile.png" alt="Ind. S/N"/>
</div>

**Sottoconto iva e sottoconto costo**

L’iva indetraibile deve essere considerata come un costo è quindi necessario utilizzare un sottoconto iva che venga imputato a costo.

Nel caso specifico il modo più semplice per operare è modificare il sottoconto del costo (in questo esempio carburante) selezionando nella maschera il Tipo Sottoconto IVA

Per impostazione sottoconto: `Archivi > Contabili > Piano dei Conti`

<div class="text--center">
  <img src="/img/125-sottoconto-iva.png" alt="Sottoconto IVA"/>
</div>

Modificando il tipo sottoconto in iva
sarà possibile registrare l’iva
indetraibile direttamente a costo

**Esempio di registrazione**

<div class="text--center">
  <img src="/img/126-primanota-esempio5.png" alt="Prima Nota Esempio 5"/>
</div>

Nell’esempio utilizziamo il sottoconto 3020008 sia per imputare la riga dell’iva indetraibile (inserendo il codice iva 120) sia per imputare il costo normale del carburante.
La registrazione di questa fattura determina quindi il sorgere di due distinti costi:

- il costo derivante dal sottoconto di costo carburante
- il costo derivante dal sottoconto Iva Indetraibile

**Ricevimento fattura con iva indetraibile al 50%**

Per registrare una fattura con iva indetraibile al 50% è sufficiente dividere l’imponibile su due righe, la prima con un codice iva normale e con un sottoconto iva su acquisti, la seconda con un codice iva indetraibile al 100% e un sottoconto iva indetraibile:

<div class="text--center">
  <img src="/img/127-primanota-esempio6.png" alt="Prima Nota Esempio 6"/>
</div>

Per vedere come vanno impostati sottoconti vedi ricevimento fattura con iva indetraibile 100%


