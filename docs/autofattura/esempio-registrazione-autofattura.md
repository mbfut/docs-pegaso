---
sidebar_position: 2
---

# Esempio registrazione autofattura

**Attenzione!**
L’autofattura può essere registrata automaticamente in base alle pratiche turismo (vedi argomento registrazioni automatiche), il presente esempio serve invece per l’eventuale registrazione manuale.

Il nostro Tour Operator ci ha mandato l’autofattura relativa alla commissione riconosciutaci per la vendita di un pacchetto turistico.
L’autofattura commissioni per noi rappresenta una vera e propria fattura attiva e va quindi
registrata in modo analogo ad una fattura di vendita.
Quando vengono stampati i registri, mentre per gli acquisti viene seguito l’ordine dato dal numero protocollo, nelle vendite l’ordine è dato dal numero documento.

**Nota**: Per registrare correttamente le autofatture è necessario tenere una numerazione interna ignorando, pertanto, numero e data documento proposti nell’autofattura del T.O.

Occorre inoltre fare attenzione che la data assegnata al documento sia coerente con la sequenza numerica (Es. Sarebbe sbagliato registrare un’autofattura con numero 7 e data 08/10/1999 quando in precedenza se ne è registrata un’altra con numero 6 e data 10/10/1999).
Per evitare questo inconveniente si consiglia di associare alla data del documento la data di registrazione.

## Esempio di registrazione del documento in Prima Nota

Per registrare l’autofattura entrare in `Contabilità > Prima Nota` e caricare un nuovo elemento con il tasto F4.

<div class="text--center">
  <img src="/img/128-primanota-autofattura-esempio.png" alt="Prima Nota Autofattura Esempio"/>
</div>

Vediamo che ci vengono proposti in automatico numero e data di registrazione mentre noi dobbiamo inserire il **codice causale**, che nel nostro caso è **AUV** (Autofattura Vendite) poiché per noi rappresenta un ricavo. Sempre spostandoci con il tab vediamo che il prossimo campo che ci viene richiesto è l’alfa numero, qui inseriamo, ad esempio, la lettera **A** (Autofattura) e la procedura ci propone in automatico il primo numero progressivo libero.

In questo modo noi avremo una numerazione separata e distinta dagli altri tipi di documento. Sempre spostandoci con il TAB inseriamo gli altri dati richiesti e arriviamo al codice fornitore.
Qui inseriamo il sottoconto relativo ai T.O. e quindi il codice del T.O. in oggetto (nel nostro esempio ALITALIA). Mettiamo quindi in DARE, l’importo della commissione.

Spostandoci con il TAB fino all’ultimo campo della riga, se è attivata la gestione delle partite aperte, la procedura ci apre la maschera delle partite da chiudere:

<div class="text--center">
  <img src="/img/129-partite-da-chiudere.png" alt="Partite da chiudere"/>
</div>

In questo caso mi viene proposto proprio l’importo della commissione poiché, precedentemente, dopo aver ricevuto l’estratto conto dal T.O. avevamo registrato il pagamento al netto della commissione e quindi la partita era rimasta aperta per quell’importo.
Clicchiamo sulla riga che ci interessa e confermiamo con F10. In questo modo la partita è chiusa poiché totalmente saldata. Procediamo quindi inserendo i conti successivi (IVA e RICAVO).

**Nota**: Se non si vogliono gestire le partite aperte si può tranquillamente ignorare la maschera proposta e continuare con la registrazione.

Quando abbiamo inserito tutti i dati possiamo confermare con il tasto SALVA F10.

<div class="text--center">
  <img src="/img/130-partite-da-chiudere2.png" alt="Partite da chiudere 2"/>
</div>

*Note**

Ricordarsi che l'agenzia nel registrare l'autofattura deve considerare solo l'imponibile, infatti per l'agenzia l'autofattura è sempre esente, verrà quindi usato il codice 974 - ART. 74-ter 8^ COMMA per le operazioni riferite a viaggi nella UE indicate solitamente sul documento come iva 20% e il codice 919 - N.I. ART.9 74TER 8^c per le operazioni riferite a viaggi fuori UE indicate sul documento come iva esente
