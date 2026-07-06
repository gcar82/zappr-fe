const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/video.es-B7dXLD8n.js","assets/video.es-3xQv0M59.js","assets/rolldown-runtime-Bh1tDfsg.js","assets/videojs-contrib-quality-menu.es-D91PC7Mr.js","assets/videojs-contrib-eme.es-Bs_ubsgl.js","assets/lib-sKCgOiro.js","assets/lodash-CwfZd973.js","assets/Twemoji-B0q6wU72.css"])))=>i.map(i=>d[i]);
import { n as e } from "./rolldown-runtime-Bh1tDfsg.js";
(async () => {
  (function() {
    let e2 = document.createElement(`link`).relList;
    if (e2 && e2.supports && e2.supports(`modulepreload`)) return;
    for (let e3 of document.querySelectorAll(`link[rel="modulepreload"]`)) n2(e3);
    new MutationObserver((e3) => {
      for (let t3 of e3) if (t3.type === `childList`) for (let e4 of t3.addedNodes) e4.tagName === `LINK` && e4.rel === `modulepreload` && n2(e4);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function t2(e3) {
      let t3 = {};
      return e3.integrity && (t3.integrity = e3.integrity), e3.referrerPolicy && (t3.referrerPolicy = e3.referrerPolicy), e3.crossOrigin === `use-credentials` ? t3.credentials = `include` : e3.crossOrigin === `anonymous` ? t3.credentials = `omit` : t3.credentials = `same-origin`, t3;
    }
    function n2(e3) {
      if (e3.ep) return;
      e3.ep = true;
      let n3 = t2(e3);
      fetch(e3.href, n3);
    }
  })(), `serviceWorker` in navigator && /^https?:$/.test(location.protocol) && navigator.serviceWorker.register(`/assets/js/sw.js`);
  var t = `modulepreload`, n = function(e2) {
    return `/` + e2;
  }, r = {}, i = function(e2, i2, a2) {
    let o2 = Promise.resolve();
    if (i2 && i2.length > 0) {
      let l2 = function(e4) {
        return Promise.all(e4.map((e5) => Promise.resolve(e5).then((e6) => ({
          status: `fulfilled`,
          value: e6
        }), (e6) => ({
          status: `rejected`,
          reason: e6
        }))));
      }, u2 = function(e4) {
        return import.meta.resolve ? import.meta.resolve(e4) : new URL(e4, new URL(`../../../src/node/plugins/importAnalysisBuild.ts`, import.meta.url)).href;
      };
      let e3 = document.getElementsByTagName(`link`), s3 = document.querySelector(`meta[property=csp-nonce]`), c2 = s3?.nonce || s3?.getAttribute(`nonce`);
      o2 = l2(i2.map((i3) => {
        if (i3 = n(i3, a2), i3 = u2(i3), i3 in r) return;
        r[i3] = true;
        let o3 = i3.endsWith(`.css`);
        for (let t2 = e3.length - 1; t2 >= 0; t2--) {
          let n2 = e3[t2];
          if (n2.href === i3 && (!o3 || n2.rel === `stylesheet`)) return;
        }
        let s4 = document.createElement(`link`);
        if (s4.rel = o3 ? `stylesheet` : t, o3 || (s4.as = `script`), s4.crossOrigin = ``, s4.href = i3, c2 && s4.setAttribute(`nonce`, c2), document.head.appendChild(s4), o3) return new Promise((e4, t2) => {
          s4.addEventListener(`load`, e4), s4.addEventListener(`error`, () => t2(Error(`Unable to preload CSS for ${i3}`)));
        });
      }));
    }
    function s2(e3) {
      let t2 = new Event(`vite:preloadError`, {
        cancelable: true
      });
      if (t2.payload = e3, window.dispatchEvent(t2), !t2.defaultPrevented) throw e3;
    }
    return o2.then((t2) => {
      for (let e3 of t2 || []) e3.status === `rejected` && s2(e3.reason);
      return e2().catch(s2);
    });
  }, a = (await i(async () => {
    let { default: e2 } = await import("./list-lJ84Fkmq.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    });
    return {
      default: e2
    };
  }, [])).default, o = {
    it: {
      languageName: `Italiano`,
      language: `Lingua`,
      country: `Nazione`,
      region: `Regione`,
      loading: `Caricamento...`,
      mainSource: `DTT`,
      previousSource: `Sorgente precedente`,
      nextSource: `Sorgente successiva`,
      epgExit: `Esci`,
      epgHeaderText: `Guida TV di <span id="epg-channel"></span>`,
      epgPreviousDay: `Giorno precedente`,
      epgNextDay: `Giorno successivo`,
      epgResize: `Espandi EPG`,
      searchChannel: `Cerca canale...`,
      installPWA: `Installa`,
      tvChangeRegion: `per cambiare regione`,
      saveAndReload: `Salva e ricarica`,
      infoTooltip: `Zappr \xE8 il nuovo modo di guardare la TV. Guarda la maggior parte dei canali nazionali e locali del tuo paese, online, gratuitamente e senza configurazioni complesse.
        <br><br>
        <a href="https://ko-fi.com/FrancescoRosi" target="_blank" class="tooltip-link" id="donation-link">Invia una donazione :)</a>
        <a href="https://trustpilot.com/evaluate/zappr.stream" target="_blank" id="trustpilot-link" class="tooltip-link">Recensisci Zappr su Trustpilot</a>
        <a href="https://github.com/ZapprTV" target="_blank" id="github-link" class="tooltip-link">Visualizza il codice sorgente su GitHub</a>
        <div class="tooltip-link" id="news-links">Rimani aggiornato sulle ultime novit\xE0 seguendoci su <a href="https://www.facebook.com/ZapprTV" target="_blank">Facebook</a>, <a href="https://x.com/ZapprStream" target="_blank">Twitter</a> o <a href="https://mastodon.uno/@zappr" target="_blank">Mastodon</a></div>
        <a href="mailto:zappr@francescoro.si" class="tooltip-link" id="email-link">Contattaci via email</a>`,
      playerLanguageCSS: `:root {
            --videojs-plyr-quality-text: "Qualit\xE0";
            --videojs-plyr-captions-text: "Sottotitoli";
            --videojs-plyr-audiotracks-text: "Traccia audio";
            --videojs-plyr-subtitles-disabled-text: "Disattivati";
            --videojs-plyr-settings-text: "Impostazioni";
            --videojs-plyr-playback-speed-text: "Velocit\xE0";
        }
        .epg-item-container::after {
            content: "Il programma richiesto inizier\xE0 a breve" !important;
        }
        .epg-item-container.on-air .epg-start-time::before {
            content: "IN ONDA" !important;
        }
        #news.news-not-loaded .tooltip-content-box:after {
            content: "Caricamento..." !important;
        }
        #my-list .list:after {
            content: "\u2713 Selezionata";
        }`,
      lcnTyping: `Invio per confermare<br>o Esc per annullare`,
      errorTechnicalInfo: `Informazioni tecniche`,
      errorCopyInfo: `Copia`,
      errorCopiedInfo: `Copiato!`,
      reportError: `Per favore segnala questo errore via GitHub o email. Cliccando su uno dei pulsanti qui sotto le informazioni principali dell'errore verranno compilate automaticamente.`,
      reportViaGithub: `Segnala tramite GitHub`,
      reportViaEmail: `Segnala tramite email`,
      errorEmailFooter: `Per favore specifica qui sotto se il canale funziona da altre parti (su altri siti o in HbbTV) e su che browser d\xE0 errore:`,
      nowPlaying: `In riproduzione`,
      channelError: `Errore canale`,
      cantLoad: `Impossibile caricare`,
      unknownSuffix: `sconosciuto`,
      unknownErrorInfo: `Errore sconosciuto`,
      formatServerError: `per un problema di formato/server`,
      formatServerErrorTitle: `Errore formato/server`,
      decodingError: `per un problema di decoding`,
      decodingErrorTitle: `Errore decoding`,
      serverError: `per un problema di server`,
      serverErrorTitle: `Errore server`,
      unknownError: `per un errore sconosciuto`,
      unknownErrorTitle: `Errore sconosciuto`,
      hbbtvMosaic: `Mosaico HbbTV`,
      not247: `Non sempre attivo`,
      viewFullEPG: `Clicca per vedere l'EPG completa`,
      viewHbbTVChannels: `Visualizza canali HbbTV`,
      disabledNotWorking: `Lo streaming di questo canale non funziona al momento.`,
      disabledGeoblock: `Questo canale \xE8 visibile solo nel suo paese di origine.`,
      continue: `Continua`,
      cancel: `Annulla`,
      warning: `Attenzione!`,
      geoblockMessage: `La nazione del tuo indirizzo IP non corrisponde a quella della nazione scelta. Ci\xF2 significa che alcuni canali non saranno visibili.<br><br>Per evitare completamente questi blocchi geografici, usa una VPN.`,
      welcomeTitle: `Ti diamo il benvenuto a Zappr!`,
      welcomeText: `Zappr ti permette di guardare facilmente e gratuitamente il digitale terrestre, nazionale e locale <span class="italic">(ricordati di impostare la tua regione nelle impostazioni!)</span>, e i canali di Samsung TV Plus e Pluto TV.<br><br>Per iniziare a guardare un canale, cliccaci sopra o scrivi la sua numerazione sulla tua tastiera e premi <b>Invio</b>. Per fare zapping, invece, puoi usare i tasti <b>PageDown</b> e <b>PageUp</b> per scorrere tra i canali.<br><br>Se un canale ha la guida TV, puoi cliccare sopra al nome del programma in onda per visionare la guida TV completa fino a 7 giorni dal giorno corrente.<br><br>Infine, se vuoi personalizzare la lista dei canali, assemblando una lista dei preferiti o creandone di nuove con i canali che vuoi tu, proprio come in un client IPTV, puoi fare ci\xF2 con la funzione <b>My List</b>, a cui puoi accedere cliccando l'icona <img src="${a}"> nella barra inferiore.<br><br>Questo \xE8 quanto. <b>Buona visione!</b>`,
      newsInstructions: `Clicca su un titolo per leggere la notizia completa, oppure clicca su un'immagine per ingrandirla.`,
      newsHosting: `Hosting del feed fornito da <a href="https://mastodon.uno" target="_blank">mastodon.uno</a> :)`,
      newsURL: `https://mastodon.uno/@zappr.rss`,
      epgLoading: `L'EPG sar\xE0 disponibile a breve`,
      unreportableErrorDASHiOS: `Molto probabilmente il tuo dispositivo non supporta lo streaming di questo canale. Prova su un altro dispositivo.`,
      unreportableErrorFAST: `I link di questi canali vengono aggiornati automaticamente ogni giorno. Riprova pi\xF9 tardi o tra 24 ore.`,
      search: `Cerca`,
      news: `Notizie`,
      info: `Info`,
      settings: `Impostazioni`,
      save: `Salva`,
      saveList: `Salva lista`,
      watch: `Guarda`,
      selectBaseList: `Seleziona una lista base`,
      officialZapprList: `Lista ufficiale di Zappr`,
      listPublisherDonate: `<b>$</b> Dona`,
      favoritesBaseList: `Preferiti`,
      shareList: `Condividi lista`,
      editList: `Modifica lista`,
      addList: `Aggiungi una lista...`,
      createListManually: `Crea manualmente...`,
      insertListURL: `Inserisci URL...`,
      selectAdditionalLists: `Seleziona una o pi\xF9 liste aggiuntive`,
      baseList: `Lista base`,
      additionalLists: `Liste aggiuntive`,
      howDoesMyListWork: `Come funziona My List?`,
      myListExplanation: `My List ti permette di personalizzare la lista dei canali di Zappr. Scegli una lista base, che funger\xE0 da sorgente principale di canali, e arricchiscila con quante liste aggiuntive desideri. I canali delle liste aggiuntive verranno integrati con quelli della lista base.`,
      addChannel: `Aggiungi un canale...`,
      listEditorInfo: `Info`,
      listEditorChannels: `Canali`,
      disabledRegionSettings: `Queste impostazioni sono disponibili solo con la lista base ufficiale di Zappr (o dei preferiti).`,
      multipleChannelSelectionText: (e2) => `<b>Premi ${e2.map((e3, t2) => `${t2 + 1} per ${e3.name}`).join(`,<br>`)}<br>oppure Esc per annullare</b>`,
      popupReopenPlayer: `Riapri player`,
      popupAccessDeniedTitle: `Accesso ai popup negato`,
      popupAccessDeniedText: (e2) => `Il tuo browser non ha permesso a Zappr di aprire una finestra popup per la visione di <b>${name}</b>. Per vedere il canale, devi dare il permesso a Zappr di poter aprire finestre popup, oppure puoi aprire la finestra sottoforma di una nuova scheda e vedere il canale l\xEC.`,
      openInNewWindow: `Apri in una nuova scheda`,
      closeModal: `Chiudi`,
      couldntFetchSchema: `Attenzione: Zappr non riesce a verificare la conformit\xE0 della lista selezionata al formato previsto per le liste dei canali. Pertanto, per la tua sicurezza, abbiamo ripristinato la lista dei canali predefinita.`,
      notSchemaCompliantOnLoading: (e2) => `Attenzione: Il formato della lista base dei canali che hai scelto non \xE8 valido. Pertanto, abbiamo ripristinato la lista dei canali predefinita.

Errori:
${e2}`,
      couldntFetchSchemaAdditionalList: (e2) => `Attenzione: Zappr non riesce a verificare la conformit\xE0 di una delle liste aggiuntive che hai selezionato al formato previsto per le liste dei canali. Pertanto, per la tua sicurezza, l'abbiamo disattivata.

Lista: ${e2}`,
      notSchemaCompliantAdditionalList: (e2, t2) => `Attenzione: Il formato di una delle liste dei canali aggiuntive che hai scelto non \xE8 valido. Pertanto, l'abbiamo disattivata.

Lista: ${e2}
Errori:
${t2}`,
      couldntFetchChannelList: `Impossibile recuperare lista dei canali`,
      alreadyAddedRemoteList: `Hai gi\xE0 una lista con questo URL`,
      listFormatInvalid: `Formato della lista non valido`,
      nightAdultChannelModalText: `In questa fascia oraria (23:00 - 07:00), questo canale potrebbe trasmettere contenuti vietati ai minori di 18 anni.`,
      fullyAdultChannelModalText: `Questo canale trasmette contenuti vietati ai minori di 18 anni.`,
      adultChannelModalText: `Cliccando sul pulsante <b>Continua</b> qui sotto, confermi di essere consapevole della natura del materiale trasmesso e di avere l'et\xE0 necessaria per poter guardarlo. Inoltre, accetti di assumerti la piena responsabilit\xE0 della visione di questo canale, esonerando Zappr e i suoi affiliati da qualsiasi conseguenza derivante da un uso improprio o non autorizzato.<br><br><b>Continuare?</b>`,
      untitledList: `Lista senza nome`,
      deleteList: `Elimina lista`,
      favoritesListEmpty: `La lista dei preferiti \xE8 vuota! Aggiungi dei canali ai preferiti cliccando l'icona della matita.`,
      deleteListConfirmation: `Sei sicuro di voler eliminare questa lista?`,
      deleteChannelConfirmation: `Sei sicuro di voler eliminare questo canale?`,
      listNameInputLabel: `&nbsp;Nome`,
      listNameInput: `Nome della lista`,
      listIconInputLabel: `Icona`,
      listIconInput: `URL di un'immagine PNG/SVG`,
      listEPGInputLabel: `&nbsp;&nbsp;EPG`,
      listEPGInput: `URL del file JSON dell'EPG`,
      channel: `Canale`,
      clickChannelToFavorite: `Clicca su un canale per aggiungerlo ai preferiti`,
      invalidURL: `URL non valido.`,
      localList: `Lista locale`,
      saveChannel: `Salva canale`,
      useEmoji: `Usa emoji`,
      listURLCopied: `\xC8 stato copiato con successo l'URL della lista!
Per importarla altrove, clicca sull'icona di My List, poi su "Aggiungi una lista..." e, nella casella di testo "Inserisci URL...", inserisci l'URL appena copiato.
Puoi importare questa lista sia come lista base che come lista aggiuntiva.`,
      myListTemporaryPromoTooltipTitle: `Prova <i>My List</i>, la nuova funzione di Zappr`,
      myListTemporaryPromoTooltipText: `<span>Personalizza la lista dei canali a tuo piacimento.</span>
        <span>Assembla la lista dei tuoi canali preferiti, o creane di nuove con i canali che desideri. Proprio come in un client IPTV.</span>`,
      additionalChannelFavoritingDisabled: `Puoi aggiungere solo canali della lista base ufficiale di Zappr ai preferiti.`,
      selectFavoritesFromOfficialBaseList: `Seleziona i tuoi canali preferiti dalla lista ufficiale di Zappr`,
      channelEditorSchema: {
        _groups: {
          "basic-channel-info": `Info canale`,
          "stream-info": `Info stream`
        },
        lcn: [
          `LCN`
        ],
        logo: [
          `Logo`,
          `URL di un'immagine PNG/SVG`
        ],
        name: [
          `Nome`,
          `Nome canale`
        ],
        subtitle: [
          `Sottotitolo`,
          `Sottotitolo canale`
        ],
        hd: [
          `HD`
        ],
        uhd: [
          `4K`
        ],
        radio: [
          `Canale radio?`,
          {
            true: `Canale radio senza traccia video`,
            video: `Canale radio con traccia video statica`
          }
        ],
        ondemand: [
          `Video on-demand`
        ],
        type: [
          `Tipo`,
          {
            hls: `HLS (.m3u8)`,
            dash: `DASH (.mpd)`,
            twitch: `Twitch (username canale)`,
            youtube: `YouTube (ID canale/video)`,
            iframe: `IFrame/embed (URL)`,
            audio: `Audio`,
            direct: `Diretto (.mp4, .mkv, ecc.)`,
            popup: `Finestra popup (URL)`
          }
        ],
        url: [
          `URL`,
          `URL stream`
        ],
        http: [
          `Visibile solo
tramite HTTP?`
        ],
        license: [
          `Licenza`,
          {
            "xdevel-wms": `Xdevel WMS Auth Sign`,
            clearkey: `ClearKey`,
            widevine: `Widevine (URL licenza)`
          }
        ],
        licensedetails: [
          `Dettagli licenza`,
          `Stringa o JSON`
        ],
        hbbtvapp: [
          `App HbbTV?`
        ],
        api: [
          `API`,
          {
            vercel: `API Vercel`,
            cloudflare: `API Cloudflare`
          }
        ],
        cssfix: [
          `Fix CSS`,
          {
            "streamshow-embed": `Embed StreamShow (embed.streamshow.net)`,
            stretch: `Stretcha da 4:3 a 16:9`,
            "squashed-height": `Stretcha da 64:27 a 16:9`,
            "very-squashed-height": `Stretcha da 32:9 a 16:9`,
            "five-two-squashed-height": `Stretcha da 5:2 a 16:9`,
            "center-iframe": `Centra IFrame/embed`,
            "servizistreaming-embed": `Embed di ServiziStreaming.it`,
            "livetvuk-embed": `Embed di LiveTVUK.com`,
            "native-hls-720p-iframe": `Ingrandisci video in 720p dentro un IFrame/embed`,
            letterbox: `Stream in letterbox`
          }
        ],
        "epg.source": [
          `Sorgente EPG`,
          `ID sorgente EPG`
        ],
        "epg.id": [
          `ID EPG`,
          `ID del canale nella sorgente EPG`
        ],
        timeshift: [
          `Ore di timeshift`
        ]
      }
    },
    en: {
      languageName: `English`,
      language: `Language`,
      country: `Country`,
      region: `Region`,
      loading: `Loading...`,
      mainSource: `Freeview`,
      previousSource: `Previous source`,
      nextSource: `Next source`,
      epgExit: `Exit`,
      epgHeaderText: `TV guide for <span id="epg-channel"></span>`,
      epgPreviousDay: `Previous day`,
      epgNextDay: `Next day`,
      epgResize: `Expand EPG`,
      searchChannel: `Search for a channel...`,
      installPWA: `Install`,
      tvChangeRegion: `to switch regions`,
      saveAndReload: `Save and reload`,
      infoTooltip: `Zappr is the new way to watch TV. Watch most of your country's national and local channels, online, for free and without any complicated setup.
        <br><br>
        <a href="https://ko-fi.com/FrancescoRosi" target="_blank" class="tooltip-link" id="donation-link">Send a donation :)</a>
        <a href="https://trustpilot.com/evaluate/zappr.stream" target="_blank" id="trustpilot-link" class="tooltip-link">Review Zappr on Trustpilot</a>
        <a href="https://github.com/ZapprTV" target="_blank" id="github-link" class="tooltip-link">View the source code on GitHub</a>
        <div class="tooltip-link" id="news-links">Stay up to date with the latest by following us on <a href="https://www.facebook.com/ZapprTV" target="_blank">Facebook</a>, <a href="https://x.com/ZapprStream" target="_blank">Twitter</a> or <a href="https://mastodon.uno/@zappr" target="_blank">Mastodon</a></div>
        <a href="mailto:zappr@francescoro.si" class="tooltip-link" id="email-link">Contact us via email</a>`,
      playerLanguageCSS: `.epg-item-container::after {
            content: "The requested programme will start shortly" !important;
        }
        .epg-item-container.on-air .epg-start-time::before {
            content: "ON AIR" !important;
        }
        #news.news-not-loaded .tooltip-content-box:after {
            content: "Loading..." !important;
        }
        #my-list .list:after {
            content: "\u2713 Selected";
        }`,
      lcnTyping: `Enter to confirm<br>or Esc to cancel`,
      errorTechnicalInfo: `Technical info`,
      errorCopyInfo: `Copy`,
      errorCopiedInfo: `Copied!`,
      reportError: `Please report this error via GitHub or email. By clicking on one of the buttons down below, the error's main info will be included automatically.`,
      reportViaGithub: `Report via GitHub`,
      reportViaEmail: `Report via email`,
      errorEmailFooter: `Please specify down below if the channel works elsewhere (on other websites or apps) and on what browsers it errors out:`,
      nowPlaying: `Now playing`,
      channelError: `Channel error`,
      cantLoad: `Failed to load`,
      unknownSuffix: `unknown to Zappr`,
      unknownErrorInfo: `Unknown error`,
      formatServerError: `because of a format/server problem`,
      formatServerErrorTitle: `Format/server error`,
      decodingError: `because of a decoding problem`,
      decodingErrorTitle: `Decoding error`,
      serverError: `because of a server error`,
      serverErrorTitle: `Server error`,
      unknownError: `because of an unknown error`,
      unknownErrorTitle: `Unknown error`,
      hbbtvMosaic: `Channel mosaic`,
      not247: `Not 24/7`,
      viewFullEPG: `Click to view the full EPG`,
      viewHbbTVChannels: `View additional IP channels`,
      disabledNotWorking: `This channel's streaming isn't working at the moment.`,
      disabledGeoblock: `This channel is only visible in its country of origin.`,
      continue: `Continue`,
      cancel: `Cancel`,
      warning: `Warning!`,
      geoblockMessage: `Your IP address' country doesn't match the country you chose. This means some channels won't be visible.<br><br>To get around geoblocks, use a VPN.`,
      welcomeTitle: `Welcome to Zappr!`,
      welcomeText: `Zappr allows you to watch your country's free-to-air channels, national and local <span class="italic">(remember to set your country and region in the settings!)</span>.<br><br>To start watching a channel, click on it or type its channel number on your keyboard and press <b>Enter</b>. To zap between channels, use the <b>PageDown</b> and <b>PageUp</b> keys.<br><br>If a channel has a TV guide, you can click on the name of the program currently airing to view the channel's complete TV guide for up to 7 days from the current day.<br><br>Finally, if you want to customize the channel list, by putting together a list of your favorite channels or creating new lists with the channels you want, just like in an IPTV client, you can do that with the <b>My List</b> feature, which you can access by clicking on the <img src="${a}"> icon in the bottom bar.<br><br>That's all for now. <b>Enjoy!</b>`,
      newsInstructions: `Click on a title to read the full post, or click on an image to view it in full.`,
      newsHosting: `Feed hosting provided by <a href="https://mastodon.uno" target="_blank">mastodon.uno</a> :)`,
      newsURL: `https://mastodon.uno/@zappr.rss`,
      epgLoading: `EPG will be available shortly`,
      unreportableErrorDASHiOS: `Your device most likely doesn't support this type of livestream. Try on another device.`,
      unreportableErrorFAST: `The links of these channels' livestreams are automatically updated every day. Try again later or in 24 hours.`,
      search: `Search`,
      news: `News`,
      info: `Info`,
      settings: `Settings`,
      save: `Save`,
      saveList: `Save list`,
      watch: `Watch`,
      selectBaseList: `Select a base list`,
      officialZapprList: `Official Zappr list`,
      listPublisherDonate: `<b>$</b> Donate`,
      favoritesBaseList: `Favorites`,
      shareList: `Share list`,
      editList: `Edit list`,
      addList: `Add a list...`,
      createListManually: `Create manually...`,
      insertListURL: `Insert URL...`,
      selectAdditionalLists: `Select one or more additional lists`,
      baseList: `Base list`,
      additionalLists: `Additional lists`,
      howDoesMyListWork: `How does My List work?`,
      myListExplanation: `My List allows you to personalize Zappr's channel list. Choose a base list, which will serve as your main source of channels, and enhance it with as many additional lists as you like. The channels from the additional lists will be combined with those from the base list.`,
      addChannel: `Add a channel...`,
      listEditorInfo: `Info`,
      listEditorChannels: `Channels`,
      disabledRegionSettings: `These settings are only available with Zappr's official base list (or the favorites list).`,
      multipleChannelSelectionText: (e2) => `<b>Press ${e2.map((e3, t2) => `${t2 + 1} for ${e3.name}`).join(`,<br>`)}<br>or Esc to cancel</b>`,
      popupReopenPlayer: `Reopen player`,
      popupAccessDeniedTitle: `Popup access denied`,
      popupAccessDeniedText: (e2) => `Your browser didn't allow Zappr to open a popup window to watch <b>${name}</b>. To watch this channel, you must allow Zappr to open popup windows or open the window as a new tab in your browser and watch the channel there.`,
      openInNewWindow: `Open in new tab`,
      closeModal: `Close`,
      couldntFetchSchema: `Warning: Zappr wasn't able to verify the selected list's compliance with the channel list schema. Therefore, for your safety, we've re-enabled the default base channel list.`,
      notSchemaCompliantOnLoading: (e2) => `Warning: The format of the base channel list you selected is invalid. Therefore, for your safety, we've re-enabled the default channel list.

Errors:
${e2}`,
      couldntFetchSchemaAdditionalList: (e2) => `Warning: Zappr wasn't able to verify the compliance of one of your selected additional lists with the channel list schema. Therefore, for your safety, we've disabled it.

List: ${e2}`,
      notSchemaCompliantAdditionalList: (e2, t2) => `Warning: The format of one of your selected additional lists is invalid. Therefore, for your safety, we've disabled it.

List: ${e2}
Errors:
${t2}`,
      couldntFetchChannelList: `Couldn't fetch channel list`,
      alreadyAddedRemoteList: `You already have a list with this URL`,
      listFormatInvalid: `List format invalid`,
      nightAdultChannelModalText: `In this timeslot (23:00 - 07:00), this channel might broadcast 18+ content.`,
      fullyAdultChannelModalText: `This channel broadcasts 18+ content.`,
      adultChannelModalText: `Clicking on <b>Continue</b> down below, you confirm that you are aware of the nature of the material being broadcast and that you are of legal age to view it. Furthermore, you agree to assume full responsibility for viewing this channel, releasing Zappr and its affiliates from any liability arising from improper or unauthorized use.<br><br><b>Do you wish to continue?</b>`,
      untitledList: `Untitled list`,
      deleteList: `Delete list`,
      favoritesListEmpty: `The favorites list is empty! Favorite some channels by clicking on the pencil icon.`,
      deleteListConfirmation: `Are you sure you want to delete this list?`,
      deleteChannelConfirmation: `Are you sure you want to delete this channel?`,
      listNameInputLabel: `&nbsp;Name`,
      listNameInput: `List name`,
      listIconInputLabel: `&nbsp;Icon`,
      listIconInput: `URL of a PNG/SVG image`,
      listEPGInputLabel: `&nbsp;&nbsp;EPG`,
      listEPGInput: `URL of the EPG JSON file`,
      channel: `Channel`,
      clickChannelToFavorite: `Click on a channel to favorite it`,
      invalidURL: `Invalid URL.`,
      localList: `Local list`,
      saveChannel: `Save channel`,
      useEmoji: `Use emoji`,
      listURLCopied: `The list's URL has been copied successfully!
To import it elsewhere, click on the My List icon, then on "Add a list...", and in the "Insert URL..." textbox, insert the URL that's just been copied into your clipboard.
You can import this list either as a base list or as an additional list.`,
      myListTemporaryPromoTooltipTitle: `Try <i>My List</i>, Zappr's new feature`,
      myListTemporaryPromoTooltipText: `<span>Customize the channel list to your liking.</span>
        <span>Put together a list of your favorite channels, or create new lists with the channels you want. Just like in an IPTV client.</span>`,
      additionalChannelFavoritingDisabled: `You can only favorite channels from Zappr's official base list.`,
      selectFavoritesFromOfficialBaseList: `Select your favorite channels from Zappr's official base list`,
      channelEditorSchema: {
        _groups: {
          "basic-channel-info": `Channel info`,
          "stream-info": `Stream info`
        },
        lcn: [
          `LCN`
        ],
        logo: [
          `Logo`,
          `URL of a PNG/SVG image`
        ],
        name: [
          `Name`,
          `Channel name`
        ],
        subtitle: [
          `Subtitle`,
          `Channel subtitle`
        ],
        hd: [
          `HD`
        ],
        uhd: [
          `4K`
        ],
        radio: [
          `Radio channel?`,
          {
            true: `Radio channel without a video track`,
            video: `Radio channel with a static video track`
          }
        ],
        ondemand: [
          `On-demand video`
        ],
        type: [
          `Type`,
          {
            hls: `HLS (.m3u8)`,
            dash: `DASH (.mpd)`,
            twitch: `Twitch (channel username)`,
            youtube: `YouTube (channel/video ID)`,
            iframe: `IFrame/embed (URL)`,
            audio: `Audio`,
            direct: `Direct (.mp4, .mkv, etc.)`,
            popup: `Popup window (URL)`
          }
        ],
        url: [
          `URL`,
          `Stream URL`
        ],
        http: [
          `Only visible
through HTTP?`
        ],
        license: [
          `License`,
          {
            "xdevel-wms": `Xdevel WMS Auth Sign`,
            clearkey: `ClearKey`,
            widevine: `Widevine (license URL)`
          }
        ],
        licensedetails: [
          `License details`,
          `JSON or string`
        ],
        hbbtvapp: [
          `HbbTV app?`
        ],
        api: [
          `API`,
          {
            vercel: `Vercel API`,
            cloudflare: `Cloudflare API`
          }
        ],
        cssfix: [
          `CSS fix`,
          {
            "streamshow-embed": `StreamShow embed (embed.streamshow.net)`,
            stretch: `Stretch from 4:3 to 16:9`,
            "squashed-height": `Stretch from 64:27 to 16:9`,
            "very-squashed-height": `Stretch from 32:9 to 16:9`,
            "five-two-squashed-height": `Stretch from 5:2 to 16:9`,
            "center-iframe": `Center IFrame/embed`,
            "servizistreaming-embed": `ServiziStreaming.it embed`,
            "livetvuk-embed": `LiveTVUK.com embed`,
            "native-hls-720p-iframe": `Make a 720p video inside an IFrame/embed full size`,
            letterbox: `Letterbox stream`
          }
        ],
        "epg.source": [
          `EPG source`,
          `ID of the EPG source`
        ],
        "epg.id": [
          `EPG ID`,
          `ID of the channel in the EPG source`
        ],
        timeshift: [
          `Timeshift hours`
        ]
      }
    }
  }, s = {
    it: {
      name: `Italia`,
      location: `it/dtt`,
      nationalBase: false,
      regions: {
        "Nord Italia": {
          bolzano: `Bolzano`,
          er: `Emilia-Romagna`,
          fvg: `Friuli-Venezia Giulia`,
          liguria: `Liguria`,
          lombardia: `Lombardia`,
          piemonte: `Piemonte`,
          trento: `Trento`,
          vda: `Valle d'Aosta`,
          veneto: `Veneto`
        },
        "Centro Italia": {
          marche: `Marche`,
          lazio: `Lazio`,
          toscana: `Toscana`,
          umbria: `Umbria`
        },
        "Sud Italia": {
          abruzzo: `Abruzzo`,
          basilicata: `Basilicata`,
          calabria: `Calabria`,
          campania: `Campania`,
          molise: `Molise`,
          puglia: `Puglia`,
          sardegna: `Sardegna`,
          sicilia: `Sicilia`
        }
      }
    }
  }, c = (await i(async () => {
    let { default: e2 } = await import("./video.es-B7dXLD8n.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    });
    return {
      default: e2
    };
  }, __vite__mapDeps([0,1,2]))).default;
  await i(() => import("./videojs-contrib-quality-menu.es-D91PC7Mr.js").then(async (m2) => {
    await m2.__tla;
    return m2;
  }), __vite__mapDeps([3,1,2]));
  var { DateTime: l } = await i(async () => {
    let { DateTime: e2 } = await import("./luxon-CjrvJoIS.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    });
    return {
      DateTime: e2
    };
  }, []);
  await i(() => import("./videojs-contrib-eme.es-Bs_ubsgl.js").then(async (m2) => {
    await m2.__tla;
    return m2;
  }), __vite__mapDeps([4,2,1]));
  var u = (await i(async () => {
    let { default: e2 } = await import("./virtualizedlist-C6uISMcV.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    });
    return {
      default: e2
    };
  }, [])).default, d = (await i(async () => {
    let { default: e2 } = await import("./restart-16wiUvHz.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    });
    return {
      default: e2
    };
  }, [])).default, f = (await i(async () => {
    let { default: e2 } = await import("./play-DbTk8l7L.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    });
    return {
      default: e2
    };
  }, [])).default, p = (await i(async () => {
    let { default: e2 } = await import("./list-lJ84Fkmq.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    });
    return {
      default: e2
    };
  }, [])).default, m = (await i(async () => {
    let { default: e2 } = await import("./edit-BO3PFzOS.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    });
    return {
      default: e2
    };
  }, [])).default, h = (await i(async () => {
    let { default: e2 } = await import("./delete-Dv0TpHG1.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    });
    return {
      default: e2
    };
  }, [])).default, g = (await i(async () => {
    let { default: e2 } = await import("./tv-Dlp35PFa.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    });
    return {
      default: e2
    };
  }, [])).default, _ = (await i(async () => {
    let { default: e2 } = await import("./share-BfuWR4A1.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    });
    return {
      default: e2
    };
  }, [])).default, v = await fetch(`https://zappr.stream/cdn-cgi/trace`).then((e2) => e2.text()).then((e2) => e2.split(`
`).filter((e3) => e3.startsWith(`loc=`))[0].split(`=`)[1].toLowerCase()).catch(() => `xx`);
  !localStorage.getItem(`selected-base-list`) && localStorage.getItem(`country`) && document.querySelector(`#my-list-icon .promo-tooltip`).classList.add(`active`);
  var y = JSON.stringify(localStorage) === `{}`, b = () => s[v] ? (s[v].nationalBase && localStorage.setItem(`region`, Object.keys(s[v].regions[Object.keys(s[v].regions)[0]])[0]), v && !localStorage.getItem(`country`) ? (localStorage.setItem(`country`, v), v) : localStorage.getItem(`country`) || Object.keys(s)[0]) : (localStorage.setItem(`country`, `it`), `it`), x = () => new URLSearchParams(location.search).get(`androidtv`) == null ? localStorage.getItem(`language`) || (navigator.language || `en`).split(`-`)[0] : `it`, S = b();
  s[S] || (localStorage.setItem(`country`, `it`), S = `it`);
  var C = x();
  try {
    Object.keys(Object.assign({}, ...Object.keys(s[S].regions).map((e2) => s[S].regions[e2]))).includes(localStorage.getItem(`region`)) || localStorage.removeItem(`region`);
  } catch {
    localStorage.removeItem(`region`);
  }
  var ee = localStorage.getItem(`region`), w = C in o ? C : `en`, T = o[w], E = document.querySelector(`#language`);
  Object.keys(o).forEach((e2) => {
    E.insertAdjacentHTML(`beforeend`, `<option value="${e2}" ${e2 === C ? `selected` : ``}>${o[e2].languageName}</option>`);
  });
  var te = document.querySelector(`#country`);
  Object.entries(s).forEach(([e2, t2]) => {
    te.insertAdjacentHTML(`beforeend`, `<option value="${e2}" ${e2 === S ? `selected` : ``}>${t2.name}</option>`);
  }), E.addEventListener(`change`, (e2) => {
    localStorage.setItem(`language`, e2.target.value), T = o[e2.target.value], E.querySelector(`[selected]`).removeAttribute(`selected`), E.querySelector(`option[value="${e2.target.value}"]`).setAttribute(`selected`, ``), document.querySelectorAll(`[data-translation-id], [data-translation-hide]`).forEach((e3) => {
      e3.dataset.translationHide ? e3.dataset.translationHide.split(`, `).includes(w) && e3.remove() : e3.dataset.translationTarget ? e3.setAttribute(e3.dataset.translationTarget, T[e3.dataset.translationId]) : e3.innerHTML = T[e3.dataset.translationId];
    });
  }), s[S].nationalBase || document.querySelector(`#region`).insertAdjacentHTML(`beforeend`, `<option value="national">Nessuna (solo canali nazionali)</option>`), document.querySelector(`#region`).insertAdjacentHTML(`beforeend`, Object.keys(s[S].regions).map((e2) => `<optgroup label="${e2}">
    ${Object.keys(s[S].regions[e2]).map((t2) => `<option value="${t2}" ${t2 === ee ? `selected` : ``}>${s[S].regions[e2][t2]}</option>`)}
</optgroup>`)), te.addEventListener(`change`, (e2) => {
    localStorage.setItem(`country`, e2.target.value), document.querySelector(`#region`).innerHTML = ``, te.querySelector(`[selected]`).removeAttribute(`selected`), te.querySelector(`option[value="${e2.target.value}"]`).setAttribute(`selected`, ``), s[e2.target.value].nationalBase || document.querySelector(`#region`).insertAdjacentHTML(`beforeend`, `<option value="national">Nessuna (solo canali nazionali)</option>`), document.querySelector(`#region`).insertAdjacentHTML(`beforeend`, Object.keys(s[e2.target.value].regions).map((t2) => `<optgroup label="${t2}">
        ${Object.keys(s[e2.target.value].regions[t2]).map((n2) => `<option value="${n2}" ${e2.target.value === S && n2 === ee ? `selected` : ``}>${s[e2.target.value].regions[t2][n2]}</option>`)}
    </optgroup>`)), Ue(document.querySelector(`#region`)), document.querySelector(`#save-and-reload`).removeAttribute(`hidden`), localStorage.setItem(`region`, document.querySelector(`#region`).value);
  }), document.querySelectorAll(`[data-translation-id], [data-translation-hide]`).forEach((e2) => {
    e2.dataset.translationHide ? e2.dataset.translationHide.split(`, `).includes(w) && e2.remove() : e2.dataset.translationTarget ? e2.setAttribute(e2.dataset.translationTarget, T[e2.dataset.translationId]) : e2.innerHTML = T[e2.dataset.translationId];
  });
  var D = JSON.parse(localStorage.getItem(`base-lists`)) ?? {}, O = JSON.parse(localStorage.getItem(`additional-lists`)) ?? {};
  (!localStorage.getItem(`selected-base-list`) || !D[localStorage.getItem(`selected-base-list`)] && localStorage.getItem(`selected-base-list`) != `favorites`) && localStorage.setItem(`selected-base-list`, `default`), await fetch(`/config.json`).then((e2) => e2.json()).then((e2) => window.zappr = e2).catch((e2) => {
    console.warn(`Can't find config (${e2}), using the default`), window.zappr = {
      config: {
        channels: {
          host: `https://channels.zappr.stream`
        },
        backend: {
          host: {
            vercel: `https://vercel-api.zappr.stream`,
            cloudflare: `https://cloudflare-api.zappr.stream`,
            alwaysdata: `https://zappr.alwaysdata.net`
          }
        },
        logos: {
          host: `https://channels.zappr.stream/logos`,
          optimized: true
        },
        epg: {
          host: `https://epg.zappr.stream`
        },
        fast: {
          host: `https://fast.zappr.stream`
        },
        urgentalerts: {
          host: `https://urgent-alerts.zappr.stream`
        }
      }
    };
  });
  try {
    fetch(`${zappr.config.urgentalerts.host}/${S}`).then((e2) => {
      if (e2.ok) return e2.text();
    }).then((e2) => {
      e2 && document.querySelector(`#urgent-alerts`) && (document.querySelector(`#urgent-alerts`).classList.add(`active`), document.querySelector(`#urgent-alerts`).innerHTML = e2);
    });
  } catch (e2) {
    console.warn(`Couldn't fetch urgent alerts: ${e2.stack}`);
  }
  var k = ``, A = false, j = false, M = ``, N = ``, P = c(`tv`, {
    playbackRates: [
      0.25,
      0.5,
      1,
      1.25,
      1.5,
      2,
      4
    ],
    enableSmoothSeeking: true,
    liveui: true,
    retryOnError: true,
    controlBar: {
      skipButtons: {
        backward: 5,
        forward: 5
      },
      progressControl: {
        seekBar: {
          playProgressBar: {
            timeTooltip: true
          }
        }
      }
    },
    errorDisplay: false,
    html5: {
      vhs: {
        overrideNative: true,
        useBandwidthFromLocalStorage: true
      }
    },
    plugins: {
      qualityMenu: {},
      reloadSourceOnError: {},
      eme: {}
    },
    userActions: {
      click: !window.matchMedia(`(max-width: 100vh)`).matches,
      doubleClick: !window.matchMedia(`(max-width: 100vh)`).matches
    }
  });
  if (window.zappr.player = P, window.zappr.videojs = c, P.on(`fullscreenchange`, () => {
    document.fullscreenElement ? screen.orientation.lock(`landscape-primary`).catch(() => {
    }) : screen.orientation.unlock().catch(() => {
    });
  }), P.on(`loadeddata`, () => {
    P.liveTracker.isLive() && !P.scrubbing() && !P.seeking() && P.liveTracker.seekToLiveEdge();
  }), window.matchMedia(`(max-width: 100vh)`).matches) {
    let e2 = 0, t2 = 0, n2 = null, r2 = null, i2 = false;
    P.on(`touchstart`, (a2) => {
      if (t2++, n2 && clearTimeout(n2), r2 && clearTimeout(r2), t2 === 2) {
        let n3 = Date.now();
        n3 - e2 >= 300 && (e2 = n3, i2 = true, a2.touches[0].clientX <= window.innerWidth / 3 ? (document.querySelector(`.video-js`).dataset.skippingDeactivating = ``, document.querySelector(`.video-js`).dataset.skipping = `backwards`, zappr.player.currentTime(zappr.player.currentTime() - 10)) : a2.touches[0].clientX >= window.innerWidth / 3 * 2 && (document.querySelector(`.video-js`).dataset.skippingDeactivating = ``, document.querySelector(`.video-js`).dataset.skipping = `forwards`, zappr.player.currentTime(zappr.player.currentTime() + 10))), t2 = 0, r2 = setTimeout(() => {
          i2 &&= (document.querySelector(`.video-js`).dataset.skippingDeactivating = `true`, setTimeout(() => document.querySelector(`.video-js`).dataset.skipping = ``, 1e3), false);
        }, 1500);
      } else n2 = setTimeout(() => {
        t2 = 0, i2 &&= (document.querySelector(`.video-js`).dataset.skippingDeactivating = `true`, setTimeout(() => document.querySelector(`.video-js`).dataset.skipping = ``, 1e3), false);
      }, 300);
    });
  }
  document.head.appendChild(document.querySelector(`#new-player-fix`));
  var F = document.querySelector(`#overlays`), ne = document.querySelector(`#night-adult-channels`);
  window.zappr.closeModal = () => {
    document.querySelector(`.modal`) != null && (document.querySelector(`.modal`).classList.remove(`is-visible`), document.querySelector(`.modal`).remove());
  };
  var re = async ({ title: e2, error: t2, info: n2, params: r2, type: i2, additional: a2 = false }) => {
    let o2 = new URLSearchParams(r2).toString(), s2 = /iPad|iPhone|iPod/.test(navigator.userAgent), c2 = `<div class="modal">
        <div class="modal-content">
            <div class="modal-title">
                <h1>${e2}</h1>
                <div class="close" onclick="window.zappr.closeModal()"></div>
            </div>
            <p>${t2}</p>
            ${n2 == null ? `` : `
            <div class="technical-info">
                <h3>${T.errorTechnicalInfo}</h3>
                <a onclick="copyInfo()">${T.errorCopyInfo}</a>
            </div>
            <div class="code" onclick="copyInfo()">${n2}</div>    
            `}
            ${!a2 && (localStorage.getItem(`selected-base-list`) === "default" || localStorage.getItem(`selected-base-list`) === `favorites`) ? `<p id="report-error">${i2 === `dash` && s2 ? T.unreportableErrorDASHiOS : r2.lcn >= 1e3 ? T.unreportableErrorFAST : T.reportError}</p>
            ${!(i2 === `dash` && s2) && r2.lcn < 1e3 ? `<div class="modal-buttons">
                <a class="button primary" href="https://github.com/ZapprTV/channels/issues/new?${o2}" target="_blank">
                    ${T.reportViaGithub}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"></path></svg>
                </a>
                <a class="button secondary" href="mailto:zappr@francescoro.si?subject=${r2.title}&body=${encodeURIComponent(`${T.errorTechnicalInfo}: ${r2.info}

${T.errorEmailFooter}

`)}" target="_blank">
                    ${T.reportViaEmail}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"></path></svg>
                </a>
            </div>` : ``}` : ``}
        </div>
    </div>`;
    document.querySelector(`.modal`) === null ? F.insertAdjacentHTML(`beforeend`, c2) : document.querySelector(`.modal`).outerHTML = c2, await new Promise((e3) => setTimeout(e3, 500)), document.querySelector(`.modal`).classList.add(`is-visible`);
  }, I = async ({ title: e2, text: t2, buttons: n2, id: r2 }) => {
    let i2 = `<div class="modal" ${r2 ? `id="${r2}-modal"` : ``}>
        <div class="modal-content">
            <div class="modal-title">
                <h1>${e2}</h1>
                <div class="close" onclick="window.zappr.closeModal()"></div>
            </div>
            <p>${t2}</p>
            ${n2 ? `<div class="modal-buttons">
                ${n2.map((e3) => `<a class="button ${e3.type}" href="${e3.href}" ${e3.newtab ? `target="_blank"` : ``}>${e3.text}</a>`).join(` `)}
            </div>` : ``}
        </div>
    </div>`;
    document.querySelector(`.modal`) === null ? F.insertAdjacentHTML(`beforeend`, i2) : document.querySelector(`.modal`).outerHTML = i2, await new Promise((e3) => setTimeout(e3, 1)), document.querySelector(`.modal`).classList.add(`is-visible`);
  };
  v != S && I({
    title: T.warning,
    text: T.geoblockMessage,
    buttons: w === `it` ? [
      {
        type: `primary`,
        href: `https://mullvad.net/it`,
        text: `Acquista Mullvad VPN, la nostra VPN consigliata <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"></path></svg>`,
        newtab: true
      }
    ] : []
  }), y && I({
    title: T.welcomeTitle,
    text: T.welcomeText,
    id: `welcome`
  }), new URLSearchParams(location.search).get(`androidtv`) != null && (document.querySelector(`#channels`).classList.add(`overflow-hidden`), document.querySelector(`#save-and-reload`).removeAttribute(`hidden`), document.body.classList.add(`androidtv`), document.querySelector(`#tv-style`).media = ``, window.addEventListener(`hashchange`, (e2) => {
    new URL(e2.oldURL).hash === `#canPressBack` && new URL(e2.newURL).hash === `` && (document.querySelector(`#channels-column`).style.display == `none` ? document.querySelector(`#channels-column`).style.display === `none` && (document.querySelector(`.channel.watching`) != null && (document.querySelector(`.channel.watching .channel-program`) ? document.querySelector(`.channel.watching .channel-program`).focus() : document.querySelector(`.channel.watching`).focus()), document.querySelector(`#channels-column`).style.display = `block`, document.querySelector(`#overlays`).classList.remove(`full-width`)) : (document.querySelector(`#settings`).classList.toggle(`visible`), document.querySelector(`#channels`).classList.toggle(`tv-settings-open`), zappr.closeModal(), document.querySelector(`#channels-column`).classList.contains(`epg-visible`) || document.querySelector(`#epg`).classList.add(`is-hidden`), document.querySelector(`#channels-column`).classList.add(`overflow-visible`), document.querySelector(`:focus`) != null && document.querySelector(`:focus`).blur()), window.location.hash = `canPressBack`);
  }), P.on(`play`, () => {
    document.querySelector(`#channels-column`).style.display = `none`, document.querySelector(`#overlays`).classList.add(`full-width`);
  }), document.querySelector(`#region`).outerHTML = `<div class="region national"><input type="radio" value="national" id="national" name="region"><label for="national">Nessuna (solo canali nazionali)</label></div><div id="region">${document.querySelector(`#region`).innerHTML}</div>`, document.querySelectorAll(`#region option`).forEach((e2) => {
    e2.value === `national` ? e2.remove() : e2.outerHTML = `<div class="region"><input type="radio" value="${e2.value}" id="${e2.value}" name="region"><label for="${e2.value}">${e2.innerText}</label></div>`;
  }), document.querySelectorAll(`#region optgroup`).forEach((e2) => {
    e2.outerHTML = `<div class="region-group"><span class="region-group-name">${e2.label}</span><div class="regions">${e2.innerHTML}</div></div>`;
  }), ((e2) => {
    let t2 = [], n2 = document.createTreeWalker(e2, NodeFilter.SHOW_TEXT);
    for (; n2.nextNode(); ) t2.push(n2.currentNode);
    return t2;
  })(document.querySelector(`#region`)).filter((e2) => e2.textContent === `,`).forEach((e2) => e2.remove()));
  var L = async ({ type: e2, url: t2, api: n2 = false, name: r2, lcn: i2, logo: a2, fullLogo: o2, radio: s2 = false, http: l2 = false, feed: u2 = false, drm: d2 = null, fallbackType: f2 = null, fallbackURL: p2 = null, fallbackAPI: m2 = false, fallbackCSSFix: h2 = null, fallbackLicense: g2 = null, fallbackLicenseDetails: _2 = null, timeshift: v2 = 0, additional: y2 = false }) => {
    if (n2 && (t2 = `${window.zappr.config.backend.host[n2]}/api?${t2}`), e2 === `audio` || s2 === `true`) {
      if (F.querySelector(`#radio-overlay`) === null ? F.insertAdjacentHTML(`beforeend`, `<div id="radio-overlay">
                <img src="${o2}">
                <div id="radio-overlay-info">
                    <span id="radio-overlay-playing">${T.nowPlaying}</span>
                    <h1 id="radio-overlay-radio">${r2}</h1>
                </div>
            </div>`) : F.querySelector(`#radio-overlay`).outerHTML = `<div id="radio-overlay">
                <img src="${o2}">
                <div id="radio-overlay-info">
                    <span id="radio-overlay-playing">${T.nowPlaying}</span>
                    <h1 id="radio-overlay-radio">${r2}</h1>
                </div>
            </div>`, F.classList.add(`radio-overlay`), new URLSearchParams(location.search).get(`androidtv`) != null && (document.querySelector(`video`).style.display = `none`), document.querySelector(`#fullscreen-button-container`) === null) {
        let e3 = document.createElement(`div`);
        e3.id = `fullscreen-button-container`;
        let t3 = document.createElement(`div`);
        t3.id = `fullscreen-button`, e3.insertAdjacentElement(`afterbegin`, t3), t3.addEventListener(`click`, () => {
          document.fullscreenElement === null ? F.requestFullscreen() : document.exitFullscreen();
        }), F.insertAdjacentElement(`beforeend`, e3);
      }
      document.querySelector(`.vjs-fullscreen-control`).style.opacity = `0`;
    } else F.querySelector(`#radio-overlay`) != null && (F.classList.remove(`radio-overlay`), new URLSearchParams(location.search).get(`androidtv`) != null && (document.querySelector(`video`).style.display = `block`), F.querySelector(`#radio-overlay`).remove(), document.querySelector(`.vjs-fullscreen-control`).style.opacity = `1`);
    window.zappr.closeModal(), v2 && P.on(`loadeddata`, () => {
      P.currentTime(P.currentTime() - v2 * 3600), P.off(`loadeddata`);
    }), P.on(`loadedmetadata`, function() {
      for (let e3 = 0; e3 < P.tech_.textTracks_.length; e3++) P.tech_.textTracks_[e3].mode = `disabled`;
    }), P.off(`error`), P.on(`error`, async () => {
      if (window.zappr.closeModal(), !u2 && f2 === null) {
        if (P.error().code === 2 && l2) I({
          title: `Canali HTTP non attivi`,
          text: `Questo \xE8 un canale di tipo HTTP. Clicca su "Attiva" qui sotto e segui le istruzioni per attivare la visione di questo tipo di canale.`,
          buttons: [
            {
              type: `primary`,
              href: `/mixed${navigator.userAgent.includes(`Firefox`) ? `#firefox` : navigator.userAgent.includes(`Android`) ? `#android` : ``}`,
              text: `Attiva`,
              newtab: true
            },
            {
              type: `secondary`,
              href: `javascript:window.zappr.closeModal();`,
              text: `Annulla`
            }
          ]
        });
        else if (P.error().code === 4) {
          let n3;
          await fetch(P.src()).then((e3) => n3 = `${e3.status} ${e3.statusText}`).catch(() => {
          }), re({
            title: T.channelError,
            error: `${T.cantLoad} <b>${r2}</b> <i>(${t2})</i> ${T.formatServerError}${n3 ? `: <b>${n3}</b>` : ` ${T.unknownSuffix}.`}`,
            type: e2,
            params: {
              template: `error-${w}.yml`,
              title: `${i2} - ${r2}: ${T.formatServerErrorTitle} (${n3 || T.unknownSuffix})`,
              name: r2,
              lcn: i2,
              info: `MEDIA_ERR_SRC_NOT_SUPPORTED: ${n3 || `${T.unknownErrorInfo}.`}`
            },
            additional: y2
          });
        } else if (P.error().code === 3) {
          let n3 = c.log.history().slice(Math.max(c.log.history().length - 50, 1)).map((e3) => e3.map((e4) => typeof e4 == `object` ? JSON.stringify(e4) : e4).join(` `)).join(`
`);
          re({
            title: T.channelError,
            error: `${T.cantLoad} <b>${r2}</b> <i>(${t2})</i> ${T.decodingError}.`,
            info: n3,
            type: e2,
            params: {
              template: `error-${w}.yml`,
              title: `${i2} - ${r2}: ${T.decodingErrorTitle}`,
              name: r2,
              lcn: i2,
              info: n3
            },
            additional: y2
          });
        } else if (P.error().code === 2) {
          let n3;
          await fetch(P.src()).then((e3) => n3 = `${e3.status} ${e3.statusText}`).catch(() => {
          }), re({
            title: T.channelError,
            error: `${T.cantLoad} <b>${r2}</b> <i>(${t2})</i> ${T.serverError}${n3 ? `: <b>${n3}</b>` : ` ${T.unknownSuffix}`}.`,
            type: e2,
            params: {
              template: `error-${w}.yml`,
              title: `${i2} - ${r2}: ${T.serverErrorTitle} (${n3 || T.unknownSuffix})`,
              name: r2,
              lcn: i2,
              info: `MEDIA_ERR_NETWORK: ${n3 || `${T.unknownErrorInfo}.`}`
            },
            additional: y2
          });
        } else if (P.error().code === 1 || P.error().code === 5 && k != `iframe`) {
          let n3 = {
            1: `MEDIA_ERR_ABORTED`,
            2: `MEDIA_ERR_NETWORK`,
            3: `MEDIA_ERR_DECODE`,
            4: `MEDIA_ERR_SRC_NOT_SUPPORTED`,
            5: `MEDIA_ERR_ENCRYPTED`
          }, a3;
          await fetch(P.src()).then((e3) => a3 = `${e3.status} ${e3.statusText}`).catch(() => {
          });
          let o3 = c.log.history().slice(Math.max(c.log.history().length - 50, 1)).map((e3) => e3.map((e4) => typeof e4 == `object` ? JSON.stringify(e4) : e4).join(` `)).join(`
`);
          re({
            title: T.channelError,
            error: `${T.cantLoad} <b>${r2}</b> <i>(${t2})</i> ${T.unknownError}.`,
            info: `${a3 ? `HTTP: ${a3} - ` : ``}Video.js (${n3[P.error().code]}): ${o3}`,
            type: e2,
            params: {
              template: `error-${w}.yml`,
              title: `${i2} - ${r2}: ${T.unknownErrorTitle}`,
              name: r2,
              lcn: i2,
              info: `${a3 ? `HTTP: ${a3} - ` : ``}Video.js (${n3[P.error().code]}): ${o3}`
            },
            additional: y2
          });
        }
      } else f2 != null && p2 != null && (R({
        type: f2,
        url: p2,
        name: r2,
        lcn: i2,
        logo: a2,
        api: m2,
        license: g2,
        licenseDetails: _2,
        additional: y2
      }), h2 != null && (document.querySelector(`style.cssfix[media=""]`) != null && (document.querySelector(`style.cssfix[media=""]`).media = `not all`), document.querySelector(`style.cssfix#${h2}-fix`).media = ``));
    }), document.title = `${r2} - Zappr`;
    let b2 = document.querySelector(`img[src="${a2}"]`), x2 = document.querySelector(`canvas`), S2 = () => {
      let e3 = x2.getContext(`2d`), t3 = x2.width, n3 = b2.width / b2.height, i3, a3, o3, s3;
      n3 > 1 ? (i3 = t3, a3 = t3 / n3, o3 = 0, s3 = (t3 - a3) / 2) : (i3 = t3 * n3, a3 = t3, o3 = (t3 - i3) / 2, s3 = 0), e3.clearRect(0, 0, x2.width, x2.height), e3.drawImage(b2, o3, s3, i3, a3), x2.toBlob((e4) => {
        let t4 = URL.createObjectURL(e4);
        `mediaSession` in navigator && (navigator.mediaSession.metadata = new MediaMetadata({
          title: `${r2} - Zappr`,
          artist: T.nowPlaying,
          artwork: [
            {
              src: t4,
              sizes: `512x512`,
              type: `image/png`
            }
          ]
        }));
      });
    };
    switch (b2.addEventListener(`load`, () => S2()), b2.complete && S2(), document.querySelector(`.modal.is-visible`) != null && document.querySelector(`.modal`).classList.remove(`is-visible`), k) {
      case `twitch`:
      case `youtube`:
      case `iframe`:
        [
          `twitch`,
          `youtube`,
          `iframe`
        ].includes(e2) || document.querySelector(`iframe`).remove(), k === `iframe` && e2 != `iframe` && document.querySelector(`#fullscreen-button-container`).remove();
        break;
      case `popup`:
        document.querySelector(`#reopen-window`).remove(), document.querySelector(`.vjs-big-play-button`).style.cssText = ``, window.zappr.popupPlayer.close();
        break;
    }
    if (e2 === `popup`) P.reset(), window.zappr.popupPlayer = window.open(t2, `popupWindow`, new URLSearchParams({
      left: document.querySelector(`#channels-column`).offsetWidth,
      top: window.outerHeight - window.innerHeight,
      width: window.innerWidth - document.querySelector(`#channels-column`).offsetWidth,
      height: window.innerHeight - (window.outerHeight - window.innerHeight)
    }).toString().replaceAll(`&`, `,`)), window.zappr.popupPlayer || I({
      title: T.popupAccessDeniedTitle,
      text: T.popupAccessDeniedText(r2),
      buttons: [
        {
          type: `primary`,
          href: t2,
          newtab: true,
          text: T.openInNewWindow
        },
        {
          type: `secondary`,
          href: `javascript:window.zappr.closeModal();`,
          text: T.closeModal
        }
      ]
    }), window.addEventListener(`unload`, () => window.zappr.popupPlayer.close()), document.querySelector(`#overlays`).insertAdjacentHTML(`afterbegin`, `<a href="#" id="reopen-window"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="#fff" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6q.425 0 .713.288T12 4t-.288.713T11 5H5v14h14v-6q0-.425.288-.712T20 12t.713.288T21 13v6q0 .825-.587 1.413T19 21zM19 6.4L10.4 15q-.275.275-.7.275T9 15t-.275-.7t.275-.7L17.6 5H15q-.425 0-.712-.288T14 4t.288-.712T15 3h5q.425 0 .713.288T21 4v5q0 .425-.288.713T20 10t-.712-.288T19 9z"/></svg>${T.popupReopenPlayer}</a>`), document.querySelector(`#reopen-window`).addEventListener(`click`, () => {
      window.zappr.popupPlayer.closed ? document.querySelector(`.channel.watching`).click() : window.zappr.popupPlayer.focus();
    }), document.querySelector(`.vjs-big-play-button`).style.cssText = `display: none !important`, k = `popup`;
    else {
      switch (e2) {
        case `hls`:
        case `dash`:
        case `audio`:
          P.src({
            src: t2,
            type: e2 === `hls` ? `application/x-mpegURL` : e2 === `dash` ? `application/dash+xml` : e2 === `audio` ? `audio/mpeg` : ``,
            keySystems: d2 || {}
          });
          break;
        case `direct`:
          P.src(t2);
          break;
        case `twitch`:
        case `youtube`:
        case `iframe`:
          [
            `twitch`,
            `youtube`,
            `iframe`
          ].includes(k) || P.reset();
          let n3;
          if (n3 = document.querySelector(`iframe`) === null ? document.createElement(`iframe`) : document.querySelector(`iframe`), n3.allowFullscreen = true, n3.allow = `autoplay *; encrypted-media *;`, n3.scrolling = `no`, e2 === `twitch`) n3.src = `https://player.twitch.tv/?channel=${t2}&parent=${location.hostname}`;
          else if (e2 === `youtube`) t2.startsWith(`UC`) && t2.length > 11 ? n3.src = `https://www.youtube-nocookie.com/embed/live_stream?channel=${t2}&autoplay=1&modestbranding=1&rel=0&hl=it-it` : n3.src = `https://www.youtube-nocookie.com/embed/${t2}?autoplay=1&modestbranding=1&rel=0&hl=it-it`;
          else if (e2 === `iframe` && (n3.src = t2, document.querySelector(`#fullscreen-button-container`) === null)) {
            let e3 = document.createElement(`div`);
            e3.id = `fullscreen-button-container`;
            let t3 = document.createElement(`div`);
            t3.id = `fullscreen-button`, e3.insertAdjacentElement(`afterbegin`, t3), t3.addEventListener(`click`, () => {
              document.fullscreenElement === null ? F.requestFullscreen() : document.exitFullscreen();
            }), F.insertAdjacentElement(`beforeend`, e3);
          }
          document.querySelector(`iframe`) === null && F.insertAdjacentElement(`afterbegin`, n3);
          break;
      }
      k = e2, P.play();
    }
  }, R = async ({ type: e2, url: t2, api: n2 = false, name: r2, lcn: i2, logo: a2, fullLogo: o2, radio: s2 = false, http: c2 = false, license: u2 = false, licenseDetails: d2 = null, feed: f2 = false, fallbackType: p2 = null, fallbackURL: m2 = null, fallbackAPI: h2 = false, fallbackCSSFix: g2 = null, fallbackLicense: _2 = null, fallbackLicenseDetails: y2 = null, timeshift: b2 = 0, additional: x2 = false }) => {
    if (document.querySelector(`#hide-player`).media = `not all`, t2.startsWith(`zappr://`)) {
      let n3 = t2.split(`/`)[3];
      switch (t2.split(`/`)[2]) {
        case `sky`:
          await fetch(`https://apid.sky.it/vdp/v1/getLivestream?id=${n3}&isMobile=false`).then((e3) => e3.json()).then((t3) => {
            L({
              type: e2,
              url: t3.streaming_url,
              name: r2,
              lcn: i2,
              logo: a2,
              additional: x2
            });
          });
          break;
        case `la7-hbbtv`:
          await fetch(`https://www.la7.it/appPlayer/liveUrlWithFailPerApp.php?channel=${n3}&v=${Date.now()}`).then((e3) => e3.json()).then((t3) => {
            L({
              type: e2,
              url: t3.main,
              name: r2,
              lcn: i2,
              logo: a2,
              additional: x2
            });
          });
          break;
        case `wim`:
          let o3 = await fetch(`https://platform.wim.tv/wimtv-server/oauth/token`, {
            method: `POST`,
            headers: {
              Authorization: `Basic d3d3Og==`,
              "Content-Type": `application/x-www-form-urlencoded; charset=UTF-8`
            },
            body: `grant_type=client_credentials`
          }).then((e3) => e3.json()).then((e3) => e3.access_token);
          await fetch(`https://platform.wim.tv/wimtv-server/api/public/live/channel/${n3}/play`, {
            method: `POST`,
            headers: {
              Authorization: `Bearer ${o3}`,
              "Content-Type": `application/json`
            },
            body: `{}`
          }).then((e3) => e3.json()).then((t3) => {
            L({
              type: e2,
              url: t3.srcs[0].uniqueStreamer,
              name: r2,
              lcn: i2,
              logo: a2,
              additional: x2
            });
          });
          break;
        case `wp-yt-iframe`:
          await fetch(`https://${n3}/wp-json/wp/v2/pages/${t2.split(`/`)[4]}`).then((e3) => e3.json()).then((t3) => {
            let n4 = new DOMParser().parseFromString(t3.content.rendered, `text/html`).querySelector(`iframe`).src, o4 = n4.replaceAll(new URL(n4).search, ``), s4 = o4.split(`/`)[4];
            L({
              type: e2,
              url: e2 === `youtube` ? s4 : o4.replaceAll(`/embed/`, `/watch?v=`),
              name: r2,
              lcn: i2,
              logo: a2,
              additional: x2
            });
          });
          break;
        case `streamingvideoprovider`:
          await fetch(`https://service.webvideocore.net/?l=info&a=xmlClipPath&clip_id=${n3}`).then((e3) => e3.text()).then((t3) => {
            L({
              type: e2,
              url: new DOMParser().parseFromString(t3, `application/xml`).querySelector(`url`).textContent,
              name: r2,
              lcn: i2,
              logo: a2,
              additional: x2
            });
          });
          break;
        case `persidera`:
          await fetch(`https://hbbtv.persidera.it/api/channels?action=getChannels&organizationId=15209`).then((e3) => e3.json()).then((t3) => {
            L({
              type: e2,
              url: t3.channels.filter((e3) => e3.logicalChannel == n3)[0].urls[0].url,
              name: r2,
              lcn: i2,
              logo: a2,
              additional: x2
            });
          });
          break;
        case `rubidia`:
          t2.split(`/`)[4] === `selector` && await fetch(`https://hbbtv.rubidia.it/API/v3/Frontend/${n3}/Launcher/${t2.split(`/`)[5]}`).then((e3) => e3.json()).then((n4) => {
            L({
              type: e2,
              url: n4.Data.Buttons.filter((e3) => e3[0].Id == t2.split(`/`)[6])[0][0].Media.HLS,
              name: r2,
              lcn: i2,
              logo: a2,
              additional: x2
            });
          });
          break;
        case `filmon`:
          let s3 = await fetch(`https://www.filmon.com/api/init?app_id=android-native&channelProvider=ipad&app_secret=wis9Ohmu7i`).then((e3) => e3.json()).then((e3) => e3.session_key);
          await fetch(`https://eu-api.filmon.com/api/channel/${n3}?session_key=${s3}&quality=low`).then((e3) => e3.json()).then((n4) => {
            L({
              type: e2,
              url: n4.streams[0].url,
              name: r2,
              lcn: i2,
              logo: a2,
              additional: x2
            }), setTimeout(() => {
              document.querySelector(`.watching`).dataset.url === t2 && R({
                type: e2,
                url: t2,
                name: r2,
                lcn: i2,
                logo: a2,
                additional: x2
              });
            }, (n4.expire_time - l.now().toSeconds()) * 1e3 - 3e3);
          });
          break;
        case `acdsolutions`:
          window.acdSolutionsPlay = (t3) => {
            L({
              type: e2,
              url: t3,
              name: r2,
              lcn: i2,
              logo: a2,
              additional: x2
            });
          };
          let c3 = document.createElement(`script`);
          c3.setAttribute(`src`, `https://catchup.acdsolutions.it/jstag/videoplayerLiveFluid/TV?ch=${n3}&vID=%27%29%3B%7D%7D%29%7D%3B%20window.acdSolutionsPlay%28videoElement_playerElement.querySelector%28%22source%22%29.src%29%3B%20%7D%20catch%20%7B%7D%3B%20%2F%2F`), c3.setAttribute(`async`, true), c3.addEventListener(`load`, () => {
            c3.remove(), delete window.acdSolutionsPlay;
          }), document.head.appendChild(c3);
          break;
        case `wbd`:
          let u3 = await fetch(`https://public.aurora.enhanced.live/token?realm=it`).then((e3) => e3.json()).then((e3) => e3.data.attributes.token);
          L({
            type: e2,
            url: await fetch(`https://public.aurora.enhanced.live/playback/v3/channelPlaybackInfo`, {
              method: `POST`,
              headers: {
                Authorization: `Bearer ${u3}`,
                "Content-Type": `application/json`
              },
              body: JSON.stringify({
                deviceInfo: {
                  adBlocker: false,
                  drmSupported: false,
                  hdrCapabilities: [
                    `SDR`
                  ],
                  hwDecodingCapabilities: [],
                  soundCapabilities: [
                    `STEREO`
                  ]
                },
                wisteriaProperties: {
                  device: {
                    browser: {
                      name: `chrome`,
                      version: `38`
                    },
                    type: `mobile`
                  },
                  platform: `mobile`
                },
                channelId: n3
              })
            }).then((e3) => e3.json()).then((e3) => e3.data.attributes.streaming.filter((e4) => e4.type === `hls`)[0].url),
            name: r2,
            lcn: i2,
            logo: a2,
            additional: x2
          });
      }
    } else if (u2) switch (u2) {
      case `xdevel-wms`:
        await fetch(`https://play.xdevel.com/was`).then((e3) => e3.json()).then((n3) => {
          L({
            type: e2,
            url: `${t2}?wmsAuthSign=${n3.was}`,
            name: r2,
            lcn: i2,
            logo: a2,
            additional: x2
          });
        });
        break;
      case `rai-akamai`:
        if (v === S) {
          if (window.zappr.raiAkamai != null && window.zappr.raiAkamai.expiration - Math.floor(Date.now() / 1e3) > 10) window.zappr.raiAkamai.auth;
          else {
            let e3 = await fetch(`${window.zappr.config.backend.host.alwaysdata}/rai-akamai`, {
              method: `POST`
            }).then((e4) => e4.json());
            window.zappr.raiAkamai = {
              ...e3,
              expiration: parseInt(new URLSearchParams(e3.auth).get(`hdnea`).split(`~`).filter((e4) => e4.startsWith(`exp`))[0].split(`=`)[1])
            };
          }
          L({
            type: e2,
            url: `${t2}${zappr.raiAkamai.auth}`,
            name: r2,
            lcn: i2,
            logo: a2,
            fallbackType: p2,
            fallbackURL: m2,
            fallbackAPI: h2
          });
        } else L({
          type: e2,
          url: t2,
          name: r2,
          lcn: i2,
          logo: a2,
          api: n2
        });
        break;
      case `clearkey`:
        let o3 = {
          url: t2
        };
        d2 && (decodeURIComponent(d2).startsWith(`"`) ? (o3.kid = decodeURIComponent(d2).replaceAll(`"`, ``).split(`:`)[0], o3.key = decodeURIComponent(d2).replaceAll(`"`, ``).split(`:`)[1]) : o3.keys = d2), L({
          type: `iframe`,
          url: `clearkey/?${new URLSearchParams(o3).toString()}`,
          name: r2,
          lcn: i2,
          logo: a2,
          fallbackType: p2,
          fallbackURL: m2,
          fallbackAPI: h2,
          fallbackLicense: _2,
          fallbackLicenseDetails: y2,
          additional: x2
        });
        break;
      case `widevine`:
        L({
          type: e2,
          url: t2,
          name: r2,
          lcn: i2,
          logo: a2,
          fallbackType: p2,
          fallbackURL: m2,
          fallbackAPI: h2,
          fallbackLicense: _2,
          fallbackLicenseDetails: y2,
          drm: {
            "com.widevine.alpha": JSON.parse(decodeURIComponent(d2))
          },
          additional: x2
        });
    }
    else await L({
      type: e2,
      url: t2,
      api: n2,
      name: r2,
      lcn: i2,
      logo: a2,
      fullLogo: o2,
      radio: s2,
      http: c2,
      feed: f2,
      fallbackType: p2,
      fallbackURL: m2,
      fallbackAPI: h2,
      fallbackCSSFix: g2,
      fallbackLicense: _2,
      fallbackLicenseDetails: y2,
      timeshift: b2,
      additional: x2
    });
  }, z = (e2, t2) => {
    let n2 = zappr.config.logos;
    return e2.startsWith(`http://`) || e2.startsWith(`https://`) || e2.startsWith(`data:`) ? e2 : t2 === false ? `${n2.host}/${S}/${e2}${e2.endsWith(`.svg`) ? `` : `.png`}` : `${n2.host}/${S}/${n2.optimized ? `optimized/` : ``}${e2}${e2.endsWith(`.svg`) ? `` : n2.optimized ? `.webp` : `.png`}`;
  }, ie = (e2) => `${zappr.config.channels.host}/${e2}.json`, B = (e2) => `${zappr.config.epg.host}/${e2}.json`, ae = (e2) => `${zappr.config.fast.host}/${e2}/channels.json`;
  zappr.ratios = await fetch(`${zappr.config.logos.host}/${S}/_ratios.json`).then((e2) => e2.json()).catch(() => ({}));
  var V = (e2) => ({
    "not-working": T.disabledNotWorking,
    "http-ios": `Questo \xE8 un canale HTTP, una tipologia di canale che non \xE8 visibile su iOS.`,
    geoblock: T.disabledGeoblock
  })[e2], oe = document.createElement(`video`).canPlayType(`application/vnd.apple.mpegurl`) != ``, H = (e2, t2) => {
    let n2 = JSON.parse(localStorage.getItem(`favorites`)) ?? [], r2 = /iPad|iPhone|iPod/.test(navigator.userAgent), i2 = v != S, a2 = zappr.channels.indexOf(e2) ?? 0;
    e2.nativeHLS && oe && (e2.type = `iframe`, e2.url = `https://href.li/?${e2.nativeHLS.url}`, navigator.userAgentData && navigator.userAgentData.brands.some((e3) => e3.brand === `Chromium`) && e2.nativeHLS.quality && (e2.cssfix = `native-hls-${e2.nativeHLS.quality}-iframe`));
    let o2 = `${e2.hbbtvapp ? `hbbtv-app` : ``}${e2.url && e2.url.includes(`pluto.tv`) ? `pluto-channel` : ``} ${t2 === zappr.channels.length - 1 ? `last-channel` : ``} ${e2.hbbtvmosaic ? `hbbtv-enabler hbbtv-mosaic` : `channel`} ${n2.includes(`${e2.lcn}|${e2.name}`) ? `marked-as-favorite` : ``} ${e2.adult === true ? `adult` : e2.adult === `night` ? `adult at-night` : ``}`.trim().replaceAll(/\s+/g, ` `);
    return `
        ${e2.categorySeparator === void 0 ? `${e2.hbbtv ? `<div class="hbbtv-container">` : ``}
                <div class="${o2}" data-name="${e2.name}" data-lowercase-name="${e2.name.toLowerCase()}" data-logo="${z(e2.logo)}" data-full-logo="${z(e2.logo, false)}" ${e2.radio ? `data-radio="${e2.radio}"` : ``} ${e2.type != null && (!i2 || !e2.geoblock) ? `data-type="${e2.type}"` : ``} ${e2.type != null && typeof e2.geoblock == `object` && e2.geoblock && i2 ? `data-type="${e2.geoblock.type}"` : ``} ${e2.url != null && (!i2 || !e2.geoblock) ? `data-url="${e2.url}"` : ``} ${e2.url != null && typeof e2.geoblock == `object` && e2.geoblock && i2 ? `data-url="${e2.geoblock.url}"` : ``} data-lcn="${e2.lcn}" ${e2.seek == null ? `` : `data-seek="${e2.seek}"`} ${e2.disabled ? `disabled data-disabled="${e2.disabled}" title="${V(e2.disabled)}"` : ``} ${!e2.disabled && e2.http && r2 ? `disabled data-disabled="http-ios"` : ``} ${!e2.disabled && e2.geoblock && i2 && typeof e2.geoblock == `boolean` ? `disabled data-disabled="geoblock" title="${V(`geoblock`)}"` : ``} ${e2.api && (!i2 || !e2.geoblock) ? `data-api="${e2.api}"` : ``} ${typeof e2.geoblock == `object` && e2.geoblock && i2 && e2.geoblock.api != null ? `data-api="${e2.geoblock.api}"` : ``} ${e2.cssfix != null && (!i2 || !e2.geoblock) ? `data-cssfix="${e2.cssfix}"` : ``} ${e2.cssfix === void 0 && typeof e2.geoblock == `object` && e2.geoblock.cssfix && i2 ? `data-cssfix="${e2.geoblock.cssfix}"` : ``} ${e2.http ? `data-http="true"` : ``} ${i2 && typeof e2.geoblock == `object` && e2.geoblock.license ? `data-license="${e2.geoblock.license}"` : e2.license == null ? `` : `data-license="${e2.license}"`} ${i2 && typeof e2.geoblock == `object` && e2.geoblock.licensedetails ? `data-license-details="${encodeURI(JSON.stringify(e2.geoblock.licensedetails))}"` : e2.licensedetails == null ? `` : `data-license-details="${encodeURI(JSON.stringify(e2.licensedetails))}"`} ${e2.feed ? `data-feed="${e2.feed}"` : ``} ${e2.fallback ? `data-fallback-type="${e2.fallback.type}" data-fallback-url="${e2.fallback.url}"` : ``} ${e2.fallback && e2.fallback.api ? `data-fallback-api="${e2.fallback.api}"` : ``} ${e2.fallback && e2.fallback.cssfix ? `data-fallback-cssfix="${e2.fallback.cssfix}"` : ``} ${e2.fallback && e2.fallback.license ? `data-fallback-license="${e2.fallback.license}"` : ``} ${e2.fallback && e2.fallback.licensedetails ? `data-fallback-license-details="${encodeURI(JSON.stringify(e2.fallback.licensedetails))}"` : ``} ${e2.epg ? `data-epg-source="${e2.epg.source}" data-epg-id="${e2.epg.id}"` : ``} ${e2.manualRestart ? `data-manual-restart-source="${e2.manualRestart.source}" data-manual-restart-id="${e2.manualRestart.id}"` : ``} ${e2.timeshift ? `data-timeshift="${e2.timeshift}"` : ``} ${G.findLastIndex((e3) => a2 > e3) > 0 ? `data-category="${zappr.channels[G[G.findLastIndex((e3) => a2 > e3)]].categorySeparator}"` : ``} ${e2.additional ? `data-additional="true"` : ``}>
                    <div class="channel-info">
                        <div class="left-hand-badges">
                            <svg class="favorites-icon" xmlns="http://www.w3.org/2000/svg" viewBox="1 2.1 34 32.53"><path fill="white" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834c-.693.496-1.623.496-2.312-.008-.689-.499-.979-1.385-.721-2.194l3.034-9.792-8.062-5.681c-.685-.505-.97-1.393-.708-2.203.264-.808 1.016-1.357 1.866-1.363L12.947 13l3.179-9.549c.268-.809 1.023-1.353 1.874-1.353.851 0 1.606.545 1.875 1.353L23 13l10.036.015c.853.006 1.606.556 1.867 1.363.263.81-.022 1.698-.708 2.203l-8.062 5.681 3.034 9.792c.26.809-.033 1.695-.72 2.194-.347.254-.753.379-1.16.379z"></path></svg>
                            <div class="lcn">${e2.lcn}</div>
                        </div>
                        <img class="logo${e2.logo.includes(`tvpnlogopeu.samsungcloud.tv`) ? ` samsung-logo` : ``}" src="${z(e2.logo)}" crossorigin="anonymous" loading="lazy" style="--ratio: ${zappr.ratios && zappr.ratios[e2.logo] ? zappr.ratios[e2.logo] : `0.75`};">
                        <div class="channel-title-subtitle">
                            <div class="channel-name">${e2.name}${e2.subtitle ? `<div class="channel-subtitle">${e2.subtitle}</div>` : ``}${e2.feed && !e2.subtitle ? `<div class="channel-subtitle">${T.not247}</div>` : ``}${e2.hbbtvmosaic ? `<div class="channel-subtitle">${T.hbbtvMosaic}</div>` : ``}</div>
                            ${e2.epg ? `<div class="channel-program" title="${T.viewFullEPG}"></div>` : ``}
                        </div>
                        ${e2.hd ? `<div class="hd"></div>` : ``}
                        ${e2.uhd ? `<div class="uhd"></div>` : ``}
                        ${e2.type === `audio` || e2.radio ? `<div class="radio"></div>` : ``}
                        ${e2.ondemand ? `<div class="ondemand"></div>` : ``}
                        ${e2.type === `popup` ? `<div class="external"></div>` : ``}
                        ${e2.adult === true ? `<div class="adult-marker"></div>` : e2.adult === `night` ? `<div class="adult-marker at-night"></div>` : ``}
                    </div>
                    ${e2.hbbtvmosaic ? `<div class="hbbtv-enabler-arrow">&gt;</div>` : ``}
                    ${e2.epg ? `
                        <div class="channel-program-progress" title="${T.viewFullEPG}"></div>
                        <div class="channel-program-progress-background" title="${T.viewFullEPG}"></div>
                        <div class="channel-program-times" title="${T.viewFullEPG}">
                            <div class="channel-program-start-time"></div>
                            <div class="channel-program-end-time"></div>
                        </div>
                    ` : ``}
                </div>

                ${e2.hbbtv && !e2.hbbtvmosaic ? `<div class="hbbtv-enabler">
                    <div class="hbbtv-enabler-arrow">&gt;</div>
                    <div class="hbbtv-enabler-text">${T.viewHbbTVChannels}</div>
                </div>` : ``}
                ${e2.hbbtv ? `<div class="hbbtv-channels">
                    ${e2.hbbtv.map((t3) => t3.categorySeparator === void 0 ? `<div class="channel ${t3.hbbtvapp ? `hbbtv-app` : ``} ${t3.adult === true ? `adult` : t3.adult === `night` ? `adult at-night` : ``}" data-name="${t3.name}" data-lowercase-name="${t3.name.toLowerCase()}" data-logo="${z(t3.logo)}" data-full-logo="${z(t3.logo, false)}" ${t3.radio ? `data-radio="${t3.radio}"` : ``} ${t3.type == null ? `` : `data-type="${t3.type}"`} ${t3.url == null ? `` : `data-url="${t3.url}"`} data-lcn="${e2.lcn}.${t3.sublcn}" ${t3.seek ? `data-seek="${t3.seek}"` : ``} ${t3.disabled ? `disabled data-disabled="${t3.disabled}"` : ``} ${!t3.disabled && t3.http && r2 ? `disabled data-disabled="http-ios"` : ``} ${!t3.disabled && t3.geoblock && i2 && typeof t3.geoblock == `boolean` ? `disabled data-disabled="geoblock" title="${V(`geoblock`)}"` : ``} ${t3.api && (!i2 || !t3.geoblock) ? `data-api="${t3.api}"` : ``} ${typeof t3.geoblock == `object` && t3.geoblock && i2 && t3.geoblock.api != null ? `data-api="${t3.geoblock.api}"` : ``} ${t3.cssfix != null && (!i2 || !t3.geoblock) ? `data-cssfix="${t3.cssfix}"` : ``} ${t3.cssfix === void 0 && typeof t3.geoblock == `object` && t3.geoblock.cssfix && i2 ? `data-cssfix="${t3.geoblock.cssfix}"` : ``} ${t3.http ? `data-http="true"` : ``} ${i2 && typeof t3.geoblock == `object` && t3.geoblock.license ? `data-license="${t3.geoblock.license}"` : t3.license == null ? `` : `data-license="${t3.license}"`} ${i2 && typeof t3.geoblock == `object` && t3.geoblock.licensedetails ? `data-license-details="${encodeURI(JSON.stringify(t3.geoblock.licensedetails))}"` : t3.licensedetails == null ? `` : `data-license-details="${encodeURI(JSON.stringify(t3.licensedetails))}"`} ${t3.feed ? `data-feed="${t3.feed}"` : ``} ${t3.fallback ? `data-fallback-type="${t3.fallback.type}" data-fallback-url="${t3.fallback.url}"` : ``} ${t3.fallback && t3.fallback.api ? `data-fallback-api="${t3.fallback.api}"` : ``} ${t3.fallback && t3.fallback.cssfix ? `data-fallback-cssfix="${t3.fallback.cssfix}"` : ``} ${t3.fallback && t3.fallback.license ? `data-fallback-license="${t3.fallback.license}"` : ``} ${t3.fallback && t3.fallback.licensedetails ? `data-fallback-license-details="${encodeURI(JSON.stringify(t3.fallback.licensedetails))}"` : ``} ${t3.epg ? `data-epg-source="${t3.epg.source}" data-epg-id="${t3.epg.id}"` : ``}>
                                <div class="channel-info">
                                    <div class="lcn">${e2.lcn}.${t3.sublcn}</div>
                                    <img class="logo" src="${z(t3.logo)}" data-full="${z(t3.logo, false)}" crossorigin="anonymous" loading="lazy" style="--ratio: ${zappr.ratios && zappr.ratios[t3.logo] ? zappr.ratios[t3.logo] : `0.75`};">
                                    <div class="channel-title-subtitle">
                                        <div class="channel-name">${t3.name}${t3.subtitle == null ? `` : `<div class="channel-subtitle">${t3.subtitle}</div>`}
                                        ${t3.feed && !t3.subtitle ? `<div class="channel-subtitle">${T.not247}</div>` : ``}</div>
                                        ${t3.epg ? `<div class="channel-program" title="${T.viewFullEPG}"></div>` : ``}
                                    </div>
                                    ${t3.hd ? `<div class="hd"></div>` : ``}
                                    ${t3.uhd ? `<div class="uhd"></div>` : ``}
                                    ${t3.type === `audio` || t3.radio ? `<div class="radio"></div>` : ``}
                                    ${t3.ondemand ? `<div class="ondemand"></div>` : ``}
                                    ${t3.type === `popup` ? `<div class="external"></div>` : ``}
                                    ${t3.adult === true ? `<div class="adult-marker"></div>` : t3.adult === `night` ? `<div class="adult-marker at-night"></div>` : ``}
                                </div>
                                ${t3.epg ? `
                                    <div class="channel-program-progress" title="${T.viewFullEPG}"></div>
                                    <div class="channel-program-progress-background" title="${T.viewFullEPG}"></div>
                                    <div class="channel-program-times" title="${T.viewFullEPG}">
                                        <div class="channel-program-start-time"></div>
                                        <div class="channel-program-end-time"></div>
                                    </div>
                                ` : ``}
                            </div>` : `<div class="category">${t3.categorySeparator}</div>`).join(``)}
                </div>` : ``}
            ${e2.hbbtv ? `</div>` : ``}` : `<h1 id="${e2.id}" class="channel-category">${e2.categorySeparator}</h1>`}
    `;
  }, U = (e2) => {
    try {
      return new URL(e2), true;
    } catch {
      return false;
    }
  }, se = (e2) => {
    try {
      return JSON.parse(e2), true;
    } catch {
      return false;
    }
  }, ce = (e2) => e2.replaceAll(`<`, `&lt;`).replaceAll(`>`, `&gt;`), le = U(localStorage.getItem(`selected-base-list`)) ? localStorage.getItem(`selected-base-list`) : localStorage.getItem(`selected-base-list`) === "default" || localStorage.getItem(`selected-base-list`) === `favorites` ? ie(`${s[S].location}/national`) : `data:application/json,{}`;
  if (await fetch(le).then((e2) => e2.json()).then(async (t2) => {
    if (localStorage.getItem(`selected-base-list`) != "default" && localStorage.getItem(`selected-base-list`) != `favorites`) if (le === `data:application/json,{}`) window.zappr.nationalChannels = D[localStorage.getItem(`selected-base-list`)].channels.sort((e2, t3) => e2.lcn - t3.lcn);
    else {
      t2 = JSON.parse(ce(JSON.stringify(t2)));
      let n2 = await fetch(`${zappr.config.channels.host}/schema.json`).then((e2) => e2.json()).catch(async () => await fetch(`https://channels.zappr.stream/schema.json`).then((e2) => e2.json()).catch(() => false));
      if (n2) {
        let { Validator: r2 } = await i(async () => {
          let { Validator: t3 } = await import("./lib-sKCgOiro.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }).then((t4) => e(t4.default));
          return {
            Validator: t3
          };
        }, __vite__mapDeps([5,2])), a2 = new r2().validate(t2, n2, {
          base: `https://channels.zappr.stream`
        });
        a2.valid ? window.zappr.nationalChannels = t2.channels.sort((e2, t3) => e2.lcn - t3.lcn) : (alert(T.notSchemaCompliantOnLoading(a2.errors.toString())), localStorage.setItem(`selected-base-list`, `default`), window.location.reload());
      } else alert(T.couldntFetchSchema), localStorage.setItem(`selected-base-list`, `default`), window.location.reload();
    }
    else window.zappr.nationalChannels = t2.channels.sort((e2, t3) => e2.lcn - t3.lcn);
  }), window.zappr.epg = {}, localStorage.getItem(`selected-additional-lists`) && se(localStorage.getItem(`selected-additional-lists`))) {
    let t2 = JSON.parse(localStorage.getItem(`selected-additional-lists`)), n2 = [];
    window.zappr.channels = window.zappr.nationalChannels, await Promise.all(t2.map(async (r2) => {
      let a2 = U(r2) ? r2 : `data:application/json,{}`, o2 = await (await fetch(a2)).json();
      if (O[r2]?.epg && U(O[r2]?.epg) && fetch(O[r2].epg).then((e2) => e2.json()).then(async (t3) => {
        let { merge: n3 } = await i(async () => {
          let { merge: t4 } = await import("./lodash-CwfZd973.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }).then((t5) => e(t5.default));
          return {
            merge: t4
          };
        }, __vite__mapDeps([6,2]));
        window.zappr.epg = n3({}, window.zappr.epg, t3);
      }).catch(() => {
      }), a2 === `data:application/json,{}`) {
        n2 = n2.concat(O[r2].channels);
        return;
      }
      o2 = JSON.parse(ce(JSON.stringify(o2)));
      let s2 = await fetch(`${zappr.config.channels.host}/schema.json`).then((e2) => e2.json()).catch(async () => await fetch(`https://channels.zappr.stream/schema.json`).then((e2) => e2.json()).catch(() => false));
      if (!s2) {
        alert(T.couldntFetchSchemaAdditionalList(O[r2].name)), t2 = t2.filter((e2) => e2 != r2), localStorage.setItem(`selected-additional-lists`, JSON.stringify(t2)), window.location.reload();
        return;
      }
      let { Validator: c2 } = await i(async () => {
        let { Validator: t3 } = await import("./lib-sKCgOiro.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }).then((t4) => e(t4.default));
        return {
          Validator: t3
        };
      }, __vite__mapDeps([5,2])), l2 = new c2().validate(o2, s2, {
        base: `https://channels.zappr.stream`
      });
      if (!l2.valid) {
        alert(T.notSchemaCompliantAdditionalList(O[r2].name, l2.errors.toString())), t2 = t2.filter((e2) => e2 != r2), localStorage.setItem(`selected-additional-lists`, JSON.stringify(t2)), window.location.reload();
        return;
      }
      n2 = n2.concat(o2.channels);
    })), n2 = n2.map((e2) => ({
      ...e2,
      additional: true
    })), window.zappr.additionalChannels = n2;
  }
  new URLSearchParams(location.search).get(`androidtv`) != null && localStorage.getItem(`region`) === `national` && (document.querySelector(`input[value="national"]`).checked = true), localStorage.getItem(`region`) != null && localStorage.getItem(`region`) != `national` && (localStorage.getItem(`selected-base-list`) === "default" || localStorage.getItem(`selected-base-list`) === `favorites`) ? (new URLSearchParams(location.search).get(`androidtv`) === null ? document.querySelector(`select`).value = localStorage.getItem(`region`) : document.querySelector(`input[value="${localStorage.getItem(`region`)}"]`).checked = true, await fetch(ie(`${s[S].location}/regional/${localStorage.getItem(`region`)}`)).then((e2) => e2.json()).then((e2) => {
    window.zappr.regionalChannels = e2.channels, window.zappr.channels = window.zappr.nationalChannels.concat(window.zappr.regionalChannels), window.zappr.channels.sort((e3, t2) => e3.lcn - t2.lcn);
  })) : window.zappr.channels = window.zappr.nationalChannels;
  var ue = false;
  localStorage.getItem(`selected-base-list`) === "default" || localStorage.getItem(`selected-base-list`) === `favorites` ? await fetch(ae(S)).then((e2) => e2.json()).then(async (e2) => {
    v != S && (e2.channels = e2.channels.filter((e3) => e3.url && !e3.url.includes(`pluto.tv`) || e3.id && e3.id != `plutotv`)), window.zappr.channels = window.zappr.channels.concat(e2.channels), ue = true;
  }).catch((e2) => {
    console.warn(`Can't find FAST channels: ${e2.stack}`), document.querySelector(`.source-header`).remove();
  }) : document.querySelector(`.source-header`).remove();
  var W = localStorage.getItem(`todo-edit-favorites`) === `true`, de = JSON.parse(localStorage.getItem(`favorites`)) ?? [];
  localStorage.getItem(`selected-base-list`) === `favorites` && !W && (window.zappr.channels = window.zappr.channels.filter((e2) => de.includes(`${e2.lcn}|${e2.name}`))), localStorage.getItem(`selected-base-list`) === `favorites` && (document.querySelector(`.source-header`).remove(), ue = false), window.zappr.additionalChannels && (window.zappr.channels = window.zappr.channels.concat(window.zappr.additionalChannels).sort((e2, t2) => e2.lcn - t2.lcn));
  var fe = (e2, t2, n2, r2) => {
    let i2 = parseFloat(getComputedStyle(document.documentElement).fontSize);
    if (r2) return 5.5 * i2;
    let a2 = e2 * 80;
    return a2 > 5 * i2 && (a2 = 5 * i2), n2 ? (a2 < 2.65 * i2 && (a2 = 2.65 * i2), 4 * i2 + a2 + 1) : t2 ? (a2 < 2.75 * i2 && (a2 = 3.75 * i2), 3 * i2 + a2 + 1) : (a2 < 2.5 * i2 && (a2 = 2.5 * i2), 2 * i2 + a2 + 1);
  }, pe = zappr.channels?.map((e2) => {
    let t2;
    return t2 = zappr.ratios[e2.logo] ? zappr.ratios[e2.logo] : e2.logo && e2.logo.includes(`tvpnlogopeu.samsungcloud.tv`) ? 1 : 0.5, fe(t2, e2.epg, e2.hbbtvmosaic, e2.categorySeparator);
  }), me = () => {
    document.querySelectorAll(`.hbbtv-channels`).forEach((e2) => {
      e2.style.cssText = `--scroll-height: ${e2.scrollHeight}px;`;
    });
  }, he = async (e2) => {
    if (document.querySelector(`#channels-column`).classList.contains(`favorites-picker-mode`)) {
      let t2 = e2.target.closest(`.channel`);
      if (t2.dataset.additional) alert(T.additionalChannelFavoritingDisabled);
      else {
        let e3 = JSON.parse(localStorage.getItem(`favorites`)) ?? [], n2 = `${t2.dataset.lcn}|${t2.dataset.name}`;
        t2.dataset.lcn.includes(`.`) || (t2.classList.contains(`marked-as-favorite`) ? (t2.classList.remove(`marked-as-favorite`), e3 = e3.filter((e4) => e4 != n2)) : (t2.classList.add(`marked-as-favorite`), e3.push(n2)), localStorage.setItem(`favorites`, JSON.stringify(e3)));
      }
    } else {
      me();
      let t2 = e2.target;
      if (t2.closest(`.hbbtv-mosaic`) && (t2 = t2.closest(`.hbbtv-mosaic`)), t2.classList.contains(`hbbtv-enabler`)) {
        t2.classList.toggle(`clicked`);
        let e3, n2 = t2.scrollHeight;
        t2.classList.contains(`hbbtv-mosaic`) ? e3 = parseInt(t2.dataset.lcn) : (e3 = parseInt(t2.previousElementSibling.dataset.lcn), n2 += t2.previousElementSibling.scrollHeight);
        let r2 = zappr.channels.indexOf(zappr.channels.filter((t3) => t3.lcn === e3)[0]);
        t2.classList.contains(`clicked`) && (n2 += parseFloat(getComputedStyle(t2.nextElementSibling).getPropertyValue(`--scroll-height`))), q.itemHeights[r2] = n2, q.itemOffsets = q.itemOffsets.map((e4, t3) => t3 > r2 ? e4 + n2 : e4), q.initializeOffsets();
      } else if (![
        `channel-program`,
        `channel-program-progress`,
        `channel-program-progress-background`,
        `channel-program-times`
      ].includes(e2.target.className) && e2.target.nodeName != `B` && t2.dataset.disabled === void 0) {
        if (t2.closest(`.channel`).contains(t2) && (t2 = t2.closest(`.channel`)), t2.dataset.disabled) {
          alert(V(t2.dataset.disabled));
          return;
        }
        if (M = t2, J.schedule != {} && je(``).remove(), document.querySelector(`.watching`) != null && document.querySelector(`.watching`).classList.remove(`watching`), document.querySelector(`.watching-hbbtv`) != null && document.querySelector(`.watching-hbbtv`).classList.remove(`watching-hbbtv`), t2.classList.add(`watching`), t2.dataset.lcn === `3` && t2.dataset.name.includes(`TGR`)) {
          je(await fetch(`https://www.rainews.it/dl/rai24/assets/json/palinsesto-tgr.json`).then((e3) => e3.json())).start();
          return;
        }
        if (document.querySelector(`style.cssfix[media=""]`) != null && (document.querySelector(`style.cssfix[media=""]`).media = `not all`), t2.dataset.cssfix != null && (document.querySelector(`style.cssfix#${t2.dataset.cssfix}-fix`).media = ``), t2.classList.contains(`hbbtv-app`) ? F.classList.add(`hbbtv-app`) : F.classList.contains(`hbbtv-app`) && !t2.classList.contains(`hbbtv-app`) && F.classList.remove(`hbbtv-app`), t2.classList.contains(`pluto-channel`) ? F.classList.add(`pluto-channel`) : F.classList.contains(`pluto-channel`) && !t2.classList.contains(`pluto-channel`) && F.classList.remove(`pluto-channel`), t2.dataset.lcn.includes(`.`) && (t2.closest(`.hbbtv-container`).querySelector(`.channel`).classList.add(`watching-hbbtv`), t2.closest(`.hbbtv-container`).querySelector(`.hbbtv-enabler`).classList.contains(`clicked`) || t2.closest(`.hbbtv-container`).querySelector(`.hbbtv-enabler`).classList.add(`clicked`)), t2.classList.contains(`adult`)) {
          if (!t2.classList.contains(`at-night`) && window.sessionStorage.getItem(`adultChannelConfirmation`) != `true`) {
            xe();
            return;
          } else if (t2.classList.contains(`at-night`) && ((/* @__PURE__ */ new Date()).getHours() >= 23 || (/* @__PURE__ */ new Date()).getHours() < 7) && window.sessionStorage.getItem(`nightAdultChannelConfirmation`) != `true`) {
            xe(true);
            return;
          }
        }
        await R({
          type: t2.dataset.type,
          url: t2.dataset.url,
          api: t2.dataset.api,
          name: t2.dataset.name,
          lcn: t2.dataset.lcn,
          logo: t2.dataset.logo,
          fullLogo: t2.dataset.fullLogo,
          radio: t2.dataset.radio,
          http: t2.dataset.http,
          license: t2.dataset.license,
          licenseDetails: t2.dataset.licenseDetails,
          feed: t2.dataset.feed,
          fallbackType: t2.dataset.fallbackType,
          fallbackURL: t2.dataset.fallbackUrl,
          fallbackAPI: t2.dataset.fallbackApi,
          fallbackCSSFix: t2.dataset.fallbackCssfix,
          fallbackLicense: t2.dataset.fallbackLicense,
          fallbackLicenseDetails: t2.dataset.fallbackLicenseDetails,
          timeshift: t2.dataset.timeshift,
          additional: t2.dataset.additional
        });
      } else if ([
        `channel-program`,
        `channel-program-progress`,
        `channel-program-progress-background`,
        `channel-program-times`
      ].includes(e2.target.className) || e2.target.nodeName === `B`) {
        t2.classList.contains(`channel`) || (t2 = t2.closest(`.channel`)), document.querySelector(`#epg-channel`).innerText = t2.dataset.name, document.querySelector(`#channels-column`).classList.add(`epg-visible`), document.querySelectorAll(`.epg-items`).forEach((e4) => e4.remove()), document.querySelector(`#channels-column`).classList.remove(`overflow-visible`), document.querySelector(`#epg`).classList.remove(`is-hidden`), document.querySelector(`#epg`).classList.remove(`long-channel-name`), document.querySelector(`#epg`).dataset.epgSource = t2.dataset.epgSource, document.querySelector(`#epg`).dataset.epgId = t2.dataset.epgId;
        let e3 = window.zappr.epg[t2.dataset.epgSource][t2.dataset.epgId].reduce((e4, t3) => {
          let n3 = t3.startTime.iso.split(`T`)[0], r2 = t3.endTime.iso.split(`T`)[0];
          return e4[n3] || (e4[n3] = []), e4[n3].push(t3), e4[r2] || (e4[r2] = []), e4[r2].push(t3), e4;
        }, {});
        Object.keys(e3).forEach((t3) => {
          e3[t3] = [
            ...new Set(e3[t3])
          ], e3[t3].length <= 1 && delete e3[t3];
        }), Object.keys(e3).length > 1 ? document.querySelector(`#epg-date`).className = `first-day` : document.querySelector(`#epg-date`).className = `first-day last-day`;
        for (let t3 in e3) document.querySelector(`#epg`).insertAdjacentHTML(`beforeend`, `<div class="epg-items" data-date="${t3}">
                    ${e3[t3].map((e4) => {
          let t4 = Date.now();
          return `<div class="epg-item-container${e4.image && e4.description && e4.description.length > 75 || !e4.image && e4.description && e4.description.length > 145 ? ` expandable` : ``}${e4.startTime.unix <= t4 && e4.endTime.unix >= t4 ? ` on-air` : ``}${e4.image ? `` : ` no-image`}" ${e4.image ? `style="background-image: url('${e4.image}');"` : ``} data-start-time="${e4.startTime.unix}">
                            <div class="epg-item">
                                ${e4.image ? `<img src="${e4.image}" class="epg-image" onerror="this.parentElement.parentElement.classList.add('no-image'); this.remove();">` : ``}
                                <div class="epg-info">
                                    <span class="epg-start-time">${l.fromMillis(e4.startTime.unix).toFormat(`HH:mm`)}</span>
                                    <h1 class="epg-name">${e4.name}${e4.season ? ` <b>S${e4.season}</b>` : ` `}${e4.episode ? `<b>E${e4.episode}</b>` : ``}${e4.rating && e4.rating.label != `6+` ? `<span class="epg-rating" style="background-color: ${e4.rating.background}; color: ${e4.rating.text};">${e4.rating.label}</span>` : ``}</h1>
                                    ${e4.subtitle ? `<h3 class="epg-subtitle">${e4.subtitle}</h3>` : ``}
                                    ${e4.description ? `<div class="epg-description">
                                        <p>${e4.description}</p>
                                    </div>` : ``}
                                    <div class="epg-buttons">${e4.link ? `<a class="epg-watch" href="${e4.link}"><img src="${f}">${T.watch}</a>` : ``}</div>
                                </div>
                            </div>
                        </div>`;
        }).join(``)}
                </div>`), document.querySelector(`.epg-item-container.on-air`) === null && document.querySelector(`.epg-items[data-date="${t3}"]`).remove();
        Me(true), document.querySelector(`.epg-item-container.on-air`).closest(`.epg-items`).classList.add(`has-on-air`), document.querySelector(`.epg-item-container.on-air`).closest(`.epg-items`).classList.add(`active`), document.querySelectorAll(`.epg-item-container.expandable .epg-description`).forEach((e4) => {
          e4.addEventListener(`click`, () => {
            e4.closest(`.epg-item-container`).classList.toggle(`expanded`);
          });
        }), document.querySelector(`.epg-items`).animate({
          left: `0`
        }, {
          duration: 0,
          fill: `forwards`,
          easing: `ease`
        }), document.querySelector(`.epg-item-container.on-air`).scrollIntoView({
          block: `center`
        }), document.querySelector(`#search-results`).scrollIntoView(), document.querySelector(`#channels`).scrollIntoView(), document.querySelector(`#channels-column`).scrollIntoView(), document.querySelector(`#epg-date span`).innerText = l.fromFormat(document.querySelector(`.epg-items.has-on-air`).dataset.date, `yyyy-MM-dd`).setLocale(w).toLocaleString(l.DATE_FULL), document.querySelector(`#epg-channel`).offsetTop > 16 && document.querySelector(`#epg`).classList.add(`long-channel-name`);
        let n2 = (await i(async () => {
          let { default: e4 } = await import("./medium-zoom.esm-DgNZ_O9X.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          });
          return {
            default: e4
          };
        }, [])).default;
        n2(`.epg-image:not(.no-image)`, {
          background: `rgba(0, 0, 0, 0.8)`,
          margin: window.matchMedia(`(max-width: 100vh)`).matches ? 16 : 160
        });
      } else t2.dataset.disabled != null && alert(V(t2.dataset.disabled));
    }
  }, ge, G = [
    -1
  ].concat(zappr.channels?.filter((e2) => e2.categorySeparator).map((e2) => zappr.channels.indexOf(e2))), K = 0, _e = (e2) => {
    let t2 = e2.getBoundingClientRect();
    return t2.top >= 0 && t2.left >= 0 && t2.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t2.right <= (window.innerWidth || document.documentElement.clientWidth);
  }, ve = () => {
    requestAnimationFrame(() => {
      let e2 = new URLSearchParams(location.search).get(`androidtv`) === null ? Array.from(document.querySelectorAll(`*:not(.hbbtv-channels) > .channel`)).filter((e3) => _e(e3))[0] : document.querySelectorAll(`*:not(.hbbtv-channels) > .channel`)[document.querySelectorAll(`*:not(.hbbtv-channels) > .channel`).length - 1];
      if (e2) {
        let t2 = e2.dataset.category ? e2.dataset.category : T.mainSource;
        ge != t2 && (document.querySelector(`.current-source`).innerText = t2, ge = t2, K = G.indexOf(zappr.channels.indexOf(zappr.channels.filter((e3) => e3.categorySeparator === t2)[0])), K === 0 ? (document.querySelector(`.source-header`).classList.remove(`last-source`), document.querySelector(`.source-header`).classList.add(`first-source`)) : K === G.length - 1 ? (document.querySelector(`.source-header`).classList.remove(`first-source`), document.querySelector(`.source-header`).classList.add(`last-source`)) : (document.querySelector(`.source-header`).classList.remove(`first-source`), document.querySelector(`.source-header`).classList.remove(`last-source`)));
      }
    });
  }, ye = 0, be = null, q;
  zappr.channels?.length > 0 && (q = new u({
    container: document.querySelector(`#channels`),
    items: zappr.channels,
    initialItemHeights: pe,
    renderFunction: (e2, t2) => H(e2, t2),
    onScroll: () => {
      navigator.userAgent.includes(`Firefox`) || me(), ue && ve();
      let e2 = Date.now() - ye, t2 = Math.max(0, 500 - e2);
      clearTimeout(be), be = setTimeout(() => {
        $(), ye = Date.now();
      }, t2);
    },
    onClick: he,
    manualClassName: `header`
  }), q.render()), document.querySelector(`#loading`).classList.add(`loaded`), document.querySelector(`#loading`).animate({
    opacity: 0
  }, {
    duration: 250,
    easing: `ease`,
    fill: `forwards`
  }), ue && (document.querySelector(`.source-header .previous`).addEventListener(`click`, () => {
    q.scrollToIndex(K === 1 ? 0 : G[K - 1], true, true);
  }), document.querySelector(`.source-header .next`).addEventListener(`click`, () => {
    q.scrollToIndex(G[K + 1], true, true);
  }));
  var xe = async (e2 = false) => {
    I({
      title: T.warning,
      text: `${e2 ? T.nightAdultChannelModalText : T.fullyAdultChannelModalText}
            <br><br>${T.adultChannelModalText}`,
      buttons: [
        {
          type: `primary`,
          href: `#`,
          text: T.continue
        },
        {
          type: `secondary`,
          href: `javascript:window.zappr.closeModal();`,
          text: T.cancel
        }
      ]
    }), document.querySelector(`.modal .button.primary`).addEventListener(`click`, () => {
      window.sessionStorage.setItem(`${e2 ? `nightAdult` : `adult`}ChannelConfirmation`, true), window.zappr.closeModal(), document.querySelector(`.channel.watching`).click();
    });
  }, J = {
    schedule: {},
    timeouts: /* @__PURE__ */ new Map(),
    playingRegional: false
  }, Se = (e2) => {
    let [t2, n2] = e2.split(`:`).map(Number);
    return t2 * 60 + n2;
  }, Ce = () => {
    let e2 = /* @__PURE__ */ new Date();
    return e2.getHours() * 60 + e2.getMinutes();
  }, we = () => (/* @__PURE__ */ new Date()).getDay(), Te = (e2) => `day` in e2, Ee = (e2) => {
    let t2 = /* @__PURE__ */ new Date(), n2 = Ce(), r2 = Se(e2.from), i2 = Se(e2.to);
    if (Te(e2)) {
      let a3 = new Date(e2.day);
      return t2.toDateString() === a3.toDateString() && n2 >= r2 && n2 < i2;
    }
    let a2 = we();
    return e2.days.includes(a2) && n2 >= r2 && n2 < i2;
  }, De = (e2) => {
    let t2 = /* @__PURE__ */ new Date(), n2 = Ce(), r2 = Se(e2.from);
    if (Te(e2)) {
      let i3 = new Date(e2.day);
      return i3 >= t2 && (i3.getDate() !== t2.getDate() || n2 < r2) ? /* @__PURE__ */ new Date(e2.day + ` ` + e2.from) : null;
    }
    let i2 = /* @__PURE__ */ new Date(), a2 = 0, o2 = we();
    if (n2 >= r2) {
      let t3 = e2.days.find((e3) => e3 > o2);
      a2 = t3 === void 0 ? 7 - o2 + e2.days[0] : t3 - o2;
    } else if (!e2.days.includes(o2)) {
      let t3 = e2.days.find((e3) => e3 > o2);
      a2 = t3 === void 0 ? 7 - o2 + e2.days[0] : t3 - o2;
    }
    return i2.setDate(i2.getDate() + a2), i2.setHours(...e2.from.split(`:`), 0, 0), i2;
  }, Oe = (e2) => {
    if (Ee(e2)) {
      let t3 = /* @__PURE__ */ new Date(), n3 = (/* @__PURE__ */ new Date(t3.toDateString() + ` ` + e2.to)).getTime() - t3.getTime(), r3 = setTimeout(() => {
        R({
          type: window.zappr.channels.filter((e3) => e3.lcn === 103)[0].type,
          url: window.zappr.channels.filter((e3) => e3.lcn === 103)[0].url,
          name: `Rai 3`,
          lcn: 103,
          logo: z(`rai3.svg`),
          license: window.zappr.channels.filter((e3) => e3.lcn === 103)[0].license
        }), Oe(e2);
      }, n3);
      J.timeouts.set(`${e2.title}-end`, r3), R({
        type: window.zappr.channels.filter((e3) => e3.lcn === 3)[0].type,
        url: window.zappr.channels.filter((e3) => e3.lcn === 3)[0].url,
        name: window.zappr.channels.filter((e3) => e3.lcn === 3)[0].name,
        lcn: 3,
        logo: z(`rai3.svg`)
      }), J.playingRegional = true;
      return;
    } else J.playingRegional || R({
      type: window.zappr.channels.filter((e3) => e3.lcn === 103)[0].type,
      url: window.zappr.channels.filter((e3) => e3.lcn === 103)[0].url,
      name: `Rai 3`,
      lcn: 103,
      logo: z(`rai3.svg`),
      license: window.zappr.channels.filter((e3) => e3.lcn === 103)[0].license
    });
    let t2 = De(e2);
    if (!t2) return;
    let n2 = t2.getTime() - (/* @__PURE__ */ new Date()).getTime();
    if (n2 <= 0) return;
    let r2 = setTimeout(() => {
      L({
        type: window.zappr.channels.filter((e3) => e3.lcn === 3)[0].type,
        url: window.zappr.channels.filter((e3) => e3.lcn === 3)[0].url,
        name: window.zappr.channels.filter((e3) => e3.lcn === 3)[0].name,
        lcn: 3,
        logo: z(`rai3.svg`)
      }), J.playingRegional = true;
      let n3 = (/* @__PURE__ */ new Date(t2.toDateString() + ` ` + e2.to)).getTime() - t2.getTime(), r3 = setTimeout(() => {
        L({
          type: window.zappr.channels.filter((e3) => e3.lcn === 103)[0].type,
          url: window.zappr.channels.filter((e3) => e3.lcn === 103)[0].url,
          name: `Rai 3`,
          lcn: 103,
          logo: z(`rai3.svg`)
        }), Oe(e2);
      }, n3);
      J.timeouts.set(`${e2.title}-end`, r3);
    }, n2);
    J.timeouts.set(e2.title, r2);
  }, ke = (e2) => {
    J.schedule = e2, Object.values(e2).flat().forEach(Oe);
  }, Ae = () => {
    for (let e2 of J.timeouts.values()) clearTimeout(e2);
    J.timeouts.clear(), J.schedule = {}, J.playingRegional = false;
  }, je = (e2) => ({
    start: () => ke(e2),
    remove: () => Ae()
  }), Y = (e2, t2, n2) => {
    e2.querySelector(`.epg-restart`) ? e2.querySelector(`.epg-restart`).remove() : (e2.querySelector(`.epg-buttons`).insertAdjacentHTML(`beforeend`, `<div class="epg-restart${n2 ? ` manual` : ``}"><img src="${d}">Restart</div>`), e2.querySelector(`.epg-restart`).addEventListener(`click`, () => {
      if (!document.querySelector(`iframe[src*="clearkey/"]`)) P.currentTime(P.liveTracker.liveCurrentTime() - (l.now().ts - t2) / 1e3 + 10);
      else {
        let e3 = document.querySelector(`iframe[src*="clearkey/"]`).contentWindow, n3 = e3.document.querySelector(`video`);
        n3.currentTime = e3.player.seekRange().end - ((l.now().ts - t2) / 1e3 + 10);
      }
      e2.classList.add(`restart-soon`), setTimeout(() => {
        e2.classList.remove(`restart-soon`);
      }, 1e4);
    }));
  }, X = {
    fetchCache: {},
    run: async (e2, t2, n2) => {
      let r2 = () => {
      };
      switch (t2) {
        case `mediaset`:
          let t3 = await fetch(`${n2.restartUrl}?auto=true&balance=true&format=SMIL&formats=MPEG-DASH,MPEG4,M3U&tracking=true&assetTypes=HD,browser,widevine,geoIT|geoNo:HD,browser,geoIT|geoNo:HD,geoIT|geoNo:SD,browser,widevine,geoIT|geoNo:SD,browser,geoIT|geoNo:SD,geoIT|geoNo`).then((e3) => e3.text()).then((e3) => new DOMParser().parseFromString(e3, `text/xml`)), i2 = t3.querySelector(`ref`).getAttribute(`src`).replaceAll(`manifest_hr.mpd`, `manifest.mpd`);
          if (i2.includes(`widevine`)) {
            let n3 = await fetch(`https://api-ott-prod-fe.mediaset.net/PROD/play/idm/anonymous/login/v2.0`, {
              method: `POST`,
              headers: {
                "Content-Type": `application/json`
              },
              body: JSON.stringify({
                appName: `web//mediasetplay-web/5.11.8-f16d93c`,
                client_id: `994957a4-c91e-4e18-8236-f50c1b8e707f`
              })
            }).then((e3) => e3.json()).then((e3) => e3.response.beToken), r3 = t3.querySelector(`param`).getAttribute(`value`).split(`|`).filter((e3) => e3.startsWith(`pid=`))[0].split(`=`)[1];
            await L({
              type: `dash`,
              url: i2,
              name: `${e2.dataset.name} (restart)`,
              lcn: e2.dataset.lcn,
              logo: e2.dataset.logo,
              drm: {
                "com.widevine.alpha": `https://widevine.entitlement.theplatform.eu/wv/web/ModularDrm/getRawWidevineLicense?releasePid=${r3}&account=http://access.auth.theplatform.com/data/Account/2702976343&schema=1.0&token=${n3}`
              }
            });
          } else await L({
            type: `hls`,
            url: (await fetch(`${n2.restartUrl}?auto=true&balance=true&format=SMIL&formats=MPEG4,M3U&tracking=true&assetTypes=HD,browser,geoIT|geoNo:HD,browser,geoIT|geoNo:HD,geoIT|geoNo:SD,browser,geoIT|geoNo:SD,browser,geoIT|geoNo:SD,geoIT|geoNo`).then((e3) => e3.text()).then((e3) => new DOMParser().parseFromString(e3, `text/xml`))).querySelector(`ref`).getAttribute(`src`),
            name: `${e2.dataset.name} (restart)`,
            lcn: e2.dataset.lcn,
            logo: e2.dataset.logo
          });
          r2 = () => {
            P.liveTracker.isLive() && P.currentTime(0), P.off(`loadeddata`, r2);
          }, P.on(`loadeddata`, r2);
          break;
        case `la7`:
          await fetch(`https://www.la7.it/getVideoInfoHbbtv?nid=${n2}`).then((e3) => e3.json()).then(async (t4) => {
            t4.node.field_geolock_italia?.und[0]?.value === `1` ? alert(`Il restart per questo programma non \xE8 disponibile al di fuori dell'Italia.`) : t4.node.field_drm?.und[0]?.value === `1` ? alert(`Il restart per questo programma \xE8 protetto da DRM e non pu\xF2 essere riprodotto.`) : await L({
              type: `direct`,
              url: t4.video.urlMP4,
              name: `${e2.dataset.name} (restart)`,
              lcn: e2.dataset.lcn,
              logo: e2.dataset.logo
            });
          });
          break;
        case `sky`:
          await L({
            type: `hls`,
            url: n2.url,
            name: `${e2.dataset.name} (restart)`,
            lcn: e2.dataset.lcn,
            logo: e2.dataset.logo
          }), r2 = () => {
            P.liveTracker.isLive() && P.currentTime(P.liveTracker.liveCurrentTime() - (l.now().ts - n2.startTime) / 1e3 + 10), P.off(`loadeddata`, r2);
          }, P.on(`loadeddata`, r2);
          break;
        case `wbd`:
          let a2 = l.fromMillis(n2.startTime), o2 = a2.set({
            minutes: Math.floor(a2.minute / n2.epgChunkSize) * n2.epgChunkSize,
            seconds: 0,
            milliseconds: 0
          }), s2 = o2.plus({
            minutes: n2.epgChunkSize
          }), c2 = (await fetch(`${n2.epgEndpoint}/${n2.id}/${o2.ts}-${s2.ts}.json`).then((e3) => e3.json())).data.schedule.filter((e3) => e3.segmentNo && e3.segmentNo === 1);
          if (c2.length >= 1) {
            let t4 = parseInt(c2.reduce((e3, t5) => Math.abs(t5.startts - l.now().ts) < Math.abs(e3.startts - l.now().ts) ? t5 : e3).startts) / 1e3, i3 = await fetch(`https://public.aurora.enhanced.live/token?realm=it`).then((e3) => e3.json()).then((e3) => e3.data.attributes.token), a3 = await fetch(`https://public.aurora.enhanced.live/playback/v3/channelPlaybackInfo`, {
              method: `POST`,
              headers: {
                Authorization: `Bearer ${i3}`,
                "Content-Type": `application/json`
              },
              body: JSON.stringify({
                deviceInfo: {
                  adBlocker: false,
                  drmSupported: false,
                  hdrCapabilities: [
                    `SDR`
                  ],
                  hwDecodingCapabilities: [],
                  soundCapabilities: [
                    `STEREO`
                  ]
                },
                wisteriaProperties: {
                  device: {
                    browser: {
                      name: `chrome`,
                      version: `38`
                    },
                    type: `desktop`
                  },
                  platform: `desktop`
                },
                channelId: n2.restartID
              })
            }).then((e3) => e3.json()).then((e3) => e3.data.attributes.streaming[0].url);
            await fetch(`${a3}&aws.manifestsettings=start:${t4}`).then((e3) => e3.ok) ? (await L({
              type: `hls`,
              url: `${a3}&aws.manifestsettings=start:${t4}`,
              name: `${e2.dataset.name} (restart)`,
              lcn: e2.dataset.lcn,
              logo: e2.dataset.logo
            }), r2 = () => {
              P.liveTracker.isLive() && P.currentTime(n2.buffer / 1e3), P.off(`loadeddata`, r2);
            }, P.on(`loadeddata`, r2)) : alert(`Impossibile effettuare il restart. Se il programma \xE8 iniziato da poco prova ad aspettare qualche minuto.`);
          } else alert(`Impossibile effettuare il restart. Se il programma \xE8 iniziato da poco prova ad aspettare qualche minuto.`);
          break;
      }
    },
    addButton: (e2, t2, n2, r2) => {
      e2.querySelector(`.epg-buttons`).insertAdjacentHTML(`beforeend`, `<div class="epg-restart manual"><img src="${d}">Restart</div>`), e2.querySelector(`.epg-restart`).addEventListener(`click`, async () => {
        await X.run(t2, n2, r2), e2.classList.add(`restart-soon`), setTimeout(() => {
          e2.classList.remove(`restart-soon`);
        }, 1e4);
      });
    },
    check: async (e2, t2) => {
      for (let n2 in t2) {
        let r2 = e2.dataset.manualRestartSource, i2 = e2.dataset.manualRestartId, a2 = l.fromMillis(parseInt(t2[n2].dataset.startTime)), o2 = a2.minus({
          minutes: 2.5
        }).ts, s2 = a2.plus({
          minutes: 2.5
        }).ts, c2;
        switch (r2) {
          case `rai`:
            if (v === S) if (t2[n2].classList.contains(`on-air`)) {
              let e3 = await fetch(`https://www.raiplay.it/palinsesto/onAir.json`).then((e4) => e4.json()).then((e4) => l.fromISO(e4.on_air.filter((e5) => e5.palinsesto_url === i2)[0].currentItem.tech_datetime_en).toMillis() + 25e3);
              Y(t2[n2], e3, true);
            } else a2.ts >= l.now().ts - (P.seekable().end(0) - P.seekable().start(0)) * 1e3 && a2.ts <= l.now().ts && Y(t2[n2], a2.ts, true);
            break;
          case `mediaset`:
            v === S && (X.fetchCache[r2] && X.fetchCache[r2][i2] ? c2 = X.fetchCache[r2][i2] : (c2 = await fetch(`https://static-api.mediaset.net/apigw/nownext/${i2}.json`).then((e3) => e3.json()), X.fetchCache[r2] = {}, X.fetchCache[r2][i2] = c2), t2[n2].classList.contains(`on-air`) && c2.response.currentListing.mediasetlisting$restartAllowed && X.addButton(t2[n2], e2, r2, c2.response.currentListing));
            break;
          case `la7`:
            if (X.fetchCache[r2] && X.fetchCache[r2][i2] ? c2 = X.fetchCache[r2][i2] : (c2 = await fetch(`https://www.la7.it/la7it_palinsesto_service_getrepliche/${i2}?s=hbbtv`).then((e3) => e3.json()), X.fetchCache[r2] = {}, X.fetchCache[r2][i2] = c2), c2[Object.keys(c2)[0]].forEach((i3) => {
              let c3 = i3.ora.split(` `)[0], u2 = l.fromFormat(i3.data, `dd/MM/yyyy`).setZone(`Europe/Rome`).startOf(`day`).set({
                hour: c3.split(`:`)[0],
                minutes: c3.split(`:`)[1]
              }).ts;
              u2.hour < 6 && (u2 = u2.plus({
                days: 1
              })), u2 >= o2 && u2 <= s2 ? X.addButton(t2[n2], e2, r2, i3.nid) : a2.ts >= l.now().ts - (P.seekable().end(0) - P.seekable().start(0)) * 1e3 && a2.ts <= l.now().ts && !t2[n2].classList.contains(`on-air`) && Y(t2[n2], a2.ts, true);
            }), t2[n2].classList.contains(`on-air`)) {
              let e3 = await fetch(`https://static.iltrovatore.it/StreamingStatus/${i2}.rivedi2.txt`).then((e4) => e4.text()).then((e4) => l.fromFormat(e4.split(`	`)[0], `yyyy.MM.dd-hh.mm.ss`).toMillis());
              Y(t2[n2], e3, true);
            }
            break;
          case `sky`:
            v === S && (X.fetchCache[r2] && X.fetchCache[r2][i2] ? c2 = X.fetchCache[r2][i2] : (c2 = await fetch(`https://hbbtv.sky.it/api/playout/${i2}/enhanced`).then((e3) => e3.json()), X.fetchCache[r2] = {}, X.fetchCache[r2][i2] = c2), c2.epgList.filter((e3) => e3.isRestartable).forEach((i3) => {
              let c3 = l.fromISO(i3.epgEventStart).setZone(`Europe/Rome`).ts;
              c3 >= o2 && c3 <= s2 && !i3.restartUrl.includes(`undefined`) && c3 < l.now().ts && X.addButton(t2[n2], e2, r2, {
                url: i3.restartUrl,
                startTime: a2.ts
              });
            }));
            break;
          case `wbd`:
            if (v === S) {
              if (X.fetchCache[r2] && X.fetchCache[r2][i2]) c2 = X.fetchCache[r2][i2];
              else {
                let e3 = await fetch(`https://datahub.enhanced.tools/live/it/${i2}.json`).then((e4) => e4.json()).then((e4) => e4.containers[0].configUrl.replaceAll(`http://`, `https://`)), t3 = await fetch(e3).then((e4) => e4.json()), n3 = t3.bundles.filter((e4) => e4.javascript.module === `galaxy`)[0].javascript.configUrl.replaceAll(`http://`, `https://`), a3 = await fetch(n3).then((e4) => e4.json()), o3 = parseInt(a3.startOverWindow) * 1e3, s3 = a3.launchers.filter((e4) => e4.style === `restart`)[0].interactiveItem.action.payload.id;
                c2 = {
                  startOverWindow: o3,
                  epgConfig: await fetch(`https://datahub.enhanced.tools/configs/bundles/epg/config.json`).then((e4) => e4.json()),
                  restartID: s3,
                  channelID: t3.currentChannel.name
                }, X.fetchCache[r2] = {}, X.fetchCache[r2][i2] = c2;
              }
              a2.ts > l.now().ts - c2.startOverWindow && a2.ts < l.now().ts && t2[n2].classList.contains(`on-air`) && X.addButton(t2[n2], e2, r2, {
                buffer: parseInt(c2.epgConfig.channelDelay),
                epgEndpoint: new URL(c2.epgConfig.epgApiEndpoint).origin,
                epgChunkSize: parseInt(c2.epgConfig.epgChunkSize),
                id: c2.channelID,
                restartID: c2.restartID,
                startTime: a2.ts
              });
            }
            break;
        }
      }
    }
  }, Me = async (e2 = false) => {
    e2 && document.querySelector(`.channel[data-epg-source="${document.querySelector(`#epg`).dataset.epgSource}"][data-epg-id="${document.querySelector(`#epg`).dataset.epgId}"]:not(.watching)`) && (document.querySelector(`.epg-item-container.on-air .epg-start-time:not(.clickable)`).addEventListener(`click`, () => {
      document.querySelector(`.channel[data-epg-source="${document.querySelector(`#epg`).dataset.epgSource}"][data-epg-id="${document.querySelector(`#epg`).dataset.epgId}"]`).click(), document.querySelector(`.channel[data-epg-source="${document.querySelector(`#epg`).dataset.epgSource}"][data-epg-id="${document.querySelector(`#epg`).dataset.epgId}"] .channel-program`).click();
    }), document.querySelector(`.epg-item-container.on-air .epg-start-time:not(.clickable)`).classList.add(`clickable`)), e2 && (X.fetchCache = {}), document.querySelectorAll(`.epg-restart:not(.manual)`).forEach((e3) => e3.remove()), document.querySelector(`.channel.watching`) && document.querySelector(`.channel.watching`).dataset.epgSource && document.querySelector(`#channels-column`).classList.contains(`epg-visible`) && document.querySelector(`#epg[data-epg-source="${document.querySelector(`.channel.watching`).dataset.epgSource}"][data-epg-id="${document.querySelector(`.channel.watching`).dataset.epgId}"]`) && (document.querySelectorAll(`.epg-item-container`).forEach((e3) => {
      parseInt(e3.dataset.startTime) >= l.now().ts - (P.seekable().end(0) - P.seekable().start(0)) * 1e3 && parseInt(e3.dataset.startTime) <= l.now().ts && !document.querySelector(`.channel.watching`).dataset.manualRestartSource && Y(e3, parseInt(e3.dataset.startTime));
    }), e2 && await X.check(document.querySelector(`.channel.watching`), Array.from(document.querySelectorAll(`.epg-item-container`))));
  }, Z = async (e2, t2, n2 = false) => {
    document.querySelector(`#search-input`).value = ``, document.querySelector(`#search-results`).style.display = `none`, document.querySelector(`#channels`).style.display = `block`, document.querySelector(`#search`).innerHTML = ``, document.querySelector(`#search-results`).innerHTML = ``;
    let r2;
    if (typeof e2 == `number` || typeof e2 == `string` ? r2 = document.querySelector(`[data-lcn="${e2}"]`) : typeof e2 == `object` && (r2 = e2), r2 === null) {
      let t3 = e2.toString();
      t3.includes(`.`) && (t3 = t3.split(`.`)[0]);
      let n3 = zappr.channels.indexOf(zappr.channels.filter((e3) => e3.lcn === parseInt(t3))[0]);
      q.scrollToIndex(n3), $(), typeof e2 == `number` || typeof e2 == `string` ? r2 = document.querySelector(`[data-lcn="${e2}"]`) : typeof e2 == `object` && (r2 = e2);
    }
    setTimeout(() => {
      try {
        r2.scrollIntoView({
          block: `center`,
          behavior: `smooth`
        });
      } catch {
      }
    }, r2 != null && r2.dataset.lcn.includes(`.`) && !t2 ? 250 : 0), document.querySelectorAll(`.highlighted`).forEach((e3) => e3.classList.remove(`highlighted`)), r2.classList.add(`highlighted`), r2.parentElement.className === `hbbtv-channels` && !r2.parentElement.previousElementSibling.classList.contains(`clicked`) && r2.parentElement.previousElementSibling.click(), t2 && (r2.previousElementSibling != null && r2.previousElementSibling.classList.remove(`highlighted`), r2.previousElementSibling != null && r2.previousElementSibling.querySelector(`.channel`) != null && r2.previousElementSibling.querySelector(`.channel`).classList.remove(`highlighted`), r2.parentElement.className === `hbbtv-container` && (r2.parentElement.previousElementSibling.querySelector(`.channel`) == null ? r2.parentElement.previousElementSibling.classList.remove(`highlighted`) : r2.parentElement.previousElementSibling.querySelector(`.channel`).classList.remove(`highlighted`)), r2.nextElementSibling != null && r2.nextElementSibling.classList.remove(`highlighted`), r2.nextElementSibling != null && r2.nextElementSibling.querySelector(`.channel`) != null && r2.nextElementSibling.querySelector(`.channel`).classList.remove(`highlighted`), r2.parentElement.className === `hbbtv-container` && (r2.parentElement.nextElementSibling.querySelector(`.channel`) == null ? r2.parentElement.nextElementSibling.classList.remove(`highlighted`) : r2.parentElement.nextElementSibling.querySelector(`.channel`).classList.remove(`highlighted`))), n2 || (r2.focus(), r2.click());
  }, Ne = () => {
    let e2 = /* @__PURE__ */ new Date(), t2 = e2.getHours(), n2 = /* @__PURE__ */ new Date();
    t2 >= 23 || t2 < 7 ? (ne.media = `not all`, n2.setHours(7, 0, 0, 0), t2 >= 23 && n2.setDate(n2.getDate() + 1)) : (ne.media = ``, n2.setHours(23, 0, 0, 0), t2 < 7 && n2.setDate(n2.getDate() - 1)), setTimeout(Ne, n2.getTime() - e2.getTime());
  };
  Ne();
  var Pe = (e2) => {
    if (document.activeElement.tagName != `INPUT`) {
      e2.code === `Escape` && document.querySelector(`.modal`) != null && document.querySelector(`.modal`).classList.contains(`is-visible`) && window.zappr.closeModal(), ([
        `Backspace`,
        `Delete`,
        `NumpadEnter`,
        `Enter`,
        `Escape`,
        `PageUp`,
        `PageDown`
      ].includes(e2.code) || e2.key === `.` || e2.code.startsWith(`Digit`) || e2.code.startsWith(`Numpad`) && e2.code.length === 7) && ![
        `INPUT`,
        `EMOJI-PICKER`
      ].includes(document.activeElement.tagName) && (e2.preventDefault(), e2.stopImmediatePropagation(), e2.stopPropagation());
      let t2 = document.querySelector(`#lcn-typing`), n2 = document.querySelector(`#lcn-typed`), r2 = document.querySelector(`#controls`), i2 = window.zappr.channels.filter((e3) => e3.lcn === parseInt(n2.innerText));
      if ((n2.innerText.includes(`.`) && i2[0] != null && i2[0].hbbtv && i2[0].hbbtv.filter((e3) => e3.sublcn == n2.innerText.split(`.`)[1]).length === 0 || n2.innerText.includes(`.`) && i2[0] != null && !i2[0].hbbtv) && (i2 = []), (!j && e2.code.startsWith(`Digit`) || e2.code.startsWith(`Numpad`) && e2.code.length === 7 || e2.key === `.` || e2.code === `NumpadDecimal`) && (A = true, t2.style.display = `block`, e2.key === `.` && n2.innerText.includes(`.`) || (n2.innerText += e2.code.startsWith(`Digit`) || e2.key === `.` ? e2.key : e2.code.replaceAll(`Numpad`, ``).replaceAll(`Decimal`, `.`))), A) switch (e2.code) {
        case `Backspace`:
        case `Delete`:
        case `NumpadDivide`:
        case `NumpadMultiply`:
        case `NumpadSubtract`:
          j &&= false, n2.innerText.slice(0, -1) === `` && (t2.style.display = `none`), n2.innerText = n2.innerText.slice(0, -1);
          break;
        case `NumpadEnter`:
        case `Enter`:
          i2.length != 0 && n2.innerText.slice(-1) != `.` ? i2.length > 1 ? j = true : (Z(n2.innerText), t2.style.display = `none`, n2.innerText = ``, A = false) : (t2.classList.add(`shaking`), setTimeout(() => {
            t2.classList.remove(`shaking`);
          }, 500));
          break;
        case `Escape`:
          t2.style.display = `none`, n2.innerText = ``, A = false;
          break;
      }
      if (j) if (r2.innerHTML = T.multipleChannelSelectionText(i2), e2.code.startsWith(`Digit`) || e2.code.startsWith(`Numpad`) && e2.code.length === 7) {
        let a2 = e2.code.startsWith(`Digit`) ? e2.key : e2.code.replaceAll(`Numpad`, ``);
        a2 <= i2.length && a2 != 0 && [
          a2 - 1
        ] != null && (Z(i2[a2 - 1].lcn, false, true), Z(document.querySelector(`.channel[data-name="${i2[a2 - 1].name}"][data-lcn="${i2[a2 - 1].lcn}"]`)), t2.style.display = `none`, n2.innerText = ``, r2.innerHTML = T.lcnTyping, A = false, j = false);
      } else e2.code === `Escape` && (t2.style.display = `none`, n2.innerText = ``, r2.innerHTML = T.lcnTyping, A = false, j = false);
      if (e2.code === `PageUp` || e2.code === `PageDown`) if (M === ``) Z(1);
      else {
        let t3 = document.querySelectorAll(`.channel`)[0], n3 = document.querySelectorAll(`.channel`)[document.querySelectorAll(`.channel`).length - 1];
        N = M === t3 ? e2.code === `PageUp` ? n3 : M.nextElementSibling : M === n3 ? e2.code === `PageDown` ? t3 : M.previousElementSibling : M.parentElement.classList.contains(`hbbtv-container`) ? e2.code === `PageUp` ? M.parentElement.previousElementSibling : M.parentElement.nextElementSibling : M.parentElement.classList.contains(`hbbtv-channels`) && M.previousElementSibling === null ? e2.code === `PageUp` ? M.parentElement.parentElement.querySelector(`.channel`) : M.nextElementSibling : e2.code === `PageUp` ? M.previousElementSibling : M.nextElementSibling, N.classList.contains(`hbbtv-container`) ? N = N.querySelector(`.channel`) : N.classList.contains(`hbbtv-enabler`) ? N = N.parentElement.nextElementSibling : N.classList.contains(`category`) && (N = e2.code === `PageUp` ? N.previousElementSibling : N.nextElementSibling), N != null && Z(N, true);
      }
    }
    if (new URLSearchParams(location.search).get(`androidtv`) != null) {
      let t2 = Array.from(document.querySelectorAll(`*:not(.hbbtv-channels) > .channel:not(.hbbtv-app), .hbbtv-enabler, .hbbtv-enabler.clicked + .hbbtv-channels .channel`));
      document.querySelector(`.source-header`) && (document.querySelector(`#channels`).scrollTop === 0 || document.querySelector(`.source-header .androidtv-active`)) && (t2 = Array.from(document.querySelectorAll(`.source-header.first-source .next, .source-header.last-source .previous, .source-header:not(.first-source, .last-source) .previous, .source-header:not(.first-source, .last-source) .next`)).concat(t2)), window.location.hash != `#canPressBack` && (window.location.hash = `canPressBack`), document.querySelector(`#settings`).classList.contains(`visible`) ? (e2.key === `Enter` || e2.key === ` `) && document.querySelector(`:focus`) != null && document.querySelector(`:focus`).click() : (e2.preventDefault(), (e2.code === `ArrowUp` || e2.code === `ArrowDown`) && (document.querySelector(`.channel.watching`) != null && document.querySelector(`#channels-column`).style.display === `none` ? (document.querySelector(`.androidtv-active`) && document.querySelector(`.androidtv-active`).classList.remove(`androidtv-active`), document.querySelector(`.channel.watching`).classList.add(`androidtv-active`), t2[Q].scrollIntoView({
        block: `center`
      })) : (document.querySelector(`.androidtv-active`) && (Q = t2.indexOf(document.querySelector(`.androidtv-active`))), e2.code === `ArrowUp` ? Q != 0 && --Q : e2.code === `ArrowDown` && Q != t2.length - 1 && (Q += 1), document.querySelector(`.androidtv-active`) && document.querySelector(`.androidtv-active`).classList.remove(`androidtv-active`), t2[Q].classList.add(`androidtv-active`), t2[Q].classList.contains(`channel`) || t2[Q].classList.contains(`hbbtv-mosaic`) ? t2[Q].scrollIntoView({
        block: `center`
      }) : t2[Q].classList.contains(`hbbtv-enabler`) && t2[Q].previousElementSibling.scrollIntoView({
        block: `center`
      })), document.querySelector(`#channels-column`).style.display = `block`, document.querySelector(`#overlays`).classList.remove(`full-width`)), e2.key === `Enter` || e2.key === ` ` || e2.key === `MediaPlayPause` ? document.querySelector(`#channels-column`).style.display === `none` ? P.paused() ? P.play() : P.pause() : document.querySelector(`#channels-column`).style.display != `none` && e2.key != `MediaPlayPause` && document.querySelector(`.androidtv-active`) && document.querySelector(`.androidtv-active`).click() : (e2.key === `ArrowLeft` || e2.key === `ArrowRight` || e2.key === `MediaRewind` || e2.key === `MediaFastForward`) && document.querySelector(`#channels-column`).style.display === `none` ? (P.userActive(true), e2.key === `ArrowLeft` || e2.key === `MediaRewind` ? P.currentTime(P.currentTime() - 5) : (e2.key === `ArrowRight` || e2.key === `MediaFastForward`) && P.currentTime(P.currentTime() + 5)) : e2.key === `ArrowRight` && document.querySelector(`#channels-column`).style.display != `none` && document.querySelector(`iframe`) === null && document.querySelector(`#hide-player`).media === `not all` && (document.querySelector(`#channels-column`).style.display = `none`, document.querySelector(`#overlays`).classList.add(`full-width`)));
    }
  }, Q = -1;
  window.addEventListener(`keydown`, Pe), document.querySelectorAll(`.tooltip`).forEach((e2) => {
    e2.addEventListener(`click`, async (t2) => {
      if (e2.querySelector(`.promo-tooltip`) && e2.querySelector(`.promo-tooltip`).classList.remove(`active`), !t2.target.classList.contains(`close`) && (document.querySelectorAll(`.tooltip-content:not(${e2.dataset.target})`).forEach((e3) => {
        e3.classList.remove(`visible`);
      }), document.querySelector(`#channels-column`).classList.toggle(`tooltip-visible`), document.querySelector(e2.dataset.target).classList.toggle(`visible`), e2.dataset.target === `#news` && document.querySelector(`#news`).classList.contains(`news-not-loaded`))) {
        await fetch(T.newsURL).then((e4) => e4.text()).then((e4) => {
          new DOMParser().parseFromString(e4, `application/xml`).querySelectorAll(`item`).forEach((e5) => {
            let t3 = new DOMParser().parseFromString(e5.querySelector(`description`).textContent, `text/html`);
            if (t3.body.innerHTML = t3.body.innerHTML.replaceAll(`<br>`, `
`), !t3.body.innerText.includes(`\u2800`)) {
              let n2 = t3.querySelector(`a:not(.mention, .hashtag)`) == null ? e5.querySelector(`link`).textContent : t3.querySelector(`a:not(.mention, .hashtag)`).getAttribute(`href`);
              t3.querySelector(`a:not(.mention, .hashtag)`) != null && t3.querySelectorAll(`a:not(.mention, .hashtag)`).forEach((e6) => {
                e6.remove();
              }), t3.querySelector(`:empty`) != null && t3.querySelectorAll(`:empty`).forEach((e6) => {
                e6.remove();
              }), document.querySelector(`#news-list`).insertAdjacentHTML(`afterbegin`, `
                                    <div class="news-item">
                                        <a class="news-content" href="${n2}" target="_blank">
                                            <span class="news-date">${l.fromRFC2822(e5.querySelector(`pubDate`).textContent).setLocale(w).toLocaleString()}</span>
                                            ${Array.from(t3.querySelectorAll(`p`)).map((e6) => e6.innerText).join(`<br><br>`).replaceAll(`
`, `<br>`)}
                                        </a>
                                        ${e5.children[e5.children.length - 1].tagName === `media:content` && e5.children[e5.children.length - 1].getAttribute(`type`).startsWith(`image/`) ? `<img class="news-image" src="${e5.children[e5.children.length - 1].getAttribute(`url`).replaceAll(`/original/`, `/small/`)}" data-zoom-src="${e5.children[e5.children.length - 1].getAttribute(`url`)}">` : ``}
                                    </div>
                                `);
            }
          });
        });
        let e3 = (await i(async () => {
          let { default: e4 } = await import("./medium-zoom.esm-DgNZ_O9X.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          });
          return {
            default: e4
          };
        }, [])).default;
        e3(`.news-image`, {
          background: `rgba(0, 0, 0, 0.8)`,
          margin: 32
        }), document.querySelector(`#news`).classList.remove(`news-not-loaded`);
      }
    });
  });
  var Fe = ({ id: e2, name: t2, publisher: n2 = null, icon: r2 = null, publisherLink: i2 = null, donationLink: a2 = null }) => `<div class="list" data-id="${e2}">
    <img src="${r2 || p}" class="list-icon" loading="lazy">
    <div class="list-info">
        <span class="list-name">${t2 || T.untitledList}</span>
        ${n2 ? `<span>Publisher: ${i2 ? `<a href="${i2}" target="_blank">${n2}</a>` : n2} ${a2 ? `<a class="list-publisher-donate" href="${a2}" target="_blank"><b>$</b> Dona</a>` : ``}</span>` : `<span><i>${T.localList}</i></span>`}
    </div>
    <div class="list-icons">
        <img class="share-list" src="${_}" alt="${T.shareList}">
        ${U(e2) ? `` : `<img class="edit-list" src="${m}" alt="${T.editList}">`}
        <img class="delete-list" src="${h}" alt="${T.deleteList}">
    </div>
</div>`;
  for (let e2 of Object.keys(D)) document.querySelector(`#my-list #base-list-tab .add-list`).insertAdjacentHTML(`beforebegin`, Fe({
    id: e2,
    name: D[e2].name,
    publisher: D[e2].publisher,
    icon: D[e2].icon,
    publisherLink: D[e2].publisherLink,
    donationLink: D[e2].donationLink
  }));
  for (let e2 of Object.keys(O)) document.querySelector(`#my-list #additional-list-tab .add-list`).insertAdjacentHTML(`beforebegin`, Fe({
    id: e2,
    name: O[e2].name,
    publisher: O[e2].publisher,
    icon: O[e2].icon,
    publisherLink: O[e2].publisherLink,
    donationLink: O[e2].donationLink
  }));
  if (document.querySelector(`#my-list #base-list-tab [data-id="${localStorage.getItem(`selected-base-list`)}"]`) ? document.querySelector(`#my-list #base-list-tab [data-id="${localStorage.getItem(`selected-base-list`)}"]`).classList.add(`selected`) : document.querySelector(`#my-list [data-id="default"]`).classList.add(`selected`), localStorage.getItem(`selected-additional-lists`) && se(localStorage.getItem(`selected-additional-lists`))) for (let e2 of JSON.parse(localStorage.getItem(`selected-additional-lists`))) document.querySelector(`#my-list #additional-list-tab [data-id="${e2}"]`) && document.querySelector(`#my-list #additional-list-tab [data-id="${e2}"]`).classList.add(`selected`);
  document.querySelectorAll(`#my-list .tab-links a`).forEach((e2) => {
    e2.addEventListener(`click`, () => {
      let e3 = document.querySelector(`#list-picker`).classList.contains(`second-tab-active`) ? document.querySelector(`#base-list-tab`) : document.querySelector(`#additional-list-tab`);
      document.querySelector(`.tabs`).animate([
        {
          height: `${document.querySelector(`.tabs`).scrollHeight}px`
        },
        {
          height: `${e3.scrollHeight}px`
        }
      ], {
        duration: 500,
        fill: `forwards`,
        easing: `ease`
      });
    });
  }), document.querySelectorAll(`#my-list .tab-links a:last-child`).forEach((e2) => {
    e2.addEventListener(`click`, () => e2.closest(`.tooltip-content-box`).classList.add(`second-tab-active`));
  }), document.querySelectorAll(`#my-list .tab-links a:first-child`).forEach((e2) => {
    e2.addEventListener(`click`, () => e2.closest(`.tooltip-content-box`).classList.remove(`second-tab-active`));
  }), document.querySelector(`#list-picker .save-tab`).addEventListener(`click`, () => {
    document.querySelector(`#my-list #base-list-tab .selected`).dataset.id === `favorites` && (!localStorage.getItem(`favorites`) || localStorage.getItem(`favorites`) === `[]`) ? alert(T.favoritesListEmpty) : (localStorage.setItem(`selected-base-list`, document.querySelector(`#my-list #base-list-tab .selected`).dataset.id), localStorage.setItem(`selected-additional-lists`, JSON.stringify(Array.from(document.querySelectorAll(`#additional-list-tab .list.selected`)).map((e2) => e2.dataset.id))), window.location.reload());
  }), document.querySelector(`#list-editor .save-tab`).addEventListener(`click`, () => {
    let e2 = document.querySelector(`#list-editor`).dataset.editing, t2 = document.querySelector(`#list-picker`).classList.contains(`second-tab-active`), n2 = t2 ? `additional-lists` : `base-lists`, r2 = JSON.parse(localStorage.getItem(n2))[e2] ?? {}, i2 = t2 ? document.querySelector(`#additional-list-tab`) : document.querySelector(`#base-list-tab`), a2 = Fe({
      id: e2,
      name: r2.name,
      icon: r2.icon
    }), o2 = false;
    i2.querySelector(`.list[data-id="${e2}"]`) ? (i2.querySelector(`.list[data-id="${e2}"]`).classList.contains(`selected`) && (o2 = true), i2.querySelector(`.list[data-id="${e2}"]`).outerHTML = a2) : i2.querySelector(`.add-list`).insertAdjacentHTML(`beforebegin`, a2), Ie(i2.querySelector(`.list[data-id="${e2}"]`), t2), !t2 && !document.querySelector(`#base-list-tab .list.selected`) && i2.querySelector(`.list[data-id="${e2}"]`).classList.add(`selected`), t2 && o2 && i2.querySelector(`.list[data-id="${e2}"]`).classList.add(`selected`), document.querySelector(`#my-list`).classList.remove(`editor-active`);
  }), document.querySelector(`#my-list .tabs`).addEventListener(`click`, () => {
    document.querySelector(`#my-list-explanation-link`).classList.remove(`active`), document.querySelector(`#list-picker .save-tab`).classList.add(`active`);
  }), document.querySelectorAll(`#my-list #list-picker .add-list`).forEach((e2) => {
    e2.addEventListener(`click`, (t2) => {
      document.querySelector(`#my-list .add-list-options`).contains(t2.target) || e2.classList.add(`active`);
    });
  });
  var Ie = (e2, t2) => {
    t2 ? e2.addEventListener(`click`, (t3) => {
      e2.querySelector(`.list-icons`)?.contains(t3.target) || e2.classList.toggle(`selected`);
    }) : e2.addEventListener(`click`, (t3) => {
      e2.querySelector(`.list-icons`)?.contains(t3.target) || (document.querySelectorAll(`#base-list-tab .list.selected`).forEach((e3) => e3.classList.remove(`selected`)), e2.classList.add(`selected`));
    }), e2.querySelector(`.edit-list`) && e2.dataset?.id != `favorites` && e2.querySelector(`.edit-list`).addEventListener(`click`, () => Re(e2.closest(`.list`).dataset.id)), e2.querySelector(`.delete-list`) && e2.querySelector(`.delete-list`).addEventListener(`click`, () => {
      confirm(T.deleteListConfirmation) && Be(e2.dataset.id);
    }), e2.querySelector(`.share-list`) && e2.querySelector(`.share-list`).addEventListener(`click`, async () => {
      if (U(e2.dataset.id)) navigator.clipboard.writeText(e2.dataset.id);
      else {
        let { strToU8: t3, gzipSync: n2 } = await i(async () => {
          let { strToU8: e3, gzipSync: t4 } = await import("./browser-BEaX7hwf.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          });
          return {
            strToU8: e3,
            gzipSync: t4
          };
        }, []), r2 = document.querySelector(`#list-picker`).classList.contains(`second-tab-active`) ? `additional-lists` : `base-lists`, a2 = JSON.parse(localStorage.getItem(r2)) ?? {}, o2 = n2(t3(JSON.stringify(a2[e2.dataset.id]))), s2 = `data:application/gzip,${btoa(String.fromCharCode(...o2))}`;
        navigator.clipboard.writeText(s2);
      }
      alert(T.listURLCopied);
    });
  };
  document.querySelectorAll(`#base-list-tab .list:not(.add-list)`).forEach((e2) => Ie(e2, false)), document.querySelectorAll(`#additional-list-tab .list:not(.add-list)`).forEach((e2) => Ie(e2, true));
  var Le = `https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg`, Re = async (t2 = null) => {
    let n2 = document.querySelector(`#list-picker`).classList.contains(`second-tab-active`) ? `additional-lists` : `base-lists`, r2 = JSON.parse(localStorage.getItem(n2)) ?? {};
    t2 || (t2 = crypto.randomUUID(), r2[t2] = {
      name: ``,
      icon: p,
      channels: []
    }), document.querySelector(`#list-editor`).dataset.editing = t2;
    let a2 = () => localStorage.setItem(n2, JSON.stringify(r2));
    a2(), document.querySelector(`#my-list`).classList.add(`editor-active`), document.querySelector(`#list-editor #list-info-tab`).innerHTML = `<div class="list">
        <img src="${p}" class="list-icon" loading="lazy">
        <div class="list-info">
            <span class="list-name">${T.untitledList}</span>
        </div>
    </div>
    <div class="form-group">
        <label for="list-name-input">${T.listNameInputLabel}</label>
        <input id="list-name-input" type="text" placeholder="${T.listNameInput}" required>
    </div>
    <div class="form-group">
        <label for="list-icon-url-input">${T.listIconInputLabel}</label>
        <div id="icon-picker">
            <input type="url" placeholder="${T.listIconInput}" id="list-icon-url-input">
            <div>\u{1F642} ${T.useEmoji}</div>
        </div>
    </div>
    <div class="form-group">
        <label for="list-epg-url-input">${T.listEPGInputLabel}</label>
        <input id="list-epg-url-input" type="url" placeholder="${T.listEPGInput}">
    </div>`, r2[t2].name && (document.querySelector(`#list-editor #list-info-tab .list-name`).innerText = r2[t2].name, document.querySelector(`#list-editor #list-info-tab #list-name-input`).value = r2[t2].name), r2[t2].icon != p && (document.querySelector(`#list-editor #list-info-tab img`).src = r2[t2].icon, r2[t2].icon.startsWith(Le) || (document.querySelector(`#list-editor #list-info-tab #list-icon-url-input`).value = r2[t2].icon)), r2[t2].epg && (document.querySelector(`#list-editor #list-info-tab #list-epg-url-input`).value = r2[t2].epg), document.querySelector(`#list-editor #list-info-tab #list-name-input`).addEventListener(`input`, () => {
      document.querySelector(`#list-editor #list-info-tab #list-name-input`).value == `` ? document.querySelector(`#list-editor #list-info-tab .list-name`).innerText = T.untitledList : document.querySelector(`#list-editor #list-info-tab .list-name`).innerText = document.querySelector(`#list-editor #list-info-tab #list-name-input`).value, r2[t2].name = document.querySelector(`#list-editor #list-info-tab #list-name-input`).value, a2();
    }), document.querySelector(`#list-editor #list-info-tab #list-icon-url-input`).addEventListener(`input`, () => {
      document.querySelector(`#list-editor #list-info-tab .list-icon`).src = document.querySelector(`#list-editor #list-info-tab #list-icon-url-input`).value, r2[t2].icon = document.querySelector(`#list-editor #list-info-tab #list-icon-url-input`).value, a2();
    }), document.querySelector(`#list-editor #list-info-tab #list-epg-url-input`).addEventListener(`input`, () => {
      r2[t2].epg = document.querySelector(`#list-editor #list-info-tab #list-epg-url-input`).value, a2();
    }), await i(() => Promise.resolve({}).then(async (m2) => {
      await m2.__tla;
      return m2;
    }), __vite__mapDeps([7]));
    let o2 = (await i(async () => {
      let { default: e2 } = await import("./twemoji.esm-CzjFwY_Y.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      });
      return {
        default: e2
      };
    }, [])).default, { Picker: s2 } = await i(async () => {
      let { Picker: e2 } = await import("./emoji-picker-element-9e8afvL2.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      });
      return {
        Picker: e2
      };
    }, []), c2 = new s2({
      locale: C,
      dataSource: `https://unpkg.com/emoji-picker-element-data@1.8.0/${`bn.da.de.en.en-gb.es.es-mx.et.fi.fr.hi.hu.it.ja.ko.lt.ms.nb.nl.pl.pt.ru.sv.th.uk.vi.zh.zh-hant`.split(`.`).includes(C) ? C : `en`}/cldr/data.json`
    });
    c2.classList.add(`dark`), document.querySelector(`#list-editor #list-info-tab #icon-picker`).appendChild(c2), document.querySelector(`#list-editor #icon-picker div`).addEventListener(`click`, () => {
      document.querySelector(`#list-editor #icon-picker div`).classList.toggle(`active`), document.querySelector(`#list-editor #icon-picker div`).classList.contains(`active`) ? document.querySelector(`#list-editor #icon-picker div`).innerText = `\u2715 ${T.useEmoji}` : document.querySelector(`#list-editor #icon-picker div`).innerText = `\u{1F642} ${T.useEmoji}`, document.querySelector(`#list-editor emoji-picker`).classList.toggle(`active`);
    }), c2.addEventListener(`emoji-click-sync`, async (e2) => {
      let n3 = (await e2.detail).emoji.unicode, i2 = `${Le}${new DOMParser().parseFromString(o2.parse(n3, {
        base: ``,
        size: ` `,
        ext: `.svg`
      }), `text/html`).querySelector(`img`).getAttribute(`src`).trim()}`;
      document.querySelector(`#list-editor #list-info-tab .list-icon`).src = i2, document.querySelector(`#list-editor #list-info-tab #icon-picker input`).value = ``, r2[t2].icon = i2, a2();
    });
    let l2 = await fetch(`${zappr.config.channels.host}/schema.json`).then((e2) => e2.json()).catch(async () => await fetch(`https://channels.zappr.stream/schema.json`).then((e2) => e2.json()).catch(() => false)), u2 = {}, d2 = null, { set: f2, unset: _2 } = await i(async () => {
      let { set: t3, unset: n3 } = await import("./lodash-CwfZd973.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }).then((t4) => e(t4.default));
      return {
        set: t3,
        unset: n3
      };
    }, __vite__mapDeps([6,2])), v2 = (await i(async () => {
      let { default: e2 } = await import("./morphdom-esm-CCTceAlP.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      });
      return {
        default: e2
      };
    }, [])).default, y2 = async (e2, t3) => {
      let n3 = t3.value;
      if (!n3 || n3 === `false` || t3.type === `checkbox` && !t3.checked) _2(u2, e2);
      else {
        switch (t3.type) {
          case `number`:
            n3 = parseInt(n3);
            break;
          case `checkbox`:
            n3 = t3.checked;
            break;
        }
        t3.type === `select-one` && t3.dataset.acceptedTypes.split(`,`).includes(`boolean`) && t3.value === `true` && (n3 = true), t3.type === `text` && t3.dataset.acceptedTypes.split(`,`).includes(`object`) && se(t3.value) && (n3 = JSON.parse(n3)), f2(u2, e2, n3);
      }
      let r3 = document.createElement(`div`);
      r3.innerHTML = H({
        lcn: `X`,
        logo: g,
        name: T.channel,
        ...u2
      }), r3.querySelectorAll(`*`).forEach((e3) => {
        for (let t4 in e3.dataset) [
          `epgSource`,
          `epgId`
        ].includes(t4) || delete e3.dataset[t4];
      }), v2(document.querySelector(`#edit-channel-options .channel`), r3.querySelector(`.channel`), {
        onBeforeElUpdated: (e3, t4) => !(typeof e3.className == `string` && (e3.className === `channel-program` || e3.className.startsWith(`channel-program-`)))
      });
      let i2 = u2.epg?.source && u2.epg?.id ? `${u2.epg.source}|${u2.epg.id}` : null;
      i2 != d2 && (d2 = i2, i2 && $());
    }, b2 = (e2, t3 = ``) => Object.entries(e2).reduce((e3, [n3, r3]) => {
      let i2 = t3 ? `${t3}.${n3}` : n3;
      return r3 && typeof r3 == `object` && !Array.isArray(r3) ? Object.assign(e3, b2(r3, i2)) : e3[i2] = r3, e3;
    }, {}), x2 = (e2 = null) => {
      if (document.querySelector(`#edit-channel`).classList.add(`active`), document.querySelector(`#edit-channel`).animate([
        {
          height: `1.5rem`
        },
        {
          height: `calc(${document.querySelector(`#edit-channel-options`).scrollHeight}px - 2.5rem)`
        }
      ], {
        duration: 500,
        easing: `ease`,
        fill: `forwards`
      }), e2) {
        document.querySelector(`#edit-channel-options .channel`).outerHTML = H(e2);
        let t3 = b2(e2);
        for (let e3 of Object.keys(t3)) document.querySelector(`#edit-channel-options [data-key="${e3}"]`) && !(e3 === `logo` && t3[e3] === g) && (document.querySelector(`#edit-channel-options [data-key="${e3}"]`).value = t3[e3], t3[e3] === true && (document.querySelector(`#edit-channel-options [data-key="${e3}"]`).checked = true), y2(e3, document.querySelector(`#edit-channel-options [data-key="${e3}"]`)));
        for (let e3 of [
          `lcn`,
          `name`,
          `type`,
          `url`
        ]) document.querySelector(`#edit-channel-options`).setAttribute(`data-${e3}`, t3[e3]);
      } else for (let e3 in document.querySelector(`#edit-channel-options`).dataset) delete document.querySelector(`#edit-channel-options`).dataset[e3];
      $();
    };
    document.querySelector(`#edit-channel`).addEventListener(`click`, (e2) => {
      document.querySelector(`#edit-channel-options`).contains(e2.target) || x2();
    }), document.querySelector(`#list-channels`).innerHTML = ``;
    let S2 = (e2) => {
      let n3 = document.createElement(`div`);
      return n3.innerHTML = H(e2), n3.querySelector(`.channel`).insertAdjacentHTML(`beforeend`, `<div class="edit-channel-actions">
            <img class="edit-channel" src="${m}" alt="${T.editList}">
            <img class="delete-channel" src="${h}" alt="${T.deleteList}">
        </div>`), n3.querySelector(`.edit-channel`).addEventListener(`click`, () => x2(e2)), n3.querySelector(`.delete-channel`).addEventListener(`click`, () => {
        if (confirm(T.deleteChannelConfirmation)) {
          document.querySelector(`#list-channels [data-lcn="${e2.lcn}"][data-name="${e2.name}"][data-type="${e2.type}"][data-url="${e2.url}"]`) && document.querySelector(`#list-channels [data-lcn="${e2.lcn}"][data-name="${e2.name}"][data-type="${e2.type}"][data-url="${e2.url}"]`).remove();
          let n4 = r2[t2].channels.filter((t3) => t3.lcn === parseInt(e2.lcn) && t3.name === e2.name && t3.type === e2.type && t3.url === e2.url)[0];
          if (n4) {
            let e3 = r2[t2].channels.indexOf(n4);
            r2[t2].channels.splice(e3, 1), a2();
          }
        }
      }), n3.querySelector(`.channel`);
    };
    if (r2[t2].channels) for (let e2 of r2[t2].channels.sort((e3, t3) => e3.lcn - t3.lcn)) document.querySelector(`#list-channels`).insertAdjacentElement(`beforeend`, S2(e2));
    document.querySelector(`#edit-channel-options`).innerHTML = ``, document.querySelector(`#edit-channel-options`).insertAdjacentHTML(`afterbegin`, H({
      lcn: `X`,
      logo: g,
      name: T.channel
    }));
    let ee2 = l2.properties.channels.items.properties, w2 = l2.properties.channels.items[`meta:channel-editor-groups`];
    for (let e2 of w2) {
      let t3 = Object.fromEntries(Object.entries(ee2).flatMap(([t4, n4]) => n4[`meta:channel-editor-group`] === e2 && n4.type === `object` && n4.properties ? Object.entries(n4.properties).map(([e3, r4]) => [
        `${t4}.${e3}`,
        {
          ...r4,
          "meta:channel-editor-group": n4[`meta:channel-editor-group`]
        }
      ]) : n4[`meta:channel-editor-group`] === e2 ? [
        [
          t4,
          n4
        ]
      ] : []).sort(([, e3], [, t4]) => {
        let n4 = e3.type === `boolean`;
        return n4 === (t4.type === `boolean`) ? 0 : n4 ? 1 : -1;
      })), n3 = [
        `lcn`,
        `name`,
        `type`,
        `url`
      ], r3 = document.createElement(`h4`);
      r3.innerText = T.channelEditorSchema._groups[e2], document.querySelector(`#edit-channel-options`).insertAdjacentElement(`beforeend`, r3);
      let i2 = document.createElement(`div`);
      i2.classList.add(`group-container`);
      for (let e3 of Object.keys(t3)) {
        let r4 = document.createElement(`div`);
        r4.classList.add(`form-group`), r4.classList.add(t3[e3].type);
        let a3 = document.createElement(`label`);
        a3.innerText = typeof T.channelEditorSchema[e3] == `object` ? T.channelEditorSchema[e3][0] : T.channelEditorSchema[e3], a3.setAttribute(`for`, `edit-channel-input--${e3}`);
        let o3 = t3[e3].enum ? document.createElement(`select`) : document.createElement(`input`);
        if (o3.id = `edit-channel-input--${e3}`, o3.classList.add(`edit-channel-input`), o3.dataset.acceptedTypes = t3[e3].type, o3.dataset.key = e3, o3.required = n3.includes(e3), t3[e3].enum) {
          let n4 = document.createElement(`option`);
          n4.value = ``, n4.selected = true, n4.innerText = `N/A`, o3.appendChild(n4);
          let r5 = t3[e3].enum.filter((e4) => e4 != 0);
          for (let t4 of r5) {
            let n5 = document.createElement(`option`);
            n5.value = t4, n5.innerText = `${t4} - ${T.channelEditorSchema[e3][1][t4]}`, o3.appendChild(n5);
          }
          o3.addEventListener(`change`, () => y2(e3, o3));
        } else (t3[e3].type === `string` || t3[e3].type.includes(`string`)) && (o3.placeholder = T.channelEditorSchema[e3][1] ?? T.channelEditorSchema[e3][0]), o3.type = {
          number: `number`,
          string: `text`,
          boolean: `checkbox`
        }[t3[e3].type] ?? `text`, o3.addEventListener(`input`, () => y2(e3, o3));
        r4.appendChild(a3), r4.appendChild(o3), i2.appendChild(r4);
      }
      document.querySelector(`#edit-channel-options`).appendChild(i2);
    }
    document.querySelector(`#edit-channel-options`).insertAdjacentHTML(`beforeend`, `<a class="save-channel"><img src="${g}">${T.saveChannel}</a>`), document.querySelector(`#edit-channel-options .save-channel`).addEventListener(`click`, () => {
      if (![
        ...new Set(Array.from(document.querySelector(`#edit-channel-options`).querySelectorAll(`input, select`)).reverse().map((e2) => e2.reportValidity()))
      ].includes(false)) {
        let e2 = {
          logo: g,
          ...u2
        };
        document.querySelector(`#edit-channel`).classList.remove(`active`), document.querySelector(`#edit-channel`).animate([
          {
            height: `calc(${document.querySelector(`#edit-channel-options`).scrollHeight}px - 2.5rem)`
          },
          {
            height: `1.5rem`
          }
        ], {
          duration: 500,
          easing: `ease`,
          fill: `forwards`
        });
        let n3 = Object.fromEntries(Object.keys(document.querySelector(`#edit-channel-options`).dataset).map((e3) => [
          e3,
          document.querySelector(`#edit-channel-options`).dataset[e3]
        ]));
        if (n3 && document.querySelector(`#list-channels [data-lcn="${n3.lcn}"][data-name="${n3.name}"][data-type="${n3.type}"][data-url="${n3.url}"]`)) {
          document.querySelector(`#list-channels [data-lcn="${n3.lcn}"][data-name="${n3.name}"][data-type="${n3.type}"][data-url="${n3.url}"]`).remove();
          let i3 = r2[t2].channels.filter((e3) => e3.lcn === parseInt(n3.lcn) && e3.name === n3.name && e3.type === n3.type && e3.url === n3.url)[0];
          if (i3) {
            let n4 = r2[t2].channels.indexOf(i3);
            r2[t2].channels[n4] = e2;
          }
        } else r2[t2].channels.push(e2);
        a2();
        let i2 = Array.from(document.querySelector(`#list-channels`).children).filter((t3) => parseInt(t3.dataset.lcn) > e2.lcn)[0];
        i2 ? i2.insertAdjacentElement(`beforebegin`, S2(e2)) : document.querySelector(`#list-channels`).insertAdjacentElement(`beforeend`, S2(e2)), setTimeout(() => {
          document.querySelector(`#edit-channel-options .channel`).outerHTML = H({
            lcn: `X`,
            logo: g,
            name: T.channel
          }), document.querySelector(`#edit-channel-options`).querySelectorAll(`input, select`).forEach((e3) => {
            e3.value = ``, e3.checked = false;
          }), u2 = {}, $();
        }, 500);
      }
    }), $();
  };
  document.querySelectorAll(`#my-list .add-list .create-manually`).forEach((e2) => {
    e2.addEventListener(`click`, () => Re());
  }), document.querySelector(`#my-list-explanation`).style.setProperty(`--height`, `${document.querySelector(`#my-list-explanation`).scrollHeight}px`), document.querySelector(`#my-list-explanation-link`).addEventListener(`click`, () => document.querySelector(`#my-list-explanation-link`).classList.toggle(`active`));
  var ze = () => {
    document.querySelector(`#my-list`).classList.remove(`visible`), document.querySelector(`#channels-column`).classList.add(`favorites-picker-mode`), document.querySelector(`.toast-notification span`).innerText = T.clickChannelToFavorite, document.querySelector(`.toast-notification-container`).classList.add(`visible`), document.querySelector(`.toast-notification-container`).removeAttribute(`hidden`), document.querySelector(`.toast-notification .save-favorites`).addEventListener(`click`, () => {
      document.querySelector(`[data-id="favorites"]`).click(), document.querySelector(`#channels-column`).classList.remove(`favorites-picker-mode`), document.querySelector(`#my-list`).classList.add(`visible`), document.querySelector(`.toast-notification-container`).classList.remove(`visible`), localStorage.removeItem(`todo-edit-favorites`);
    });
  };
  document.querySelector(`#my-list [data-id="favorites"] .edit-list`).addEventListener(`click`, () => {
    localStorage.getItem(`selected-base-list`) == "default" ? ze() : (localStorage.setItem(`todo-edit-favorites`, `true`), localStorage.setItem(`selected-base-list`, `default`), window.location.reload());
  });
  var Be = (e2) => {
    let t2 = document.querySelector(`#list-picker`).classList.contains(`second-tab-active`);
    t2 ? delete O[e2] : delete D[e2], localStorage.setItem(t2 ? `additional-lists` : `base-lists`, JSON.stringify(t2 ? O : D));
    let n2 = t2 ? document.querySelector(`#additional-list-tab`) : document.querySelector(`#base-list-tab`);
    n2.querySelector(`.list[data-id="${e2}"]`).remove(), !n2.querySelector(`.list.selected`) && !t2 && n2.querySelector(`.list[data-id="default"]`).classList.add(`selected`);
  };
  W && (document.querySelector(`#my-list .save-tab`).classList.add(`active`), document.querySelector(`.list.selected`).classList.remove(`selected`), document.querySelector(`.list[data-id="favorites"]`).classList.add(`selected`), ze());
  var Ve = ({ id: e2, name: t2, publisher: n2, icon: r2 = null, publisherLink: i2 = null, donationLink: a2 = null, epg: o2, channels: s2 = e2 }) => {
    let c2 = document.querySelector(`#list-picker`).classList.contains(`second-tab-active`), l2 = c2 ? `additional-lists` : `base-lists`, u2 = JSON.parse(localStorage.getItem(l2)) ?? {};
    if (u2[e2]) alert(`${T.alreadyAddedRemoteList} (${u2[e2].name}).`);
    else {
      u2[e2] = {
        channels: s2,
        name: t2,
        publisher: n2,
        icon: r2,
        publisherLink: i2,
        donationLink: a2,
        epg: o2
      }, localStorage.setItem(l2, JSON.stringify(u2));
      let d2 = c2 ? document.querySelector(`#additional-list-tab`) : document.querySelector(`#base-list-tab`);
      d2.querySelector(`.add-list`).insertAdjacentHTML(`beforebegin`, Fe({
        id: e2,
        name: t2,
        publisher: n2,
        icon: r2,
        publisherLink: i2,
        donationLink: a2
      })), Ie(document.querySelector(`.list[data-id="${e2}"]`), c2), d2.querySelector(`input.add-list-option`).value = ``, document.querySelector(`#my-list .add-list.active`).classList.remove(`active`);
    }
  }, He = async (t2) => {
    let n2, r2 = t2.startsWith(`data:application/gzip,`);
    if (r2) {
      let { decompressSync: e2, strFromU8: r3 } = await i(async () => {
        let { decompressSync: e3, strFromU8: t3 } = await import("./browser-BEaX7hwf.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        });
        return {
          decompressSync: e3,
          strFromU8: t3
        };
      }, []), a2 = atob(t2.replace(`data:application/gzip,`, ``)), o2 = e2(Uint8Array.from(a2, (e3) => e3.charCodeAt(0)));
      n2 = JSON.parse(r3(o2)), n2 = Object.fromEntries(Object.keys(n2).filter((e3) => n2[e3]).map((e3) => [
        e3,
        n2[e3]
      ]));
    } else n2 = await fetch(t2).then((e2) => e2.json()).catch((e2) => alert(`${T.couldntFetchChannelList}: ${e2.stack}`));
    if (n2) {
      n2 = JSON.parse(ce(JSON.stringify(n2)));
      let a2 = await fetch(`${zappr.config.channels.host}/schema.json`).then((e2) => e2.json()).catch(async () => await fetch(`https://channels.zappr.stream/schema.json`).then((e2) => e2.json()).catch(() => false));
      if (a2) {
        let { Validator: o2 } = await i(async () => {
          let { Validator: t3 } = await import("./lib-sKCgOiro.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }).then((t4) => e(t4.default));
          return {
            Validator: t3
          };
        }, __vite__mapDeps([5,2])), s2 = new o2().validate(n2, a2, {
          base: `https://channels.zappr.stream`
        });
        s2.valid || r2 && s2.errors.length === 1 && s2.errors[0].argument === `publisher` ? Ve({
          id: r2 ? crypto.randomUUID() : t2,
          name: n2.name,
          publisher: n2.publisher,
          icon: n2.icon,
          publisherLink: n2.publisherLink,
          donationLink: n2.donationLink,
          epg: n2.epg,
          channels: r2 ? n2.channels : t2
        }) : alert(`${T.listFormatInvalid}:
${s2.errors.toString()}`);
      }
    }
  };
  document.querySelectorAll(`#my-list .load-custom-url`).forEach((e2) => {
    e2.addEventListener(`click`, async () => {
      e2.previousElementSibling.value && e2.previousElementSibling.checkValidity() ? await He(e2.previousElementSibling.value) : alert(T.invalidURL);
    });
  });
  var Ue = (e2) => {
    let t2 = e2;
    if (t2.children.length >= 1) {
      let e3 = document.createElement(`select`), n2 = document.createElement(`option`);
      t2.querySelector(`[selected]`) ? n2.textContent = t2.querySelector(`[selected]`).text : n2.textContent = t2.querySelector(`option`).text, e3.style.cssText += `
            visibility: hidden;
            position: fixed;
        `, e3.appendChild(n2), t2.after(e3);
      let r2 = e3.getBoundingClientRect().width;
      t2.style.width = `${r2}px`, e3.remove(), t2.innerHTML = t2.innerHTML;
    }
  };
  if (document.querySelector(`#region`).addEventListener(`change`, (e2) => {
    document.querySelector(`#region [selected]`) && document.querySelector(`#region [selected]`).removeAttribute(`selected`), new URLSearchParams(location.search).get(`androidtv`) === null && document.querySelector(`#region option[value="${e2.target.value}"]`).setAttribute(`selected`, ``), document.querySelector(`#save-and-reload`).removeAttribute(`hidden`), localStorage.setItem(`region`, document.querySelector(`#region`).value);
  }), new URLSearchParams(location.search).get(`androidtv`) === null && (document.querySelectorAll(`#settings select`).forEach((e2) => {
    Ue(e2), e2.addEventListener(`change`, (e3) => Ue(e3.target));
  }), localStorage.getItem(`selected-base-list`) != "default" && localStorage.getItem(`selected-base-list`) != `favorites`)) {
    let e2 = Array.from(document.querySelector(`#region-selector`).children).slice(2);
    e2.forEach((e3) => e3.setAttribute(`disabled`, true));
    let t2 = e2.map((e3) => e3.scrollWidth).sort((e3, t3) => t3 - e3)[0], n2 = e2.map((e3) => e3.scrollHeight + parseInt(getComputedStyle(e3).marginTop) + parseInt(getComputedStyle(e3).marginBottom)).reduce((e3, t3) => e3 + t3, 0);
    document.querySelector(`#region-selector .disabled-layer`).style.width = `${t2}px`, document.querySelector(`#region-selector .disabled-layer`).style.height = `${n2}px`, document.querySelector(`#region-selector .disabled-layer`).classList.add(`active`), document.querySelector(`#region-selector .disabled-layer`).addEventListener(`click`, () => alert(T.disabledRegionSettings));
  }
  document.querySelector(`#save-and-reload`).addEventListener(`click`, () => {
    localStorage.setItem(`region`, new URLSearchParams(location.search).get(`androidtv`) === null ? document.querySelector(`#region`).value : document.querySelector(`#region input:checked`).value), location.reload();
  });
  var We = null, Ge = document.querySelector(`#icons #install`), Ke = () => {
    We = null, Ge.setAttribute(`hidden`, ``);
  };
  window.addEventListener(`beforeinstallprompt`, (e2) => {
    e2.preventDefault(), We = e2, Ge.removeAttribute(`hidden`);
  }), Ge.addEventListener(`click`, async (e2) => {
    e2.preventDefault(), We && (await We.prompt(), Ke());
  }), window.addEventListener(`appinstalled`, () => {
    Ke();
  }), window.zappr.copyInfo = () => {
    document.querySelector(`.modal .technical-info a`).innerText = T.errorCopiedInfo, document.querySelector(`.modal .technical-info a`).classList.add(`copied`), setTimeout(() => {
      document.querySelector(`.modal .technical-info a`).innerText = T.errorCopyInfo, document.querySelector(`.modal .technical-info a`).classList.remove(`copied`);
    }, 2500);
    let e2 = document.createRange();
    e2.selectNode(document.querySelector(`.modal .code`)), window.getSelection().removeAllRanges(), window.getSelection().addRange(e2), navigator.clipboard.writeText(document.querySelector(`.modal .code`).innerText);
  };
  var qe = 0, Je = null;
  document.querySelector(`#search-input`).addEventListener(`input`, (e2) => {
    let t2 = new DOMParser().parseFromString(e2.target.value.toLowerCase(), `text/html`).documentElement.innerText.trim(), n2 = Date.now() - qe, r2 = Math.max(0, 500 - n2);
    clearTimeout(Je), Je = setTimeout(() => {
      if (t2) {
        let e3 = zappr.channels.filter((e4) => e4.name && e4.name.toLowerCase().includes(t2) || e4.hbbtv && e4.hbbtv.filter((e5) => e5.name && e5.name.toLowerCase().includes(t2)).length > 0 || e4.categorySeparator);
        document.querySelector(`#search-results`).style.display = `block`, document.querySelector(`#channels`).style.display = `none`, document.querySelector(`#search-results`).innerHTML = e3.map((e4) => H(e4)).join(``), document.querySelectorAll(`#search-results .channel, #search-results .hbbtv-enabler`).forEach((e4) => e4.addEventListener(`click`, he)), $(), document.querySelector(`#search`).innerHTML = `#channels > .channel:not([data-lowercase-name*="${t2}"]), #channels > .hbbtv-container > .channel:not([data-lowercase-name*="${t2}"], :has(+ .hbbtv-enabler + .hbbtv-channels > .channel[data-lowercase-name*="${t2}"])), #channels > .hbbtv-container > .channel:not([data-lowercase-name*="${t2}"], :has(+ .hbbtv-enabler + .hbbtv-channels > .channel[data-lowercase-name*="${t2}"])) + .hbbtv-enabler, .hbbtv-mosaic:not([data-lowercase-name*="${t2}"], :has(+ .hbbtv-channels > .channel[data-lowercase-name*="${t2}"])), .channel:not([data-lowercase-name*="${t2}"]) + .hbbtv-enabler + .hbbtv-channels .channel:not([data-lowercase-name*="${t2}"]), .hbbtv-mosaic:not([data-lowercase-name*="${t2}"]) + .hbbtv-channels .channel:not([data-lowercase-name*="${t2}"]), .channel:not([data-lowercase-name*="${t2}"]) + .hbbtv-enabler + .hbbtv-channels .category, .hbbtv-mosaic:not([data-lowercase-name*="${t2}"]) + .hbbtv-channels .category {
        display: none;
    }
    .hbbtv-channels:has([data-lowercase-name*="${t2}"]) {
        height: var(--scroll-height);
        border-bottom: 2px #373737 solid;
    }
    .hbbtv-container:has(.hbbtv-channels [data-lowercase-name*="${t2}"]) > .channel + .hbbtv-enabler {
        height: 2.5rem;
        padding: 0.5rem 0 0.5rem 1rem;
        border-bottom: 2px #373737 solid;
    }
    .hbbtv-container:has(.hbbtv-channels [data-lowercase-name*="${t2}"]) .hbbtv-enabler-arrow {
        transform: rotate(90deg);
    }
    #channels-column .source-header {
        transform: translateY(calc(-2.25rem - 1px));
        user-select: none;
        pointer-events: none;
    }`;
      } else document.querySelector(`#search-results`).style.display = `none`, document.querySelector(`#channels`).style.display = `block`, document.querySelector(`#search`).innerHTML = ``, document.querySelector(`#search-results`).innerHTML = ``;
      qe = Date.now();
    }, r2);
  }), document.querySelector(`#search-icon`).addEventListener(`click`, () => {
    document.querySelector(`#channels-column`).classList.contains(`search-visible`) || document.querySelector(`#search-input input`).focus(), document.querySelector(`#channels-column`).classList.toggle(`search-visible`);
  });
  var $ = async () => {
    for (let e2 in Array.from(document.querySelectorAll(`.channel[data-epg-source]`))) {
      let t2 = document.querySelectorAll(`.channel[data-epg-source]`)[e2], n2 = t2.dataset.epgSource, r2 = t2.dataset.epgId;
      if (window.zappr.epg && window.zappr.epg[n2] && window.zappr.epg[n2][r2]) {
        let e3 = Date.now(), i2 = window.zappr.epg[n2][r2].filter((t3) => t3.startTime.unix <= e3 && t3.endTime.unix >= e3)[0];
        if (i2) {
          t2.classList.remove(`epg-disabled`), t2.querySelector(`.channel-program`).innerHTML = `${i2.name}${i2.season ? ` <b>S${i2.season}</b>` : ` `}${i2.episode ? `<b>E${i2.episode}</b>` : ``}`, t2.querySelector(`.channel-program-start-time`).innerText = l.fromMillis(i2.startTime.unix).toFormat(`HH:mm`), t2.querySelector(`.channel-program-end-time`).innerText = l.fromMillis(i2.endTime.unix).toFormat(`HH:mm`);
          let a2 = (e3 - i2.startTime.unix) / (i2.endTime.unix - i2.startTime.unix) * 100;
          t2.querySelector(`.channel-program-progress`).style.width = `${a2}%`, document.querySelector(`#epg[data-epg-source="${n2}"][data-epg-id="${r2}"] .epg-item-container.on-air`) != null && document.querySelector(`#epg[data-epg-source="${n2}"][data-epg-id="${r2}"] .epg-item-container.on-air`).classList.remove(`on-air`), document.querySelector(`#epg[data-epg-source="${n2}"][data-epg-id="${r2}"] .epg-item-container[data-start-time="${i2.startTime.unix}"]`) != null && document.querySelector(`#epg[data-epg-source="${n2}"][data-epg-id="${r2}"] .epg-item-container[data-start-time="${i2.startTime.unix}"]`).classList.add(`on-air`);
        } else t2.classList.add(`epg-disabled`);
      } else t2.classList.add(`epg-disabled`);
      await Me();
    }
  };
  new URLSearchParams(location.search).get(`lcn`) != null && (P.volume(0), Z(new URLSearchParams(location.search).get(`lcn`)));
  var Ye = localStorage.getItem(`selected-base-list`) != "default" && localStorage.getItem(`selected-base-list`) != `favorites` ? D[localStorage.getItem(`selected-base-list`)]?.epg ? D[localStorage.getItem(`selected-base-list`)].epg : D[localStorage.getItem(`selected-base-list`)]?.epg === false ? `data:text/html,` : B(`${s[S].location}/national`) : B(`${s[S].location}/national`);
  fetch(Ye).then((e2) => e2.json()).then(async (t2) => {
    let { merge: n2 } = await i(async () => {
      let { merge: t3 } = await import("./lodash-CwfZd973.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }).then((t4) => e(t4.default));
      return {
        merge: t3
      };
    }, __vite__mapDeps([6,2]));
    window.zappr.epg = n2({}, window.zappr.epg, t2), localStorage.getItem(`region`) != null && localStorage.getItem(`region`) != `national` && (localStorage.getItem(`selected-base-list`) === "default" || localStorage.getItem(`selected-base-list`) === `favorites`) && await fetch(B(`${s[S].location}/regional/${localStorage.getItem(`region`)}`)).then((e2) => e2.json()).then(async (t3) => {
      let { merge: n3 } = await i(async () => {
        let { merge: t4 } = await import("./lodash-CwfZd973.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }).then((t5) => e(t5.default));
        return {
          merge: t4
        };
      }, __vite__mapDeps([6,2]));
      window.zappr.regionalEPG = t3, window.zappr.epg = n3({}, window.zappr.epg, window.zappr.regionalEPG);
    }).catch(() => {
    }), $();
    let r2 = l.now(), a2 = Math.ceil(r2.second / 15) * 15, o2 = (a2 === 60 ? r2.plus({
      minutes: 1
    }).set({
      second: 0,
      millisecond: 0
    }) : r2.set({
      second: a2,
      millisecond: 0
    })).ts - r2.ts;
    setTimeout(() => {
      $(), setInterval($, 15e3);
    }, o2), W || (document.querySelector(`.toast-notification-container`).classList.remove(`visible`), setTimeout(() => document.querySelector(`.toast-notification-container`).setAttribute(`hidden`, ``), 500));
  }).catch((e2) => {
    console.warn(Ye === `data:text/html,` ? `EPG disabled by base list` : `Can't find EPG: ${e2.stack}`), W || document.querySelector(`.toast-notification-container`).setAttribute(`hidden`, ``), $();
    let t2 = l.now(), n2 = Math.ceil(t2.second / 15) * 15, r2 = (n2 === 60 ? t2.plus({
      minutes: 1
    }).set({
      second: 0,
      millisecond: 0
    }) : t2.set({
      second: n2,
      millisecond: 0
    })).ts - t2.ts;
    setTimeout(() => {
      $(), setInterval($, 15e3);
    }, r2), window.zappr.epg = {};
  });
  for (let e2 of [
    `base-lists`,
    `additional-lists`
  ]) {
    let t2 = JSON.parse(localStorage.getItem(e2)) ?? [], n2 = Object.keys(t2).filter((e3) => U(e3));
    for (let r2 of n2) fetch(r2).then((e3) => e3.json()).then((n3) => {
      t2[r2] = {
        id: r2,
        name: n3.name,
        publisher: n3.publisher,
        icon: n3.icon,
        publisherLink: n3.publisherLink,
        donationLink: n3.donationLink,
        epg: n3.epg
      }, localStorage.setItem(e2, JSON.stringify(t2));
    });
  }
  setTimeout(() => document.querySelector(`.toast-notification-container`).classList.add(`visible`), 1e3), setInterval(async () => {
    window.zappr.nationalEPG = await fetch(B(`${s[S].location}/national`)).then((e2) => e2.json()), localStorage.getItem(`region`) != null && localStorage.getItem(`region`) != `national` && (localStorage.getItem(`selected-base-list`) === "default" || localStorage.getItem(`selected-base-list`) === `favorites`) && await fetch(B(`${s[S].location}/regional/${localStorage.getItem(`region`)}`)).then((e2) => e2.json()).then(async (t2) => {
      let { merge: n2 } = await i(async () => {
        let { merge: t3 } = await import("./lodash-CwfZd973.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }).then((t4) => e(t4.default));
        return {
          merge: t3
        };
      }, __vite__mapDeps([6,2]));
      window.zappr.regionalEPG = t2, window.zappr.epg = n2({}, window.zappr.epg, window.zappr.regionalEPG);
    });
  }, 36e5), document.querySelector(`#epg-exit`).addEventListener(`click`, () => {
    document.querySelector(`#channels-column`).classList.remove(`epg-visible`), document.querySelector(`#channels-column`).classList.remove(`epg-expanded`);
  }), document.querySelector(`#epg-resize`).addEventListener(`click`, () => document.querySelector(`#channels-column`).classList.toggle(`epg-expanded`)), document.querySelector(`#epg-next-day`).addEventListener(`click`, () => {
    let e2 = document.querySelector(`.epg-items.active`), t2 = e2.nextElementSibling;
    e2.animate({
      left: `-100%`
    }, {
      duration: 750,
      fill: `forwards`,
      easing: `ease`
    }), t2 != null && (t2.nextElementSibling === null ? document.querySelector(`#epg-date`).classList.add(`last-day`) : document.querySelector(`#epg-date`).classList.remove(`last-day`), t2.previousElementSibling && t2.previousElementSibling.id === `epg-header` ? document.querySelector(`#epg-date`).classList.add(`first-day`) : document.querySelector(`#epg-date`).classList.remove(`first-day`), t2.animate({
      left: `0`
    }, {
      duration: 750,
      fill: `forwards`,
      easing: `ease`
    }), t2.classList.add(`active`), e2.classList.remove(`active`), document.querySelector(`#epg-date span`).animate({
      transform: `translateX(-25%)`,
      opacity: 0
    }, {
      duration: 500,
      fill: `forwards`,
      easing: `ease`
    }), setTimeout(() => {
      document.querySelector(`#epg-date span`).innerText = l.fromFormat(t2.dataset.date, `yyyy-MM-dd`).setLocale(w).toLocaleString(l.DATE_FULL), document.querySelector(`#epg-date span`).animate([
        {
          transform: `translateX(25%)`,
          opacity: 0
        },
        {
          transform: `translateX(0)`,
          opacity: 1
        }
      ], {
        duration: 500,
        fill: `forwards`,
        easing: `ease`
      });
    }, 250));
  }), document.querySelector(`#epg-previous-day`).addEventListener(`click`, () => {
    let e2 = document.querySelector(`.epg-items.active`), t2 = e2.previousElementSibling;
    e2.animate({
      left: `100%`
    }, {
      duration: 750,
      fill: `forwards`,
      easing: `ease`
    }), t2 != null && (t2.nextElementSibling === null ? document.querySelector(`#epg-date`).classList.add(`last-day`) : document.querySelector(`#epg-date`).classList.remove(`last-day`), t2.previousElementSibling && t2.previousElementSibling.id === `epg-header` ? document.querySelector(`#epg-date`).classList.add(`first-day`) : document.querySelector(`#epg-date`).classList.remove(`first-day`), t2.animate({
      left: `0`
    }, {
      duration: 750,
      fill: `forwards`,
      easing: `ease`
    }), e2.classList.remove(`active`), t2.classList.add(`active`), document.querySelector(`#epg-date span`).animate({
      transform: `translateX(25%)`,
      opacity: 0
    }, {
      duration: 500,
      fill: `forwards`,
      easing: `ease`
    }), setTimeout(() => {
      document.querySelector(`#epg-date span`).innerText = l.fromFormat(t2.dataset.date, `yyyy-MM-dd`).setLocale(w).toLocaleString(l.DATE_FULL), document.querySelector(`#epg-date span`).animate([
        {
          transform: `translateX(-25%)`,
          opacity: 0
        },
        {
          transform: `translateX(0%)`,
          opacity: 1
        }
      ], {
        duration: 500,
        fill: `forwards`,
        easing: `ease`
      });
    }, 250));
  }), window.self !== window.top && document.referrer && (new URL(document.referrer).hostname.endsWith(`kritere.com`) || new URL(document.referrer).hostname.endsWith(`musicletter.it`)) && (document.body.innerHTML = `<div id="block-message"><h2>Questo sito sta incorporando Zappr, un sito gratuito per guardare la TV italiana online, coprendone il nome e generando introiti tramite la pubblicit\xE0.</h2><a href="https://zappr.stream" class="button primary" target="_blank">Clicca qui per passare alla versione vera di Zappr (senza pubblicit\xE0 e a schermo intero).</a></div>`, window.addEventListener(`click`, () => window.open(`https://zappr.stream`, `_blank`)));
})();
