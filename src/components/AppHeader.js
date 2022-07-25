import React from 'react'
import { Menu } from 'antd'
import { Button } from 'antd'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

export default function AppHeader() {
    const connectWallet = (e) => {
        const chainId = 'halo-testnet-001'
        window.keplr.enable(chainId)
            .then(async res => {
                if (res) {
                    const offlineSigner = window.getOfflineSigner(chainId)
                    const cosmwasm = await SigningCosmWasmClient.connectWithSigner('https://rpc.halo.aura.network:443', offlineSigner)
                    const account = (await offlineSigner.getAccounts())[0]
                    console.log(account)
                }
            }).catch(err => console.log(err));
    }
    return (
        <>
            <div>
                <Menu>
                    <div style={{ display: "flex", opacity: "0.5", flexDirection: "row" }}>
                        <div style={{ flex: "1", justifyContent: "center", alignItems: "center", flexDirection: "row", display: "flex", }}>
                            <Menu.Item>Profile</Menu.Item>
                            <Menu.Item>Inventory</Menu.Item>
                        </div>
                        <Button onClick={connectWallet}>Login</Button>
                    </div>
                </Menu >
            </div >
        </>
    )
}