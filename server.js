require('dotenv').config()

const express = require('express');
const path = require('path');
const fs = require("fs");
const app = express();

app.use(express.static(path.join(__dirname, 'pages')));

app.get("/", (req, res) => {
  fs.readFile("./pages/index.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
})

// サーバーを起動
app.listen(3000, () => {
    console.log(`サーバーを開きました`);
  });
  
  if (process.env.TOKEN == undefined || process.env.TOKEN == "") {
    console.log("TOKENを設定してください");
  }

  require('./main.js')

// 1. ファイルの最初の方に EmbedBuilder が必要です
const { EmbedBuilder } = require('discord.js');

// 2. メッセージを受け取るイベントの中に以下を記述します
client.on('messageCreate', async message => {
    // 「!rules」と打たれた時に送信する設定
    if (message.content === '!rules') {
        
        const rulesEmbed = new EmbedBuilder()
            .setColor(0x0099FF) // 左側の線の色（青）
            .setTitle('The Deeds of Orion!')
            .setDescription('本サーバーは、すべての参加者が安心して交流できる場を目指しています。\n以下のルールを守れない場合、警告・ミュート・キック・BANなどの措置を行うことがあります。')
            .addFields(
                { name: '💡Rule1: 基本マナーについて', value: '1. **相手を尊重すること**\n2. **差別・ヘイト行為の禁止**' },
                { name: '🎉Rule2: チャット・発言に関するルール', value: '3. **チャンネル用途を守る**\n4. **スパム行為の禁止**\n5. **過度な内輪ノリの禁止**' },
                { name: '🎮Rule3: コンテンツ・投稿物のルール', value: '6. **NSFW・不適切コンテンツの禁止**\n7. **個人情報の共有禁止**\n8. **無断転載は禁止**' },
                { name: '🔖Rule4: 外部リンク・勧誘について', value: '9. **宣伝・勧誘の制限**\n10. **危険・違法サイトの共有禁止**' },
                { name: '🔈Rule5: VC（ボイスチャット）ルール', value: '11. **VCでのマナー**\n12. **録音・録画について**' },
                { name: '✉️Rule6: 運営・処罰について', value: '13. **管理者・モデレーターの指示は最優先**\n14. **処罰基準**' },
                { name: '📖Rule7: その他', value: '15. **ルールの変更について**\n16. **参加した時点で同意したものとみなします**' },
                { name: '📌 最後ににぎわんからのメッセージ', value: 'みんなで楽しく、安心して使えるサーバーを作るためのルールです。\n**「迷ったら控える」「相手の立場で考える」**を大切にしてください。' }
            )
            .setTimestamp()
            .setFooter({ text: 'にぎわんより' });

        await message.channel.send({ embeds: [rulesEmbed] });
    }
});
