---
sidebar_position: 13
---

# Modificare una fattura contabilizzata

Quando una fattura è stata contabilizzata non è più possibile modificarla all’interno del
programma. Per poter effettuare delle modifiche è necessario entrare nelle **PROCEDURE DI
SERVIZIO**. (Per installare le Procedure di Servizio vedi sezione <a href="./intro#installare-le-procedure-di-servizio-pds">PDS</a>)

**Attenzione!**
La procedura qui esposta è molto delicata ed è da eseguire prestando molta attenzione. prima di apprestarvi a compiere questa procedura è assolutamente necessario fare una copia del programma

## 1. Sbloccare la fattura

- Entrare nelle Procedure di Servizio (PDS) nella voce di menu `Vendite > Flag Documenti Vendita`
- Ricercare la fattura da modificare tramite la maschera di ricerca (vedi figura)

<div class="text--center">
  <img src="/img/134-selezione-doc-vendita.png" alt="Selezione documenti di Vendita"/>
</div>

- Una volta selezionata la fattura che si vuole modificare è sufficiente togliere il flag sulla voce CONTABILIZZATO e premere OK.

<div class="text--center">
  <img src="/img/135-manutenzione-doc-vendita.png" alt="Manutenzione documenti di Vendita"/>
</div>

Ora il documento risulterà sbloccato.
Cliccare `Uscita Programma` per chiudere le PDS.

## 2. Cancellare la scrittura in Prima Nota

La fattura risulta sbloccata, ma è ancora presente in Prima Nota la registrazione della fattura generata dalla contabilizzazione. E’ necessario quindi aprire Pegaso ed entrare in Prima Nota per cancellare la registrazione.

- Entrare in `Contabilità > Primanota`
- Cliccare il pulsante `F9` sul primo campo per ricercare la registrazione relativa alla fattura

<div class="text--center">
  <img src="/img/136-sel-pn.png" alt="Selezione Prima Nota"/>
</div>

- Selezionare con un invio la riga relativa alla registrazione cercata
- La scrittura è aperta in modalità interrogazione nella maschera di primanota è sufficiente cancellarla con il tasto `F5` o il pulsante <img src="/img/16-canc.png" alt="Cancella"/>.

**A questo punto è possibile andare a modificare o riemettere la fattura**.
