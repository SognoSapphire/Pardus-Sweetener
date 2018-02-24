var Sector = (function() {

// The order of this array is important: numeric sector IDs kept in storage
// depend on the index of each entry here, so DO NOT alter the order.  If Pardus
// ever adds more sectors, *append* them to this array then.
//
// `n` is the sector name, `h` is the sector height, `lb` is the sector's
// locbase (the magic number used to compute tile IDs).

var CATALOGUE = [
	, // index 0 is not used
	{ n: "Aandti", h: 13, lb: 78435 },
	{ n: "AB 5-848", h: 14, lb: 375000 },
	{ n: "Abeho", h: 13, lb: 325645 },
	{ n: "Achird", h: 22, lb: 118538 },
	{ n: "Ackandso", h: 20, lb: 24458 },
	{ n: "Ackarack", h: 20, lb: 300000 },
	{ n: "Ackexa", h: 15, lb: 32188 },
	{ n: "Ackwada", h: 15, lb: 101525 },
	{ n: "Adaa", h: 26, lb: 6409 },
	{ n: "Adara", h: 21, lb: 95219 },
	{ n: "Aedce", h: 20, lb: 306687 },
	{ n: "Aeg", h: 13, lb: 24978 },
	{ n: "Alfirk", h: 15, lb: 95534 },
	{ n: "Algol", h: 25, lb: 375252 },
	{ n: "Alioth", h: 15, lb: 32488 },
	{ n: "Alpha Centauri", h: 12, lb: 1 },
	{ n: "AN 2-956", h: 20, lb: 52083 },
	{ n: "An Dzeve", h: 18, lb: 6981 },
	{ n: "Anaam", h: 20, lb: 16466 },
	{ n: "Anayed", h: 16, lb: 300280 },
	{ n: "Andexa", h: 15, lb: 229 },
	{ n: "Andsoled", h: 25, lb: 318960 },
	{ n: "Anphiex", h: 30, lb: 78721 },
	{ n: "Arexack", h: 17, lb: 325970 },
	{ n: "Atlas", h: 15, lb: 79261 },
	{ n: "Aveed", h: 15, lb: 101855 },
	{ n: "Aya", h: 35, lb: 142998 },
	{ n: "Ayargre", h: 18, lb: 16826 },
	{ n: "Ayinti", h: 20, lb: 300520 },
	{ n: "Ayqugre", h: 14, lb: 307027 },
	{ n: "Baar", h: 12, lb: 79576 },
	{ n: "Baham", h: 36, lb: 139288 },
	{ n: "BE 3-702", h: 20, lb: 119022 },
	{ n: "Becanin", h: 14, lb: 52463 },
	{ n: "Becanol", h: 25, lb: 79768 },
	{ n: "Bedaho", h: 18, lb: 32728 },
	{ n: "Beeday", h: 15, lb: 300920 },
	{ n: "Beethti", h: 20, lb: 17150 },
	{ n: "Begreze", h: 14, lb: 17470 },
	{ n: "Belati", h: 16, lb: 301160 },
	{ n: "Bellatrix", h: 18, lb: 119422 },
	{ n: "Besoex", h: 16, lb: 25251 },
	{ n: "Beta Hydri", h: 20, lb: 102110 },
	{ n: "Beta Proxima", h: 19, lb: 529 },
	{ n: "Betelgeuse", h: 22, lb: 33088 },
	{ n: "Betiess", h: 16, lb: 40935 },
	{ n: "Beurso", h: 25, lb: 319410 },
	{ n: "Bewaack", h: 25, lb: 375727 },
	{ n: "BL 3961", h: 10, lb: 890 },
	{ n: "BL 6-511", h: 31, lb: 80268 },
	{ n: "BQ 3-927", h: 15, lb: 41143 },
	{ n: "BU 5-773", h: 8, lb: 326259 },
	{ n: "Cabard", h: 22, lb: 52701 },
	{ n: "Canaab", h: 13, lb: 7539 },
	{ n: "Canexin", h: 25, lb: 17708 },
	{ n: "Canolin", h: 15, lb: 324186 },
	{ n: "Canopus", h: 22, lb: 41368 },
	{ n: "Capella", h: 17, lb: 33792 },
	{ n: "Cassand", h: 19, lb: 25459 },
	{ n: "CC 3-771", h: 10, lb: 301560 },
	{ n: "Ceanze", h: 17, lb: 307251 },
	{ n: "Cebalrai", h: 24, lb: 119872 },
	{ n: "Cebece", h: 18, lb: 140332 },
	{ n: "Cegreeth", h: 22, lb: 376077 },
	{ n: "Ceina", h: 15, lb: 319885 },
	{ n: "Cemiess", h: 15, lb: 52899 },
	{ n: "Cesoho", h: 7, lb: 1090 },
	{ n: "Cor Caroli", h: 42, lb: 140818 },
	{ n: "CP 2-197", h: 13, lb: 102590 },
	{ n: "Daaya", h: 25, lb: 41654 },
	{ n: "Daaze", h: 15, lb: 320125 },
	{ n: "Daceess", h: 8, lb: 1174 },
	{ n: "Dadaex", h: 21, lb: 326459 },
	{ n: "Dainfa", h: 18, lb: 102798 },
	{ n: "Datiack", h: 15, lb: 18333 },
	{ n: "Daured", h: 17, lb: 103122 },
	{ n: "Daurlia", h: 15, lb: 25706 },
	{ n: "Delta Pavonis", h: 27, lb: 25916 },
	{ n: "DH 3-625", h: 13, lb: 110554 },
	{ n: "DI 9-486", h: 16, lb: 103428 },
	{ n: "Diphda", h: 20, lb: 95834 },
	{ n: "DP 2-354", h: 14, lb: 301760 },
	{ n: "Dsiban", h: 17, lb: 120376 },
	{ n: "Dubhe", h: 25, lb: 142498 },
	{ n: "Edbeeth", h: 15, lb: 18618 },
	{ n: "Edeneth", h: 7, lb: 8273 },
	{ n: "Edenve", h: 25, lb: 81012 },
	{ n: "Edethex", h: 25, lb: 103828 },
	{ n: "Edmial", h: 16, lb: 376473 },
	{ n: "Edmize", h: 16, lb: 18888 },
	{ n: "Edqueth", h: 10, lb: 320380 },
	{ n: "Edvea", h: 24, lb: 301984 },
	{ n: "EH 5-382", h: 15, lb: 96234 },
	{ n: "Electra", h: 16, lb: 42304 },
	{ n: "Elnath", h: 25, lb: 376745 },
	{ n: "Enaness", h: 12, lb: 42672 },
	{ n: "Encea", h: 15, lb: 53169 },
	{ n: "Enif", h: 25, lb: 138413 },
	{ n: "Enioar", h: 13, lb: 307506 },
	{ n: "Enwaand", h: 22, lb: 320550 },
	{ n: "Epsilon Eridani", h: 32, lb: 1294 },
	{ n: "Epsilon Indi", h: 13, lb: 34115 },
	{ n: "Ericon", h: 26, lb: 1870 },
	{ n: "Essaa", h: 22, lb: 34375 },
	{ n: "Eta Cassiopeia", h: 35, lb: 26294 },
	{ n: "Etamin", h: 24, lb: 144398 },
	{ n: "Exackcan", h: 13, lb: 26819 },
	{ n: "Exbeur", h: 25, lb: 53379 },
	{ n: "Exinfa", h: 20, lb: 8357 },
	{ n: "Exiool", h: 19, lb: 104453 },
	{ n: "Faarfa", h: 12, lb: 81637 },
	{ n: "Facece", h: 23, lb: 54004 },
	{ n: "Fadaphi", h: 25, lb: 377195 },
	{ n: "Faedho", h: 25, lb: 307779 },
	{ n: "Faexze", h: 16, lb: 2260 },
	{ n: "Famiay", h: 13, lb: 34617 },
	{ n: "Famida", h: 19, lb: 326837 },
	{ n: "Famiso", h: 15, lb: 42924 },
	{ n: "Faphida", h: 14, lb: 19144 },
	{ n: "Fawaol", h: 25, lb: 302752 },
	{ n: "Fomalhaut", h: 20, lb: 27014 },
	{ n: "Fornacis", h: 30, lb: 145142 },
	{ n: "FR 3-328", h: 20, lb: 320990 },
	{ n: "Furud", h: 20, lb: 120665 },
	{ n: "Gienah Cygni", h: 26, lb: 120965 },
	{ n: "Gilo", h: 21, lb: 81805 },
	{ n: "GM 4-572", h: 13, lb: 54372 },
	{ n: "Gomeisa", h: 23, lb: 145892 },
	{ n: "Greandin", h: 23, lb: 27414 },
	{ n: "Grecein", h: 16, lb: 8557 },
	{ n: "Greenso", h: 16, lb: 377820 },
	{ n: "Grefaho", h: 20, lb: 19452 },
	{ n: "Greliai", h: 20, lb: 303252 },
	{ n: "Gresoin", h: 21, lb: 327312 },
	{ n: "Gretiay", h: 20, lb: 104871 },
	{ n: "GT 3-328", h: 16, lb: 327837 },
	{ n: "GV 4-652", h: 12, lb: 34812 },
	{ n: "HC 4-962", h: 13, lb: 34956 },
	{ n: "Heze", h: 40, lb: 146605 },
	{ n: "HO 2-296", h: 11, lb: 48098 },
	{ n: "Hoanda", h: 18, lb: 2628 },
	{ n: "Hobeex", h: 14, lb: 308129 },
	{ n: "Hocancan", h: 19, lb: 43254 },
	{ n: "Homam", h: 22, lb: 121355 },
	{ n: "Hooth", h: 13, lb: 82183 },
	{ n: "Hource", h: 16, lb: 303572 },
	{ n: "HW 3-863", h: 20, lb: 96444 },
	{ n: "Iceo", h: 14, lb: 8765 },
	{ n: "Inena", h: 21, lb: 35112 },
	{ n: "Inioen", h: 14, lb: 308395 },
	{ n: "Iniolol", h: 14, lb: 27736 },
	{ n: "Inliaa", h: 10, lb: 9045 },
	{ n: "Iohofa", h: 16, lb: 328061 },
	{ n: "Ioliaa", h: 16, lb: 105271 },
	{ n: "Ioquex", h: 15, lb: 82508 },
	{ n: "Iowagre", h: 12, lb: 303876 },
	{ n: "Iozeio", h: 13, lb: 48263 },
	{ n: "IP 3-251", h: 9, lb: 7395 },
	{ n: "Izar", h: 18, lb: 121729 },
	{ n: "JG 2-013", h: 8, lb: 308577 },
	{ n: "JO 4-132", h: 20, lb: 378140 },
	{ n: "JS 2-090", h: 10, lb: 35406 },
	{ n: "Keid", h: 20, lb: 122017 },
	{ n: "Keldon", h: 34, lb: 27974 },
	{ n: "Kenlada", h: 20, lb: 7773 },
	{ n: "Kitalpha", h: 16, lb: 96764 },
	{ n: "KU 3-616", h: 8, lb: 28858 },
	{ n: "Laanex", h: 16, lb: 28954 },
	{ n: "Labela", h: 38, lb: 148005 },
	{ n: "Ladaen", h: 23, lb: 321230 },
	{ n: "Laedgre", h: 20, lb: 43577 },
	{ n: "Lagreen", h: 20, lb: 328445 },
	{ n: "Lahola", h: 21, lb: 54567 },
	{ n: "Lalande", h: 10, lb: 2916 },
	{ n: "Lamice", h: 22, lb: 9165 },
	{ n: "Laolla", h: 17, lb: 20240 },
	{ n: "Lasolia", h: 16, lb: 82748 },
	{ n: "Lave", h: 16, lb: 2986 },
	{ n: "Lavebe", h: 8, lb: 328765 },
	{ n: "Lazebe", h: 19, lb: 122417 },
	{ n: "Leesti", h: 16, lb: 308737 },
	{ n: "Let", h: 34, lb: 328949 },
	{ n: "Liaackti", h: 23, lb: 321690 },
	{ n: "Liaface", h: 20, lb: 308977 },
	{ n: "Lianla", h: 20, lb: 9715 },
	{ n: "Liaququ", h: 24, lb: 105559 },
	{ n: "LN 3-141", h: 6, lb: 29194 },
	{ n: "LO 2-014", h: 3, lb: 35536 },
	{ n: "Maia", h: 13, lb: 35566 },
	{ n: "Matar", h: 16, lb: 122949 },
	{ n: "Mebsuta", h: 20, lb: 97036 },
	{ n: "Menkar", h: 34, lb: 149297 },
	{ n: "Menkent", h: 17, lb: 105967 },
	{ n: "Meram", h: 25, lb: 168151 },
	{ n: "Miackio", h: 16, lb: 304092 },
	{ n: "Miarin", h: 20, lb: 3354 },
	{ n: "Miayack", h: 14, lb: 10115 },
	{ n: "Miayda", h: 17, lb: 378540 },
	{ n: "Micanex", h: 20, lb: 35826 },
	{ n: "Mintaka", h: 25, lb: 150215 },
	{ n: "Miola", h: 19, lb: 329697 },
	{ n: "Miphimi", h: 18, lb: 43957 },
	{ n: "Mizar", h: 23, lb: 51715 },
	{ n: "Naos", h: 18, lb: 106307 },
	{ n: "Nari", h: 37, lb: 137155 },
	{ n: "Nashira", h: 21, lb: 123205 },
	{ n: "Nebul", h: 26, lb: 36226 },
	{ n: "Nekkar", h: 24, lb: 123709 },
	{ n: "Nex 0001", h: 25, lb: 83052 },
	{ n: "Nex 0002", h: 25, lb: 44353 },
	{ n: "Nex 0003", h: 20, lb: 55092 },
	{ n: "Nex 0004", h: 25, lb: 97376 },
	{ n: "Nex 0005", h: 25, lb: 324426 },
	{ n: "Nex 0006", h: 25, lb: 378965 },
	{ n: "Nex Kataam", h: 25, lb: 47473 },
	{ n: "Nhandu", h: 40, lb: 160515 },
	{ n: "Nionquat", h: 20, lb: 36538 },
	{ n: "Nunki", h: 27, lb: 167638 },
	{ n: "Nusakan", h: 19, lb: 98001 },
	{ n: "Oauress", h: 16, lb: 322150 },
	{ n: "Olaeth", h: 14, lb: 124045 },
	{ n: "Olaso", h: 20, lb: 330172 },
	{ n: "Olbea", h: 22, lb: 10451 },
	{ n: "Olcanze", h: 20, lb: 44853 },
	{ n: "Oldain", h: 18, lb: 304492 },
	{ n: "Olexti", h: 16, lb: 3494 },
	{ n: "Ollaffa", h: 14, lb: 309377 },
	{ n: "Olphize", h: 21, lb: 20858 },
	{ n: "Omicron Eridani", h: 19, lb: 36838 },
	{ n: "Ook", h: 15, lb: 3622 },
	{ n: "Ophiuchi", h: 20, lb: 55592 },
	{ n: "Orerve", h: 15, lb: 3847 },
	{ n: "Oucanfa", h: 15, lb: 379590 },
	{ n: "PA 2-013", h: 17, lb: 330672 },
	{ n: "Paan", h: 23, lb: 56032 },
	{ n: "Pardus", h: 93, lb: 151215 },
	{ n: "Pass EMP-01", h: 25, lb: 15053 },
	{ n: "Pass EMP-02", h: 20, lb: 15553 },
	{ n: "Pass EMP-03", h: 20, lb: 31688 },
	{ n: "Pass EMP-04", h: 25, lb: 58622 },
	{ n: "Pass EMP-05", h: 20, lb: 59247 },
	{ n: "Pass EMP-06", h: 13, lb: 110762 },
	{ n: "Pass EMP-07", h: 23, lb: 312856 },
	{ n: "Pass EMP-08", h: 21, lb: 313431 },
	{ n: "Pass EMP-09", h: 25, lb: 313956 },
	{ n: "Pass EMP-10", h: 25, lb: 314581 },
	{ n: "Pass EMP-11", h: 22, lb: 315206 },
	{ n: "Pass FED-01", h: 17, lb: 15913 },
	{ n: "Pass FED-02", h: 19, lb: 16219 },
	{ n: "Pass FED-03", h: 15, lb: 39275 },
	{ n: "Pass FED-04", h: 22, lb: 39530 },
	{ n: "Pass FED-05", h: 21, lb: 40080 },
	{ n: "Pass FED-06", h: 23, lb: 40521 },
	{ n: "Pass FED-07", h: 15, lb: 85857 },
	{ n: "Pass FED-08", h: 23, lb: 315536 },
	{ n: "Pass FED-09", h: 17, lb: 315858 },
	{ n: "Pass FED-10", h: 20, lb: 316249 },
	{ n: "Pass FED-11", h: 17, lb: 316629 },
	{ n: "Pass FED-12", h: 22, lb: 317003 },
	{ n: "Pass FED-13", h: 21, lb: 381583 },
	{ n: "Pass UNI-01", h: 16, lb: 111087 },
	{ n: "Pass UNI-02", h: 10, lb: 111487 },
	{ n: "Pass UNI-03", h: 20, lb: 111587 },
	{ n: "Pass UNI-04", h: 25, lb: 127261 },
	{ n: "Pass UNI-05", h: 26, lb: 127886 },
	{ n: "Pass UNI-06", h: 19, lb: 317465 },
	{ n: "Pass UNI-07", h: 24, lb: 317788 },
	{ n: "Pass UNI-08", h: 31, lb: 318340 },
	{ n: "Pass UNI-09", h: 15, lb: 381919 },
	{ n: "Phaet", h: 16, lb: 124297 },
	{ n: "Phao", h: 20, lb: 98476 },
	{ n: "Phekda", h: 17, lb: 37142 },
	{ n: "Phiagre", h: 13, lb: 45253 },
	{ n: "Phiandgre", h: 20, lb: 322502 },
	{ n: "Phicanho", h: 25, lb: 10913 },
	{ n: "PI 4-669", h: 10, lb: 29230 },
	{ n: "PJ 3373", h: 6, lb: 4117 },
	{ n: "PO 4-991", h: 14, lb: 11238 },
	{ n: "Polaris", h: 14, lb: 83627 },
	{ n: "Pollux", h: 10, lb: 29320 },
	{ n: "PP 5-713", h: 13, lb: 325051 },
	{ n: "Procyon", h: 31, lb: 161635 },
	{ n: "Propus", h: 20, lb: 379815 },
	{ n: "Quaack", h: 25, lb: 162782 },
	{ n: "Quana", h: 26, lb: 11518 },
	{ n: "Quaphi", h: 14, lb: 304816 },
	{ n: "Quator", h: 18, lb: 29520 },
	{ n: "Quexce", h: 24, lb: 106613 },
	{ n: "Quexho", h: 14, lb: 322982 },
	{ n: "Quince", h: 16, lb: 56607 },
	{ n: "Qumia", h: 15, lb: 83767 },
	{ n: "Qumiin", h: 20, lb: 309615 },
	{ n: "Quurze", h: 20, lb: 4177 },
	{ n: "QW 2-014", h: 9, lb: 21257 },
	{ n: "RA 3-124", h: 12, lb: 309975 },
	{ n: "Ras Elased", h: 40, lb: 163482 },
	{ n: "Rashkan", h: 29, lb: 37278 },
	{ n: "Regulus", h: 16, lb: 29844 },
	{ n: "Remo", h: 26, lb: 45526 },
	{ n: "Retho", h: 22, lb: 21392 },
	{ n: "Rigel", h: 34, lb: 165122 },
	{ n: "Ross", h: 15, lb: 46254 },
	{ n: "Rotanev", h: 19, lb: 98896 },
	{ n: "RV 2-578", h: 12, lb: 11934 },
	{ n: "RX 3-129", h: 12, lb: 305054 },
	{ n: "SA 2779", h: 5, lb: 4497 },
	{ n: "Sargas", h: 25, lb: 166788 },
	{ n: "SD 3-562", h: 19, lb: 46509 },
	{ n: "Seginus", h: 18, lb: 99200 },
	{ n: "SF 5-674", h: 22, lb: 310119 },
	{ n: "Siberion", h: 15, lb: 4577 },
	{ n: "Sigma Draconis", h: 20, lb: 12102 },
	{ n: "Silaad", h: 20, lb: 380135 },
	{ n: "Sirius", h: 25, lb: 124569 },
	{ n: "Ska", h: 25, lb: 12602 },
	{ n: "Sobein", h: 12, lb: 331012 },
	{ n: "Sodaack", h: 16, lb: 56831 },
	{ n: "Soessze", h: 20, lb: 21876 },
	{ n: "Sohoa", h: 16, lb: 38003 },
	{ n: "Sol", h: 29, lb: 4952 },
	{ n: "Solaqu", h: 25, lb: 84067 },
	{ n: "Soolti", h: 20, lb: 310405 },
	{ n: "Sophilia", h: 17, lb: 107069 },
	{ n: "Sowace", h: 21, lb: 325246 },
	{ n: "Spica", h: 23, lb: 107477 },
	{ n: "Stein", h: 16, lb: 323220 },
	{ n: "Subra", h: 20, lb: 125319 },
	{ n: "SZ 4-419", h: 7, lb: 30100 },
	{ n: "Tau Ceti", h: 15, lb: 5648 },
	{ n: "TG 2-143", h: 12, lb: 22276 },
	{ n: "Thabit", h: 25, lb: 99506 },
	{ n: "Tiacan", h: 18, lb: 38227 },
	{ n: "Tiacken", h: 28, lb: 22408 },
	{ n: "Tiafa", h: 27, lb: 310825 },
	{ n: "Tianbe", h: 15, lb: 30184 },
	{ n: "Tiexen", h: 20, lb: 13602 },
	{ n: "Tigrecan", h: 13, lb: 331192 },
	{ n: "Tiliala", h: 17, lb: 57071 },
	{ n: "Tiurio", h: 14, lb: 305210 },
	{ n: "Tivea", h: 20, lb: 323476 },
	{ n: "Turais", h: 23, lb: 125719 },
	{ n: "UF 3-555", h: 14, lb: 311473 },
	{ n: "UG 5-093", h: 23, lb: 126179 },
	{ n: "Urandack", h: 15, lb: 13982 },
	{ n: "Ureneth", h: 17, lb: 311669 },
	{ n: "Uressce", h: 17, lb: 331439 },
	{ n: "Urfaa", h: 20, lb: 107937 },
	{ n: "Urhoho", h: 18, lb: 22940 },
	{ n: "Urioed", h: 9, lb: 57496 },
	{ n: "Urlafa", h: 16, lb: 30469 },
	{ n: "Ururur", h: 17, lb: 46946 },
	{ n: "Usube", h: 30, lb: 23264 },
	{ n: "Uv Seti", h: 15, lb: 331779 },
	{ n: "UZ 8-466", h: 13, lb: 84692 },
	{ n: "Veareth", h: 25, lb: 57685 },
	{ n: "Vecelia", h: 26, lb: 380635 },
	{ n: "Veedfa", h: 15, lb: 323976 },
	{ n: "Vega", h: 25, lb: 108857 },
	{ n: "Veliace", h: 16, lb: 332109 },
	{ n: "Vewaa", h: 15, lb: 30741 },
	{ n: "VH 3-344", h: 16, lb: 14282 },
	{ n: "VM 3-326", h: 10, lb: 311975 },
	{ n: "Waarze", h: 14, lb: 58160 },
	{ n: "Waayan", h: 16, lb: 38497 },
	{ n: "Wainze", h: 16, lb: 109607 },
	{ n: "Waiophi", h: 15, lb: 14410 },
	{ n: "Wamien", h: 15, lb: 312225 },
	{ n: "Waolex", h: 25, lb: 84952 },
	{ n: "Wasat", h: 19, lb: 100131 },
	{ n: "Watibe", h: 15, lb: 305560 },
	{ n: "Wezen", h: 20, lb: 126685 },
	{ n: "WG 3-288", h: 13, lb: 31071 },
	{ n: "WI 4-329", h: 21, lb: 332509 },
	{ n: "WO 3-290", h: 11, lb: 47286 },
	{ n: "Wolf", h: 20, lb: 31188 },
	{ n: "WP 3155", h: 7, lb: 6023 },
	{ n: "WW 2-934", h: 11, lb: 127085 },
	{ n: "XC 3-261", h: 13, lb: 14665 },
	{ n: "Xeho", h: 17, lb: 381025 },
	{ n: "Xewao", h: 16, lb: 312600 },
	{ n: "XH 3819", h: 12, lb: 6142 },
	{ n: "YC 3-268", h: 15, lb: 38897 },
	{ n: "Yildun", h: 17, lb: 100606 },
	{ n: "YS 3-386", h: 20, lb: 305875 },
	{ n: "YV 3-386", h: 18, lb: 109879 },
	{ n: "Zamith", h: 18, lb: 23684 },
	{ n: "Zaniah", h: 16, lb: 100844 },
	{ n: "Zaurak", h: 27, lb: 110095 },
	{ n: "Zeaay", h: 14, lb: 332845 },
	{ n: "Zeaex", h: 14, lb: 39107 },
	{ n: "Zearla", h: 16, lb: 306155 },
	{ n: "Zelada", h: 20, lb: 85577 },
	{ n: "Zeolen", h: 12, lb: 14873 },
	{ n: "Zezela", h: 10, lb: 31548 },
	{ n: "Zirr", h: 18, lb: 24008 },
	{ n: "ZP 2-989", h: 14, lb: 58440 },
	{ n: "ZS 3-798", h: 20, lb: 306427 },
	{ n: "ZU 3-239", h: 22, lb: 381297 },
	{ n: "Zuben Elakrab", h: 17, lb: 101100 },
	{ n: "ZZ 2986", h: 5, lb: 6334}
];

var NAME_IDS; // lazily initialized in Sectors.getId

var Sector = {};

Sector.getId = function( sectorName ) {
	if ( NAME_IDS === undefined ) {
		NAME_IDS = CATALOGUE.reduce(
			function( name_ids, data, id ) {
				name_ids[ data.n ] = id;
				return name_ids;
			},
			{}
		);
	}

	return NAME_IDS[ sectorName ];
}

Sector.getName = function( sectorId ) {
	var s = CATALOGUE[ sectorId ];
	return s !== undefined ? s.n : undefined;
}

Sector.getLocation = function( sectorId, x, y ) {
	var s = CATALOGUE[ sectorId ];
	return s !== undefined ? (s.lb + s.h * x + y) : undefined;
}

Sector.getCoords = function( sectorId, location ) {
	var s = CATALOGUE[ sectorId ];
	if ( s === undefined )
		return undefined;
	location -= s.lb;
	return {
		x: Math.floor( location / s.h ),
		y: location % s.h
	};
}

Sector.getIdFromLocation = function( location ) {
	//Returns the sectorId from the location.
	var min = Infinity, sectorId
	CATALOGUE.forEach( findSector )
	
	function findSector( sector, ind ) {
		if ( location - sector[ 'lb' ] < min && location - sector[ 'lb' ] >= 0 ) {
			min = location - sector[ 'lb' ];
			sectorId = ind;
		}
	}
	return sectorId;
}

return Sector;

})();