---toml
title = "Cerberus Zone - Running a validator"
description = "Documentation for running a Cerberus validator"
lang = "en-US"
---

In developement - not complete

# **Running a Cerberus validator**

<div style="text-align: center; margin-top:25px; margin-bottom:50px">
    <a href="https://twitter.com/CerberusZone" target="_blank" >
        <img :src="$withBase('/website_logo.png')" alt="Cerberus" style="width: 500px;">
    </a>
</div>

[[toc]]

## Purpose of document

This document will outline step by step how to set up and configure a Cerberus validator to run on a Linux-based OS.

## Validator Installation Steps

### Installing Prerequisites

The following are necessary to build the Cerberus binary from the source. It will install all the needed dependencies to complete the Cerberus blockchain node software installation.

```bash:
# update the local package list and install any available upgrades
sudo apt-get update && sudo apt upgrade -y
# install toolchain and ensure accurate time synchronization
sudo apt-get install make build-essential gcc git jq chrony -y
```

::: warning Note
If running a Red Hat distro of Linux, you will have to run your commands using _yum_. See the example below.
:::

Example using yum package manager. Going forward, the remainder of the documentation all instructions will be using _apt-get_.

```bash:
# update the local package list and install any available upgrades
sudo yum update && sudo yum upgrade -y
# install toolchain and ensure accurate time synchronization
sudo yum install make build-essential gcc git jq chrony -y
```

### Installing Go from source

```bash:
cd $HOME && sudo wget https://go.dev/dl/go1.17.6.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.17.6.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
go version
```

Output should be: go version go1.17.5 linux/amd64

