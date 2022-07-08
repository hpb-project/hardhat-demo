// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.4.26;

contract Storage {
    string name;
    mapping(uint256 => string) private balancesSource;

    constructor(string _name) public {
        name = _name;
    }

    function get(uint256 key) public view returns (string memory) {
        return balancesSource[key];
    }

    function set(uint256 key, string memory value) public {
        balancesSource[key] = value;
    }
}
