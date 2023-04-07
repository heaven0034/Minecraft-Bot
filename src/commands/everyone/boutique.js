const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
  name: 'boutique',
  description: 'Affiche les informations sur la boutique',
  execute(message, args) {
    const embed = new MessageEmbed()
      .setColor('#e67e22')
      .setTitle('Grimm • Boutique')
      .setDescription('La boutique de **Grimm** est [Le lien de votre boutique](https://discord.com/channels/@me/117381264826302464)\nAchètes sur la boutique afin de te procurer des **avantages** !')
      .setThumbnail('https://cdn.discordapp.com/attachments/1093653326240948257/1094038456210034738/4601_github.png')
      .setFooter('© Grimm - 2023', 'https://cdn.discordapp.com/attachments/1093653326240948257/1094038456210034738/4601_github.png')
      .setTimestamp();
    
    const linkButton = new MessageButton()
      .setLabel('Visiter la boutique')
      .setStyle('LINK')
      .setURL('https://discord.com/channels/@me/117381264826302464')
      .setEmoji('💸');
    
    const actionRow = new MessageActionRow().addComponents(linkButton);
    message.channel.send({ embeds: [embed], components: [actionRow] });
  },
};
