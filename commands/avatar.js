module.exports = {
	name: 'avatar',
    description: 'shows profile icon',
    guildOnly: true,
    cooldown: 1,
    aliases: ['icon', 'pic'],
    //usage: ['command name'],
    execute(message, args) {
        if (!message.mentions.users.size) { //no other users mentioned
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
        else 
        { const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });
        message.channel.send(avatarList);
        }
    },
}