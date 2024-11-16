let currentPage = 0; // 現在のページを追跡
const totalPages = 3; // 総ページ数（必要に応じて変更）



// ポップアップ機能を追加
const images = document.querySelectorAll('.interview-image');
images.forEach(image => {
    image.addEventListener('click', () => {
        const popupId = image.getAttribute('data-popup');
        openPopup(popupId);
    });
});

// ポップアップを開く関数
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    const image = document.querySelector(`img[data-popup="${popupId}"]`); // クリックした画像を取得
    const popupImage = document.getElementById('popup-image'); // ポップアップ内の画像要素を取得

    if (popup && image) {
        popupImage.src = image.src; // クリックした画像のソースをポップアップ内に設定
        popup.style.display = 'flex'; // ポップアップを表示
    }
}

// ポップアップを閉じる関数
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'none'; // ポップアップを非表示
    }
}

// スクロール機能を追加
const imageContainer = document.querySelector('.image-container');

function scrollImageContainer(direction) {
    const scrollAmount = imageContainer.clientWidth * 0.5; // スクロール量をコンテナの幅の80%に設定
    imageContainer.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount, // 左矢印で左に、右矢印で右に動く
        behavior: 'smooth' // スムーズなスクロール
    });
}

// 矢印ボタンにイベントリスナーを追加
document.querySelector('.left-arrow').addEventListener('click', () => scrollImageContainer('left'));
document.querySelector('.right-arrow').addEventListener('click', () => scrollImageContainer('right'));

// スクロールバーの動きに合わせてボタンの状態を更新
imageContainer.addEventListener('scroll', () => {
    const scrollLeft = imageContainer.scrollLeft;
    const scrollWidth = imageContainer.scrollWidth;
    const clientWidth = imageContainer.clientWidth;

    // 左矢印の表示状態
    document.querySelector('.left-arrow').style.display = scrollLeft > 0 ? 'block' : 'none';
    
    // 右矢印の表示状態
    document.querySelector('.right-arrow').style.display = scrollLeft < (scrollWidth - clientWidth) ? 'block' : 'none';
});
