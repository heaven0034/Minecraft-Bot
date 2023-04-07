const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ip',
  description: 'Affiche l\'ip du serveur',
  execute(message, args) {
    const embed = new MessageEmbed()
      .setColor('#e67e22')
      .setTitle('Talia • Adresse IP')
      .setDescription('L\'ip du serveur est **play.taliamc.fr**\nEn espèrant te voir bientôt en jeu !')
      .setThumbnail('https://cdn.discordapp.com/attachments/1093653326240948257/1094003792359469186/f1c9db6437f02c913bd10bf9df87f337.png')
      .setFooter('© Talia - 2023', 'https://cdn.discordapp.com/attachments/1093653326240948257/1094003792359469186/f1c9db6437f02c913bd10bf9df87f337.png')
      .setTimestamp();
    
    message.channel.send({ embeds: [embed] });
  },
};