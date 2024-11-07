// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingContract {
    mapping(address => bool) public hasVoted;
    mapping(address => bytes32) public voteSignatureHash;
    uint public yesVotes;
    uint public noVotes;

    function vote(bool _vote, bytes32 _signatureHash) public {
        require(!hasVoted[msg.sender], "Ya has votado");

        hasVoted[msg.sender] = true;
        voteSignatureHash[msg.sender] = _signatureHash;

        if (_vote) {
            yesVotes += 1;
        } else {
            noVotes += 1;
        }
    }

    function getResults() public view returns (uint, uint) {
        return (yesVotes, noVotes);
    }
}
