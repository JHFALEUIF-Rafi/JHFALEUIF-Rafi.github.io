// Nuestra Historia: momentos de cada mes, tal cual nos los escribimos
// de: "R" = Rafi, "C" = Carito | hora: "8:40p" o "9:15a"
const historia = [
    {
        mes: "Octubre 2025",
        titulo: "Donde todo empezó",
        momentos: [
            {
                fecha: "2025-10-14",
                titulo: "Cómo empezaste a ser Carito",
                mensajes: [
                    { de: "R", hora: "8:40p", texto: "Oe cual nombre te gusta mas Daniela o Carollll?" },
                    { de: "C", hora: "8:43p", texto: "la verdad, respondo por los dos haha" },
                    { de: "R", hora: "8:56p", texto: "Ah vava, es que preguntaba xq dije le voy a decir Carol" },
                    { de: "C", hora: "9:09p", texto: "siii, haha si te gusta, dime así" }
                ]
            },
            {
                fecha: "2025-10-16",
                titulo: "La primera invitación",
                mensajes: [
                    { de: "R", hora: "7:24p", texto: "Por cierto quisieras ir conmigo y un panita a ver fnaf" },
                    { de: "C", hora: "7:25p", texto: "siii" },
                    { de: "C", hora: "8:59p", texto: "si te aburres o te empieza a dar sueño, yo te mando mensajes aunque sea para que te rias y no te duermas" }
                ]
            },
            {
                fecha: "2025-10-20",
                titulo: "El día que me dijiste lindo",
                mensajes: [
                    { de: "C", hora: "7:08p", texto: "alguna vez te he dicho que eres muy lindo?" },
                    { de: "R", hora: "7:09p", texto: "Emmm nop" },
                    { de: "C", hora: "7:10p", texto: "pues lo eres" }
                ]
            },
            {
                fecha: "2025-10-21",
                titulo: "Día 1",
                mensajes: [
                    { de: "R", hora: "12:31a", texto: "Bai, se te quiereee" },
                    { de: "R", hora: "12:31a", texto: "Descansaaaaa" }
                ]
            },
            {
                fecha: "2025-10-22",
                titulo: "Noche de estudio",
                mensajes: [
                    { de: "R", hora: "9:29p", texto: "Tu puedeeees dale hasta el último, me quedaré y checaré que todo vaya bien hasta que duermas" },
                    { de: "R", hora: "11:11p", texto: "No me voy hasta que te duermassss" }
                ]
            },
            {
                fecha: "2025-10-23",
                titulo: "Lo que quedó claro",
                mensajes: [
                    { de: "R", hora: "10:10p", texto: "Tu me quieres?" },
                    { de: "C", hora: "10:11p", texto: "si obviamente" },
                    { de: "R", hora: "10:13p", texto: "PUES YO TAMBIEN GUAPAAAAA" },
                    { de: "R", hora: "11:13p", texto: "Y yo cuando me dijiste lindo me enamoraste entonces mira como se da la vuelta la tortilla" }
                ]
            },
            {
                fecha: "2025-10-27",
                titulo: "Tu primera gran nota",
                mensajes: [
                    { de: "C", hora: "12:17p", texto: "AHHHHH estoy muy feeeliz hahaha (primera vez desde que entré a la uni)" },
                    { de: "R", hora: "12:20p", texto: "ESA ES" },
                    { de: "R", hora: "7:47p", texto: "Se te quiere" },
                    { de: "C", hora: "7:48p", texto: "yo igual <3" }
                ]
            },
            {
                fecha: "2025-10-31",
                titulo: "Día del médico veterinario",
                mensajes: [
                    { de: "C", hora: "3:03p", texto: "por cierto no me felicitaste en mi día :)" },
                    { de: "R", hora: "3:16p", texto: "En todo caso feliz diaaaa mi querida veterinaria (yo sé que no lo arregla pero almenos lo dije D: )" },
                    { de: "C", hora: "3:25p", texto: "lo acepto pero me ofende :)" },
                    { de: "C", hora: "3:25p", texto: "estoy resentida :)))" }
                ]
            }
        ]
    },
    {
        mes: "Noviembre 2025",
        titulo: "Helados de pistacho y canciones",
        momentos: [
            {
                fecha: "2025-11-04",
                mensajes: [
                    { de: "R", hora: "5:14p", texto: "Tu por el contrario, cumples todo lo que he buscado <3" },
                    { de: "C", hora: "7:10p", texto: "aaay que labiaaa HAHAHA" }
                ]
            },
            {
                fecha: "2025-11-05",
                mensajes: [
                    { de: "C", hora: "7:53p", texto: "y si llueve que? hahaha" },
                    { de: "R", hora: "7:53p", texto: "Nos resfriamos juntos entonces <3" }
                ]
            },
            {
                fecha: "2025-11-06",
                titulo: "El primer te amo",
                mensajes: [
                    { de: "R", hora: "6:32p", texto: "Y no me quedaré tranquilo hasta verte comiendo ese helado de pistache y sonriendo" },
                    { de: "R", hora: "8:01p", texto: "Caritooooooooo, te amoooo" },
                    { de: "C", hora: "8:02p", texto: "eh?" },
                    { de: "R", hora: "8:02p", texto: "Solo quería transmitirte eso, pero ajá como algo más sutil" }
                ]
            },
            {
                fecha: "2025-11-11",
                mensajes: [
                    { de: "C", hora: "11:20a", texto: "ni se te ocurra dejarme sola con ellos :)" },
                    { de: "R", hora: "11:21a", texto: "Antes muerto, tu tranquila <3" }
                ]
            },
            {
                fecha: "2025-11-12",
                titulo: "Nuestras canciones",
                mensajes: [
                    { de: "C", hora: "9:18p", texto: "yo yo, no te voy a dedicar pero te mando una canción para que me recuerdes" },
                    { de: "C", hora: "9:43p", texto: "a ver esta, si es muuuy personal, es mi favorita favorita" },
                    { de: "R", hora: "9:59p", texto: "Me la guardareeee, en serio Carito pase lo que pase estoy de tu lado si? Y está rolita me la llevo a la tumba" }
                ]
            },
            {
                fecha: "2025-11-14",
                mensajes: [
                    { de: "C", hora: "8:34a", texto: "dale, te estoy confiando 1/4 de mi vida hahaha" },
                    { de: "R", hora: "8:35a", texto: "Nah tu tranquila esto yo lo cuido hasta con sangre si es necesario" }
                ]
            },
            {
                fecha: "2025-11-15",
                titulo: "Tu primer dibujo digital",
                mensajes: [
                    { de: "C", hora: "6:32p", texto: "RAFFAAAAA" },
                    { de: "C", hora: "6:32p", texto: "ESTO ESTA INCREIBLEEEEE HAHAHA" },
                    { de: "C", hora: "6:32p", texto: "ME ENCANTAAAAA" },
                    { de: "R", hora: "6:39p", texto: "No sabes cómo me alegra escuchar eso jaja" }
                ]
            },
            {
                fecha: "2025-11-17",
                mensajes: [
                    { de: "R", hora: "1:23a", texto: "Lo hago por ti mensa" },
                    { de: "C", hora: "1:24a", texto: "no me digas mensa, menso :)" },
                    { de: "R", hora: "1:25a", texto: "Te amoooo" }
                ]
            },
            {
                fecha: "2025-11-20",
                mensajes: [
                    { de: "R", hora: "6:57p", texto: "Gracias Carito por mejorar mis días o bueno eliminar mi aburrida rutina" },
                    { de: "C", hora: "6:57p", texto: "me estas cortando?" },
                    { de: "R", hora: "6:57p", texto: "Que? Nononononono" },
                    { de: "R", hora: "6:58p", texto: "Estoy apreciando tu compañia" },
                    { de: "R", hora: "6:58p", texto: "En serio gracias <3" }
                ]
            },
            {
                fecha: "2025-11-25",
                mensajes: [
                    { de: "C", hora: "7:00p", texto: "lit lo único bueno fué haber conocido a la de histo, al morfo y a ti :)" }
                ]
            }
        ]
    },
    {
        mes: "Diciembre 2025",
        titulo: "Tus 20 años",
        momentos: [
            {
                fecha: "2025-12-04",
                titulo: "Los cubos",
                mensajes: [
                    { de: "R", hora: "5:22p", texto: "Btw, me dijiste PANA aurita me di cuenta :)))" },
                    { de: "R", hora: "5:45p", texto: "Que no soy tu pana, soy tu 🍯:'v" },
                    { de: "C", hora: "5:50p", texto: "ay no seas dramático :)" },
                    { de: "C", hora: "5:50p", texto: "HAHAHAHAHAHA y todavía que te auto nombras" }
                ]
            },
            {
                fecha: "2025-12-05",
                mensajes: [
                    { de: "C", hora: "10:38a", texto: "hey hey despacio cerebrito :)" },
                    { de: "C", hora: "10:38a", texto: "con bolitas" },
                    { de: "C", hora: "8:36p", texto: "ya lo armé :)))" },
                    { de: "R", hora: "8:36p", texto: "Vessss, así se va aprendiendo" },
                    { de: "R", hora: "8:36p", texto: "Me alegro mucho Carito" }
                ]
            },
            {
                fecha: "2025-12-06",
                mensajes: [
                    { de: "C", hora: "3:12p", texto: "nadieeee nunca me ha ganado en los go karts :)" },
                    { de: "R", hora: "3:14p", texto: "Hay una primera vez para todo dicen" },
                    { de: "C", hora: "3:15p", texto: "nono, jamássss" }
                ]
            },
            {
                fecha: "2025-12-11",
                titulo: "Los Game Awards",
                mensajes: [
                    { de: "R", hora: "3:51p", texto: "Por ciertoooo, tenemos los Game awards a las 6 pilaaaas" },
                    { de: "C", hora: "4:16p", texto: "me llamaasss" },
                    { de: "R", hora: "4:22p", texto: "Sisisi <3" }
                ]
            },
            {
                fecha: "2025-12-12",
                titulo: "Tu cumpleaños",
                mensajes: [
                    { de: "R", hora: "1:54a", texto: "Caritoooo, monamurrr, preciosa bella, talentosa, carita de ángel, corazon de melón chiquito redondo, hermosa reina guapa, mona, mi amor, mi niña,  jefe fiera crack máquina tifón número 1 elden ring Expedition 33, thelast of US. Buenos diaaaaas." },
                    { de: "R", hora: "1:56a", texto: "De verdad espero que desde que te despiertes puedas disfrutar este día, no solo porque es tu cumpleaños, sino porque cumples 20 y es una edad muy importante, tu sabes que te quiero un montonsisimo y que en todo lo que me sea posible estaré a tu lado." },
                    { de: "C", hora: "6:53a", texto: "HAHAHAHAHA la personalización 20/10" },
                    { de: "C", hora: "6:56a", texto: "Aw, muchisisisisisisimas gracias (diría el chavo) te quiero un mundooo, gracias por estar ahí siempre, de todas las formas, por hacerme reir, por acompañarme, por todo, yo sé que no lo digo pero de verdad lo valoro, te agradezco de todo corazón ❤️" }
                ]
            },
            {
                fecha: "2025-12-12",
                titulo: "La primera versión de esta página",
                mensajes: [
                    { de: "C", hora: "10:16p", texto: "estaaa muuuy lindoooo" },
                    { de: "C", hora: "10:17p", texto: "lo unico que un poquito me incomoda es que salen corazones por donde toco hahahaha pero igual me gusta" },
                    { de: "C", hora: "10:17p", texto: "lo de la playlist está de otro nivel" },
                    { de: "R", hora: "10:32p", texto: "Ay me alegra que te haya gustado jsjs" },
                    { de: "R", hora: "10:33p", texto: "Solo me costó 800 líneas de diseño (no es broma jsjsj)" }
                ]
            },
            {
                fecha: "2025-12-16",
                mensajes: [
                    { de: "C", hora: "7:55a", texto: "btw, adivina a quién ya le pasó la gripeee?" },
                    { de: "R", hora: "7:55a", texto: "Al amor de mi vida?" },
                    { de: "R", hora: "7:55a", texto: "XDDD" },
                    { de: "C", hora: "7:55a", texto: "si" }
                ]
            },
            {
                fecha: "2025-12-18",
                titulo: "Un día juntos",
                mensajes: [
                    { de: "R", hora: "6:38p", texto: "Oye Carito, quería darte las gracias por cumplirme hoy el capricho de acompañarte jeje me la pasé genial aunque con dolor en las patas y nada más desearte felices fiestas te quiero mucho. La foto que tenemos aunque cansados y acabados la atesorare mucho uwu" },
                    { de: "C", hora: "6:59p", texto: "Graciaaas a tiii, por hacerme olvidar aunque sea un ratito que perdí el semestree, lo valoré muchisimo, y pues ya solo con pasar el día contigo ya es demasiado 🫶🏼" }
                ]
            },
            {
                fecha: "2025-12-21",
                mensajes: [
                    { de: "C", hora: "10:26p", texto: "nono, solo que nunca me imaginé que Rafael Yepez sea cariñoso hahaha" },
                    { de: "R", hora: "10:28p", texto: "Pues vete acostumbrando corazón, xq estoy entrando aún más en confianza contigo jeje" },
                    { de: "C", hora: "10:29p", texto: "HAHAHAHAHAHA pues eso me está gustando" }
                ]
            },
            {
                fecha: "2025-12-23",
                mensajes: [
                    { de: "C", hora: "7:45p", texto: "todo lo bueno dura" },
                    { de: "R", hora: "7:47p", texto: "Tu eres lo bueno, dura por favor ❤️" }
                ]
            }
        ]
    },
    {
        mes: "Enero 2026",
        titulo: "Tres mesistos",
        momentos: [
            {
                fecha: "2026-01-01",
                titulo: "Año nuevo",
                mensajes: [
                    { de: "R", hora: "12:03a", texto: "Feliz año Amorcitoooo, espero que te encuentres  bien jaja" },
                    { de: "R", hora: "12:03a", texto: "Me muero de ganas de verte, un abrazote" },
                    { de: "C", hora: "8:45p", texto: "Feliz año!" }
                ]
            },
            {
                fecha: "2026-01-05",
                titulo: "Vamos iguales",
                mensajes: [
                    { de: "C", hora: "5:34p", texto: "btw, vamos igualeeesss?" },
                    { de: "R", hora: "5:34p", texto: "Con que coloressss?" },
                    { de: "C", hora: "6:03p", texto: "ahí si me van a decir que o estoy enamorada o me gusta alguien HAHAHAHAHAH porque yo que escoja ropa, jaamaaas haha, todos me conocen que a mi me da igual como me vista" },
                    { de: "R", hora: "6:07p", texto: "Pues si te da igual no se como lo haces pero te vistes bien" }
                ]
            },
            {
                fecha: "2026-01-05",
                mensajes: [
                    { de: "C", hora: "9:27p", texto: "me acompañas a perforarme?" },
                    { de: "R", hora: "9:35p", texto: "Trato hecho :D" }
                ]
            },
            {
                fecha: "2026-01-08",
                titulo: "Tu taller",
                mensajes: [
                    { de: "C", hora: "7:28p", texto: "estoy re nerviosaaa" },
                    { de: "R", hora: "7:29p", texto: "Ponte weathervane de fondo por una hora" },
                    { de: "R", hora: "7:29p", texto: "Tu puedeeeeees" },
                    { de: "C", hora: "8:36p", texto: "bestia, aquí estás - - - - >❤️❤️❤️❤️" },
                    { de: "R", hora: "8:36p", texto: "lo hiciste bien en serio ❤️" }
                ]
            },
            {
                fecha: "2026-01-09",
                mensajes: [
                    { de: "R", hora: "8:08p", texto: "Amorcito, veras si tu me quieres dar algo, mientras sea de corazón lo recibiré y lo atesorare con toda mi alma" },
                    { de: "R", hora: "8:09p", texto: "Yo te doy estas cosas porque lo vales y te lo mereces" },
                    { de: "C", hora: "8:30p", texto: "mejor me sale darte algo a cambio material HAAHAHAHAHAHA" },
                    { de: "R", hora: "8:31p", texto: "Ay tuuuu SAPA, dejates querer" }
                ]
            },
            {
                fecha: "2026-01-20",
                titulo: "Tres meses",
                mensajes: [
                    { de: "R", hora: "5:28p", texto: "Es que bueno hoy es un día importante jeje" },
                    { de: "C", hora: "5:29p", texto: "para ti?" },
                    { de: "R", hora: "5:29p", texto: "For us" },
                    { de: "R", hora: "5:34p", texto: "Vamos tres mesistooooos en hora buena jeje." },
                    { de: "C", hora: "5:35p", texto: "Rafael ya no?\nme estás endeudando peor que el bancoooo" },
                    { de: "R", hora: "6:36p", texto: "La cuestión es verte más que sea un ratito, mensa" }
                ]
            },
            {
                fecha: "2026-01-22",
                titulo: "Pasaste biología",
                mensajes: [
                    { de: "C", hora: "12:56p", texto: "no me pasa la emoción todavía hahaha" },
                    { de: "C", hora: "12:56p", texto: "amo a la de Biologíaaaa" },
                    { de: "C", hora: "1:03p", texto: "la vida es bella hahaha" },
                    { de: "C", hora: "1:28p", texto: "endeudados hasta las narices" },
                    { de: "R", hora: "1:28p", texto: "Pero pasados 🥸" },
                    { de: "C", hora: "1:29p", texto: "pero por supuesto, es lo que importa" }
                ]
            },
            {
                fecha: "2026-01-24",
                mensajes: [
                    { de: "C", hora: "8:37p", texto: "adivinaaa quien se acabooo el tlouuuu" },
                    { de: "C", hora: "8:38p", texto: "por fin me pasé las 2 parteeees" },
                    { de: "R", hora: "8:41p", texto: "La cumpleañera jajajaja" }
                ]
            }
        ]
    },
    {
        mes: "Febrero 2026",
        titulo: "Solo di yo también",
        momentos: [
            {
                fecha: "2026-02-02",
                mensajes: [
                    { de: "R", hora: "5:58p", texto: "De promedio final ya tienes 7.46 ya pasasteeeee" },
                    { de: "C", hora: "5:59p", texto: "VAMOOSSSS" },
                    { de: "C", hora: "5:59p", texto: "bueno era obvio pero ajá hahaha" },
                    { de: "R", hora: "6:00p", texto: "Ahora sí podemos lokiar" },
                    { de: "C", hora: "6:00p", texto: "vamos a lokiar" }
                ]
            },
            {
                fecha: "2026-02-03",
                titulo: "Te quiero",
                mensajes: [
                    { de: "R", hora: "10:52p", texto: "Una cosa más Caritoooo" },
                    { de: "C", hora: "10:54p", texto: "dime" },
                    { de: "R", hora: "10:54p", texto: "Te quiero" },
                    { de: "R", hora: "10:54p", texto: "Descansa buenas nochesssss" },
                    { de: "C", hora: "10:54p", texto: "hahahahaha a que vino eso?" },
                    { de: "R", hora: "10:55p", texto: "No puedo o que? Jajaja" },
                    { de: "C", hora: "10:55p", texto: "Descansaaa, besitoooo🤭" },
                    { de: "R", hora: "10:56p", texto: "Solo di yo también jajaja" },
                    { de: "C", hora: "10:56p", texto: "hahahaha ayyy está bien, yo tambieennn" }
                ]
            },
            {
                fecha: "2026-02-04",
                mensajes: [
                    { de: "R", hora: "7:07p", texto: "Así de verdad Carito parece que fue poco tiempo jaja pero me la pasé muy bien y comí muuuuuy bien jsjsjs" },
                    { de: "C", hora: "8:29p", texto: "yo igual comi muuuy bien hahaha gracias a ti" }
                ]
            },
            {
                fecha: "2026-02-10",
                titulo: "Tu canción",
                mensajes: [
                    { de: "C", hora: "3:46p", texto: "btw, que te pareceeee? es la intro todavía" },
                    { de: "C", hora: "3:47p", texto: "voy a componer una canción que describa la desgracia de decisiones que tomo en la vida :)" },
                    { de: "R", hora: "3:57p", texto: "Uyyy está buena" },
                    { de: "R", hora: "3:57p", texto: "Suena como el the last of us" },
                    { de: "R", hora: "3:58p", texto: "Me gustó me gustó" }
                ]
            },
            {
                fecha: "2026-02-13",
                mensajes: [
                    { de: "C", hora: "1:12p", texto: "no importa el orden haha, gracias guapo si está bien, muchas graciaaaass ❤️❤️❤️" },
                    { de: "R", hora: "2:02p", texto: "Ya sabes preciosa" }
                ]
            },
            {
                fecha: "2026-02-17",
                titulo: "Cuando yo no estaba bien",
                mensajes: [
                    { de: "C", hora: "9:45p", texto: "ay Rafael, sabes que así sea solo a caminar saldría, no es necesario que me invites nada" },
                    { de: "R", hora: "10:13p", texto: "Lo único que quiero aurita es darte un abrazo la vrd" },
                    { de: "C", hora: "10:23p", texto: "o si no quieres de verdad, no te preocupes, no te obligooo, solo que no es bueno reprimir emociones" }
                ]
            },
            {
                fecha: "2026-02-18",
                mensajes: [
                    { de: "R", hora: "12:19a", texto: "Gracias, de verdad" },
                    { de: "C", hora: "8:20a", texto: "buen diaaa Rafaa, como estás? como dormiste? (no me digas acostado) como te sienteesss?" }
                ]
            },
            {
                fecha: "2026-02-19",
                titulo: "Tus piercings",
                mensajes: [
                    { de: "C", hora: "4:00p", texto: "btw, adivinaaa, no sé a que rato me convencí de perforarme 2 veces :))\nni si quiera fué planeado" },
                    { de: "R", hora: "4:50p", texto: "Waaaaaos está precioooso" },
                    { de: "R", hora: "4:50p", texto: "Te quela lindísimoooooo" }
                ]
            }
        ]
    },
    {
        mes: "Marzo 2026",
        titulo: "Nuevo semestre",
        momentos: [
            {
                fecha: "2026-03-01",
                mensajes: [
                    { de: "C", hora: "11:01p", texto: "si te sale pero por supuesto" },
                    { de: "C", hora: "11:01p", texto: "es más sería increíble" },
                    { de: "C", hora: "11:01p", texto: "me encanta" },
                    { de: "R", hora: "11:27p", texto: "Te quiero mucho" },
                    { de: "R", hora: "11:28p", texto: "Y te extraño cabezona" }
                ]
            },
            {
                fecha: "2026-03-04",
                mensajes: [
                    { de: "R", hora: "11:31a", texto: "Es más el martes vengo a acompañarte" },
                    { de: "C", hora: "11:32a", texto: "ay si claro te vas a quedar hasta las 3:30" },
                    { de: "R", hora: "11:33a", texto: "Por ti si" },
                    { de: "R", hora: "11:33a", texto: "Mensa" }
                ]
            },
            {
                fecha: "2026-03-07",
                mensajes: [
                    { de: "C", hora: "3:44p", texto: "ya sé armar otro cuboooo" },
                    { de: "C", hora: "3:45p", texto: "asies tengo el iq muy alto" },
                    { de: "R", hora: "3:51p", texto: "Naaaahhh +10000 de aura" }
                ]
            },
            {
                fecha: "2026-03-09",
                mensajes: [
                    { de: "R", hora: "10:23a", texto: "Luego le agarre el gusto y aja" },
                    { de: "R", hora: "10:23a", texto: "Es lindo verte sonreír jaja" },
                    { de: "C", hora: "10:25a", texto: "te has vuelto labioso también :)" },
                    { de: "R", hora: "10:30a", texto: "Lo tomaré como un cumplido jajaja" }
                ]
            },
            {
                fecha: "2026-03-09",
                titulo: "Los 15K",
                mensajes: [
                    { de: "C", hora: "10:18p", texto: "quieres acompañarme en Junio?" },
                    { de: "C", hora: "10:19p", texto: "bueno el 31 de Mayo" },
                    { de: "R", hora: "10:23p", texto: "Claro que te acompaño" },
                    { de: "C", hora: "10:27p", texto: "voy a correeeerrr" },
                    { de: "C", hora: "10:27p", texto: "15k" },
                    { de: "R", hora: "10:35p", texto: "En ese día te voy a estar siguiendo con agua para que no te saques como Bob esponja" }
                ]
            },
            {
                fecha: "2026-03-24",
                titulo: "El club de fotografía",
                mensajes: [
                    { de: "C", hora: "7:30p", texto: "me inscribí a un clubbb" },
                    { de: "R", hora: "7:40p", texto: "Oulle te molesta si te acompaño? Jaja" },
                    { de: "C", hora: "7:41p", texto: "hahaha ni te gusta" },
                    { de: "R", hora: "7:42p", texto: "Nunca lo he intentado jaja" },
                    { de: "C", hora: "7:52p", texto: "hahaha o sea si quieres" },
                    { de: "C", hora: "7:52p", texto: "es en el piso 6" }
                ]
            },
            {
                fecha: "2026-03-28",
                mensajes: [
                    { de: "C", hora: "6:22p", texto: "soy multifuncional, una bestia" },
                    { de: "C", hora: "6:23p", texto: "maquina, crack" },
                    { de: "R", hora: "6:23p", texto: "Jefe fiera tifón número uno" },
                    { de: "R", hora: "6:24p", texto: "La roca se agüita alado tuyo" }
                ]
            }
        ]
    },
    {
        mes: "Abril 2026",
        titulo: "Fotografía y aguaceros",
        momentos: [
            {
                fecha: "2026-04-01",
                mensajes: [
                    { de: "C", hora: "6:11p", texto: "casi me arrancas la oreja" },
                    { de: "R", hora: "6:22p", texto: "Anotado jsjsjs me emocioné bastante" },
                    { de: "C", hora: "6:22p", texto: "si controlate :)" },
                    { de: "R", hora: "6:22p", texto: "Si amorcito 🫡😬" }
                ]
            },
            {
                fecha: "2026-04-06",
                mensajes: [
                    { de: "R", hora: "3:02p", texto: "Está de juntar para comprar un legoooo" },
                    { de: "R", hora: "3:02p", texto: "Pero así de esos cheveressss" },
                    { de: "C", hora: "3:05p", texto: "de esos de 100? hahah" },
                    { de: "R", hora: "3:07p", texto: "Osea si nos lo proponemos capaz si llegamos ajjaja" }
                ]
            },
            {
                fecha: "2026-04-14",
                mensajes: [
                    { de: "R", hora: "9:12a", texto: "Okeiiii pero te vas a perder que si vine en bermuda jajsjajs" },
                    { de: "C", hora: "9:13a", texto: "ay ay ni que fuera la gran cosa HAHAHAHAHA" },
                    { de: "R", hora: "9:19a", texto: "Ñiñiñiñiñi la cosa es que cumplí Sapa jajaja" }
                ]
            },
            {
                fecha: "2026-04-15",
                titulo: "El estudio de fotografía",
                mensajes: [
                    { de: "R", hora: "12:01p", texto: "Estamos en el estudio de fotografía" },
                    { de: "C", hora: "12:02p", texto: "Rafael que te pasaaa, porque no me dijiste" },
                    { de: "R", hora: "12:03p", texto: "Ven ven al -5" },
                    { de: "C", hora: "12:06p", texto: "graba maaaas" }
                ]
            },
            {
                fecha: "2026-04-16",
                mensajes: [
                    { de: "R", hora: "1:08p", texto: "Mucha suerte gringuita" },
                    { de: "C", hora: "2:05p", texto: "HAHAHAHAHAHQA" }
                ]
            },
            {
                fecha: "2026-04-17",
                mensajes: [
                    { de: "R", hora: "8:47p", texto: "…eres lo más grande que Dios me pudo poner en el camino de verdad no tienes idea de cuánto cariño te tengo…" },
                    { de: "C", hora: "8:48p", texto: "…de verdad que no se podrá notar pero disfruto pasando contigo" }
                ]
            },
            {
                fecha: "2026-04-29",
                mensajes: [
                    { de: "R", hora: "5:12p", texto: "Que tengas lindo feriado Carito. Te quiero mucho, de verdad." },
                    { de: "R", hora: "5:12p", texto: "Descansa" }
                ]
            },
            {
                fecha: "2026-04-30",
                mensajes: [
                    { de: "C", hora: "9:16a", texto: "holiisss rafiinn, buen diaaa" }
                ]
            }
        ]
    },
    {
        mes: "Mayo 2026",
        titulo: "Mi cumpleaños",
        momentos: [
            {
                fecha: "2026-05-05",
                titulo: "Los dibujitos",
                mensajes: [
                    { de: "R", hora: "6:18p", texto: "Hola Carito, quería dejarte por aquí los dibujitos. La verdad disfrute mucho haciéndolos, además fueron aprobados por el propio Dylan jeje." },
                    { de: "R", hora: "6:18p", texto: "…Disfruto demasiado de tu presencia, aunque a veces no tengamos de que hablar, solo tienes que decirme “Leprechaun” (como Vegeta le dice a Willy) y estaré allí haciendo todo lo posible." },
                    { de: "R", hora: "6:18p", texto: "…te quiero mucho mucho mucho mucho, tanto que tendrías que contar todas las skins de fortinait multiplicando las con series de potencia desde i=0 hasta el infinito." },
                    { de: "C", hora: "6:41p", texto: "y los dibujos están muy lindos, gracias" },
                    { de: "R", hora: "7:44p", texto: "Eres increíble Carito" }
                ]
            },
            {
                fecha: "2026-05-12",
                mensajes: [
                    { de: "C", hora: "6:51a", texto: "holis Rafa" },
                    { de: "C", hora: "6:51a", texto: "quieres hacer algo hoy en el almuerzo? como antes?" },
                    { de: "R", hora: "7:04a", texto: "Claro, me avisas nomás a lo que vayas a asomar" }
                ]
            },
            {
                fecha: "2026-05-16",
                mensajes: [
                    { de: "C", hora: "12:31a", texto: "muchas graciaaaaas amistad de verdad" },
                    { de: "C", hora: "12:31a", texto: "pero de verdad, gracias" },
                    { de: "C", hora: "12:32a", texto: "si no me ayudabas no la sacaba" }
                ]
            },
            {
                fecha: "2026-05-20",
                titulo: "El libro",
                mensajes: [
                    { de: "C", hora: "3:43p", texto: "gracias una vez más por el librooo" },
                    { de: "C", hora: "3:43p", texto: "lo leeré en el bus" }
                ]
            },
            {
                fecha: "2026-05-21",
                titulo: "Mi cumpleaños",
                mensajes: [
                    { de: "C", hora: "8:28a", texto: "Rafaeeeel, feliz cumpleaños!\nespero que tengas un buen día y la pases muy bien, sigue cumpliendo muchos años y muchos sueños, te deseo lo mejor ya que eres una persona muy buena, felicidades!" },
                    { de: "R", hora: "9:50a", texto: "Hola Carito, gracias por tus deseoooos, se aprecia la intención y espero que también puedas pasar un buen día" },
                    { de: "R", hora: "9:50a", texto: "Más tarde espero verte" },
                    { de: "R", hora: "9:50a", texto: "Se te quiereeee" }
                ]
            },
            {
                fecha: "2026-05-23",
                mensajes: [
                    { de: "R", hora: "6:18p", texto: "Pero si estaba inspirado en ti, claro que ya se puso personal" },
                    { de: "R", hora: "6:18p", texto: "No habíamos dicho que era un alter ego tuyo del futuro que escribió el libro? Jaja" }
                ]
            },
            {
                fecha: "2026-05-27",
                mensajes: [
                    { de: "C", hora: "11:56a", texto: "compré papatas" },
                    { de: "C", hora: "11:56a", texto: "y te dejo la mitad hahaha" },
                    { de: "C", hora: "12:03p", texto: "habla rápido que me acabo" },
                    { de: "C", hora: "12:03p", texto: "(ni empiezo)" },
                    { de: "R", hora: "12:10p", texto: "Que si jajaja" }
                ]
            }
        ]
    },
    {
        mes: "Junio 2026",
        titulo: "Como antes",
        momentos: [
            {
                fecha: "2026-06-04",
                mensajes: [
                    { de: "C", hora: "8:34a", texto: "si podemos ir a turistear un poquito" },
                    { de: "C", hora: "1:42p", texto: "de pronto tienes gorra? HAHAHA" },
                    { de: "R", hora: "1:44p", texto: "Si tengo gorra jsjsjs" },
                    { de: "R", hora: "1:44p", texto: "Y también paraguas" },
                    { de: "C", hora: "1:44p", texto: "ayyyy" },
                    { de: "C", hora: "1:44p", texto: "gracias" }
                ]
            },
            {
                fecha: "2026-06-08",
                mensajes: [
                    { de: "R", hora: "11:54a", texto: "Chuzo, ojalá que sea temporal porque tú tomas fotos bonitas" },
                    { de: "C", hora: "12:11p", texto: "hahaha basta al menos aprendiste algo conmigo" }
                ]
            },
            {
                fecha: "2026-06-17",
                mensajes: [
                    { de: "C", hora: "10:42p", texto: "HAHAHAHAHA es que yo a ti te amo, siempre me apoyas en cada vaina que se me ocurre" },
                    { de: "R", hora: "11:38p", texto: "Awwww tambien te quiero jajaja" }
                ]
            },
            {
                fecha: "2026-06-18",
                titulo: "Los super planes",
                mensajes: [
                    { de: "R", hora: "9:45p", texto: "A veces jajajaj. Es que no pense que lit iba a dejar de verte, por eso era el dia larguisimo :'v" },
                    { de: "C", hora: "11:55p", texto: "pero ahora estamos como antes ntp" },
                    { de: "C", hora: "11:55p", texto: "con los super planessss" }
                ]
            },
            {
                fecha: "2026-06-19",
                mensajes: [
                    { de: "R", hora: "7:20a", texto: "Superplaneeeees" },
                    { de: "C", hora: "7:45a", texto: "de esos que íbamos a turistear hahaha" }
                ]
            },
            {
                fecha: "2026-06-19",
                titulo: "Cara de bola",
                mensajes: [
                    { de: "C", hora: "8:40a", texto: "cara de bolaaa, me ayudas llenando?" },
                    { de: "R", hora: "8:44a", texto: "Ya le hago Caritoooooo" },
                    { de: "R", hora: "8:44a", texto: "Oye y como Carebola? Jajdjajjsa" },
                    { de: "C", hora: "9:57a", texto: "hahaha es de cariño" }
                ]
            },
            {
                fecha: "2026-06-19",
                titulo: "El lego y el abrigo",
                mensajes: [
                    { de: "R", hora: "7:38p", texto: "Tu tienes el lego, pero yo tengo lo que a mi parecer es mucho mas valioso, el recuerdo jsjsjsj" },
                    { de: "R", hora: "7:38p", texto: "Gracias por darte el tiempo de armarlo conmigo, de verdad, es algo que siempre quise" },
                    { de: "C", hora: "9:23p", texto: "yo me quedo con el lego HAHAHAHA" },
                    { de: "C", hora: "10:49p", texto: "ayyyyy me encanta el abrigooooo" },
                    { de: "C", hora: "10:49p", texto: "es mi nuevo abrigo fav lit" },
                    { de: "C", hora: "10:49p", texto: "y también me gusta que apesta a ti HAHAHAHAHA" },
                    { de: "C", hora: "10:50p", texto: "no lo voy a lavar hasta que huela a mi hahahaha" }
                ]
            },
            {
                fecha: "2026-06-20",
                mensajes: [
                    { de: "R", hora: "7:44a", texto: "Me alegro que te haya gustado guapetona jsjsjs" }
                ]
            },
            {
                fecha: "2026-06-24",
                titulo: "Salvaste el semestre",
                mensajes: [
                    { de: "C", hora: "9:23a", texto: "REMONTÉ Y SALVE EL SEMESTRE 😭😭😭😭" },
                    { de: "R", hora: "9:23a", texto: "ESOOOOOO" },
                    { de: "C", hora: "9:24a", texto: "le pegué 8.20 JAMÁS había sacado tanto en una prueba difícil y peor de Morfo" },
                    { de: "R", hora: "9:24a", texto: "Nah increíble Carito" },
                    { de: "R", hora: "9:26a", texto: "Ya te llevoa celebrar acabando jajsja" }
                ]
            },
            {
                fecha: "2026-06-25",
                mensajes: [
                    { de: "C", hora: "8:31p", texto: "RAFAAAAEELLLL\nSALVÉ MORFO, LA TRI GANA, MAÑANA ES FERIADO, ME REGRESARON LA TARJETA, MAÑANA NO TENGO QUE PRESENTAR EL PROYECTO, LA VIDA ES BELLAAAAAAA, HERMOSAAA 😭😭😭😭😭❤️❤️" },
                    { de: "R", hora: "8:31p", texto: "JAJAJAJJAJAJAJA" },
                    { de: "R", hora: "8:31p", texto: "NO PODRIA SER MEJOR LA SEMANA TE JURO" },
                    { de: "R", hora: "8:32p", texto: "QUE INCREÍBLE DE VERDAD" }
                ]
            }
        ]
    },
    {
        mes: "Julio 2026",
        titulo: "Aquí estoy",
        momentos: [
            {
                fecha: "2026-07-01",
                mensajes: [
                    { de: "R", hora: "8:07p", texto: "Al menos dame el gusto de escucharte por nanovigesima séptima vez" },
                    { de: "C", hora: "8:11p", texto: "HAHAHAHAHA" },
                    { de: "C", hora: "8:11p", texto: "y a este paso serán más" },
                    { de: "R", hora: "8:14p", texto: "Y no importa (Hasta que te canses, lo cual es complicado jaja). Aqui estoy" },
                    { de: "R", hora: "9:18p", texto: "Se te quiere un montonaso mujer. De verdad" }
                ]
            },
            {
                fecha: "2026-07-03",
                titulo: "La noche del video",
                mensajes: [
                    { de: "R", hora: "3:30a", texto: "Bien que yo si me quede" },
                    { de: "C", hora: "3:30a", texto: "hahaha yo te amo" },
                    { de: "C", hora: "3:30a", texto: "tu lo sabes" },
                    { de: "R", hora: "3:31a", texto: "Tu también jajajaj" },
                    { de: "R", hora: "3:32a", texto: "Duerme y por Dios estate tranquila mujer" },
                    { de: "R", hora: "3:33a", texto: "Un besito chau" },
                    { de: "C", hora: "7:36a", texto: "buen dia alma del señor" }
                ]
            },
            {
                fecha: "2026-07-06",
                titulo: "Las uvas",
                mensajes: [
                    { de: "C", hora: "9:13a", texto: "puedes ir a ver si hay uvas?" },
                    { de: "R", hora: "9:23a", texto: "Voy a la granados ya te traigo tu tranquila" },
                    { de: "R", hora: "9:23a", texto: "Suerte cabezonaaaaa" },
                    { de: "R", hora: "10:33a", texto: "Llegué" }
                ]
            },
            {
                fecha: "2026-07-15",
                mensajes: [
                    { de: "C", hora: "11:40a", texto: "Rafaeeeel quieres salir hoy?" },
                    { de: "R", hora: "11:41a", texto: "Dale de una" },
                    { de: "C", hora: "11:42a", texto: "corre" }
                ]
            },
            {
                fecha: "2026-07-17",
                mensajes: [
                    { de: "R", hora: "1:22a", texto: "Jajajjajajaj PASASTEEEEEE WAAAAAA" },
                    { de: "R", hora: "6:19p", texto: "No ve, te ves muy linda en esa foto la plena jajsjajjs" },
                    { de: "R", hora: "6:19p", texto: "Ni parece que hicieras tanto caos" },
                    { de: "C", hora: "6:30p", texto: "las apariencias engañan y yo soy la prueba evidente HAHAHAHA" },
                    { de: "R", hora: "7:02p", texto: "Pero nah, las cosas va a mejorar para ti Carito ya verásssss" }
                ]
            },
            {
                fecha: "2026-07-26",
                titulo: "Es Rafael",
                mensajes: [
                    { de: "C", hora: "8:38a", texto: "hahaha pues de mi mamá y la Andrea ya te ubican, siempre que digo con Rafael ya saben, no te conocen en persona pero les he hablado un poco de ti" },
                    { de: "C", hora: "8:42a", texto: "les digo, es Rafael hahahaha" }
                ]
            },
            {
                fecha: "2026-07-27",
                mensajes: [
                    { de: "C", hora: "5:50p", texto: "HAHAHAHAH te tapo los ojos hasta llegar a mi cuarto" },
                    { de: "R", hora: "6:20p", texto: "Acpeto, pero no creo que digas lo mismo si necesito usar el baño ajjsjajs" },
                    { de: "R", hora: "6:56p", texto: "Y si tu ma nos llama a comer osea???? Jajsja no pues tengo que ir a la mesa :'v" },
                    { de: "C", hora: "7:26p", texto: "le digo que comemos en el cuarto, nou problem HAHAHAHAH para todo hay solución" }
                ]
            },
            {
                fecha: "2026-07-31",
                mensajes: [
                    { de: "R", hora: "6:58p", texto: "Mi cabezona favorita" }
                ]
            }
        ]
    },
    {
        mes: "Agosto 2026",
        titulo: "Mi consentida",
        momentos: [
            {
                fecha: "2026-08-11",
                mensajes: [
                    { de: "C", hora: "2:48p", texto: "le acabas de dar un gramo de serotonina a mi cerebro, muchas gracias 😭❤️" },
                    { de: "R", hora: "3:07p", texto: "Jajajaj ya sabes, lo mejor para la mejor" }
                ]
            },
            {
                fecha: "2026-08-13",
                mensajes: [
                    { de: "C", hora: "8:37p", texto: "si no digo, pero lo bueno que es de noche y chance me duermo (si no me pongo a sobrepensar) y cuando me despierte ya estoy en tu Quito" }
                ]
            },
            {
                fecha: "2026-08-14",
                mensajes: [
                    { de: "R", hora: "7:46a", texto: "Es que yo no se si solo soy yo, pero de verdad que cuando hablas osea lit se te presta atención" },
                    { de: "R", hora: "7:46a", texto: "O al menos como que todo se concentra en vos jaja" },
                    { de: "C", hora: "8:30a", texto: "todo gira entorno a mi?\nya lo sabia gracias 💅" }
                ]
            },
            {
                fecha: "2026-08-15",
                mensajes: [
                    { de: "R", hora: "10:44a", texto: "Siii, es que bueno lit se me ocurrió mandarles sushi para que comas con tu hermana" },
                    { de: "R", hora: "3:02p", texto: "Ay jajaja es que quería tratar de caerle bien, ya sabes que mi consentida eres vos" }
                ]
            },
            {
                fecha: "2026-08-16",
                titulo: "Casarnos en EE. UU.",
                mensajes: [
                    { de: "R", hora: "10:17a", texto: "Tu sabes que hasta me da igual todo con tal de no dejarte solita" },
                    { de: "C", hora: "3:00p", texto: "oye btw te acuerdas cuando dijimos para casarnos en eeuu? HAHAHAHAHAHAHAHAHA" },
                    { de: "C", hora: "3:00p", texto: "me acordé ahorita" },
                    { de: "R", hora: "3:30p", texto: "Ay si te acuerdas de eso? Jajaja" },
                    { de: "R", hora: "3:30p", texto: "Ehh si, fue por ahí cuando fuimos al supermaxi y compraste ese hueso disque para comunicación" },
                    { de: "R", hora: "3:31p", texto: "Ahi fuimos caminando hasta la Rio Coca" },
                    { de: "R", hora: "6:57p", texto: "Como voy a olvidarlo? jajajaj" }
                ]
            },
            {
                fecha: "2026-08-21",
                mensajes: [
                    { de: "R", hora: "6:38p", texto: "Ay Carito te ves preciosa de verdad" },
                    { de: "R", hora: "6:38p", texto: "Y muy coqueta, te queda bien ese estilo" }
                ]
            }
        ]
    },
    {
        mes: "Septiembre 2026",
        titulo: "Mientras se pueda",
        momentos: [
            {
                fecha: "2026-09-04",
                mensajes: [
                    { de: "R", hora: "1:51p", texto: "Ayyy que bonita ahi con el chalequito jajajaj" },
                    { de: "C", hora: "8:18p", texto: "que no puedes parar tu vida por alguien" },
                    { de: "R", hora: "8:22p", texto: "Ay es que tampoco es por cualquiera, de verdad tranquila" },
                    { de: "R", hora: "8:23p", texto: "Yo se que al final capaz y ni puedo pasar todos los días contigo pero mientras se pueda pues mejor que sobre a que falte" }
                ]
            },
            {
                fecha: "2026-09-04",
                mensajes: [
                    { de: "C", hora: "11:38p", texto: "anda a dormir" },
                    { de: "R", hora: "11:39p", texto: "Tu anda a dolfmir" },
                    { de: "C", hora: "11:39p", texto: "eres hombre tu opinión no cuenta" },
                    { de: "R", hora: "11:39p", texto: "Eres mujer, vas primero" }
                ]
            },
            {
                fecha: "2026-09-14",
                titulo: "Tu curso de manejo",
                mensajes: [
                    { de: "R", hora: "5:19a", texto: "Hola Caritoooo, hoy empieza tu curso de manejo, venia a desearte muuucha suerte. Estoy seguro que te va a ir muy bien cabezona" },
                    { de: "C", hora: "11:46a", texto: "ya sé manejar" },
                    { de: "R", hora: "1:37p", texto: "Vistessssss, me alegro Carito" }
                ]
            },
            {
                fecha: "2026-09-21",
                titulo: "El detallito",
                mensajes: [
                    { de: "C", hora: "7:15p", texto: "ya abrí todo, está re increíble de verdad" },
                    { de: "C", hora: "7:15p", texto: "muchísimas gracias" },
                    { de: "C", hora: "7:16p", texto: "me animaste la noche" },
                    { de: "C", hora: "7:16p", texto: "y justo el cubo que quería" },
                    { de: "C", hora: "7:17p", texto: "y el tarot Dios, cada vez tengo más cosas de Stranger things" },
                    { de: "R", hora: "8:24p", texto: "La verdad es que todo este tiempo no he hecho nada más que pensar, aguantar y literalmente extrañarte (dime raro lo que quieras pero es asi)" },
                    { de: "R", hora: "8:25p", texto: "Y eso fue lo que me llevo a prepararte un detallito, no es mucho pero como ves es de todo corazón y bueno ahora mismo solo quiero que sepas eso" }
                ]
            },
            {
                fecha: "2026-09-25",
                mensajes: [
                    { de: "C", hora: "6:29a", texto: "te parece si vamos a la 1? hacemos algo hasta tu clase, te acompaño a tu clase (si me dejan) y vemos algo después?" },
                    { de: "R", hora: "6:30a", texto: "Quieres entrar a programación?" },
                    { de: "C", hora: "6:30a", texto: "de paso me programo el cerebro" }
                ]
            },
            {
                fecha: "2026-09-29",
                mensajes: [
                    { de: "R", hora: "3:50p", texto: "Pasate por la biblioteca porque hay hasta de the last of us me dijeron jajsjajs" },
                    { de: "C", hora: "6:42p", texto: "nooooooo 😭😭😭😭" },
                    { de: "C", hora: "6:42p", texto: "necesito comprar ese libro" }
                ]
            }
        ]
    },
    {
        mes: "Octubre 2026",
        titulo: "Mas que sea un ratito",
        momentos: [
            {
                fecha: "2026-10-03",
                titulo: "Tu color favorito",
                mensajes: [
                    { de: "R", hora: "12:59p", texto: "Y CELESTE WAAAAAA" },
                    { de: "R", hora: "12:59p", texto: "Me gusta el tono que tiene la vrd" },
                    { de: "C", hora: "1:01p", texto: "sii es que en mi casa saben que ajá mi color fav es todo lo derivado del azul HAHAHA" }
                ]
            },
            {
                fecha: "2026-10-04",
                mensajes: [
                    { de: "R", hora: "8:32a", texto: "Buen día cabezona" },
                    { de: "C", hora: "9:20a", texto: "buen diaaaa cabeza de bolaaaa" },
                    { de: "R", hora: "6:34p", texto: "Estoy seguro de que si voy a tu casa veo un shampoo de spiderman, una toalla de f1 y cosas asi jajsjajs" },
                    { de: "C", hora: "6:34p", texto: "descubriste mi secreto" }
                ]
            },
            {
                fecha: "2026-10-05",
                mensajes: [
                    { de: "R", hora: "3:54p", texto: "La tengo" },
                    { de: "R", hora: "4:49p", texto: "Irás con cuidado Carito, avísame a lo que llegues" },
                    { de: "R", hora: "4:49p", texto: "Se te quiere un montón mujer d:" }
                ]
            },
            {
                fecha: "2026-10-06",
                mensajes: [
                    { de: "R", hora: "1:03p", texto: "Ya te llevo" },
                    { de: "C", hora: "1:41p", texto: "muchas gracias por cierto ❤️" },
                    { de: "C", hora: "1:41p", texto: "te debo la vida" }
                ]
            },
            {
                fecha: "2026-10-07",
                mensajes: [
                    { de: "C", hora: "8:06p", texto: "muchas gracias de verdad" },
                    { de: "C", hora: "8:06p", texto: "te debo la vida" },
                    { de: "C", hora: "8:06p", texto: "no sé que haría sin ti" }
                ]
            },
            {
                fecha: "2026-10-08",
                titulo: "Día 352",
                mensajes: [
                    { de: "R", hora: "8:54a", texto: "Gracias por formar parte de mi vida, mas que sea un ratito" }
                ]
            }
        ]
    }
];

