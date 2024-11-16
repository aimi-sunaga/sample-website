// news.js
const newsItems = [
    { date: '2023-10-01', title: '採用情報', content: '新しい採用情報を公開しました。', topic: '採用情報' },
    { date: '2023-09-15', title: 'news', content: '最新のニュースをお届けします。', topic: 'news' },
    { date: '2023-09-01', title: 'service', content: '新しいサービスを開始しました。', topic: 'service' },
    { date: '2023-08-01', title: '採用情報', content: '採用イベントを開催します。', topic: '採用情報' },
    { date: '2023-07-15', title: 'news', content: '重要なニュースが発表されました。', topic: 'news' },
    { date: '2023-06-01', title: 'service', content: 'サービスの改善についてお知らせします。', topic: 'service' }
];

// ニュースアイテムをリストに追加する共通関数
function appendNewsItem(newsList, item) {
    const li = document.createElement('li');
    const formattedDate = item.date.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/, (match, year, month, day) => {
        return `${year}年${String(month).padStart(2, '0')}月${String(day).padStart(2, '0')}日`;
    });

    // トピックに応じたクラスを設定
    let topicClass = '';
    switch (item.topic) {
        case '採用情報':
            topicClass = 'topic-recruitment';
            break;
        case 'news':
            topicClass = 'topic-news';
            break;
        case 'service':
            topicClass = 'topic-service';
            break;
    }

    // 日時とトピックを同じ段に、内容を次の段に表示
    li.innerHTML = `
        <div>
            <span class="date">${formattedDate}</span> - <span class="topic ${topicClass}">${item.title}</span>
        </div>
        <div class="content">${item.content}</div>
    `;
    newsList.appendChild(li);
}

// ニュースを表示する関数
function displayNews(listId) {
    const newsList = document.getElementById(listId);
    newsItems.forEach(item => {
        appendNewsItem(newsList, item); // 共通関数を呼び出す
    });
}

// 直近の3つのニュースを表示する関数
function displayRecentNews() {
    const recentNewsList = document.getElementById('news-summary-list');
    const recentItems = newsItems.slice(0, 3); // 直近の3つを取得
    recentItems.forEach(item => {
        appendNewsItem(recentNewsList, item); // 共通関数を呼び出す
    });
}

// ページが読み込まれたときにニュースを表示
document.addEventListener('DOMContentLoaded', () => {
    // index.html の場合
    if (document.getElementById('news-summary-list')) {
        displayRecentNews(); // 概要を表示
    }
    // news.html の場合
    if (document.getElementById('news-detail-list')) {
        displayNews('news-detail-list'); // 詳細を表示
    }
});




