const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
  name: 'boutique',
  description: 'Affiche les informations sur la boutique de Talia',
  execute(message, args) {
    const embed = new MessageEmbed()
      .setColor('#e67e22')
      .setTitle('Talia • Boutique')
      .setDescription('La boutique de **Talia** est https://taliamc.fr/shop\nAchètes sur la boutique afin de te procurer des **avantages** !')
      .setThumbnail('https://cdn.discordapp.com/attachments/1093653326240948257/1094003792359469186/f1c9db6437f02c913bd10bf9df87f337.png')
      .setFooter('© Talia - 2023', 'https://cdn.discordapp.com/attachments/1093653326240948257/1094003792359469186/f1c9db6437f02c913bd10bf9df87f337.png')
      .setTimestamp();
    
    const linkButton = new MessageButton()
      .setLabel('Visiter la boutique')
      .setStyle('LINK')
      .setURL('https://taliamc.fr/shop')
      .setEmoji('💸');
    
    const actionRow = new MessageActionRow().addComponents(linkButton);
    message.channel.send({ embeds: [embed], components: [actionRow] });
  },
};
