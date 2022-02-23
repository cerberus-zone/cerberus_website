(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{405:function(e,t,s){"use strict";s.r(t);var a=s(56),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"running-a-cerberus-validator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-a-cerberus-validator"}},[e._v("#")]),e._v(" "),s("strong",[e._v("Running a Cerberus validator")])]),e._v(" "),s("div",{staticStyle:{"text-align":"center","margin-top":"25px","margin-bottom":"50px"}},[s("a",{attrs:{href:"https://twitter.com/CerberusZone",target:"_blank"}},[s("img",{staticStyle:{width:"500px"},attrs:{src:e.$withBase("/website_logo.png"),alt:"Cerberus"}})])]),e._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[e._v("Cerberus chain not live")]),e._v(" "),s("p",[e._v("The Cerberus chain is not live yet. This document previews how you will launch a validator once the chain is launched. See some of the areas marked in yellow for things that will need to be updated once the chain goes live.")])]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#purpose-of-document"}},[e._v("Purpose of document")])]),s("li",[s("a",{attrs:{href:"#validator-installation-steps"}},[e._v("Validator Installation Steps")]),s("ul",[s("li",[s("a",{attrs:{href:"#installing-prerequisites"}},[e._v("Installing Prerequisites")])]),s("li",[s("a",{attrs:{href:"#installing-go-from-source"}},[e._v("Installing Go from source")])]),s("li",[s("a",{attrs:{href:"#installing-cerberus-from-source"}},[e._v("Installing Cerberus from source")])])])]),s("li",[s("a",{attrs:{href:"#configuring-cerberus-node"}},[e._v("Configuring Cerberus node")]),s("ul",[s("li",[s("a",{attrs:{href:"#initiate-chain"}},[e._v("Initiate Chain")])]),s("li",[s("a",{attrs:{href:"#setting-persistent-peers"}},[e._v("Setting Persistent Peers")])]),s("li",[s("a",{attrs:{href:"#download-the-genesis-file"}},[e._v("Download the Genesis file")])]),s("li",[s("a",{attrs:{href:"#create-keys-cerberus-wallet-address"}},[e._v("Create keys/Cerberus wallet address")])])])]),s("li",[s("a",{attrs:{href:"#starting-validator-node"}},[e._v("Starting Validator Node")]),s("ul",[s("li",[s("a",{attrs:{href:"#starting-cerberus-validator-node"}},[e._v("Starting Cerberus Validator Node")])]),s("li",[s("a",{attrs:{href:"#running-cerberus-as-a-service-systemd"}},[e._v("Running Cerberus as a Service (systemd)")])])])]),s("li",[s("a",{attrs:{href:"#checking-cerberus-validator-node-status"}},[e._v("Checking Cerberus validator node status")]),s("ul",[s("li",[s("a",{attrs:{href:"#checking-cerberusd-service-status"}},[e._v("Checking cerberusd service status")])]),s("li",[s("a",{attrs:{href:"#viewing-cerberus-validator-logs"}},[e._v("Viewing Cerberus validator logs")])])])]),s("li",[s("a",{attrs:{href:"#genesis-validator-setup"}},[e._v("Genesis Validator Setup")]),s("ul",[s("li",[s("a",{attrs:{href:"#genesis-validators-additional-steps"}},[e._v("Genesis Validators additional steps")])]),s("li",[s("a",{attrs:{href:"#creating-a-genesis-account"}},[e._v("Creating a genesis account")])]),s("li",[s("a",{attrs:{href:"#create-the-gentx"}},[e._v("Create the gentx")])]),s("li",[s("a",{attrs:{href:"#submit-pull-request-with-gentx-and-peed-id"}},[e._v("Submit Pull Request with Gentx and peed id")])])])])])]),s("p"),e._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[e._v("Cerberus chain not live")]),e._v(" "),s("p",[e._v("The Cerberus chain is not live yet. This document previews how you will launch a validator once the chain is launched. See some of the areas marked in yellow for things that will need to be updated once the chain goes live.")])]),e._v(" "),s("h2",{attrs:{id:"purpose-of-document"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#purpose-of-document"}},[e._v("#")]),e._v(" Purpose of document")]),e._v(" "),s("p",[e._v("This document will outline step by step how to set up and configure a Cerberus validator to run on a Linux-based OS.")]),e._v(" "),s("h2",{attrs:{id:"validator-installation-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validator-installation-steps"}},[e._v("#")]),e._v(" Validator Installation Steps")]),e._v(" "),s("h3",{attrs:{id:"installing-prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-prerequisites"}},[e._v("#")]),e._v(" Installing Prerequisites")]),e._v(" "),s("p",[e._v("The following are necessary to build the Cerberus binary from the source. It will install all the needed dependencies to complete the Cerberus blockchain node software installation.")]),e._v(" "),s("div",{staticClass:"language-bash: extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# update the local package list and install any available upgrades\nsudo apt-get update && sudo apt upgrade -y\n# install toolchain and ensure accurate time synchronization\nsudo apt-get install make build-essential gcc git jq chrony -y\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("If running a Red Hat distro of Linux, you will have to run your commands using "),s("em",[e._v("yum")]),e._v(". See the example below.")])]),e._v(" "),s("p",[e._v("Example using yum package manager. Going forward, the remainder of the documentation all instructions will be using "),s("em",[e._v("apt-get")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language-bash: extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# update the local package list and install any available upgrades\nsudo yum update && sudo yum upgrade -y\n# install toolchain and ensure accurate time synchronization\nsudo yum install make build-essential gcc git jq chrony -y\n")])])]),s("h3",{attrs:{id:"installing-go-from-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-go-from-source"}},[e._v("#")]),e._v(" Installing Go from source")]),e._v(" "),s("div",{staticClass:"language-bash: extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd $HOME && sudo wget https://go.dev/dl/go1.17.6.linux-amd64.tar.gz\nsudo tar -C /usr/local -xzf go1.17.6.linux-amd64.tar.gz\nexport PATH=$PATH:/usr/local/go/bin\ngo version\n")])])]),s("p",[e._v("Output should be: go version go1.17.5 linux/amd64")]),e._v(" "),s("p",[e._v("Alternatively, you can follow the instructions "),s("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(" to install Go.")]),e._v(" "),s("h3",{attrs:{id:"installing-cerberus-from-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-cerberus-from-source"}},[e._v("#")]),e._v(" Installing Cerberus from source")]),e._v(" "),s("h4",{attrs:{id:"_1-clone-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-clone-repository"}},[e._v("#")]),e._v(" 1. Clone repository")]),e._v(" "),s("p",[e._v("Note be sure you are in $HOME directory; if not run:")]),e._v(" "),s("div",{staticClass:"language-bash: extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd $HOME\n")])])]),s("p",[e._v("Next, run the commands below.")]),e._v(" "),s("div",{staticClass:"language-bash: extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git clone https://github.com/cerberus-zone/cerberus.git\ncd cerberus\ngit checkout latest\n\n# this step may take several minutes to complete\nmake install && cd ~/go/bin && sudo cp cerberusd /usr/local/bin\n")])])]),s("p",[e._v("Having the "),s("em",[e._v("cerberusd")]),e._v(" binary located in your "),s("em",[e._v("/usr/local/bin")]),e._v(" will ensure that when you type "),s("em",[e._v("cerberusd")]),e._v(" your OS will find the executable binary.")]),e._v(" "),s("h2",{attrs:{id:"configuring-cerberus-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-cerberus-node"}},[e._v("#")]),e._v(" Configuring Cerberus node")]),e._v(" "),s("h3",{attrs:{id:"initiate-chain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initiate-chain"}},[e._v("#")]),e._v(" Initiate Chain")]),e._v(" "),s("p",[e._v("This step will create all the configuration files needed to run your validator node. The "),s("em",[e._v("MONIKER_NAME")]),e._v(" name can be whatever you would like it to be.")]),e._v(" "),s("div",{staticClass:"language-bash: extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("export MONIKER_NAME=cerberus_validator\ncerberusd init $MONIKER_NAME --chain-id cerberus-1\n")])])]),s("p",[e._v("You should see output similar to the image below.")]),e._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"docs/chain_init.png",target:"_blank"}},[s("img",{staticStyle:{width:"1000px"},attrs:{src:e.$withBase("docs/chain_init.png"),alt:"Cerberus"}})])]),e._v(" "),s("p",[e._v("After running the commands above, all node configuration files have been set up.")]),e._v(" "),s("h3",{attrs:{id:"setting-persistent-peers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-persistent-peers"}},[e._v("#")]),e._v(" Setting Persistent Peers")]),e._v(" "),s("p",[e._v("In this section you will add peers to begin communicating with the Cerberus blockchain.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("This section will be updated at a later date after the main Cerberus chain has launched.")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sed")]),e._v(" -i "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'s/persistent_peers = ""/persistent_peers="<peer_id>@<ip-address>:26656,<peer_id>@<ip-address>:26656,<peer_id>@<ip-address>:26656"/g\'')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$HOME")]),e._v("/.cerberus/config/config.toml\n")])])]),s("h3",{attrs:{id:"download-the-genesis-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-the-genesis-file"}},[e._v("#")]),e._v(" Download the Genesis file")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("The current genesis file is for development only. Once the chain goes live the genesis.json will be updated.")])]),e._v(" "),s("p",[e._v("To download the genesis file, you will want to run the commands below. The genesis file is required to join the validator node to the Cerberus blockchain.")]),e._v(" "),s("div",{staticClass:"language-bash: extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd $HOME/.cerberus/config/\nwget -O $HOME/.cerberus/config/genesis.json \\\nhttps://raw.githubusercontent.com/cerberus-zone/cerberus_genesis/main/genesis.json\n")])])]),s("h3",{attrs:{id:"create-keys-cerberus-wallet-address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-keys-cerberus-wallet-address"}},[e._v("#")]),e._v(" Create keys/Cerberus wallet address")]),e._v(" "),s("p",[e._v("The key-name can be whatever you would like it to be. You probably want to name it based on what the wallet address will be used for.")]),e._v(" "),s("p",[e._v("Create key command")]),e._v(" "),s("div",{staticClass:"language-bash: extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# To create new keypair - make sure you save the mnemonics!\ncerberusd keys add <key-name>\n")])])]),s("p",[e._v("Create key command example")]),e._v(" "),s("div",{staticClass:"language-bash: extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# To create new keypair - make sure you save the mnemonics!\ncerberusd keys add cerberus_validator_key\n")])])]),s("p",[e._v("The command above will generate mnemonics like most blockchain wallets. You will want to store this is in a safe place. We recommend against storing your mnemonics backup in cloud storage. The mnemonics will not be displayed again on the screen once you close the terminal window.")]),e._v(" "),s("h2",{attrs:{id:"starting-validator-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#starting-validator-node"}},[e._v("#")]),e._v(" Starting Validator Node")]),e._v(" "),s("h3",{attrs:{id:"starting-cerberus-validator-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#starting-cerberus-validator-node"}},[e._v("#")]),e._v(" Starting Cerberus Validator Node")]),e._v(" "),s("p",[e._v("You must run the command below to have your validator node sync with the Cerberus blockchain. This will start the sync process for you.")]),e._v(" "),s("div",{staticClass:"language-bash: extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cerberusd start\n")])])]),s("p",[e._v("Once you have successfully tested that your Cerberus validator will start, you will want to run it as a service to ensure it is always running. See instructions for "),s("em",[e._v("Running Cerberus as a Service (systemd)")])]),e._v(" "),s("h3",{attrs:{id:"running-cerberus-as-a-service-systemd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-cerberus-as-a-service-systemd"}},[e._v("#")]),e._v(" Running Cerberus as a Service (systemd)")]),e._v(" "),s("p",[e._v("This section will walk you through how to run your Cerberus validator node as a service.")]),e._v(" "),s("h4",{attrs:{id:"_1-creating-the-cerberusd-service-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-creating-the-cerberusd-service-file"}},[e._v("#")]),e._v(" 1. Creating the cerberusd.service file")]),e._v(" "),s("div",{staticClass:"language-bash: extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# creates the cerberusd.service file and puts it in text editor mode\nsudo touch /etc/systemd/system/cerberusd.service && \\\nsudo nano /etc/systemd/system/cerberusd.service\n")])])]),s("h4",{attrs:{id:"_2-add-service-configuration-info"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-add-service-configuration-info"}},[e._v("#")]),e._v(" 2. Add service configuration info")]),e._v(" "),s("p",[e._v("You will now add the info you see below to your cerberusd.service file and save the file.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[Unit]\nDescription=Cerberus Node\nAfter=network-online.target\n\n[Service]\nUser=ssm-user\nExecStart=/usr/local/bin/cerberusd start\nRestart=always\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\n")])])]),s("h4",{attrs:{id:"_3-start-cerberusd-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-start-cerberusd-service"}},[e._v("#")]),e._v(" 3. Start "),s("em",[e._v("cerberusd")]),e._v(" service")]),e._v(" "),s("p",[e._v("Next, run the commands below to ensure that the service restart when you restart the server. The second command starts the "),s("em",[s("strong",[e._v("cerberusd")])]),e._v(" service.")]),e._v(" "),s("div",{staticClass:"language-bash: extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# Enable service to start when server starts\nsudo systemctl enable cerberusd\n\n# Starts the cerberusd service\nsudo systemctl start cerberusd\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("If you started a new terminal window to run further commands, be sure you stopped the node when you ran cerberusd start. You would receive an error when you run sudo systemctl start cerberusd if you did not stop the node from running.")])]),e._v(" "),s("h2",{attrs:{id:"checking-cerberus-validator-node-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#checking-cerberus-validator-node-status"}},[e._v("#")]),e._v(" Checking Cerberus validator node status")]),e._v(" "),s("h3",{attrs:{id:"checking-cerberusd-service-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#checking-cerberusd-service-status"}},[e._v("#")]),e._v(" Checking cerberusd service status")]),e._v(" "),s("p",[e._v("You can check the status of your Cerberus node by running the following command.")]),e._v(" "),s("div",{staticClass:"language-bash: extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# checking the status of the cerberusd service\nsudo systemctl status cerberusd\n")])])]),s("p",[e._v("You should then a screen similar to the screen pictured below.")]),e._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"docs/status.png",target:"_blank"}},[s("img",{staticStyle:{width:"1000px"},attrs:{src:e.$withBase("docs/status.png"),alt:"Cerberus"}})])]),e._v(" "),s("h3",{attrs:{id:"viewing-cerberus-validator-logs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#viewing-cerberus-validator-logs"}},[e._v("#")]),e._v(" Viewing Cerberus validator logs")]),e._v(" "),s("p",[e._v("You can run the following command if you want to see a continuous stream of logs from your Cerberus node.")]),e._v(" "),s("div",{staticClass:"language-bash: extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# will show you a continous stream of logs from your node.\nsudo journalctl -u cerberusd -f\n")])])]),s("p",[e._v("After running the command above, you will see a screen like the one below.")]),e._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"docs/output.png",target:"_blank"}},[s("img",{staticStyle:{width:"1000px"},attrs:{src:e.$withBase("docs/output.png"),alt:"Cerberus"}})])]),e._v(" "),s("h2",{attrs:{id:"genesis-validator-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#genesis-validator-setup"}},[e._v("#")]),e._v(" Genesis Validator Setup")]),e._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("DO NOT submit a pull request for gentx unless you are already working directly with the Cerberus team.")]),e._v(" "),s("p",[e._v("Genesis Validators only - If you are not running a Genesis Validator, you can disregard the below steps. We will be working directly with genesis validators that were selected to coordinate the launch of the chain.")])]),e._v(" "),s("h3",{attrs:{id:"genesis-validators-additional-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#genesis-validators-additional-steps"}},[e._v("#")]),e._v(" Genesis Validators additional steps")]),e._v(" "),s("p",[e._v("This section will outline creating a gentx to run a genesis validator. After the chain goes live, this documentation will no longer be valid.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Previous Steps required")]),e._v(" "),s("p",[e._v("You should have completed all the steps outlined above before going through these steps.")])]),e._v(" "),s("h3",{attrs:{id:"creating-a-genesis-account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-genesis-account"}},[e._v("#")]),e._v(" Creating a genesis account")]),e._v(" "),s("p",[e._v("You will run the command below to create a genesis account. The example below shows creating a genesis account giving each validator 5000000000000ucrbrus.")]),e._v(" "),s("p",[e._v("Where "),s("em",[s("strong",[e._v("key-name")])]),e._v(" is you can use the key name that you created in the step "),s("a",{attrs:{href:"#create-keys-cerberus-wallet-address"}},[e._v("Create keys/Cerberus wallet address")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("cerberusd add-genesis-account "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("key-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" 5000000000000ucrbrus\n")])])]),s("h3",{attrs:{id:"create-the-gentx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-gentx"}},[e._v("#")]),e._v(" Create the gentx")]),e._v(" "),s("p",[e._v("The commend below will generate the gentx file needed to run as a genesis validator.")]),e._v(" "),s("h4",{attrs:{id:"commands-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commands-parameters"}},[e._v("#")]),e._v(" "),s("strong",[e._v("Commands Parameters")])]),e._v(" "),s("p",[s("em",[s("strong",[e._v("key-name")])]),e._v(" is the key-name/wallet that you will use to fund the validator")]),e._v(" "),s("p",[e._v("Where "),s("em",[s("strong",[e._v("key-name")])]),e._v(" is you can use the key name that you created in the step "),s("a",{attrs:{href:"#create-keys-cerberus-wallet-address"}},[e._v("Create keys/Cerberus wallet address")])]),e._v(" "),s("p",[s("em",[s("strong",[e._v("moniker")])]),e._v(" you will use the moniker you set in the step "),s("a",{attrs:{href:"#initiate-chain"}},[e._v("Initiate Chain")])]),e._v(" "),s("p",[s("em",[s("strong",[e._v("description")])]),e._v(" you will set a description for your Cerberus validator node.")]),e._v(" "),s("p",[s("em",[s("strong",[e._v("security-contact")])]),e._v(" you will add the security contact email address for your validator.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("cerberusd gentx "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("key-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" 4000000000000ucrbrus "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--chain-id cerberus-1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--moniker"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$MONIKER_NAME")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--commission-max-change-rate"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.05")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--commission-max-rate"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.20")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--commission-rate"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.05")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--details"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"XXXXXXXX"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--security-contact"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"XXXXXXXX"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--website"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"XXXXXXXX"')]),e._v("\n")])])]),s("h3",{attrs:{id:"submit-pull-request-with-gentx-and-peed-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#submit-pull-request-with-gentx-and-peed-id"}},[e._v("#")]),e._v(" Submit Pull Request with Gentx and peed id")]),e._v(" "),s("ol",[s("li",[e._v("Copy the contents of "),s("strong",[e._v("${HOME}/.cerberus/config/gentx/gentx-{peerID}.json")])]),e._v(" "),s("li",[e._v("Fork the repository")]),e._v(" "),s("li",[e._v("Create a file "),s("em",[s("strong",[e._v("gentx-{peerID}.json")])]),e._v(" under the "),s("em",[s("strong",[e._v("networks/mainnet/gentx")])]),e._v(" folder in the forked repo, paste the copied text into the file")]),e._v(" "),s("li",[e._v("Add "),s("em",[s("strong",[e._v("peer_id@ip_address:port")])]),e._v(" to the "),s("em",[s("strong",[e._v("/networks/mainnet/peers.txt")])]),e._v(" file")]),e._v(" "),s("li",[e._v("Create a Pull Request to the main branch of the repository")])])])}),[],!1,null,null,null);t.default=r.exports}}]);