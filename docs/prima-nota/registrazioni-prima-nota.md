---
sidebar_position: 1
---

# Registrazioni in prima nota

Nella maschera di Prima Nota accessibile in `Contabilità > Prima Nota` vengono registrate tutte le registrazioni contabili dell’Agenzia.

<div class="text--center">
  <img src="/img/95-prima-nota.png" alt="Prima Nota"/>
</div>

Ogni scrittura è identificata da un numero registrazione e da una data di registrazione, il programma propone automaticamente il numero di registrazione in base alla numerazione progressiva al momento del caricamento del nuovo elemento (tasto F4).

Per caricare un nuovo elemento, come abbiamo detto, si utilizza il tasto F4, mentre per ricercare un elemento già caricato possiamo utilizzare il tasto F9: la maschera di ricerca permette all’utente di ricercare i movimenti secondo determinati parametri.

<div class="text--center">
  <img src="/img/96-prima-nota2.png" alt="Prima Nota 2"/>
</div>

**Codice Causale**: il codice causale serve ad identificare il tipo di registrazione che stiamo per effettuare, nella procedura Pegaso sono già previste una serie di causali abbinate ad automatismo. Quando inseriamo ad esempio la causale `AUV` il programma ci propone lo schema classico di registrazione di un’autofattura vendite.

<div class="text--center">
  <img src="/img/97-causali-contabili.png" alt="Prima Nota 2"/>
</div>

Esempio di Causale Contabile

Da `Archivi > Contabili > Causali Contabili` è possibile vedere nel dettaglio le impostazioni delle causali contabili precaricate o crearne di nuove.

**DOCUMENTO NUMERO**: Viene richiesto se la causale contabile caricata lo prevede (ad esempio viene richiesto con la causale RF ricevimento fattura, la classica causale che **si usa per la registrazione delle fatture d’ACQUISTO**). Viene utilizzato anche per la numerazione delle autofatture.

**Rif. Mese/Anno**: Viene inserito automaticamente riportando un riferimento relativo al mese e l’anno di
competenza.

**PROT.**: Il **numero protocollo** corrisponde alla numerazione interna che viene data ai documenti in fase di registrazione.Esiste una numerazione separata per ogni registro acquisti presente in Agenzia, il programma identifica il registro acquisti in base alla causale utilizzata. L’utente può anche creare delle numerazioni separate tramite il campo alfa (il campo immediatamente successivo al campo numero protocollo)

**Sottoconto**: E’ il codice del sottoconto che si vuole movimentare con la registrazione, i sottoconti sono definiti nel Piano dei Conti. Per ricercare il sottoconto è sufficiente entrare nell’archivio con il tasto F9.

**Cli/For**: E’ il campo che identifica il cliente o il fornitore, viene richiesto solo se il sottoconto che si sta utilizzando in quella determinata riga è impostato come tipo sottoconto Cliente o Fornitore. Il campo cli/for può variare in automatico il sottoconto inserito, nell’anagrafica è possibile infatti abbinare ai clienti e ai fornitori un sottoconto predefinito.

**Cod. Iva**: Viene richiesto il cod iva se il sottoconto è di tipo IVA

**Imponibile**: Viene richiesto l’importo dell’imponibile se il sottoconto è di tipo IVA

**Dare/Avere**: Vengono inseriti gli importi effettivi movimentati dalla registrazione
