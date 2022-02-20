---toml
title = "Cerberus Zone - Running a validator"
description = "Documentation for running a Cerberus validator"
lang = "en-US"
---

# **Running a Cerberus validator**

<div style="text-align: center">
    <img :src="$withBase('/website_logo.png')" alt="Cerberus" style="width: 500px;">
</div>

## Purpose

This document will outline step by step how to set up and configure a Cerberus validator to run on a Linux-based OS.

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

### Genesis Validator additional steps
