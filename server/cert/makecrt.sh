#!/usr/bin/env bash
# Default options
OPT_BND=0         # bundle?
GEN_CRT=1         # generate key-pair?
GEN_PFX=0         # generate pfx bundle?
GEN_PEM_KEY=1     # generate extra pem key?
GEN_PEM_CRT=1     # generate extra pem cert?
LBL_PFX="bundle"  # bundle name
LBL_CRT="public"  # cert name
LBL_KEY="private" # key name
# Parse command-line arguments
for arg in "$@"; do
  case $arg in
    --key=*) LBL_KEY="${arg#*=}"; shift;;
    --crt=*) LBL_CRT="${arg#*=}"; shift;;
    --pfx) GEN_PFX=1; shift;;
    --pfx=*) GEN_PFX=1; LBL_PFX="${arg#*=}"; shift;;
    --no-pem) GEN_PEM_KEY=0; GEN_PEM_CRT=0; shift;;
    --no-pem-key) GEN_PEM_KEY=0; shift;;
    --no-pem-crt) GEN_PEM_CRT=0; shift;;
    --bundle)
      OPT_BND=1
      shift; LBL_KEY="$1"
      shift; LBL_CRT="$1"
      echo "Using key: $LBL_KEY"
      echo "Using crt: $LBL_CRT"
      shift
      ;;
    *) shift;;
  esac
done
# Generate key and certificate
if [[ $GEN_CRT = 1 && $OPT_BND = 0 ]]; then
  openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout $LBL_KEY.key -out $LBL_CRT.crt
fi
# Generate PEM key
if [[ $GEN_PEM_KEY = 1 && $OPT_BND = 0 ]]; then
  openssl rsa -in $LBL_KEY.key -text >$LBL_KEY.pem
fi
# Generate PEM certificate
if [[ $GEN_PEM_CRT = 1 && $OPT_BND = 0 ]]; then
  openssl x509 -inform PEM -in $LBL_CRT.crt > $LBL_CRT.pem
fi
# Generate PFX bundle
if [[ $GEN_PFX = 1 && $OPT_BND = 0 ]]; then
  openssl pkcs12 -inkey $LBL_KEY.pem -in $LBL_CRT.crt -export -out $LBL_PFX.pfx
elif [[ $OPT_BND = 1 ]]; then
  openssl pkcs12 -inkey $LBL_KEY -in $LBL_CRT -export -out bundle.pfx
fi