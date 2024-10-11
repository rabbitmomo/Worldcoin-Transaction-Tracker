import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  InflationTokensMinted,
  OwnershipTransferStarted,
  OwnershipTransferred,
  TokenUpdated,
  TokensMinted,
  Transfer
} from "../generated/WLD/WLD"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createInflationTokensMintedEvent(
  minter: Address,
  to: Address,
  amount: BigInt
): InflationTokensMinted {
  let inflationTokensMintedEvent = changetype<InflationTokensMinted>(
    newMockEvent()
  )

  inflationTokensMintedEvent.parameters = new Array()

  inflationTokensMintedEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  inflationTokensMintedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  inflationTokensMintedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return inflationTokensMintedEvent
}

export function createOwnershipTransferStartedEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferStarted {
  let ownershipTransferStartedEvent = changetype<OwnershipTransferStarted>(
    newMockEvent()
  )

  ownershipTransferStartedEvent.parameters = new Array()

  ownershipTransferStartedEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferStartedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferStartedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTokenUpdatedEvent(
  newToken: Address,
  name: string,
  symbol: string,
  existingHolders: Array<Address>,
  existingsAmounts: Array<BigInt>,
  inflationCapPeriod: BigInt,
  inflationCapWad: BigInt,
  inflationLockPeriod: BigInt
): TokenUpdated {
  let tokenUpdatedEvent = changetype<TokenUpdated>(newMockEvent())

  tokenUpdatedEvent.parameters = new Array()

  tokenUpdatedEvent.parameters.push(
    new ethereum.EventParam("newToken", ethereum.Value.fromAddress(newToken))
  )
  tokenUpdatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  tokenUpdatedEvent.parameters.push(
    new ethereum.EventParam("symbol", ethereum.Value.fromString(symbol))
  )
  tokenUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "existingHolders",
      ethereum.Value.fromAddressArray(existingHolders)
    )
  )
  tokenUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "existingsAmounts",
      ethereum.Value.fromUnsignedBigIntArray(existingsAmounts)
    )
  )
  tokenUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "inflationCapPeriod",
      ethereum.Value.fromUnsignedBigInt(inflationCapPeriod)
    )
  )
  tokenUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "inflationCapWad",
      ethereum.Value.fromUnsignedBigInt(inflationCapWad)
    )
  )
  tokenUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "inflationLockPeriod",
      ethereum.Value.fromUnsignedBigInt(inflationLockPeriod)
    )
  )

  return tokenUpdatedEvent
}

export function createTokensMintedEvent(
  minter: Address,
  newHolders: Array<Address>,
  newAmounts: Array<BigInt>
): TokensMinted {
  let tokensMintedEvent = changetype<TokensMinted>(newMockEvent())

  tokensMintedEvent.parameters = new Array()

  tokensMintedEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  tokensMintedEvent.parameters.push(
    new ethereum.EventParam(
      "newHolders",
      ethereum.Value.fromAddressArray(newHolders)
    )
  )
  tokensMintedEvent.parameters.push(
    new ethereum.EventParam(
      "newAmounts",
      ethereum.Value.fromUnsignedBigIntArray(newAmounts)
    )
  )

  return tokensMintedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}
