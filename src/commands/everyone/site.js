const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
  name: 'site',
  description: 'Affiche le site de Talia',
  execute(message, args) {
    const embed = new MessageEmbed()
      .setColor('#e67e22')
      .setTitle('Talia • Boutique')
      .setDescription('Le site de **Talia** est https://taliamc.fr/\nN\'hésites pas à aller y faire un tour !')
      .setThumbnail('https://cdn.discordapp.com/attachments/1093653326240948257/1094003792359469186/f1c9db6437f02c913bd10bf9df87f337.png')
      .setFooter('© Talia - 2023', 'https://cdn.discordapp.com/attachments/1093653326240948257/1094003792359469186/f1c9db6437f02c913bd10bf9df87f337.png')
      .setTimestamp();
    
    const linkButton = new MessageButton()
      .setLabel('Visiter le site')
      .setStyle('LINK')
      .setURL('https://taliamc.fr');
    
    const actionRow = new MessageActionRow().addComponents(linkButton);
    message.channel.send({ embeds: [embed], components: [actionRow] });
  },
};
