import { AccountMeta, Connection, PublicKey, Transaction, TransactionInstruction } from '@solana/web3.js';
import { Account, SignedTransaction, TransactionConfig } from 'web3-core';
import Web3 from 'web3';
import { Amount, ClaimInstructionResult, NeonProgramStatus, SolanaAccount, SPLToken } from '../models';
import { NeonProxyRpcApi } from '../api';
export declare function neonTransferMintWeb3Transaction(connection: Connection, web3: Web3, proxyApi: NeonProxyRpcApi, proxyStatus: NeonProgramStatus, neonEvmProgram: PublicKey, solanaWallet: PublicKey, neonWallet: string, splToken: SPLToken, amount: Amount, chainId: number): Promise<any>;
export declare function neonTransferMintTransaction(connection: Connection, proxyStatus: NeonProgramStatus, neonEvmProgram: PublicKey, solanaWallet: PublicKey, neonWallet: string, emulateSigner: Account, neonKeys: AccountMeta[], legacyAccounts: SolanaAccount[], neonTransaction: SignedTransaction, splToken: SPLToken, amount: bigint, chainId: number): Promise<Transaction>;
export declare function createComputeBudgetUtilsInstruction(programId: PublicKey, proxyStatus: NeonProgramStatus): TransactionInstruction;
export declare function createComputeBudgetHeapFrameInstruction(programId: PublicKey, proxyStatus: NeonProgramStatus): TransactionInstruction;
export declare function createApproveDepositInstruction(solanaWallet: PublicKey, neonPDAWallet: PublicKey, associatedToken: PublicKey, amount: number | bigint): TransactionInstruction;
export declare function createAccountV3Instruction(solanaWallet: PublicKey, neonPDAWallet: PublicKey, neonEvmProgram: PublicKey, neonWallet: string): TransactionInstruction;
export declare function createAccountBalanceForLegacyAccountInstruction(connection: Connection, account: SolanaAccount, solanaWallet: PublicKey, neonEvmProgram: PublicKey, chainId: number): Promise<TransactionInstruction | null>;
export declare function createAccountBalanceInstruction(solanaWallet: PublicKey, neonEvmProgram: PublicKey, neonWallet: string, chainId: number): TransactionInstruction;
export declare function climeTransactionData(web3: Web3, associatedToken: PublicKey, neonWallet: string, amount: Amount): string;
export declare function neonClaimTransactionFromSigner(climeData: string, walletSigner: Account, neonWallet: string, splToken: SPLToken): Promise<SignedTransaction>;
export declare function createClaimInstruction(proxyApi: NeonProxyRpcApi, neonTransaction: SignedTransaction): Promise<ClaimInstructionResult>;
export declare function createExecFromDataInstruction(solanaWallet: PublicKey, neonPDAWallet: PublicKey, neonEvmProgram: PublicKey, neonRawTransaction: string, neonKeys: AccountMeta[], proxyStatus: NeonProgramStatus): TransactionInstruction;
export declare function createExecFromDataInstructionV2(solanaWallet: PublicKey, neonWallet: string, neonEvmProgram: PublicKey, neonRawTransaction: string, neonKeys: AccountMeta[], proxyStatus: NeonProgramStatus, chainId: number): TransactionInstruction;
export declare function createMintNeonWeb3Transaction(web3: Web3, neonWallet: string, associatedToken: PublicKey, splToken: SPLToken, amount: Amount, gasLimit?: number): Promise<TransactionConfig>;
export declare function mintNeonTransactionData(web3: Web3, associatedToken: PublicKey, splToken: SPLToken, amount: Amount): string;
export declare function createMintNeonTransaction(neonWallet: string, splToken: SPLToken, data: string): TransactionConfig;
export declare function createMintSolanaTransaction(solanaWallet: PublicKey, tokenMint: PublicKey, associatedToken: PublicKey, proxyStatus: NeonProgramStatus): Transaction;
export declare function createAssociatedTokenAccountInstruction(tokenMint: PublicKey, associatedAccount: PublicKey, owner: PublicKey, payer: PublicKey, associatedProgramId?: PublicKey, programId?: PublicKey): TransactionInstruction;
export declare function createWrapSOLTransaction(connection: Connection, solanaWallet: PublicKey, amount: Amount, splToken: SPLToken): Promise<Transaction>;
export declare function createUnwrapSOLTransaction(connection: Connection, solanaWallet: PublicKey, splToken: SPLToken): Promise<Transaction>;
export declare function createWrapAndTransferSOLTransactionWeb3(connection: Connection, web3: Web3, proxyApi: NeonProxyRpcApi, proxyStatus: NeonProgramStatus, neonEvmProgram: PublicKey, solanaWallet: PublicKey, neonWallet: string, splToken: SPLToken, amount: number, chainId?: number): Promise<Transaction>;
