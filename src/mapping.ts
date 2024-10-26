// src/mapping.ts
import { SetCollateralPrice as SetCollateralPriceEvent, SetStabilityFee as SetStabilityFeeEvent, DepositCollateral as DepositCollateralEvent, WithdrawCollateral as WithdrawCollateralEvent, MintStable as MintStableEvent, BurnStable as BurnStableEvent, PayDebt as PayDebtEvent, PayDebtInterest as PayDebtInterestEvent, UpdatedInterestAmount as UpdatedInterestAmountEvent } from '../generated/Vault/VaultABI'
import { SetCollateralPrice, SetStabilityFee, DepositCollateral, WithdrawCollateral, MintStable, BurnStable, PayDebt, PayDebtInterest, UpdatedInterestAmount } from '../generated/schema'
import { BigInt, Bytes } from '@graphprotocol/graph-ts'

export function handleSetCollateralPrice(event: SetCollateralPriceEvent): void {
    let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    let transfer = new SetCollateralPrice(id)
    transfer.collateralPrice = event.params.collateralPrice
    transfer.blockNumber = event.block.number
    transfer.transactionHash = event.transaction.hash
    transfer.save()
}

export function handleSetStabilityFee(event: SetStabilityFeeEvent): void {
    let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    let setStabilityFee = new SetStabilityFee(id)
    setStabilityFee.stabilityFee = event.params.stabilityFee
    setStabilityFee.blockNumber = event.block.number
    setStabilityFee.transactionHash = event.transaction.hash
    setStabilityFee.save()
}

export function handleDepositCollateral(event: DepositCollateralEvent): void {
    let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    let depositCollateral = new DepositCollateral(id)
    depositCollateral.senderAdress = event.params.senderAdress
    depositCollateral.receiverAddress = event.params.receiverAddress
    depositCollateral.amount = event.params.amount
    depositCollateral.blockNumber = event.block.number
    depositCollateral.transactionHash = event.transaction.hash
    depositCollateral.save()
}

export function handleWithdrawCollateral(event: WithdrawCollateralEvent): void {
    let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    let withdrawCollateral = new WithdrawCollateral(id)
    withdrawCollateral.senderAdress = event.params.senderAdress
    withdrawCollateral.receiverAddress = event.params.receiverAddress
    withdrawCollateral.amount = event.params.amount
    withdrawCollateral.blockNumber = event.block.number
    withdrawCollateral.transactionHash = event.transaction.hash
    withdrawCollateral.save()
}

export function handleMintStable(event: MintStableEvent): void {
    let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    let mintStable = new MintStable(id)
    mintStable.senderAdress = event.params.senderAdress
    mintStable.receiverAddress = event.params.receiverAddress
    mintStable.amount = event.params.amount
    mintStable.blockNumber = event.block.number
    mintStable.transactionHash = event.transaction.hash
    mintStable.save()
}

export function handleBurnStable(event: BurnStableEvent): void {
    let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    let burnStable = new BurnStable(id)
    burnStable.senderAdress = event.params.senderAdress
    burnStable.receiverAddress = event.params.receiverAddress
    burnStable.amount = event.params.amount
    burnStable.blockNumber = event.block.number
    burnStable.transactionHash = event.transaction.hash
    burnStable.save()
}

export function handlePayDebt(event: PayDebtEvent): void {
    let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    let payDebt = new PayDebt(id)
    payDebt.senderAdress = event.params.senderAdress
    payDebt.receiverAddress = event.params.receiverAddress
    payDebt.amount = event.params.amount
    payDebt.blockNumber = event.block.number
    payDebt.transactionHash = event.transaction.hash
    payDebt.save()
}

export function handlePayDebtInterest(event: PayDebtInterestEvent): void {
    let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    let payDebtInterest = new PayDebtInterest(id)
    payDebtInterest.senderAdress = event.params.senderAdress
    payDebtInterest.receiverAddress = event.params.receiverAddress
    payDebtInterest.amount = event.params.amount
    payDebtInterest.blockNumber = event.block.number
    payDebtInterest.transactionHash = event.transaction.hash
    payDebtInterest.save()
}

export function handleUpdatedInterestAmount(event: UpdatedInterestAmountEvent): void {
    let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    let updatedInterestAmount = new UpdatedInterestAmount(id)
    updatedInterestAmount.borrowerAddress = event.params.borrowerAddress
    updatedInterestAmount.calculatedInterestAmount = event.params.calculatedInterestAmount
    updatedInterestAmount.acquiredInterestDebtAmounts = event.params.acquiredInterestDebtAmounts
    updatedInterestAmount.debtAmounts = event.params.debtAmounts
    updatedInterestAmount.blockNumber = event.block.number
    updatedInterestAmount.transactionHash = event.transaction.hash
    updatedInterestAmount.save()
}