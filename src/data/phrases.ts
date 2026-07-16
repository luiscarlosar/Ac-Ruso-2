export interface Phrase {
  id: string;
  category: string;
  spanish: string;
  russian: string;
  transliteration: string;
  isCustom?: boolean;
}

export const CATEGORIES = [
  "Saludos y Bienvenida",
  "Tallas y Ajuste",
  "Lencería y Ropa Interior",
  "Probadores",
  "Calidad, Tejidos y Materiales",
  "Precios y Ofertas",
  "Pago y Caja",
  "Devoluciones y Cambios",
  "Atención y Sugerencias",
  "Despedidas"
];

export const INITIAL_PHRASES: Phrase[] = [
  // SALUDOS Y BIENVENIDA (20 frases)
  {
    id: "greet-1",
    category: "Saludos y Bienvenida",
    spanish: "¡Hola! Bienvenido/a a nuestra tienda.",
    russian: "Здравствуйте! Добро пожаловать в наш магазин.",
    transliteration: "Zdrástvuyte! Dobró pozhálovat' v nash magazín."
  },
  {
    id: "greet-2",
    category: "Saludos y Bienvenida",
    spanish: "¿En qué puedo ayudarle hoy?",
    russian: "Чем я могу вам помочь сегодня?",
    transliteration: "Chem ya mogú vam pomóch' segódnya?"
  },
  {
    id: "greet-3",
    category: "Saludos y Bienvenida",
    spanish: "Hola, si necesita algo solo dígame.",
    russian: "Здравствуйте, если вам что-то понадобится, просто скажите мне.",
    transliteration: "Zdrástvuyte, yésli vam chtó-to ponádobitsya, prósto skazhíte mne."
  },
  {
    id: "greet-4",
    category: "Saludos y Bienvenida",
    spanish: "Pase adelante, por favor.",
    russian: "Проходите, пожалуйста.",
    transliteration: "Prokhodíte, pozháluysta."
  },
  {
    id: "greet-5",
    category: "Saludos y Bienvenida",
    spanish: "Es un placer atenderle.",
    russian: "Рада помочь вам.",
    transliteration: "Ráda pomóch' vam."
  },
  {
    id: "greet-6",
    category: "Saludos y Bienvenida",
    spanish: "¿Está buscando algo en especial?",
    russian: "Вы ищете что-то конкретное?",
    transliteration: "Vy íschete chtó-to konkrétnoye?"
  },
  {
    id: "greet-7",
    category: "Saludos y Bienvenida",
    spanish: "Puede echar un vistazo con total tranquilidad.",
    russian: "Вы можете спокойно всё осмотреть.",
    transliteration: "Vy mózhete spokóyno vsyo osmotrét'."
  },
  {
    id: "greet-8",
    category: "Saludos y Bienvenida",
    spanish: "Le presento nuestra nueva colección de temporada.",
    russian: "Позвольте представить вам нашу новую сезонную коллекцию.",
    transliteration: "Pozvól'te predstávit' vam náshu nóvuyu sezónnuyu kolléktsiyu."
  },
  {
    id: "greet-9",
    category: "Saludos y Bienvenida",
    spanish: "Hoy tenemos promociones muy interesantes.",
    russian: "Сегодня у нас очень интересные акции.",
    transliteration: "Segódnya u nas óchen' interésnyye áktsii."
  },
  {
    id: "greet-10",
    category: "Saludos y Bienvenida",
    spanish: "Hola, bienvenida a la sección de lencería fina.",
    russian: "Здравствуйте, добро пожаловать в отдел изысканного нижнего белья.",
    transliteration: "Zdrástvuyte, dobró pozhálovat' v otdél izýskannovo nízhnevo bel'yá."
  },
  {
    id: "greet-11",
    category: "Saludos y Bienvenida",
    spanish: "¡Buenos días!",
    russian: "Доброе утро!",
    transliteration: "Dóbriye útro!"
  },
  {
    id: "greet-12",
    category: "Saludos y Bienvenida",
    spanish: "¡Buenas tardes!",
    russian: "Добрый день!",
    transliteration: "Dóbryy den'!"
  },
  {
    id: "greet-13",
    category: "Saludos y Bienvenida",
    spanish: "¿Puedo ofrecerle una cesta para sus prendas?",
    russian: "Могу я предложить вам корзину для покупок?",
    transliteration: "Mogú ya predlozhít' vam korzínu dlyá pokúpok?"
  },
  {
    id: "greet-14",
    category: "Saludos y Bienvenida",
    spanish: "Hola, mi nombre es Elena, estaré aquí para ayudarle.",
    russian: "Здравствуйте, меня зовут Елена, я здесь, чтобы помочь вам.",
    transliteration: "Zdrástvuyte, menyá zovút Yeléna, ya zdes', chtóby pomóch' vam."
  },
  {
    id: "greet-15",
    category: "Saludos y Bienvenida",
    spanish: "Disculpe, ¿le gustaría conocer nuestros descuentos de hoy?",
    russian: "Извините, хотите узнать о наших скидках на сегодня?",
    transliteration: "Izviníte, khotíte uznát' o náshikh skídkakh na segódnya?"
  },
  {
    id: "greet-16",
    category: "Saludos y Bienvenida",
    spanish: "¡Hola! Qué alegría volver a verle.",
    russian: "Здравствуйте! Как приятно снова вас видеть.",
    transliteration: "Zdrástvuyte! Kak priyátno snóva vas vídet'."
  },
  {
    id: "greet-17",
    category: "Saludos y Bienvenida",
    spanish: "No dude en preguntarme si tiene alguna duda.",
    russian: "Не стесняйтесь спрашивать, если у вас возникнут вопросы.",
    transliteration: "Ne stesnyáytes' spráshivat', yésli u vas vozníknut voprósy."
  },
  {
    id: "greet-18",
    category: "Saludos y Bienvenida",
    spanish: "Tenemos una fragancia de cortesía en esta zona.",
    russian: "В этой зоне у нас есть бесплатный парфюм для знакомства.",
    transliteration: "V étoy zóne u nas yest' besplátnyy parfým dlyá znakómstva."
  },
  {
    id: "greet-19",
    category: "Saludos y Bienvenida",
    spanish: "Espero que disfrute de su experiencia de compra.",
    russian: "Надеюсь, вам понравится делать покупки у нас.",
    transliteration: "Nadéyus', vam ponrávitsya délat' pokúpki u nas."
  },
  {
    id: "greet-20",
    category: "Saludos y Bienvenida",
    spanish: "Nuestros conjuntos de encaje acaban de llegar hoy.",
    russian: "Наши кружевные комплекты только сегодня поступили.",
    transliteration: "Náshi kruzhevnýye komplékty tól'ko segódnya postupíli."
  },

  // TALLAS Y AJUSTE (20 frases)
  {
    id: "size-1",
    category: "Tallas y Ajuste",
    spanish: "¿Qué talla está buscando?",
    russian: "Какой размер вы ищете?",
    transliteration: "Kakóy razmér vy íschete?"
  },
  {
    id: "size-2",
    category: "Tallas y Ajuste",
    spanish: "¿Qué talla de sujetador usa habitualmente?",
    russian: "Какой размер бюстгальтера вы обычно носите?",
    transliteration: "Kakóy razmér byustgál'tera vy obýchno nósite?"
  },
  {
    id: "size-3",
    category: "Tallas y Ajuste",
    spanish: "Déjeme medirle el contorno para saber su talla exacta.",
    russian: "Позвольте мне измерить ваш обхват, чтобы определить точный размер.",
    transliteration: "Pozvól'te mne izmérit' vash obkhvát, chtóby opredelít' tóchnyy razmér."
  },
  {
    id: "size-4",
    category: "Tallas y Ajuste",
    spanish: "Esta prenda talla un poco pequeña, le aconsejo una talla más.",
    russian: "Эта вещь немного маломерит, советую взять на размер больше.",
    transliteration: "Éta vesch' nemnógo malomerít, sovétuyu vzyat' na razmér ból'she."
  },
  {
    id: "size-5",
    category: "Tallas y Ajuste",
    spanish: "Este modelo es elástico y se adapta perfectamente.",
    russian: "Эта модель эластичная и отлично садится по фигуре.",
    transliteration: "Éta modél' elastíchnaya i otlíchno sadítsya po figúre."
  },
  {
    id: "size-6",
    category: "Tallas y Ajuste",
    spanish: "¿Le gustaría probar una talla más pequeña?",
    russian: "Хотите примерить на размер меньше?",
    transliteration: "Khotíte primérit' na razmér mén'she?"
  },
  {
    id: "size-7",
    category: "Tallas y Ajuste",
    spanish: "¿Le gustaría probar una talla más grande?",
    russian: "Хотите примерить на размер больше?",
    transliteration: "Khotíte primérit' na razmér ból'she?"
  },
  {
    id: "size-8",
    category: "Tallas y Ajuste",
    spanish: "Lamentablemente, no nos queda esa talla en este color.",
    russian: "К сожалению, у нас нет этого размера в этом цвете.",
    transliteration: "K sozhaléniyu, u nas net étovo razméra v étom tsvéte."
  },
  {
    id: "size-9",
    category: "Tallas y Ajuste",
    spanish: "Puedo consultar si tenemos esa talla en el almacén.",
    russian: "Я могу проверить наличие этого размера на складе.",
    transliteration: "Ya mogú provérit' nalíchiye étovo razméra na skláde."
  },
  {
    id: "size-10",
    category: "Tallas y Ajuste",
    spanish: "Este corte estiliza mucho la silueta.",
    russian: "Этот крой очень выгодно подчеркивает силуэт.",
    transliteration: "Étot kroy óchen' výgodno podchérkivayet siluét."
  },
  {
    id: "size-11",
    category: "Tallas y Ajuste",
    spanish: "¿Tiene una copa B o una copa C?",
    russian: "У вас чашка B или C?",
    transliteration: "U vas cháshka Be íli Tse?"
  },
  {
    id: "size-12",
    category: "Tallas y Ajuste",
    spanish: "La copa D de este modelo viene bastante completa.",
    russian: "Чашка D в этой модели достаточно глубокая.",
    transliteration: "Cháshka De v étoy modéli dostátochno glubókaya."
  },
  {
    id: "size-13",
    category: "Tallas y Ajuste",
    spanish: "Esta braguita la tenemos en tallas de la S a la XL.",
    russian: "Эти трусики есть в размерах от S до XL.",
    transliteration: "Éti trúsiki yest' v razmérakh ot Es do Eks-El."
  },
  {
    id: "size-14",
    category: "Tallas y Ajuste",
    spanish: "El contorno de este sujetador es de ochenta y cinco centímetros.",
    russian: "Обхват под грудью у этого бюстгальтера — восемьдесят пять сантиметров.",
    transliteration: "Obkhvát pod grúd'yu u étovo byustgál'tera — vósem'desyat pyat' santimétrov."
  },
  {
    id: "size-15",
    category: "Tallas y Ajuste",
    spanish: "Los tirantes de este modelo son totalmente regulables.",
    russian: "Бретели у этой модели полностью регулируются.",
    transliteration: "Bretéli u étoy modéli pólnost'yu regulíruyutsya."
  },
  {
    id: "size-16",
    category: "Tallas y Ajuste",
    spanish: "Si le aprieta del pecho, le recomiendo aumentar el contorno.",
    russian: "Если давит в груди, я рекомендую увеличить обхват.",
    transliteration: "Yésli dávit v grudí, ya rekomendúyu uvelíchit' obkhvát."
  },
  {
    id: "size-17",
    category: "Tallas y Ajuste",
    spanish: "¿Le queda cómodo en la cintura?",
    russian: "Вам удобно в талии?",
    transliteration: "Vam udóbno v tálii?"
  },
  {
    id: "size-18",
    category: "Tallas y Ajuste",
    spanish: "Este camisón tiene un corte holgado y muy cómodo.",
    russian: "У этой сорочки свободный и очень удобный крой.",
    transliteration: "U étoy soróchki svobódnyy i óchen' udóbnyy kroy."
  },
  {
    id: "size-19",
    category: "Tallas y Ajuste",
    spanish: "Aquí tiene la guía de tallas de nuestra marca.",
    russian: "Вот таблица размеров нашего бренда.",
    transliteration: "Vot tablítsa razmérov náshevo brénda."
  },
  {
    id: "size-20",
    category: "Tallas y Ajuste",
    spanish: "¿Le gustaría que le busque una talla menos de este pantalón?",
    russian: "Хотите, я найду брюки на размер меньше?",
    transliteration: "Khotíte, ya naydú bryúki na razmér mén'she?"
  },

  // LENCERÍA Y ROPA INTERIOR (20 frases)
  {
    id: "lingerie-1",
    category: "Lencería y Ropa Interior",
    spanish: "Tenemos conjuntos de encaje preciosos en varios colores.",
    russian: "У нас есть великолепные кружевные комплекты в разных цветах.",
    transliteration: "U nas yest' velikolépnyye kruzhevnýye komplékty v ráznykh tsvetákh."
  },
  {
    id: "lingerie-2",
    category: "Lencería y Ropa Interior",
    spanish: "¿Prefiere un sujetador con aros o sin aros?",
    russian: "Вы предпочитаете бюстгальтер с косточками или без?",
    transliteration: "Vy predpochitáyete byustgál'ter s kóstochkami íli bez?"
  },
  {
    id: "lingerie-3",
    category: "Lencería y Ropa Interior",
    spanish: "Este modelo tiene un efecto push-up muy natural.",
    russian: "У этой модели очень естественный эффект пуш-ап.",
    transliteration: "U étoy modéli óchen' yestéstvennyy effékt push-áp."
  },
  {
    id: "lingerie-4",
    category: "Lencería y Ropa Interior",
    spanish: "Las copas de este sujetador no tienen costuras.",
    russian: "Чашки этого бюстгальтера бесшовные.",
    transliteration: "Cháshki étovo byustgál'tera besshóvnyye."
  },
  {
    id: "lingerie-5",
    category: "Lencería y Ropa Interior",
    spanish: "Estas bragas son cortadas al láser, no se marcan nada.",
    russian: "Эти трусики бесшовные, лазерной резки, они совершенно незаметны.",
    transliteration: "Éti trúsiki besshóvnyye, lázernoy rézki, oní sovershénno nezamétny."
  },
  {
    id: "lingerie-6",
    category: "Lencería y Ropa Interior",
    spanish: "Este picardías viene a juego con el tanga.",
    russian: "Этот пеньюар идет в комплекте с трусиками-стрингами.",
    transliteration: "Étot pen'yúar idyót v komplékte s trúsikami-stríngami."
  },
  {
    id: "lingerie-7",
    category: "Lencería y Ropa Interior",
    spanish: "El sujetador de balconet es ideal para escotes cuadrados.",
    russian: "Бюстгальтер балконет идеально подходит для квадратного декольте.",
    transliteration: "Byustgál'ter balkonét ideál'no podkhódit dlyá kvadrátnovo dekol'té."
  },
  {
    id: "lingerie-8",
    category: "Lencería y Ropa Interior",
    spanish: "¿Busca lencería para el día a día o para una ocasión especial?",
    russian: "Вы ищете белье на каждый день или для особого случая?",
    transliteration: "Vy íschete bel'yó na kázhdyy den' íli dlyá osóbovo slúchaya?"
  },
  {
    id: "lingerie-9",
    category: "Lencería y Ropa Interior",
    spanish: "Este body modelador realza las curvas de forma elegante.",
    russian: "Это утягивающее боди элегантно подчеркивает изгибы.",
    transliteration: "Éto utyágivayuscheye bódi elegántno podchérkivayet izgíby."
  },
  {
    id: "lingerie-10",
    category: "Lencería y Ropa Interior",
    spanish: "Los sujetadores de lactancia están en la estantería derecha.",
    russian: "Бюстгальтеры для кормления находятся на правой полке.",
    transliteration: "Byustgál'tery dlyá kormléniya nakhódyatsya na právoy pólke."
  },
  {
    id: "lingerie-11",
    category: "Lencería y Ropa Interior",
    spanish: "Este corsé tiene ballenas flexibles que estilizan la cintura.",
    russian: "Этот корсет имеет гибкие косточки, которые делают талию стройнее.",
    transliteration: "Étot korsét iméyet gíbkiye kóstochki, kotóryye délayut táliyu stroynéye."
  },
  {
    id: "lingerie-12",
    category: "Lencería y Ropa Interior",
    spanish: "Tenemos ligueros de encaje a juego con este conjunto.",
    russian: "У нас есть кружевные пояса для чулок под этот комплект.",
    transliteration: "U nas yest' kruzhevnýye poyasá dlyá chulók pod étot komplékt."
  },
  {
    id: "lingerie-13",
    category: "Lencería y Ropa Interior",
    spanish: "Las medias con liga de silicona son muy seguras y no se caen.",
    russian: "Чулки на силиконовой резинке очень надежны и не сползают.",
    transliteration: "Chulkí na silikónovoy rezínke óchen' nadézhny i ne spolzáyut."
  },
  {
    id: "lingerie-14",
    category: "Lencería y Ropa Interior",
    spanish: "Este camisón de raso es sumamente suave y delicado.",
    russian: "Эта атласная сорочка невероятно мягкая и нежная.",
    transliteration: "Éta atlásnaya soróchki neveroyátno myágkaya i nézhnaya."
  },
  {
    id: "lingerie-15",
    category: "Lencería y Ropa Interior",
    spanish: "¿Prefiere braguitas tipo culotte, clásicas o tangas?",
    russian: "Вы предпочитаете трусики шортиками, классические или стринги?",
    transliteration: "Vy predpochitáyete trúsiki shórtikami, klassícheskiye íli stríngi?"
  },
  {
    id: "lingerie-16",
    category: "Lencería y Ropa Interior",
    spanish: "El encaje que usamos es elástico y muy suave, no pica nada.",
    russian: "Наше кружево эластичное и очень мягкое, оно совсем не колется.",
    transliteration: "Náshe krúzhevo elastíchnoye i óchen' myágkoye, onó sovsém ne kóletsya."
  },
  {
    id: "lingerie-17",
    category: "Lencería y Ropa Interior",
    spanish: "Este sujetador multiposición es ideal para vestidos con espalda al aire.",
    russian: "Этот мультифункциональный бюстгальтер идеален для платьев с открытой спиной.",
    transliteration: "Étot mul'tifunktsionál'nyy byustgál'ter ideálen dlyá plát'yev s otkrýtoy spinóy."
  },
  {
    id: "lingerie-18",
    category: "Lencería y Ropa Interior",
    spanish: "Tenemos rellenos de silicona removibles si desea más volumen.",
    russian: "У нас есть съемные силиконовые вкладыши, если вы хотите больше объема.",
    transliteration: "U nas yest' s'yómnyye silikónovyye vkládyshi, yésli vy khotíte ból'she ob'yóma."
  },
  {
    id: "lingerie-19",
    category: "Lencería y Ropa Interior",
    spanish: "La bata de satén complementa perfectamente el pijama.",
    russian: "Сатиновый халат отлично дополняет пижаму.",
    transliteration: "Satínovyy khalát otlíchno dopolnyáyet pizhámu."
  },
  {
    id: "lingerie-20",
    category: "Lencería y Ropa Interior",
    spanish: "Le sugiero este sujetador reductor para un soporte excelente.",
    russian: "Рекомендую этот минимайзер для превосходной поддержки.",
    transliteration: "Rekomendúyu étot minimáyzer dlyá prevoskhódnoy poddérzhki."
  },

  // PROBADORES (20 frases)
  {
    id: "room-1",
    category: "Probadores",
    spanish: "Los probadores están al fondo a la izquierda.",
    russian: "Примерочные находятся в конце зала слева.",
    transliteration: "Primérochnyye nakhódyatsya v kontsé zála sléva."
  },
  {
    id: "room-2",
    category: "Probadores",
    spanish: "¿Cuántas prendas lleva para probarse?",
    russian: "Сколько вещей вы берете на примерку?",
    transliteration: "Skól'ko veschéy vy beréte na primérku?"
  },
  {
    id: "room-3",
    category: "Probadores",
    spanish: "El límite de prendas en el probador es de seis.",
    russian: "Лимит вещей в примерочной — шесть штук.",
    transliteration: "Limít veschéy v primérochnoy — shest' shtuk."
  },
  {
    id: "room-4",
    category: "Probadores",
    spanish: "¿Le queda bien la prenda o prefiere que le traiga otra talla?",
    russian: "Вам подошла вещь или принести другой размер?",
    transliteration: "Vam podoshlá vesch' íli prinestí drugóy razmér?"
  },
  {
    id: "room-5",
    category: "Probadores",
    spanish: "Me quedo fuera por si necesita cualquier otra cosa.",
    russian: "Я подожду снаружи, если вам понадобится что-то еще.",
    transliteration: "Ya podozhdú snarúzhi, yésli vam ponádobitsya chtó-to yeschó."
  },
  {
    id: "room-6",
    category: "Probadores",
    spanish: "Este probador está libre, puede pasar.",
    russian: "Эта примерочная свободна, вы можете проходить.",
    transliteration: "Éta primérochnaya svobódna, vy mózhete prokhodít'."
  },
  {
    id: "room-7",
    category: "Probadores",
    spanish: "Por favor, use el protector de rostro antes de probarse la ropa.",
    russian: "Пожалуйста, используйте защитную салфетку для лица перед примеркой.",
    transliteration: "Pozháluysta, ispól'zuyte zaschítnuyu salfétku dlyá litsá péred primérkoy."
  },
  {
    id: "room-8",
    category: "Probadores",
    spanish: "¿Cómo le queda el sujetador? ¿Le ajusta bien de la espalda?",
    russian: "Как сидит бюстгальтер? Он хорошо прилегает к спине?",
    transliteration: "Kak sidít byustgál'ter? On khoroshó prilegáyet k spiné?"
  },
  {
    id: "room-9",
    category: "Probadores",
    spanish: "Déjeme colocarle bien los tirantes para comprobar el ajuste.",
    russian: "Позвольте мне поправить вам бретели, чтобы проверить посадку.",
    transliteration: "Pozvól'te mne poprávit' vam bretéli, chtóby provérit' posádku."
  },
  {
    id: "room-10",
    category: "Probadores",
    spanish: "Le queda realmente espectacular, estiliza muchísimo.",
    russian: "Это смотрится на вас просто великолепно, очень стройнит.",
    transliteration: "Éto smótritsya na vas prósto velikolépno, óchen' stroynít."
  },
  {
    id: "room-11",
    category: "Probadores",
    spanish: "Por motivos de higiene, la ropa interior se prueba sobre su propia braguita.",
    russian: "В целях гигиены нижнее белье нужно примерять поверх своего белья.",
    transliteration: "V tsélyakh gigiyény nízhneye bel'yó núzhno primeryát' povérkh svoyevó bel'yá."
  },
  {
    id: "room-12",
    category: "Probadores",
    spanish: "Si lo desea, le puedo guardar las prendas mientras sigue buscando.",
    russian: "Если хотите, я могу отложить эти вещи, пока вы продолжаете выбирать.",
    transliteration: "Yésli khotíte, ya mogú otlozhít' éti véschi, poká vy prodolzháyete vybirát'."
  },
  {
    id: "room-13",
    category: "Probadores",
    spanish: "¿Qué tal le sienta este color? Ilumina mucho su rostro.",
    russian: "Как вам этот цвет? Он очень освежает ваше лицо.",
    transliteration: "Kak vam étot tsvet? On óchen' osvezháyet váshe litsó."
  },
  {
    id: "room-14",
    category: "Probadores",
    spanish: "Disculpe, la luz del probador se puede regular si le resulta muy fuerte.",
    russian: "Извините, свет в примерочной можно отрегулировать, если он слишком яркий.",
    transliteration: "Izviníte, svet v primérochnoy mózhno otregulírovat', yésli on slíshkom yárkyy."
  },
  {
    id: "room-15",
    category: "Probadores",
    spanish: "¿Desea que le traiga un espejo de mano para verse la espalda?",
    russian: "Хотите, я принесу вам ручное зеркало, чтобы посмотреть со спины?",
    transliteration: "Khotíte, ya prinesú vam ruchnóye zérkalo, chtóby posmotrét' so spiný?"
  },
  {
    id: "room-16",
    category: "Probadores",
    spanish: "Las prendas que no desee se las puede dejar a mi compañera al salir.",
    russian: "Вещи, которые вам не подошли, вы можете оставить моей коллеге при выходе.",
    transliteration: "Véschi, kotóryye vam ne podoshlí, vy mózhete ostávit' móyey kollége pri výkhode."
  },
  {
    id: "room-17",
    category: "Probadores",
    spanish: "¿Necesita un calzador o ayuda con la cremallera?",
    russian: "Вам нужен рожок для обуви или помощь с молнией?",
    transliteration: "Vam núzhen rozhók dlyá óbuvi íli pómosh' s mólniyey?"
  },
  {
    id: "room-18",
    category: "Probadores",
    spanish: "El vestido le entalla perfecto en los hombros.",
    russian: "Платье идеально сидит на вас в плечах.",
    transliteration: "Plát'ye ideál'no sidít na vas v plechákh."
  },
  {
    id: "room-19",
    category: "Probadores",
    spanish: "Esperaré aquí para traerle cualquier otra opción si es necesario.",
    russian: "Я подожду здесь, чтобы при необходимости принести вам другие варианты.",
    transliteration: "Ya podozhdú zdes', chtóby pri neobkhodímosti prinestí vam drugíye variánty."
  },
  {
    id: "room-20",
    category: "Probadores",
    spanish: "Ese modelo realza de forma muy elegante el busto.",
    russian: "Эта модель очень элегантно приподнимает грудь.",
    transliteration: "Éta modél' óchen' elegántno pripodnímayet grud'."
  },

  // CALIDAD, TEJIDOS Y MATERIALES (20 frases)
  {
    id: "material-1",
    category: "Calidad, Tejidos y Materiales",
    spanish: "Es de algodón cien por cien orgánico, sumamente suave.",
    russian: "Это стопроцентный органический хлопок, невероятно мягкий.",
    transliteration: "Éto stoprotséntnyy organícheskiy khlópok, neveroyátno myágkiy."
  },
  {
    id: "material-2",
    category: "Calidad, Tejidos y Materiales",
    spanish: "Esta prenda está confeccionada en seda natural italiana.",
    russian: "Это изделие сшито из натурального итальянского шелка.",
    transliteration: "Éto izdéliye sshíto iz naturál'novo ital'yánskovo shólka."
  },
  {
    id: "material-3",
    category: "Calidad, Tejidos y Materiales",
    spanish: "Este encaje es de origen francés, de la mejor calidad.",
    russian: "Это французское кружево высочайшего качества.",
    transliteration: "Éto frantsúzskoye krúzhevo vysocháyshevo káchestva."
  },
  {
    id: "material-4",
    category: "Calidad, Tejidos y Materiales",
    spanish: "Este material es transpirable y de secado rápido, perfecto para deporte.",
    russian: "Этот материал дышащий и быстросохнущий, идеально подходит для спорта.",
    transliteration: "Étot materiál dýshaschiy i bystrosókhnuschyy, ideál'no podkhódit dlyá spórta."
  },
  {
    id: "material-5",
    category: "Calidad, Tejidos y Materiales",
    spanish: "Se recomienda lavar a mano o en un programa delicado para proteger el encaje.",
    russian: "Рекомендуется ручная стирка или деликатный режим для защиты кружева.",
    transliteration: "Rekomendúyetsya ruchnáya stírka íli delikátnyy rezhím dlyá zaschíty krúzheva."
  },
  {
    id: "material-6",
    category: "Calidad, Tejidos y Materiales",
    spanish: "El satén tiene una caída preciosa y un brillo sutil.",
    russian: "Сатин очень красиво струится и обладает нежным блеском.",
    transliteration: "Satín óchen' krasívo struítsya i obladáyet nézhnym bléskom."
  },
  {
    id: "material-7",
    category: "Calidad, Tejidos y Materiales",
    spanish: "Este tejido es hipoalergénico y no irrita las pieles sensibles.",
    russian: "Эта ткань гипоаллергенна и не раздражает чувствительную кожу.",
    transliteration: "Éta tkan' gipoallergénna i ne razdrazháyet chuvstvítel'nuyu kózhu."
  },
  {
    id: "material-8",
    category: "Calidad, Tejidos y Materiales",
    spanish: "La microfibra de este conjunto es de tacto frío y muy fresca.",
    russian: "Микрофибра в этом комплекте прохладная и очень свежая на ощупь.",
    transliteration: "Mikrofíbra v étom komplékte prokhládnaya i óchen' svézhaya na óschup."
  },
  {
    id: "material-9",
    category: "Calidad, Tejidos y Materiales",
    spanish: "Es una prenda muy duradera que no pierde la forma tras los lavados.",
    russian: "Это очень долговечная вещь, которая не теряет форму после стирки.",
    transliteration: "Éto óchen' dolgovéchnaya vesch', kotóraya ne teryáyet fórmu pósle stírki."
  },
  {
    id: "material-10",
    category: "Calidad, Tejidos y Materiales",
    spanish: "Este pijama es de modal, una fibra natural sumamente cómoda.",
    russian: "Эта пижама сделана из модала, невероятно комфортного натурального волокна.",
    transliteration: "Éta pizháma sdélana iz modála, neveroyátno komfórtnovo naturál'novo volokná."
  },
  {
    id: "material-11",
    category: "Calidad, Tejidos y Materiales",
    spanish: "La lencería de tul transparente da un toque muy sensual.",
    russian: "Белье из прозрачного тюля выглядит очень чувственно.",
    transliteration: "Bel'yó iz prozráchnevo tyúlyá výglyadit óchen' chúvstvenno."
  },
  {
    id: "material-12",
    category: "Calidad, Tejidos y Materiales",
    spanish: "Tiene un porcentaje de elastano para asegurar una movilidad óptima.",
    russian: "В составе есть процент эластана для обеспечения максимальной подвижности.",
    transliteration: "V sostáve yest' protsént elastána dlyá obespécheniya maksimál'noy podvízhnosti."
  },
  {
    id: "material-13",
    category: "Calidad, Tejidos y Materiales",
    spanish: "Es un encaje floral elástico que se ciñe sin oprimir.",
    russian: "Это эластичное цветочное кружево, которое прилегает, не сдавливая.",
    transliteration: "Éto elastíchnoye tsvetóchnoye krúzhevo, kotóroye prilégayet, ne sdávlivaya."
  },
  {
    id: "material-14",
    category: "Calidad, Tejidos y Materiales",
    spanish: "Las copas tienen un forro interior suave que previene roces.",
    russian: "Чашки имеют мягкую внутреннюю подкладку, которая предотвращает натирание.",
    transliteration: "Cháshki iméyet myágkuyu vnútrennyuyu podkládku, kotóraya predotvrascháyet natirániye."
  },
  {
    id: "material-15",
    category: "Calidad, Tejidos y Materiales",
    spanish: "Es una fibra transpirable, idónea para climas cálidos.",
    russian: "Это дышащее волокно, идеально подходящее для жаркого климата.",
    transliteration: "Éto dýshascheye voloknó, ideál'no podkhodyáscheye dlyá zhárkovo klímata."
  },
  {
    id: "material-16",
    category: "Calidad, Tejidos y Materiales",
    spanish: "Este raso de alta gama tiene un tacto sedoso excepcional.",
    russian: "Этот высококачественный атлас обладает исключительной шелковистостью.",
    transliteration: "Étot vysokokáchestvennyy átlas obladáyet islyuchítel'noy shelkovístost'yu."
  },
  {
    id: "material-17",
    category: "Calidad, Tejidos y Materiales",
    spanish: "El relleno es de espuma con memoria y se amolda a su contorno.",
    russian: "Наполнитель из пены с эффектом памяти подстраивается под ваши контуры.",
    transliteration: "Napolnítel' iz pény s efféktom pámyati podstráivayetsya pod váshi kontúry."
  },
  {
    id: "material-18",
    category: "Calidad, Tejidos y Materiales",
    spanish: "Este encaje geométrico de estilo moderno es muy plano.",
    russian: "Это геометрическое кружево в современном стиле очень плоское.",
    transliteration: "Éto geometrícheskoye krúzhevo v sovreménnom stíle óchen' plóskoye."
  },
  {
    id: "material-19",
    category: "Calidad, Tejidos y Materiales",
    spanish: "Los corchetes traseros están forrados para que no molesten.",
    russian: "Задние крючки имеют мягкую подкладку, чтобы не причинять дискомфорта.",
    transliteration: "Zádniye kryuchkí iméyut myágkuyu podkládku, chtóby ne prichinyát' diskomfórta."
  },
  {
    id: "material-20",
    category: "Calidad, Tejidos y Materiales",
    spanish: "Es un tejido de punto de viscosa muy ligero y vaporoso.",
    russian: "Это очень легкий и воздушный вискозный трикотаж.",
    transliteration: "Éto óchen' lyógkiy i vozdúshnyy viskóznyy trikotázh."
  },

  // PRECIOS Y OFERTAS (20 frases)
  {
    id: "price-1",
    category: "Precios y Ofertas",
    spanish: "Este conjunto está rebajado un treinta por ciento hoy.",
    russian: "Сегодня на этот комплект скидка тридцать процентов.",
    transliteration: "Segódnya na étot komplékt skídka trídtsat' protséntov."
  },
  {
    id: "price-2",
    category: "Precios y Ofertas",
    spanish: "¿Cuánto cuesta esta bata?",
    russian: "Сколько стоит этот халат?",
    transliteration: "Skól'ko stóit étot khalát?"
  },
  {
    id: "price-3",
    category: "Precios y Ofertas",
    spanish: "Tiene un precio excelente para la calidad que ofrece.",
    russian: "Это отличная цена для такого хорошего качества.",
    transliteration: "Éto otlíchnaya tsená dlyá takóvo khoróshevo káchestva."
  },
  {
    id: "price-4",
    category: "Precios y Ofertas",
    spanish: "Si compra dos braguitas, la tercera le sale a mitad de precio.",
    russian: "При покупке двух трусиков, третьи — за полцены.",
    transliteration: "Pri pokúpke dvukh trúsikov, trét'yi — za poltsený."
  },
  {
    id: "price-5",
    category: "Precios y Ofertas",
    spanish: "Este artículo forma parte de nuestra promoción especial.",
    russian: "Этот товар участвует в нашей специальной распродаже.",
    transliteration: "Étot továr uchástvuyet v náshey spetsiál'noy rasprodázhe."
  },
  {
    id: "price-6",
    category: "Precios y Ofertas",
    spanish: "El precio final con el descuento aplicado es de cuarenta euros.",
    russian: "Итоговая цена со скидкой составляет сорок евро.",
    transliteration: "Itógovaya tsená so skídkoy sostavlyáyet sórok yévro."
  },
  {
    id: "price-7",
    category: "Precios y Ofertas",
    spanish: "Disponemos de tarjetas regalo del importe que usted prefiera.",
    russian: "У нас есть подарочные карты на любую сумму, которую вы выберете.",
    transliteration: "U nas yest' podárochnyye kárty na lyubúyu súmmu, kotóruyu vy výberete."
  },
  {
    id: "price-8",
    category: "Precios y Ofertas",
    spanish: "¿Tiene nuestra tarjeta de fidelidad para acumular puntos?",
    russian: "У вас есть наша карта лояльности для накопления баллов?",
    transliteration: "U vas yest' násha kárta loyál'nosti dlyá nakopléniya bállov?"
  },
  {
    id: "price-9",
    category: "Precios y Ofertas",
    spanish: "La promoción de pague dos y lleve tres termina este domingo.",
    russian: "Акция «три по цене двух» заканчивается в это воскресенье.",
    transliteration: "Áktsiya «tri po tsené dvukh» zakánchivayetsya v éto voskresén'ye."
  },
  {
    id: "price-10",
    category: "Precios y Ofertas",
    spanish: "Este camisón tiene un descuento del cincuenta por ciento.",
    russian: "На эту ночную сорочку действует скидка пятьдесят процентов.",
    transliteration: "Na étu nochnúyu soróchku déystvuyet skídka pyat'desyát protséntov."
  },
  {
    id: "price-11",
    category: "Precios y Ofertas",
    spanish: "Los sujetadores básicos están hoy con un dos por uno.",
    russian: "На базовые бюстгальтеры сегодня акция «два по цене одного».",
    transliteration: "Na bázovyye byustgál'tery segódnya áktsiya «dva po tsené odnovó»."
  },
  {
    id: "price-12",
    category: "Precios y Ofertas",
    spanish: "El precio marcado en la etiqueta es antes del descuento.",
    russian: "Цена, указанная на этикетке, указана без учета скидки.",
    transliteration: "Tsená, ukázannaya na etikétke, ukázana bez uchóta skídki."
  },
  {
    id: "price-13",
    category: "Precios y Ofertas",
    spanish: "Este es el modelo más económico que tenemos de encaje.",
    russian: "Это самая недорогая модель из кружева, которая у нас есть.",
    transliteration: "Éto sámaya nedorogáya modél' iz krúzheva, kotóraya u nas yest'."
  },
  {
    id: "price-14",
    category: "Precios y Ofertas",
    spanish: "Hacemos un descuento adicional si compra el conjunto completo.",
    russian: "Мы сделаем дополнительную скидку, если вы купите полный комплект.",
    transliteration: "My sdélayem dopolnítel'nuyu skídku, yésli vy kupíte pólnyy komplékt."
  },
  {
    id: "price-15",
    category: "Precios y Ofertas",
    spanish: "La lencería de rebajas se encuentra en estos percheros centrales.",
    russian: "Белье со скидками находится на этих центральных вешалках.",
    transliteration: "Bel'yó so skídkami nakhóditsya na étikh tsentrál'nykh véshalkakh."
  },
  {
    id: "price-16",
    category: "Precios y Ofertas",
    spanish: "¿Desea que le calcule el precio final con el IVA incluido?",
    russian: "Хотите, я рассчитаю для вас окончательную цену с учетом НДС?",
    transliteration: "Khotíte, ya rasschitáyu dlyá vas okonchátel'nuyu tsenu s uchótom En-De-Es?"
  },
  {
    id: "price-17",
    category: "Precios y Ofertas",
    spanish: "Esta oferta es exclusiva para clientes registrados.",
    russian: "Это предложение доступно только для зарегистрированных клиентов.",
    transliteration: "Éto predlozhéniye dostúpno tól'ko dlyá zaregistrírovannykh kliéntov."
  },
  {
    id: "price-18",
    category: "Precios y Ofertas",
    spanish: "Este conjunto de satén de seda vale noventa y cinco euros.",
    russian: "Этот шелковый сатиновый комплект стоит девяносто пять евро.",
    transliteration: "Étot shólkovyy satínovyy komplékt stóit devyanósto pyat' yévro."
  },
  {
    id: "price-19",
    category: "Precios y Ofertas",
    spanish: "Nuestros precios son fijos, pero disponemos de vales de descuento.",
    russian: "У нас фиксированные цены, но есть скидочные купоны.",
    transliteration: "U nas fiksírovannyye tseny, no yest' skídochnyye kupóny."
  },
  {
    id: "price-20",
    category: "Precios y Ofertas",
    spanish: "Es una inversión excelente porque este body dura muchos años.",
    russian: "Это отличная инвестиция, так как это боди прослужит долгие годы.",
    transliteration: "Éto otlíchnaya investítsiya, tak kak éto bódi proslúzhit dólgiye gódy."
  },

  // PAGO Y CAJA (20 frases)
  {
    id: "pay-1",
    category: "Pago y Caja",
    spanish: "La caja para abonar está al frente, por favor.",
    russian: "Касса для оплаты находится прямо перед вами, пожалуйста.",
    transliteration: "Kássa dlyá opláty nakhóditsya pryámo péred vámi, pozháluysta."
  },
  {
    id: "pay-2",
    category: "Pago y Caja",
    spanish: "¿Va a pagar con tarjeta o en efectivo?",
    russian: "Вы будете оплачивать картой или наличными?",
    transliteration: "Vy búdete opláchivat' kártoy íli nalíchnymi?"
  },
  {
    id: "pay-3",
    category: "Pago y Caja",
    spanish: "¿Desea el tique de compra en papel o por correo electrónico?",
    russian: "Вам нужен бумажный чек или отправить его на электронную почту?",
    transliteration: "Vam núzhen bumázhnyy chek íli otprávit' yevó na elektrónnuyu póchtu?"
  },
  {
    id: "pay-4",
    category: "Pago y Caja",
    spanish: "Por favor, introduzca su tarjeta y marque el código PIN.",
    russian: "Пожалуйста, вставьте карту и введите ПИН-код.",
    transliteration: "Pozháluysta, vstáv'te kártu i vvedíte Pin-kod."
  },
  {
    id: "pay-5",
    category: "Pago y Caja",
    spanish: "¿Desea que se lo envuelva para regalo de forma gratuita?",
    russian: "Хотите, я бесплатно упакую это в подарочную обертку?",
    transliteration: "Khotíte, ya besplátno upakúyu éto v podárochnuyu obértku?"
  },
  {
    id: "pay-6",
    category: "Pago y Caja",
    spanish: "Aquí tiene su cambio y el tique de compra.",
    russian: "Вот ваша сдача и чек.",
    transliteration: "Vot vásha sdácha i chek."
  },
  {
    id: "pay-7",
    category: "Pago y Caja",
    spanish: "Aceptamos todo tipo de tarjetas de crédito y Apple Pay.",
    russian: "Мы принимаем все виды кредитных карт и Apple Pay.",
    transliteration: "My prinimáyem vse vídy kredítnykh kart i Épl Pey."
  },
  {
    id: "pay-8",
    category: "Pago y Caja",
    spanish: "Por favor, firme el comprobante de pago aquí.",
    russian: "Пожалуйста, подпишите чек здесь.",
    transliteration: "Pozháluysta, podpishíte chek zdes'."
  },
  {
    id: "pay-9",
    category: "Pago y Caja",
    spanish: "El pago sin contacto está disponible en este datáfono.",
    russian: "Бесконтактная оплата доступна на этом терминале.",
    transliteration: "Beskontáktnaya opláta dostúpna na étom terminále."
  },
  {
    id: "pay-10",
    category: "Pago y Caja",
    spanish: "Lo siento, la transacción ha sido denegada. ¿Tiene otra tarjeta?",
    russian: "К сожалению, транзакция отклонена. У вас есть другая карта?",
    transliteration: "K sozhaléniyu, tranzáktsiya otklonená. U vas yest' drugáya kárta?"
  },
  {
    id: "pay-11",
    category: "Pago y Caja",
    spanish: "¿Podría mostrarme su documento de identidad, por favor?",
    russian: "Не могли бы вы показать мне ваш паспорт, пожалуйста?",
    transliteration: "Ne moglí by vy pokazát' mne vash pásport, pozháluysta?"
  },
  {
    id: "pay-12",
    category: "Pago y Caja",
    spanish: "Le hemos quitado todas las alarmas de seguridad a las prendas.",
    russian: "Я сняла все защитные магниты с одежды.",
    transliteration: "Ya snyalá vse zaschítnyye magníty s odézhdy."
  },
  {
    id: "pay-13",
    category: "Pago y Caja",
    spanish: "La bolsa es biodegradable y cuesta diez céntimos.",
    russian: "Этот пакет биоразлагаемый и стоит десять центов.",
    transliteration: "Étot pakét biorazlagáyemyy i stóit désyat' tséntov."
  },
  {
    id: "pay-14",
    category: "Pago y Caja",
    spanish: "¿Quiere que le guarde la lencería en una caja perfumada?",
    russian: "Хотите, я положу белье в ароматизированную коробочку?",
    transliteration: "Khotíte, ya polozhú bel'yó v aromatizírovannuyu koróbochku?"
  },
  {
    id: "pay-15",
    category: "Pago y Caja",
    spanish: "Hemos verificado que las tallas coincidan antes de cobrarle.",
    russian: "Перед оплатой мы проверили, чтобы размеры совпадали.",
    transliteration: "Péred oplátoy my provérili, chtóby razméry sovpadáli."
  },
  {
    id: "pay-16",
    category: "Pago y Caja",
    spanish: "¿Desea canjear sus puntos acumulados en esta compra?",
    russian: "Хотите списать накопленные баллы на эту покупку?",
    transliteration: "Khotíte spisát' nakóplennyye bálly na étu pokúpku?"
  },
  {
    id: "pay-17",
    category: "Pago y Caja",
    spanish: "Un momento, por favor, el sistema informático está cargando.",
    russian: "Минутку, пожалуйста, компьютерная система загружается.",
    transliteration: "Minútku, pozháluysta, komp'yúternaya sistéma zagruzháyetsya."
  },
  {
    id: "pay-18",
    category: "Pago y Caja",
    spanish: "Aquí tiene la tarjeta de nuestra tienda, para compras online.",
    russian: "Вот визитка нашего магазина для онлайн-покупок.",
    transliteration: "Vot vizítka náshevo magazína dlyá onláyn-pokúpok."
  },
  {
    id: "pay-19",
    category: "Pago y Caja",
    spanish: "¿Necesita factura con los datos de su empresa?",
    russian: "Вам нужен счет-фактура с реквизитами вашей компании?",
    transliteration: "Vam núzhen schot-faktúra s rekvizítami váshey kompánii?"
  },
  {
    id: "pay-20",
    category: "Pago y Caja",
    spanish: "Muchas gracias, su pago ha sido procesado de manera correcta.",
    russian: "Большое спасибо, ваша оплата успешно проведена.",
    transliteration: "Bol'shóye spasíbo, vásha opláta uspéshno provedená."
  },

  // DEVOLUCIONES Y CAMBIOS (20 frases)
  {
    id: "return-1",
    category: "Devoluciones y Cambios",
    spanish: "Tiene treinta días naturales para realizar cualquier cambio.",
    russian: "У вас есть тридцать календарных дней для любого обмена.",
    transliteration: "U vas yest' trídtsat' kalendárnykh dney dlyá lyubóvo obména."
  },
  {
    id: "return-2",
    category: "Devoluciones y Cambios",
    spanish: "Para cambios o devoluciones es indispensable presentar el tique.",
    russian: "Для обмена или возврата обязательно нужно предоставить чек.",
    transliteration: "Dlyá obména íli vozvráta obyazátel'no núzhno predostávit' chek."
  },
  {
    id: "return-3",
    category: "Devoluciones y Cambios",
    spanish: "Por motivos de higiene, la lencería íntima no admite cambios.",
    russian: "В целях гигиены нижнее интимное белье обмену и возврату не подлежит.",
    transliteration: "V tsélyakh gigiyény nízhneye intímnoye bel'yó obménu i vozvrátu ne podlezhít."
  },
  {
    id: "return-4",
    category: "Devoluciones y Cambios",
    spanish: "La prenda debe conservar la etiqueta original y estar sin usar.",
    russian: "Вещь должна сохранять оригинальную бирку и быть неиспользованной.",
    transliteration: "Vesch' dolzhná sokhranyát' originál'nuyu bírku i byt' neispól'zovannoy."
  },
  {
    id: "return-5",
    category: "Devoluciones y Cambios",
    spanish: "Le podemos hacer un vale de tienda sin caducidad.",
    russian: "Мы можем выдать вам бессрочный магазинный купон.",
    transliteration: "My mózhem výdat' vam bessróchnyy magazínnyy kupón."
  },
  {
    id: "return-6",
    category: "Devoluciones y Cambios",
    spanish: "Hacemos el reembolso en el mismo método de pago que utilizó.",
    russian: "Мы осуществляем возврат тем же способом оплаты, который вы использовали.",
    transliteration: "My osuschestvlyáyem vozvrát tem zhe spósobom opláty, kotóryyy vy ispól'zovali."
  },
  {
    id: "return-7",
    category: "Devoluciones y Cambios",
    spanish: "¿Cuál es el motivo de la devolución de esta prenda?",
    russian: "Какова причина возврата этой вещи?",
    transliteration: "Kaková príchina vozvráta étoy véschi?"
  },
  {
    id: "return-8",
    category: "Devoluciones y Cambios",
    spanish: "Disculpe, ¿esta prenda tiene alguna tara o defecto?",
    russian: "Извините, у этой вещи есть какой-то дефект или брак?",
    transliteration: "Izviníte, u étoy véschi yest' kakóy-to defékt íli brak?"
  },
  {
    id: "return-9",
    category: "Devoluciones y Cambios",
    spanish: "No se preocupe, le cambiaremos el sujetador defectuoso de inmediato.",
    russian: "Не волнуйтесь, мы немедленно заменим бракованный бюстгальтер.",
    transliteration: "Ne volnúytes', my nemédlenno zaménim brakóvanyy byustgál'ter."
  },
  {
    id: "return-10",
    category: "Devoluciones y Cambios",
    spanish: "El dinero se verá reflejado en su cuenta en tres días hábiles.",
    russian: "Деньги поступят на ваш счет в течение трех рабочих дней.",
    transliteration: "Dén'gi postúpyat na vash schot v techéniye trekh rabóchikh dney."
  },
  {
    id: "return-11",
    category: "Devoluciones y Cambios",
    spanish: "Las braguitas que vienen precintadas en caja sí se pueden cambiar.",
    russian: "Трусики, которые запечатаны в коробочке, можно обменять.",
    transliteration: "Trúsiki, kotóryye zapechátany v koróbochke, mózhno obmenyát'."
  },
  {
    id: "return-12",
    category: "Devoluciones y Cambios",
    spanish: "Lamentablemente, sin el tique de regalo solo puedo hacer un cambio de talla.",
    russian: "К сожалению, без подарочного чека я могу сделать только обмен размера.",
    transliteration: "K sozhaléniyu, bez podárochnovo chéka ya mogú sdélat' tól'ko obmén razméra."
  },
  {
    id: "return-13",
    category: "Devoluciones y Cambios",
    spanish: "¿Prefiere llevarse otra prenda de igual valor o un vale?",
    russian: "Вы предпочитаете взять другую вещь той же стоимости или купон?",
    transliteration: "Vy predpochitáyete vzyat' drugúyu vesch' toy zhe stóimosti íli kupón?"
  },
  {
    id: "return-14",
    category: "Devoluciones y Cambios",
    spanish: "Por favor, firme la hoja de devolución en esta casilla.",
    russian: "Пожалуйста, подпишите бланк возврата в этом поле.",
    transliteration: "Pozháluysta, podpishíte blank vozvráta v étom póle."
  },
  {
    id: "return-15",
    category: "Devoluciones y Cambios",
    spanish: "Los pijamas y camisones sí admiten cambios sin ningún problema.",
    russian: "Пижамы и ночные сорочки можно обменять без каких-либо проблем.",
    transliteration: "Pizhámy i nochnýye soróchki mózhno obmenyát' bez kakíkh-líbo problém."
  },
  {
    id: "return-16",
    category: "Devoluciones y Cambios",
    spanish: "Hemos verificado la prenda y está en perfecto estado.",
    russian: "Мы проверили вещь, она находится в идеальном состоянии.",
    transliteration: "My provérili vesch', oná nakhóditsya v ideál'nom sostoyánii."
  },
  {
    id: "return-17",
    category: "Devoluciones y Cambios",
    spanish: "Este artículo de liquidación final no tiene opción a devolución.",
    russian: "Этот товар из финальной распродажи возврату не подлежит.",
    transliteration: "Étot továr iz finál'noy rasprodázhi vozvrátu ne podlezhít."
  },
  {
    id: "return-18",
    category: "Devoluciones y Cambios",
    spanish: "¿La caja original de las medias está intacta?",
    russian: "Оригинальная упаковка колготок не повреждена?",
    transliteration: "Originál'naya upakóvka kolgótok ne povrezhdená?"
  },
  {
    id: "return-19",
    category: "Devoluciones y Cambios",
    spanish: "Un momento mientras autorizo el reembolso con mi supervisora.",
    russian: "Минутку, я согласую возврат средств с моим руководителем.",
    transliteration: "Minútku, ya soglasúyu vozvrát sredstv s moím rukovodítelem."
  },
  {
    id: "return-20",
    category: "Devoluciones y Cambios",
    spanish: "Listo, aquí tiene el comprobante del reembolso bancario.",
    russian: "Готово, вот чек о возврате банковских средств.",
    transliteration: "Gotóvo, vot chek o vozvráte bánkovskikh sredstv."
  },

  // ATENCIÓN Y SUGERENCIAS (20 frases)
  {
    id: "service-1",
    category: "Atención y Sugerencias",
    spanish: "Espere un momento, por favor, voy a consultar con la encargada.",
    russian: "Подождите минутку, пожалуйста, я проконсультируюсь с администратором.",
    transliteration: "Podozhdíte minútku, pozháluysta, ya prokonsul'tíruyus' s administrátorom."
  },
  {
    id: "service-2",
    category: "Atención y Sugerencias",
    spanish: "Disculpe la espera, hoy tenemos mucho público en la tienda.",
    russian: "Извините за ожидание, сегодня в магазине очень много покупателей.",
    transliteration: "Izviníte za ozhidániye, segódnya v magazíne óchen' mnógo pokupáteley."
  },
  {
    id: "service-3",
    category: "Atención y Sugerencias",
    spanish: "Si lo desea, le podemos avisar cuando llegue su talla.",
    russian: "Если хотите, мы можем сообщить вам, когда поступит ваш размер.",
    transliteration: "Yésli khotíte, my mózhem soobschít' vam, kogdá postúpit vash razmér."
  },
  {
    id: "service-4",
    category: "Atención y Sugerencias",
    spanish: "Le sugiero combinar este sujetador con su braguita a juego.",
    russian: "Я предлагаю сочетать этот бюстгальтер с трусиками из того же комплекта.",
    transliteration: "Ya predlagáyu sochetát' étot byustgál'ter s trúsikami iz tovó zhe komplékta."
  },
  {
    id: "service-5",
    category: "Atención y Sugerencias",
    spanish: "¿Quiere que le busque la otra combinación de colores?",
    russian: "Хотите, я найду для вас другое цветовое сочетание?",
    transliteration: "Khotíte, ya naydú dlyá vas drugóye tsvetovóye sochetániye?"
  },
  {
    id: "service-6",
    category: "Atención y Sugerencias",
    spanish: "Este modelo es uno de nuestros más vendidos por su comodidad.",
    russian: "Эта модель — одна из наших самых продаваемых благодаря своему удобству.",
    transliteration: "Éta modél' — odná iz náshikh sámykh prodaváyemykh blagodaryá svoyemú udóbstvu."
  },
  {
    id: "service-7",
    category: "Atención y Sugerencias",
    spanish: "¿Está buscando lencería para novia? Tenemos un rincón especial.",
    russian: "Вы ищете белье для невесты? У нас есть специальный уголок.",
    transliteration: "Vy íschete bel'yó dlyá nevésty? U nas yest' spetsiál'nyy ugolók."
  },
  {
    id: "service-8",
    category: "Atención y Sugerencias",
    spanish: "Podemos encargar cualquier modelo de nuestro catálogo online.",
    russian: "Мы можем заказать любую модель из нашего онлайн-каталога.",
    transliteration: "My mózhem zakazát' lyubúyu modél' iz náshevo onláyn-katalóga."
  },
  {
    id: "service-9",
    category: "Atención y Sugerencias",
    spanish: "Le aseguro que este color rojo favorece muchísimo a su tono de piel.",
    russian: "Уверяю вас, этот красный цвет очень идет к вашему тону кожи.",
    transliteration: "Uveryáyu vas, étot krásnyy tsvet óchen' idyót k váshemu tónu kózhi."
  },
  {
    id: "service-10",
    category: "Atención y Sugerencias",
    spanish: "Si prefiere algo discreto, la lencería en tono nude es perfecta.",
    russian: "Если вы предпочитаете что-то незаметное, белье телесного цвета идеально.",
    transliteration: "Yésli vy predpochitáyete chtó-to nezamétnoye, bel'yó telésnovo tsvéta ideál'no."
  },
  {
    id: "service-11",
    category: "Atención y Sugerencias",
    spanish: "Contamos con un servicio de ajuste personalizado de sujetadores.",
    russian: "У нас есть услуга индивидуального подбора бюстгальтера (бра-фиттинг).",
    transliteration: "U nas yest' uslúga individuál'novo podbóra byustgál'tera (bra-fítting)."
  },
  {
    id: "service-12",
    category: "Atención y Sugerencias",
    spanish: "Este picardías de gasa es sumamente elegante y fino.",
    russian: "Этот шифоновый пеньюар чрезвычайно элегантен и изыскан.",
    transliteration: "Étot shifónovyy pen'yúar chrezvycháyno elegánten i izýskan."
  },
  {
    id: "service-13",
    category: "Atención y Sugerencias",
    spanish: "Muchas clientas prefieren este modelo porque realza de forma natural.",
    russian: "Многие клиентки предпочитают эту модель, так как она приподнимает грудь естественным образом.",
    transliteration: "Mnógiye kliéntki predpochitáyut étu modél', tak kak oná pripodnímayet grud' yestéstvennym óbrazom."
  },
  {
    id: "service-14",
    category: "Atención y Sugerencias",
    spanish: "¿Le gustaría rellenar nuestro formulario de sugerencias?",
    russian: "Хотите заполнить нашу форму предложений?",
    transliteration: "Khotíte zapólnit' náshu fórmu predlozhéniy?"
  },
  {
    id: "service-15",
    category: "Atención y Sugerencias",
    spanish: "Lamentamos cualquier molestia, intentaremos solucionar su problema.",
    russian: "Приносим извинения за неудобства, мы постараемся решить вашу проблему.",
    transliteration: "Prinósim izvinéniya za neudóbstva, my postaráemsya reshít' váshu problému."
  },
  {
    id: "service-16",
    category: "Atención y Sugerencias",
    spanish: "Este body de encaje también se puede usar como prenda exterior con americana.",
    russian: "Это кружевное боди также можно носить как верхнюю одежду под пиджак.",
    transliteration: "Éto kruzhevnóye bódi tákzhe mózhno nosít' kak vérkhnyuyu odézhdu pod pidzhák."
  },
  {
    id: "service-17",
    category: "Atención y Sugerencias",
    spanish: "Le recomiendo este camisón si busca comodidad extrema para dormir.",
    russian: "Я рекомендую эту ночную сорочку, если вы ищете максимальный комфорт для сна.",
    transliteration: "Ya rekomendúyu étu nochnúyu soróchku, yésli vy íschete maksimál'nyy komfórt dlyá sna."
  },
  {
    id: "service-18",
    category: "Atención y Sugerencias",
    spanish: "Si se registra en nuestro club, recibirá un obsequio el día de su cumpleaños.",
    russian: "Если вы зарегистрируетесь в нашем клубе, вы получите подарок в свой день рождения.",
    transliteration: "Yésli vy zaregistríruyetes' v nashém klúbe, vy polúchite podárok v svoy den' rozhdéniya."
  },
  {
    id: "service-19",
    category: "Atención y Sugerencias",
    spanish: "¿Prefiere que le guarde estas prendas mientras busca calzado?",
    russian: "Хотите, я придержу для вас эти вещи, пока вы выбираете обувь?",
    transliteration: "Khotíte, ya priderzhú dlyá vas éti véschi, poká vy vybiráyete óbuv'?"
  },
  {
    id: "service-20",
    category: "Atención y Sugerencias",
    spanish: "Tenemos probadores individuales amplios con aire acondicionado.",
    russian: "У нас просторные индивидуальные примерочные с кондиционером.",
    transliteration: "U nas prostórnyye individuál'nyye primérochnyye s konditsionérom."
  },

  // DESPEDIDAS (20 frases)
  {
    id: "bye-1",
    category: "Despedidas",
    spanish: "Muchas gracias por su visita, que tenga un excelente día.",
    russian: "Большое спасибо за визит, хорошего вам дня.",
    transliteration: "Bol'shóye spasíbo za vizít, khoróshevo vam dnyá."
  },
  {
    id: "bye-2",
    category: "Despedidas",
    spanish: "Esperamos verle pronto de nuevo por aquí.",
    russian: "Надеемся скоро снова увидеть вас у нас.",
    transliteration: "Nadéyemsya skóro snóva uvídet' vas u nas."
  },
  {
    id: "bye-3",
    category: "Despedidas",
    spanish: "Disfrute de sus nuevas prendas de lencería.",
    russian: "Носите ваше новое белье с удовольствием.",
    transliteration: "Nósite váshe nóvoye bel'yó s udovól'stviyem."
  },
  {
    id: "bye-4",
    category: "Despedidas",
    spanish: "Que tenga una excelente tarde.",
    russian: "Хорошего вам вечера.",
    transliteration: "Khoróshevo vam véchera."
  },
  {
    id: "bye-5",
    category: "Despedidas",
    spanish: "Muchas gracias, ¡adiós!",
    russian: "Большое спасибо, до свидания!",
    transliteration: "Bol'shóye spasíbo, do svidániya!"
  },
  {
    id: "bye-6",
    category: "Despedidas",
    spanish: "Vuelva cuando quiera, estaremos encantados de recibirle.",
    russian: "Приходите в любое время, мы всегда вам рады.",
    transliteration: "Prikhodíte v lyubóye vrémya, my vsegdá vam rády."
  },
  {
    id: "bye-7",
    category: "Despedidas",
    spanish: "¡Hasta luego!",
    russian: "До встречи!",
    transliteration: "Do vstréchi!"
  },
  {
    id: "bye-8",
    category: "Despedidas",
    spanish: "Ha sido un placer absoluto atenderle hoy.",
    russian: "Было искренним удовольствием помочь вам сегодня.",
    transliteration: "Býlo ískrennim udovól'stviyem pomóch' vam segódnya."
  },
  {
    id: "bye-9",
    category: "Despedidas",
    spanish: "Le deseo una feliz semana.",
    russian: "Желаю вам хорошей недели.",
    transliteration: "Zheláyu vam khoróshey nedéli."
  },
  {
    id: "bye-10",
    category: "Despedidas",
    spanish: "Espero que le encante el regalo a su amiga.",
    russian: "Надеюсь, вашей подруге понравится подарок.",
    transliteration: "Nadéyus', váshey podrúge ponrávitsya podárok."
  },
  {
    id: "bye-11",
    category: "Despedidas",
    spanish: "¡Buen viaje de regreso!",
    russian: "Счастливой дороги назад!",
    transliteration: "Schastlívoy dorógi nazád!"
  },
  {
    id: "bye-12",
    category: "Despedidas",
    spanish: "Gracias por confiar en nuestra marca de lencería.",
    russian: "Спасибо за доверие к нашему бренду белья.",
    transliteration: "Spasíbo za dovériye k náshemu bréndu bel'yá."
  },
  {
    id: "bye-13",
    category: "Despedidas",
    spanish: "¡Hasta pronto!",
    russian: "До скорого!",
    transliteration: "Do skórovo!"
  },
  {
    id: "bye-14",
    category: "Despedidas",
    spanish: "No olvide seguirnos en las redes sociales para novedades.",
    russian: "Не забудьте подписаться на нас в соцсетях для получения новостей.",
    transliteration: "Ne zabúd'te podpisát'sya na nas v sotssétyakh dlyá poluchéniya novostéy."
  },
  {
    id: "bye-15",
    category: "Despedidas",
    spanish: "Que pase un hermoso fin de semana.",
    russian: "Хороших вам выходных.",
    transliteration: "Khoróshikh vam vykhodnýkh."
  },
  {
    id: "bye-16",
    category: "Despedidas",
    spanish: "¡Cuídese mucho!",
    russian: "Берегите себя!",
    transliteration: "Beregíte sebyá!"
  },
  {
    id: "bye-17",
    category: "Despedidas",
    spanish: "Si tiene algún inconveniente, no dude en retornar.",
    russian: "Если возникнут проблемы, обязательно возвращайтесь.",
    transliteration: "Yésli vozníknut problémy, obyazátel'no vozvrascháytes'."
  },
  {
    id: "bye-18",
    category: "Despedidas",
    spanish: "Estaremos encantados de verle de nuevo en las rebajas.",
    russian: "Будем рады снова видеть вас на распродаже.",
    transliteration: "Búdem rády snóva vídet' vas na rasprodázhe."
  },
  {
    id: "bye-19",
    category: "Despedidas",
    spanish: "Le acompaño hasta la puerta, que le vaya estupendamente.",
    russian: "Я провожу вас до двери, всего вам самого доброго.",
    transliteration: "Ya provozhú vas do dvéri, vsevó vam sámovo dóbrovo."
  },
  {
    id: "bye-20",
    category: "Despedidas",
    spanish: "Gracias por su compra, disfrute de sus artículos.",
    russian: "Спасибо за покупку, пользуйтесь вашими вещами с удовольствием.",
    transliteration: "Spasíbo za pokúpku, pól'zuytes' váshimi veschámi s udovól'stviyem."
  }
];
