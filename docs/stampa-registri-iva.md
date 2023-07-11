---
sidebar_position: 16
---

# Stampa registri iva

Per lanciare la stampa dei Registri Iva selezionare la voce di menu `Contabilità > Operazioni periodiche > Registri Iva`, la maschera di stampa è la seguente

<div class="text>>center">
  <img src="/img/137-fattura-commissioni.png" alt="Fattura commissioni"/>
</div>

**Registro**: Si seleziona il tipo di registro che si vuole stampare, solitamente nelle agenzie di viaggio i registri principali sono 5

- ACQUISTI 1 (acquisti ordinari)
- ACQUISTI 2 (acquisti 74 Ter)
- VENDITE 1 (ricavi, fatt. commissioni, autofatture)
- CORRISPETTIVI SCORPORO (diritti d’agenzia)
- CORRISPETTIVI SCORPORO 2 (vendite 74 Ter)

**Opzioni di stampa**: Da la possibilità di riportare nella stampa il riferimento al Libro Giornale e la data di registrazione

**Ultima stampa**: Riporta l’ultima stampa in definitivo del registro Iva

**Ristampa/Simulazione**: Quando è flagato consente di fare una stampa in simulato del registro, se il campo non viene flagato il programma propone la stampa in definitivo

**Stampa Num. Pagine**: la procedura richiede se si vuole stampare il numero di pagina sul registro e chiede da che numero di pagina si vuole partire (solitamente il numero 1)

Al termine di questa stampa Pegaso richiede se si vuole considerare la stampa definitiva. Selezionando SI, il sistema aggiorna il progressivo iva e non consente più di stampare il Registro Iva.

## Come annullare la stampa registri iva?

**Attenzione!**
L’OPERAZIONE DI ANNULLAMENTO DELLA STAMPA DEI REGISTRI IVA E’ UN PASSAGGIO MOLTO DELICATO, PRIMA DI APPRESTARSI AD EFFETTUARLA E’ ASSOLUTAMENTE NECESSARIO ESEGUIRE UNA COPIA (cliccare tasto destro del mouse sull'icona di Pegaso sul desktop > Apri percorso file. Andare nella cartella Adpegaso > tasto Copia e Incolla)

**PRIMA DI PROCEDERE**

SE AVETE STAMPATO IN DEFINITIVO ANCHE LA LIQUIDAZIONE IVA **E’ NECESSARIO** PRIMA ANNULLARLA (vedere apposita voce del presente manuale Liquidazione Iva)

Per annullare una stampa dei Registri IVA lanciati in definitivo eseguire le seguenti operazioni:

0. Chiudere Pegaso se aperto
1. Entrare nelle Procedure di Servizio (se mancante vedi <a href="intro#installare-le-procedure-di-servizio-pds">Procedure di Servizio</a> per l'installazione)
2. Entrare nella voce di menu `Contabilità > Azzera flag stampa Registri Iva`

<div class="text--center">
  <img src="/img/144-pds-azzera-flag-stampa.png" alt="Azzera flag stampa"/>
</div>

Selezionare il tipo di registro e il periodo e confermare l’operazione con il tasto F10

Tutta la procedura fin qui mostrata va eseguita a ritroso, partendo cioe’ dall’ultimo registro stampato in definitivo fino ad arrivare al periodo che si vuole ristampare (se ad esempio voglio annullare la stampa del periodo 3, devo prima annullare la stampa del periodo 4)

