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
    struct PlantDataBase {
        uint id;
        string name;
        string commonName;
        string medProperties;
        uint256 rank;
        string web; 
    }
    PlantDataBase[] public plants;
    event DataInputted(
        uint id,
        string name,
        string commonName,
        string medProperties,
        uint256 rank,
        string web
    );
    function plantData(
        uint _id,
        string memory _name,
        string memory _commonName,
        string memory _medProperties,
        uint256 _rank,
        string memory _web
    ) external{
        PlantDataBase memory _PlantDataBase = PlantDataBase(
            _id,
            _name,
            _commonName,
            _medProperties,
            _rank,
            _web
        );
        plants.push(_PlantDataBase);
        emit DataInputted( _id, _name, _commonName, _medProperties, _rank, _web);
       
    }
    function showData(uint256 _id) external view returns (PlantDataBase memory) {
        PlantDataBase memory plants = plants[_id];
        return plants;
    }
}
