---
sidebar_position: 3
---

# Autofattura normale estero

Il processo di creazione e generazione di una normale autofattura di acquisto estero è pressoché identico a quanto visto precedentemente con l’<a href="autofattura-74-ter" target="_blank">autofattura 74 Ter</a>.
Sempre dal menu `Fatturazione > Emissione Fatture` carichiamo una nuova autofattura

<div class="text--center">
  <img src="/img/174-autofattura-normale.png" alt="Autofattura normale estero"/>
</div>

Per inserire una contropartita di costo di tipo Magazzino vedi sezione <a href="./autofattura-74-ter#contropartita" target="_blank">Contropartita</a>.

Questa volta però dopo aver confermato con F10 inseriamo nella maschera `Vendita dati di Riepilogo` la causale AUT creata in precedenza (vedi sezione <a href="operazioni-preliminari" target="_blank">Autofattura</a>) e cliccare `Ok`.

<div class="text--center">
  <img src="/img/167-vendita-dati-riepilogo.png" alt="Vendita dati di Riepilogo"/>
</div>

Ora si può generare file .xml cliccando sul pulsante `Genera`.

**Nota**: Assicurati che il tuo ID SDI sia presente.<!-- (vedi sezione <a href="./autofattura-74-ter#creazione-del-file-xml" target="_blank">Creazione xml</a>) -->

<div class="text--center">
  <img src="/img/172-id-sdi.png" alt="ID SDI"/>
</div>

## Contabilizzazione autofattura

Adesso che la fattura è stata inviata con successo non ci resta altro che contabilizzare la fattura utilizzando la procedura “Contabilizza Autofatture”. Terminata la procedura la scrittura di prima nota risultante sarà la seguente:

<div class="text--center">
  <img src="/img/175-contabilizza-autofattura-normale.png" alt="Contabilizza autofattura normale"/>
</div>

### Scrittura di giroconto

A differenza delle 74 Ter dove non è necessario, in questo caso, dobbiamo eseguire una scrittura di giroconto per inserire l’iva nel registro delle vendite. 

Per far ciò utilizzeremo la causale **Giroconto Reverse Charge** e il cliente che abbiamo creato in precedenza per creare una scrittura come quella che segue:

<div class="text--center">
  <img src="/img/176-contabilizza-autofattura-normale-giroconto.png" alt="Contabilizza autofattura normale giroconto"/>
</div>

Il processo ora è concluso.
