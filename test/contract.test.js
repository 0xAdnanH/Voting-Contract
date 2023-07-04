const { expect } = require("chai");
const { ethers } = require("hardhat");

let user1;
let user2;
let contract;

before(async () => {
  [user1, user2] = await ethers.getSigners();
  const factory = await ethers.getContractFactory("Vote");
  contract = await factory.deploy();
});

describe("Testing Voting Contract", () => {
  it("should increment vote count", async () => {
    await contract.vote(user1.address);
    const result = await contract.voteCount();
    expect(result).to.equal(1);
  });
  it("should revert if same user voted twice", async () => {
    await expect(contract.vote(user1.address)).to.be.revertedWith(
      "already voted"
    );
    const result = await contract.voteCount();
    expect(result).to.equal(1);
  });
});
