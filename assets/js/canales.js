/* 
Guía rápida:

    'nombre': {                   (Nombre objeto/canal, no repetir entre señales debe ser único (sin espacios))
        'nombre': 'nombre'        (Nombre del canal a mostrar en botón y barra que dirige a su origen cuando esta activo)

tipos de enlaces posibles [Recordar utilizar solo enlaces https si se aloja en GitHub y solo 1 tipo por canal/señal]:

        'iframeURL': 'url'        (contenido que va dentro de un m3u8 (un embed directo))
        'm3u8URL': 'url'          (para enlaces ".m3u8", no listas ".m3u". Solo canales individuales)
        'ytID': 'url'             (ID referente a un canal de Youtube [https://www.youtube.com/channel/"ytID"]. NO REQUIERE 'fuente' DEBIDO A REDUNDANCIA)

        'fuente': 'url'           ("fuente" es el enlace de origen de la señal, a modo de transparencia y libertad de abandonar la página si solo se quiere continuar con dicha señal, si se extrae una señal ya sea tipo "m3u8" o "m3u8" de www.pagina-ejemplo.cl debe de ponerse www.pagina-ejemplo.cl en "fuente". Si no se obtiene señal desde el emisor oficial como tal, se utiliza el sitio del emisor sobre el de terceros (ejemplo: saque canal de una lista IPTV, por lo que pongo el sitio del canal, no la lista IPTV. Ya que eso va en el listado de canales en archivo README))
    }

by Alplox 
https://github.com/Alplox/la-tele
*/

