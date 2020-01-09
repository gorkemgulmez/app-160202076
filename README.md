# Hastane Randevu Sistemi

|Öğrenci Adı|Numarası|
|-----------|-----------|
|Görkem Gülmez|160202076|
|Ali Recep Karaca|160202053|
|Kübra Cebbar|160202025|
|Mehmet Fırat Kömürcü|160202028|
|Cihangir İlyas Baştan|160202019|

### Git komutları
**Clone**  
git clone --recurse-submodules -j8 https://github.com/2019-BLM441/app-160202076

**Pull**  
git pull --recurse-submodules

**Commit**  
cd your_submodule  
git add .  
git commit -a -m "commit in submodule"  
git push  

cd ../../..  
git add your_submodule  
git commit -m "Updated submodule"  

**Randevu  Modülü**  
Randevu modülünde hasta klinik,doktor ve saat seçerek randevu alabilir.Daha sonra alınan randevuyu değiştirebilir veya silebilir.Hasta randevularını randevularım sayfasından görüntüleyebilir.

**Ameliyat Modulü**  
Ameliyat modülünde hasta olacağı ameliyatı ameliyatlarım sayfasından takip edebilir. Ameliyatı yapacak doktor ameliyatlarını ekleyebilir,silebilir,güncelleyebilir veya kayıt edilen amliyatları listeleyebilir.

**İlaç Modülü**  
İlaç modülünde hasta doktorun onun için yazdığı ilaçları ilaçlarım sayfasından takip edebilir.İlacı verecek olan doktor yeni ilaç ekleyebilir, eklenen ilacı silebilir veya güncelleyebilir.

**Tahlil Modülü**
Tahlil modülünde hasta yaptırdığı tahlillerin ne olduğunu tahlillerim ekranından takip edebilir. Doktor her bir hastası için istediği tahlilllerin sonuçlarını ve tahlilllerin türünü görebilir.Yeni tahlil istekleri oluşturabilir.

