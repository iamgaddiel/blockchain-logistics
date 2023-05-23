// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;


contract EtherTransfer {
    function transferEther(address payable _to) external payable {
        require(msg.value > 0, "Amount must be greater than zero");
        _to.transfer(msg.value);
    }
}
