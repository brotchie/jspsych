#!/bin/bash

# Relies on twisted's web module.
#  sudo apt-get install python-twisted-web

PORT=8080
TWISTD=twistd

$TWISTD -n web -p $PORT --path=.
