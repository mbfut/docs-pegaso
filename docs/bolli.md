---
sidebar_position: 22
---

# Bolli

Facciamo una breve panoramica sull’imposta di bollo e su come viene gestita in Pegaso.

## Quando viene applicato il bollo

Solitamente il bollo viene applicato su tutti quei documenti di addebitamento o accreditamento non assoggettati ad iva che superano l’importo di 77,47€. (quindi nella maggior parte dei casi si parla di fatture e estratti conto)

## Come modificare l’importo del bollo

L’importo del bollo in Pegaso è gestito nella voce di menu `Archivi > Vendite > Bolli`. Nel campo Bollo per Fatture Esenti è possibile modificare l’importo del bollo. (in questo momento 1,81)

## Come togliere il bollo dalla fattura

Se vogliamo togliere il bollo che viene riportato in automatico sulla fattura è necessario andare ad agire sul codice iva che viene utilizzato nella fattura stessa.

Ad esempio se il codice iva utilizzato nella fattura è il 909 (non imponibile art. 9) dovrò andare nel menu `Archivi > Contabili > Codici Iva` e modificare il campo **Bollo su Importi Esenti** del codice iva 909.

<div class="text--center">
  <img src="/img/188-bollo-909.png" alt="Bollo 909"/>
</div>

Modificare il codice iva utilizzato con tasto F3 e agire sul campo **Bollo su imp. Esenti**:

- **N** = il bollo non viene stampato
- **S** = il bollo viene stampato

Una volta modificato il campo confermare con F10.

## Come togliere il bollo dall’Estratto Conto

Per togliere il bollo proposto in automatico sull’estratto conto è sufficiente entrare nella voce di menu `Viaggi > Impostazioni > Parametri > Comuni` e togliere il flag dalla voce **Addebita bollo E/C**.

<div class="text--center">
  <img src="/img/189-addebita-bollo.png" alt="Addebita bollo"/>
</div>

Modificare con tasto F3 e agire sul campo **Addebita Bollo E/C**:

- **con spunta** = il bollo viene stampato
- **senza spunta** = il bollo non viene stampato

Una volta modificato il campo confermare con F10.
