import React, {useMemo} from 'react'
import './App.css';
import apoth from './apoth.png'
const ThreeStarTable = () => {
    const data = useMemo(() => 
    [
        {
            id:1,
            name:"Bixa orellana",
            commonName:"Annatto",
            origin:"South America",
            medProperites:"The medical properties of annatto are poorly understood, but it is a bitter, astringent, purgative herb that reputedly destroys intestinal worms, lowers fever, improves digestion and has expectorant effects[ 238 ]. A decoction of the leaves is used as a treatment for dysentery[ 348 ], and to reduce vomiting during pregnancy[ 739 ]. The leaves are applied to the head and to sprains to relieve aches[ 303 ]. A decoction is gargled as a cure for mouth and throat infections. The leaves may also be used in baths to relieve muscular aches, fevers, colic or to get rid of worms in children[ 303 , 348 ]. The fresh shoots are steeped in water, which is then used as a eyewash for inflamed eyes[ 739 ]. The leaves can be picked as required and used fresh or dried[ 238 ]. The sap from the leaf petiole is soaked in hot water with rum, then used to remove secretions from encrusted eyelids as a treatment for blepharitis[ 348 ]. Young shoots are applied locally as a poultice on abscesses[ 348 ]. The roots are digestive and diuretic[ 739 ]. A decoction is taken orally to control asthma[ 303 ]. An infusion of the root in water and rum is used to treat venereal diseases[ 303 ]. A tea made from the root is used to treat oliguria and jaundice[ 303 ]. The seeds are used as an aphrodisiac, emmenagogue, expectorant and vermifuge[ 303 , 348 , 739 ]. They are used to treat asthma and nasal cavity problems[ 348 ]. A macerated seed decoction is taken orally for the relief of fevers[ 303 ]. In a syrup, they are used in the treatment of pharyngitis and bronchitis[ 739 ]. The ground seeds are applied to burns in order to prevent blistering and scarring[ 238 ]. The seeds are harvested as the fruits split open, and can be dried for later use[ 238 ]. They can also be soaked in hot water - the resulting sediment is pressed into cakes for use in medicines and dyes[ 238 ]. The pulp surrounding the seed is made into an astringent drink used to treat cancer, dysentery and kidney infections[ 238 , 303 ]. The fruit pulp is used as a rub on the skin to prevent sores, probably from sunburn[ 348 ]. The dye obtained from the seed coat is used as an antidote for prussic acid poisoning caused by eating poorly treated Manihot esculenta[ 238 , 303 ]. Sap from the bark and crushed leaves is used as a treatment for skin rashes[ 348 ]. A decoction of the bark is used as a treatment for malaria; angina and asthma[ 348 ]. The leaves contain cyanidine and ellagic acid[ 348 ].",
            web:"https://pfaf.org/User/Plant.aspx?LatinName=Bixa+orellana"
          },
          {
            id:2,
            name:"Cecropia Peltata",
            commonName:"Trumpet Tree",
            origin:"South America",
            medProperites:"The bark and leaves are anticoagulant, antiinflammatory, antitumor, astringent, cardiotonic, diuretic, hypotensive and vasodilator[ 348 ]. A decoction of the young leaves is used to treat liver ailments and dropsy[ 46 ]. A tea or decoction of the dried leaves or inner stem-bark is used to treat hypertension, Bright's disease, blennorrhagia, albuminuria, kidney infections, heart conditions and nervous diseases, and to promote good kidney function[ 348 ]. A tea prepared from the dried leaves is used as a treatment for back pain[ 348 ]. An infusion of the leaves is sometimes injected vaginally after childbirth[ 348 ]. A hot poultice of the young shoots is used as a dressing for ulcers, abscesses, wounds, cuts and bush sores[ 348 ]. The dried leaves are smoked to alleviate asthma[ 307 ]. The juice of the plant is used as a caustic to remove warts[ 46 ]. The sap is used to treat fresh cuts[ 348 ]. A decoction of the inner bark is used in the treatment of dysentery[ 348 ].",
            web:"https://pfaf.org/User/Plant.aspx?LatinName=Cecropia+peltata" 
          },
          {
            id:3,
            name:"Ageratum conyzoides",
            commonName:"Goatweed",
            origin:"South America",
            medProperites:"The plant contains between 0.7 - 2.0% essential oil, plus alkaloids and saponins[283]. The whole plant is antiinflammatory and antiallergic[283]. The juice of the fresh plant, or an extract of the dried plant, is used in the treatment of allergic rhinitis and sinusitis[283]. The juice of the fresh plant is also useful in treating post-partum uterine haemorrhage[283]. The juice of the root is antilithic[240, 243]. A paste of the root, mixed with the bark of Schinus wallichii, is applied to set dislocated bones[272]. The leaves are styptic[240]. They are dried and applied as a powder to cuts, sores and the ruptures caused by leprosy[272], The powder absorbs the moisture of the disease and forms a layer that is removed after 1 - 2 days[272]. An effective cure for most cuts and sores, though it does not effect a complete cure for leprosy[272]. The leaves are also used externally in the treatment of ague[240, 243]. The juice of the plant is used to treat cuts, wounds and bruises[272]. A paste of the leaves is used as a poultice to remove thorns from the skin[272]. A paste made of the leaves mixed with equal amounts of Bidens pilosa, Drymaria cordata, Galinsoga parviflora and the rhizome of Zingiber officinale is used to treat snakebites[272]. The juice of the flowerheads is used externally to treat scabies, whilst a paste of them is used to treat rheumatism[272]. A tea made from the flowerheads mixed with Ocimum tenuifolium is used to treat coughs and colds[272].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Ageratum+conyzoides"
          },
          {
            id:4,
            name:"Amaranthus hypochondriacus",
            commonName:"Prince's Feather",
            origin:"Southern N. America",
            medProperites:"The whole plant contains tannin and is astringent[238, 254]. It is used internally in the treatment of diarrhoea and excessive menstruation[238, 254]. It can be used as a gargle to soothe inflammation of the pharynx and to hasten the healing of ulcerated mouths[254], whilst it can also be applied externally to treat vaginal discharges, nosebleeds and wounds[238]. The plant can be used fresh or it can also be harvested when coming into flower and dried for later use[238].",
            web:"https://pfaf.org/user/plant.aspx?LatinName=Amaranthus+hypochondriacus"
          },
          {
            id:5,
            name:"Aniba rosaeodora",
            commonName:"Brazilian Rosewood",
            origin:"South America",
            medProperites:"The bark and the essential oil obtained from the wood are analgesic, antibacterial, anticonvulsant, antidepressant, antimicrobial, antiseptic, aphrodisiac, deodorant, stimulant and tonic[ 318 ]. They are used in the treatment of acne, colds, coughs, dermatitis, fevers, frigidity, headaches, infections, nausea, nervous tension, skin care and wounds[ 318 ].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Aniba+rosaeodora"
          },
          {
            id:6,
            name:"Adasonia digitata",
            commonName:"Judas Fruit",
            origin:"Africa",
            medProperites:"The leaves are hyposensitive and antihistamine[303 ]. They are used to treat kidney and bladder diseases, asthma, general fatigue, diarrhoea, insect bites, and guinea worm[303 ]. Leaf and flower infusions are valued for respiratory problems, digestive disorders and eye inflammation[303 ]. Seeds are used to cure gastric, kidney and joint diseases. They are roasted then ground and the powder smeared on the affected part or drunk in water[303 ]. The seed paste is used for curing tooth and gum diseases[303 ]. The fruit pulp, seed and bark are reputedly an antidote to Strophanthus poisoning[303 ]. The pulp is widely used in Africa as a diaphoretic to combat fevers, and to treat dysentery[46 ]. The gum from the bark is used for cleansing sores. It is also used as an expectorant and a diaphoretic[303 ]. The bark is used in steam baths for calming shivering and high fever[303 ]. The bark is boiled and taken as a cure for body pains. This infusion is also used to treat colds, fever and influenza[303 ] A decoction of the roots is taken as a remedy for lassitude, impotence and kwashiorkor[303 ]",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Adansonia+digitata"
          },
          {
            id:7,
            name:"Afraegle paniculata",
            commonName:"Nigerian Powder-Flask Fruit",
            origin:"West Africa",
            medProperites:"The plant has a range of medicinal uses[332 ].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Afraegle+paniculata"
          },
          {
            id:8,
            name:"Datura metel",
            commonName:"Angel's Trumpet",
            origin:"E. Asia",
            medProperites:"The whole plant, but especially the leaves and seed, is anaesthetic, anodyne, antiasthmatic, antispasmodic, antitussive, bronchodilator, hallucinogenic, hypnotic and mydriatic[147, 192, 218]. It has a wide range of applications in India, including in the treatment of epilepsy, hysteria, insanity, heart diseases, fever with catarrh, diarrhoea, skin diseases etc[192, 240]. A poultice of the crushed leaves is used to relieve pain[283]. In China, the plant is used in the treatment of asthma[218]. In Vietnam, the dried flowers and leaves are cut into small chips and used in antiasthmatic cigarettes[283]. Great caution is advised in the use of this plant since excess doses cause hallucinations, severe intoxication and death. The toxic dose is very close to the medicinal dose so this plant should only be used under the guidance of a qualified practitioner. See also the notes above on toxicity. The plant contains the alkaloids hyoscyamine, hyoscine and atropine[240]. Atropine dilates the pupils and is used in eye surgery[222]. Total alkaloid content of the leaves is 0.426%, which is mainly atropine[240]. The seeds contain 0.426% alkaloids, which is mainly hyoscyamine[240]. The roots contain 0.35% hyoscyamine[240]. An extract of the flowers is used as an anaesthetic - 3 - 5g applied orally produces a general anaesthesia within 5 minutes and lasting 5 - 6 hours[218].",
            web:"https://pfaf.org/User/Plant.aspx?LatinName=Datura+metel"
          },
          {
            id:9,
            name:"Abroma augusta",
            commonName:"Cotton Abroma",
            origin:"E. Asia",
            medProperites:"The fresh viscid sap of the root bark is considered to be a valuable emmenagogue and uterine tonic[372]. The juice of the plant is used to treat dysmenorrhoea[46, 272]. The root has been used to treat itch[372]. Used in the treatment of diabetes[266].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Abroma+augusta"
          },
          {
            id:10,
            name:"Achyranthes aspera",
            commonName:"Devil's Horsewhip",
            origin:"E. Asia",
            medProperites:"One of the more important mdicinal herbs of Nepal, it is widely used in the treatment of a range of complaints. Ophthalmic[152]. The whole plant is used medicinally, but the roots are generally considered to be more effective[283]. They contain triterpenoid saponins[283]. The root is astringent, diuretic and antispasmodic[152, 178, 272]. It is used in the treatment of dropsy, rheumatism, stomach problems, cholera, skin diseases and rabies[152, 272]. The juice extracted from the root of this plant, mixed with the root of Urena lobata and the bark of Psidium guajava, is used in the treatment of diarrhoea and dysentery[272]. The plant is astringent, digestive, diuretic, laxative, purgative and stomachic[272]. The juice of the plant is used in the treatment of boils, diarrhoea, dysentery, haemorrhoids, rheumatic pains, itches and skin eruptions[272]. The ash from the burnt plant, often mixed with mustard oil and a pinch of salt, is used as a tooth powder for cleaning teeth[272]. It is believed to relieve pyorrhea and toothache[272]. The leaf is emetic and a decoction is used in the treatment of diarrhoea and dysentery[272]. A paste of the leaves is applied in the treatment of rabies, nervous disorders, hysteria, insect and snake bites[272].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Achyranthes+aspera"
          },
          {
            id:11,
            name:"Achyranthes japonica",
            commonName:"Japanese Chaff Flower",
            origin:"E. Asia",
            medProperites:"The root of the plant is used in Korea to treat oedema, rheumatism, delayed menses and as a contraceptive and abortifacient[279]. The root contains triterpenoid saponins and has been shown to have analgesic, antiallergic, antiinflammatory, antispasmodic, diuretic, hypotensive and uterine stimulant properties[279]. In addition, it contains protocatechuic acid, which has antioxidant properties, and also inhibits the aggregation of platelets[279].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Achyranthes+japonica"
          },
          {
            id:12,
            name:"Aleurites moluccanus",
            commonName:"Candle Nut",
            origin:"E. Asia",
            medProperites:"Candle nut is a widely used traditional medicine in the Pacific Islands[ 311 ]. Some caution needs to be employed when using this plant since there are also reports of toxicity[ 63 , 311 ]. The bark is used to treat wounds, tumours, bloody diarrhoea and dysentery[ 303 , 311 ]. Bark juice, with coconut milk, is used for treating sprue[ 303 ]. In Tonga, infertility in women is treated by daily drinking a decoction of the bark[ 311 ]. Secondary amenorrhoea is also treated with a decoction of the bark[ 311 ]. Thrush, sore throat, tonsillitis and mouth sores are treated in Polynesia by gargling with an infusion of the bark[ 311 ]. The oil is purgative and sometimes used like castor oil[ 303 ]. The irritant oil is rubbed on scalp as a hair stimulant[ 303 ]. In the Cook Islands and Tahiti, candlenut oil is used to make a massage oil for a certain kind of headache (possibly caused by meningitis)[ 311 ]. The kernels are laxative, stimulant and sudorific[ 303 ]. The pulped kernel is used in poultices for headache, fevers, ulcers and swollen joints[ 303 ]. In Papua New Guinea, the seeds are applied externally to the male genitals as a contraceptive[ 311 ]. The leaves are used to treat constipation and food poisoning[ 311 ]. A decoction of the leaves is used in treating coughs, diarrhoea, pains in the chest and hernia[ 311]. An infusion of the leaves is used as a lotion or is ingested for mouth infections of infants[ 311 ]. The boiled leaves are used as a poultice to treat headaches and gonorrhoea[ 303 ].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Aleurites+moluccanus"
          },
          {
            id:13,
            name:"Ailanthus altissima",
            commonName:"Tree of Heaven",
            origin:"E. Asia",
            medProperites:"The tree of heaven is not often used in Western herbal medicine, though it is more popular in the Orient. Various parts of the plant are used, though the bark is the part most commonly used - however, it contains a glycoside that has not been fully researched and so should be used with caution[7]. The root and stem bark are antispasmodic, astringent, bitter, cardiac depressant, diuretic, emetic, febrifuge, rubefacient and vermifuge[4, 61, 147, 176, 178, 218, 238]. The vermifuge properties do not act on round worms or earthworms[269]. A nauseatingly bitter herb, it is used internally to treat malaria and fevers, it also slows the heart rate and relaxes spasms[238]. It needs to be used under the supervision of a qualified practitioner since the bark readily causes vomiting[238]. In China, the bark is a popular remedy for dysentery and other complaints of the bowels[4]. In one clinical trial, 81 out of 82 patients were cured of dysentery when they were given this herb[254]. A tincture of the root-bark has been used successfully in the treatment of cardiac palpitations, asthma and epilepsy[4]. Tree-of-heaven is a folk remedy for asthma, cancer, diarrhoea, dysentery, dysmenorrhoea, dysuria, ejaculation (premature), epilepsy, eruption, fever, gonorrhoea, haematochezia, leucorrhoea, malaria, metrorrhagia, sores, spasms, spermatorrhoea, stomachic, tumours of the breast (China), and wet dreams[269] The bark is harvested in the spring and dried for later use[7]. The leaves, bark of the trunk, and roots are put into a wash to treat parasitic ulcers, itch, and eruptions[269]. In Korea, the root bark is used in the treatment of coughs, gastric and intestinal upsets[269]. The stembark is emmenagogue[218]. The leaves are anthelmintic, astringent and deobstruent[218]. The fruit is used in the treatment of bloody stools and dysentery[218, 269]. They have also been used to treat ophthalmic diseases[269]. Extracts from the plant are bactericidal[218]. The tree is used in homeopathic remedies for cancer[269]. A resin extracted from the roots and leaves is a revulsive or vesicant[269].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Ailanthus+altissima"
          },
          {
            id:14,
            name:"Ambrosia trifida",
            commonName:"Giant Rageweed",
            origin:"E North America",
            medProperites:"The leaves are very astringent, emetic and febrifuge[222, 257]. They are applied externally to insect bites and various skin complaints, internally they are used as a tea in the treatment of pneumonia, fevers, nausea, intestinal cramps, diarrhoea and mucous discharges[222]. The juice of wilted leaves is disinfectant and is applied to infected toes[257]. A tea made from the roots is used in the treatment of menstrual disorders and stroke[222]. The pollen is harvested commercially and manufactured into pharmaceutical preparations for the treatment of allergies to the plant[222].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Ambrosia+trifida"
          },
          {
            id:15,
            name:"Acorus gramineus",
            commonName:"Dwarf Sweet Flag",
            origin:"E. Asia",
            medProperites:"The root is antifungal, antibacterial, antiperiodic, antirheumatic, antispasmodic, aromatic, cardiac, carminative, diaphoretic, emmenaggue, febrifuge, sedative, stimulant, stomachic, tonic and vermifuge[4, 7, 9, 21, 61, 147, 165, 176, 178, 218, 238, 240, 279]. It is also powdered and applied to bleeding gums[218, 238]. It is used internally in the treatment of digestive problems - particularly gastralgia and diarrhoea[283], cough, bronchial asthma, neurasthenia, depression, epilepsy etc[176, 238, 283]. Externally, it is used to treat body parasites, dermatosis and haemorrhoids[283]. The root can be harvested at any time of the year, except when the plant is in flower[238]. The root contains an essential oil consisting of asarone and asaryl aldehyde, plus a bitter glucoside acorin[176, 283]. Asarone increases the hypnotic effect of barbiturates and ethanol, lowers blood pressure and is antibacterial against Staphylococcus aureus, streptococci and mycobacterium[176]. The whole plant is anodyne, antiperiodic, antispasmodic, digestive, diaphoretic, diuretic, expectorant, sedative, stimulant, stomachic, sudorific, tonic, vermifuge[218].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Acorus+gramineus"
          },
          {
            id:16,
            name:"Artemisia vulgaris",
            commonName:"Mugwort",
            origin:"Britain",
            medProperites:"Mugwort has a long history of use in herbal medicine especially in matters connected to the digestive system, menstrual complaints and the treatment of worms[238]. It is slightly toxic, however, and should never be used by pregnant women, especially in their first trimester, since it can cause a miscarriage[7, 238]. Large, prolonged dosage can damage the nervous system[268]. All parts of the plant are anthelmintic, antiseptic, antispasmodic, carminative, cholagogue, diaphoretic, digestive, emmenagogue, expectorant, nervine, purgative, stimulant, slightly tonic and used in the treatment of women's complaints[4, 7, 13, 21, 147, 165, 178, 201]. The leaves are also said to be appetizer, diuretic, haemostatic and stomachic[176, 218, 222]. They can be used internally or externally[218]. An infusion of the leaves and flowering tops is used in the treatment of nervous and spasmodic affections, sterility, functional bleeding of the uterus, dysmenorrhoea, asthma and diseases of the brain[176, 243]. The leaves have an antibacterial action, inhibiting the growth of Staphylococcus aureus, Bacillus typhi, B. dysenteriae, streptococci, E. coli, B. subtilis, Pseudomonas etc[176]. The leaves are harvested in August and can be dried for later use[4]. The stem is also said to be antirheumatic, antispasmodic, and stomachic[218]. The roots are tonic and antispasmodic[243]. They are said to be one of the best stomachics[4]. They are harvested in the autumn and dried for later use[4]. The leaves, placed inside the shoes, are said to be soothing for sore feet[238]. The compressed dried leaves and stems are used in moxibustion[176, 178, 218, 222, 238]. Another report says that the down from the leaves is used[4].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Artemisia+vulgaris"
          },
          {
            id:17,
            name:"Artocarpus mariannensis",
            commonName:"Seeded Breadfruit",
            origin:"Palau",
            medProperites:"All parts of the plant are used medicinally, especially the latex, leaf tips, and inner bark[ 303 ]. The diluted latex is taken internally to treat diarrhoea, stomach-aches, and dysentery[ 303 ]. Applied externally, the latex is commonly used to treat skin ailments and fungus diseases such as thrush[ 303 ]. It is massaged into the skin to treat broken bones and sprains and is plastered on the spine to relieve sciatica[ 303 ]. The crushed leaves are commonly used as a poultice to treat skin ailments and fungus diseases such as thrush[ 303 ]. The sap from the crushed petioles (leaf stalks) is used to treat ear infections or sore eyes[ 303 ]. The root is astringent and used as a purgative[ 303 ]. When macerated, it is used as a poultice for skin ailments[ 303 ]. The bark is used to treat headaches[ 303 ].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Artocarpus+mariannensis"
          },
          {
            id:18,
            name:"Belamcanda chinensis",
            commonName:"Leopard Lily",
            origin:"E. Asia",
            medProperites:"The leopard lily has a very long history of use in traditional Chinese medicine. It is a bitter cooling herb that acts mainly on the lungs and the liver, lowering fevers and reducing inflammation[238]. It is effective against a number of bacterial, fungal and viral organisms[238] and has also been used as an antidote to snakebites[240]. The root contains several medically active constituents including flavonoids and isoflavonoids[279]. It also contains the glucosides belamcandin, tectoridin, shekanin and iridin[283]. It is analgesic, antibacterial, antifungal, anti-inflammatory, depurative, expectorant, febrifuge, pectoral, purgative, stomachic and tonic[46, 61, 147, 176, 178, 218, 238, 279, 283]. It is used in the treatment of acute laryngitis, acute tonsillitis, oedema of the glottis and cough with profuse sputum[176, 279]. The juice of the root is used in Nepal to treat liver complaints, where it has the added benefit of improving the appetite[272]. This juice is also used to abort a foetus during the first trimester of pregnancy[272]. The root should not be prescribed for pregnant women[238]. The root is harvested in the summer and autumn, and dried for later use[238].",
            web:"https://pfaf.org/User/Plant.aspx?LatinName=Belamcanda+chinensis"
          },
          {
            id:19,
            name:"Ambrosia artemesiifolia",
            commonName:"Roman Wormwood",
            origin:"North America",
            medProperites:"The leaves are very astringent, emetic and febrifuge[222, 257]. They are applied externally to insect bites, rheumatic joints and various skin complaints, internally they are used as a tea in the treatment of fevers, pneumonia, nausea, intestinal cramps, diarrhoea and mucous discharges[222, 257]. Juice from the wilted leaves is disinfectant and is applied to infected toes[257]. A tea made from the roots is used in the treatment of menstrual disorders and stroke[222]. The pollen is harvested commercially and manufactured into pharmaceutical preparations for the treatment of allergies to the plant[222].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Ambrosia+artemesiifolia"
          },
          {
            id:20,
            name:"Aralia nudicaulis",
            commonName:"Wild Sarsaparilla",
            origin:"North America",
            medProperites:"Wild sarsaparilla is a sweet pungent tonic herb that acts as an alterative. It had a wide range of traditional uses amongst the North American Indians and was at one time widely used as a substitute for the tropical medicinal herb sarsaparilla[222, 257]. The root is alterative, diaphoretic, diuretic, pectoral and stimulant[4, 21, 213, 222]. The herb encourages sweating, is stimulating and detoxifying and so is used internally in the treatment of pulmonary diseases, asthma, rheumatism, stomach aches etc[4, 213, 238, 254, 257]. Externally it is used as a poultice in treating rheumatism, sores, burns, itchy skin, ulcers and skin problems such as eczema[4, 222, 254]. The root is collected in late summer and the autumn and dried for later use[4, 213]. A drink made from the pulverised roots is used as a cough treatment[213]. A poultice made from the roots and/or the fruit is applied to sores, burns, itchy skin, ulcers, swellings etc[213, 222]. A homeopathic remedy made from the roots is important in the treatment of cystitis[238].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Aralia+nudicaulis"
          },
          {
            id:21,
            name:"Arctostaphylos tomentosa",
            commonName:"Downy Manzanita",
            origin:"SW North America",
            medProperites:"The dried leaves are used in the treatment of a variety of complaints[4]. These leaves should be harvested in early autumn, only green leaves being selected, and then dried in gentle heat[4]. A tea made from the dried leaves is strongly astringent, diuretic and an antiseptic for the urinary tract[4, 222]. It is much used for kidney and bladder complaints and inflammation of the urinary tract, but it should be used with caution[4, 21, 46, 172] because it contains arbutin which hydrolyzes into the toxic urinary antiseptic hydroquinone[222]. An infusion of the bark powder has been used in the treatment of lung haemorrhages[257]. A cider made from the fruit has been used as an appetizer to create appetite and treat stomach complaints[257]. Although the report does not specify, the cider was probably unfermented[K].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Arctostaphylos+tomentosa"
          },
          {
            id:22,
            name:"Ardisia japonica",
            commonName:"Marlberry",
            origin:"E.Asia",
            medProperites:"This plant is commonly used in Chinese herbalism, especially in cases of bronchitis, where it is considered to be one of the 50 fundamental herbs[218]. Carminative, depurative, expectorant, stimulates blood circulation[147, 178]. The leaves are used in the treatment of cancer and hepatoma[218]. A decoction of the stems is used in the treatment of coughs and uterine bleeding[218]. The root is antidote and diuretic[218]. The plant is depurative[218].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Ardisia+japonica"
          },
          {
            id:22,
            name:"Baptisia tinctoria",
            commonName:"Wild Indigo",
            origin:"E. North America",
            medProperites:"Wild indigo was a favourite medicine of the N. American Indians, a decoction of the roots being used as an antiseptic wash for wounds and skin complaints[213, 238]. Modern research has shown that this acrid bitter herb stimulates the immune system[222, 238] and is particularly effective against bacterial infections[238]. Caution is advised in the internal use of this plant, large or frequent doses are potentially harmful[222]. A tea made from the roots is cholagogue, emetic, febrifuge and purgative[4, 21, 46, 165, 222]. The fresh root is also considered to be antiseptic, astringent and laxative[4, 21, 46, 165, 222]. The infusion is used in the treatment of upper respiratory infections such as tonsillitis and pharyngitis, and is also valuable in treating infections of the chest, gastro-intestinal tract and skin[254].The plants antimicrobial and immune-stimulant properties combat lymphatic problems, when used with detoxifying herbs such as Arctium lappa it helps to reduce enlarged lymph nodes[254]. Wild indigo is frequently prescribed, along with Echinacea, in the treatment of chronic viral infections or chronic fatigue syndrome[254]. A decoction of the root soothes sore or infected nipples and infected skin conditions[254]. When used as a mouth wash or gargle the decoction treats mouth ulcers, gum infections and sore throats[254]. The fresh root, including the bark, is used to make a homeopathic medicine[232]. This has a limited range of action, but is used especially in the treatment of certain types of flu[232].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Baptisia+tinctoria"
          },
          {
            id:23,
            name:"Abies alba",
            commonName:"Silver Fir",
            origin:"Europe",
            medProperites:"The buds are antibiotic, antiseptic and balsamic[7]. The bark is antiseptic and astringent[7]. It can be harvested as required throughout the year[238]. The leaves are expectorant and a bronchial sedative[7]. They are best harvested in the spring and can be dried for later use[238]. The resin is antiseptic, balsamic, diuretic, eupeptic, expectorant, vasoconstrictor and vulnerary[7]. Both the leaves and the resin are common ingredients in remedies for colds and coughs, either taken internally or used as an inhalant[238]. The leaves and/or the resin are used in folk medicine to treat bronchitis, cystitis, leucorrhoea, ulcers and flatulent colic[268]. The resin is also used externally in bath extracts, rubbing oils etc for treating rheumatic pains and neuralgia[238]. Oil of Turpentine, which is obtained from the trunk of the tree, is occasionally used instead of the leaves or the resin. The oil is also rubefacient and can be applied externally in the treatment of neuralgia[268].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Abies+alba"
          },
          {
            id:24,
            name:"Adonis vernalis",
            commonName:"Phesants Eye",
            origin:"Europe",
            medProperites:"Roots and whole plant[301]. Pheasant's eye has a long history of medicinal use and is still retained in the Pharmacopoeias of several European countries[268]. The plant contains cardiac glycosides similar to those found in the foxglove (Digitalis purpurea)[254]. These substances improve the heart's efficiency, increasing its output at the same time as slowing its rate[254]. It also has a sedative action and so is generally prescribed for patients whose hearts are beating too fast or irregularly[254]. The herb is not often prescribed, however, due to irregular absorption[268]. The herb is cardiotonic, diuretic, sedative and vasoconstrictor[4, 7, 9, 13, 46, 238]. It has sometimes been used internally as a cardiotonic with success where the better known foxglove (Digitalis purpurea) has failed - especially where there is also kidney disease[4]. The herb is also used in the treatment of low blood pressure and its strong diuretic action can be used to counter water retention[254]. It is included in many proprietary medicines, especially since its effects are not cumulative[238]. The plants are harvested every third year as they come into flower[7], they are dried for use in tinctures and liquid extracts[238]. The herb does not store well so stocks should be replaced every year[238]. Use with great caution[9], see the notes above on toxicity. The plant is used in homeopathy as a treatment for angina[254]. The German Commission E Monographs, a therapeutic guide to herbal medicine approve Adonis vernalis for arrhythmia, and nervous heart complaints (see [302] for critics of commission E)",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Adonis+vernalis"
          },
          {
            id:25,
            name:"Alnus glutinosa",
            commonName:"Alder",
            origin:"Europe",
            medProperites:"The bark is alterative, astringent, cathartic, febrifuge and tonic[4, 7, 14, 46, 269]. The fresh bark will cause vomiting, so use dried bark for all but emetic purposes[21]. A decoction of the dried bark is used to bathe swellings and inflammations, especially of the mouth and throat[4, 9, 21, 254]. The powdered bark and the leaves have been used as an internal astringent and tonic, whilst the bark has also been used as an internal and external haemostatic against haemorrhage[21]. The dried bark of young twigs are used, or the inner bark of branches 2 - 3 years old[9]. It is harvested in the spring and dried for later use[9]. Boiling the inner bark in vinegar produces a useful wash to treat lice and a range of skin problems such as scabies and scabs[21]. The liquid can also be used as a toothwash[21]. The leaves are astringent, galactogogue and vermifuge[7]. They are used to help reduce breast engorgement in nursing mothers[254]. A decoction of the leaves is used in folk remedies for treating cancer of the breast, duodenum, oesophagus, face, pylorus, pancreas, rectum, throat, tongue, and uterus[269]. The leaves are harvested in the summer and used fresh[238].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Alnus+glutinosa"
          },
          {
            id:26,
            name:"Angelica archangelica",
            commonName:"Angelica",
            origin:"Europe",
            medProperites:"Angelica has a long folk-history of use as a medicinal herb, in particular for the treatment of digestive disorders and problems with blood circulation[4, 254]. The root is the most active medicinally, it should be harvested in the autumn of its first year of growth, sliced longitudinally if necessary and dried quickly[4]. If well stored, the root retains its medicinal virtues for many years[4]. The leaves and seeds can also be used[4]. The leaves are harvested and dried in late spring before the plant comes into flower[244]. The plant is antispasmodic, carminative, diaphoretic, diuretic, expectorant, stimulant, stomachic, tonic[4, 9, 14, 21, 46, 165]. An infusion is used to ease flatulence, indigestion, chronic bronchitis and typhus[244]. It stimulates blood flow to the peripheral parts of the body and so is of value in treating poor circulation - it is considered a specific treatment for Buerger's disease, a condition that narrows the arteries of the hands and feet[254]. Angelica is contra-indicated for people with a tendency towards diabetes since its use can increase sugar levels in the urine[4]. This plant should not be prescribed for pregnant women[238], nor should the juice be allowed to come into contact with the eyes[244]. An essential oil from the seeds is sometimes used as a rub to relieve rheumatic conditions[244]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Angelica archangelica fruit for fevers and colds, infection of the urinary tract, dyspeptic complaints and loss of appetite. The root has been approved for dyspeptic complaints and loss of appetite. (see [302] for critics of commission E). No health hazards or side-effects if the proper administration of therapeutic dosages. Avoid sunbathing and intensive UV radiation for the duration of a treatment [301].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Angelica+archangelica" 
          },
          {
            id:27,
            name:"Arnica angustifolia alpina",
            commonName:"Mountain Tobacco",
            origin:"N. Europe",
            medProperites:"The whole flowering plant is antiecchymotic, antiphlogistic, nervine, sternutatory and vulnerary[172]. This species is closely related to A. montana and is included in that species by some botanists. The medicinal uses of that plant are as follows:- Arnica has a long history of herbal use, especially as an external treatment for bruises and sprains[232, 238] - it is an ingredient of a number of proprietary preparations[238]. Internally, it has been used in the treatment of heart complaints and as a booster for the immune system[238]. Arnica increases local blood supply and accelerates healing, it is anti-inflammatory and increases the rate of absorption of internal bleeding[254]. Generally the plant is nowadays only recommended for internal use as a homeopathic medicine, principally for treating shock, injury and pain[254]. If used as a decoction or tincture it stimulates the circulation and is valuable in the treatment of angina and a weak or failing heart, but it can be toxic even at quite low doses and so is rarely used this way[254]. The flowers are the part most commonly used[4, 232], they are harvested when fully open and dried - the receptacles are sometimes removed since these are liable to be attacked by insects[4]. The root is also used, it is harvested after the leaves have died down in the autumn and dried for later use[4]. The whole plant is antiecchymotic, antiphlogistic, nervine, sternutatory, vulnerary[4, 7, 9, 46, 165]. Although a very valuable remedy, it should be used with caution. It has been known to cause contact dermatitis when used externally and collapse when taken internally[238]. Only take it internally under the supervision of a qualified practitioner. The freshly crushed flowers cause sneezing if inhaled[232]. The leaves have also been smoked as a tobacco[232], though it is unclear whether this was for medicinal reasons The whole plant, harvested when in flower, is used in homeopathic remedies[232]. It is especially useful in the treatment of traumatic injuries, sores and bruises[232]. The homeopathic dose has also been used effectively in the treatment of epilepsy and seasickness, and it might be of use as a hair growth stimulant[268].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Arnica+angustifolia+alpina"
          },
          {
            id:28,
            name:"Artemisia abrotanum",
            commonName:"Southernwood",
            origin:"S. Europe",
            medProperites:"Southernwood has a long history of domestic herbal use, though it is now used infrequently in herbal medicine[254]. It is a strongly aromatic bitter herb that improves digestion and liver function by increasing secretions in the stomach and intestines, it stimulates the uterus and encourages menstrual flow, lowers fevers, relaxes spasms and destroys intestinal worms[238, 254]. The herb, and especially the young flowering shoots, is anthelmintic, antiseptic, cholagogue, deobstruent, emmenagogue, stomachic and tonic[4, 7, 165]. The main use of this herb is as an emmenagogue, though it is also a good stimulant tonic and has some nervine principle[4]. It is sometimes given to young children in order to expel parasitic worms and externally it is applied to small wounds in order to stop them bleeding and help them to heal[7]. The herb is also used externally in aromatic bathes and as a poultice to treat skin conditions[268]. Southernwood should be used internally with caution, see the notes above on toxicity. It should not be prescribed for pregnant women, especially in the first trimester of pregnancy, since it can encourage menstrual flow[238].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Artemisia+abrotanum"
          }
        ],
          []
    )
      
    
 
        
  return (
    <>
    <img src={apoth} className="image" alt='picture' />
    <br></br>
    <h2 className='headliner'>Three Star Plants</h2>
        <table>
        <tr>
            <th>Name</th>
            <th>Common Name</th>
            <th>Origin</th>
            <th>Medical Properties</th>
            <th>Source</th>
        </tr>
          {data.map((val, key) => {
            return (
                <tr key={key}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.origin}</td>
                    <td>{val.medProperites}</td>
                   <td><a href={val.web}>Link</a></td> 

                </tr>
            )
          })}

        </table>
    </>
  )
}

export default ThreeStarTable