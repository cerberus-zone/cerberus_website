---toml
title = "Cerberus Zone - Running a validator"
description = "Documentation for running a Cerberus validator"
lang = "en-US"
---

In developement - not complete

# **Running a Cerberus validator**

<div style="text-align: center">
    <img :src="$withBase('/website_logo.png')" alt="Cerberus" style="width: 500px;">
</div>

## Purpose

This document will outline step by step how to set up and configure a Cerberus validator to run on a Linux-based OS.

[[toc]]

## Validator Installation Steps

#### 1. Install Prerequisites

The following are necessary to build the cerberus binary from source. It will install all the needed dependencies to complete the installation of the Cerberus blockchain node software.

```bash:
# update the local package list and install any available upgrades
sudo apt-get update && sudo apt upgrade -y
# install toolchain and ensure accurate time synchronization
sudo apt-get install make build-essential gcc git jq chrony -y
```

::: warning Note
If you are using a Red Hat distro of Linux you will have to run your commands using _yum_. See example below.
:::

Example using yum package manager. Going forward the remainder of the documentation all instructions will be using _apt-get_.

```bash:
# update the local package list and install any available upgrades
sudo yum update && sudo apt upgrade -y
# install toolchain and ensure accurate time synchronization
sudo yum install make build-essential gcc git jq chrony -y
```

#### 2. Installing Go from source

```bash:
cd $HOME && sudo wget https://go.dev/dl/go1.17.6.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.17.5.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
go version
```

Output should be: go version go1.17.5 linux/amd64

Alternatively, you can follow the instructions [here](https://golang.org/doc/install) to install Go.

### Installing Cerberus from source

#### 1. Clone repository

Note be sure you are in $HOME directory, if not run:

```bash:
cd $HOME
```

Next, run the commands below.

```bash:
git clone https://github.com/cerberus-zone/cerberus.git
cd cerberus
git checkout latest
make install && cd ~/go/bin && sudo cp cerberusd /usr/local/bin
```

Having the _cerberusd_ binary located in your _/usr/local/bin_ will ensure when you type _cerberusd_ your OS will find the executable binary.

#### 2. Initiate Chain

This step will create all the needed configuration files needed to run your validator node. The _MONIKER_NAME_ name can be whatever you would like it to be.

```bash:
export MONIKER_NAME=cerberus_validator
cerberusd init $MONIKER_NAME --chain-id cerberus-1
```

After running the commands above all node configuration files have been setup.

#### 3. Download the Genesis file

To download the genesis file you will want to run the commands below. The genesis file is required for your to join your validator node to the Cerberus blockchain.

```bash:
cd $HOME/.cerberus/config/
wget -O $HOME/.cerberus/config/genesis.json \
https://raw.githubusercontent.com/cerberus-zone/cerberus_genesis/main/genesis.json
```

#### 4. Create keys/Cerberus wallet address

The key-name can be whatever you would like it to be. You probably want to name it based on what the wallet address will be used for.

Create key command

```bash:
# To create new keypair - make sure you save the mnemonics!
cerberusd keys add <key-name>
```

Create key command example

```bash:
# To create new keypair - make sure you save the mnemonics!
cerberusd keys add personal_cerberus_wallet
```

This will generated mnemonics like most blockchain wallets. You will want to store this is in a safe place. We recommend against storing your mnemonics backup in cloud storage. The mnemonics will not be displayed again on the screen once you close the terminal window.

#### 5. Starting Cerberus Validator Node

To have your validator node sync with the Cerberus blockchain, you must run the command below. This will start the sync process for you.

```bash:
cerberusd start
```

Once you have successfully had your Cerberus validator started you will want to run it as a service to ensure it is always running. See instructions for _Running Cerberus as a Service (systemd)_

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

Next, run the commands below to ensure that the service restart when you restart the server. The second commands starts the _**cerberusd**_ service.

```bash:
# Enable service to start when server starts
sudo systemctl enable cerberusd

# Starts the cerberusd service
sudo systemctl start cerberusd
```

::: warning Note
If you started a new terminal window to run new commands, be sure you stopped the node when you ran _**cerberusd start**_. You will receive and error when you run _**sudo systemctl start cerberusd**_ if you did not stop the node from running.
:::

### Checking Cerberus validator node status

#### Checking cerberusd service status

You can check the status of your Cerberus node by running the following command.

```bash:
# checking the status of the cerberusd service
sudo systemctl status cerberusd
```

#### Viewing Cerberus validator logs

If you want to seeing a continuous stream of logs from your Cerberus node you can run the following command.

```bash:
# will show you a continous stream of logs from your node.
sudo journalctl -u cerberusd -f
```

### Genesis Validators additional steps

::: warning Note
If you are not running a Genesis Validator you can disregard the steps outlined below.
:::