Alternatively, you can follow the instructions [here](https://golang.org/doc/install) to install Go.

### Installing Cerberus from source

#### 1. Clone repository

Note be sure you are in $HOME directory; if not run:

```bash:
cd $HOME
```

Next, run the commands below.

```bash:
git clone https://github.com/cerberus-zone/cerberus.git
cd cerberus
git checkout latest

# this step may take several minutes to complete
make install && cd ~/go/bin && sudo cp cerberusd /usr/local/bin
```

Having the _cerberusd_ binary located in your _/usr/local/bin_ will ensure that when you type _cerberusd_ your OS will find the executable binary.

## Configuring Cerberus node

### Initiate Chain

This step will create all the configuration files needed to run your validator node. The _MONIKER_NAME_ name can be whatever you would like it to be.

```bash:
export MONIKER_NAME=cerberus_validator
cerberusd init $MONIKER_NAME --chain-id cerberus-1
```

You should see output similar to the image below.

<div style="text-align: center">
    <a href="docs/chain_init.png" target="_blank">
        <img :src="$withBase('docs/chain_init.png')" alt="Cerberus" style="width: 1000px;">
    </a>
</div>

After running the commands above, all node configuration files have been set up.

### Setting Persistent Peers

In this section you will add peers to begin communicating with the Cerberus blockchain.

::: warning Note
This section will be updated at a later date after the main Cerberus chain has launched.
:::

```bash
sed -i 's/persistent_peers = ""/persistent_peers="<peer_id>@<ip-address>:26656"/g' $HOME/.cerberus/config/config.toml
sed -i 's/persistent_peers = ""/persistent_peers="<peer_id>@<ip-address>:26656"/g' $HOME/.cerberus/config/config.toml
```

### Download the Genesis file

::: warning Note
The current genesis file is for development only. Once the chain goes live the genesis.json will be updated.
:::

To download the genesis file, you will want to run the commands below. The genesis file is required to join the validator node to the Cerberus blockchain.

```bash:
cd $HOME/.cerberus/config/
wget -O $HOME/.cerberus/config/genesis.json \
https://raw.githubusercontent.com/cerberus-zone/cerberus_genesis/main/genesis.json
```

### Create keys/Cerberus wallet address

The key-name can be whatever you would like it to be. You probably want to name it based on what the wallet address will be used for.

Create key command

```bash:
# To create new keypair - make sure you save the mnemonics!
cerberusd keys add <key-name>
```

Create key command example

```bash:
# To create new keypair - make sure you save the mnemonics!
cerberusd keys add cerberus_validator_key
```

The command above will generate mnemonics like most blockchain wallets. You will want to store this is in a safe place. We recommend against storing your mnemonics backup in cloud storage. The mnemonics will not be displayed again on the screen once you close the terminal window.

## Starting Validator Node

### Starting Cerberus Validator Node

You must run the command below to have your validator node sync with the Cerberus blockchain. This will start the sync process for you.

```bash:
cerberusd start
```

Once you have successfully tested that your Cerberus validator will start, you will want to run it as a service to ensure it is always running. See instructions for _Running Cerberus as a Service (systemd)_

### Running Cerberus as a Service (systemd)

This section will walk you through how to run your Cerberus validator node as a service.

#### 1. Creating the cerberusd.service file

```bash:
# creates the cerberusd.service file and puts it in text editor mode
sudo touch /etc/systemd/system/cerberusd.service && \
sudo nano /etc/systemd/system/cerberusd.service
```

#### 2. Add service configuration info

You will now add the info you see below to your cerberusd.service file and save the file.

```
[Unit]
Description=Cerberus Node
After=network-online.target

[Service]
User=ssm-user
ExecStart=/usr/local/bin/cerberusd start
Restart=always
RestartSec=3
LimitNOFILE=4096

[Install]
WantedBy=multi-user.target
```

#### 3. Start _cerberusd_ service

Next, run the commands below to ensure that the service restart when you restart the server. The second command starts the _**cerberusd**_ service.

```bash:
# Enable service to start when server starts
sudo systemctl enable cerberusd

# Starts the cerberusd service
sudo systemctl start cerberusd
```

::: warning Note
If you started a new terminal window to run further commands, be sure you stopped the node when you ran cerberusd start. You would receive an error when you run sudo systemctl start cerberusd if you did not stop the node from running.
:::

## Checking Cerberus validator node status

### Checking cerberusd service status

You can check the status of your Cerberus node by running the following command.

```bash:
# checking the status of the cerberusd service
sudo systemctl status cerberusd
```

You should then a screen similar to the screen pictured below.

<div style="text-align: center">
    <a href="docs/status.png" target="_blank">
        <img :src="$withBase('docs/status.png')" alt="Cerberus" style="width: 1000px;">
    </a>
</div>

### Viewing Cerberus validator logs

You can run the following command if you want to see a continuous stream of logs from your Cerberus node.

```bash:
# will show you a continous stream of logs from your node.
sudo journalctl -u cerberusd -f
```

After running the command above, you will see a screen like the one below.

<div style="text-align: center">
    <a href="docs/output.png" target="_blank">
        <img :src="$withBase('docs/output.png')" alt="Cerberus" style="width: 1000px;">
    </a>
</div>

## Genesis Validator Setup

::: warning Note
Genesis Validators only - If you are not running a Genesis Validator, you can disregard the below steps.
:::

### Genesis Validators additional steps

This section will outline creating a gentx to run a genesis validator. After the chain goes live, this documentation will no longer be valid.

::: warning Previous Steps required
You should have completed all the steps outlined above before going through these steps.
:::

### Creating a genesis account

You will run the command below to create a genesis account. The example below shows creating a genesis account giving each validator 5000000100000ucrbrus.

Where _**key-name**_ is you can use the key name that you created in the step <a href="#create-keys-cerberus-wallet-address">Create keys/Cerberus wallet address</a>

```bash
cerberusd add-genesis-account <key-name> 5000000000000ucrbrus
```

### Create the gentx

The commend below will generate the gentx file needed to run as a genesis validator.

#### **Commands Parameters**

_**key-name**_ is the key-name/wallet that you will use to fund the validator

Where _**key-name**_ is you can use the key name that you created in the step <a href="#create-keys-cerberus-wallet-address">Create keys/Cerberus wallet address</a>

_**moniker**_ you will use the moniker you set in the step <a href="#initiate-chain">Initiate Chain</a>

_**description**_ you will set a description for your Cerberus validator node.

_**security-contact**_ you will add the security contact email address for your validator.

```bash
cerberusd gentx <key-name> 4000000000000ucerberusd \
--chain-id cerberus-1 \
--moniker=$MONIKER_NAME \
--commission-max-change-rate=0.05 \
--commission-max-rate=0.20 \
--commission-rate=0.05 \
--details="XXXXXXXX" \
--security-contact="XXXXXXXX" \
--website="XXXXXXXX"
```

### Submit Pull Request with Gentx and peed id

1.  Copy the contents of ${HOME}/.cerberus/config/gentx/gentx-XXXXXXXX.json
2.  Fork the repository
3.  Create a file gentx-{{VALIDATOR_NAME}}.json under the networks/mainnet/gentx folder in the forked repo, paste the copied text into the file
4.  Create a file gentx-{{VALIDATOR_NAME}}.json under the networks/mainnet/gentx folder in the forked repo, paste the copied text into the file
