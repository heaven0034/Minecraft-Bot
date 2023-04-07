const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ip',
  description: 'Affiche l\'ip du serveur',
  execute(message, args) {
    const embed = new MessageEmbed()
      .setColor('#e67e22')
      .setTitle('Grimm • Adresse IP')
      .setDescription('L\'ip du serveur est **play.grimm.fr**\nEn espèrant te voir bientôt en jeu !')
      .setThumbnail('https://cdn.discordapp.com/attachments/1093653326240948257/1094038456210034738/4601_github.png')
      .setFooter('© Grimm - 2023', 'https://cdn.discordapp.com/attachments/1093653326240948257/1094038456210034738/4601_github.png')
      .setTimestamp();
    
    message.channel.send({ embeds: [embed] });
  },
};
