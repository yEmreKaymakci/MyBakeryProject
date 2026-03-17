<div align="center">
  <h1>🥐 MyBakery</h1>
  <p>
    <b>AkademiQ AI Business School eğitimi kapsamında geliştirilmiş modern ve dinamik bir fırın/pastane web projesi.</b>
  </p>
  <br>
</div>

<p align="center">
  <a href="#proje-hakkında">Proje Hakkında</a> •
  <a href="#kullanılan-teknolojiler">Kullanılan Teknolojiler</a> •
  <a href="#kurulum">Kurulum</a> •
  <a href="#proje-görselleri">Proje Görselleri</a>
</p>

## 📖 Proje Hakkında

**MyBakery**, bir fırın veya pastanenin ürünlerini, hizmetlerini ve iletişim bilgilerini şık bir şekilde müşterilerine sunmasını sağlayan web uygulamasıdır. İçerik yönetim özellikleriyle dinamik olarak menü, hakkımızda yazısı, çalışanlar ve slider gibi kısımlar güncellenebilir. Kullanıcı dostu arayüzü ve güçlü altyapısıyla işletmelerin dijital vitrini olmak için tasarlanmıştır.

> **Not:** Bu proje, **AkademiQ AI Business School** eğitimi kapsamında geliştirilmiştir.

---

## 🚀 Kullanılan Teknolojiler

Proje, güncel teknolojiler kullanılarak modern mimari standartlarına uygun olarak inşa edilmiştir:

**Backend:**
- **.NET Core 6 / 8** (ASP.NET Core Web API & MVC)
- **C#**
- **Entity Framework Core** (ORM)
- **MSSQL** (Veritabanı)
- Katmanlı Mimari (N-Tier Architecture)

**Frontend:**
- **HTML5, CSS3, JavaScript**
- **Bootstrap** (Responsive Tasarım)
- Dinamik Razor Pages (.cshtml)

---

## 🛠️ Kurulum

Projeyi yerel ortamınızda (localhost) çalıştırmak için aşağıdaki adımları izleyebilirsiniz.

### Ön Koşullar
- [Visual Studio 2022](https://visualstudio.microsoft.com/)
- [.NET SDK](https://dotnet.microsoft.com/download)
- [SQL Server](https://www.microsoft.com/tr-tr/sql-server/sql-server-downloads)

### Kurulum Adımları

1. **Projeyi Klonlayın:**
   `git clone https://github.com/kullaniciadiniz/MyBakery.git`
   `cd MyBakery`

2. **Veritabanı Bağlantısını Güncelleyin:**
   [MyBakery.WepApi/Context/MyBakeryContext.cs](cci:7://file:///c:/Users/lenovo/source/repos/MyBakery/MyBakery.WepApi/Context/MyBakeryContext.cs:0:0-0:0) içerisindeki connection string alanını kendi SQL sunucunuza (Server=...) göre düzenleyin.

3. **Veritabanını Oluşturun:**
   Visual Studio'da **Package Manager Console** (PM) penceresini açın. Default project olarak `MyBakery.WepApi` seçili olduğundan emin olun ve aşağıdaki komutu çalıştırarak tabloları oluşturun:
   `Update-Database`

4. **Projeyi Çalıştırın:**
   Hem API hem de WebUI projelerinin ayağa kalkması gereklidir. Visual Studio'da Çözüm (Solution) ismine sağ tıklayıp "Set Startup Projects..." diyerek "Multiple startup projects" seçeneğini aktif edin. `MyBakery.WepApi` ve `MyBakery.WebUI` için "Start" seçeneğini işaretleyin ve projeyi başlatın (F5).

<br>
<div align="center">
  Eğitim sürecindeki destekleri için <b>AkademiQ AI Business School</b>'a teşekkürler! 🎓
</div>

---

## 📸 Proje Görselleri

*(Bu kısımdaki görselleri proje içinden aldığınız ekran görüntüleri ile repo'nuzdaki `images` klasörünüze yükleyerek güncelleyebilirsiniz)*

### 🏠 Ana Sayfa (WebUI)

<div align="center">
  
  <p><strong>Ana Sayfa Genel Bakış</strong></p>
  <img src="images/placeholder-home-1.jpg" alt="Ana Sayfa 1" width="800">
  <br><br>

  <p><strong>Hizmetler ve Menü Kısmı</strong></p>
  <img src="images/placeholder-home-2.jpg" alt="Ana Sayfa 2" width="800">
  <br><br>

  <p><strong>Hakkımızda ve Ekip Kısmı</strong></p>
  <img src="images/placeholder-home-3.jpg" alt="Ana Sayfa 3" width="800">

</div>

---

### ⚙️ Yönetim Paneli (Admin)

<div align="center">
  
  <p><strong>Admin Dashboard (Özet Ekranı)</strong></p>
  <img src="images/placeholder-admin-1.jpg" alt="Admin Paneli 1" width="800">
  <br><br>

  <p><strong>Ürün/Hizmet Ekleme Sayfası</strong></p>
  <img src="images/placeholder-admin-2.jpg" alt="Admin Paneli 2" width="800">
  <br><br>

  <p><strong>Gelen Mesajlar/İletişim Paneli</strong></p>
  <img src="images/placeholder-admin-3.jpg" alt="Admin Paneli 3" width="800">

</div>
