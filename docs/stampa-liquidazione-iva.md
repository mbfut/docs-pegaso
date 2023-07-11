---
sidebar_position: 17
---

# Stampa liquidazione iva

Per lanciare la stampa della Liquidazione Iva selezionare la voce di menu `Contabilità > Operazioni periodiche > Liquidazione IVA`, la stampa può essere eseguita in due modalità:

<!-- - Normale
- Simulata -->
<div class="text--center">
  <img src="/img/145-liq-iva-tipo-denuncia.png" alt="Tipo denuncia"/>
</div>

La stampa **Normale** può essere fatta solo dopo aver stampato **tutti** i Registri Iva in definitivo.

Al termine di questa stampa Pegaso richiede se si vuole considerare la stampa definitiva. Selezionando SI, il sistema aggiorna il progressivo e **non** consente più di stampare la Liquidazione.

Al momento della conferma definitiva della stampa liquidazione il sistema aggiorna anche la tabella accessibile in `Archivi > Progressivi > Altri Dati IVA` inserendo il Credito IVA periodo precedente.

La stampa **Simulata** può essere fatta anche senza aver stampato precedentemente i Registri Iva in definitivo.

## Pag. 2

Nella pagina 2 si possono inserire i debiti o crediti dei periodi precedenti (se non già inseriti nella tabella altri dati iva) e l’utilizzo del credito iva compensabile.

<div class="text--center">
  <img src="/img/146-stampa-liq-iva.png" alt="Stampa liquidazione IVA Pag. 2"/>
</div>

Una volta confermata la seconda pagina la procedura propone la videata riepilogativa con tutti i calcoli della liquidazione iva, con il tasto F10 si può quindi lanciare l’effettiva stampa della Liquidazione.

## Casi particolari

Nella stampa della Liquidazione Iva del primo periodo per poter visualizzare gli importi a credito è necessario impostare la voce `Importo Specificato` nella pagina 2 della maschera di stampa `Contabilità > Operazioni periodiche > Liquidazione IVA`

<div class="text--center">
  <img src="/img/147-importo-specificato.png" alt="Importo Specificato"/>
</div>

## Numerazione pagine

Se nella maschera di stampa è flaggata la voce `Numerazione Pagine` la procedura da la
possibilità all’utente di gestire la numerazione contestuale della liquidazione con i registri iva.

**Attenzione!** Se non si vuole gestire la numerazione contestuale è necessario togliere il flag altrimenti la procedura richiede un campo obbligatorio al momento del salvataggio.

## Come annullare la stampa Liquidazione IVA?

**Attenzione!**
L’operazione di annullamento della stampa delle liquidazioni iva è un passaggio molto delicato, prima di apprestarsi ad effettuarla è assolutamente necessario eseguire una copia della cartella dove è installa Pegaso (in genere la cartella `C:\Adpegaso`)

Per annullare una stampa liquidazione iva fatta in definitivo eseguire le seguenti operazioni:

1. Andare in `Archivi >
  Progressivi > Liquidazioni IVA`, selezionare la riga del periodo che si vuole ristampare premere il tasto `F6` per eliminarla

  <div class="text--center">
    <img src="/img/148-prog-liq-iva.png" alt="Progressivi Liquidazioni IVA"/>
  </div>

  **Attenzione!**
  Nel caso si vogliano annullare le stampe liquidazioni iva di tutto l’anno invece che F6 è necessario cancellare tutto l’anno tramite il tasto F5 o il pulsante <img src="/img/16-canc.png" alt="Canc"/> (in questo caso bisogna rimanere in modalità `Interroga` e quindi non bisogna premere il tasto F3 o il pulsante varia)

2. Entrare in `Archivi > Progressivi > Progressivi IVA` premere il pulsante F3 e togliere il flag `Stampata Denuncia` dal periodo che si vuole ristampare (operazione da compiere su tutti i Registri) e confermare con il tasto F10.

<div class="text--center">
  <img src="/img/149-stampata-denuncia.png" alt="Stampata Denuncia"/>
</div>

<div class="text--center">
  <img src="/img/150-prog-iva.png" alt="Progressivi IVA"/>
</div>

3. Andare in `Archivi > Progressivi > Altri Dati IVA` e aggiornare il credito del periodo precedente alla Liquidazione annullata.

<div class="text--center">
  <img src="/img/151-altri-dati-iva.png" alt="Altri Dati IVA"/>
</div>

**Nota**
Se la liquidazione è di inizio anno la maschera `Altri Dati IVA` deve riportare `Credito IVA inizio anno` se presente e il campo `Credito IVA periodo precedente` 

**Attenzione!**
Tutta la procedura fin qui mostrata va eseguita a ritroso, **partendo dall’ultima liquidazione fatta in definitiva** fino ad arrivare al periodo che si vuole ristampare 
Se ad esempio voglio annullare la stampa della liquidazione del periodo 3, devo prima annullare la stampa del periodo 4.
