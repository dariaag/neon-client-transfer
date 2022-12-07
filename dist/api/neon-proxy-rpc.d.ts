import { NeonProgramStatus, RPCResponse, SettingsFormState } from '../models';
export declare class NeonProxyRpcApi {
    neonProxyRpcApi: string;
    solanaRpcApi: string;
    constructor(params: SettingsFormState);
    rpc<T>(url: string, method: string, params?: unknown[]): Promise<RPCResponse<T>>;
    proxy<T>(method: string, params?: unknown[]): Promise<RPCResponse<T>>;
    solana<T>(method: string, params?: unknown[]): Promise<RPCResponse<T>>;
    neonEmulate(params?: string[]): Promise<RPCResponse<any>>;
    evmParams(): Promise<NeonProgramStatus>;
}
