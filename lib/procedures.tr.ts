import type { ProcedureOverride } from "./procedures";

/**
 * Turkish translations of the procedure content in `procedures.ts`. Only the
 * human-readable fields need an entry per slug — anything omitted here (or
 * omitted entirely for a slug) falls back to the English base automatically.
 * Faithful translations of the existing English medical copy only — no new
 * claims, no prices, nothing not already said in English (see this site's
 * Sağlık Bakanlığı ad-compliance history in HANDOFF.md).
 */
export const proceduresTr: Record<string, ProcedureOverride> = {
  "dental-implants": {
    name: "Diş İmplantları",
    shortName: "İmplantlar",
    heroTagline: "Eksik dişler için kalıcı, doğal görünümlü çözümler.",
    summary:
      "Çene kemiğiyle kaynaşan titanyum implantlar, doğal dişler gibi görünen, hissettiren ve işlev gören kronları destekler.",
    whatItIs:
      "Diş implantı, eksik bir dişin kökünün yerini almak üzere çene kemiğine yerleştirilen küçük bir titanyum vidadır. Kemikle kaynaştıktan sonra üzerine özel üretim bir kron sabitlenir. İmplantlar; kemiği koruması, komşu dişleri etkilememesi ve iyi bakımla onlarca yıl kullanılabilmesi nedeniyle tek, birkaç veya tüm dişlerin yenilenmesinde yerleşik bir seçenektir.",
    whoItsFor: [
      "Bir veya daha fazla dişiniz eksik ve kalıcı bir çözüm arıyorsunuz",
      "Protez veya köprü kullanıyorsunuz ve daha sabit bir çözüm istiyorsunuz",
      "Diş etleriniz sağlıklı ve çene kemiğiniz yeterli (yetersizse kemik grefti yardımcı olabilir)",
      "Kemiği korumak ve komşu dişlerin kaymasını önlemek istiyorsunuz",
    ],
    processSteps: [
      {
        title: "Online danışmanlık",
        description:
          "Fotoğraflarınızı ve varsa güncel röntgenlerinizi gönderin. Diş hekimlerimiz durumunuzu inceleyip ilk randevunuzdan önce size ön bir tedavi planı gönderir.",
      },
      {
        title: "Muayene ve 3D tarama",
        description:
          "Kliniğe geldiğinizde yapılan CBCT taraması ve klinik muayene, planı ve implant pozisyonlarını netleştirir.",
      },
      {
        title: "İmplantın yerleştirilmesi",
        description:
          "İmplant, lokal anestezi altında tek bir seansta yerleştirilir. Hastaların çoğu aynı gün evine dönebilir.",
      },
      {
        title: "İyileşme ve kaynaşma (osseointegrasyon)",
        description:
          "İmplant, 3-6 ay içinde kemikle kaynaşır. Bu süre boyunca estetik görünüm için geçici bir kron takılabilir.",
      },
      {
        title: "Kalıcı kron",
        description:
          "İkinci ziyaretinizde kalıcı kron takılır ve ısırma uyumunuz hassas şekilde ayarlanır.",
      },
    ],
    daysInIstanbul: "Her ziyaret için 3-5 gün (genellikle iki ziyaret)",
    seo: {
      title: "İstanbul'da Diş İmplantı Tedavisi",
      description:
        "İstanbul'da kayıtlı bir diş hekimiyle kalıcı diş implantları. İlk ziyaretinizden önce online danışmanlık imkânı.",
      keywords: [
        "diş implantı Türkiye",
        "diş implantı İstanbul",
        "İstanbul'da diş implantı",
      ],
    },
  },

  veneers: {
    name: "Porselen Lamine",
    shortName: "Lamine",
    heroTagline: "Yüzünüze özel tasarlanmış, daha parlak ve düzgün bir gülüş.",
    summary:
      "Diş renginizi, hizanızı ve oranlarınızı yeniden şekillendirmek için diş yüzeyine yapıştırılan ultra ince porselen kaplamalar.",
    whatItIs:
      "Lamineler, dişlerin ön yüzeyine yapıştırılan ince, özel üretim porselen kaplamalardır. Renk bozuklukları, kırıklar, boşluklar ve hafif diziliş bozukluklarını düzelterek doğal ve düzgün bir gülüş oluşturur. Modern porselen oldukça dayanıklıdır ve ışığı doğal mine gibi yansıtır; bu sayede sonuç 'yapay' değil, doğal görünür.",
    whoItsFor: [
      "Gülüşünüzün rengini, şeklini veya diş aralarını iyileştirmek istiyorsunuz",
      "Ön dişleriniz kırık, aşınmış veya hafif çarpık",
      "Yalnızca beyazlatma istediğiniz sonucu vermedi",
      "Dişleriniz ve diş etleriniz sağlıklı ve yeterli mine tabakasına sahip",
    ],
    processSteps: [
      {
        title: "Gülüş tasarımı danışmanlığı",
        description:
          "Hedeflerinizi konuşuyor ve dijital bir önizleme kullanarak yüzünüze uygun bir gülüş tasarlıyoruz; böylece nasıl bir sonuç bekleyebileceğinizi önceden görürsünüz.",
      },
      {
        title: "Hazırlık ve tarama",
        description:
          "Minimum düzeyde mine yüzeyi hazırlanır ve hassas bir dijital ölçü alınır.",
      },
      {
        title: "Geçici laminalar",
        description:
          "Kalıcı laminalarınız laboratuvarımızda hazırlanırken, geçici laminalarla şekil ve rengi deneme imkânı bulursunuz.",
      },
      {
        title: "Kalıcı laminaların yapıştırılması",
        description:
          "Porselen laminalarınız yapıştırılır, parlatılır ve rahat, doğal bir ısırma için ayarlanır.",
      },
    ],
    daysInIstanbul: "5-7 gün",
    seo: {
      title: "İstanbul'da Porselen Lamine (Diş Laminesi)",
      description:
        "İstanbul'da doğal görünümlü porselen lamine. Kayıtlı bir diş hekimiyle dijital gülüş tasarımı.",
      keywords: [
        "lamine diş Türkiye",
        "lamine diş İstanbul",
        "porselen lamine Türkiye",
        "veneer Türkiye",
        "veneer İstanbul",
        "Hollywood gülüş İstanbul",
      ],
    },
  },

  "all-on-4": {
    name: "Zirkonyum All-on-4 İmplant",
    shortName: "Zirkonyum All-on-4",
    heroTagline: "Yalnızca dört implant üzerinde sabit, tam bir diş dizisi.",
    summary:
      "Dört implantla desteklenen sabit tam ark restorasyonu — çıkarılabilir protezlere kıyasla daha sabit bir alternatif, çoğunlukla kısa bir sürede.",
    whatItIs:
      "All-on-4, eksik veya işlevini yitirmiş bir tam diş dizisini, stratejik olarak yerleştirilmiş dört implanta sabitlenen bir köprüyle yeniler. Mevcut kemiği verimli şekilde kullandığından, birçok hasta kapsamlı kemik greftinden kaçınabilir ve aynı ziyarette sabit geçici bir köprüyle kliniğimizden ayrılıp, iyileşme sonrası kalıcı köprüsüne kavuşabilir.",
    whoItsFor: [
      "Bir çenenizdeki dişlerin çoğu veya tamamı eksik ya da işlevini yitirmiş durumda",
      "Tam protez kullanıyorsunuz ve sabit, dayanıklı bir çözüm istiyorsunuz",
      "Protezlerin damak kaplaması ve hareket etmesinden kaçınmak istiyorsunuz",
      "Daha az implantla tam ark sonuçları arıyorsunuz",
    ],
    processSteps: [
      {
        title: "Danışmanlık ve planlama",
        description:
          "CBCT taraması ve muayene, kemik hacmini ve çeneniz için ideal implant pozisyonlarını belirler.",
      },
      {
        title: "İmplantların yerleştirilmesi",
        description:
          "Dört implant yerleştirilir ve çoğu durumda aynı gün sabit geçici bir köprü takılır.",
      },
      {
        title: "İyileşme",
        description:
          "Sabit geçici köprünüzü kullandığınız birkaç ay boyunca implantlar kemikle kaynaşır.",
      },
      {
        title: "Kalıcı köprü",
        description:
          "Dönüş ziyaretinizde, uzun vadeli işlev ve estetik için özel üretim kalıcı köprünüz takılır.",
      },
    ],
    daysInIstanbul: "Her ziyaret için 5-7 gün (genellikle iki ziyaret)",
    seo: {
      title: "İstanbul'da Zirkonyum All-on-4 Diş İmplantı",
      description:
        "İstanbul'da zirkonyum All-on-4 implantlarıyla sabit tam ark diş tedavisi, kayıtlı bir diş hekimiyle.",
      keywords: [
        "All-on-4 Türkiye",
        "All-on-4 İstanbul",
        "zirkonyum All-on-4 Türkiye",
        "tüm ağız diş implantı Türkiye",
        "sabit protez İstanbul",
      ],
    },
  },

  "teeth-whitening": {
    name: "Diş Beyazlatma",
    shortName: "Beyazlatma",
    heroTagline: "Tek seansta fark edilir derecede daha parlak bir gülüş.",
    summary:
      "Diş hekimi gözetiminde, lekeleri güvenli ve eşit şekilde açan profesyonel klinik içi beyazlatma.",
    whatItIs:
      "Profesyonel beyazlatmada, diş hekimi gözetiminde kontrollü bir jel kullanılarak lekeler giderilir ve dişlerinizin doğal tonu aydınlatılır. Diş eti koruması altında ve gözetim eşliğinde uygulandığından, sonuçlar tek bir seansta görülür.",
    whoItsFor: [
      "Dişleriniz zamanla sararmış veya lekelenmiş",
      "Diş yapınızı değiştirmeden daha parlak bir gülüş istiyorsunuz",
      "Dişleriniz ve diş etleriniz sağlıklı, aktif çürük bulunmuyor",
      "Belki bir temizlikle birlikte hızlı bir yenilenme istiyorsunuz",
    ],
    processSteps: [
      {
        title: "Kontrol muayenesi",
        description:
          "Kısa bir muayeneyle dişlerinizin ve diş etlerinizin sağlıklı ve beyazlatmaya uygun olduğu doğrulanır.",
      },
      {
        title: "Diş temizliği (isteğe bağlı)",
        description:
          "Önce yapılan bir hijyen temizliği, beyazlatmanın temiz mine üzerinde eşit şekilde etki etmesini sağlar.",
      },
      {
        title: "Klinik içi beyazlatma",
        description:
          "Diş etleri korunur ve beyazlatma jeli kontrollü döngülerde uygulanıp aktive edilir.",
      },
      {
        title: "Sonrası bakım",
        description:
          "Sonucunuzun mümkün olduğunca uzun süre parlak kalması için basit öneriler paylaşırız.",
      },
    ],
    daysInIstanbul: "1-2 gün",
    seo: {
      title: "İstanbul'da Diş Beyazlatma",
      description:
        "İstanbul'da profesyonel klinik içi diş beyazlatma. Güvenli, diş hekimi gözetiminde beyazlatma, aynı gün sonuç.",
      keywords: [
        "diş beyazlatma Türkiye",
        "diş beyazlatma İstanbul",
        "İstanbul lazer diş beyazlatma",
      ],
    },
  },

  crowns: {
    name: "Diş Kaplamaları (Kron)",
    shortName: "Kron",
    heroTagline: "Hasarlı dişlere dayanıklılık ve şeklini yeniden kazandırır.",
    summary:
      "Zayıflamış, çatlamış veya çok fazla dolgulu bir dişi kaplayıp koruyan, doğal görünümünü geri kazandıran özel üretim kaplamalar.",
    whatItIs:
      "Kron, hasarlı veya çok fazla restore edilmiş bir dişi kaplayarak şeklini, dayanıklılığını ve görünümünü yeniden kazandıran özel üretim bir kaplamadır. Modern tam seramik ve zirkonyum kronlar dayanıklıdır ve doğal dişlere çok yakın görünür; bu da onları hem arka hem ön dişler için uygun kılar.",
    whoItsFor: [
      "Çatlak, aşınmış veya çok fazla dolgulu bir dişiniz var",
      "Kanal tedavisi oldunuz ve dişi korumanız gerekiyor",
      "Tek bir dişin şeklini veya rengini iyileştirmek istiyorsunuz",
      "Bir köprünün parçası olarak veya implant üzerinde kron ihtiyacınız var",
    ],
    processSteps: [
      {
        title: "Değerlendirme",
        description:
          "Diş muayene edilir ve varsa çürükler tedavi edilerek kronun sağlıklı bir zemin üzerine oturması sağlanır.",
      },
      {
        title: "Hazırlık ve tarama",
        description:
          "Diş şekillendirilir ve laboratuvar için hassas bir dijital ölçü alınır.",
      },
      {
        title: "Geçici kron",
        description:
          "Kalıcı kronunuz hazırlanırken geçici bir kron dişinizi korur.",
      },
      {
        title: "Yerleştirme",
        description:
          "Kalıcı kron uyum, renk ve ısırma açısından kontrol edilip yerine yapıştırılır.",
      },
    ],
    daysInIstanbul: "3-5 gün",
    seo: {
      title: "İstanbul'da Diş Kaplaması (Kron)",
      description:
        "İstanbul'da zirkonyum ve porselen diş kronları. Kayıtlı bir diş hekiminden doğal görünümlü sonuçlar.",
      keywords: [
        "diş kaplaması Türkiye",
        "diş kaplaması İstanbul",
        "zirkonyum kron Türkiye",
      ],
    },
  },

  orthodontics: {
    name: "Ortodonti",
    shortName: "Ortodonti",
    heroTagline: "Braket veya şeffaf plaklarla daha düzgün dişler.",
    summary:
      "Takip edilen bir tedavi planı boyunca dişleri kademeli olarak daha düzgün ve dengeli bir konuma taşıyan geleneksel braketler veya şeffaf plaklar.",
    whatItIs:
      "Ortodontik tedavi, dişleri zaman içinde daha düzgün bir konuma taşımak için hafif ve kontrollü baskı uygulayan sabit braketler veya bir dizi şeffaf plak kullanır. Buradaki diğer tedavilerin çoğunun aksine, tek seansta tamamlanan bir işlem değildir — plan İstanbul'da belirlenip, ilerleme yüz yüze veya uzaktan belirli aralıklarla kontrol edilerek, nihai sonuca ulaşılana kadar birkaç ay sürer.",
    whoItsFor: [
      "Dişleriniz sıkışık, aralıklı veya düzensiz dizilmiş",
      "Kapanış bozukluğunuz var (üst çene öne çıkıklığı, alt çene öne çıkıklığı veya çapraz kapanış)",
      "Beyazlatma veya lamine denediniz ama asıl sorun diş dizilimi",
      "Gülüşünüzü düzeltmek için cerrahi olmayan, uzun vadeli bir yol istiyorsunuz",
    ],
    processSteps: [
      {
        title: "Danışmanlık ve tarama",
        description:
          "Fotoğraflar, röntgenler ve klinik muayene ile braket veya şeffaf plağın durumunuza uygun olup olmadığı belirlenir ve ön bir tedavi planı sunulur.",
      },
      {
        title: "Tedavi planı",
        description:
          "Diş hekiminiz, herhangi bir apareyi takmadan önce tüm hareket sürecini ve beklenen zaman çizelgesini planlar.",
      },
      {
        title: "Yerleştirme",
        description:
          "Randevunuzda braketler dişlerinize yapıştırılır veya ilk şeffaf plak setiniz verilir.",
      },
      {
        title: "Devam eden ayarlamalar",
        description:
          "İlerleyen aylar boyunca ilerleme belirli aralıklarla kontrol edilir — dönüş ziyaretlerinde yüz yüze veya aralarda uzaktan — gerektiğinde ayarlamalar yapılır veya yeni plak setleri verilir.",
      },
      {
        title: "Pekiştirme (Retainer)",
        description:
          "Tedavi tamamlandıktan sonra, bir retainer dişlerinizi yeni konumlarında uzun süre sabit tutar.",
      },
    ],
    daysInIstanbul: "Plan İstanbul'da belirlenir; sonraki aylarda takip edilir",
    seo: {
      title: "İstanbul'da Ortodonti Tedavisi",
      description:
        "İstanbul'da braket ve şeffaf plak tedavisi; plan İstanbul'da belirlenir, ilerleme yüz yüze veya uzaktan takip edilir.",
      keywords: [
        "ortodonti Türkiye",
        "braket İstanbul",
        "şeffaf plak Türkiye",
        "İstanbul invisalign",
      ],
    },
  },

  "root-canal": {
    name: "Kanal Tedavisi",
    shortName: "Kanal Tedavisi",
    heroTagline: "Kaybetmek yerine hasarlı veya iltihaplı dişinizi kurtarın.",
    summary:
      "Diş içindeki iltihaplı veya hasarlı pulpayı temizleyip, boşluğu şekillendirip dolduran ve dişinizi kurtaran bir tedavi.",
    whatItIs:
      "Kanal tedavisi, genellikle derin çürük, çatlak veya aynı diş üzerinde tekrarlanan işlemlerden kaynaklanan, dişin içindeki sinir ve damarları barındıran yumuşak dokunun (pulpa) iltihaplanması veya hasar görmesi durumunda uygulanır. Boşluk temizlenir, şekillendirilir ve bir dolgu maddesiyle doldurulur; ardından dişi korumak ve güçlendirmek için genellikle bir kron yerleştirilir. Aksi halde çekilmesi gerekebilecek bir dişi kurtarmanın yerleşik bir yoludur.",
    whoItsFor: [
      "Özellikle sıcak veya soğuk yiyeceklerle artan, sürekli diş ağrınız var",
      "Bir dişiniz çatlak, derin çürük veya daha önce birden fazla kez tedavi edilmiş",
      "Belirli bir dişin yanındaki diş etinde şişlik veya hassasiyet fark ediyorsunuz",
      "Diş hekiminiz röntgende iltihaplı veya hasarlı pulpa tespit etti",
    ],
    processSteps: [
      {
        title: "Muayene ve röntgen",
        description:
          "Diş hekiminiz dişi inceler ve hasarın veya iltihabın boyutunu doğrulamak için röntgen çeker.",
      },
      {
        title: "Lokal anestezi",
        description:
          "İşlem boyunca konforlu olması için bölge uyuşturulur.",
      },
      {
        title: "Kanalın temizlenmesi",
        description:
          "İltihaplı veya hasarlı pulpa çıkarılır, dişin içi temizlenir ve şekillendirilir.",
      },
      {
        title: "Dolgu ve kapama",
        description:
          "Temizlenen boşluk yeniden iltihaplanmayı önlemek için doldurulur ve kapatılır.",
      },
      {
        title: "Kron (gerekirse)",
        description:
          "Dişi uzun vadede korumak ve güçlendirmek için genellikle ardından bir kron takılır.",
      },
    ],
    daysInIstanbul: "1-2 ziyaret (karmaşık vakalarda daha fazla olabilir)",
    seo: {
      title: "İstanbul'da Kanal Tedavisi",
      description:
        "İstanbul'da kayıtlı bir diş hekimiyle kanal tedavisi — hasarlı veya iltihaplı dişinizi kurtarın.",
      keywords: [
        "kanal tedavisi Türkiye",
        "kanal tedavisi İstanbul",
        "endodonti Türkiye",
        "İstanbul'da kanal tedavisi",
      ],
    },
  },

  "gum-treatment": {
    name: "Diş Eti Tedavisi",
    shortName: "Diş Eti Tedavisi",
    heroTagline: "Sorunlar ilerlemeden önce daha sağlıklı diş etleri.",
    summary:
      "Diş eti çizgisinin altındaki plak ve tartarı temizleyen ve diş eti hastalığının ilerlemesini önlemeye yardımcı olan profesyonel derin temizlik ve bakım.",
    whatItIs:
      "Diş eti (periodontal) tedavisi, diş eti çizgisinin üstünde ve altında biriken plak ve tartarı temizleyerek iltihaplanma, kanama veya erken evre diş eti hastalığını ele alır. Temel tedavi, diş kökü yüzeylerinin kapsamlı bir şekilde temizlenmesi olan küretaj ve kök yüzeyi düzleştirmedir; bu, diş etlerinin yeniden tutunmasına ve iyileşmesine yardımcı olur. Tedavi edilmediğinde diş eti hastalığı ilerleyebilir ve dişlerinizi destekleyen kemiği etkileyebilir, bu yüzden erken tedavi önemlidir.",
    whoItsFor: [
      "Fırçalarken veya diş ipi kullanırken diş etleriniz kanıyor",
      "Diş etlerinizde şişlik, kızarıklık veya hassasiyet fark ediyorsunuz",
      "Geçmeyen sürekli bir ağız kokunuz veya kötü bir tat var",
      "Diş hekiminiz normalden derin diş eti cepleri ölçtü",
    ],
    processSteps: [
      {
        title: "Muayene",
        description:
          "Diş hekiminiz diş etlerinizi kontrol eder, her diş çevresindeki cep derinliğini ölçer ve destekleyici kemiği kontrol etmek için röntgen çekebilir.",
      },
      {
        title: "Küretaj ve kök yüzeyi düzleştirme",
        description:
          "Plak ve tartar diş eti çizgisinin üstünden ve altından dikkatlice temizlenir, kök yüzeyleri düzleştirilir.",
      },
      {
        title: "İyileşme",
        description:
          "Diş etlerine temizlenen diş yüzeylerine yeniden tutunması ve iyileşmesi için zaman tanınır.",
      },
      {
        title: "Kontrol ve bakım",
        description:
          "Bir kontrol randevusu diş etlerinizin iyi iyileştiğini doğrular ve sağlıklı kalmaları için rehberlik sağlar.",
      },
    ],
    daysInIstanbul: "Yaklaşık bir hafta arayla 1-2 ziyaret",
    seo: {
      title: "İstanbul'da Diş Eti Tedavisi",
      description:
        "İstanbul'da kayıtlı bir diş hekimiyle profesyonel diş eti (periodontal) tedavisi.",
      keywords: [
        "diş eti tedavisi Türkiye",
        "diş eti tedavisi İstanbul",
        "periodontal tedavi Türkiye",
        "İstanbul diş eti hastalığı tedavisi",
      ],
    },
  },
};
