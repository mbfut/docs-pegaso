---
sidebar_position: 1
---

# Installazione

<div class="text--center">
  <img src="/img/logo_pegaso_bgr_bianco.png" width="500" alt="Logo Pegaso"/>
</div>

Contattaci scrivendoci una email a `pegaso@futurasistemi.it` o chiamando il 045 510 712 per installare Pegaso.

## Installare librerie

In C:\Adpegaso\Utility

1. Clicca su `pdfcreator.exe` e completa l'installazione.
2. Clicca su `vfp9sp2rt.exe` e completa l'installazione.

## Crea collegamento su desktop

In `C:\Adpegaso\BIN`, tasto destro su `adfwin32.exe` > Invia a Desktop (crea collegamento)

## Installare le Procedure di Servizio (PDS)

Copia e incolla il collegamento Pegaso sul desktop. Premi tasto destro sulla copia appena fatta > Proprietà > In Destinazione aggiungere: BIN\adfwin32.exe "PROCEDURE DI SERVIZIO"
Rinomina la copia di Pegaso in PDS.

## Crea collegamente su rete locale

Nel computer server* dove è installato Pegaso, in C:\Adpegaso, tasto destro > Proprietà > Condivisione > Condivisione Avanzata > Permissioni > Aggiungi > Scrivi nome utente > Controlla nomi > OK > Permetti Pieno controllo

In C:\Adpegaso, tasto destro > Proprietà > Sicurezza > Modifica > Aggiungi > Scrivi nome utente > Controlla nomi > OK > Permetti Pieno controllo

### Rendere permanente la connessione con il server

- Posizionarsi sul pc client (postazione di rete) e aprire le ‘Risorse di rete’ da icona sul desktop
- Cliccare due volte sull’icona corrispondente al Server (apparirà l’elenco di tutti i pc della rete) su cui è stato installata la postazione principale di Pegaso
- Cliccare con il tasto destro del mouse sulla cartella ‘ADPEGASO’ e selezionare la voce ‘Connetti unità di rete’

Selezionare una unità di rete libera (esempio ‘F:’), segnare il campo ‘Riconnetti all’avvio’ (in modo tale che ogni volta che viene riacceso il PC venga ripristinata automaticamente la connessione), e confermare con FINE.

**Note**:

- Il server deve essere connesso alla stessa rete internet degli altri utenti e deve essere acceso e connesso per funzionare.
- Il vostro tecnico di rete deve configurare la rete con IP STATICI non dinamici (NO DHCP).
- Se sul computer di un utente scompare l'icona di Pegaso <img width="30" src="/img/favicon.ico" alt="Icona Pegaso"/> sul desktop e in Rete compare una croce rossa sulla condivisione di Adpegaso significa che il server è sconnesso. Assicurati che il server sia acceso e connesso alla rete. Se il problema persiste, rivolgiti al tuo tecnico di rete per risolvere il problema.
- L'assistenza di Futura Sistemi è responsabile solo del programma Pegaso. Non è responsabile dei dispositivi (computer, reti, stampanti) dei clienti.
