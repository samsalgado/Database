//SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "./Storage.sol";
contract PlantDatabase is Storage {
        modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    constructor () {
       owner = msg.sender; 
    }
    struct TwoStars {
        uint id;
        string name;
        string commonName;
        string medProperties;
        string web; 
    }
    TwoStars public plantTwo;
    TwoStars [] plantsTwo;
    struct ThreeStars {
        uint idThree;
        string nameThree;
        string commonName3;
        string medPropertiesThree;
        string webThree; 
    }
    ThreeStars public plantThree;
    ThreeStars [] plantsThree;
    struct FourStars {
        uint idThree;
        string nameThree;
        string commonName3;
        string medPropertiesThree;
        string webThree; 
    }
    FourStars public plantFour;
    FourStars [] plantsFour;
    struct FiveStars {
        uint idThree;
        string nameThree;
        string commonName3;
        string medPropertiesThree;
        string webThree; 
    }
    FiveStars public plantFive;
    FiveStars [] plantsFive;
    function threeStarPlants() public {
        ThreeStars memory daturaMetel = ThreeStars(113, "Datura Metel", "Angel's Trumpet", "Mydriatic, hypnotic, hallucinogenic, epilepsy, antitussive, antispasmodic, anthiasthmatic, andoyne, anesthetic", "https://pfaf.org/User/Plant.aspx?LatinName=Datura+metel");
        plantsThree.push(daturaMetel);
        ThreeStars storage _plantThree = plantsThree[0];
    }
    function twostarPlants() public {
        TwoStars memory anchusa = TwoStars(2, "Anchusa officinalis", "Common bugloss", "Demulcent, expectorant, homeopathy", "https://pfaf.org/User/Plant.aspx?LatinName=Anchusa+officinalis");
        TwoStars memory centaureaCyanus = TwoStars(1, "Centaurea Cyanus", "Cornflower", "The dried flowers are antipruritic, antitussive, astringent, weakly diuretic, emmenagogue, ophthalmic, very mildly purgative, and tonic", "https://pfaf.org/USER/Plant.aspx?LatinName=Centaurea+cyanus");
        plantsTwo.push(anchusa);
        plantsTwo.push(centaureaCyanus);
        TwoStars storage _plantTwo = plantsTwo[0];
    }
     function fourstarPlants() public {
        FourStars memory senna = FourStars(8, "Senna Alata", "Ringworm Bush", "A number of anthraquinone derivatives have been isolated from the leaves, such as aloe-emodin, chrysophanol, isochrysophanol and rhein, as well as the alkaloid tyramine and the common steroid beta-sitosterol", "https://pfaf.org/user/Plant.aspx?LatinName=Senna+alata");
        plantsFour.push(senna);
        FourStars storage _plantFour = plantsFour[0];
    }
      function fivestarPlants() public {
        FiveStars memory anchusa = FiveStars(2, "Dioscorea batatas", "Chinese Yam", "Anthelmintic, antidote, contraceptive, digestive, miscellany, vitamin C", "https://pfaf.org/user/plant.aspx?LatinName=Dioscorea+batatas");
        plantsFive.push(anchusa);
        FiveStars storage _plantFive = plantsFive[0];
    }
    function getPlants() public view returns(uint256) {
        return _uintStorage["Plants"];
    }
    function setPlants(uint256 toSet) public onlyOwner {
        _uintStorage["Plants"] = toSet;
    }

}

