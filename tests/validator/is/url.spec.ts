/**
 *	MIT License
 *
 *	Copyright (c) 2019 - 2021 Toreda, Inc.
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:

 * 	The above copyright notice and this permission notice shall be included in all
 * 	copies or substantial portions of the Software.
 *
 * 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * 	SOFTWARE.
 *
 */

import {isUrl} from '../../../src/is/url';

const SAMPLE_URLS: Record<string, string[]> = {
	app: ['app://com.foo.bar/index.html'],
	doi: ['doi:10.1000/182'],
	mvn: ['mvn:http://user:password@repository.ops4j.org/maven2!org.ops4j.pax.web.bundles/service/0.2.0'],
	msnim: ['msnim:video?contact=nada@example.com', 'msnim:chat?contact=nada@example.com'],
	news: ['news:97149714'],
	payto: [
		'payto://iban/DE75512108001245126199?amount=EUR:200.0&message=hello',
		'payto://bic/SOGEDEFFXXX',
		'payto://void/?amount=EUR:10.5'
	],
	res: ['res://ieframe.dll/some-file.cpp'],
	rmi: ['rmi://localhost:1099/RMIService1', 'rmi://192.168.1.8:4478/RMIService2'],
	rsync: ['rsync://localhost:5333/path/to/thing', 'rsync://192.168.1.38:5333/path/to/thing'],
	rtmfp: ['rtmfp://192.168.1.44:7111/app/media.mp4'],
	rtmp: ['rtmp://192.168.1.44:8181/app/media.mp4'],
	s3: [
		's3://mybucket/puppy.jpg',
		's3://www.example.com/puppy.jpg',
		'http://s3.amazonaws.com/www.example.com/puppy.jpg'
	],
	secondlife: ['secondlife:///app/agent/3d6000c8-6a0b-90ef-10d8-711652995cf0/pay'],

	session: ['session:help@root-level.store'],
	sgn: ['sgn://social-network.example.com/?ident=bob'],
	sip: ['sip:alice@atlanta.com?subject=project%20x&priority=urgent'],
	sips: [
		'sip:+1-212-555-1212:1234@gateway.com;user=phone',
		'sips:alice@atlanta.com?subject=project%20x&priority=urgent'
	],
	smb: ['smb://workgroup;user:password@server/share/folder/file.txt'],
	sms: ['sms:+15105550101?body=hello%20there', 'sms:+15105550101,+15105550102?body=hello%20there'],
	snmp: ['snmp://example.com//1.3.6.1.2.1.1.3', 'snmp://tester5@example.com:8161/bridge1;800002b804616263'],
	slack: ['slack://open?team=someteamhere'],
	soldat: ['soldat://127.0.0.1:23073/thatssecret!'],
	spotify: [
		'spotify:track:2jCnn1QPQ3E8ExtLe6INsx',
		'spotify:search:sometext',
		'spotify:track:5yEPxDjbbzUzyauGtnmVEC'
	],
	ssh: ['ssh://user:password@someserver.com:21'],
	steam: [
		'steam://AddNonSteamGame',
		'steam://browsemedia',
		'steam://connect/:27015',
		'steam://connect/192.168.2.1:27015',
		'steam://connect/dns.server.com',
		'steam://flushconfig/',
		'steam://friends/',
		'steam://guestpasses/',
		'steam://hardwarepromo/',
		'steam://musicplayer/decreasevolume',
		'steam://musicplayer/increasevolume',
		'steam://musicplayer/pause',
		'steam://musicplayer/play',
		'steam://musicplayer/playnext',
		'steam://musicplayer/playprevious',
		'steam://musicplayer/togglemute',
		'steam://musicplayer/toggleplaypause',
		'steam://nav/downloads',
		'steam://nav/games',
		'steam://nav/library/collection/hidden',
		'steam://nav/media',
		'steam://nav/msuci',
		'steam://nav/tools',
		'steam://open/friends',
		'steam://open/bigpicture',
		'steam://open/activateproduct',
		'steam://open/console',
		'steam://open/games',
		'steam://open/games/details',
		'steam://open/games/grid',
		'steam://open/list',
		'steam://open/largegameslist',
		'steam://open/minigameslist',
		'steam://open/main',
		'steam://settings/account',
		'steam://settings/friends',
		'steam://settings/interface',
		'steam://settings/ingame',
		'steam://settings/downloads',
		'steam://settings/voice',
		'steam://stopstreaming',
		'steam://UpdateFirmware'
	],
	stuns: ['stun:stunserver.example.org'],
	tag: ['tag:<email/domainname>,<date>:<Item>'],
	teamspeak: ['teamspeak://127.0.0.1:7777/?param1=val1&param2=val2'],
	tel: ['tel:123-456-7890', 'tel:+1123-456-7890'],
	telnet: ['telnet://username:passworc@127.0.0.1:23/'],
	things: ['things:command?parameter1=value1&parameter2...'],
	turns: ['turns:example.server.org:8181?transport=udp]'],
	udp: [
		'udp://192.168.1.1:888/',
		'udp://192.168.1.100:40000?rtpmap=99;H264/90000&fmtp=96;sprop-parameter-sets="Z0IAKeKQFge2BqwYBBuHiRFQ,aM48gA=="',
		'udp://192.168.6.101:8003?rtpmap=112;raw/90000&fmtp=112;sampling=YCbCr-4:2:2;width=1280;height=750;depth=8',
		'udp://127.0.0.1:9005',
		'udp://224.1.1.1:9005/20.5.1.200',
		'udp://192.168.1.100:40000?rtpmap=99;H264/90000',
		'udp://192.168.0.149:7800?rtpmap=96;MPEG2',
		'udp://192.168.0.149:7800?rtpmap=97;JPEG/90000',
		'udp://127.0.0.1:5678?comp=H264',
		'udp://127.0.0.1:5678?comp=H264;seq-headers="0000000167428028F40481C8800000000168DE3C80" '
	],
	unreal: ['unreal://10.8.1.1:9999/', 'unreal://127.0.0.1:4444/', 'unreal://localhost:4444/'],
	urn: [
		'urn:epc:class:lgtin:4012345.012345.998877',
		'urn:epc:id:sgtin:0614141.112345.400',
		'urn:epc:id:sscc:0614141.1234567890',
		'urn:ietf:rfc:2648',
		'urn:isan:0000-0000-2CEA-0000-1-0000-0000-Y',
		'urn:isbn:0451450523',
		'urn:ISSN:0167-6423',
		'urn:lex:eu:council:directive:2010-03-09;2010-19-UE',
		'urn:lsid:zoobank.org:pub:CDC8D258-8F57-41DC-B560-247E17D3DC8C',
		'urn:microsoft:adfs:claimsxray',
		'urn:mpeg:mpeg7:schema:2001',
		'urn:mrn:iala:pub:g1143',
		'urn:mrn:iala:vts:ca:ecareg',
		'urn:mrn:iala:wwy:us:atl:chba:potri',
		'urn:nbn:de:bvb:19-146642',
		'urn:oid:2.16.840',
		'urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66'
	],
	ventrilo: ['ventrilo://192.168.1.4:6161/?parameter1=value1&<parameter2=value2'],
	'view-source': ['view-source:http://en.wikipedia.org/wiki/URI_scheme'],
	vnc: ['vnc://127.0.0.1:5550?params1=149174&param2=aaaaa'],
	wais: ['wais://192.168.1.1:8888/dbnamehere?search', 'wais://db.example.com:999/demodb/sometype/somepath'],
	webcal: ['webcal://example.com/calendar.ics'],
	ws: ['ws://www.example.com/socketserver', 'ws://127.0.0.1:5555/ws'],
	wss: ['wss://www.example.com/socketserver', 'ws://127.0.0.1:4411/ws', 'ws://localhost:44444/wss'],
	xcon: [],
	'xcon-userid': [],
	javascript: ['javascript:<javascript to execute>'],
	jdbc: [
		'jdbc:oracle:oci:@host:port(sid or [/service])?params...',
		'jdbc:sqlserver://serverNameinstanceName:portNumber;params...',
		'jdbc:mysql://host:port/database?params...'
	],
	wtai: ['wtai://wp/mc/+18165551212'],
	xri: ['xri://(mailto:john.doe@example.com)/favorites/home'],
	'xmlrpc.beep': [],
	'xmlrpc.beeps': [],
	ymsgr: ['ymsgr:sendIM?<screenname>'],
	'z39.50': ['z39.50r://z3950.example.com:2214/pmed?<docid>;esn=F;rs=SUTRS'],
	'z39-50s': ['z39.50s://z3950:2214/BLAC?<docid>;esn=F;rs=XML'],
	xmpp: ['xmpp:[<user>]@<host>[:<port>]/[<resource>][?<query>]'],
	trueconf: ['trueconf:[target][@server]&[param_1]=[value_1]&[...]&[param_n]=[value_n]'],
	zoommtg: [
		'zoommtg://zoom.us/join?confno=123456789&pwd=xxxx&zc=0&browser=chrome&uname=Betty',
		'zoommtg://zoom.us/start?browser=chrome&confno=123456789&zc=0&stype=100&sid=lBGPGzGdT8–2Yf3kjDY5gg&uid=lBGPGzGdT8–2Yf3kjDY5gg&token=xxxxxx&uname=Betty'
	],
	zoomus: [
		'zoomus://zoom.us/join?confno=123456789&pwd=xxxx&zc=0&browser=chrome&uname=Betty',
		'zoomus://zoom.us/start?browser=chrome&confno=123456789&zc=0&stype=100&sid=lBGPGzGdT8–2Yf3kjDY5gg&uid=lBGPGzGdT8–2Yf3kjDY5gg&token=xxxxxx&uname=Betty'
	]
};

const URL_GROUP_KEYS = Object.keys(SAMPLE_URLS);

describe('isUrl', () => {
	describe('Sample URLs', () => {
		for (const urlGroupKey of URL_GROUP_KEYS) {
			const urls = SAMPLE_URLS[urlGroupKey];

			describe(`scheme: ${urlGroupKey}`, () => {
				for (const url of urls) {
					it(`should return true for valid sample url '${url}'`, () => {
						expect(isUrl(url)).toBe(true);
					});
				}
			});
		}
	});
});
