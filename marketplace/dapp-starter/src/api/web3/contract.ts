import Web3 from "web3";
import { v4 as uuid } from "uuid"; 

const contractAddress: string = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
import { abi } from "./abi";

const web3 = new Web3();
web3.setProvider(new Web3.providers.HttpProvider(process.env.NEXT_PUBLIC_RPC_PROVIDER));
const orderbook = new web3.eth.Contract((abi as any), contractAddress);

// Getting Functions for the Address
export async function getAllOrders() {
    const flattened = await orderbook.methods.exportOrders().call();
    const orders = zip(flattened);
    return orders;
}

export async function getHistoryForAddress(address: string) {
    const orders = await getAllOrders();
    return orders.filter(order => order.seller == address);
}

export async function getOpenListingForSeller(address: string) {
    const orders = await getAllOrders();
    return orders.filter(order => order.seller == address && order.isOpen);
}

export async function getCompletedOrdersForSeller(address: string) {
    const orders = await getAllOrders();
    return orders.filter(order => order.seller == address && !order.isOpen);
}

// Functions that mutates state

export async function listItem(address: string, orderDetail: string) {
    const orderId = uuid();
    await (window as any).ethereum?.request({
        method: "eth_sendTransaction",
        params:[{
            from: address,
            to: contractAddress,
            data: orderbook.methods.listItem(orderId, orderDetail).encodeABI(),
        }]
    })
}

export async function acceptItem(address: string, orderId: string) {
    await (window as any).ethereum?.request({
        method: "eth_sendTransaction",
        params:[{
            from: address,
            to: contractAddress,
            data: orderbook.methods.acceptItem(orderId).encodeABI(),
        }]
    })
}

// Helper Functions
export const zip = (rows) => {
    const formedRows = [rows[0], rows[1], rows[2], rows[3]]
    const zipped = formedRows[0].map((_ ,c)=>formedRows.map(row=>row[c]))
    return zipped.map(([ id, seller, isOpen, metadata]) => ({id, seller, isOpen, metadata}));
}
