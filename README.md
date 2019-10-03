# vsftpd-transmission-openvpn with puppeteer for rasberry pi

### create .env file
```bash
touch transmission-openvpn.env
touch vsftpd.env
touch .env
```

### add jp-tok.ovpn file @ /transmission-openvpn/openvpn/privatevpn
```
cd transmission-openvpn/openvpn/privatevpn
cp london-uk.ovpn jp-tok.ovpn

#edit jp-tok.ovpn first line 
remote uk-lon2.privatevpn.com 1194 udp -> remote jp-tok.privatevpn.com 1194 udp
```

### edit .env file
```
FTP_VOLUMES=<ftp mount directory>
# ex: /home/pi/hdd/media/

TRANSMISSION_VOLUMES=<transmission mount directory>
# ex: /home/pi/hdd/
```

### edit transmission.env

```
OPENVPN_PROVIDER=PRIVATEVPN
OPENVPN_CONFIG=jp-tok
OPENVPN_USERNAME=<email>
OPENVPN_PASSWORD=<password>
```

### edit vsftpd.env
```
FTP_USER=<username>
FTP_PASS=<password>
PASV_ADDRESS=<ifconfig eth0 inet address>
LOCAL_NETWORK=192.168.0.0/24
```

### start
```bash
docker-compose up -d 
```

<br>
<br>

## using at non rasberry pi system

### edit docker-compose.yml
```
@transmission-openvpn - build - dockerfile:
 - Dockerfile.armhf -> Dockerfile
 
```
### edit transmission-openvpn Dockerfile - add this command to install nodejs
```
    && curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash - \
    && sudo apt-get install -y nodejs \
```

<br>
<br>

## todo
```
자동분류, 자동다운로드 파일 사용하기 더 편하게 만들기.

```