const nombresMeses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
    "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

// "2025-10-14" -> "14 de octubre de 2025"
function formatearFecha(fecha) {
    const [anio, mes, dia] = fecha.split('-').map(Number);
    return `${dia} de ${nombresMeses[mes - 1]} de ${anio}`;
}

// "8:40p" -> "8:40 p. m."
function formatearHora(hora) {
    const sufijo = hora.endsWith('a') ? 'a. m.' : 'p. m.';
    return `${hora.slice(0, -1)} ${sufijo}`;
}

function crearElemento(etiqueta, clase, texto) {
    const el = document.createElement(etiqueta);
    if (clase) el.className = clase;
    if (texto !== undefined) el.textContent = texto;
    return el;
}

function initHistoria() {
    const tabs = document.getElementById('historiaTabs');
    const cuerpo = document.getElementById('chatCuerpo');
    const subtitulo = document.getElementById('chatSubtitulo');
    const prevBtn = document.getElementById('historiaPrev');
    const nextBtn = document.getElementById('historiaNext');
    if (!tabs || !cuerpo) return;

    let mesActual = 0;

    historia.forEach((mes, index) => {
        const tab = crearElemento('button', 'historia-tab', mes.mes);
        tab.type = 'button';
        tab.addEventListener('click', () => mostrarMes(index));
        tabs.appendChild(tab);
    });

    function mostrarMes(index) {
        mesActual = index;
        const mes = historia[index];

        tabs.querySelectorAll('.historia-tab').forEach((tab, i) => {
            tab.classList.toggle('activo', i === index);
            if (i === index) {
                tabs.scrollTo({ left: tab.offsetLeft - (tabs.clientWidth - tab.clientWidth) / 2, behavior: 'smooth' });
            }
        });

        subtitulo.textContent = `${mes.mes} · ${mes.titulo}`;
        cuerpo.innerHTML = '';

        let ultimaFecha = null;
        mes.momentos.forEach(momento => {
            if (momento.fecha !== ultimaFecha) {
                cuerpo.appendChild(crearElemento('div', 'chat-fecha', formatearFecha(momento.fecha)));
                ultimaFecha = momento.fecha;
            }
            if (momento.titulo) {
                cuerpo.appendChild(crearElemento('div', 'chat-momento', `💙 ${momento.titulo}`));
            }
            momento.mensajes.forEach(msg => {
                const burbuja = crearElemento('div', `chat-burbuja ${msg.de === 'R' ? 'rafi' : 'carito'}`);
                burbuja.appendChild(crearElemento('span', 'chat-texto', msg.texto));
                burbuja.appendChild(crearElemento('span', 'chat-hora', formatearHora(msg.hora)));
                cuerpo.appendChild(burbuja);
            });
        });

        cuerpo.scrollTop = 0;
        cuerpo.classList.remove('animar');
        void cuerpo.offsetWidth;
        cuerpo.classList.add('animar');

        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === historia.length - 1;
    }

    prevBtn.addEventListener('click', () => mostrarMes(Math.max(0, mesActual - 1)));
    nextBtn.addEventListener('click', () => mostrarMes(Math.min(historia.length - 1, mesActual + 1)));

    mostrarMes(0);
}

document.addEventListener('DOMContentLoaded', initHistoria);