const listaCanales = {
    // CHILE
    'EnerGeek': {
        'nombre': 'EnerGeek Señal 1',
        'm3u8URL': 'https://wifiexpert-1.energeek.cl/energeek/canal-1/playlist.m3u8',
        'fuente': 'https://energeek.cl/en-vivo'
    },    
    'FanpopTV': {
        'nombre': 'Fanpop TV',
        'm3u8URL': 'https://wifiexpert-1.energeek.cl/energeek/canal-2/playlist.m3u8',
        'fuente': 'https://energeek.cl/en-vivo'
    },  
    'EnerGeekRadio': {
        'nombre': '<i class="ai-music-album"></i> EnerGeek Radio TV',
        'm3u8URL': 'https://wifiexpert-1.energeek.cl/energeek/radio/playlist.m3u8',
        'fuente': 'https://energeek.cl/en-vivo/'
    },
    'CCPRadio': {
        'nombre': '<i class="ai-music-album"></i> CCP Radio',
        'm3u8URL': 'https://wifiexpert-1.energeek.cl/energeek/canal-3/playlist.m3u8',
        'fuente': 'https://ccpradio.cl/'
    },    
    'DreikoTV': {
        'nombre': 'Dreiko TV',
        'm3u8URL': 'https://wifiexpert-1.energeek.cl/dreikotv/canal-1/playlist.m3u8',
        'fuente': 'https://dreikotv.com'
    },  
    'AnimeStation': {
        'nombre': 'AnimeStation TV',
        'm3u8URL': 'https://tgn.bozztv.com/ssh101/ssh101/livestreamingtv/playlist.m3u8',
        'fuente': 'https://animestationtv.com/'
    },
    'LatinoKids': {
        'nombre': 'Latino Kids TV',
        'm3u8URL': 'https://6362ca6f1fc28.streamlock.net/8062/8062/playlist.m3u8',
        'fuente': 'https://latinokids.online'
    },
    'AnimaxRevival': {
        'nombre': 'Animax Revival',
        'm3u8URL': 'https://streaming.zappix.live:3062/live/animaxlive.m3u8',
        'fuente': 'https://animax.lat/'
    },
    'VariedTV': {
        'nombre': 'Varied TV',
        'm3u8URL': 'https://6362ca6f1fc28.streamlock.net:443/8066/8066/playlist.m3u8',
        'fuente': 'https://www.variedtv.online/'
    },
    'MaximaTV': {
        'nombre': 'Maxima TV',
        'm3u8URL': 'https://vivo.solumedia.com:19360/corrientes/corrientes.m3u8',
        'fuente': 'https://maximatv.netlify.app/vivo'
    },
    'LMS': {
        'nombre': 'Canal LMS',
        'm3u8URL': 'https://xhateaec.com:8800/hls/luisms123/luisms123/3a284573bc0e0e0f0f9a521d86a4f393/index.m3u8',
        'fuente': 'https://energeek.cl/'
    },
    'ACSNetwork': {
        'nombre': 'ACS Network TV',
        'm3u8URL': 'https://5790d294af2dc.streamlock.net/acsnetwork/acsnetwork/playlist.m3u8',
        'fuente': 'https://acsnetwork.tv/'
    },
    'Gogoplay': {
        'nombre': 'Gogoplay TV',
        'm3u8URL': 'https://tgn.bozztv.com/ssh101/ssh101/gogoplay/playlist.m3u8',
        'fuente': 'https://www.gogoplaytv.com/'
    },
    'Rewind': {
        'nombre': 'Rewind TV',
        'm3u8URL': 'https://tls-cl.cdnz.cl/rewindtv/live/playlist.m3u8',
        'fuente': 'https://rewindtv.cl/'
    },
    'SpectrumTV': {
        'nombre': 'Spectrum Channel',
        'm3u8URL': 'https://panel.miplay.cl:8081/spectrumchannel/index.m3u8',
        'fuente': 'https://spectrumtv.cl/'
    },
    'DragCh': {
        'nombre': 'Drag Channel',
        'm3u8URL': 'https://panel.miplay.cl:8081/radioq/index.m3u8',
        'fuente': 'https://spectrumtv.cl/'
    },
    'PopTV': {
        'nombre': 'Pop TV',
        'm3u8URL': 'https://v4.tustreaming.cl/poptv/index.m3u8',
        'fuente': 'https://www.radiopop.cl/'
    },
    'InvasivaMedia': {
        'nombre': 'LIM TV',
        'm3u8URL': 'https://tv.invasivamedia.com/hls/limtv.m3u8',
        'fuente': 'https://www.invasivamedia.com/'
    },
    'CMT': {
        'nombre': 'CMT Argentina',
        'm3u8URL': 'https://streaming.zappix.live:3960/hybrid/play.m3u8',
        'fuente': 'https://www.canal6.eu.org/'
    },
    'TBS1': {
        'nombre': 'TBS Sur',
        'm3u8URL': 'https://streaming.zappix.live:3759/live/tbsfeedsurlive.m3u8',
        'fuente': 'https://twitter.com/complejosurnet'
    },
    'TBS2': {
        'nombre': 'TBS Panregional',
        'm3u8URL': 'https://streaming.zappix.live:3962/live/tbsfeedpanlive.m3u8',
        'fuente': 'https://twitter.com/Toonizaki2'
    },
    'VoiceOver': {
        'nombre': '<i class="ai-music-album"></i> VoiceOver RadioTV',
        'm3u8URL': 'https://cloudvideo.servers10.com:8081/8198/index.m3u8',
        'fuente': 'https://voiceovercr.com'
    }, 
    'MoniTV': {
        'nombre': 'Moni TV',
        'm3u8URL': 'https://tv.streaming-chile.com:1936/ngencrcbyy/ngencrcbyy/playlist.m3u8',
        'fuente': 'https://m3u.cl/lista-iptv-chile.php'
    }, 
    'MaximaR': {
        'nombre': '<i class="ai-music-album"></i> Maxima Radio',
        'm3u8URL': 'https://server1.oklanet.cl:1936/maximavideo1/maximavideo1/playlist.m3u8',
        'fuente': 'https://maximachile.cl'
    }, 
    'SubelaR': {
        'nombre': '<i class="ai-music-album"></i> Subela Radio',
        'm3u8URL': 'https://mdstrm.com/live-stream-playlist/5fad9b1d978fe1080e3ac4a8.m3u8',
        'fuente': 'https://www.subela.cl/'
    },
    'PlanetaP': {
        'nombre': 'PlanetaTV Peliculas',
        'm3u8URL': 'https://scl.edge.grupoz.cl/movie/live/playlist.m3u8',
        'fuente': 'https://planetatv.cl/planetatv-movie/'
    }, 
    'PlanetaF': {
        'nombre': 'PlanetaTV Family',
        'm3u8URL': 'https://scl.edge.grupoz.cl/planetatvkids/live/playlist.m3u8',
        'fuente': 'https://planetatv.cl/planetatv-family/'
    }, 
    'PlanetaM': {
        'nombre': '<i class="ai-music-album"></i> PlanetaTV Music',
        'm3u8URL': 'https://scl.edge.grupoz.cl/music/live/playlist.m3u8',
        'fuente': 'https://planetatv.cl/planetatv-en-vivo/'
    },
    'MagicT': {
        'nombre': 'Magic Club',
        'm3u8URL': 'https://streaming.zappix.live:3538/live/toonizakilive.m3u8',
        'fuente': 'https://www.magicclub.com.ar'
    }, 
    'MagicK': {
        'nombre': 'Magic Kids',
        'm3u8URL': 'https://magicstream.ddns.net/magicstream/stream.m3u8',
        'fuente': 'https://magickids.site'
    },
    'C2SA': {
        'nombre': 'Canal 2 San Antonio',
        'm3u8URL': 'https://unlimited1-cl-isp.dps.live/canal2/canal2.smil/canal2/livestream1/playlist.m3u8',
        'fuente': 'https://cablenoticias.cl'
    },
    'Bayres': {
        'nombre': 'BayresTV',
        'm3u8URL': 'https://streaming02.gbasat.com.ar:19360/bayrestv/bayrestv.m3u8',
        'fuente': 'https://www.bayrestv.com.ar/'
    },
    'GenTV': {
        'nombre': 'GenTV Digital',
        'm3u8URL': 'https://inliveserver.com:1936/14056/14056/playlist.m3u8',
        'fuente': 'https://gentvoficial.com/'
    },
    'masfm': {
        'nombre': '<i class="ai-music-album"></i> Más FM',
        'm3u8URL': 'https://vivo.solumedia.com:19360/masfm/masfm.m3u8',
        'fuente': 'https://masfm.com/emisora/'
    },
    'Sicardi': {
        'nombre': '<i class="ai-music-album"></i> Sicardi TV',
        'm3u8URL': 'https://vivo.solumedia.com:19360/sicarditv/sicarditv.m3u8',
        'fuente': 'https://sicarditv.com.ar/'
    },
    'telemax': {
        'nombre': 'TeleMAX',
        'm3u8URL': 'https://live-edge01.telecentro.net.ar/live/smil:tlx.smil/playlist.m3u8',
        'fuente': 'https://telemax.com.mx/'
    },
    '3conce': {
        'nombre': 'El 3 de Conce',
        'm3u8URL': 'https://oracle.streaminghd.cl/8016/8016/index.m3u8',
        'fuente': 'https://el3deconce.cl/'
    },
    'granjatv': {
        'nombre': 'La Granja TV',
        'm3u8URL': 'https://oracle.streaminghd.cl/8126/8126/index.m3u8',
        'fuente': 'https://www.lagranja.tv/'
    },
    'pichilemu': {
        'nombre': 'Pichilemu TV',
        'm3u8URL': 'https://5ff3d9babae13.streamlock.net/8028/8028/index.m3u8',
        'fuente': 'https://pichilemutv.org/'
    },
    'xabardi': {
        'nombre': 'XabardiTV',
        'm3u8URL': 'https://infantil-crtvg.flumotion.com/playlist.m3u8',
        'fuente': 'http://www.crtvg.es/en-directo/canles-directos-tvg/xabarin-tv'
    },
    'telezion': {
        'nombre': 'Telezion',
        'm3u8URL': 'https://paneltv.net:3751/hybrid/play.m3u8',
        'fuente': 'http://www.infinita.cl/home/'
    },
    'retroplay': {
        'nombre': 'RetroPlay TV',
        'm3u8URL': 'https://v4.tustreaming.cl/retroplaytv/playlist.m3u8',
        'fuente': 'https://www.youtube.com/@retroplayTVoficial/featured'
    },
    'retroplus3': {
        'nombre': 'Retro Plus Señal 3',
        'm3u8URL': 'https://59f1cbe63db89.streamlock.net:1443/retroplussenal3/_definst_/retroplussenal3/playlist.m3u8',
        'fuente': 'https://www.aeradio.cl/'
    },
    'caracola': {
        'nombre': 'Caracola TV',
        'm3u8URL': 'https://wifispeed.trapemn.tv:1936/comunales/caracola-tv/playlist.m3u8',
        'fuente': 'https://www.caracolatv.cl/'
    },
    'standup': {
        'nombre': 'Solo StandUp',
        'm3u8URL': 'https://paneltv.online:1936/8116/8116/playlist.m3u8',
        'fuente': 'https://solostandup.com'
    },
    'ucvtv1': {
        'nombre': 'UCV Televisión',
        'm3u8URL': 'https://unlimited2-cl-isp.dps.live/ucvtv2/ucvtv2.smil/ucvtv2/livestream2/playlist.m3u8',
        'fuente': 'https://ucvtv.cl/home.php'
    },
    'ucveventos': {
        'nombre': 'UCV Eventos',
        'm3u8URL': 'https://unlimited10-cl.dps.live/ucvtveventos/ucvtveventos.smil/ucvtveventos/livestream1/playlist.m3u8',
        'fuente': 'https://ucvtv.cl/home.php'
    },
    'neotvd': {
        'nombre': 'NeoTV Digital',
        'm3u8URL': 'https://videostream.shockmedia.com.ar:19360/neotvdigital/neotvdigital.m3u8',
        'fuente': 'https://neotvdigital.com.ar/'
    },
    'nexthd': {
        'nombre': 'Next HD',
        'm3u8URL': 'https://live.enhdtv.com:19360/nexthd/nexthd.m3u8',
        'fuente': 'https://nexthdpy.blogspot.com/'
    },
    'exptv': {
        'nombre': 'Exprezion TV',
        'm3u8URL': 'https://vdochile.com:3774/live/cnrhiawklive.m3u8',
        'fuente': 'https://www.exprezion.cl/'
    },
    'umag2': {
        'nombre': '<i class="ai-music-album"></i> UMAG 2',
        'm3u8URL': 'https://tls-cl.cdnz.cl/umag2/live/playlist.m3u8',
        'fuente': 'https://www.umagtv.cl/blank-2'
    },
    'radioz': {
        'nombre': '<i class="ai-music-album"></i> Radio Zeta',
        'm3u8URL': 'https://unlimited1-cl-isp.dps.live/radioztv/radioztv.smil/playlist.m3u8',
        'fuente': 'https://www.radiozeta.cl'
    },
    'ntv': {
        'nombre': 'NTV',
        'm3u8URL': 'https://marine2.miplay.cl/ntv/playlist.m3u8',
        'fuente': 'https://ntv.cl'
    },
    'canal6': {
        'nombre': 'Canal 6',
        'm3u8URL': 'https://panel.dattalive.com/8166/8166/playlist.m3u8',
        'fuente': 'https://www.facebook.com/canal6mardelplata'
    },
    'vplus': {
        'nombre': 'Vision Plus TV',
        'm3u8URL': 'https://v2.tustreaming.cl/visionplustv/index.m3u8',
        'fuente': 'https://www.visionplustv.cl/'
    },
    'ziza': {
        'nombre': 'ZIZA TV',
        'm3u8URL': 'https://v2.tustreaming.cl/zizatv/index.m3u8',
        'fuente': 'https://ziza.cl/'
    },
    'sativa': {
        'nombre': 'SATIVA TV',
        'm3u8URL': 'https://5ff3d9babae13.streamlock.net/8006/8006/playlist.m3u8',
        'fuente': 'https://radiopasionfm.cl/sativatv-sigue-creciendo-y-ya-esta-en-mevatel/'
    },
    'ruidostv': {
        'nombre': 'Ruidos TV',
        'm3u8URL': 'https://panel.tvstream.cl:1936/8022/8022/playlist.m3u8',
        'fuente': 'http://tv.ruidosfm.cl/'
    },
    'dancefm': {
        'nombre': '<i class="ai-music-album"></i> Dance FM',
        'm3u8URL': 'https://5eaccbab48461.streamlock.net:1936/dancefm_1/dancefm_1/playlist.m3u8',
        'fuente': 'https://www.dancefm.cl'
    },
    'wapp': {
        'nombre': 'Wapp TV',
        'm3u8URL': 'https://us-b4-p-e-qg12.cdn.mdstrm.com/live-stream/6046495ddf98b007fa2fe807/publish/media_1000.m3u8',
        'fuente': 'https://prensa.presidencia.cl/streaming.aspx'
    },
    'americatv': {
        'nombre': 'AmericaTV Chile',
        'm3u8URL': 'https://v2.tustreaming.cl/radioamericatv/index.m3u8',
        'fuente': 'https://www.radioamerica.cl'
    },
    'tv-mas': {
        'nombre': 'TV+',
        'm3u8URL': 'https://mdstrm.com/live-stream-playlist/5c0e8b19e4c87f3f2d3e6a59.m3u8',
        'fuente': 'https://www.tvmas.tv/'
    },
    'tv-mas-2': {
        'nombre': 'TV+ 2',
        'm3u8URL': 'https://mdstrm.com/live-stream/5c0e8b19e4c87f3f2d3e6a59?autoplay=true&volume=0',
        'fuente': 'https://www.tvmas.tv/'
    },
    'contivision': {
        'nombre': 'Contivisión',
        'm3u8URL': 'https://unlimited2-cl-isp.dps.live/cm/cm.smil/cm/livestream1/chunks.m3u8',
        'fuente': 'https://contivision.cl/'
    }
}


