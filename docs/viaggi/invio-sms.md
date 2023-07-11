---
sidebar_position: 10
---

# Invio SMS da Pegaso

## SMS Pratiche

Tramite la gestione SMS Pratiche di Pegaso (accessibile nel menu `Viaggi > SMS`) hai la possibilità di inviare SMS informativi ai tuoi clienti selezionandoli in base allo stato della loro pratica.
La maschera di invio seleziona i clienti che hanno pratiche nello stato prescelto e propone l’invio di SMS con testo preimpostato (personalizzabile dall’utente).

<div class="text--center">
  <img src="/img/69-sms.png" alt="SMS"/>
</div>

**Non Avvisati per Saldo**

Seleziona le pratiche a cui manca il flag avvisato per saldo

**Non Avvisati per Documenti**

Seleziona le pratiche a cui manca il flag avvisato per documenti

**Non Saldate**

Seleziona le pratiche a cui manca il flag saldata

**Non Avvisati per Consegna Documenti**

Seleziona le pratiche a cui manca il flag consegnati documenti

### Configurazione e funzionamento SMS pratiche

#### Filtro Clienti

La procedura prende in considerazione tutti i clienti (escluso il cliente libero) che hanno
pratiche nel periodo selezionato e che risultino abilitati:
- Clienti Abilitati
La procedura seleziona solo i clienti che sull’anagrafica hanno attivato il flag Invio SMS Pratiche

<div class="text--center">
  <img src="/img/70-clienti-invio-sms.png" alt="Clienti Anagrafica > Invio SMS"/>
</div>

**Attenzione!** Il numero cellulare deve essere inserito senza barre così come visualizzato
in figura.

#### Filtro Pratiche

La procedura seleziona solo le pratiche che sono nello stato richiesto nella maschera. (Non avvisato per saldo..). La procedura esclude tutte quelle pratiche di cui risulta già essere stato inviato l’SMS. (quando per una pratica è stato già mandato l’SMS si trova il flag nella maschera Dettaglio Stato Pratica > SMS)

<div class="text--center">
  <img src="/img/72-dettaglio-stato-pratica.png" alt="Turismo > Dettaglio > SMS"/>
</div>

#### Filtri Maschera

Oltre ai filtri già indicati la procedura tiene conto anche dei dati inseriti in maschera, come ad esempio data pratica, data partenza, cliente.

## SMS Promozionali per Cliente (CRM)

La procedura ti dà la possibilità di inviare un SMS promozionale o di semplice comunicazione a tutti i tuoi clienti accessibile al menu `Viaggi > SMS > SMS Promozionali`.

E’ possibile filtrare i clienti in base a vari parametri:

<div class="text--center">
  <img src="/img/71-invio-sms-promozionali.png" alt="Invio SMS promozionali"/>
</div>

**Selezione per Cliente**

Seleziona i clienti selezionati e che hanno il flag Invio Sms Promo nell’anagrafica.

**Considera solo Clienti con Pratiche**

Se selezionato propone solo i clienti di cui si trova pratica nelle date selezionate

**Selezione Pratiche**

E’ possibile filtrare i clienti che hanno pratiche nel periodo di interesse

**Preferenze Cliente**

Ad ogni cliente è possibile abbinare in anagrafiche delle preferenze, da questa maschera è possibile fare un filtro sulla base delle preferenze espresse. Le preferenze sono completamente personalizzabili dall’agenzia e possono riguardare preferenze di trattamento, area geografica, richieste particolari ecc.

### Configurazione e funzionamento SMS promozionali

#### Selezione SMS

Facciamo una breve analisi di come il programma arriva a proporci l’elenco degli SMS da inviare:

#### Filtro Clienti

La procedura prende in considerazione tutti i clienti (escluso il cliente libero) che risultino abilitati:
- Clienti Abilitati
La procedura seleziona solo i clienti che sull’anagrafica hanno attivato il flag Invio SMS Promo

<div class="text--center">
  <img src="/img/73-clienti-invio-sms-promo.png" alt="Invio SMS Promo"/>
</div>

**Attenzione!** Il numero cellulare deve essere inserito senza barre così come visualizzato in figura.

#### Filtro Pratiche

Nel caso degli sms promozionali l’utente può decidere tramite il flag **Considera solo Clienti con Pratiche** se selezionare solo i clienti di cui si trovano pratiche in un determinato periodo o se considerare la totalità dei proprio clienti abilitati all’invio di sms promozionali.

#### Filtro Preferenze

La procedura seleziona tutti i clienti che abbiano abilitata in anagrafica **almeno una** delle preferenze selezionata nel filtro.

#### Filtri Maschera

Oltre ai filtri già indicati la procedura tiene conto anche dei dati inseriti in maschera, come ad esempio data pratica, data partenza, cliente.

## Buon Compleanno

La procedura propone l’elenco dei clienti che compiono gli anni a breve e permette l’invio di un SMS di auguri accessibile al menu `Viaggi > SMS > Buon Compleanno`.

## SMS Singolo

Per l’Invio rapido di un singolo SMS è stata implementata una veloce maschera di INVIO  accessibile al menu `Viaggi > SMS > Invio SMS Singolo`.

<div class="text--center">
  <img src="/img/74-invia-sms.png" alt="Invio SMS Singolo"/>
</div>


## Pannello di Controllo SMS

`Viaggi > SMS > Pannello di controllo`

<div class="text--center">
  <img src="/img/75-pannello-controllo.png" alt="Pannello di controllo"/>
</div>


**Verifica**

Controlla tutti gli sms inviati in base alla data di selezione e ne riporta lo stato (inviato e consegnato).

**Controlla**

Reindirizza l’utente sul nostro sito internet da cui è possibile controllare quanti sms sono
rimasti.

## Scheda SMS su Cliente

Nell’anagrafica Cliente (`Archivi > Contabili > Clienti`) si trova la scheda SMS dove è possibile gestire le preferenze e visualizzare gli sms inviati al cliente.