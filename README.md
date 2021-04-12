# Personal Configurations

This repository contains the various files I use to configure my coding setup including my eslint settings, extensions lists, keyboard shortcuts etc. Feel free to take a look and integrate them into your current IDE/development enviornment. I have provided some brief documentation regarding each file below

## Eslint Notes

- If you used `create-react-app` for your project delete the default eslint config in your project's package.json
- If you used `npm init Gatsby` delete any eslint related folders in node_modules

## Snippet.json

Copy and paste my snippets.json file into your javascript.json file (can be found by clicking on the gear in the bottom left of VScode, selecting User Snippets and then searching for javascript.json)

Each snippet is defined under a snippet name and has a prefix, body and description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
- $1, $2 for tab stops
- $0 for the final cursor position
- ${1:label}, ${2:another} for placeholders. Placeholders with the

## Settings.json

Copy and paste the contents of my settings.json file into yours

## Keybindings.json

Open your keyboard shortcuts json file and copy and paste the contents of my keybindings.json file into yours

## Extensions.txt

For mac/linux users run the following command in your terminal

`while read line; do code --install-extension "$line";done < vscode-extensions.txt`

## Gitty.js

This file is used to automatically add, commit and push code to a repository (note the branch name I have used is "master"). To use the git.js add it to your project's root and add a script to your package.json with "node gitty.js". Then use `npm run <script_name> gitty --<message>` to use it.

## globalPackages.txt

This text file contains all the globally installed packages I have on my computer (used npm). Most of them are primarily for javascript development.
