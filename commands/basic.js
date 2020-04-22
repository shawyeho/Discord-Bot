module.exports = {
	name: 'basic',
    description: 'basic commands. test is a test run (replies with metion "success" if successful), and server shows basic server information',
    guildOnly: true,
    cooldown: 1,
    usage: '\'test\' or \'server\'',
	execute(message, args) {
		if (args == 'test')
        message.reply('success');
    else if (args == 'server')
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};