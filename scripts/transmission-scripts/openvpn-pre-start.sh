#!/bin/sh
#MAINIP=172.17.0.3
#GATEWAYIP=172.17.0.1
#SUBNET=172.17.0.0/24
MAINIP=$(ifconfig eth0 | grep 'inet'| awk '{print $2}')
GATEWAYIP=${MAINIP%.*}.1
SUBNET=${MAINIP%.*}.0/24

sudo ip rule add from $MAINIP table 128
sudo ip route add table 128 to $SUBNET dev eth0
sudo ip route add table 128 default via $GATEWAYIP