// canales de lista m3u https://jsfiddle.net/onigetoc/f26zuLtw/
function m3utojson(m3u) {
    return m3u
        .replace('#EXTM3U', '')
        .split('#EXTINF:-1 ')
        .slice(1)
        .map(function(str, index) {
            let channel = str.split('\n').slice(0,-1);
			if(channel[1].indexOf('m3u8') >= 0){
            /* 
                    channel[0].split('"')[0]
                        | channel[0].split('"')[1]
                        |    |   channel[0].split('"')[2]
                        |    |      |    channel[0].split('"')[3]   
                        |    |      |        |     channel[0].split('"')[4]  
                        |    |      |        |         |      channel[0].split('"')[5]          
                        |    |      |        |         |             |        channel[0].split(',')[1]    
                        __|__  |  ____|___   __|__   ____|___   _______|______    ___|__
                    |     | | |        | |     | |        | |              |  |      |
            #EXTINF:-1 tvg-id="1" tvg-name="nombre1" tvg-logo="https://foto.png", nombre1
            https://enlace.m3u8
            -------|-----------
                channel[1]

            */
                return {
                 "id": index + 1,
                 "tvg-id": channel[0].split('"')[1],
                 "title": channel[0].split('"')[3],
                 "name": channel[0].split(',')[1],
                 "m3u8URL": channel[1].replace('http://', 'https://')                        
                }
			}
        });
}

// M3U NeoTV.cl
let m3u = `
#EXTINF:-1  tvg-logo="https://i.imgur.com/2HZW3E2.png" group-title="Más canales pronto..." tvg-id="C1", EnerGeek Retro
https://wifispeed.trapemn.tv:1936/infantil/energeek-1/playlist.m3u8
`

let parseM3u = m3utojson(m3u);
