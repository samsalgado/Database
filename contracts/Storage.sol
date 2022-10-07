//SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;
contract Storage {
    mapping(string => uint256) _uintStorage;
    mapping(string => address) _addressStorage;
    mapping(string => string) _stringStorage;
    mapping(string => bytes) _bytesStorage;
    address public owner;
    bool public _initialized;
}
