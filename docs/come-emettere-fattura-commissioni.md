---
sidebar_position: 14
---

# Come emettere fattura commissioni

In alcuni casi è richiesta l’emissione della fattura commissioni a fronte delle commissioni riconosciute dal fornitore, nello specifico si rende necessario questo passaggio con quegli operatori che non hanno l’obbligo di emissione di autofattura (ad esempio compagnie marittime).

Per emettere la fattura commissioni bisogna entrare nella voce di menu `Fatturazione > Emissione Fatture`.

<div class="text--center">
  <img src="/img/137-fattura-commissioni.png" alt="Fattura commissioni"/>
</div>

**Tipo**:
Inserire **FI** (Fattura Immediata)

**Causale**:

- **CTU** per le commissioni derivanti da pratiche Turismo
- **CBI** per commissioni derivanti da pratiche Biglietteria

**Contropartita**:
Viene riportata in automatico a seconda della causale utilizzata (403004 nel caso di causale CTU)

**C. Iva**:
va inserito il codice iva del servizio ad esempio:

- **22** (iva 22% se operazioni **nazionali**)
- **909** (esente art. 9 se operazioni **internazionali**)

La fattura commissioni così emessa segue la normale procedura delle fatture, va quindi contabilizzata per essere inserita nella prima nota.
