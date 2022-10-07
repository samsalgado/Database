import React from 'react'
import './App.css';
const TwoStarTable = () => {
    const data = React.useMemo(() =>
    [
        {
            id: 1,
            name:"Centaurea cyanus",
            commonName: "Cornflower",
            origin: "Europe - Britain, Near East",
            medProperites:"The dried flowers are antipruritic, antitussive, astringent, weakly diuretic, emmenagogue, ophthalmic, very mildly purgative, and tonic",
            web:"https://pfaf.org/USER/Plant.aspx?LatinName=Centaurea+cyanus"
            
          },
          {
            id:2,
            name:"Chrysophyllum cainito",
            commonName: "Star Apple",
            origin:"Central America",
            medProperites:"The ripe fruit is eaten to sooth inflammation in laryngitis and pneumonia[ 306 ]. It is given as a treatment for diabetes mellitus, and as a decoction is gargled to relieve angina[ 306 ]. The fruit is used in treating haemorrhage or is cooked and used for fever[ 303 ]. A decoction of the rind, or of the leaves, is taken as a pectoral[ 306 ]. The undersides of the leaves are grated and applied as a poultice to wounds[ 303 ]. A decoction of the leaves is taken orally to treat hypoglycaemia[ 303 ]. A decoction of the tannin-rich, astringent bark is drunk as a tonic and stimulant, and is taken to halt diarrhoea, dysentery and haemorrhages, and as a treatment for gonorrhoea and catarrh of the bladder[ 306 , 348 ]. The bitter, pulverized seed is taken as a tonic, diuretic and febrifuge[ 306 ]. The latex of the tree is applied on abscesses and, when dried and powdered, it is given as a potent vermifuge. It is also taken as a diuretic, febrifuge and remedy for dysentery",
            web:"https://pfaf.org/User/Plant.aspx?LatinName=Chrysophyllum+cainito"
          },
          {
            id:3,
            name:"Manilkara zapota",
            commonName:"Sapodilla",
            origin:"Central America",
            medProperites:"A leaf decoction is taken for fever, haemorrhage, wounds and ulcers[303 ]. For neuralgia, leaf with tallow is applied as a compress on the temples[303 ]. The flowers are used as one of the ingredients of a powder that is rubbed on the body of a woman after childbirth[303 ]. The bark is astringent, febrifuge and tonic[348 , 739 ]. Tannin from the bark is used to cure diarrhoea and fever[303 ]. The fruit is eaten as a remedy for indigestion and diarrhoea[348 ]. Seeds are antipyretic, and when ground with water they act as a diuretic[303 , 348 ]. They are used to expel urinary and gall bladder stones[739 ]. The pulverized roots are used to treat thrush in babies[739 ]. The plant is a source of sapotin, a glucoside used in medicine as a febrifuge",
            web:"https://pfaf.org/user/Plant.aspx?LatinName=Manilkara+zapota"
          },
        {id:4,
        name:"Quercus marilandica",
        commonName:"Blackjack Oak",
        origin:"North America",
        medProperites:"An infusion of the tree bark coal has been taken to ease childbirth, remove the afterbirth and ease cramps[257]. Any galls produced on the tree are strongly astringent and can be used in the treatment of haemorrhages, chronic diarrhoea, dysentery etc",
        web:"https://pfaf.org/user/Plant.aspx?LatinName=Quercus+marilandica"
        },
        {
        id:5,
        name:"Spathodea campanulata",
        commonName:"African Tulip Tree",
        origin:"Africa",
        medProperites:"The plant has many medicinal uses, both where it is native and introduced. Extracts of the bark, leaves and flowers are used to treat malaria, HIV, diabetes mellitus, oedema, dysentery, constipation, gastrointestinal disorders, ulcers, skin diseases, wounds, fever, urethral inflammation, liver complaints and as a poison antidote. It may be effective as a malaria prophylactic and in the control of Aedes mosquitoes.",
        web:"https://tropical.theferns.info/viewtropical.php?id=Spathodea+campanulata"
        },
        {
        id:6,
        name:"Acanthosiscyos horridus",
        commonName:"Naras, Butterpips",
        origin:"Africa",
        medProperites:"The bitter roots have medicinal value. Either chewed or made into a decoction, they are used to treat nausea, stomach-ache, venereal diseases, kidney problems, arteriosclerosis and chest pains[299 ]. The fresh fruit is said to relieve stomach pains[418 ]. The crushed root mixed with fat is used to heal wounds[299 ]. Oil from the raw or boiled seeds is used as a skin moisturizer and to protect the skin from sunburn",
        web:"https://pfaf.org/user/Plant.aspx?LatinName=Acanthosicyos+horridus"
        },
        {
        id:7,
        name:"Afzelia africana",
        commonName:"African Mahogany",
        origin:"Africa",
        medProperites:"Analgesic, Anaphrodisiac, antirheumatic, diuretic, emetic, emmenagogue, febrifuge, laxative.The plant is used in local medicine for general pain relief; treating digestive problems such as constipation and vomiting; and for internal bleedings (haemorrhagic)[ 325 ]. A decoction of the stem bark is used in the treatment of malaria and rheumatism[ 617 ]. An infusion of the bark is used as a treatment against paralysis, and a decoction against constipation. The pulp is combined with Pericopsis and Tamarindus and used as a diuretic and febrifuge[ 303 ]. The maceration is used as a remedy for leprosy[ 303 ]. The ash of the bark, prepared with Shea butter as a soap, is used as a treatment against lumbago. In a decoction or prepared with food, it is a treatment for back-ache[ 303 ]. The roots are pulverised with millet-beer and used to treat hernias and, in a decoction with pimento, as a remedy against gonorrhoea and stomach-ache[ 303 ]. A leaf decoction, combined with Syzygium guineensis leaves and Xylopia fruit, forms a drink that is used to treat oedema.",
        web:"https://pfaf.org/User/Plant.aspx?LatinName=Afzelia+africana"
        
        },
        {
        id:8,
        name:"Actinidia polygama",
        commonName:"Silver vine",
        origin:"Asia",
        medProperites:"The leaves are hallucinogenic and sedative[192]. The leaves contain substances that make them very attractive to cats and for this reason they are especially useful as a sedative for lions etc in zoos[192]. When consumed in large quantities the leaves can have a mild hallucinatory effect[192]. Polygamol, which is made from the fruits, is used as a heart tonic[218]. A dry decoction is used to treat colic and rheumatism",
        web:"https://pfaf.org/user/Plant.aspx?LatinName=Actinidia+polygama"
        },
        {
        id:9,
        name:"Akebia quinata",
        commonName:"Chocolate Vine",
        origin:"Asia",
        medProperites:"The stems are anodyne, antifungal, antiphlogistic, bitter, diaphoretic, diuretic, emmenagogue, febrifuge, laxative, galactogogue, resolvent, stimulant, stomachic and vulnerary[174, 178, 218, 238]. Taken internally, it controls bacterial and fungal infections and is used in the treatment of urinary tract infections, lack of menstruation, to improve lactation etc[238]. The stems are harvested in the autumn and dried for later use[238]. The fruit is antirheumatic, depurative, diuretic, febrifuge, stomachic and tonic[218]. It is a popular remedy for cancer[218]. The root is febrifuge[218]. The plant was ranked 13th in a survey of 250 potential antifertility plants in China[218]",
        web:"https://pfaf.org/user/plant.aspx?latinname=Akebia+quinata"
        },
        {
        id:10,
        name:"Akebia trifoliata",
        commonName:"Threeleaf Akebia",
        origin:"Asia",
        medProperites:"The stems are analgesic, antibacterial, antifungal, anti-inflammatory, antitumor. blood tonic, cardiotonic, diuretic, emmenagogue and galactogogue[147, 176]. Taken internally, it controls gram-positive bacterial and fungal infections and is used in the treatment of urinary tract infections, lack of menstruation, to improve lactation etc[176, 238]. The stems are harvested in the autumn and dried for later use[238].",
        web:"https://pfaf.org/user/Plant.aspx?LatinName=Akebia+trifoliata"
        },
        {
        id:11,
        name:"Aconitum heterophyllum",
        commonName:"Ativisha",
        origin:"Asia",
        medProperites:"The dried root is analgesic, anti-inflammatory, antiperiodic, aphrodisiac, astringent, cholagogue, febrifuge and tonic[4, 240]. It is used in India in the treatment of dyspepsia, diarrhoea and coughs[240, 243]. It is also used in Tibetan medicine, where it is said to have a bitter taste and a cooling potency[241]. It is used to treat poisoning from scorpion or snake bites, the fevers of contagious diseases and inflammation of the intestines[241]. The root is best harvested in the autumn as soon as the plant dies down and is dried for later use[4]. This is a very poisonous plant and should only be used with extreme caution and under the supervision of a qualified practitioner.",
        web:"https://pfaf.org/user/Plant.aspx?LatinName=Aconitum+heterophyllum"
        },
        {
        id:12,
        name:"Aegopodium podagraria",
        commonName:"Ground Elder",
        origin:"Eurasia",
        medProperites:"Ground Elder has a long history of medicinal use and was cultivated as a food crop and medicinal herb in the Middle Ages. The plant was used mainly as a food that could counteract gout, one of the effects of the rich foods eaten by monks, bishops etc at this time. The plant is little used in modern herbalism. All parts of the plant are antirheumatic, diuretic, sedative and vulnerary[9, 13, 53, 54, 61]. An infusion is used in the treatment of rheumatism, arthritis and disorders of the bladder and intestines[9]. Externally, it is used as a poultice on burns, stings, wounds, painful joints etc[9, 268]. The plant is harvested when it is in flower in late spring to mid-summer and can be used fresh or be dried for later use[9, 238]. A homeopathic remedy is made from the flowering plant[9]. It is used in the treatment of arthritis and rheumatism[9].",
        web:"https://pfaf.org/user/plant.aspx?LatinName=Aegopodium+podagraria"
        },
        
        {
        id:13,
        name:"Abies Amabillis",
        commonName:"Red Fir",
        origin:"USA",
        medProperites:"This plant was used quite widely by native North American Indians. An infusion of the bark was used as a tonic and to treat stomach ailments, TB, haemorrhoids and various minor complaints[257]. The pitch, or resin, was also used to treat colds, sore throats etc[257]. The bark of this tree contains blisters that are filled with a resin called 'Canadian Balsam'[226]. Although the report does not mention the uses of this resin, it can almost certainly be used in the same ways as the resin of A. balsamea, as detailed below:- The resin obtained from this tree (see 'Uses notes' below) has been used throughout the world and is a very effective antiseptic and healing agent. It is used as a healing and analgesic protective covering for burns, bruises, wounds and sores[213, 222, 226]. It is also used to treat sore nipples[213] and is said to be one of the best curatives for a sore throat[245]. The resin is also antiscorbutic, diuretic, stimulant and tonic[4, 171, 222]. It is used internally in propriety mixtures to treat coughs and diarrhoea, though taken in excess it is purgative[238]. A warm liquid of the gummy sap was drunk as a treatment for gonorrhoea[212]. A tea made from the leaves is antiscorbutic[4, 171]. It is used in the treatment of coughs, colds and fevers[222]. The leaves and young shoots are best harvested in the spring and dried for later use[238].",
        web:"https://pfaf.org/user/Plant.aspx?LatinName=Abies+amabilis"
        },
        {
        id:14,
        name:"Abies Grandis",
        commonName:"Acer Saccaharum",
        origin:"Grand Fir",
        medProperites:"North America",
        web:"https://pfaf.org/user/Plant.aspx?LatinName=Abies+grandis"
        },
        {
        id:15,
        name:"Acer saccahrum",
        commonName:"Sugar Maple",
        origin:"USA - Florida",
        medProperites:"A tea made from the inner bark is a blood tonic, diuretic and expectorant[222]. It has been used in the treatment of coughs, diarrhoea etc[222]. A compound infusion of the bark has been used as drops in treating blindness[257]. The sap has been used for treating sore eyes[257]. The inner bark has been used as an expectorant and cough remedy[257]. Maple syrup is used in cough syrups and is also said to be a liver tonic and kidney cleanser[222].",
        web:"https://pfaf.org/user/Plant.aspx?LatinName=Acer+saccharum"
        },
        {
        id:16,
        name:"Acer spicatum",
        commonName:"Mountain Maple",
        origin:"NE North America",
        medProperites:"The North American Indians made an infusion of the pith of young twigs and used this as eye drops to soothe irritation caused by campfire smoke[226, 257]. The pith itself was used to remove foreign matter from the eyes[257]. An infusion or poultice made from the outer bark has been used to treat sore eyes[257]. A poultice made from boiled root chips has been applied externally to wounds and abscesses[257]. A compound infusion of the roots and bark is used to treat internal haemorrhage[257].",
        web:"https://pfaf.org/user/Plant.aspx?LatinName=Acer+spicatum"
        },
        {
        id:17,
        name:"Actaea pachypoda",
        commonName:"White Baneberry",
        origin:"E. North America",
        medProperites:"The whole plant, but especially the root, is anticonvulsive, antirheumatic, emmenagogue, mildly hypnotic, oxytocic and stimulant[207, 257]. Use with caution, see the notes above on toxicity[222]. A decoction of the roots has been used in the treatment of coughs, colds, rheumatism and syphilis[213, 257]. It is also used in small doses to ease the pain of childbirth[222] and is used as a stimulant to revive and rally patients at the point of death[257]. An infusion of the roots has been used externally to treat itchy skin and as a gargle for sore throats[257]. An infusion of leaves was drunk by the women of some Indian tribes in order to stimulate the flow of milk[213].",
        web:"https://pfaf.org/user/Plant.aspx?LatinName=Actaea+pachypoda"
        },
        {
        id:18,
        name:"Ageratina altissima",
        commonName:"White Snakeroot",
        origin:"North America",
        medProperites:"The root is diaphoretic, diuretic, febrifuge, stimulant and tonic[257]. It has been used in the treatment of diarrhoea, gravel and urinary diseases[257]. It has also been used in herbal sweat baths to encourage sweating[257]. A decoction or infusion of the root has been taken to treat a fallen or inflamed womb[257]. The root has been chewed and held in the mouth as a treatment for toothache[257].",
        web:"https://pfaf.org/User/Plant.aspx?LatinName=Ageratina+altissima"
        },
        {
        id:19,
        name:"Allium geyeri",
        commonName:"Geyers Onion",
        origin:"W. North America",
        medProperites:"Although no specific mention of medicinal uses has been seen for this species, members of this genus are in general very healthy additions to the diet. They contain sulphur compounds (which give them their onion flavour) and when added to the diet on a regular basis they help reduce blood cholesterol levels, act as a tonic to the digestive system and also tonify the circulatory system[K].",
        web:"https://pfaf.org/user/Plant.aspx?LatinName=Allium+geyeri"
        },
        {
        id:20,
        name:"Acacia colei",
        commonName:"Cole's Wattle",
        origin:"Australia",
        medProperites:"The bark of all Acacia species contains greater or lesser quantities of tannins and are astringent. Astringents are often used medicinally - taken internally, for example. they are used in the treatment of diarrhoea and dysentery, and can also be helpful in cases of internal bleeding. Applied externally, often as a wash, they are used to treat wounds and other skin problems, haemorrhoids, perspiring feet, some eye problems, as a mouth wash etc[601, K]. Many Acacia trees also yield greater or lesser quantities of a gum from the trunk and stems. This is sometimes taken internally in the treatment of diarrhoea and haemorrhoids[601].",
        web:"https://pfaf.org/user/Plant.aspx?LatinName=Acacia+colei"
        },
        {
        id:21,
        name:"Acacia cowleana",
        commonName:"Hall's Creek wattle",
        origin:"Australia",
        medProperites:"The bark of all Acacia species contains greater or lesser quantities of tannins and are astringent. Astringents are often used medicinally - taken internally, for example. they are used in the treatment of diarrhoea and dysentery, and can also be helpful in cases of internal bleeding. Applied externally, often as a wash, they are used to treat wounds and other skin problems, haemorrhoids, perspiring feet, some eye problems, as a mouth wash etc[601 , K ]. Many Acacia trees also yield greater or lesser quantities of a gum from the trunk and stems. This is sometimes taken internally in the treatment of diarrhoea and haemorrhoids[601 ].",
        web:"https://pfaf.org/user/Plant.aspx?LatinName=Acacia+cowleana"
        },
        {
        id:22,
        name:"Acanthus mollis",
        commonName:"Bear's Breeches",
        origin:"Europe",
        medProperites:"The leaves and roots are astringent, detergent, emollient and vulnerary[7, 61, 254]. The plant contains appreciable quantities of mucilage and tannin. Traditionally it was used as a treatment for dislocated joints and for burns. A paste made from the plant, when applied to a dislocated joint, tends to normalize the affected muscles and ligaments, simultaneously relaxing and tightening them to encourage the joint back into its proper place[254]. The crushed leaves have been used as a poultice to soothe burns and scalds[268]. For internal use, the plant's emollient properties are useful in treating irritated mucous membranes within the digestive and urinary tracts[254].",
        web:"https://pfaf.org/User/Plant.aspx?LatinName=Acanthus+mollis"
        },
        {
        id:23,
        name:"Adiantum capillus-veneris",
        commonName:"Maidenhair Fern",
        origin:"Britain",
        medProperites:"The maidenhair fern has a long history of medicinal use and was the main ingredient of a popular cough syrup called 'Capillaire', which remained in use until the nineteenth century[268]. The plant is little used in modern herbalism. The fresh or dried leafy fronds are antidandruff, antitussive, astringent, demulcent, depurative, emetic, weakly emmenagogue, emollient, weakly expectorant, febrifuge, galactogogue, laxative, pectoral, refrigerant, stimulant, sudorific and tonic[4, 7, 9, 21, 46, 61, 218, 222, 240, 268]. A tea or syrup is used in the treatment of coughs, throat afflictions and bronchitis[222]. It is also used as a detoxicant in alcoholism[7] and to expel worms from the body[222]. Externally, it is used as a poultice on snake bites, bee stings etc[218, 222, 257]. In Nepal, a paste made from the fronds is applied to the forehead to relieve headaches and to the chest to relieve chest pains[272]. The plant is best used fresh, though it can also be harvested in the summer and dried for later use[7, 9].",
        web:"https://pfaf.org/user/Plant.aspx?LatinName=Adiantum+capillus-veneris"
        
        }
    ],
    []
    )
  return (
    <>
        <h2 className='headliner'>Two Star Plants</h2>    
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
                    <td>
                    <a href={val.web}>Link</a>
                    </td>
                </tr>
            )
          })}
        </table>
    </>
  )
}

export default TwoStarTable