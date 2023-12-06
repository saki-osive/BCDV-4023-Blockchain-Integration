import { Injectable } from '@nestjs/common';
import Web3 from 'web3';

@Injectable()
export class BugTrackerService {
    private contractAddress = '0xdE7C9ae8AcF01ddC3785AC662b4666d05c3Bbab6'; // Replace with your contract address
    private abi = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_description",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_bugId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_bugStatus",
                    "type": "uint256"
                }
            ],
            "name": "addBug",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_bugIndex",
                    "type": "uint256"
                }
            ],
            "name": "getBug",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                },
                {
                    "internalType": "bool",
                    "name": "isDone",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "bugId",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBugCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_bugIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "_status",
                    "type": "bool"
                }
            ],
            "name": "updateBugStatus",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]; // Replace with your contract ABI

    private web3: Web3;

    constructor() {
        this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')); // Ganache RPC URL
    }

    async addBug(description: string, bugId: bigint, bugStatus: bigint): Promise<void> {
        const contract = new this.web3.eth.Contract(this.abi, this.contractAddress);

        // @ts-ignore
        await contract.methods.addBug(description, parseInt(bugId), parseInt(bugStatus)).send();
    }

    async getBug(index: number): Promise<any> {
        const contract = new this.web3.eth.Contract(this.abi, this.contractAddress);
        // @ts-ignore
        return await contract.methods.getBug(index).call();
    }

    async updateBugStatus(index: number, status: bigint): Promise<void> {
        const contract = new this.web3.eth.Contract(this.abi, this.contractAddress);
        // @ts-ignore
        await contract.methods.updateBugStatus(index, parseInt(status)).send();
    }

    async getBugCount(): Promise<number> {
        const contract = new this.web3.eth.Contract(this.abi, this.contractAddress);
        return await contract.methods.getBugCount().call();
    }
}
