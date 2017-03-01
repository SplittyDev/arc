#!/usr/bin/env bash
BUILD_LIST="arc-core.proto"
function npm_ensure_package {
    if [ "$(npm list $1 2>/dev/null | awk -F' ' '{print $2}' | awk -F'@' '{print $1}' | xargs)" != "$1" ]
    then echo "Installing $1..."; npm install protobufjs &>/dev/null
    else echo "Found $1."; fi
}
function main {
    # Install packages
    npm_ensure_package "protobufjs"
    # Get binaries
    pbjs="node_modules/protobufjs/bin/pbjs"
    pbts="node_modules/protobufjs/bin/pbts"
    # Prepare build
    echo "Preparing build..."
    $pbjs &>/dev/null
    $pbts &>/dev/null
    # Build
    echo "Compiling protocols to javascript..."
    $pbjs -t static-module --es6 -w es6 -o proto.js "$BUILD_LIST"
    echo "Generating typescript definitions..."
    $pbts -o proto.d.ts proto.js
}
main
