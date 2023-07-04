// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Vote {
    mapping(address => bool) public votes;
    uint256 public voteCount;

    function vote(address _voter) public {
        _checkVote(_voter);
        votes[_voter] = true;
    }

    function _checkVote(address _voter) internal {
        if (votes[_voter] == true) {
            revert("already voted");
        } else {
            voteCount++;
        }
    }
}
