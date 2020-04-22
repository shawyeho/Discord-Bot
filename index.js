function runPyScript(input){
    var jqXHR = $.ajax({
        type: "POST",
        url: "/login",
        async: false,
        data: { mydata: input }
    });

    return jqXHR.responseText;
}

function dostuff(response)
{
    message.reply(response);
}

function IDtoChamp(id){
    switch(id) {
case 1:
    return "Annie";
case 2:
    return "Olaf";
case 3:
    return "Galio";
case 4:
    return "Twisted Fate";
case 5:
    return "Xin Zhao";
case 6:
    return "Urgot";
case 7:
    return "LeBlanc";
case 8:
    return "Vladimir";
case 9:
    return "Fiddlesticks";
case 10:
    return "Kayle";
case 11:
    return "Master Yi";
case 12:
    return "Alistar";
case 13:
    return "Ryze";
case 14:
    return "Sion";
case 15:
    return "Sivir";
case 16:
    return "Soraka";
case 17:
    return "Teemo";
case 18:
    return "Tristana";
case 19:
    return "Warwick";
case 20:
    return "Nunu";
case 21:
    return "Miss Fortune";
case 22:
    return "Ashe";
case 23:
    return "Tryndamere";
case 24:
    return "Jax";
case 25:
    return "Morgana";
case 26:
    return "Zilean";
case 27:
    return "Singed";
case 28:
    return "Evelynn";
case 29:
    return "Twitch";
case 30:
    return "Karthus";
case 31:
    return "Cho'Gath";
case 32:
    return "Amumu";
case 33:
    return "Rammus";
case 34:
    return "Anivia";
case 35:
    return "Shaco";
case 36:
    return "Dr. Mundo";
case 37:
    return "Sona";
case 38:
    return "Kassadin";
case 39:
    return "Irelia";
case 40:
    return "Janna";
case 41:
    return "Gangplank";
case 42:
    return "Corki";
case 43:
    return "Karma";
case 44:
    return "Taric";
case 45:
    return "Veigar";
case 48:
    return "Trundle";
case 50:
    return "Swain";
case 51:
    return "Caitlyn";
case 53:
    return "Blitzcrank";
case 54:
    return "Malphite";
case 55:
    return "Katarina";
case 56:
    return "Nocturne";
case 57:
    return "Maokai";
case 58:
    return "Renekton";
case 59:
    return "Jarvan IV";
case 60:
    return "Elise";
case 61:
    return "Orianna";
case 62: //"MonkeyKing"
    return "Wukong";
case 63:
    return "Brand";
case 64:
    return "Lee Sin";
case 67:
    return "Vayne";
case 68:
    return "Rumble";
case 69:
    return "Cassiopeia";
case 72:
    return "Skarner";
case 74:
    return "Heimerdinger";
case 75:
    return "Nasus";
case 76:
    return "Nidalee";
case 77:
    return "Udyr";
case 78:
    return "Poppy";
case 79:
    return "Gragas";
case 80:
    return "Pantheon";
case 81:
    return "Ezreal";
case 82:
    return "Mordekaiser";
case 83:
    return "Yorick";
case 84:
    return "Akali";
case 85:
    return "Kennen";
case 86:
    return "Garen";
case 89:
    return "Leona";
case 90:
    return "Malzahar";
case 91:
    return "Talon";
case 92:
    return "Riven";
case 96:
    return "Kog'Maw";
case 98:
    return "Shen";
case 99:
    return "Lux";
case 101:
    return "Xerath";
case 102:
    return "Shyvana";
case 103:
    return "Ahri";
case 104:
    return "Graves";
case 105:
    return "Fizz";
case 106:
    return "Volibear";
case 107:
    return "Rengar";
case 110:
    return "Varus";
case 111:
    return "Nautilus";
case 112:
    return "Viktor";
case 113:
    return "Sejuani";
case 114:
    return "Fiora";
case 115:
    return "Ziggs";
case 117:
    return "Lulu";
case 119:
    return "Draven";
case 120:
    return "Hecarim";
case 121: //Khazix
    return "Kha'Zix"
case 122:
    return "Darius";
case 126:
    return "Jayce";
case 127:
    return "Lissandra";
case 131:
    return "Diana";
case 133:
    return "Quinn";
case 134:
    return "Syndra";
case 136:
    return "Aurelion Sol";
case 141:
    return "Kayn";
case 142:
    return "Zoe";
case 143:
    return "Zyra";
case 145:
    return "Kai'Sa";
case 150:
    return "Gnar";
case 154:
    return "Zac";
case 157:
    return "Yasuo";
case 161:
    return "Vel'Koz";
case 163:
    return "Taliyah";
case 164:
    return "Camille";
case 201:
    return "Braum";
case 202:
    return "Jhin";
case 203:
    return "Kindred";
case 222:
    return "Jinx";
case 223:
    return "Tahm Kench";
case 235:
    return "Senna";
case 236:
    return "Lucian";
case 238:
    return "Zed";
case 240:
    return "Kled";
case 245:
    return "Ekko";
case 246:
    return "Qiyana";
case 254:
    return "Vi";
case 266:
    return "Aatrox";
case 267:
    return "Nami";
case 268:
    return "Azir";
case 350:
    return "Yuumi";
case 412:
    return "Thresh";
case 420:
    return "Illaoi";
case 421:
    return "Rek'Sai";
case 427:
    return "Ivern";
case 429:
    return "Kalista";
case 432:
    return "Bard";
case 497:
    return "Rakan";
case 498:
    return "Xayah";
case 516:
    return "Ornn";
case 517:
    return "Sylas";
case 518:
    return "Neeko";
case 523:
    return "Aphelios";
case 555:
    return "Pyke";
case 875:
    return "Sett";
default:
    return "404"; //not found
    }
return;
}

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
const fs = require('fs'); //node's native file system module
const Discord = require('discord.js');
const fetch = require('node-fetch');
const { prefix, token, riotapi } = require('./config.json');
//const config = require('./config.json');
const client = new Discord.Client ();
const querystring = require('querystring');
const ytdl = require('ytdl-core');
client.commands = new Discord.Collection();
var {PythonShell} = require('python-shell');

