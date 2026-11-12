/* Pronunciation dictionary for every Amharic (am) and Ge'ez (gez) word or phrase the app speaks.
   Lessons write a word as [[key]]. On screen it shows as Fidel with the Latin spelling.
   When Selam speaks it, the app plays, in order:
     1. a recorded clip, audio/words/<key>.mp3 (listed in data/audio.js once it exists)
     2. a device Amharic voice reading the Fidel (am only, e.g. Microsoft Edge "Mekdes"/"Ameha")
     3. the English-voice respelling in "say" (am only)
   Ge'ez (gez) words are never given to a text-to-speech voice: they stay silent until a recording exists.
   Seeded from /mnt/project-files/audio/recording-script.csv. Entries marked check:true were added for lesson batch 1
   and their Fidel still needs a native speaker's check, like the rest. */
window.BK_LEX = {
 "selam": {
  "fidel": "ሰላም",
  "latin": "Selam",
  "en": "peace / hello (also the guide's name)",
  "lang": "am",
  "say": "seh-LAHM"
 },
 "egziabher": {
  "fidel": "እግዚአብሔር",
  "latin": "Egziabher",
  "en": "God",
  "lang": "am",
  "say": null
 },
 "egziabher-hulun-fetere": {
  "fidel": "እግዚአብሔር ሁሉን ፈጠረ",
  "latin": "Egziabher hulun fetere",
  "en": "God made everything",
  "lang": "am",
  "say": null
 },
 "fitret": {
  "fidel": "ፍጥረት",
  "latin": "Fitret",
  "en": "creation",
  "lang": "am",
  "say": "FIT-ret"
 },
 "birhan": {
  "fidel": "ብርሃን",
  "latin": "Birhan",
  "en": "light",
  "lang": "am",
  "say": "bir-HAHN"
 },
 "birhan-yihun": {
  "fidel": "ብርሃን ይሁን",
  "latin": "Birhan yihun",
  "en": "Let there be light",
  "lang": "am",
  "say": null
 },
 "yihun": {
  "fidel": "ይሁን",
  "latin": "Yihun",
  "en": "let it be",
  "lang": "am",
  "say": "yi-HOON"
 },
 "malaekt": {
  "fidel": "መላእክት",
  "latin": "Melaekt",
  "en": "angels",
  "lang": "gez",
  "say": null
 },
 "semay": {
  "fidel": "ሰማይ",
  "latin": "Semay",
  "en": "sky / heaven",
  "lang": "am",
  "say": "seh-MY"
 },
 "yebsu": {
  "fidel": "የብሱ",
  "latin": "Yebsu",
  "en": "dry land",
  "lang": "gez",
  "say": null
 },
 "medr": {
  "fidel": "ምድር",
  "latin": "Midir",
  "en": "earth / land",
  "lang": "am",
  "say": "MIH-dir"
 },
 "tsehay": {
  "fidel": "ፀሐይ",
  "latin": "Tsehay",
  "en": "sun",
  "lang": "am",
  "say": null
 },
 "chereka": {
  "fidel": "ጨረቃ",
  "latin": "Chereka",
  "en": "moon",
  "lang": "am",
  "say": null
 },
 "asa": {
  "fidel": "ዓሣ",
  "latin": "Asa",
  "en": "fish",
  "lang": "am",
  "say": "AH-sah"
 },
 "wof": {
  "fidel": "ወፍ",
  "latin": "Wef",
  "en": "bird",
  "lang": "am",
  "say": "wuff"
 },
 "asana-wofoch": {
  "fidel": "ዓሣና ወፎች",
  "latin": "Asana wofoch",
  "en": "fish and birds",
  "lang": "am",
  "say": null
 },
 "ensisat": {
  "fidel": "እንስሳት",
  "latin": "Ensisat",
  "en": "animals",
  "lang": "am",
  "say": "en-sis-SAHT"
 },
 "anbessa": {
  "fidel": "አንበሳ",
  "latin": "Anbessa",
  "en": "lion",
  "lang": "am",
  "say": "ahn-BES-sah"
 },
 "walya": {
  "fidel": "ዋልያ",
  "latin": "Walya",
  "en": "walia ibex",
  "lang": "am",
  "say": "WAHL-yah"
 },
 "chilada": {
  "fidel": "ጭላዳ",
  "latin": "Chilada",
  "en": "gelada monkey",
  "lang": "am",
  "say": null
 },
 "lam": {
  "fidel": "ላም",
  "latin": "Lam",
  "en": "cow",
  "lang": "am",
  "say": "lahm"
 },
 "beg": {
  "fidel": "በግ",
  "latin": "Beg",
  "en": "sheep",
  "lang": "am",
  "say": "beg"
 },
 "adamna-hewan": {
  "fidel": "አዳምና ሔዋን",
  "latin": "Adamna Hewan",
  "en": "Adam and Eve",
  "lang": "am",
  "say": null
 },
 "one": {
  "fidel": "አንድ",
  "latin": "And",
  "en": "one",
  "lang": "am",
  "say": "ahnd"
 },
 "two": {
  "fidel": "ሁለት",
  "latin": "Hulet",
  "en": "two",
  "lang": "am",
  "say": "HOO-let"
 },
 "three": {
  "fidel": "ሦስት",
  "latin": "Sost",
  "en": "three",
  "lang": "am",
  "say": "sohst"
 },
 "four": {
  "fidel": "አራት",
  "latin": "Arat",
  "en": "four",
  "lang": "am",
  "say": "ah-RAHT"
 },
 "five": {
  "fidel": "አምስት",
  "latin": "Amist",
  "en": "five",
  "lang": "am",
  "say": "AHM-ist"
 },
 "six": {
  "fidel": "ስድስት",
  "latin": "Sidist",
  "en": "six",
  "lang": "am",
  "say": "SID-dist"
 },
 "seven": {
  "fidel": "ሰባት",
  "latin": "Sebat",
  "en": "seven",
  "lang": "am",
  "say": "seh-BAHT"
 },
 "cross-1": {
  "fidel": "በስመ አብ",
  "latin": "Beseme Ab",
  "en": "In the name of the Father",
  "lang": "gez",
  "say": null
 },
 "cross-2": {
  "fidel": "ወወልድ",
  "latin": "Wewold",
  "en": "and the Son",
  "lang": "gez",
  "say": null
 },
 "cross-3": {
  "fidel": "ወመንፈስ ቅዱስ",
  "latin": "Wemenfes Kidus",
  "en": "and the Holy Spirit",
  "lang": "gez",
  "say": null
 },
 "cross-4": {
  "fidel": "አሐዱ አምላክ",
  "latin": "Ahadu Amlak",
  "en": "one God",
  "lang": "gez",
  "say": null
 },
 "amen": {
  "fidel": "አሜን",
  "latin": "Amen",
  "en": "Amen",
  "lang": "gez",
  "say": "ah-MEN"
 },
 "sign-of-cross": {
  "fidel": "በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ፤ አሜን።",
  "latin": "Beseme Ab wewold wemenfes kidus ahadu amlak amen",
  "en": "Sign of the cross (whole)",
  "lang": "gez",
  "say": null
 },
 "abatachin": {
  "fidel": "አባታችን ሆይ",
  "latin": "Abatachin hoy",
  "en": "Lord's Prayer",
  "lang": "am",
  "say": null
 },
 "tewahedo": {
  "fidel": "ተዋሕዶ",
  "latin": "Tewahedo",
  "en": "union (the Church's name)",
  "lang": "gez",
  "say": null
 },
 "meskel": {
  "fidel": "መስቀል",
  "latin": "Meskel",
  "en": "cross / feast of the cross",
  "lang": "am",
  "say": "MES-kel"
 },
 "timket": {
  "fidel": "ጥምቀት",
  "latin": "Timket",
  "en": "Epiphany / baptism",
  "lang": "am",
  "say": null
 },
 "genna": {
  "fidel": "ገና",
  "latin": "Genna",
  "en": "Christmas",
  "lang": "am",
  "say": null
 },
 "fasika": {
  "fidel": "ፋሲካ",
  "latin": "Fasika",
  "en": "Easter",
  "lang": "am",
  "say": "fah-SEE-kah"
 },
 "hosanna": {
  "fidel": "ሆሣዕና",
  "latin": "Hosanna",
  "en": "Palm Sunday",
  "lang": "am",
  "say": null
 },
 "tsom": {
  "fidel": "ጾም",
  "latin": "Tsom",
  "en": "fasting",
  "lang": "am",
  "say": null
 },
 "kidase": {
  "fidel": "ቅዳሴ",
  "latin": "Kidase",
  "en": "Divine Liturgy",
  "lang": "am",
  "say": null
 },
 "tabot": {
  "fidel": "ታቦት",
  "latin": "Tabot",
  "en": "ark (tabot)",
  "lang": "am",
  "say": "tah-BOHT"
 },
 "mariam": {
  "fidel": "ማርያም",
  "latin": "Mariam",
  "en": "Mary",
  "lang": "am",
  "say": "MAR-yahm"
 },
 "medhane-alem": {
  "fidel": "መድኃኔ ዓለም",
  "latin": "Medhane Alem",
  "en": "Savior of the World",
  "lang": "gez",
  "say": null
 },
 "eyesus-kristos": {
  "fidel": "ኢየሱስ ክርስቶስ",
  "latin": "Eyesus Kristos",
  "en": "Jesus Christ",
  "lang": "am",
  "say": null
 },
 "kidus-mikael": {
  "fidel": "ቅዱስ ሚካኤል",
  "latin": "Kidus Mikael",
  "en": "Saint Michael",
  "lang": "am",
  "say": null
 },
 "kidus-giyorgis": {
  "fidel": "ቅዱስ ጊዮርጊስ",
  "latin": "Kidus Giyorgis",
  "en": "Saint George",
  "lang": "am",
  "say": null
 },
 "kidus-yared": {
  "fidel": "ቅዱስ ያሬድ",
  "latin": "Kidus Yared",
  "en": "Saint Yared",
  "lang": "am",
  "say": null
 },
 "tekle-haimanot": {
  "fidel": "ተክለ ሃይማኖት",
  "latin": "Tekle Haimanot",
  "en": "Saint Tekle Haimanot",
  "lang": "am",
  "say": null
 },
 "meskerem": {
  "fidel": "መስከረም",
  "latin": "Meskerem",
  "en": "first month (September)",
  "lang": "am",
  "say": "mes-keh-REM"
 },
 "enkutatash": {
  "fidel": "እንቁጣጣሽ",
  "latin": "Enkutatash",
  "en": "New Year",
  "lang": "am",
  "say": null
 },
 "noah": {
  "fidel": "ኖኅ",
  "latin": "Noh",
  "en": "Noah",
  "lang": "am",
  "say": null,
  "check": true
 },
 "merkeb": {
  "fidel": "መርከብ",
  "latin": "Merkeb",
  "en": "ship / ark",
  "lang": "am",
  "say": "mer-KEB",
  "check": true
 },
 "kestedemena": {
  "fidel": "ቀስተ ደመና",
  "latin": "Keste demena",
  "en": "rainbow",
  "lang": "am",
  "say": null,
  "check": true
 },
 "zinab": {
  "fidel": "ዝናብ",
  "latin": "Zinab",
  "en": "rain",
  "lang": "am",
  "say": "zih-NAHB",
  "check": true
 },
 "rigib": {
  "fidel": "ርግብ",
  "latin": "Rigib",
  "en": "dove",
  "lang": "am",
  "say": "rih-GIB",
  "check": true
 },
 "abraham": {
  "fidel": "አብርሃም",
  "latin": "Abraham",
  "en": "Abraham",
  "lang": "am",
  "say": "ab-rah-HAHM",
  "check": true
 },
 "sara": {
  "fidel": "ሣራ",
  "latin": "Sara",
  "en": "Sarah",
  "lang": "am",
  "say": "SAH-rah",
  "check": true
 },
 "yishak": {
  "fidel": "ይስሐቅ",
  "latin": "Yishak",
  "en": "Isaac",
  "lang": "am",
  "say": null,
  "check": true
 },
 "yaikob": {
  "fidel": "ያዕቆብ",
  "latin": "Yaikob",
  "en": "Jacob",
  "lang": "am",
  "say": null,
  "check": true
 },
 "esaw": {
  "fidel": "ዔሳው",
  "latin": "Esaw",
  "en": "Esau",
  "lang": "am",
  "say": "EH-sow",
  "check": true
 },
 "bereket": {
  "fidel": "በረከት",
  "latin": "Bereket",
  "en": "blessing",
  "lang": "am",
  "say": "beh-reh-KET",
  "check": true
 },
 "mesalal": {
  "fidel": "መሰላል",
  "latin": "Mesalal",
  "en": "ladder",
  "lang": "am",
  "say": "meh-seh-LAHL",
  "check": true
 },
 "betel": {
  "fidel": "ቤቴል",
  "latin": "Betel",
  "en": "Bethel, the house of God",
  "lang": "am",
  "say": "bay-TEL",
  "check": true
 },
 "israel": {
  "fidel": "እስራኤል",
  "latin": "Israel",
  "en": "Israel",
  "lang": "am",
  "say": null,
  "check": true
 },
 "muse": {
  "fidel": "ሙሴ",
  "latin": "Muse",
  "en": "Moses",
  "lang": "am",
  "say": "moo-SEH",
  "check": true
 },
 "debre-sina": {
  "fidel": "ደብረ ሲና",
  "latin": "Debre Sina",
  "en": "Mount Sinai",
  "lang": "gez",
  "say": null,
  "check": true
 },
 "gibts": {
  "fidel": "ግብፅ",
  "latin": "Gibts",
  "en": "Egypt",
  "lang": "am",
  "say": null,
  "check": true
 },
 "ahiya": {
  "fidel": "አህያ",
  "latin": "Ahiya",
  "en": "donkey",
  "lang": "am",
  "say": "ah-hih-YAH",
  "check": true
 },
 "yosef": {
  "fidel": "ዮሴፍ",
  "latin": "Yosef",
  "en": "Joseph",
  "lang": "am",
  "say": "yoh-SEF",
  "check": true
 },
 "herodis": {
  "fidel": "ሄሮድስ",
  "latin": "Herodis",
  "en": "Herod",
  "lang": "am",
  "say": "heh-ROH-dis",
  "check": true
 },
 "jesus-baby": {
  "fidel": "ሕፃኑ ኢየሱስ",
  "latin": "Hitsanu Eyesus",
  "en": "baby Jesus",
  "lang": "am",
  "say": null,
  "check": true
 },
 "zendo": {
  "fidel": "ዘንዶ",
  "latin": "Zendo",
  "en": "dragon",
  "lang": "am",
  "say": "ZEN-doh",
  "check": true
 },
 "kokeb": {
  "fidel": "ኮከብ",
  "latin": "Kokeb",
  "en": "star",
  "lang": "am",
  "say": "KOH-keb",
  "check": true
 },
 "lij": {
  "fidel": "ልጅ",
  "latin": "Lij",
  "en": "child",
  "lang": "am",
  "say": "lij",
  "check": true
 },
 "abat": {
  "fidel": "አባት",
  "latin": "Abat",
  "en": "father",
  "lang": "am",
  "say": "ah-BAHT",
  "check": true
 },
 "enat": {
  "fidel": "እናት",
  "latin": "Enat",
  "en": "mother",
  "lang": "am",
  "say": "ih-NAHT",
  "check": true
 },
 "wendim": {
  "fidel": "ወንድም",
  "latin": "Wendim",
  "en": "brother",
  "lang": "am",
  "say": "WEN-dim",
  "check": true
 },
 "kebero": {
  "fidel": "ከበሮ",
  "latin": "Kebero",
  "en": "church drum",
  "lang": "am",
  "say": "keh-BEH-roh",
  "check": true
 },
 "mezmur": {
  "fidel": "መዝሙር",
  "latin": "Mezmur",
  "en": "hymn / song",
  "lang": "am",
  "say": "mez-MOOR",
  "check": true
 },
 "adey-abeba": {
  "fidel": "አደይ አበባ",
  "latin": "Adey abeba",
  "en": "Meskel daisy",
  "lang": "am",
  "say": "ah-DAY ah-BEH-bah",
  "check": true
 },
 "egziabher-yimesgen": {
  "fidel": "እግዚአብሔር ይመስገን",
  "latin": "Egziabher yimesgen",
  "en": "Thank God",
  "lang": "am",
  "say": null,
  "check": true
 },
 "petros": {
  "fidel": "ጴጥሮስ",
  "latin": "Petros",
  "en": "Peter",
  "lang": "am",
  "say": "PEH-tros",
  "check": true
 },
 "ayzoh": {
  "fidel": "አይዞህ",
  "latin": "Ayzoh",
  "en": "be brave, don't be afraid",
  "lang": "am",
  "say": "eye-ZOH",
  "check": true
 },
 "siloam": {
  "fidel": "ሰሊሆም",
  "latin": "Siloham",
  "en": "the pool of Siloam",
  "lang": "am",
  "say": "seh-lee-HOME",
  "check": true
 },
 "dawit": {
  "fidel": "ዳዊት",
  "latin": "Dawit",
  "en": "David",
  "lang": "am",
  "say": "DAH-weet",
  "check": true
 },
 "begena": {
  "fidel": "በገና",
  "latin": "Begena",
  "en": "the Ethiopian harp (lyre) of prayer",
  "lang": "am",
  "say": "beh-geh-NAH",
  "check": true
 },
 "washint": {
  "fidel": "ዋሽንት",
  "latin": "Washint",
  "en": "Ethiopian shepherd's flute",
  "lang": "am",
  "say": "WAH-shint",
  "check": true
 },
 "betekrstian": {
  "fidel": "ቤተ ክርስቲያን",
  "latin": "Bete Kristiyan",
  "en": "church",
  "lang": "am",
  "say": "BEH-teh kris-tee-YAHN",
  "check": true
 },
 "demera": {
  "fidel": "ደመራ",
  "latin": "Demera",
  "en": "Meskel bonfire",
  "lang": "am",
  "say": "deh-meh-RAH",
  "check": true
 }
};
