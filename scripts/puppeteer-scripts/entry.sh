#!/bin/sh

# start cron
/usr/bin/crontab /settings/crontab.txt
crond -f

