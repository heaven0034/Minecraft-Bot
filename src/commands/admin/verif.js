const { MessageEmbed, MessageButton, MessageActionRow, Permissions } = require('discord.js');

module.exports = {
  name: 'verif',
  description: 'Envoie un embed de vérification',
  async execute(message, args) {
    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      const erreurEmbed = new MessageEmbed()
        .setColor('#FF0000')
        .setDescription("Vous n'avez pas accès à cette commande.");
      return message.reply({ embeds: [erreurEmbed], ephemeral: true });
    }

    const verif = new MessageEmbed()
      .setColor('#e67e22')
      .setTitle('VERIFICATION | CAPTCHA')
      .setDescription('**Bienvenue parmi nous !**\nPour accéder au reste du Discord, coche la réaction ci-dessous.\n\n📜 \`JOUER SUR TALIA C\'EST :\`\n\n・Jouer sur un serveur innovant en 1.8.9\n・Profiter de nombreuses nouveautés et mises à jour régulières\n・Évoluer dans un environnement anime, fluide et divertissant\n\n**Bon jeu sur play.taliamc.fr !**')
      .setThumbnail('https://cdn.discordapp.com/attachments/1093653326240948257/1094003792359469186/f1c9db6437f02c913bd10bf9df87f337.png')
      .setFooter('© Talia - 2023', 'https://cdn.discordapp.com/attachments/1093653326240948257/1094003792359469186/f1c9db6437f02c913bd10bf9df87f337.png')
      .setTimestamp();

      const rolebtn = new MessageButton()
      .setCustomId('role')
      .setLabel('Vérification')
      .setStyle('PRIMARY');

      const row = new MessageActionRow().addComponents(rolebtn);

    const messageSent = await message.channel.send({ embeds: [verif], components: [row], ephemeral: false })
      .catch(err => {
        console.error(err);
        const erreurEmbed = new MessageEmbed()
          .setColor('#FF0000')
          .setDescription("Une erreur s'est produite lors de l'envoi de l'embed !");
        message.channel.send({ embeds: [erreurEmbed] });
      });

    const roleId = '1094016714229944390'; // Mettre l'id du rôle Membre
    const filter = i => i.customId === 'role';
    const collector = message.channel.createMessageComponentCollector({ filter, time: 60000 });

    collector.on('collect', async interaction => {
      const member = interaction.member;
      try {
        await member.roles.add(roleId);
        interaction.reply({ content: 'Rôle ajouté avec succès !', ephemeral: true });
      } catch (err) {
        console.error(err);
        interaction.reply({ content: 'Une erreur est survenue lors de l\'ajout du rôle.', ephemeral: true });
      }
    });

    collector.on('end', collected => {
      console.log(`Interactions sur le bouton "Obtenir le rôle" collectées : ${collected.size}`);
    });
  },
};
