const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
  name: 'site',
  description: 'Affiche le site du serveur',
  execute(message, args) {
    const embed = new MessageEmbed()
      .setColor('#e67e22')
      .setTitle('Grimm • Boutique')
      .setDescription('Le site de **Grimm** est https://grimm.fr/\nN\'hésites pas à aller y faire un tour !')
      .setThumbnail('https://cdn.discordapp.com/attachments/1093653326240948257/1094038456210034738/4601_github.png')
      .setFooter('© Grimm - 2023', 'https://cdn.discordapp.com/attachments/1093653326240948257/1094038456210034738/4601_github.png')
      .setTimestamp();
    
    const linkButton = new MessageButton()
      .setLabel('Visiter le site')
      .setStyle('LINK')
      .setURL('https://discord.com/channels/@me/1094032545508765756')
      .setEmoji('🌐');
    
    const actionRow = new MessageActionRow().addComponents(linkButton);
    message.channel.send({ embeds: [embed], components: [actionRow] });
  },
};
