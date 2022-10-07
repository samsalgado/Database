import React from 'react'
import './App.css';
import hippocrates from './hippocrates.PNG'
const FiveStarTable = () => {
    const data = React.useMemo(() =>
    [
        {
            id:1,
            name:"Chinchona calisaya",
            commonName:"Peruvian Bark",
            origin:"South America",
            medProperites:"Peruvian bark has a long history of native use, especially as a treatment for fevers and malaria. Modern research has shown it to be a very effective treatment for fevers, and especially as a treatment and preventative of malaria. The bark contains various alkaloids, particularly quinine and quinidine. Up to 70 - 80% of the total alkaloids contained in the bark are quinine[ 418 ]. The bark is a bitter, astringent, tonic herb that lowers fevers, relaxes spasms, is antimalarial (the alkaloid quinine) and slows the heart (the alkaloid quinidine)[ 238 ]. The bark is made into various preparations, such as tablets, liquid extracts, tinctures and powders[ 238 ]. It is used internally in the treatment of malaria, neuralgia, muscle cramps and cardiac fibrillation[ 238 ]. It is an ingredient in various proprietary cold and influenza remedies[ 238 ]. The liquid extract is useful as a cure for drunkenness[ 418 ]. It is also used as a gargle to treat sore throats[ 238 ]. Large and too constant doses must be avoided, as they produce headache, giddiness and deafness[ 418 ].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Cinchona+calisaya"
          },
          {
            id:2,
            name:"Pausinystalia johimbe",
            commonName:"Yohimbe",
            origin:"Africa",
            medProperites:"The bark contains up to 6% of a mixture of indole alkaloids, the principle one being yohimbine (which is also known as aphrodine), plus pigments and tannins[254 , 418 ]. The alkaloids have a cerebral stimulant action at low doses, but are highly toxic in large doses[254 ]. Yohimbine has been shown to block the release of adrenalin and, in the correct dose, act as a sexual stimulant[238 ]. It is the source of the only clinically-proven cure for impotence and has long been used as a traditional stimulant in Africa[418 ]. Yohimbe is a bitter, warming, anti-diuretic, hypotensive and vasodilating herb with reputedly aphrodisiac effects[238 ]. It has a stimulant effect upon the heart, increasing heart rate and blood pressure; has a locally anaesthetic action similar to that of cocaine but without being mydriatic; is a mild stimulant that can help to prevent drowsiness; and is hallucinogenic. The vasodilating action of yohimbe is particularly strong on the sex organs, hence its aphrodisiac action[238 , 303 ]. The bark is taken internally, either as a powder or as a decoction. It is used particularly in the treatment of impotence, frigidity and angina[238 , 418 ]. It is also used as a performance enhancer for athletes, and as a remedy to increase the clarity of the voices of singers during long festivals[303 , 418 ]. The bark can be harvested at any time of the year[254 ]. The use of this herb is subject to legal restrictions in some countries[238 , 254 ].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Pausinystalia+johimbe"
          },
          {
            id:3,
            name:"Prunus africana",
            commonName:"Pygeum",
            origin:"East Africa",
            medProperites:"The bark is highly valued for its medicinal properties, particularly as a treatment for benign prostatic hyperplasia and prostate gland hypertrophy, diseases that commonly affect older men in Europe and N. America[402 , 418 ]. Modern research has shown that this can be a very effective treatment. In addition, the bark is used in traditional medicine as a purgative and as a remedy for stomach ache[402 , 418 ]. The leaves are used as an inhalant for fever or are drunk as an infusion to improve appetite[418 ]. The tree contains several medically active compounds including the cyanogenic glycoside amygdalin, which is found in the bark, leaf and fruit; phytosterols such as. ß-sitosterol 15-18%, and its 3-O-glycoside, ß-sitostenone, campesterol, and aucosterol; pentacyclic triterpenoids (mainly of the oleanolic and ursolic acid type)[395 ].",
            web:"https://pfaf.org/USER/Plant.aspx?LatinName=Prunus+africana"
      
          },
          {
            id:4,
            name:"Oenothera biennis",
            commonName:"Evening Primrose",
            origin:"E. USA",
            medProperites:"The bark and the leaves are astringent and sedative[4, 21]. They have proved of use in the treatment of gastro-intestinal disorders of a functional origin, whooping cough and asthma[4]. A syrup made from the flowers is also an effective treatment for whooping cough[7]. The bark is stripped from the flowering stem and dried for later use, the leaves are also harvested and dried at this time[4]. Evening primrose oil has become a well-known food supplement since the 1980's. Research suggests that the oil is potentially very valuable in the treatment of multiple sclerosis, pre-menstrual tension, hyperactivity etc[66]. It is also taken internally in the treatment of eczema, acne, brittle nails, rheumatoid arthritis and alcohol-related liver damage[238]. Regular consumption of the oil helps to reduce blood cholesterol levels and lower the blood pressure[21, 66]. The seed is a good source of gamma-linolenic acid, an unsaturated fatty acid which assists the production of hormone-like substances[222, 238]. This process is commonly blocked in the body, causing disorders that affect the uterine muscles, nervous system and metabolism[238]. The poulticed root is applied to piles and bruises[222]. A tea made from the roots is used in the treatment of obesity and bowel pains[222].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Oenothera+biennis"
          },
          {
            id:5,
            name:"Trigonella foenum",
            commonName:"Fenugreek",
            origin:"Europe",
            medProperites:"Research has shown that the seeds can inhibit cancer of the liver, lower blood cholesterol levels and also have an antidiabetic effect[254]. The seed and leaves are anticholesterolemic, anti-inflammatory, antitumor, carminative, demulcent, deobstruent, emollient, expectorant, febrifuge, galactogogue, hypoglycaemic, laxative, parasiticide, restorative and uterine tonic[4, 7, 21, 147, 165, 176, 238]. The seed yields a strong mucilage and is therefore useful in the treatment of inflammation and ulcers of the stomach and intestines[4, 254]. Taken internally, a decoction of the ground seeds serves to drain off the sweat ducts[7]. The seed is very nourishing and body-building and is one of the most efficacious tonics in cases of physical debility caused by anaemia or by infectious diseases, especially where a nervous factor is involved[7, 244]. It is also used in the treatment of late-onset diabetes, poor digestion (especially in convalescence), insufficient lactation, painful menstruation, labour pains etc[238, 244]. The seeds freshen bad breath and restore a dulled sense of taste[254]. Externally, the seeds can be ground into a powder and used as a poultice for abscesses, boils, ulcers, burns etc, or they can be used as a douche for excessive vaginal discharge[4, 244, 254]. The leaves are harvested in the growing season and can be used fresh or dried[238]. The seeds are harvested when fully ripe and dried for later use[238]. Compounds extracted from the plant have shown cardiotonic, hypoglycaemic, diuretic, antiphlogistic and hypotensive activity[218]. ",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Trigonella+foenum-graecum"
          },
          {
            id:6,
            name:"Symphytum officinale",
            commonName:"Comfrey",
            origin:"Europe",
            medProperites:"Comfrey is a commonly used herbal medicine with a long and proven history in the treatment of various complaints. The root and the leaves are used, the root being more active, and they can be taken internally or used externally as a poultice[4, 222]. Comfrey is especially useful in the external treatment of cuts, bruises, sprains, sores, eczema, varicose veins, broken bones etc, internally it is used in the treatment of a wide range of pulmonary complaints, internal bleeding etc[4, 238, K]. The plant contains a substance called 'allantoin', a cell proliferant that speeds up the healing process[4, 21, 26, 165, 222, 238]. This substance is now synthesized in the pharmaceutical industry and used in healing creams[238]. The root and leaves are anodyne, astringent (mild), demulcent, emollient, expectorant, haemostatic, refrigerant, vulnerary[4, 21, 26, 165, 222]. Some caution is advised, however, especially in the internal use of the herb. External applications and internally taken teas or tinctures of the leaves are considered to be completely safe, but internal applications of tablets or capsules are felt to have too many drawbacks for safe usage[238]. See also the notes above on toxicity. The leaves are harvested in early summer before the plant flowers, the roots are harvested in the autumn. Both are dried for later use[238]. A homeopathic remedy is made from the fresh root, harvested before the plant flowers[232]. This has a very limited range of application, but is of great benefit in the treatment of broken bones and eye injuries[232]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Symphytum officinale for blunt injuries (see [302] for critics of commission E).",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Symphytum+officinale"
          },
          {
            id:7,
            name:"Hippophae rhamnoides",
            commonName:"Seaberry",
            origin:"Eurasia",
            medProperites:"The twigs and leaves contain 4 - 5% tannin[240]. They are astringent and vermifuge[7, 100]. The tender branches and leaves contain bio-active substances which are used to produce an oil that is quite distinct from the oil produced from the fruit. Yields of around 3% of oil are obtained[240]. This oil is used as an ointment for treating burns[214]. A high-quality medicinal oil is made from the fruit and used in the treatment of cardiac disorders, it is also said to be particularly effective when applied to the skin to heal burns, eczema and radiation injury, and is taken internally in the treatment of stomach and intestinal diseases[214]. The fruit is astringent and used as a tonic[9, 254]. The freshly-pressed juice is used in the treatment of colds, febrile conditions, exhaustion etc[9]. The fruit is a very rich source of vitamins and minerals, especially in vitamins A, C and E, flavanoids and other bio-active compounds. It is also a fairly good source of essential fatty acids, which is fairly unusual for a fruit. It is being investigated as a food that is capable of reducing the incidence of cancer and also as a means of halting or reversing the growth of cancers[214]. The juice is also a component of many vitamin-rich medicaments and cosmetic preparations such as face-creams and toothpastes[9]. A decoction of the fruit has been used as a wash to treat skin irritation and eruptions[254].",
            web:"https://pfaf.org/user/plant.aspx?LatinName=Hippophae+rhamnoides"
          },
          {
            id:8,
            name:"Cynara cardunculus",
            commonName:"Cardoon",
            origin:"S. Europe",
            medProperites:"The cardoon has become important as a medicinal herb in recent years following the discovery of cynarin. This bitter-tasting compound, which is found in the leaves, improves liver and gall bladder function, stimulates the secretion of digestive juices, especially bile, and lowers blood cholesterol levels[238, 254]. The leaves are anticholesterolemic, antirheumatic, cholagogue, digestive, diuretic, hypoglycaemic and lithontripic[7, 21, 165]. They are used internally in the treatment of chronic liver and gall bladder diseases, jaundice, hepatitis, arteriosclerosis and the early stages of late-onset diabetes[238, 254]. The leaves are best harvested just before the plant flowers, and can be used fresh or dried[238].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Cynara+cardunculus"
          },
          {
            id:9,
            name:"Aloe Vera",
            commonName:"Aloe",
            origin:"Europe",
            medProperites:"Aloe vera is a fairly well known herbal preparation with a long history of use. It is widely used in modern herbal practice and is often available in proprietary herbal preparations[K]. It has two distinct types of medicinal use. The clear gel contained within the leaf makes an excellent treatment for wounds, burns and other skin disorders, placing a protective coat over the affected area, speeding up the rate of healing and reducing the risk of infection[254] [K]. This action is in part due to the presence of aloectin B, which stimulates the immune system[254]. To obtain this gel, the leaves can be cut in half along their length and the inner pulp rubbed over the affected area of skin[K]. This has an immediate soothing effect on all sorts of burns and other skin problems[K]. The second use comes from the yellow sap at the base of the leaf. The leaves are cut transversally at their base and the liquid that exudes from this cut is dried[4]. It is called bitter aloes and contains anthraquinones which are a useful digestive stimulant and a strong laxative[254]. When plants are grown in pots the anthraquinone content is greatly reduced[254]. The plant is emmenagogue, emollient, laxative, purgative, stimulant, stomachic, tonic, vermifuge and vulnerary[4, 21, 46, 57, 61, 165, 176]. Extracts of the plant have antibacterial activity[218]. Apart from its external use on the skin, aloe vera (usually the bitter aloes) is also taken internally in the treatment of chronic constipation, poor appetite, digestive problems etc[238]. It should not be given to pregnant women or people with haemorrhoids or irritable bowel syndrome[238, 243]. The plant is strongly purgative so great care should be taken over the dosage[238]. The plant is used to test if there is blood in the faeces[61].",
            web:"https://pfaf.org/user/plant.aspx?latinname=Aloe+vera"
          },
          {
            id:10,
            name:"Phyllanthus emblica",
            commonName:"Indian Gooseberry",
            origin:"E. Asia",
            medProperites:"Emblic is of great importance in traditional Asiatic medicine, not only as an antiscorbutic, but also in the treatment of diverse ailments, especially those associated with the digestive organs. In Thailand emblic fruits are traditionally used as an expectorant, antipyretic, diuretic, antidiarrhoeal and antiscorbutic[306 ]. Many of these traditional uses have been confirmed by research into the active ingredients in the plants and their properties. The fruits, bark and leaves are rich in tannin[299 ]. Many of the medicinal applications of the fruits can be ascribed to the presence of ascorbic acid and to the astringent action of the tannins, but the fruits contain other active compounds as well. Fruit extracts showed anti-oxidant and antitumour activities in in-vitro and animal tests. They also exhibited cholesterol-lowering, antitussive, anti-ulcerative and hepatoprotective properties and showed potent inhibitory activity on HIV reverse transcriptase",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Phyllanthus+emblica"
          },
          {
            id:11,
            name:"Centella asiatica",
            commonName:"Spadeleaf(Gotu Kola)",
            origin:"E. Asia",
            medProperites:"Gotu kola is an outstandingly important medicinal herb that is widely used in the Orient[238] and is becoming increasingly popular in the West[254]. Its Indian name is `Brahmi` which means `bringing knowledge of the Supreme Reality` and it has long been used there medicinally and as an aid to meditation[238]. It is a useful tonic and cleansing herb for skin problems and digestive disorders[254]. In India it is chiefly valued as a revitalizing herb that strengthens nervous function and memory[254]. The whole plant is alterative, cardio-depressant, hypotensive, weakly sedative and tonic[240]. It is a rejuvenating diuretic herb that clears toxins, reduces inflammations and fevers, improves healing and immunity, improves the memory and has a balancing effect on the nervous system[147, 152, 238, 240]. It has been suggested that regular use of the herb can rejuvenate the nervous system and it therefore deserves attention as a possible cure for a wide range of nervous disorders including multiple sclerosis[K]. Recent research has shown that gotu kola reduces scarring, improves circulatory problems in the lower limbs and speeds the healing process[238]. It is used internally in the treatment of wounds, chronic skin conditions (including leprosy), venereal diseases, malaria, varicose veins, ulcers, nervous disorders and senility[238, 240]. Caution should be observed since excess doses cause headaches and transient unconsciousness[238]. Externally, the herb is applied to wounds, haemorrhoids and rheumatic joints[238]. The plant can be harvested at any time of the year and is used fresh or dried[238]. Another report says that the dried herb quickly loses its medicinal properties and so is best used fresh[237].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Centella+asiatica"
          },
          {
            id:12,
            name:"Pueraria montana lobata",
            commonName:"Kudzu Vine",
            origin:"E. Asia",
            medProperites:"The kudzu vine, known as Ge Gen in China, is commonly used in Chinese herbalism, where it is considered to be one of the 50 fundamental herbs[218]. Recent research has shown that compounds called 'daidzin' and 'daidzein', which are contained in the roots and the flowers, are a safe and effective method for treating alcohol abuse[238]. They work by suppressing the appetite for alcohol, whereas existing treatments interfere with the way the alcohol is metabolised and can cause a build-up of toxins[238]. The plant is often used in combination with Chrysanthemum x morifolium in treating alcohol abuse[254]. The flowers and the roots are antidote, antiemetic, antipyretic, antispasmodic, demulcent, diaphoretic, digestive, febrifuge, hypoglycaemic and hypotensive[174, 176, 218, 222, 238]. A concoction of the flowers and tubers is used to treat alcoholism, fever, colds, diarrhoea, dysentery, acute intestinal obstruction etc[174, 176, 218, 222]. It is useful in the treatment of angina pectoris and migraine[218]. The root is frequently used as a remedy for measles, often in combination with Cimicifuga foetida[254]. The root contains puerarin. This increases the blood flow to the coronary artery and protects against acute myocardial ischaemia caused by the injection of pituitrin[176]. The root can be harvested from the autumn to the spring and is used fresh or dried[238]. The flowers are harvested just before they are fully open and are dried for later use[238]. The stems are galactogogue and are also applied as a poultice to incipient boils, swellings, sore mouths etc[218, 222]. The seed is used in the treatment of hangover and dysentery[218, 222]. The leaves are styptic[218].",
            web:"https://pfaf.org/User/Plant.aspx?LatinName=Pueraria+montana+lobata"
          },
          {
            id:13,
            name:"Schisandra chinensis",
            commonName:"Magnolia Vine(Wu Wei Zi)",
            origin:"E. Asia",
            medProperites:"Wu Wei Zi is commonly used in Chinese herbalism, where it is considered to be one of the 50 fundamental herbs[218]. It is an excellent tonic and restorative, helping in stressful times and increasing zest for life[254]. It is considered to be a substitute for ginseng and is said to be a tonic for both the male and the female sex organs[238]. The fruit is antitussive, aphrodisiac, hepatic, astringent, cardiotonic, cholagogue, expectorant, hypotensive, lenitive, nervine, pectoral, sedative, stimulant and tonic[174, 176, 178, 218]. Low doses of the fruit are said to stimulate the central nervous system whilst large doses depress it[218]. The fruit also regulates the cardiovascular system[218]. It is taken internally in the treatment of dry coughs, asthma, night sweats, urinary disorders, involuntary ejaculation, chronic diarrhoea, palpitations, insomnia, poor memory, hyperacidity, hepatitis and diabetes[238]. Externally, it is used to treat irritating and allergic skin conditions[238]. The fruit is harvested after the first frosts and sun-dried for later use[238]. The fruit contains lignans[254]. These have a pronounced protective action on the liver. In one clinical trial there was a 76% success rate in treating patients with hepatitis, no side effects were noticed[254]. The seed is used in the treatment of cancer[218]. The plant is antirheumatic[218]. A mucilaginous decoction obtained from the branches is useful in the treatment of coughs, dysentery and gonorrhoea[218].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Schisandra+chinensis"
          },
          {
            id:14,
            name:"Melaleuca alternifolia",
            commonName:"Tea Tree",
            origin:"Australia",
            medProperites:"Tea tree, and in particular its essential oil, is one of the most important natural antiseptics and it merits a place in every medicine chest[254]. It is useful for treating stings, burns, wounds and skin infections of all kinds[254]. An essential oil obtained from the leaves and twigs is strongly antiseptic, diaphoretic and expectorant[156, 157, 238]. It stimulates the immune system and is effective against a broad range of bacterial and fungal infections[238]. Internally, it is used in the treatment of chronic and some acute infections, notably cystitis, glandular fever and chronic fatigue syndrome[254]. It is used externally in the treatment of thrush, vaginal infections, acne, athlete's foot, verrucae, warts, insect bites, cold sores and nits[238]. It is applied neat to verrucae, warts and nits, but is diluted with a carrier oil such as almond for other uses[238]. The oil is non-irritant[238]. Another report says that high quality oils contain about 40% terpinen-4-ol, which is well tolerated by the skin and 5% cineol which is irritant. However, in poor quality oils the levels of cineol can exceed 10% and in some cases up to 65%[254]. The essential oil is used in aromatherapy. Its keyword is 'Antiseptic'[210].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Melaleuca+alternifolia"
          },
          {
            id:15,
            name:"Ammi Visnaga",
            commonName:"Bishops Weed",
            origin:"Eurasia",
            medProperites:"Visnaga is an effective muscle relaxant and has been used for centuries to alleviate the excruciating pain of kidney stones[254]. Modern research has confirmed the validity of this traditional use[254]. Visnagin contains khellin, from which particularly safe pharmaceutical drugs for the treatment of asthma have been made[254]. The seeds are diuretic and lithontripic[46]. They contain a fatty oil that includes the substance 'khellin'. This has been shown to be of benefit in the treatment of asthma[238]. Taken internally, the seeds have a strongly antispasmodic action on the smaller bronchial muscles[254], they also dilate the bronchial, urinary and blood vessels without affecting blood pressure[238]. The affect last for about 6 hours and the plant has practically no side effects[254]. The seeds are used in the treatment of asthma, angina, coronary arteriosclerosis and kidney stones[238]. By relaxing the muscles of the urethra, visnaga reduces the pain caused by trapped kidney stones and helps ease the stone down into the bladder[254]. The seeds are harvested in late summer before they have fully ripened and are dried for later use[254].",
            web:"https://pfaf.org/USER/Plant.aspx?LatinName=Ammi+visnaga"
          },
          {
            id:16,
            name:"Arctium lappa",
            commonName:"Burdock",
            origin:"Eurasia",
            medProperites:"Burdock is one of the foremost detoxifying herbs in both Chinese and Western herbal medicine[254]. The dried root of one year old plants is the official herb, but the leaves and fruits can also be used[4]. It is used to treat conditions caused by an 'overload' of toxins, such as throat and other infections, boils, rashes and other skin problems[254]. The root is thought to be particularly good at helping to eliminate heavy metals from the body[254]. The plant is also part of a North American formula called essiac which is a popular treatment for cancer. Its effectiveness has never been reliably proven or disproven since controlled studies have not been carried out. The other herbs included in the formula are Rumex acetosella, Ulmus rubra and Rheum palmatum[254]. The plant is antibacterial, antifungal, carminative[9, 21, 147, 165, 176]. It has soothing, mucilaginous properties and is said to be one of the most certain cures for many types of skin diseases, burns, bruises etc[4, 244]. It is used in the treatment of herpes, eczema, acne, impetigo, ringworm, boils, bites etc[244]. The plant can be taken internally as an infusion, or used externally as a wash[244]. Use with caution[165]. The roots of one-year old plants are harvested in mid-summer and dried. They are alterative, aperient, blood purifier, cholagogue, depurative, diaphoretic, diuretic and stomachic[218, 222]. The seed is alterative, antiphlogistic, depurative, diaphoretic and diuretic[218]. Recent research has shown that seed extracts lower blood sugar levels[238]. The seed is harvested in the summer and dried for later use[254]. The crushed seed is poulticed onto bruises[222]. The leaves are poulticed onto burns, ulcers and sores[222].",
            web:"https://pfaf.org/User/plant.aspx?LatinName=Arctium+lappa"
          },
          {
            id:17,
            name:"Calendula officinalis",
            commonName:"Pot Marigold",
            origin:"S. Europe",
            medProperites:"Pot marigold is one of the best known and versatile herbs in Western herbal medicine and is also a popular domestic remedy[4, 254]. It is, above all, a remedy for skin problems and is applied externally to bites and stings, sprains, wounds, sore eyes, varicose veins etc[4, 254]. It is also a cleansing and detoxifying herb and is taken internally in treating fevers and chronic infections[4, 254]. Only the common deep-orange flowered variety is considered to be of medicinal value[4]. The whole plant, but especially the flowers and the leaves, is antiphlogistic, antiseptic, antispasmodic, aperient, astringent, cholagogue, diaphoretic, emmenagogue, skin, stimulant and vulnerary[4, 7, 9, 21, 46, 165, 201]. The leaves can be used fresh or dried, they are best harvested in the morning of a fine sunny day just after the dew has dried from them[4]. The flowers are also used fresh or dried, for drying they are harvested when fully open and need to be dried quickly in the shade[4]. A tea of the petals tones up the circulation and, taken regularly, can ease varicose veins[201]. An application of the crushed stems to corns and warts will soon render them easily removable[7]. The leaves, blossoms and buds are used to make a homeopathic remedy[232]. It is used internally in order to speed the healing of wounds[232]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Calendula officinalis for inflammation of the mouth and pharynx (throat), wounds and burns(see [302] for critics of commission E).",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Calendula+officinalis"
          },
          {
            id:18,
            name:"Tanacetum parthenium",
            commonName:"Feverfew",
            origin:"Eurasia",
            medProperites:"Feverfew has gained a good reputation as a medicinal herb and extensive research since 1970 has proved it to be of special benefit in the treatment of certain types of migraine headaches and rheumatism[238, K]. It is also thought of as a herb for treating arthritis and rheumatism[254]. The leaves and flowering heads are anti-inflammatory, antispasmodic, aperient, bitter, carminative, emmenagogue, sedative, stimulant, stings, stomachic, vasodilator and vermifuge[4, 7, 21, 36, 46, 53, 100, 165]. The plant is gathered as it comes into flower and can be dried for later use[7]. Use with caution[165], the fresh leaves can cause dermatitis and mouth ulcers if consumed[238]. This remedy should not be prescribed for pregnant women[238]. A tea made from the whole plant is used in the treatment of arthritis, colds, fevers etc. It is said to be sedative and to regulate menses[222, 238]. An infusion is used to bathe swollen feet[257]. Applied externally as a tincture, the plant is used in the treatment of bruises etc[7]. Chewing 1 - 4 leaves per day has proven to be effective in the treatment of some migraine headaches[222].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Tanacetum+parthenium"
          },
          {
            id:19,
            name:"Vitex",
            commonName:"Agnus Castus",
            origin:"S. Europe",
            medProperites:"Agnus castus has been used for thousands of years for its beneficial affect on the female hormonal system. Modern research has confirmed this use, the seeds being used to restore balanced functioning to the female reproductive system[254]. The seeds and fruits are anaphrodisiac, aphrodisiac, galactogogue, ophthalmic, sedative, stomachic, women's complaints[89, 148, 165]. Prolonged usage restores corpus luteum function[165]. Unfortunately, the berries are unlikely to be produced in the British climate[K]. The berries of this plant have a range of medicinal actions but possibly the most important is its ability to rectify hormonal imbalances caused by an excess of oestrogen and an insufficiency of progesterone[224]. It acts upon the pituitary gland, reducing the production of certain hormones and increasing the production of others, shifting the balance in favour of the gestagens. Thus it has a wide application of uses in malfunctions of the feminine reproductive system and has been used with great effect in restoring absent menstruation, regulating heavy periods, restoring fertility when this is caused by hormonal imbalance, relieving pre-menstrual tension and easing the change of the menopause[224]. Some caution is advised since excessive doses can cause a nervous disorder known as formication, which manifests as a sensation of insects crawling over the skin[238]. The berries are considered to be an aphrodisiac[89], though other reports say that they are anaphrodisiac[11, 46]. The reason for this apparent disagreement is that the berries have a regulating effect on the body and so are likely to increase sexual activity in those who are not very active in this area whilst reducing it in those who are very active[K]. The fresh berries are pounded to a pulp and used in the form of a tincture for the relief of paralysis, pains in the limbs, weakness etc[4]. Other uses include: reduced flatulence, suppress appetite and induce sleep. Unproven uses include: treatment of impotence, prostatitis, swelling of the testes, sterility, swelling of the ovaries[301]. Not recommended during pregnancy and could inhibit milk production[301]. The German Commission E Monographs, a therapeutic guide to herbal medicine approve Vitex agnus-castus for premenstrual syndrome, and menopausal complaints (see [302] for critics of commission E).",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Vitex"
          },
          {
            id:20,
            name:"Hammamelis virginiana",
            commonName:"Witch Hazel",
            origin:"E. North America",
            medProperites:"Witch hazel bark is a traditional herb of the North American Indians who used it to heal wounds, treat tumours, eye problems etc[254]. A very astringent herb, it is commonly used in the West and is widely available from both herbalists and chemists[222]. It is an important ingredient of proprietary eye drops, skin creams, ointments and skin tonics[238]. It is widely used as an external application to bruises, sore muscles, varicose veins, haemorrhoids, sore nipples, inflammations etc[238]. The bark is astringent, haemostatic, sedative and tonic[4, 14, 21, 165, 171, 222]. Tannins in the bark are believed to be responsible for its astringent and haemostatic properties[222]. Bottled witch hazel water is a steam distillate that does not contain the tannins from the shrub[222], this is less effective in its action than a tincture[238]. The bark is used internally in the treatment of diarrhoea, colitis, dysentery, haemorrhoids, vaginal discharge, excessive menstruation, internal bleeding and prolapsed organs[238]. Branches and twigs are harvested for the bark in the spring[238]. An infusion of the leaves is used to reduce inflammations, treat piles, internal haemorrhages and eye inflammations[213]. The leaves are harvested in the summer and can be dried for later use[238]. A homeopathic remedy is made from fresh bark[232]. It is used in the treatment of nosebleeds, piles and varicose veins[232].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Hamamelis+virginiana"
          },
          {
            id:21,
            name:"Eleutherococcus senticosus",
            commonName:"Siberian Ginseng",
            origin:"E. Asia",
            medProperites:"Siberian ginseng is a powerful tonic herb with an impressive range of health benefits. Unlike many herbs with a medicinal use, it is more useful for maintaining good health rather than treating ill health. Research has shown that it stimulates resistance to stress and so it is now widely used as a tonic in times of stress and pressure[254]. This plant is a very commonly used folk treatment in China and Russia where it is used as a ginseng substitute[218]. It is a pungent bitter-sweet warming herb that is said to be stronger in its action than ginseng[238]. Regular use is said to restore vigour, improve the memory and increase longevity[218]. The root and the root bark are adaptogen, anti-inflammatory, hypoglycaemic, tonic and vasodilator. It is taken internally during convalescence and in the treatment of menopausal problems, geriatric debility, physical and mental stress etc[238]. It works by strengthening the bodies natural immune system[140, 165, 176, 238]. It has also been used to combat radiation sickness and exposure to toxic chemicals[200, 218, 238]. This herb is not prescribed for children, and should not be used for more than 3 weeks at one time[238]. Caffeine should not be taken when using this herb[238]. The roots are harvested in the autumn and dried for later use[238]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Eleutherococcus senticosus for tendency to infection, lack of stamina (see [302] for critics of commission E).",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Eleutherococcus+senticosus"
          },
          {
            id:22,
            name:"Abies balsema",
            commonName:"Balsam Fir",
            origin:"NE North America",
            medProperites:"The resin obtained from the balsam fir (see 'Uses notes' below) has been used throughout the world and is a very effective antiseptic and healing agent. It is used as a healing and analgesic protective covering for burns, bruises, wounds and sores[213, 222, 226]. It is also used to treat sore nipples[213] and is said to be one of the best curatives for a sore throat[245]. The buds, resin, and/or sap are used in folk remedies for treating cancers, corns, and warts[269]. The resin is also antiscorbutic, diaphoretic, diuretic, stimulant and tonic[4, 171, 222]. It is used internally in propriety mixtures to treat coughs and diarrhoea, though taken in excess it is purgative[238]. A warm liquid of the gummy sap was drunk as a treatment for gonorrhoea[212]. A tea made from the leaves is antiscorbutic[4, 171]. It is used in the treatment of coughs, colds and fevers[222]. The leaves and young shoots are best harvested in the spring and dried for later use[238]. This plant was widely used medicinally by various North American Indian tribes[257]. The resin was used as an antiseptic healing agent applied externally to wounds, sores, bites etc., it was used as an inhalant to treat headaches and was also taken internally to treat colds, sore throats and various other complaints[257].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Abies+balsamea"
          },
          {
            id:23,
            name:"Ulmus rubra",
            commonName:"Slippery Elm",
            origin:"USA",
            medProperites:"Slippery elm bark is a widely used herbal remedy and is considered to be one of the most valuable of remedies in herbal practice[4]. In particular, it is a gentle and effective remedy for irritated states of the mucous membranes of the chest, urinary tubules, stomach and intestines[254]. The inner bark contains large quantities of a sticky slime that can be dried to a powder or made into a liquid[229]. The inner bark is harvested in the spring from the main trunk and from larger branches, it is then dried and powdered for use as required[4]. Ten year old bark is said to be best[4]. Fine grades of the powder are best for internal use, coarse grades are better suited to poultices[238]. The plant is also part of a North American formula called essiac which is a popular treatment for cancer. Its effectiveness has never been reliably proven or disproven since controlled studies have not been carried out. The other herbs included in the formula are Arctium lappa, Rumex acetosella and Rheum palmatum[254]. The inner bark is demulcent, diuretic, emollient, expectorant, nutritive[4, 21, 165, 213]. It has a soothing and healing effect on all parts of the body that it comes into contact with[4] and is used in the treatment of sore throats, indigestion, digestive irritation, stomach ulcers etc[222]. It used to be frequently used as a food that was a nutritive tonic for the old, young and convalescents[222]. It was also applied externally to fresh wounds, burns and scalds[222]. The bark has been used as an antioxidant to prevent fats going rancid[222]. The whole bark, including the outer bark, has been used as a mechanical irritant to abort foetuses[238]. Its use became so widespread that it is now banned in several countries[238].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Ulmus+rubra"
          },
          {
            id:24,
            name:"Humulus lupulus",
            commonName:"Hop",
            origin:"Eurasia",
            medProperites:"Hops have a long and proven history of herbal use, where they are employed mainly for their soothing, sedative, tonic and calming effect on the body and the mind. Their strongly bitter flavour largely accounts for their ability to strengthen and stimulate the digestion, increasing gastric and other secretions[254]. The female fruiting body is anodyne, antiseptic, antispasmodic, diuretic, febrifuge, hypnotic, nervine, sedative, stomachic and tonic[4, 9, 21, 46, 165, 192, 218]. Hops are widely used as a folk remedy to treat a wide range of complaints, including boils, bruises, calculus, cancer, cramps, cough, cystitis, debility, delirium, diarrhoea, dyspepsia, fever, fits, hysteria, inflammation, insomnia, jaundice, nerves, neuralgia, rheumatism, and worms[269]. The hairs on the fruits contain lupulin, a sedative and hypnotic drug[213, 218]. When given to nursing mothers, lupulin increases the flow of milk - recent research has shown that it contains a related hormone that could account for this effect[7]. The decoction from the flower is said to remedy swellings and hardness of the uterus[269]. Hop flowers are much used as an infusion or can also be used to stuff pillows where the weight of the head will release the volatile oils[213]. The fruit is also applied externally as a poultice to ulcers, boils, painful swellings etc[4, 218], it is said to remedy painful tumours[269]. The female flowering heads are harvested in the autumn and can be used fresh or dried[238]. Alcoholic extracts of hops in various dosage forms have been used clinically in treating numerous forms of leprosy, pulmonary tuberculosis, and acute bacterial dysentery, with varying degrees of success in China. The female fruiting body contains humulone and lupulone, these are highly bacteriostatic against gram-positive and acid-fast bacteria[240]. A cataplasm of the leaf is said to remedy cold tumours[269]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Humulus lupulus for nervousness and insomnia (see [302] for critics of commission E).",
            web:"https://pfaf.org/user/plant.aspx?latinname=Humulus+lupulus"
          },
          {
            id:25,
            name:"Silybum marianum",
            commonName:"Milk Thistle",
            origin:"S. Europe",
            medProperites:"Milk Thistle has a long history of use in the West as a remedy for depression and liver problems[254]. Recent research has confirmed that it has a remarkable ability to protect the liver from damage resulting from alcoholic and other types of poisoning[254]. The whole plant is astringent, bitter, cholagogue, diaphoretic, diuretic, emetic, emmenagogue, hepatic, stimulant, stomachic and tonic[4, 21, 160, 165, 238]. It is used internally in the treatment of liver and gall bladder diseases, jaundice, cirrhosis, hepatitis and poisoning[238]. The plant is harvested when in flower and dried for later use[238]. Silymarin, an extract from the seed, acts on the membranes of the liver cells preventing the entry of virus toxins and other toxic compounds and thus preventing damage to the cells[244]. It also dramatically improves liver regeneration in hepatitis, cirrhosis, mushroom poisoning and other diseases of the liver[222, 238, 254]. German research suggests that silybin (a flavonoid component of the seed) is clinically useful in the treatment of severe poisoning by Amanita mushrooms[222]. Seed extracts are produced commercially in Europe[222]. Regeneration of the liver is particularly important in the treatment of cancer since this disease is always characterized by a severely compromised and often partially destroyed liver[K]. A homeopathic remedy is obtained from equal parts of the root and the seed with its hulls still attached[4]. It is used in the treatment of liver and abdominal disorders[9]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Silybum marianum Milk Thistle for dyspeptic complaints, liver and gallbladder complaints (see [302] for critics of commission E).",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Silybum+marianum"
          },
          {
            id:26,
            name:"Althae officinalis",
            commonName:"Marsh mallow Root",
            origin:"Eurasia, N. Africa",
            medProperites:"Marsh mallow is a very useful household medicinal herb. Its soothing demulcent properties make it very effective in treating inflammations and irritations of the mucous membranes such as the alimentary canal, the urinary and the respiratory organs[4, 254]. The root counters excess stomach acid, peptic ulceration and gastritis[254]. It is also applied externally to bruises, sprains, aching muscles, insect bites, skin inflammations, splinters etc[4, 238]. The whole plant, but especially the root, is antitussive, demulcent, diuretic, highly emollient, slightly laxative and odontalgic[4, 17, 21, 46, 165]. An infusion of the leaves is used to treat cystitis and frequent urination[254]. The leaves are harvested in August when the plant is just coming into flower and can be dried for later use[4]. The root can be used in an ointment for treating boils and abscesses[254]. The root is best harvested in the autumn, preferably from 2 year old plants, and is dried for later use[238]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Althaea officinalis Marsh Mallow for irritation of mouth and throat and associated dry cough/bronchitis (Root and leaf), mild stomach lining inflammation (root) (see [302] for critics of commission E).",
            web:"https://pfaf.org/user/plant.aspx?LatinName=Althaea+officinalis"
          },
          {
            id:27,
            name:"Angelica sinensis",
            commonName:"Dang Gui",
            origin:"E. Asia",
            medProperites:"Dang Gui is a well-known Chinese herb that has been used in the treatment of female ailments for thousands of years. Its reputation is perhaps second only to ginseng (Panax ginseng) and it is particularly noted for its 'blood tonic' effects on women[218]. The root has a sweet pungent aroma that is very distinctive and it is often used in cooking, which is the best way to take it as a blood tonic[254]. One report says that the root contains vitamin B12 and can be used in the treatment of pernicious anaemia[176]. The root is alterative, analgesic, anticholesterolemic, anti-inflammatory, antispasmodic, deobstruent, emmenagogue, emollient, hepatic, laxative, sedative and peripheral vasodilator[165, 176, 218]. It is commonly used in the treatment of a wide range of women's complaints where it regulates the menstrual cycle and relieves period pain[218, 238, 254] and also to ensure a healthy pregnancy and easy delivery[218]. However conflicting information suggests it should not be used during pregnancy [301] and should not be used if menstrual flow is heavy or during menstration [301]. It is an ideal tonic for women with heavy menstruation who risk becoming anaemic[254]. The water-soluble and non-volatile elements of the root increase the contraction of the uterus whilst the volatile elements can relax the muscle of the uterus[176]. Its use prevents the decrease of liver glycogen and protects the liver[176]. Used for menopausal symptoms (hot flushes) [301]. It has an antibacterial action, inhibiting the growth of various bacteria including Bacillus dysenteriae, Bacillus typhi, B. comma, B. cholerae and haemolytic streptococci[176]. The root is an ingredient of 'Four Things Soup', the most widely used woman's tonic in China[254]. The other species used are Rehmannia glutinosa, Ligusticum wallichii and Paeonia lactiflora[254]. The root is harvested in the autumn or winter and dried for later use[254, 283]. It has been used to treat pulmonary hypertension in combination with the allopathic medication nifedipine [301]. Other uses include: constipation (a laxative), trauma injuries, ulcers, rheumatism and malaria [301].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Angelica+sinensis"
          },
          {
            id:27,
            name:"Asparagus racemosus",
            commonName:"Shatavari",
            origin:"E. Asia",
            medProperites:"Shatavari (this is an Indian word meaning 'a woman who has a hundred husbands') is the most important herb in Ayurvedic medicine for dealing with problems connected women's fertility[238]. The rhizome is a soothing tonic that acts mainly on the circulatory, digestive, respiratory and female reproductive organs[238]. The root is alterative, antispasmodic, aphrodisiac, demulcent, diuretic, galactogogue and refrigerant[240, 243]. It is taken internally in the treatment of infertility, loss of libido, threatened miscarriage, menopausal problems, hyperacidity, stomach ulcers and bronchial infections[238]. Externally it is used to treat stiffness in the joints[238]. The root is used fresh in the treatment of dysentery. It is harvested in the autumn and dried for use in treating other complaints[238]. The whole plant is used in the treatment of diarrhoea, rheumatism, diabetes and brain complaints[243].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Asparagus+racemosus"
          },
          {
            id:28,
            name:"Rheum palmatum",
            commonName:"Chinese Rhubarb",
            origin:"E. Asia",
            medProperites:"Chinese rhubarb, called Da Huang in China, has a long and proven history of herbal usage, its main effect being a positive and balancing effect upon the whole digestive system. It is one of the most widely used herbs in Chinese medicine[238]. It has a safe and gentle action, safe even for children to use[254]. The plant is also part of a North American formula called essiac which is a popular treatment for cancer. Its effectiveness has never been reliably proven or disproven since controlled studies have not been carried out. The other herbs included in the formula are Arctium lappa, Ulmus rubra and Rumex acetosella[254]. The root is anticholesterolemic, antiseptic, antispasmodic, antitumor, aperient, astringent, cholagogue, demulcent, diuretic, laxative, purgative, stomachic and tonic[4, 7, 9, 21, 91, 171, 176, 238]. The roots contain anthraquinones, which have a purgative effect, and also tannins and bitters, which have an opposite astringent effect[244]. When taken in small doses, it acts as an astringent tonic to the digestive system, whilst larger doses act as a mild laxative[232, 244]. The root is taken internally in the treatment of chronic constipation, diarrhoea, liver and gall bladder complaints, haemorrhoids, menstrual problems and skin eruptions due to an accumulation of toxins[238]. This remedy is not prescribed for pregnant or lactating women, nor for patients with intestinal obstruction[238]. Externally, the root is used in the treatment of burns[238]. The roots are harvested in October from plants that are at least six years old, they are then dried for later use[4]. A homeopathic remedy is prepared from the dried root[232]. This is used especially in the treatment of diarrhoea in teething children[232]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Rheum palmatum for constipation (see [302] for critics of commission E).",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Rheum+palmatum"
          },
          {
            id:29,
            name:"Melissa officinalis",
            commonName:"Lemon Balm",
            origin:"Eurasia",
            medProperites:"Lemon balm is a commonly grown household remedy with a long tradition as a tonic remedy that raises the spirits and lifts the heart[254]. Modern research has shown that it can help significantly in the treatment of cold sores[254]. The leaves and young flowering shoots are antibacterial, antispasmodic, antiviral, carminative, diaphoretic, digestive, emmenagogue, febrifuge, sedative, and tonic[4, 7, 9, 21, 165, 238]. It also acts to inhibit thyroid activity[238]. An infusion of the leaves is used in the treatment of fevers and colds, indigestion associated with nervous tension, excitability and digestive upsets in children, hyperthyroidism, depression, mild insomnia, headaches etc[4, 9, 238]. Externally, it is used to treat herpes, sores, gout, insect bites and as an insect repellent[238]. The plant can be used fresh or dried, for drying it is harvested just before or just after flowering[9]. The essential oil contains citral and citronella, which act to calm the central nervous system and are strongly antispasmodic[254]. The plant also contains polyphenols, in particular these combat the herpes simplex virus which produces cold sores[254]. The essential oil is used in aromatherapy. Its keyword is 'Female aspects'[210]. It is used to relax and rejuvenate, especially in cases of depression and nervous tension[238]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Melissa officinalis for nervousness and insomnia (see [302] for critics of commission E).",
            web:"https://pfaf.org/user/plant.aspx?latinname=Melissa+officinalis"
          },
          {
            id:30,
            name:"Gentiana lutea",
            commonName:"Yellow Gentian",
            origin:"Europe",
            medProperites:"Gentian root has a long history of use as a herbal bitter in the treatment of digestive disorders and is an ingredient of many proprietary medicines. It contains some of the most bitter compounds known and is used as a scientific basis for measuring bitterness[238]. It is especially useful in states of exhaustion from chronic disease and in all cases of debility, weakness of the digestive system and lack of appetite[4]. It is one of the best strengtheners of the human system, stimulating the liver, gall bladder and digestive system[238], and is an excellent tonic to combine with a purgative in order to prevent its debilitating effects[4]. The root is anthelmintic, anti-inflammatory, antiseptic, bitter tonic, cholagogue, emmenagogue, febrifuge, refrigerant and stomachic[4, 7, 9, 14, 21, 165]. It is taken internally in the treatment of liver complaints, indigestion, gastric infections and anorexia[238]. It should not be prescribed for patients with gastric or duodenal ulcers[238]. The root, which can be as thick as a person's arm and has few branches[239], is harvested in the autumn and dried for later use[4]. It is quite likely that the roots of plants that have not flowered are the richest in medicinal properties[4]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Gentiana lutea as a tonic (see [302] for critics of commission E).",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Gentiana+lutea"
          },
          {
            id:31,
            name:"Echinacea purpurea",
            commonName:"Echinacea",
            origin:"USA",
            medProperites:"Echinacea is considered to be the most effective detoxicant in Western herbal medicine for the circulatory, lymphatic and respiratory systems[238, 254]. Its use has also been adopted by Ayurvedic medicine[238]. Plants in this genus were probably the most frequently used of N. American Indian herbal remedies. They had a very wide range of applications and many of these uses have been confirmed by modern science. This species is the most easily cultivated of the genus and so has been more generally adopted for its medicinal uses[238]. The plant has a general stimulatory effect on the immune system and is widely used in modern herbal treatments[222]. In Germany over 200 pharmaceutical preparations are made from Echinacea[222]. There has been some doubt over the ability of the body to absorb the medicinally active ingredients orally (intravenous injections being considered the only effective way to administer the plant), but recent research has demonstrated significant absorption from orally administered applications[222]. The roots and the whole plant are considered particularly beneficial in the treatment of sores, wounds, burns etc, possessing cortisone-like and antibacterial activity[222]. The plant was used by N. American Indians as a universal application to treat the bites and stings of all types of insects[213]. An infusion of the plant was also used to treat snakebites[213]. The root is adaptogen, alterative, antiseptic, aphrodisiac, depurative, diaphoretic, digestive, sialagogue[4, 21, 61, 160, 165, 213]. It is harvested in the autumn and dried for later use[238]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Echinacea for common cold, cough and bronchitis, fevers and cold, urinary tract infections, inflammation of the mouth and pharynx, increase resistance to infection, wounds and burns (see [302] for critics of commission E).",
            web:"https://pfaf.org/User/Plant.aspx?LatinName=Echinacea+purpurea"
          },
          {
            id:32,
            name:"Dioscorea batatas",
            commonName:"Chinese Yam",
            origin:"E. Asia",
            medProperites:"he Chinese yam, called Shan Yao in Chinese herbalism, is a sweet soothing herb that stimulates the stomach and spleen and has a tonic effect on the lungs and kidneys[238]. The tuber contains allantoin, a cell-proliferant that speeds the healing process[238]. traditionally prescribed in Chinese herbalism to treat hyperthyroidism, nephritis and diabetes[254]. The tuber is anthelmintic, digestive and gently tonic[116, 147, 218, 254]. It is used internally in the treatment of tiredness, weight loss, poor appetite, poor digestion, chronic diarrhoea, asthma, dry coughs, frequent or uncontrollable urination, diabetes and emotional instability[238]. It is applied externally to ulcers, boils and abscesses[218, 238]. The tubers are harvested in the autumn and can be used raw or baked[238]. The leaf juice is used to treat snakebites and scorpion stings[218]. The roots of most, if not all, members of this genus, contains diosgenin[222, 240]. This is widely used in modern medicine in order to manufacture progesterone and other steroid drugs.",
            web:"https://pfaf.org/user/plant.aspx?LatinName=Dioscorea+batatas"
          },
          {
            id:33,
            name:"Allium sativum ophioscorodon",
            commmonName:"Serpent Garlic",
            origin:"C. Asia",
            medProperites:"The bulb is said to be anthelmintic, antiasthmatic, anticholesterolemic, antiseptic, antispasmodic, cholagogue, diaphoretic, diuretic, expectorant, febrifuge, stimulant, stings, stomachic, tonic, vasodilator",
            web:"https://pfaf.org/user/plant.aspx?LatinName=Allium+sativum+ophioscorodon"
          },
          {
            id:34,
            name:"Cynara scolymus",
            commmonName:"Globe Artichoke",
            origin:"N/A",
            medProperites:" This bitter-tasting compound, which is found in the leaves, improves liver and gall bladder function, stimulates the secretion of digestive juices, especially bile, and lowers blood cholesterol levels[238, 254]. The leaves are anticholesterolemic, antirheumatic, cholagogue, digestive, diuretic, hypoglycaemic and lithontripic[7, 21, 165].",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Cynara+scolymus"
          },
          {
            id:35,
            name:"Chamaemelum nobile",
            commmonName:"Chamomile",
            origin:"W Europe",
            medProperites:"Camomile is a common herb with a long history of safe and effective medicinal use - it is widely used as a household herbal remedy. It is particularly useful as a remedy for various problems of the digestive system, as a sedative and a nervine, it is especially suited for young children[4, 20, 21]. A tea is made from the flowers and this should be prepared in a closed vessel to prevent loss of the essential oils[4]. The flowers are anodyne, anti-inflammatory, antispasmodic, nervine, stomachic, tonic, vasodilator[4, 14, 21, 37, 165, 201]. The single-flowered form is the most potent medicinally, though it can in large doses damage the lining of the stomach and bowels[4]. For this reason, the double-flowered form is usually preferred since this contains less of the alkaloid that causes the problem[4]. The flowers are gathered in the summer when they are fully open and are distilled for their oil or dried for later use[238]. They should not be stored for longer than 12 months[238]. The whole herb is used to make a lotion for external application in the treatment of toothache, earache, neuralgia etc[4]. The essential oil is used in aromatherapy. Its keyword is 'Soothing'[210]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Chamaemelum nobile for coughs and bronchitis, fevers and colds, inflammations of the skin, inflammation of the mouth and pharynx, tendency to infection - improve immunity, wounds and burns (see [302] for critics of commission E).",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Chamaemelum+nobile"
          }
    ],
    []
    )
  return (
    <>
    <img src={hippocrates} className="image" alt='picture' />
    <br></br>

        <h2 className='headliner'>Five Star Plants</h2>
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

  

export default FiveStarTable