//dynamically retrieve command files
//filter removes all non .js files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

//run this on log first time when ready
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
    if ((!message.content.startsWith(prefix) || message.author.bot) && (!message.content.startsWith('-play'))) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //args is an array containing all the arguments for the command,
    //command is a string with the command
    /*
    if (command === 'test')
        message.reply('success');
    else if (command === 'server')
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    */
    //if (command === 'test' || command == 'server')
    //client.commands.get('basic').execute(message, args);
    
    if (command === 'play' || command === 'ytdl')
    {
		if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

        if (args.length > 1)
            {
                message.channel.send("Usage: !play [youtube-url]");
                return;
            }

		voiceChannel.join().then(connection => {
            const stream = ytdl(args[0], { filter: 'audioonly', highWaterMark: 1<<25, });
            
            //setTimeout(() => {
			const dispatcher = connection.play(stream);
            //}, 5000);
			dispatcher.on('end', () => voiceChannel.leave());
        });
    }

    if (command == 'play' || command == 'ytdl')
        return;

    if (command === 'ml')
    {
        var pyshell = new PythonShell('./test.py');
        var arr = [];
        arr.push(args[0]); //arg is an array of strings
        pyshell.send(JSON.stringify(arr));
        pyshell.on('message', function (mess)
        {
            console.log(mess);
            message.channel.send(mess);
        }
        );
        pyshell.end(function (err) {
            if (err) {
                throw err;
            };
            console.log('finished');
        });
        return;
    }

    if (command == 'stop')
        {
            const voiceChannel = message.member.voice.channel;
            voiceChannel.leave();
            return;
        }
    
    if (command === 'lol')
    {
        if (!args.length) {
            return message.channel.send('Please specify username only');
        }
        const query = args.join('%20')
        //const query = querystring.stringify();
        //console.log(query);
        ///console.log(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${query}?api_key=`+ riotapi);
        const { id, accountId, puuid, name, profileIcondId, revisionDate, summonerLevel } = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${query}?api_key=` + riotapi).then(response => response.json());
        //console.log(id);
        if (id == null)
        {
            message.channel.send("Can't retrieve summoner. This may be due to Riot API problems, an expired API key, or an incorrect summoner name. Please check that your summoner name is spelled correctly.");
            return;
        }
        message.channel.send("Your summoner level is: " + summonerLevel);

        const val = await fetch("https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" + id + "?api_key=" + riotapi).then(response => response.json());
        //console.log(val[0]);
        message.channel.send("Your top 5 masteries are:")
        for (i = 0; i < 5; i++)
        {
            message.channel.send(IDtoChamp(val[i].championId)+ ": " + val[i].championPoints);
        }

        return;
    }
    
    /*
    if (command === 'gw2')
    {
        const {pve, pvp, wvw, fractals, special} =  await fetch('https://api.guildwars2.com/v2/achievements/daily').then(response => response.json());
        message.channel.send(pve[0].id);
        return;
    }
    */

    if (command === 'cat'){
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        message.channel.send(file);
        return;
    }
    
    if (command === 'urban') {
        if (!args.length) {
          return message.channel.send('You need to supply a search term!');
        }
      
          const query = querystring.stringify({ term: args.join(' ') });
      
        const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
    
        if (!list.length) {
            return message.channel.send(`No results found for **${args.join(' ')}**.`);
        }

        message.channel.send(list[0].definition);
        /*
        const [answer] = list;

        const embed = new MessageEmbed()
	        .setColor('#EFFF00')
	        .setTitle(answer.word)
	        .setURL(answer.permalink)
	        .addFields(
	        	{ name: 'Definition', value: trim(answer.definition, 1024) },
	        	{ name: 'Example', value: trim(answer.example, 1024) },
	        	{ name: 'Rating', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` }
	        );

        message.channel.send(embed);
                */

        return;
    
    }

    const commobj = client.commands.get(command)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    //return if no such command
    if (!commobj)
    {
    message.channel.send('No such command');
    return;
    }

    if (commobj.guildOnly && message.channel.type !== 'text') {
        return message.reply('I can\'t execute that command inside DMs!');
    }
    
    if (!cooldowns.has(commobj)) { //command not on cooldown
        cooldowns.set(commobj.name, new Discord.Collection())
    }

    const now = Date.now();
    const timestamps = cooldowns.get(commobj.name);
    const cooldownTime = (commobj.cooldown || 1) *1000; //in ms

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownTime;
    
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
        }
    }
    
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownTime);

    //otherwise...
    try {
        //client.commands.get(command).execute(message, args);
        commobj.execute(message,args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

//login. Change to token later in config to hide
client.login(token); //instead of config.token, since it was extracted
