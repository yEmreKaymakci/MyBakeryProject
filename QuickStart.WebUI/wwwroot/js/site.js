// Hizmetler kısmındaki Daha Fazla/Daha Az Göster butonu için
function toggleServices() {
    // Sadece 6. sıradan sonrasını temsil eden, bizim atadığımız gizli öğeleri bul
    var extraItems = document.querySelectorAll('.extra-service');
    var btn = document.getElementById('toggleServicesBtn');

    // Eğer buton yoksa veya öğe yoksa fonksiyonu durdur (hata almamak için)
    if (!btn || extraItems.length === 0) return;

    // İlk elemanın gizli (d-none) olup olmadığını kontrol et
    // Eğer gizliyse demek ki "Daha Fazla Göster"e basılmış, eğer görünürse "Daha Az Göster"e basılmıştır.
    var isCurrentlyHidden = extraItems[0].classList.contains('d-none');

    if (isCurrentlyHidden) {
        // GİZLİYDİ -> AÇIYORUZ
        extraItems.forEach(function (item) {
            item.classList.remove('d-none');
        });
        // Butonun yazısını "Daha Az Göster" yap
        btn.innerText = "Daha Az Göster";
    } else {
        // AÇIKTI -> GİZLİYORUZ
        extraItems.forEach(function (item) {
            item.classList.add('d-none');
        });
        // Butonun yazısını "Daha Fazla Göster" yap
        btn.innerText = "Daha Fazla Göster";

        // (İsteğe Bağlı) Kullanıcıyı tekrar hizmetler bölümünün en üstüne yavaşça kaydır
        // document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    }
}