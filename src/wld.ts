import {
  Approval as ApprovalEvent,
  InflationTokensMinted as InflationTokensMintedEvent,
  OwnershipTransferStarted as OwnershipTransferStartedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TokenUpdated as TokenUpdatedEvent,
  TokensMinted as TokensMintedEvent,
  Transfer as TransferEvent
} from "../generated/WLD/WLD";

import {
  Approval,
  InflationTokensMinted,
  OwnershipTransferStarted,
  OwnershipTransferred,
  TokenUpdated,
  TokensMinted,
  Transfer
} from "../generated/schema";

import { Address, BigInt, Bytes, log } from "@graphprotocol/graph-ts";

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  // Logging types for debugging
  log.info("Handling Approval: owner={}, spender={}, value={}", [
    event.params.owner.toHex(),
    event.params.spender.toHex(),
    event.params.value.toString()
  ]);

  entity.owner = event.params.owner as Bytes; 
  entity.spender = event.params.spender as Bytes; 
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleInflationTokensMinted(
  event: InflationTokensMintedEvent
): void {
  let entity = new InflationTokensMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  // Logging types for debugging
  log.info("Handling InflationTokensMinted: minter={}, to={}, amount={}", [
    event.params.minter.toHex(),
    event.params.to.toHex(),
    event.params.amount.toString()
  ]);

  entity.minter = event.params.minter as Bytes;
  entity.to = event.params.to as Bytes; 
  entity.amount = event.params.amount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOwnershipTransferStarted(
  event: OwnershipTransferStartedEvent
): void {
  let entity = new OwnershipTransferStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  // Logging types for debugging
  log.info("Handling OwnershipTransferStarted: previousOwner={}, newOwner={}", [
    event.params.previousOwner.toHex(),
    event.params.newOwner.toHex()
  ]);

  entity.previousOwner = event.params.previousOwner as Bytes; 
  entity.newOwner = event.params.newOwner as Bytes;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  // Logging types for debugging
  log.info("Handling OwnershipTransferred: previousOwner={}, newOwner={}", [
    event.params.previousOwner.toHex(),
    event.params.newOwner.toHex()
  ]);

  entity.previousOwner = event.params.previousOwner as Bytes; 
  entity.newOwner = event.params.newOwner as Bytes;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTokenUpdated(event: TokenUpdatedEvent): void {
  let entity = new TokenUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  // Logging types for debugging
  log.info("Handling TokenUpdated: newToken={}, name={}, symbol={}", [
    event.params.newToken.toHex(),
    event.params.name,
    event.params.symbol
  ]);

  entity.newToken = event.params.newToken as Bytes; 
  entity.name = event.params.name;
  entity.symbol = event.params.symbol;
  entity.inflationCapPeriod = event.params.inflationCapPeriod;
  entity.inflationCapWad = event.params.inflationCapWad;
  entity.inflationLockPeriod = event.params.inflationLockPeriod;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTokensMinted(event: TokensMintedEvent): void {
  let entity = new TokensMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  // Logging types for debugging
  log.info("Handling TokensMinted: minter={}, newAmounts={}", [
    event.params.minter.toHex(),
    event.params.newAmounts.map<BigInt>((amount) => amount).join(", ")
  ]);

  entity.minter = event.params.minter as Bytes;
  entity.newAmounts = event.params.newAmounts; 

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  // Logging types for debugging
  log.info("Handling Transfer: from={}, to={}, value={}", [
    event.params.from.toHex(),
    event.params.to.toHex(),
    event.params.value.toString()
  ]);

  entity.from = event.params.from as Bytes; 
  entity.to = event.params.to as Bytes; 
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}