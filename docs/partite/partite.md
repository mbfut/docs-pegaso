---
sidebar_position: 1
---

# Partite

Le partite sono uno strumento aggiuntivo che permette di controllare rapidamente la situazione contabile dei clienti e dei fornitori. Nello specifico, se gestite correttamente, permettono di generare una stampa di quei clienti o fornitori che sono rimasti aperti.

**Le partite vengono aperte automaticamente dalle registrazioni di prima nota** (e di conseguenza generate anche al momento della conferma delle pratiche).

**Attenzione!**
Le partite aperte sono solo uno strumento aggiuntivo di controllo, non sostituiscono la prima nota e i mastrini e quindi non hanno nessun valore di rilevazione contabile.

In caso di incongruenza tra le partite e i mastrini si consiglia di **tenere in considerazione il
dato riportato dai mastrini**.

Esempio
Per capire come lavorano le partite riportiamo un esempio.

1. Pratica turismo

  Carichiamo una pratica turismo per il cliente Rossi Mario di 1000,00 euro utilizzando il tour operator Provatour.
  La conferma della pratica genera in automatico delle scritture contabili che a loro volta aprono delle partite.

  E’ possibile vedere le partite aperte direttamente dalla registrazione di prima nota tramite il pulsante partite, in questo caso vedremo la maschera così composta:

<div class="text--center">
  <img src="/img/183-partite.png" alt="Partite"/>
</div>

Le partite ricalcano la situazione contabile che si è creata con la conferma della pratica, nello specifico troviamo un credito nei confronti del cliente che verrà chiuso al momento degli incassi e un debito nei confronti del tour operator

2. Incasso pratica

  A questo punto riceviamo dal cliente saldo della pratica di 1000,00 euro che andremo a registrare negli incassi pratica. Anche in questo caso il programma andrà a chiudere automaticamente la partita del cliente al momento della conferma del saldo.

  Possiamo avere conferma della chiusura della partita andando a vedere la situazione nella manutenzione partite dove vedremo la partita chiusa dall’incasso:

<div class="text--center">
  <img src="/img/184-partite2.png" alt="Partite 2"/>
</div>

La prima riga rappresenta la pratica e la seconda l’incasso.

A questo punto la partita del cliente risulta chiusa e quindi **non** verrà visualizzata nelle successive stampe delle partite aperte

3. Pagamento Tour Operator

  Al momento del pagamento del tour operator dobbiamo andare a registrare il pagamento direttamente in prima nota. Essendo una registrazione manuale in questo caso dovremo occuparci di chiudere manualmente anche la partita (a differenza dei casi visti fino ad adesso).

  Quando registriamo il pagamento (ad. Es. BOF bonifico a fornitore) la maschera di primanota ci aprirà sulla riga del fornitore la maschera di chiusura partite (come da figura)

<div class="text--center">
  <img src="/img/185-partite3.png" alt="Partite 3"/>
</div>

Cliccando sulla riga della partita il programma inserirà il codice **S** (saldato). In questo modo la partita che risultava aperta viene chiusa.

Non resta che confermare con F10 e proseguire normalmente con la registrazione di prima nota.
